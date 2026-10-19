// ==========================================================================
// SMART GROCERY & BUDGET SAFETY TRACKER (PWA)
// Mobile-First Architecture for Anak Rantau
// ==========================================================================


// ==========================================================================
// CONSTANTS & SEED DATA (Realistis untuk Siswa/Mahasiswa Rantau)
// ==========================================================================

const STORAGE_KEYS = {
  SAFETY_CAP: 'sg_safety_cap_v1',
  CART: 'sg_cart_items_v1',
  HISTORY: 'sg_history_sessions_v1',
  PREV_CATALOG: 'sg_prev_catalog_v1',
  SOUND_ENABLED: 'sg_sound_enabled_v1'
};

// Seed katalog belanja bulan lalu sebagai referensi komparator harga
const DEFAULT_PREV_CATALOG = {
  'Minyak Goreng 2L': { price: 32000, unit: 'liter', category: 'Bahan Pokok' },
  'Beras Ramos 5kg': { price: 74000, unit: 'kg', category: 'Bahan Pokok' },
  'Telur Ayam 1kg': { price: 28000, unit: 'kg', category: 'Bahan Pokok' },
  'Indomie Goreng (Dus)': { price: 112000, unit: 'dus', category: 'Makanan & Minuman' },
  'Susu UHT Full Cream 1L': { price: 19500, unit: 'liter', category: 'Makanan & Minuman' },
  'Sunlight Jeruk Nipis 700ml': { price: 14500, unit: 'pack', category: 'Perlengkapan Mandi & Cuci' },
  'Lifebuoy Sabun Mandi 4x110g': { price: 23000, unit: 'pack', category: 'Perlengkapan Mandi & Cuci' },
  'Kopi Kapal Api Mix 10s': { price: 14000, unit: 'pack', category: 'Makanan & Minuman' },
  'Gula Pasir 1kg': { price: 17500, unit: 'kg', category: 'Bahan Pokok' },
  'Bawang Merah 500g': { price: 20000, unit: 'kg', category: 'Bumbu & Dapur' },
  'Biskuit Roma Kelapa 300g': { price: 11500, unit: 'pack', category: 'Camilan' },
  'Pasta Gigi Pepsodent 190g': { price: 16000, unit: 'pcs', category: 'Perlengkapan Mandi & Cuci' }
};

// Seed sesi belanja bulan lalu agar Tab Riwayat langsung berisi data nyata
const DEFAULT_HISTORY = [
  {
    id: 'hist_last_month_01',
    date: '15 September 2026',
    timestamp: 1789456800000,
    note: 'Belanja Awal Bulan September (Superindo)',
    safetyCap: 500000,
    totalSpent: 388500,
    totalSaved: 34500,
    itemCount: 8,
    items: [
      { name: 'Beras Ramos 5kg', qty: 1, unit: 'kg', unitPrice: 74000, finalUnitPrice: 74000, discountType: 'none', d1: 0, d2: 0, finalRowTotal: 74000, normalRowTotal: 74000, savedAmount: 0, category: 'Bahan Pokok' },
      { name: 'Minyak Goreng 2L', qty: 1, unit: 'liter', unitPrice: 32000, finalUnitPrice: 32000, discountType: 'none', d1: 0, d2: 0, finalRowTotal: 32000, normalRowTotal: 32000, savedAmount: 0, category: 'Bahan Pokok' },
      { name: 'Telur Ayam 1kg', qty: 1.5, unit: 'kg', unitPrice: 28000, finalUnitPrice: 28000, discountType: 'none', d1: 0, d2: 0, finalRowTotal: 42000, normalRowTotal: 42000, savedAmount: 0, category: 'Bahan Pokok' },
      { name: 'Indomie Goreng (Dus)', qty: 1, unit: 'dus', unitPrice: 112000, finalUnitPrice: 112000, discountType: 'none', d1: 0, d2: 0, finalRowTotal: 112000, normalRowTotal: 112000, savedAmount: 0, category: 'Makanan & Minuman' },
      { name: 'Lifebuoy Sabun Mandi 4x110g', qty: 1, unit: 'pack', unitPrice: 23000, finalUnitPrice: 18400, discountType: 'single', d1: 20, d2: 0, finalRowTotal: 18400, normalRowTotal: 23000, savedAmount: 4600, category: 'Perlengkapan Mandi & Cuci' },
      { name: 'Sunlight Jeruk Nipis 700ml', qty: 2, unit: 'pack', unitPrice: 14500, finalUnitPrice: 14500, discountType: 'none', d1: 0, d2: 0, finalRowTotal: 29000, normalRowTotal: 29000, savedAmount: 0, category: 'Perlengkapan Mandi & Cuci' },
      { name: 'Kopi Kapal Api Mix 10s', qty: 2, unit: 'pack', unitPrice: 14000, finalUnitPrice: 14000, discountType: 'none', d1: 0, d2: 0, finalRowTotal: 28000, normalRowTotal: 28000, savedAmount: 0, category: 'Makanan & Minuman' },
      { name: 'Biskuit Roma Kelapa 300g', qty: 5, unit: 'pack', unitPrice: 11500, finalUnitPrice: 10620, discountType: 'tiered', d1: 50, d2: 20, finalRowTotal: 53100, normalRowTotal: 57500, savedAmount: 29900, category: 'Camilan' }
    ]
  }
];

// Seed awal barang di troli aktif untuk demo langsung
const DEFAULT_INITIAL_CART = [
  {
    id: 'cart_' + Date.now() + '_1',
    name: 'Minyak Goreng 2L',
    category: 'Bahan Pokok',
    unit: 'liter',
    qty: 1,
    unitPrice: 34500, // Naik vs bulan lalu (32.000) -> Red Up Arrow ↑
    discountType: 'none',
    d1: 0,
    d2: 0
  },
  {
    id: 'cart_' + Date.now() + '_2',
    name: 'Telur Ayam 1kg',
    category: 'Bahan Pokok',
    unit: 'kg',
    qty: 2,
    unitPrice: 26500, // Turun vs bulan lalu (28.000) -> Green Down Arrow ↓
    discountType: 'none',
    d1: 0,
    d2: 0
  },
  {
    id: 'cart_' + Date.now() + '_3',
    name: 'Lifebuoy Sabun Mandi 4x110g',
    category: 'Perlengkapan Mandi & Cuci',
    unit: 'pack',
    qty: 1,
    unitPrice: 25000,
    discountType: 'tiered', // Promo bertingkat 50% + 20%
    d1: 50,
    d2: 20
  }
];

// ==========================================================================
// STATE MANAGEMENT & PERSISTENCE
// ==========================================================================

const state = {
  safetyCap: 500000,
  cart: [],
  history: [],
  prevCatalog: {},
  soundEnabled: true,
  currentCategoryFilter: 'ALL',
  searchQuery: '',
  editingItemId: null,
  activeTab: 'view-cart'
};

// ==========================================================================
// AUDIO SYNTHESIZER (Web Audio API Haptics untuk Mobile Supermarket)
// ==========================================================================

class SoundManager {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playClick() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (_) {}
  }

  playSuccess() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5 - E5 - G5 - C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0.15, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.08 + 0.16);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.16);
      });
    } catch (_) {}
  }

  playWarning() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      [350, 260].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now + idx * 0.12);

        gain.gain.setValueAtTime(0.18, now + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.12 + 0.18);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.12);
        osc.stop(now + idx * 0.12 + 0.18);
      });
    } catch (_) {}
  }
}

