// ==========================================================================
// FIREBASE REALTIME SYNC (SINGLE SHARED USER / MULTI-DEVICE REALTIME)
// ==========================================================================
// Menggunakan Firebase Firestore Modular SDK via Google CDN
// Bekerja offline-first & realtime via onSnapshot.
// ==========================================================================

import { initializeApp, getApps, getApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { 
  getFirestore, 
  doc, 
  onSnapshot, 
  setDoc 
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

import { firebaseConfig as fileConfig } from './firebase-config.js';

const STORAGE_KEY_FIREBASE_CONFIG = 'sg_firebase_config_v1';
const SHARED_COLLECTION = 'grocery_trackers';
const SHARED_DOC_ID = 'student_user_01';

// ID unik untuk tab/perangkat saat ini agar tidak loop balik saat menerima update dari diri sendiri
const CLIENT_ID = 'device_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now();

let firestoreDb = null;
let unsubscribeSnapshot = null;
let isApplyingRemoteChange = false;
let debounceTimer = null;

let syncStatus = {
  connected: false,
  statusText: 'Memeriksa konfigurasi...',
  state: 'idle', // 'connected' | 'disconnected' | 'syncing' | 'error'
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

// Perbarui status badge di UI
function updateSyncStatusUI() {
  const dot = document.getElementById('cloud-status-dot');
  const btn = document.getElementById('btn-cloud-sync');
  const statusEl = document.getElementById('cloud-modal-status-text');
  const lastSyncEl = document.getElementById('cloud-modal-last-sync');

  if (dot) {
    dot.className = 'cloud-status-dot ' + syncStatus.state;
  }
  if (btn) {
    btn.setAttribute('title', `Cloud Sync: ${syncStatus.statusText}`);
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

// Helper untuk menerapkan data remote ke state lokal secara aman
function applyRemoteData(remoteData) {
  if (!window.SmartGrocery || !window.SmartGrocery.state) {
    // Jika main.js masih loading, tunggu 60ms lalu coba lagi
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

    // 7. Single Shared Account (Akun Bersama)
    if (remoteData.currentUser && typeof remoteData.currentUser === 'object') {
      currentState.currentUser = remoteData.currentUser;
      localStorage.removeItem('sg_user_logged_out');
    }

    // Simpan ke localStorage sebagai cache offline
    if (typeof sg.saveStateToLocalStorage === 'function') {
      sg.saveStateToLocalStorage();
    }

    // Render ulang seluruh UI seketika tanpa reload
    if (typeof sg.renderAll === 'function') {
      sg.renderAll();
    }

    // Efek audio halus tanda sinkronisasi berhasil
    if (sg.sound && typeof sg.sound.playClick === 'function') {
      sg.sound.playClick();
    }
  } catch (err) {
    console.error('[Firebase Sync] Gagal menerapkan remote data:', err);
  } finally {
    setTimeout(() => {
      isApplyingRemoteChange = false;
    }, 150);
  }
}

// Inisialisasi Firebase & Firestore Realtime Listener
export async function initFirebaseSync() {
  const config = getEffectiveConfig();

  if (!config) {
    syncStatus = {
      connected: false,
      statusText: 'Belum Terhubung (Konfigurasi Belum Diisi)',
      state: 'disconnected',
      lastSync: null,
      errorMsg: 'Kunci apiKey atau projectId belum diisi di firebase-config.js atau modal pengaturan.'
    };
    updateSyncStatusUI();
    return false;
  }

  try {
    syncStatus.statusText = 'Menghubungkan ke Firebase...';
    syncStatus.state = 'syncing';
    updateSyncStatusUI();

    let app;
    if (getApps().length === 0) {
      app = initializeApp(config);
    } else {
      app = getApp();
    }

    firestoreDb = getFirestore(app);
    const docRef = doc(firestoreDb, SHARED_COLLECTION, SHARED_DOC_ID);

    // Stop listener lama jika ada
    if (unsubscribeSnapshot) {
      unsubscribeSnapshot();
    }

    // Pasang Realtime Listener (onSnapshot)
    unsubscribeSnapshot = onSnapshot(docRef, { includeMetadataChanges: false }, (docSnap) => {
      if (!docSnap.exists()) {
        console.log('[Firebase Sync] Dokumen belum ada di Firestore. Melakukan inisialisasi awal...');
        pushLocalStateToFirebase(true);
        return;
      }

      const remoteData = docSnap.data();

      // Cek apakah update ini berasal dari aksi lokal sendiri
      if (remoteData.updatedBy === CLIENT_ID) {
        syncStatus.connected = true;
        syncStatus.statusText = 'Tersinkron Realtime (1 Database Bersama)';
        syncStatus.state = 'connected';
        syncStatus.lastSync = remoteData.updatedAt || Date.now();
        updateSyncStatusUI();
        return;
      }

      console.log('[Firebase Sync] Menerima data realtime onSnapshot dari perangkat lain:', remoteData);
      applyRemoteData(remoteData);

      syncStatus.connected = true;
      syncStatus.statusText = 'Tersinkron Realtime (1 Database Bersama)';
      syncStatus.state = 'connected';
      syncStatus.lastSync = remoteData.updatedAt || Date.now();
      updateSyncStatusUI();
    }, (error) => {
      console.error('[Firebase Sync] Error listener onSnapshot:', error);
      syncStatus.connected = false;
      syncStatus.state = 'error';
      syncStatus.errorMsg = error.message;

      if (error.code === 'permission-denied') {
        syncStatus.statusText = 'Izin Ditolak (Periksa Security Rules Firestore)';
      } else {
        syncStatus.statusText = 'Koneksi Terputus: ' + (error.message || 'Error');
      }
      updateSyncStatusUI();
    });

    syncStatus.connected = true;
    syncStatus.statusText = 'Tersinkron Realtime (1 Database Bersama)';
    syncStatus.state = 'connected';
    updateSyncStatusUI();
    return true;

  } catch (err) {
    console.error('[Firebase Sync] Gagal inisialisasi Firebase:', err);
    syncStatus.connected = false;
    syncStatus.state = 'error';
    syncStatus.statusText = 'Gagal Terhubung: ' + err.message;
    syncStatus.errorMsg = err.message;
    updateSyncStatusUI();
    return false;
  }
}

// Kirim perubahan lokal ke Firestore (Debounced & Realtime)
export function pushLocalStateToFirebase(forceImmediate = false) {
  if (isApplyingRemoteChange) {
    return;
  }

  if (!firestoreDb) {
    return;
  }

  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }

  const sendData = async () => {
    if (!window.SmartGrocery || !window.SmartGrocery.state) return;
    const currentState = window.SmartGrocery.state;

    const payload = {
      cart: currentState.cart || [],
      customProducts: currentState.customProducts || [],
      pinnedProducts: currentState.pinnedProducts || [],
      safetyCap: currentState.safetyCap || 500000,
      history: currentState.history || [],
      appliedVoucher: currentState.appliedVoucher || null,
      currentUser: currentState.currentUser || null,
      updatedAt: Date.now(),
      updatedBy: CLIENT_ID,
      deviceInfo: (navigator.userAgent.includes('Mobi') ? 'Mobile' : 'Desktop')
    };

    try {
      syncStatus.statusText = 'Menyinkronkan ke Cloud...';
      syncStatus.state = 'syncing';
      updateSyncStatusUI();

      const docRef = doc(firestoreDb, SHARED_COLLECTION, SHARED_DOC_ID);
      await setDoc(docRef, payload, { merge: true });

      syncStatus.connected = true;
      syncStatus.statusText = 'Tersinkron Realtime (1 Database Bersama)';
      syncStatus.state = 'connected';
      syncStatus.lastSync = Date.now();
      updateSyncStatusUI();
      console.log('[Firebase Sync] Data realtime berhasil disinkronkan ke Firestore');
    } catch (err) {
      console.error('[Firebase Sync] Gagal menyimpan data ke Firestore:', err);
      syncStatus.state = 'error';
      syncStatus.errorMsg = err.message;
      if (err.code === 'permission-denied') {
        syncStatus.statusText = 'Izin Firestore Ditolak (Rules belum diset allow read, write)';
      } else {
        syncStatus.statusText = 'Gagal Simpan: ' + err.message;
      }
      updateSyncStatusUI();
    }
  };

  if (forceImmediate) {
    sendData();
  } else {
    debounceTimer = setTimeout(sendData, 200); // Responsif 200ms debounce
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
  if (unsubscribeSnapshot) {
    unsubscribeSnapshot();
  }
  firestoreDb = null;
  syncStatus = {
    connected: false,
    statusText: 'Belum Terhubung (Konfigurasi Dihapus)',
    state: 'disconnected',
    lastSync: null,
    errorMsg: ''
  };
  updateSyncStatusUI();
}

// Pasang bridge global agar dapat dipanggil dari main.js / modal UI
window.FirebaseSync = {
  init: initFirebaseSync,
  pushLocalState: pushLocalStateToFirebase,
  saveCustomConfig,
  clearCustomConfig,
  getStatus: () => ({ ...syncStatus }),
  getConfig: getEffectiveConfig
};

// Wire up UI action buttons for Firebase Cloud Modal
function setupFirebaseModalActions() {
  const btnManualSync = document.getElementById('btn-manual-sync-now');
  if (btnManualSync) {
    btnManualSync.onclick = () => {
      pushLocalStateToFirebase(true);
      if (window.SmartGrocery && window.SmartGrocery.sound) {
        window.SmartGrocery.sound.playSuccess();
      }
      alert('Sinkronisasi cloud paksa berhasil dijalankan!');
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
        alert('Konfigurasi Firebase berhasil disimpan dan dihubungkan!');
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

// Jalankan inisialisasi saat script dimuat
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
