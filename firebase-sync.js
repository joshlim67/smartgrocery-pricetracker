// ==========================================================================
// FIREBASE REALTIME MULTI-USER ISOLATED SYNC (ONSNAPSHOT PER ACCOUNT)
// ==========================================================================
// - Guest Mode (belum login): TIDAK ADA data yang disimpan ke Firebase Cloud.
// - Authenticated User (sudah login): Setiap akun memiliki dokumen Firestore sendiri
//   berdasarkan User ID / Email unik ('users_grocery_data/{userId}').
// - Realtime Snapshot: Perubahan tersinkronisasi instan multi-perangkat via onSnapshot.
// ==========================================================================

import { initializeApp, getApps, getApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { 
  getFirestore, 
  doc, 
  onSnapshot, 
  setDoc,
  getDoc
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

import { firebaseConfig as fileConfig } from './firebase-config.js';

const STORAGE_KEY_FIREBASE_CONFIG = 'sg_firebase_config_v1';
const STORAGE_KEY_CURRENT_USER = 'sg_current_user_v1';
const USERS_COLLECTION = 'users_grocery_data';

// ID unik tab/perangkat saat ini agar tidak terjadi infinite loop saat menerima update dari diri sendiri
const CLIENT_ID = 'device_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now();

let firestoreDb = null;
let unsubscribeSnapshot = null;
let currentSubscribedUserId = null;
let isApplyingRemoteChange = false;
let debounceTimer = null;

let syncStatus = {
  connected: false,
  statusText: 'Mode Tamu (Belum Login - Cloud Nonaktif)',
  state: 'disconnected', // 'connected' | 'disconnected' | 'syncing' | 'error'
  lastSync: null,
  errorMsg: ''
};

// Ambil konfigurasi: prioritaskan file firebase-config.js, jika kosong gunakan localStorage
function getEffectiveConfig() {
  if (fileConfig && fileConfig.apiKey && fileConfig.projectId) {
    return { ...fileConfig, source: 'file' };
  }
  try {
    const local = localStorage.getItem(STORAGE_KEY_FIREBASE_CONFIG);
    if (local) {
      const parsed = JSON.parse(local);
      if (parsed.apiKey && parsed.projectId) {
        return { ...parsed, source: 'local' };
      }
    }
  } catch (e) {
    console.error('Gagal membaca firebase config dari localStorage:', e);
  }
  return null;
}

// Generate doc ID unik yang konsisten di seluruh perangkat (PC, HP, Tablet)
export function getUserDocId() {
  let user = null;
  if (window.SmartGrocery && window.SmartGrocery.state && window.SmartGrocery.state.currentUser) {
    user = window.SmartGrocery.state.currentUser;
  } else {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_CURRENT_USER);
      if (raw) user = JSON.parse(raw);
    } catch (_) {}
  }

  if (!user) return null;

  // Prioritas utama pada EMAIL agar akun Google maupun akun manual di HP dan PC terhubung ke dokumen yang persis sama
  if (user.email && String(user.email).trim().length > 0) {
    const cleanEmail = String(user.email).trim().toLowerCase();
    return 'usr_' + cleanEmail.replace(/[^a-zA-Z0-9_-]/g, '_');
  }

  if (user.username && String(user.username).trim().length > 0) {
    const cleanUser = String(user.username).trim().toLowerCase();
    return 'usr_' + cleanUser.replace(/[^a-zA-Z0-9_-]/g, '_');
  }

  if (user.googleId) {
    return 'gid_' + String(user.googleId).replace(/[^a-zA-Z0-9_-]/g, '_');
  }

  if (user.uid) {
    return 'uid_' + String(user.uid).replace(/[^a-zA-Z0-9_-]/g, '_');
  }

  return null;
}

// Perbarui status badge di UI
export function updateSyncStatusUI() {
  const dot = document.getElementById('cloud-status-dot');
  const btn = document.getElementById('btn-cloud-sync');
  const statusEl = document.getElementById('cloud-modal-status-text');
  const lastSyncEl = document.getElementById('cloud-modal-last-sync');

  if (dot) {
    dot.className = 'cloud-status-dot ' + syncStatus.state;
  }
  if (btn) {
    btn.setAttribute('title', 'Cloud Sync: ' + syncStatus.statusText);
  }
  if (statusEl) {
    statusEl.textContent = syncStatus.statusText;
    statusEl.className = 'status-text ' + syncStatus.state;
  }
  if (lastSyncEl) {
    lastSyncEl.textContent = syncStatus.lastSync 
      ? new Date(syncStatus.lastSync).toLocaleTimeString('id-ID')
      : '-';
  }
}