const sound = new SoundManager();

// ==========================================================================
// UTILITY FUNCTIONS: CURRENCY & MATH
// ==========================================================================

function formatRupiah(num) {
  if (isNaN(num) || num === null || num === undefined) return '0';
  return Math.round(num).toLocaleString('id-ID');
}

function parseRupiahInput(str) {
  if (!str) return 0;
  const cleaned = String(str).replace(/[^0-9]/g, '');
  return parseInt(cleaned, 10) || 0;
}

/**
 * Kalkulator Diskon Bertingkat:
 * Rumus matematis tepat:
 * - none: normal
 * - single: unitPrice * (1 - d1/100)
 * - tiered: unitPrice * (1 - d1/100) * (1 - d2/100)
 */
function calculateItemPricing(item) {
  const qty = parseFloat(item.qty) || 0;
  const unitPrice = parseFloat(item.unitPrice) || 0;
  const normalRowTotal = unitPrice * qty;

  let finalUnitPrice = unitPrice;
  const d1 = parseFloat(item.d1) || 0;
  const d2 = parseFloat(item.d2) || 0;

  if (item.discountType === 'single') {
    const factor1 = Math.max(0, 1 - (d1 / 100));
    finalUnitPrice = unitPrice * factor1;
  } else if (item.discountType === 'tiered') {
    const factor1 = Math.max(0, 1 - (d1 / 100));
    const factor2 = Math.max(0, 1 - (d2 / 100));
    finalUnitPrice = unitPrice * factor1 * factor2;
  }

  const finalRowTotal = Math.round(finalUnitPrice * qty);
  const savedAmount = Math.max(0, normalRowTotal - finalRowTotal);

  return {
    normalRowTotal,
    finalUnitPrice,
    finalRowTotal,
    savedAmount
  };
}

/**
 * Komparator Harga Realtime vs Bulan Lalu:
 * Menghasilkan:
 * - higher: Merah Naik ↑ (+Rp diff, +diffPct%)
 * - lower: Hijau Turun ↓ (-Rp diff, -diffPct%)
 * - equal: Stabil = (Rp 0)
 * - new: Item Baru
 */
function comparePriceWithPrevMonth(itemName, currentUnitPrice) {
  if (!itemName) return { status: 'new', diffVal: 0, diffPct: 0, prevPrice: 0 };
  
  // Cari di database bulan lalu (case-insensitive)
  const normName = itemName.trim().toLowerCase();
  let matchedPrev = null;

  for (const [key, val] of Object.entries(state.prevCatalog)) {
    if (key.trim().toLowerCase() === normName) {
      matchedPrev = val;
      break;
    }
  }

  if (!matchedPrev || !matchedPrev.price) {
    return { status: 'new', diffVal: 0, diffPct: 0, prevPrice: 0 };
  }

  const prevPrice = matchedPrev.price;
  const diffVal = currentUnitPrice - prevPrice;
  const diffPct = prevPrice > 0 ? ((diffVal / prevPrice) * 100).toFixed(1) : 0;

  if (diffVal > 0) {
    return { status: 'higher', diffVal, diffPct, prevPrice };
  } else if (diffVal < 0) {
    return { status: 'lower', diffVal: Math.abs(diffVal), diffPct: Math.abs(diffPct), prevPrice };
  } else {
    return { status: 'equal', diffVal: 0, diffPct: 0, prevPrice };
  }
}

// ==========================================================================
// STORAGE LOAD & SAVE
// ==========================================================================

function loadStateFromStorage() {
  try {
    const storedCap = localStorage.getItem(STORAGE_KEYS.SAFETY_CAP);
    state.safetyCap = storedCap ? parseInt(storedCap, 10) : 500000;

    const storedPrevCatalog = localStorage.getItem(STORAGE_KEYS.PREV_CATALOG);
    state.prevCatalog = storedPrevCatalog ? JSON.parse(storedPrevCatalog) : { ...DEFAULT_PREV_CATALOG };

    const storedHistory = localStorage.getItem(STORAGE_KEYS.HISTORY);
    state.history = storedHistory ? JSON.parse(storedHistory) : [...DEFAULT_HISTORY];

    const storedCart = localStorage.getItem(STORAGE_KEYS.CART);
    state.cart = storedCart ? JSON.parse(storedCart) : [...DEFAULT_INITIAL_CART];

    const storedSound = localStorage.getItem(STORAGE_KEYS.SOUND_ENABLED);
    state.soundEnabled = storedSound !== null ? JSON.parse(storedSound) : true;
  } catch (err) {
    console.error('Error loading state from localStorage:', err);
    state.safetyCap = 500000;
    state.prevCatalog = { ...DEFAULT_PREV_CATALOG };
    state.history = [...DEFAULT_HISTORY];
    state.cart = [...DEFAULT_INITIAL_CART];
    state.soundEnabled = true;
  }
}

function saveStateToLocalStorage() {
  try {
    localStorage.setItem(STORAGE_KEYS.SAFETY_CAP, state.safetyCap);
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(state.cart));
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(state.history));
    localStorage.setItem(STORAGE_KEYS.PREV_CATALOG, JSON.stringify(state.prevCatalog));
    localStorage.setItem(STORAGE_KEYS.SOUND_ENABLED, JSON.stringify(state.soundEnabled));
  } catch (err) {
    console.error('Error saving state to localStorage:', err);
  }
}

function saveState() {
  saveStateToLocalStorage();

  // Push realtime update ke Firebase Cloud Firestore (jika terhubung)
  if (window.FirebaseSync && typeof window.FirebaseSync.pushLocalState === 'function') {
    window.FirebaseSync.pushLocalState();
  }
}

// Global Bridge untuk integrasi modul Firebase Sync
window.SmartGrocery = {
  state,
  sound,
  saveStateToLocalStorage,
  renderAll: () => {
    renderCartItems();
    renderHistorySessions();
    renderBudgetBreakdown();
    updateSafetyCapBanner();
    updateIcons();
  }
};

// ==========================================================================
// RENDER & DOM BINDINGS
// ==========================================================================

function updateIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

/**
 * Perbarui Live Budget Safety Cap Banner & Indikator
 */
