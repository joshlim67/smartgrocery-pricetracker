// ==========================================================================
// FIREBASE REALTIME SYNC (SINGLE SHARED USER / MULTI-DEVICE REALTIME)
// ==========================================================================
// Menggunakan Firebase Firestore Modular SDK via Google CDN
// Tidak memerlukan npm build khusus, bekerja offline-first & realtime.
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

// ID unik untuk tab/perangkat saat ini agar tidak terjadi infinite loop saat menerima update dari diri sendiri
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

// Ambil konfigurasi: prioritaskan file firebase-config.js, jika kosong gunakan yang disimpan di localStorage
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
        console.log('[Firebase Sync] Dokumen shared_state belum ada di Firestore. Melakukan inisialisasi awal...');
        // Inisialisasi dokumen baru dengan data lokal yang ada
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

      console.log('[Firebase Sync] Menerima data realtime dari perangkat lain:', remoteData);

      // Terapkan data dari perangkat lain ke state lokal aplikasi
      if (window.SmartGrocery && window.SmartGrocery.state) {
        isApplyingRemoteChange = true;
        try {
          if (Array.isArray(remoteData.cart)) {
            window.SmartGrocery.state.cart = remoteData.cart;
          }
          if (typeof remoteData.safetyCap === 'number') {
            window.SmartGrocery.state.safetyCap = remoteData.safetyCap;
          }
          if (Array.isArray(remoteData.history)) {
            window.SmartGrocery.state.history = remoteData.history;
          }
          if (remoteData.prevCatalog && typeof remoteData.prevCatalog === 'object') {
            window.SmartGrocery.state.prevCatalog = remoteData.prevCatalog;
          }

          // Simpan juga ke localStorage sebagai cache offline
          if (typeof window.SmartGrocery.saveStateToLocalStorage === 'function') {
            window.SmartGrocery.saveStateToLocalStorage();
          }

          // Render ulang tampilan agar sinkron secara visual seketika
          if (typeof window.SmartGrocery.renderAll === 'function') {
            window.SmartGrocery.renderAll();
          }

          // Efek suara lembut (haptic feedback) saat data sinkron dari device lain
          if (window.SmartGrocery.sound && typeof window.SmartGrocery.sound.playClick === 'function') {
            window.SmartGrocery.sound.playClick();
          }
        } finally {
          setTimeout(() => {
            isApplyingRemoteChange = false;
          }, 100);
        }
      }

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

// Kirim perubahan lokal ke Firestore (Debounced)
export function pushLocalStateToFirebase(forceImmediate = false) {
  if (isApplyingRemoteChange) {
    // Sedang menerapkan perubahan dari remote, jangan kirim balik
    return;
  }

  if (!firestoreDb || !syncStatus.connected) {
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
      safetyCap: currentState.safetyCap || 500000,
      history: currentState.history || [],
      prevCatalog: currentState.prevCatalog || {},
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
      console.log('[Firebase Sync] Data berhasil dikirim ke Firestore');
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
    debounceTimer = setTimeout(sendData, 350);
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

// Jalankan inisialisasi saat script dimuat
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initFirebaseSync();
    updateSyncStatusUI();
  });
} else {
  initFirebaseSync();
  updateSyncStatusUI();
}