// Helper untuk menerapkan data remote dari dokumen akun ke state lokal secara real-time
function applyRemoteData(remoteData) {
  if (!window.SmartGrocery || !window.SmartGrocery.state) {
    setTimeout(() => applyRemoteData(remoteData), 60);
    return;
  }

  isApplyingRemoteChange = true;
  try {
    const sg = window.SmartGrocery;
    const currentState = sg.state;

    // 1. Keranjang Belanja (Cart)
    if (Array.isArray(remoteData.cart)) {
      currentState.cart = remoteData.cart;
    }

    // 2. Batas Anggaran (Safety Cap)
    if (typeof remoteData.safetyCap === 'number' && remoteData.safetyCap > 0) {
      currentState.safetyCap = remoteData.safetyCap;
    }

    // 3. Riwayat Belanja (History)
    if (Array.isArray(remoteData.history)) {
      currentState.history = remoteData.history;
    }

    // 4. Produk Kustom Tambahan (Custom Products)
    if (Array.isArray(remoteData.customProducts)) {
      currentState.customProducts = remoteData.customProducts;
    }

    // 5. Produk Favorit / Pin Disukai (Pinned Products)
    if (Array.isArray(remoteData.pinnedProducts)) {
      currentState.pinnedProducts = remoteData.pinnedProducts;
    }

    // 6. Voucher yang Sedang Aktif
    if (remoteData.appliedVoucher !== undefined) {
      currentState.appliedVoucher = remoteData.appliedVoucher;
    }

    // 7. Lokasi Toko Aktif (Location)
    if (remoteData.currentLocation && typeof remoteData.currentLocation === 'object') {
      currentState.currentLocation = remoteData.currentLocation;
    }

    // Simpan ke localStorage sebagai cache offline
    if (typeof sg.saveStateToLocalStorage === 'function') {
      sg.saveStateToLocalStorage();
    }

    // Render ulang seluruh UI seketika tanpa reload halaman
    if (typeof sg.renderAll === 'function') {
      sg.renderAll();
    }

    // Efek audio halus tanda sinkronisasi berhasil
    if (sg.sound && typeof sg.sound.playClick === 'function') {
      sg.sound.playClick();
    }
  } catch (err) {
    console.error('[Firebase Sync] Gagal menerapkan data remote akun:', err);
  } finally {
    setTimeout(() => {
      isApplyingRemoteChange = false;
    }, 150);
  }
}

// Detach / Hentikan listener snapshot saat logout
export function detachListener() {
  if (unsubscribeSnapshot) {
    unsubscribeSnapshot();
    unsubscribeSnapshot = null;
  }
  currentSubscribedUserId = null;
  syncStatus = {
    connected: false,
    statusText: 'Mode Tamu (Belum Login - Cloud Nonaktif)',
    state: 'disconnected',
    lastSync: null,
    errorMsg: ''
  };
  updateSyncStatusUI();

  // Item 10: Reset state in-memory agar akun berikutnya tidak mewarisi data akun lama
  if (window.SmartGrocery && window.SmartGrocery.state) {
    const s = window.SmartGrocery.state;
    s.cart = [];
    s.history = [];
    s.customProducts = [];
    s.pinnedProducts = [];
    s.appliedVoucher = null;
    if (typeof window.SmartGrocery.saveStateToLocalStorage === 'function') {
      window.SmartGrocery.saveStateToLocalStorage();
    }
    if (typeof window.SmartGrocery.renderAll === 'function') {
      window.SmartGrocery.renderAll();
    }
  }
}