function updateSafetyCapBanner() {
  let totalSpent = 0;
  let totalSaved = 0;
  let totalItemsCount = 0;

  state.cart.forEach((item) => {
    const calc = calculateItemPricing(item);
    totalSpent += calc.finalRowTotal;
    totalSaved += calc.savedAmount;
    totalItemsCount += (parseFloat(item.qty) || 0);
  });

  const safetyCap = state.safetyCap || 500000;
  const remaining = safetyCap - totalSpent;
  const percentUsed = Math.min(100, Math.round((totalSpent / safetyCap) * 100));

  // Update DOM Elements
  const banner = document.getElementById('safety-cap-banner');
  const meterFill = document.getElementById('budget-meter-fill');
  const remainingEl = document.getElementById('header-remaining-budget');
  const spentEl = document.getElementById('header-spent-budget');
  const limitEl = document.getElementById('header-limit-budget');
  const percentEl = document.getElementById('header-percent-budget');
  const statusTextEl = document.getElementById('budget-status-text');
  const navAlertDot = document.getElementById('nav-budget-alert');

  remainingEl.textContent = `Rp ${formatRupiah(Math.max(0, remaining))}`;
  spentEl.textContent = `Rp ${formatRupiah(totalSpent)}`;
  limitEl.textContent = `Rp ${formatRupiah(safetyCap)}`;
  percentEl.textContent = `${percentUsed}%`;
  meterFill.style.width = `${Math.min(100, (totalSpent / safetyCap) * 100)}%`;

  // Status Styling Logic
  banner.classList.remove('state-safe', 'state-warning', 'state-danger');

  if (totalSpent > safetyCap) {
    banner.classList.add('state-danger');
    statusTextEl.textContent = 'OVERBUDGET! BAHAYA';
    remainingEl.textContent = `- Rp ${formatRupiah(Math.abs(remaining))}`;
    navAlertDot.classList.remove('hidden');
    sound.playWarning();
  } else if (percentUsed >= 90) {
    banner.classList.add('state-danger');
    statusTextEl.textContent = 'WASPADALAH: >90% LIMIT';
    navAlertDot.classList.remove('hidden');
  } else if (percentUsed >= 75) {
    banner.classList.add('state-warning');
    statusTextEl.textContent = 'MENDEKATI BATAS (75%)';
    navAlertDot.classList.add('hidden');
  } else {
    banner.classList.add('state-safe');
    statusTextEl.textContent = 'ANGGARAN AMAN';
    navAlertDot.classList.add('hidden');
  }

  // Update Cart Dock Summary
  document.getElementById('summary-total-qty').textContent = `${state.cart.length} item (${totalItemsCount} qty)`;
  document.getElementById('summary-total-price').textContent = formatRupiah(totalSpent);
  document.getElementById('summary-saved-amount').textContent = `Rp ${formatRupiah(totalSaved)}`;
  document.getElementById('nav-cart-badge').textContent = state.cart.length;

  const discountPill = document.getElementById('summary-discount-pill');
  if (totalSaved > 0) {
    discountPill.classList.remove('hidden');
  } else {
    discountPill.classList.add('hidden');
  }

  // Update Metric Summary on Tab History
  const histCurrentTotal = document.getElementById('hist-current-total');
  if (histCurrentTotal) histCurrentTotal.textContent = `Rp ${formatRupiah(totalSpent)}`;

  return { totalSpent, totalSaved, remaining, totalItemsCount };
}

/**
 * Render Trolley Item Cards
 */
function renderCartItems() {
  const container = document.getElementById('cart-items-container');
  const emptyState = document.getElementById('cart-empty-state');
  const filterCat = state.currentCategoryFilter;
  const search = state.searchQuery.trim().toLowerCase();

  const filtered = state.cart.filter((item) => {
    const matchesCat = (filterCat === 'ALL' || item.category === filterCat);
    const matchesSearch = (!search || item.name.toLowerCase().includes(search));
    return matchesCat && matchesSearch;
  });

  // Update Filter Counters
  document.getElementById('count-all').textContent = state.cart.length;

  if (state.cart.length === 0) {
    container.innerHTML = '';
    emptyState.classList.remove('hidden');
    updateSafetyCapBanner();
    return;
  } else {
    emptyState.classList.add('hidden');
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state-card glass-card">
        <i data-lucide="search" style="width: 32px; height: 32px; color: var(--text-muted);"></i>
        <h3>Tidak ada item yang cocok</h3>
        <p>Coba gunakan kata kunci lain atau pilih filter kategori "Semua".</p>
      </div>
    `;
    updateIcons();
    updateSafetyCapBanner();
    return;
  }

  container.innerHTML = filtered.map((item) => {
    const calc = calculateItemPricing(item);
    const comp = comparePriceWithPrevMonth(item.name, item.unitPrice);

    // Indicator Badge HTML
    let compBadgeHtml = '';
    if (comp.status === 'higher') {
      compBadgeHtml = `
        <span class="comp-badge higher" title="Bulan lalu: Rp ${formatRupiah(comp.prevPrice)}">
          <i data-lucide="trending-up"></i> ↑ +Rp ${formatRupiah(comp.diffVal)} (+${comp.diffPct}%)
        </span>
      `;
    } else if (comp.status === 'lower') {
      compBadgeHtml = `
        <span class="comp-badge lower" title="Bulan lalu: Rp ${formatRupiah(comp.prevPrice)}">
          <i data-lucide="trending-down"></i> ↓ -Rp ${formatRupiah(comp.diffVal)} (-${comp.diffPct}%)
        </span>
      `;
    } else if (comp.status === 'equal') {
      compBadgeHtml = `
        <span class="comp-badge equal" title="Bulan lalu: Rp ${formatRupiah(comp.prevPrice)}">
          <span>=</span> Stabil
        </span>
      `;
    } else {
      compBadgeHtml = `
        <span class="comp-badge new">
          <i data-lucide="sparkles"></i> Item Baru
        </span>
      `;
    }

    // Discount Tag HTML
    let discountTagHtml = '';
    if (item.discountType === 'single' && item.d1 > 0) {
      discountTagHtml = `<span class="discount-pill-mini">Diskon ${item.d1}%</span>`;
    } else if (item.discountType === 'tiered' && item.d1 > 0) {
      discountTagHtml = `<span class="discount-pill-mini">${item.d1}% + ${item.d2}%</span>`;
    }

    const strikePriceHtml = calc.savedAmount > 0 
      ? `<span class="normal-strike-price">Rp ${formatRupiah(calc.normalRowTotal)}</span>` 
      : '';

    return `
      <div class="cart-item-card" data-item-id="${item.id}">
        <div class="item-card-top">
          <div class="item-main-info">
            <div class="item-badge-row">
              <span class="badge-category">${item.category}</span>
              ${compBadgeHtml}
            </div>
            <h3 class="item-product-name">${item.name}</h3>
            <span class="item-unit-tag">@ Rp ${formatRupiah(item.unitPrice)} / ${item.unit}</span>
          </div>

          <div class="item-actions-top">
            <button class="btn-card-action btn-edit-item" data-id="${item.id}" aria-label="Edit Item" title="Edit Item">
              <i data-lucide="pencil"></i>
            </button>
            <button class="btn-card-action text-danger btn-delete-item" data-id="${item.id}" aria-label="Hapus Item" title="Hapus Item">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </div>

        <div class="item-card-bottom">
          <!-- Large Touch Stepper Ramah Jempol -->
          <div class="qty-stepper-control">
            <button type="button" class="btn-stepper btn-cart-step-minus" data-id="${item.id}" aria-label="Kurangi">
              <i data-lucide="minus"></i>
            </button>
            <input type="number" class="cart-qty-direct" data-id="${item.id}" value="${item.qty}" min="0.1" step="1">
            <button type="button" class="btn-stepper btn-cart-step-plus" data-id="${item.id}" aria-label="Tambah">
              <i data-lucide="plus"></i>
            </button>
          </div>

          <!-- Total Row Pricing -->
          <div class="item-price-block">
            ${strikePriceHtml}
            <div class="row-total-price">
              Rp ${formatRupiah(calc.finalRowTotal)}
              ${discountTagHtml}
            </div>
            ${calc.savedAmount > 0 ? `<span class="unit-price-caption text-emerald">Hemat Rp ${formatRupiah(calc.savedAmount)}</span>` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');

  updateIcons();
  updateSafetyCapBanner();
  bindCartEvents();
}

/**
 * Event Handlers pada Cart Items
 */
function bindCartEvents() {
  // Stepper Plus
  document.querySelectorAll('.btn-cart-step-plus').forEach((btn) => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-id');
      const item = state.cart.find((i) => i.id === id);
      if (item) {
        item.qty = Math.round((parseFloat(item.qty) + 1) * 10) / 10;
        sound.playClick();
        saveState();
        renderCartItems();
      }
    };
  });

  // Stepper Minus
  document.querySelectorAll('.btn-cart-step-minus').forEach((btn) => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-id');
      const item = state.cart.find((i) => i.id === id);
      if (item) {
        if (item.qty > 1) {
          item.qty = Math.round((parseFloat(item.qty) - 1) * 10) / 10;
        } else {
          // Konfirmasi hapus jika qty mencapai 0
          state.cart = state.cart.filter((i) => i.id !== id);
        }
        sound.playClick();
        saveState();
        renderCartItems();
      }
    };
  });

  // Direct Input Qty
  document.querySelectorAll('.cart-qty-direct').forEach((inp) => {
    inp.onchange = () => {
      const id = inp.getAttribute('data-id');
      const item = state.cart.find((i) => i.id === id);
      if (item) {
        const val = parseFloat(inp.value) || 1;
        item.qty = Math.max(0.1, val);
        sound.playClick();
        saveState();
        renderCartItems();
      }
    };
  });

  // Edit Item Button
  document.querySelectorAll('.btn-edit-item').forEach((btn) => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-id');
      openItemModal(id);
    };
  });

  // Delete Item Button
  document.querySelectorAll('.btn-delete-item').forEach((btn) => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-id');
      state.cart = state.cart.filter((i) => i.id !== id);
      sound.playClick();
      saveState();
      renderCartItems();
    };
  });
}

// ==========================================================================
// ITEM MODAL: TAMBAH & EDIT ITEM
// ==========================================================================

function openItemModal(itemId = null) {
  state.editingItemId = itemId;
  const modal = document.getElementById('item-modal');
  const titleEl = document.getElementById('modal-item-title');
  const saveLabel = document.getElementById('btn-save-item-label');
  const idInput = document.getElementById('item-id-input');
  const nameInput = document.getElementById('item-name-input');
  const catInput = document.getElementById('item-category-input');
  const unitInput = document.getElementById('item-unit-input');
  const qtyInput = document.getElementById('item-qty-input');
  const priceInput = document.getElementById('item-price-input');
  const discSingleInput = document.getElementById('input-discount-single');
  const discD1Input = document.getElementById('input-discount-d1');
  const discD2Input = document.getElementById('input-discount-d2');

  // Populate Datalist dari database bulan lalu untuk auto-complete
  populateDatalist();
  populateQuickStaples();

  if (itemId) {
    const item = state.cart.find((i) => i.id === itemId);
    if (!item) return;

    titleEl.textContent = 'Edit Item Belanja';
    saveLabel.textContent = 'Simpan Perubahan';
    idInput.value = item.id;
    nameInput.value = item.name;
    catInput.value = item.category;
    unitInput.value = item.unit;
    qtyInput.value = item.qty;
    priceInput.value = formatRupiah(item.unitPrice);

    setCategoryChips(item.category);
    setDiscountMode(item.discountType || 'none');
    discSingleInput.value = item.d1 || 0;
    discD1Input.value = item.d1 || 50;
    discD2Input.value = item.d2 || 20;
  } else {
    titleEl.textContent = 'Tambah Item ke Keranjang';
    saveLabel.textContent = 'Masukkan ke Keranjang';
    idInput.value = '';
    nameInput.value = '';
    catInput.value = 'Bahan Pokok';
    unitInput.value = 'pcs';
    qtyInput.value = '1';
    priceInput.value = '';

    setCategoryChips('Bahan Pokok');
    setDiscountMode('none');
    discSingleInput.value = '0';
    discD1Input.value = '50';
    discD2Input.value = '20';
  }

  updateModalComparatorPreview();
  updateModalDiscountPreview();

  modal.classList.remove('hidden');
  updateIcons();
  nameInput.focus();
}

function closeItemModal() {
  document.getElementById('item-modal').classList.add('hidden');
  state.editingItemId = null;
}

function setCategoryChips(activeCat) {
  document.getElementById('item-category-input').value = activeCat;
  document.querySelectorAll('.cat-chip').forEach((chip) => {
    if (chip.getAttribute('data-cat') === activeCat) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });
}

function setDiscountMode(mode) {
  document.querySelectorAll('.mode-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
  });

  const singleSection = document.getElementById('section-discount-single');
  const tieredSection = document.getElementById('section-discount-tiered');

  if (mode === 'single') {
    singleSection.classList.remove('hidden');
    tieredSection.classList.add('hidden');
  } else if (mode === 'tiered') {
    singleSection.classList.add('hidden');
    tieredSection.classList.remove('hidden');
  } else {
    singleSection.classList.add('hidden');
    tieredSection.classList.add('hidden');
  }

  updateModalDiscountPreview();
}

function updateModalDiscountPreview() {
  const qty = parseFloat(document.getElementById('item-qty-input').value) || 1;
  const unitPrice = parseRupiahInput(document.getElementById('item-price-input').value);

  const activeModeBtn = document.querySelector('.mode-btn.active');
  const mode = activeModeBtn ? activeModeBtn.getAttribute('data-mode') : 'none';

  let d1 = 0;
  let d2 = 0;

  if (mode === 'single') {
    d1 = parseFloat(document.getElementById('input-discount-single').value) || 0;
  } else if (mode === 'tiered') {
    d1 = parseFloat(document.getElementById('input-discount-d1').value) || 0;
    d2 = parseFloat(document.getElementById('input-discount-d2').value) || 0;
  }

  const calc = calculateItemPricing({
    qty,
    unitPrice,
    discountType: mode,
    d1,
    d2
  });

  document.getElementById('preview-normal-total').textContent = `Rp ${formatRupiah(calc.normalRowTotal)}`;
  document.getElementById('preview-discount-saved').textContent = `- Rp ${formatRupiah(calc.savedAmount)}`;
  document.getElementById('preview-final-total').textContent = `Rp ${formatRupiah(calc.finalRowTotal)}`;
}