// Inisialisasi atau Pasang Listener Realtime untuk Akun Tertentu
export async function initFirebaseSync() {
  const config = getEffectiveConfig();

  if (!config) {
    syncStatus = {
      connected: false,
      statusText: 'Belum Terhubung (Konfigurasi Belum Diisi)',
      state: 'disconnected',
      lastSync: null,
      errorMsg: 'Kunci apiKey atau projectId belum diisi di firebase-config.js.'
    };
    updateSyncStatusUI();
    return false;
  }

  // Cek apakah user sudah login atau masih Guest
  const docId = getUserDocId();
  if (!docId) {
    // GUEST MODE: Jangan simpan atau sync apa pun ke Firebase
    detachListener();
    return false;
  }

  // Jika sudah listening pada user yang sama, tidak perlu attach ulang
  if (unsubscribeSnapshot && currentSubscribedUserId === docId) {
    return true;
  }

  try {
    let app;
    if (getApps().length === 0) {
      app = initializeApp(config);
    } else {
      app = getApp();
    }

    firestoreDb = getFirestore(app);
    const userDocRef = doc(firestoreDb, USERS_COLLECTION, docId);

    // Stop listener lama jika user berganti
    if (unsubscribeSnapshot) {
      unsubscribeSnapshot();
      unsubscribeSnapshot = null;
    }

    syncStatus.statusText = 'Menyambungkan Realtime Cloud Akun...';
    syncStatus.state = 'syncing';
    updateSyncStatusUI();

    currentSubscribedUserId = docId;

    // Pasang Realtime Listener (onSnapshot) TERPISAH KHUSUS USER INI
    unsubscribeSnapshot = onSnapshot(userDocRef, { includeMetadataChanges: false }, (docSnap) => {
      const user = window.SmartGrocery?.state?.currentUser;
      const userName = user ? (user.username || user.email) : 'Akun';

      if (!docSnap.exists()) {
        console.log(`[Firebase Sync] Inisialisasi dokumen baru untuk user ${userName} (${docId})`);
        // Item 10: Inisialisasi dokumen akun baru secara bersih (empty state) tanpa mencemari dengan memori lokal akun sebelumnya
        const initialFreshData = {
          cart: [],
          history: [],
          customProducts: [],
          pinnedProducts: [],
          appliedVoucher: null,
          safetyCap: (window.SmartGrocery?.state?.safetyCap || 500000),
          updatedAt: Date.now(),
          updatedBy: CLIENT_ID,
          userEmail: user?.email || '',
          userName: userName
        };
        setDoc(userDocRef, initialFreshData).catch(err => console.error(err));
        return;
      }

      const remoteData = docSnap.data();

      // Abaikan jika update ini berasal dari perangkat/tab ini sendiri
      if (remoteData.updatedBy === CLIENT_ID) {
        syncStatus.connected = true;
        syncStatus.statusText = `Realtime Aktif: ${userName}`;
        syncStatus.state = 'connected';
        syncStatus.lastSync = remoteData.updatedAt || Date.now();
        updateSyncStatusUI();
        return;
      }

      console.log(`[Firebase Sync] Menerima data real-time dari perangkat lain untuk ${userName}:`, remoteData);
      applyRemoteData(remoteData);

      syncStatus.connected = true;
      syncStatus.statusText = `Realtime Aktif: ${userName}`;
      syncStatus.state = 'connected';
      syncStatus.lastSync = remoteData.updatedAt || Date.now();
      updateSyncStatusUI();
    }, (error) => {
      console.error('[Firebase Sync] Error listener onSnapshot:', error);
      syncStatus.connected = false;
      syncStatus.state = 'error';
      syncStatus.errorMsg = error.message;

      if (error.code === 'permission-denied') {
        syncStatus.statusText = 'Izin Firestore Ditolak (Periksa Security Rules)';
      } else {
        syncStatus.statusText = 'Koneksi Terputus: ' + (error.message || 'Error');
      }
      updateSyncStatusUI();
    });

    syncStatus.connected = true;
    syncStatus.statusText = 'Tersambung ke Cloud Akun';
    syncStatus.state = 'connected';
    updateSyncStatusUI();
    return true;

  } catch (err) {
    console.error('[Firebase Sync] Gagal menghubungkan Firestore:', err);
    syncStatus.connected = false;
    syncStatus.state = 'error';
    syncStatus.statusText = 'Gagal: ' + err.message;
    syncStatus.errorMsg = err.message;
    updateSyncStatusUI();
    return false;
  }
}

// Kirim perubahan lokal ke dokumen akun di Firestore (HANYA JIKA SUDAH LOGIN)
export function pushLocalStateToFirebase(forceImmediate = false) {
  if (isApplyingRemoteChange) return;

  // STRICT GUEST CHECK: Jika belum login, jangan simpan data ke Firebase!
  const docId = getUserDocId();
  if (!docId) {
    return;
  }

  // Jika Firestore DB belum siap atau listener belum aktif untuk akun ini, aktifkan
  if (!firestoreDb || !unsubscribeSnapshot || currentSubscribedUserId !== docId) {
    initFirebaseSync().then((ready) => {
      if (ready) {
        pushLocalStateToFirebase(forceImmediate);
      }
    });
    return;
  }

  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }

  const sendData = async () => {
    if (!window.SmartGrocery || !window.SmartGrocery.state) return;
    const currentState = window.SmartGrocery.state;

    // Pastikan user masih login saat timer debounce dieksekusi
    const activeDocId = getUserDocId();
    if (!activeDocId) return;

    const payload = {
      userEmail: currentState.currentUser?.email || '',
      userName: currentState.currentUser?.username || '',
      userId: activeDocId,
      cart: currentState.cart || [],
      customProducts: currentState.customProducts || [],
      pinnedProducts: currentState.pinnedProducts || [],
      safetyCap: currentState.safetyCap || 500000,
      history: currentState.history || [],
      appliedVoucher: currentState.appliedVoucher || null,
      currentLocation: currentState.currentLocation || null,
      updatedAt: Date.now(),
      updatedBy: CLIENT_ID,
      deviceInfo: (navigator.userAgent.includes('Mobi') ? 'Mobile' : 'Desktop')
    };

    try {
      syncStatus.statusText = 'Menyinkronkan ke Cloud Akun...';
      syncStatus.state = 'syncing';
      updateSyncStatusUI();

      const userDocRef = doc(firestoreDb, USERS_COLLECTION, activeDocId);
      await setDoc(userDocRef, payload, { merge: true });

      const userName = currentState.currentUser?.username || 'Akun';
      syncStatus.connected = true;
      syncStatus.statusText = `Realtime Aktif: ${userName}`;
      syncStatus.state = 'connected';
      syncStatus.lastSync = Date.now();
      updateSyncStatusUI();
    } catch (err) {
      console.error('[Firebase Sync] Gagal menyimpan data ke Firestore:', err);
      syncStatus.state = 'error';
      syncStatus.errorMsg = err.message;
      if (err.code === 'permission-denied') {
        syncStatus.statusText = 'Izin Firestore Ditolak (Periksa Security Rules)';
      } else {
        syncStatus.statusText = 'Gagal Simpan: ' + err.message;
      }
      updateSyncStatusUI();
    }
  };

  if (forceImmediate) {
    sendData();
  } else {
    debounceTimer = setTimeout(sendData, 200); // 200ms debounce responsif
  }
}

// Simpan config baru dari form modal
export async function saveCustomConfig(configObj) {
  if (!configObj || !configObj.apiKey || !configObj.projectId) {
    throw new Error('Config wajib menyertakan apiKey dan projectId!');
  }
  localStorage.setItem(STORAGE_KEY_FIREBASE_CONFIG, JSON.stringify(configObj));
  return await initFirebaseSync();
}

// Hapus custom config dari localStorage
export function clearCustomConfig() {
  localStorage.removeItem(STORAGE_KEY_FIREBASE_CONFIG);
  detachListener();
  firestoreDb = null;
}

// Bridge global window
window.FirebaseSync = {
  init: initFirebaseSync,
  detachListener,
  pushLocalState: pushLocalStateToFirebase,
  saveCustomConfig,
  clearCustomConfig,
  getStatus: () => ({ ...syncStatus }),
  getConfig: getEffectiveConfig,
  getUserDocId
};

// Pasang event listener tombol modal cloud
function setupFirebaseModalActions() {
  const btnManualSync = document.getElementById('btn-manual-sync-now');
  if (btnManualSync) {
    btnManualSync.onclick = () => {
      const docId = getUserDocId();
      if (!docId) {
        alert('Anda sedang dalam Mode Tamu. Silakan login terlebih dahulu untuk menyinkronkan data ke Cloud.');
        return;
      }
      pushLocalStateToFirebase(true);
      if (window.SmartGrocery && window.SmartGrocery.sound) {
        window.SmartGrocery.sound.playSuccess();
      }
      alert('Sinkronisasi cloud akun berhasil dijalankan!');
    };
  }

  const btnSaveConfig = document.getElementById('btn-save-firebase-config');
  const txtConfig = document.getElementById('firebase-config-textarea');
  if (btnSaveConfig && txtConfig) {
    btnSaveConfig.onclick = async () => {
      try {
        const val = txtConfig.value.trim();
        if (!val) {
          alert('Silakan tempel kode JSON konfigurasi Firebase!');
          return;
        }
        const parsed = JSON.parse(val);
        await saveCustomConfig(parsed);
        alert('Konfigurasi Firebase berhasil disimpan!');
      } catch (e) {
        alert('Format JSON konfigurasi tidak valid: ' + e.message);
      }
    };
  }

  const btnClearConfig = document.getElementById('btn-clear-firebase-config');
  if (btnClearConfig) {
    btnClearConfig.onclick = () => {
      if (confirm('Hapus konfigurasi Firebase lokal?')) {
        clearCustomConfig();
        if (txtConfig) txtConfig.value = '';
        alert('Konfigurasi Firebase lokal berhasil dihapus.');
      }
    };
  }
}

// Inisialisasi saat document ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initFirebaseSync();
    updateSyncStatusUI();
    setupFirebaseModalActions();
  });
} else {
  initFirebaseSync();
  updateSyncStatusUI();
  setupFirebaseModalActions();
}