function updateModalComparatorPreview() {
  const name = document.getElementById('item-name-input').value.trim();
  const unitPrice = parseRupiahInput(document.getElementById('item-price-input').value);
  const badgeCard = document.getElementById('modal-comparator-badge');
  const title = document.getElementById('preview-comp-title');
  const desc = document.getElementById('preview-comp-desc');
  const pill = document.getElementById('preview-comp-pill');
  const icon = document.getElementById('preview-comp-icon');

  if (!name || unitPrice <= 0) {
    badgeCard.classList.add('hidden');
    return;
  }

  const comp = comparePriceWithPrevMonth(name, unitPrice);

  if (comp.status === 'higher') {
    badgeCard.classList.remove('hidden');
    badgeCard.style.borderColor = 'rgba(244, 63, 94, 0.4)';
    icon.innerHTML = '<i data-lucide="trending-up" style="color: var(--crimson);"></i>';
    title.textContent = `Bulan Lalu: Rp ${formatRupiah(comp.prevPrice)}`;
    desc.textContent = `Perhatian: Harga NAIK Rp ${formatRupiah(comp.diffVal)} (+${comp.diffPct}%)`;
    pill.textContent = `↑ Lebih Mahal (+${comp.diffPct}%)`;
    pill.style.background = 'var(--crimson-soft)';
    pill.style.color = '#fda4af';
  } else if (comp.status === 'lower') {
    badgeCard.classList.remove('hidden');
    badgeCard.style.borderColor = 'rgba(16, 185, 129, 0.4)';
    icon.innerHTML = '<i data-lucide="trending-down" style="color: var(--emerald-light);"></i>';
    title.textContent = `Bulan Lalu: Rp ${formatRupiah(comp.prevPrice)}`;
    desc.textContent = `Hemat: Harga TURUN Rp ${formatRupiah(comp.diffVal)} (-${comp.diffPct}%)`;
    pill.textContent = `↓ Lebih Hemat (-${comp.diffPct}%)`;
    pill.style.background = 'var(--emerald-soft)';
    pill.style.color = '#6ee7b7';
  } else if (comp.status === 'equal') {
    badgeCard.classList.remove('hidden');
    badgeCard.style.borderColor = 'rgba(56, 189, 248, 0.3)';
    icon.innerHTML = '<i data-lucide="check" style="color: var(--primary);"></i>';
    title.textContent = `Bulan Lalu: Rp ${formatRupiah(comp.prevPrice)}`;
    desc.textContent = 'Harga stabil persis sama dengan bulan lalu';
    pill.textContent = '= Stabil (Rp 0)';
    pill.style.background = 'rgba(56, 189, 248, 0.15)';
    pill.style.color = '#7dd3fc';
  } else {
    badgeCard.classList.remove('hidden');
    badgeCard.style.borderColor = 'rgba(168, 85, 247, 0.3)';
    icon.innerHTML = '<i data-lucide="sparkles" style="color: #c084fc;"></i>';
    title.textContent = 'Item Baru Terdeteksi';
    desc.textContent = 'Belum pernah dibeli bulan lalu. Akan dicatat sebagai referensi baru!';
    pill.textContent = '🆕 Item Baru';
    pill.style.background = 'rgba(168, 85, 247, 0.15)';
    pill.style.color = '#d8b4fe';
  }

  updateIcons();
}

function populateDatalist() {
  const datalist = document.getElementById('last-month-datalist');
  datalist.innerHTML = Object.keys(state.prevCatalog).map((item) => {
    return `<option value="${item}"></option>`;
  }).join('');
}

function populateQuickStaples() {
  const container = document.getElementById('quick-staples-container');
  const items = Object.entries(state.prevCatalog).slice(0, 7);
  container.innerHTML = items.map(([name, data]) => {
    return `
      <button type="button" class="staple-chip" data-name="${name}" data-unit="${data.unit}" data-cat="${data.category}" data-price="${data.price}">
        + ${name} (Rp ${formatRupiah(data.price)})
      </button>
    `;
  }).join('');

  container.querySelectorAll('.staple-chip').forEach((chip) => {
    chip.onclick = () => {
      document.getElementById('item-name-input').value = chip.getAttribute('data-name');
      document.getElementById('item-unit-input').value = chip.getAttribute('data-unit');
      setCategoryChips(chip.getAttribute('data-cat'));
      document.getElementById('item-price-input').value = formatRupiah(chip.getAttribute('data-price'));
      sound.playClick();
      updateModalComparatorPreview();
      updateModalDiscountPreview();
    };
  });
}

function saveItemFromModal() {
  const name = document.getElementById('item-name-input').value.trim();
  const category = document.getElementById('item-category-input').value;
  const unit = document.getElementById('item-unit-input').value;
  const qty = parseFloat(document.getElementById('item-qty-input').value) || 1;
  const unitPrice = parseRupiahInput(document.getElementById('item-price-input').value);

  if (!name) {
    alert('Nama produk supermarket wajib diisi!');
    return;
  }
  if (unitPrice <= 0) {
    alert('Harga satuan wajib diisi!');
    return;
  }

  const activeModeBtn = document.querySelector('.mode-btn.active');
  const discountType = activeModeBtn ? activeModeBtn.getAttribute('data-mode') : 'none';

  let d1 = 0;
  let d2 = 0;
  if (discountType === 'single') {
    d1 = parseFloat(document.getElementById('input-discount-single').value) || 0;
  } else if (discountType === 'tiered') {
    d1 = parseFloat(document.getElementById('input-discount-d1').value) || 0;
    d2 = parseFloat(document.getElementById('input-discount-d2').value) || 0;
  }

  if (state.editingItemId) {
    const idx = state.cart.findIndex((i) => i.id === state.editingItemId);
    if (idx !== -1) {
      state.cart[idx] = {
        ...state.cart[idx],
        name,
        category,
        unit,
        qty,
        unitPrice,
        discountType,
        d1,
        d2
      };
    }
  } else {
    state.cart.unshift({
      id: 'cart_' + Date.now(),
      name,
      category,
      unit,
      qty,
      unitPrice,
      discountType,
      d1,
      d2
    });
  }

  sound.playClick();
  saveState();
  closeItemModal();
  renderCartItems();
}

// ==========================================================================
// CHECKOUT & RIWAYAT (SELESAIKAN BELANJA & SIMPAN STRUK)
// ==========================================================================

function openCheckoutModal() {
  if (state.cart.length === 0) {
    alert('Troli belanja masih kosong. Tambahkan barang terlebih dahulu!');
    return;
  }

  const modal = document.getElementById('checkout-modal');
  const itemsContainer = document.getElementById('checkout-receipt-items');
  const dateText = document.getElementById('checkout-date-text');
  const limitVal = document.getElementById('receipt-limit-val');
  const totalVal = document.getElementById('receipt-total-val');
  const savedVal = document.getElementById('receipt-saved-val');
  const balanceVal = document.getElementById('receipt-balance-val');
  const balanceLabel = document.getElementById('receipt-balance-label');
  const verdictCard = document.getElementById('receipt-verdict-card');
  const verdictTitle = document.getElementById('verdict-title');
  const verdictDesc = document.getElementById('verdict-desc');

  const now = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
  dateText.textContent = `Waktu: ${now.toLocaleDateString('id-ID', options)}`;

  let totalSpent = 0;
  let totalSaved = 0;

  itemsContainer.innerHTML = state.cart.map((item) => {
    const calc = calculateItemPricing(item);
    totalSpent += calc.finalRowTotal;
    totalSaved += calc.savedAmount;

    return `
      <div class="receipt-item-row">
        <div class="receipt-item-left">
          <span class="receipt-item-name">${item.name}</span>
          <span class="receipt-item-sub">${item.qty} ${item.unit} x Rp ${formatRupiah(item.unitPrice)}</span>
        </div>
        <div class="receipt-item-price">
          Rp ${formatRupiah(calc.finalRowTotal)}
        </div>
      </div>
    `;
  }).join('');

  const safetyCap = state.safetyCap || 500000;
  const balance = safetyCap - totalSpent;

  limitVal.textContent = `Rp ${formatRupiah(safetyCap)}`;
  totalVal.textContent = `Rp ${formatRupiah(totalSpent)}`;
  savedVal.textContent = `Rp ${formatRupiah(totalSaved)}`;

  verdictCard.classList.remove('safe', 'danger');

  if (balance >= 0) {
    balanceLabel.textContent = 'Sisa Anggaran Dompet:';
    balanceVal.textContent = `Rp ${formatRupiah(balance)}`;
    balanceVal.style.color = 'var(--emerald-light)';
    verdictCard.classList.add('safe');
    verdictTitle.textContent = '🎉 Misi Hemat Berhasil!';
    verdictDesc.textContent = `Kamu berhasil berhemat dan masih menyisakan Rp ${formatRupiah(balance)} di dompet!`;
    if (typeof window.confetti === 'function') {
      window.confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
    sound.playSuccess();
  } else {
    balanceLabel.textContent = 'DEFISIT / OVERBUDGET:';
    balanceVal.textContent = `- Rp ${formatRupiah(Math.abs(balance))}`;
    balanceVal.style.color = 'var(--crimson)';
    verdictCard.classList.add('danger');
    verdictTitle.textContent = '⚠️ Anggaran Terlampaui!';
    verdictDesc.textContent = `Belanjaan melebihi batas dompet sebesar Rp ${formatRupiah(Math.abs(balance))}. Pertimbangkan kurangi camilan/non-esensial.`;
    sound.playWarning();
  }

  modal.classList.remove('hidden');
  updateIcons();
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal').classList.add('hidden');
}

function confirmCheckoutAndSave() {
  if (state.cart.length === 0) return;

  const now = new Date();
  const dateStr = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

  let totalSpent = 0;
  let totalSaved = 0;

  // Siapkan snapshot item belanja & perbarui catalog harga referensi
  const savedItems = state.cart.map((item) => {
    const calc = calculateItemPricing(item);
    totalSpent += calc.finalRowTotal;
    totalSaved += calc.savedAmount;

    // Perbarui katalog harga acuan untuk bulan berikutnya
    state.prevCatalog[item.name] = {
      price: item.unitPrice,
      unit: item.unit,
      category: item.category,
      updatedAt: Date.now()
    };

    return {
      ...item,
      finalRowTotal: calc.finalRowTotal,
      normalRowTotal: calc.normalRowTotal,
      savedAmount: calc.savedAmount
    };
  });

  const sessionRecord = {
    id: 'hist_' + Date.now(),
    date: dateStr,
    timestamp: Date.now(),
    note: `Belanja Supermarket (${state.cart.length} item)`,
    safetyCap: state.safetyCap,
    totalSpent,
    totalSaved,
    itemCount: state.cart.length,
    items: savedItems
  };

  // Simpan ke riwayat (unshift paling atas)
  state.history.unshift(sessionRecord);

  // Kosongkan troli aktif
  state.cart = [];

  saveState();
  closeCheckoutModal();
  renderCartItems();
  renderHistorySessions();
  renderBudgetBreakdown();

  // Pindah otomatis ke Tab Riwayat untuk melihat struk yang tersimpan
  switchTab('view-history');
}

/**
 * Render Tab Riwayat Belanja
 */
function renderHistorySessions() {
  const container = document.getElementById('history-sessions-container');
  const prevTotalEl = document.getElementById('hist-prev-total');

  if (state.history.length > 0) {
    prevTotalEl.textContent = `Rp ${formatRupiah(state.history[0].totalSpent)}`;
  }

  if (state.history.length === 0) {
    container.innerHTML = `
      <div class="empty-state-card glass-card">
        <i data-lucide="history" style="width: 32px; height: 32px; color: var(--text-muted);"></i>
        <h3>Belum Ada Riwayat Belanja</h3>
        <p>Selesaikan sesi belanja di Tab Troli untuk mencatat struk pertama kamu.</p>
      </div>
    `;
    updateIcons();
    return;
  }

  container.innerHTML = state.history.map((session) => {
    const isSafe = session.totalSpent <= session.safetyCap;
    const statusClass = isSafe ? 'safe' : 'danger';
    const statusText = isSafe ? 'Sesuai Anggaran' : 'Overbudget';

    return `
      <div class="history-card" data-session-id="${session.id}">
        <div class="history-card-header">
          <div class="hist-date-title">
            <i data-lucide="receipt"></i> ${session.date}
          </div>
          <span class="hist-status-pill ${statusClass}">${statusText}</span>
        </div>

        <div class="hist-summary-row">
          <span class="hist-items-count">${session.itemCount} macam item dibeli</span>
          <span class="hist-total-amount">Rp ${formatRupiah(session.totalSpent)}</span>
        </div>

        <div class="hist-card-footer">
          <span>Hemat diskon: <strong class="text-emerald">Rp ${formatRupiah(session.totalSaved || 0)}</strong></span>
          <button type="button" class="btn-text-action btn-view-receipt" data-id="${session.id}">
            Lihat Struk <i data-lucide="arrow-right"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  updateIcons();

  // Bind view receipt details
  container.querySelectorAll('.btn-view-receipt').forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      openHistoryDetailModal(id);
    };
  });

  container.querySelectorAll('.history-card').forEach((card) => {
    card.onclick = () => {
      const id = card.getAttribute('data-session-id');
      openHistoryDetailModal(id);
    };
  });
}

function openHistoryDetailModal(sessionId) {
  const session = state.history.find((s) => s.id === sessionId);
  if (!session) return;

  const modal = document.getElementById('history-detail-modal');
  const body = document.getElementById('history-modal-body');
  const reloadBtn = document.getElementById('btn-reload-to-cart');

  body.innerHTML = `
    <div class="receipt-paper glass-card-nested">
      <div class="receipt-header">
        <h3>STRUK BELANJA ARSIP</h3>
        <p>Tanggal: ${session.date}</p>
      </div>

      <div class="receipt-divider"></div>

      <div class="receipt-items-summary">
        ${session.items.map((it) => `
          <div class="receipt-item-row">
            <div class="receipt-item-left">
              <span class="receipt-item-name">${it.name}</span>
              <span class="receipt-item-sub">${it.qty} ${it.unit} x Rp ${formatRupiah(it.unitPrice)}</span>
            </div>
            <div class="receipt-item-price">
              Rp ${formatRupiah(it.finalRowTotal)}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="receipt-divider"></div>

      <div class="receipt-totals">
        <div class="receipt-row">
          <span>Batas Dompet:</span>
          <strong>Rp ${formatRupiah(session.safetyCap)}</strong>
        </div>
        <div class="receipt-row">
          <span>Total Pengeluaran:</span>
          <strong class="text-primary font-lg">Rp ${formatRupiah(session.totalSpent)}</strong>
        </div>
        <div class="receipt-row text-emerald">
          <span>Penghematan Diskon:</span>
          <strong>Rp ${formatRupiah(session.totalSaved || 0)}</strong>
        </div>
      </div>
    </div>
  `;

  reloadBtn.onclick = () => {
    if (confirm('Salin semua item dari struk ini ke troli belanja aktif sekarang?')) {
      const newItems = session.items.map((it) => ({
        id: 'cart_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
        name: it.name,
        category: it.category || 'Bahan Pokok',
        unit: it.unit || 'pcs',
        qty: it.qty || 1,
        unitPrice: it.unitPrice || 0,
        discountType: it.discountType || 'none',
        d1: it.d1 || 0,
        d2: it.d2 || 0
      }));

      state.cart = [...newItems, ...state.cart];
      saveState();
      renderCartItems();
      modal.classList.add('hidden');
      switchTab('view-cart');
      sound.playSuccess();
    }
  };

  modal.classList.remove('hidden');
  updateIcons();
}

// ==========================================================================
// TAB 3: ANGGARAN & BREAKDOWN KATEGORI
// ==========================================================================

function renderBudgetBreakdown() {
  const container = document.getElementById('category-breakdown-bars');
  const badge = document.getElementById('breakdown-items-badge');

  badge.textContent = `${state.cart.length} item aktif`;

  const categories = [
    'Bahan Pokok',
    'Makanan & Minuman',
    'Bumbu & Dapur',
    'Perlengkapan Mandi & Cuci',
    'Camilan',
    'Lainnya'
  ];

  const catTotals = {};
  let overallTotal = 0;

  categories.forEach((cat) => { catTotals[cat] = 0; });

  state.cart.forEach((item) => {
    const calc = calculateItemPricing(item);
    const cat = item.category || 'Lainnya';
    catTotals[cat] = (catTotals[cat] || 0) + calc.finalRowTotal;
    overallTotal += calc.finalRowTotal;
  });

  const colors = {
    'Bahan Pokok': '#10b981',
    'Makanan & Minuman': '#38bdf8',
    'Bumbu & Dapur': '#f59e0b',
    'Perlengkapan Mandi & Cuci': '#6366f1',
    'Camilan': '#ec4899',
    'Lainnya': '#94a3b8'
  };

  container.innerHTML = categories.map((cat) => {
    const spent = catTotals[cat] || 0;
    const pct = overallTotal > 0 ? Math.round((spent / overallTotal) * 100) : 0;
    const color = colors[cat] || '#38bdf8';

    return `
      <div class="cat-bar-item">
        <div class="cat-bar-meta">
          <span class="cat-bar-name">${cat}</span>
          <span class="cat-bar-spent">Rp ${formatRupiah(spent)} (${pct}%)</span>
        </div>
        <div class="cat-track">
          <div class="cat-fill" style="width: ${pct}%; background: ${color};"></div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================================================
// NAVIGATION TAB SWITCHING
// ==========================================================================

function switchTab(targetId) {
  state.activeTab = targetId;

  // Update tabs views
  document.querySelectorAll('.app-view').forEach((view) => {
    if (view.id === targetId) {
      view.classList.remove('hidden');
      view.classList.add('active');
    } else {
      view.classList.add('hidden');
      view.classList.remove('active');
    }
  });

  // Update nav buttons
  document.querySelectorAll('.nav-tab-btn').forEach((btn) => {
    const target = btn.getAttribute('data-target');
    btn.classList.toggle('active', target === targetId);
  });

  sound.playClick();

  if (targetId === 'view-cart') {
    renderCartItems();
  } else if (targetId === 'view-history') {
    renderHistorySessions();
  } else if (targetId === 'view-budget') {
    document.getElementById('input-safety-cap-val').value = formatRupiah(state.safetyCap);
    renderBudgetBreakdown();
  }
}

// ==========================================================================
// PWA INSTALLATION SUPPORT
// ==========================================================================

let deferredPrompt = null;

function setupPWA() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch((err) => {
        console.warn('SW registration failed:', err);
      });
    });
  }

  const pwaBtn = document.getElementById('btn-pwa-install');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (pwaBtn) pwaBtn.classList.remove('hidden');
  });

  if (pwaBtn) {
    pwaBtn.onclick = async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          pwaBtn.classList.add('hidden');
        }
        deferredPrompt = null;
      }
    };
  }

  window.addEventListener('appinstalled', () => {
    if (pwaBtn) pwaBtn.classList.add('hidden');
    deferredPrompt = null;
  });
}

// ==========================================================================
// EVENT LISTENERS & APP INITIALIZATION
// ==========================================================================

function setupEventListeners() {
  // Bottom Navigation tabs
  document.querySelectorAll('.nav-tab-btn').forEach((btn) => {
    btn.onclick = () => {
      const target = btn.getAttribute('data-target');
      switchTab(target);
    };
  });

  // Sound Toggle
  const soundBtn = document.getElementById('btn-sound-toggle');
  const soundIcon = document.getElementById('sound-icon');
  soundBtn.onclick = () => {
    state.soundEnabled = !state.soundEnabled;
    localStorage.setItem(STORAGE_KEYS.SOUND_ENABLED, JSON.stringify(state.soundEnabled));
    soundIcon.setAttribute('data-lucide', state.soundEnabled ? 'volume-2' : 'volume-x');
    updateIcons();
    if (state.soundEnabled) sound.playClick();
  };

  // Add Item Buttons
  document.getElementById('btn-open-add-modal').onclick = () => openItemModal();
  document.getElementById('btn-empty-add').onclick = () => openItemModal();
  document.getElementById('btn-close-item-modal').onclick = closeItemModal;
  document.getElementById('btn-save-item').onclick = saveItemFromModal;

  // Category Filter Pills
  document.querySelectorAll('.filter-pill').forEach((pill) => {
    pill.onclick = () => {
      document.querySelectorAll('.filter-pill').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      state.currentCategoryFilter = pill.getAttribute('data-category');
      sound.playClick();
      renderCartItems();
    };
  });

  // Search Input in Trolley
  const searchInput = document.getElementById('cart-search-input');
  const searchClear = document.getElementById('cart-search-clear');

  searchInput.oninput = (e) => {
    state.searchQuery = e.target.value;
    searchClear.classList.toggle('hidden', !state.searchQuery);
    renderCartItems();
  };

  searchClear.onclick = () => {
    searchInput.value = '';
    state.searchQuery = '';
    searchClear.classList.add('hidden');
    renderCartItems();
  };

  // Stepper Qty in Modal
  const modalQtyInput = document.getElementById('item-qty-input');
  document.getElementById('btn-qty-plus').onclick = () => {
    modalQtyInput.value = (parseFloat(modalQtyInput.value) || 0) + 1;
    sound.playClick();
    updateModalDiscountPreview();
  };

  document.getElementById('btn-qty-minus').onclick = () => {
    const val = parseFloat(modalQtyInput.value) || 1;
    if (val > 1) {
      modalQtyInput.value = val - 1;
      sound.playClick();
      updateModalDiscountPreview();
    }
  };

  modalQtyInput.oninput = updateModalDiscountPreview;

  // Category Selector Chips inside Modal
  document.querySelectorAll('.cat-chip').forEach((chip) => {
    chip.onclick = () => {
      const cat = chip.getAttribute('data-cat');
      setCategoryChips(cat);
      sound.playClick();
    };
  });

  // Modal Currency Input Formatter
  const modalPriceInput = document.getElementById('item-price-input');
  modalPriceInput.oninput = (e) => {
    const parsed = parseRupiahInput(e.target.value);
    e.target.value = formatRupiah(parsed);
    updateModalComparatorPreview();
    updateModalDiscountPreview();
  };

  // Quick Price Add Chips in Modal
  document.querySelectorAll('.btn-price-chip').forEach((chip) => {
    chip.onclick = () => {
      const add = parseInt(chip.getAttribute('data-add'), 10) || 0;
      const cur = parseRupiahInput(modalPriceInput.value);
      modalPriceInput.value = formatRupiah(cur + add);
      sound.playClick();
      updateModalComparatorPreview();
      updateModalDiscountPreview();
    };
  });

  // Realtime Item Name lookup for price comparator
  document.getElementById('item-name-input').oninput = () => {
    updateModalComparatorPreview();
  };

  // Discount Mode Switcher
  document.querySelectorAll('.mode-btn').forEach((btn) => {
    btn.onclick = () => {
      const mode = btn.getAttribute('data-mode');
      setDiscountMode(mode);
      sound.playClick();
    };
  });

  // Single Discount Presets
  document.querySelectorAll('.disc-preset').forEach((btn) => {
    btn.onclick = () => {
      document.getElementById('input-discount-single').value = btn.getAttribute('data-d1');
      sound.playClick();
      updateModalDiscountPreview();
    };
  });

  // Tiered Discount Presets
  document.querySelectorAll('.disc-tiered-preset').forEach((btn) => {
    btn.onclick = () => {
      document.getElementById('input-discount-d1').value = btn.getAttribute('data-d1');
      document.getElementById('input-discount-d2').value = btn.getAttribute('data-d2');
      sound.playClick();
      updateModalDiscountPreview();
    };
  });

  document.getElementById('input-discount-single').oninput = updateModalDiscountPreview;
  document.getElementById('input-discount-d1').oninput = updateModalDiscountPreview;
  document.getElementById('input-discount-d2').oninput = updateModalDiscountPreview;

  // Checkout Actions
  document.getElementById('btn-checkout-session').onclick = openCheckoutModal;
  document.getElementById('btn-close-checkout-modal').onclick = closeCheckoutModal;
  document.getElementById('btn-confirm-save-receipt').onclick = confirmCheckoutAndSave;
  document.getElementById('btn-close-history-modal').onclick = () => {
    document.getElementById('history-detail-modal').classList.add('hidden');
  };

  // Cloud Sync Firebase Modal Handlers
  const cloudModal = document.getElementById('cloud-sync-modal');
  const cloudTextarea = document.getElementById('firebase-config-textarea');
  
  document.getElementById('btn-cloud-sync').onclick = () => {
    if (window.FirebaseSync && typeof window.FirebaseSync.getConfig === 'function') {
      const cfg = window.FirebaseSync.getConfig();
      if (cfg && !cloudTextarea.value.trim()) {
        const cleanCfg = { ...cfg };
        delete cleanCfg.source;
        cloudTextarea.value = JSON.stringify(cleanCfg, null, 2);
      }
    }
    cloudModal.classList.remove('hidden');
    sound.playClick();
  };

  document.getElementById('btn-close-cloud-modal').onclick = () => {
    cloudModal.classList.add('hidden');
  };

  // Helper parser fleksibel: mendukung JSON maupun JS Object literal dari Firebase Console
  function parseFirebaseConfigInput(text) {
    if (!text || !text.trim()) return null;
    const raw = text.trim();
    try {
      return JSON.parse(raw);
    } catch (_) {}

    const extract = (key) => {
      const match = raw.match(new RegExp(`['"]?${key}['"]?\\s*:\\s*['"\`]([^'"\`]+)['"\`]`));
      return match ? match[1] : '';
    };

    const apiKey = extract('apiKey');
    const projectId = extract('projectId');
    if (apiKey && projectId) {
      return {
        apiKey,
        projectId,
        authDomain: extract('authDomain'),
        storageBucket: extract('storageBucket'),
        messagingSenderId: extract('messagingSenderId'),
        appId: extract('appId')
      };
    }
    return null;
  }

  document.getElementById('btn-save-firebase-config').onclick = async () => {
    const parsed = parseFirebaseConfigInput(cloudTextarea.value);
    if (!parsed || !parsed.apiKey || !parsed.projectId) {
      alert('Format konfigurasi tidak valid! Pastikan mengandung apiKey dan projectId dari Firebase Console.');
      sound.playWarning();
      return;
    }

    try {
      if (window.FirebaseSync && typeof window.FirebaseSync.saveCustomConfig === 'function') {
        const ok = await window.FirebaseSync.saveCustomConfig(parsed);
        if (ok) {
          alert('Berhasil terhubung ke Firebase! Database sekarang tersinkron realtime dengan HP & PC.');
          sound.playSuccess();
        } else {
          alert('Gagal menyambung ke Firebase. Periksa kembali apiKey & Security Rules Firestore Anda.');
          sound.playWarning();
        }
      }
    } catch (err) {
      alert('Error: ' + err.message);
      sound.playWarning();
    }
  };

  document.getElementById('btn-clear-firebase-config').onclick = () => {
    if (confirm('Hapus konfigurasi Firebase yang tersimpan? Aplikasi akan kembali ke mode penyimpanan lokal offline.')) {
      if (window.FirebaseSync && typeof window.FirebaseSync.clearCustomConfig === 'function') {
        window.FirebaseSync.clearCustomConfig();
      }
      cloudTextarea.value = '';
      alert('Konfigurasi Firebase lokal berhasil dihapus.');
      sound.playClick();
    }
  };

  document.getElementById('btn-manual-sync-now').onclick = () => {
    if (window.FirebaseSync && typeof window.FirebaseSync.pushLocalState === 'function') {
      window.FirebaseSync.pushLocalState(true);
      alert('Perintah sinkronisasi manual telah dikirim ke Cloud Firestore.');
      sound.playSuccess();
    }
  };

  // Safety Cap Settings on Tab Budget
  const capInput = document.getElementById('input-safety-cap-val');
  capInput.oninput = (e) => {
    const val = parseRupiahInput(e.target.value);
    e.target.value = formatRupiah(val);
  };

  document.querySelectorAll('.btn-budget-pill').forEach((pill) => {
    pill.onclick = () => {
      if (pill.hasAttribute('data-add')) {
        const add = parseInt(pill.getAttribute('data-add'), 10);
        const cur = parseRupiahInput(capInput.value);
        capInput.value = formatRupiah(cur + add);
      } else if (pill.hasAttribute('data-set')) {
        const setVal = parseInt(pill.getAttribute('data-set'), 10);
        capInput.value = formatRupiah(setVal);
      }
      sound.playClick();
    };
  });

  document.getElementById('btn-save-safety-cap').onclick = () => {
    const val = parseRupiahInput(capInput.value);
    if (val < 10000) {
      alert('Batas minimal dompet adalah Rp 10.000!');
      return;
    }
    state.safetyCap = val;
    saveState();
    sound.playSuccess();
    updateSafetyCapBanner();
    renderBudgetBreakdown();
    alert(`Batas anggaran dompet berhasil disimpan: Rp ${formatRupiah(val)}!`);
  };

  // Export Data JSON
  document.getElementById('btn-export-data').onclick = () => {
    const backupData = {
      safetyCap: state.safetyCap,
      cart: state.cart,
      history: state.history,
      prevCatalog: state.prevCatalog,
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `smartgrocery_backup_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    sound.playSuccess();
  };

  // Import Data JSON
  const fileInput = document.getElementById('file-import-input');
  document.getElementById('btn-import-trigger').onclick = () => fileInput.click();
  fileInput.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const data = JSON.parse(evt.target.result);
        if (data.safetyCap) state.safetyCap = data.safetyCap;
        if (data.cart) state.cart = data.cart;
        if (data.history) state.history = data.history;
        if (data.prevCatalog) state.prevCatalog = data.prevCatalog;
        saveState();
        renderCartItems();
        renderHistorySessions();
        renderBudgetBreakdown();
        alert('Data berhasil diimpor!');
        sound.playSuccess();
      } catch (err) {
        alert('Format file JSON tidak valid!');
      }
    };
    reader.readAsText(file);
    fileInput.value = '';
  };

  // Reset Demo Data
  document.getElementById('btn-reset-demo').onclick = () => {
    if (confirm('Kembalikan ke data demo awal anak rantau? Data kustom kamu saat ini akan di-reset.')) {
      state.safetyCap = 500000;
      state.cart = [...DEFAULT_INITIAL_CART];
      state.history = [...DEFAULT_HISTORY];
      state.prevCatalog = { ...DEFAULT_PREV_CATALOG };
      saveState();
      renderCartItems();
      renderHistorySessions();
      renderBudgetBreakdown();
      sound.playSuccess();
    }
  };
}

// ==========================================================================
// APP BOOTSTRAP
// ==========================================================================

function initApp() {
  loadStateFromStorage();
  setupEventListeners();
  setupPWA();
  renderCartItems();
  renderHistorySessions();
  renderBudgetBreakdown();
  updateIcons();
}

window.addEventListener('DOMContentLoaded', initApp);
