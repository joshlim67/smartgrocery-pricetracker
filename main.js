// ==========================================================================
// GROCERYX • SMART GROCERY & BUDGET SAFETY TRACKER (PWA)
// Liquid Glass Translucent Design Architecture with Full i18n
// ==========================================================================

// ==========================================================================
// CONSTANTS, DICTIONARY & SEED DATA
// ==========================================================================

const STORAGE_KEYS = {
  SAFETY_CAP: 'sg_safety_cap_v1',
  CART: 'sg_cart_items_v1',
  HISTORY: 'sg_history_sessions_v1',
  PREV_CATALOG: 'sg_prev_catalog_v1',
  SOUND_ENABLED: 'sg_sound_enabled_v1',
  CURRENT_USER: 'sg_current_user_v1',
  USERS_LIST: 'sg_users_list_v1',
  THEME: 'sg_theme_v1',
  LANGUAGE: 'sg_language_v1',
  CUSTOM_CATEGORIES: 'sg_custom_categories_v1'
};

const DEFAULT_ADMIN = {
  username: 'josh',
  email: 'joshualim@mutiarabangsa.sch.id',
  password: 'hellojosh672009',
  role: 'admin'
};

// Clean Categories without any emojis
const DEFAULT_CATEGORIES_ID = [
  'Bahan Pokok',
  'Makanan Instan & Olahan',
  'Daging & Seafood Segar',
  'Sayur & Buah Segar',
  'Bumbu & Dapur',
  'Susu, Keju & Olahan',
  'Kopi, Teh & Minuman',
  'Perlengkapan Mandi & Tubuh',
  'Sabun Cuci & Deterjen',
  'Camilan & Snack',
  'Pembersih Rumah & Dapur',
  'Kesehatan & Obat-obatan',
  'Lainnya'
];

const DEFAULT_CATEGORIES_EN = [
  'Staple Foods',
  'Instant & Processed Food',
  'Meat & Seafood',
  'Fresh Vegetables & Fruits',
  'Kitchen Spices & Seasoning',
  'Dairy, Cheese & Milk',
  'Coffee, Tea & Beverages',
  'Bath & Body Care',
  'Laundry & Detergent',
  'Snacks & Biscuits',
  'Household Cleaning',
  'Health & Medicine',
  'Others'
];

const CATEGORY_MAP_ID_TO_EN = {
  'Bahan Pokok': 'Staple Foods',
  'Makanan Instan & Olahan': 'Instant & Processed Food',
  'Daging & Seafood Segar': 'Meat & Seafood',
  'Sayur & Buah Segar': 'Fresh Vegetables & Fruits',
  'Bumbu & Dapur': 'Kitchen Spices & Seasoning',
  'Susu, Keju & Olahan': 'Dairy, Cheese & Milk',
  'Kopi, Teh & Minuman': 'Coffee, Tea & Beverages',
  'Perlengkapan Mandi & Tubuh': 'Bath & Body Care',
  'Sabun Cuci & Deterjen': 'Laundry & Detergent',
  'Camilan & Snack': 'Snacks & Biscuits',
  'Pembersih Rumah & Dapur': 'Household Cleaning',
  'Kesehatan & Obat-obatan': 'Health & Medicine',
  'Lainnya': 'Others'
};

const CATEGORY_MAP_EN_TO_ID = Object.fromEntries(
  Object.entries(CATEGORY_MAP_ID_TO_EN).map(([k, v]) => [v, k])
);

// I18N DICTIONARY (INDONESIAN & ENGLISH)
const I18N = {
  id: {
    appSubtitle: 'Mode Troli Supermarket',
    cartEmptyTitle: 'Troli Belanja Masih Kosong',
    cartEmptyDesc: 'Mulai tambahkan barang saat kamu menyusuri lorong rak supermarket.',
    addFirstItem: 'Tambah Item Pertama',
    addToCartBtn: 'Tambah Barang ke Troli',
    totalItemsPrefix: 'Total Barang:',
    savedPrefix: 'Hemat',
    totalPriceTitle: 'Total Belanja:',
    checkoutBtn: 'Selesaikan & Simpan Struk',
    searchPlaceholder: 'Cari item dalam troli...',
    categoryAll: 'Semua',
    historyTitle: 'Riwayat Belanja Bulanan',
    historyDesc: 'Data struk tersimpan sebagai acuan komparator harga belanja berikutnya.',
    histCurrLabel: 'Total Belanja Sesi Ini',
    histCurrCaption: 'Sesi berjalan',
    histPrevLabel: 'Belanja Sebelumnya',
    histPrevCaption: 'Pembanding Acuan',
    exportBtn: 'Ekspor Data',
    clearBtn: 'Kosongkan Data',
    emptyHistoryTitle: 'Belum Ada Riwayat Struk',
    emptyHistoryDesc: 'Struk belanja yang telah diselesaikan akan tercatat rapi di sini.',
    viewReceipt: 'Lihat Struk',
    budgetTitle: 'Pengendali Anggaran (Safety Cap)',
    budgetDesc: 'Lindungi dompet dan kontrol pengeluaran belanja supermarket secara akurat.',
    safetyCapLabel: 'Batas Maksimal Dompet Belanja:',
    safetyCapBadge: 'Wajib Diisi',
    saveBudgetBtn: 'Simpan Batas Anggaran',
    spendingBreakdownTitle: 'Alokasi Belanja per Kategori',
    tipsHeader: 'Tips Belanja Cerdas di Supermarket',
    tip1: '<strong>Perhatikan Harga Satuan:</strong> Kemasan besar belum tentu lebih murah, cek komparator otomatis di GroceryX.',
    tip2: '<strong>Waspada Promo Bertingkat:</strong> Diskon 50%+20% berarti diskon total 60%, bukan 70%.',
    tip3: '<strong>Dahulukan Bahan Pokok:</strong> Prioritaskan bahan pokok penting sebelum membeli camilan sekunder.',
    navCart: 'Belanja',
    navHistory: 'Riwayat',
    navBudget: 'Anggaran',
    addItemModalTitle: 'Tambah Item Belanja',
    editItemModalTitle: 'Edit Item Belanja',
    itemName: 'Nama Produk Supermarket',
    autoCompareHint: 'Auto-compare aktif',
    categoryLabel: 'Kategori Produk',
    addNewCatBtn: 'Tambah Kategori Baru',
    unitLabel: 'Satuan',
    qtyLabel: 'Kuantitas (Qty)',
    unitPriceLabel: 'Harga Satuan Normal',
    perItemHint: 'per satuan item',
    discountCalcTitle: 'Kalkulator Diskon Promo',
    noDiscount: 'Tanpa Diskon',
    singleDiscount: 'Tunggal',
    tieredDiscount: 'Bertingkat',
    discountSingleLabel: 'Diskon (%) :',
    discountD1Label: 'Diskon 1 (%)',
    discountD2Label: 'Diskon 2 (%)',
    beforeDiscount: 'Harga Sebelum Diskon:',
    savedCut: 'Potongan Hemat:',
    finalRowPrice: 'Harga Akhir Baris:',
    buyingTipsTitle: 'Tips Cerdas Saat Pembelian',
    buyingTip1: '<strong>Perhatikan Harga Satuan:</strong> Selalu cek harga per satuan kilogram/liter, bukan semata-mata kemasan besar.',
    buyingTip2: '<strong>Waspada Promo Diskon Bertingkat:</strong> Promo 50%+20% berarti diskon riil 60% (bukan 70%), cek kalkulator di atas.',
    buyingTip3: '<strong>Cek Tanggal Kedaluwarsa:</strong> Periksa expired date barang supermarket terutama barang diskon besar.',
    saveItemBtnAdd: 'Masukkan ke Keranjang',
    saveItemBtnEdit: 'Simpan Perubahan',
    saveCatBtn: 'Simpan',
    settingsTitle: 'Pengaturan & Konfigurasi',
    settingsLangTitle: 'Bahasa / Language',
    settingsLangSub: 'Pilih bahasa tampilan antarmuka aplikasi',
    settingsThemeTitle: 'Pilihan Tema Tampilan',
    settingsThemeSub: 'Pilih tema kaca transparan (Liquid Glass) favorit',
    themeBrightSub: 'Terang kristal & modern (Default)',
    themeIceSub: 'Kaca es transparan biru cyan',
    themeAuroraSub: 'Gradasi violet & peach transparan',
    themeMidnightSub: 'Kaca transparan gelap & neon',
    settingsAudioTitle: 'Audio & Efek Suara',
    settingsAudioSub: 'Suara responsif saat menambah item dan checkout',
    settingsSoundSwitch: 'Aktifkan Efek Suara Belanja',
    settingsAccountTitle: 'Akun & Keamanan',
    changePwdTitle: 'Ganti Password Akun',
    currentPwdLabel: 'Password Saat Ini',
    newPwdLabel: 'Password Baru',
    confirmPwdLabel: 'Konfirmasi Password Baru',
    saveNewPwdBtn: 'Simpan Password Baru',
    logoutBtn: 'Keluar dari Akun (Logout)',
    adminFirebaseTitle: 'Sinkronisasi Cloud Firebase',
    adminFirebaseSub: 'Kelola koneksi multi-device realtime database',
    adminCloudDesc: 'Fitur sinkronisasi cloud ini hanya tampil khusus untuk administrator (joshualim@mutiarabangsa.sch.id).',
    openCloudBtn: 'Buka Konfigurasi Cloud Firebase',
    authEmailLabel: 'Email',
    authPwdLabel: 'Password',
    authLoginSubmit: 'Masuk ke GroceryX',
    regUsernameLabel: 'Username',
    regEmailLabel: 'Email',
    regPwdLabel: 'Password',
    authRegSubmit: 'Buat Akun Sekarang',
    budgetSafe: 'Anggaran Aman',
    approachingLimit: 'Mendekati Batas',
    overBudget: 'Over Budget!',
    remainingWallet: 'Sisa Dompet:',
    deficit: 'Kelebihan Anggaran (Defisit):',
    spent: 'Terpakai:',
    maxLimit: 'Batas Maks:',
    priceStable: '= Stabil (Rp 0)',
    priceHigher: '↑ Lebih Mahal',
    priceLower: '↓ Lebih Hemat',
    newItem: '🆕 Item Baru',
    checkoutReceiptTitle: 'GROCERYX BELANJA SUPERMARKET',
    receiptDatePrefix: 'Tanggal: ',
    receiptLimit: 'Batas Anggaran:',
    receiptNetTotal: 'Total Belanja Bersih:',
    receiptDiscountSaved: 'Total Diskon Dihemat:',
    receiptSafeTitle: 'Hebat! Belanja Terkendali',
    receiptSafeDesc: 'Pengeluaran belanjaan Anda masih berada di bawah batas keamanan anggaran.',
    receiptWarningTitle: 'Perhatian! Melebihi Batas Anggaran',
    receiptWarningDesc: 'Pengeluaran melebihi target batas dompet bulanan Anda.',
    confirmSaveReceiptBtn: 'Simpan ke Riwayat & Selesai',
    historyDetailModalTitle: 'Detail Struk GroceryX',
    reloadToCartBtn: 'Salin Semua Item ke Troli Baru'
  },
  en: {
    appSubtitle: 'Supermarket Cart Mode',
    cartEmptyTitle: 'Your Shopping Cart is Empty',
    cartEmptyDesc: 'Start adding items as you browse the supermarket aisles.',
    addFirstItem: 'Add First Item',
    addToCartBtn: 'Add Item to Cart',
    totalItemsPrefix: 'Total Items:',
    savedPrefix: 'Saved',
    totalPriceTitle: 'Total Spent:',
    checkoutBtn: 'Checkout & Save Receipt',
    searchPlaceholder: 'Search items in cart...',
    categoryAll: 'All',
    historyTitle: 'Monthly Shopping History',
    historyDesc: 'Saved receipts act as price references for future grocery runs.',
    histCurrLabel: 'Current Session Spent',
    histCurrCaption: 'Active session',
    histPrevLabel: 'Previous Spending',
    histPrevCaption: 'Reference baseline',
    exportBtn: 'Export Data',
    clearBtn: 'Clear All Data',
    emptyHistoryTitle: 'No Receipts Yet',
    emptyHistoryDesc: 'Completed grocery receipts will be neatly stored here.',
    viewReceipt: 'View Receipt',
    budgetTitle: 'Budget Controller (Safety Cap)',
    budgetDesc: 'Protect your wallet and track grocery spending accurately.',
    safetyCapLabel: 'Maximum Grocery Budget Limit:',
    safetyCapBadge: 'Required',
    saveBudgetBtn: 'Save Budget Limit',
    spendingBreakdownTitle: 'Spending Breakdown by Category',
    tipsHeader: 'Smart Grocery Shopping Tips',
    tip1: '<strong>Check Unit Prices:</strong> Bulk packages are not always cheaper. Check unit prices per kg/liter.',
    tip2: '<strong>Beware Tiered Discounts:</strong> 50%+20% discount is equivalent to 60% total discount, not 70%.',
    tip3: '<strong>Prioritize Staples:</strong> Always secure your essential groceries before buying impulse snacks.',
    navCart: 'Cart',
    navHistory: 'History',
    navBudget: 'Budget',
    addItemModalTitle: 'Add Grocery Item',
    editItemModalTitle: 'Edit Grocery Item',
    itemName: 'Supermarket Product Name',
    autoCompareHint: 'Auto-compare active',
    categoryLabel: 'Product Category',
    addNewCatBtn: 'Add New Category',
    unitLabel: 'Unit',
    qtyLabel: 'Quantity (Qty)',
    unitPriceLabel: 'Normal Unit Price',
    perItemHint: 'per single item',
    discountCalcTitle: 'Promo Discount Calculator',
    noDiscount: 'No Discount',
    singleDiscount: 'Single',
    tieredDiscount: 'Tiered',
    discountSingleLabel: 'Discount (%) :',
    discountD1Label: 'Discount 1 (%)',
    discountD2Label: 'Discount 2 (%)',
    beforeDiscount: 'Price Before Discount:',
    savedCut: 'Discount Savings:',
    finalRowPrice: 'Final Item Total:',
    buyingTipsTitle: 'Smart Buying Tips',
    buyingTip1: '<strong>Check Unit Price:</strong> Always check price per kilogram/liter rather than judging packaging size.',
    buyingTip2: '<strong>Beware of Tiered Promos:</strong> 50%+20% discount actually saves 60% (not 70%), see the calculator above.',
    buyingTip3: '<strong>Check Expiration Dates:</strong> Verify expiry dates on supermarket shelves, especially on clearance promos.',
    saveItemBtnAdd: 'Add to Cart',
    saveItemBtnEdit: 'Save Changes',
    saveCatBtn: 'Save',
    settingsTitle: 'Settings & Configuration',
    settingsLangTitle: 'Language',
    settingsLangSub: 'Select application display language',
    settingsThemeTitle: 'Appearance Theme',
    settingsThemeSub: 'Choose your preferred Liquid Glass translucent theme',
    themeBrightSub: 'Bright crystal & modern (Default)',
    themeIceSub: 'Frosty ice cyan translucent glass',
    themeAuroraSub: 'Soft violet & peach pastel glass',
    themeMidnightSub: 'Dark neon nocturnal glass',
    settingsAudioTitle: 'Audio & Sound Effects',
    settingsAudioSub: 'Haptic sound feedback during shopping & checkout',
    settingsSoundSwitch: 'Enable Shopping Sound Effects',
    settingsAccountTitle: 'Account & Security',
    changePwdTitle: 'Change Account Password',
    currentPwdLabel: 'Current Password',
    newPwdLabel: 'New Password',
    confirmPwdLabel: 'Confirm New Password',
    saveNewPwdBtn: 'Save New Password',
    logoutBtn: 'Logout of Account',
    adminFirebaseTitle: 'Firebase Cloud Sync',
    adminFirebaseSub: 'Manage multi-device realtime database connection',
    adminCloudDesc: 'Cloud synchronization is exclusively accessible to the administrator (joshualim@mutiarabangsa.sch.id).',
    openCloudBtn: 'Open Firebase Cloud Configuration',
    authEmailLabel: 'Email Address',
    authPwdLabel: 'Password',
    authLoginSubmit: 'Log In to GroceryX',
    regUsernameLabel: 'Username',
    regEmailLabel: 'Email Address',
    regPwdLabel: 'Password',
    authRegSubmit: 'Create Account Now',
    budgetSafe: 'Budget Safe',
    approachingLimit: 'Near Budget Limit',
    overBudget: 'Over Budget!',
    remainingWallet: 'Remaining Wallet:',
    deficit: 'Budget Deficit (Overspent):',
    spent: 'Spent:',
    maxLimit: 'Max Limit:',
    priceStable: '= Stable (Rp 0)',
    priceHigher: '↑ More Expensive',
    priceLower: '↓ Cheaper (Saved)',
    newItem: '🆕 New Item',
    checkoutReceiptTitle: 'GROCERYX SUPERMARKET RECEIPT',
    receiptDatePrefix: 'Date: ',
    receiptLimit: 'Budget Limit:',
    receiptNetTotal: 'Net Total Spent:',
    receiptDiscountSaved: 'Total Discount Saved:',
    receiptSafeTitle: 'Awesome! Budget in Control',
    receiptSafeDesc: 'Your total grocery spend is safely within your allocated budget.',
    receiptWarningTitle: 'Warning! Exceeded Budget',
    receiptWarningDesc: 'Your grocery spending has exceeded your set monthly safety cap.',
    confirmSaveReceiptBtn: 'Save Receipt & Complete',
    historyDetailModalTitle: 'GroceryX Receipt Details',
    reloadToCartBtn: 'Copy All Items to New Cart'
  }
};

// Seed katalog belanja referensi komparator harga
const DEFAULT_PREV_CATALOG = {
  'Minyak Goreng 2L': { price: 32000, unit: 'liter', category: 'Bahan Pokok' },
  'Beras Ramos 5kg': { price: 74000, unit: 'kg', category: 'Bahan Pokok' },
  'Telur Ayam 1kg': { price: 28000, unit: 'kg', category: 'Bahan Pokok' },
  'Indomie Goreng (Dus)': { price: 112000, unit: 'dus', category: 'Makanan Instan & Olahan' },
  'Susu UHT Full Cream 1L': { price: 19500, unit: 'liter', category: 'Susu, Keju & Olahan' },
  'Sunlight Jeruk Nipis 700ml': { price: 14500, unit: 'pack', category: 'Sabun Cuci & Deterjen' },
  'Lifebuoy Sabun Mandi 4x110g': { price: 23000, unit: 'pack', category: 'Perlengkapan Mandi & Tubuh' },
  'Kopi Kapal Api Mix 10s': { price: 14000, unit: 'pack', category: 'Kopi, Teh & Minuman' },
  'Gula Pasir 1kg': { price: 17500, unit: 'kg', category: 'Bahan Pokok' },
  'Bawang Merah 500g': { price: 20000, unit: 'kg', category: 'Bumbu & Dapur' },
  'Biskuit Roma Kelapa 300g': { price: 11500, unit: 'pack', category: 'Camilan & Snack' },
  'Pasta Gigi Pepsodent 190g': { price: 16000, unit: 'pcs', category: 'Perlengkapan Mandi & Tubuh' }
};

// Seed riwayat belanja sebelumnya
const DEFAULT_HISTORY = [
  {
    id: 'hist_last_month_01',
    date: '15 Oktober 2026',
    timestamp: 1789456800000,
    note: 'Belanja Bulanan (Supermarket)',
    safetyCap: 500000,
    totalSpent: 388500,
    totalSaved: 34500,
    itemCount: 8,
    items: [
      { name: 'Beras Ramos 5kg', qty: 1, unit: 'kg', unitPrice: 74000, finalUnitPrice: 74000, discountType: 'none', d1: 0, d2: 0, finalRowTotal: 74000, normalRowTotal: 74000, savedAmount: 0, category: 'Bahan Pokok' },
      { name: 'Minyak Goreng 2L', qty: 1, unit: 'liter', unitPrice: 32000, finalUnitPrice: 32000, discountType: 'none', d1: 0, d2: 0, finalRowTotal: 32000, normalRowTotal: 32000, savedAmount: 0, category: 'Bahan Pokok' },
      { name: 'Telur Ayam 1kg', qty: 1.5, unit: 'kg', unitPrice: 28000, finalUnitPrice: 28000, discountType: 'none', d1: 0, d2: 0, finalRowTotal: 42000, normalRowTotal: 42000, savedAmount: 0, category: 'Bahan Pokok' },
      { name: 'Indomie Goreng (Dus)', qty: 1, unit: 'dus', unitPrice: 112000, finalUnitPrice: 112000, discountType: 'none', d1: 0, d2: 0, finalRowTotal: 112000, normalRowTotal: 112000, savedAmount: 0, category: 'Makanan Instan & Olahan' },
      { name: 'Lifebuoy Sabun Mandi 4x110g', qty: 1, unit: 'pack', unitPrice: 23000, finalUnitPrice: 18400, discountType: 'single', d1: 20, d2: 0, finalRowTotal: 18400, normalRowTotal: 23000, savedAmount: 4600, category: 'Perlengkapan Mandi & Tubuh' },
      { name: 'Sunlight Jeruk Nipis 700ml', qty: 2, unit: 'pack', unitPrice: 14500, finalUnitPrice: 14500, discountType: 'none', d1: 0, d2: 0, finalRowTotal: 29000, normalRowTotal: 29000, savedAmount: 0, category: 'Sabun Cuci & Deterjen' },
      { name: 'Kopi Kapal Api Mix 10s', qty: 2, unit: 'pack', unitPrice: 14000, finalUnitPrice: 14000, discountType: 'none', d1: 0, d2: 0, finalRowTotal: 28000, normalRowTotal: 28000, savedAmount: 0, category: 'Kopi, Teh & Minuman' },
      { name: 'Biskuit Roma Kelapa 300g', qty: 5, unit: 'pack', unitPrice: 11500, finalUnitPrice: 10620, discountType: 'tiered', d1: 50, d2: 20, finalRowTotal: 53100, normalRowTotal: 57500, savedAmount: 29900, category: 'Camilan & Snack' }
    ]
  }
];

// Seed awal barang di troli aktif
const DEFAULT_INITIAL_CART = [
  {
    id: 'cart_' + Date.now() + '_1',
    name: 'Minyak Goreng 2L',
    category: 'Bahan Pokok',
    unit: 'liter',
    qty: 1,
    unitPrice: 34500,
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
    unitPrice: 26500,
    discountType: 'none',
    d1: 0,
    d2: 0
  },
  {
    id: 'cart_' + Date.now() + '_3',
    name: 'Lifebuoy Sabun Mandi 4x110g',
    category: 'Perlengkapan Mandi & Tubuh',
    unit: 'pack',
    qty: 1,
    unitPrice: 25000,
    discountType: 'tiered',
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
  activeTab: 'view-cart',
  currentUser: null,
  usersList: [],
  theme: 'liquid-bright',
  language: 'id',
  customCategories: []
};

function t(key) {
  const dict = I18N[state.language] || I18N.id;
  return dict[key] || (I18N.id[key] || key);
}

// ==========================================================================
// AUDIO SYNTHESIZER (Web Audio API Haptics)
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
      const notes = [523.25, 659.25, 783.99, 1046.50];
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

function comparePriceWithPrevMonth(itemName, currentUnitPrice) {
  if (!itemName) return { status: 'new', diffVal: 0, diffPct: 0, prevPrice: 0 };
  
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
// CATEGORY MANAGEMENT (NO EMOJIS, CLEAN TEXT, I18N AWARE)
// ==========================================================================

function getDefaultCategoriesList() {
  return state.language === 'en' ? DEFAULT_CATEGORIES_EN : DEFAULT_CATEGORIES_ID;
}

function getAllCategories() {
  const baseList = getDefaultCategoriesList();
  const custom = Array.isArray(state.customCategories) ? state.customCategories : [];
  return [...baseList, ...custom.filter(c => !baseList.includes(c))];
}

function populateCategoryDropdown(selectedCategory = null) {
  const select = document.getElementById('item-category-select');
  if (!select) return;

  const categories = getAllCategories();
  const addNewLabel = state.language === 'en' ? '+ Add New Category...' : '➕ Tambah Kategori Baru...';

  select.innerHTML = categories.map((cat) => {
    return `<option value="${cat}">${cat}</option>`;
  }).join('') + `<option value="__add_new__">${addNewLabel}</option>`;

  if (selectedCategory && categories.includes(selectedCategory)) {
    select.value = selectedCategory;
  } else if (categories.length > 0) {
    select.value = categories[0];
  }
  document.getElementById('item-category-input').value = select.value;
}

function populateFilterPills() {
  const container = document.getElementById('category-filter-container');
  if (!container) return;

  const categories = getAllCategories();
  const currentActive = state.currentCategoryFilter;
  const allLabel = t('categoryAll');

  const pillsHtml = [
    `<button class="filter-pill ${currentActive === 'ALL' ? 'active' : ''}" data-category="ALL">${allLabel} (<span id="count-all">${state.cart.length}</span>)</button>`
  ];

  categories.forEach((cat) => {
    const isActive = (currentActive === cat) ? 'active' : '';
    pillsHtml.push(`<button class="filter-pill ${isActive}" data-category="${cat}">${cat}</button>`);
  });

  container.innerHTML = pillsHtml.join('');

  // Re-attach click listeners to dynamically created filter pills
  container.querySelectorAll('.filter-pill').forEach((pill) => {
    pill.onclick = () => {
      container.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.currentCategoryFilter = pill.getAttribute('data-category');
      sound.playClick();
      renderCartItems();
    };
  });
}

// ==========================================================================
// LANGUAGE (I18N) MANAGEMENT
// ==========================================================================

function initLanguage() {
  const savedLang = localStorage.getItem(STORAGE_KEYS.LANGUAGE) || 'id';
  setLanguage(savedLang, false);
}

function setLanguage(lang, playAudio = true) {
  state.language = lang === 'en' ? 'en' : 'id';
  localStorage.setItem(STORAGE_KEYS.LANGUAGE, state.language);
  document.documentElement.setAttribute('lang', state.language);

  // Update language buttons active state
  document.querySelectorAll('.lang-card-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === state.language);
  });

  applyTranslationsToDOM();
  populateCategoryDropdown();
  populateFilterPills();
  renderCartItems();
  renderHistorySessions();
  renderBudgetBreakdown();
  updateSafetyCapBanner();
  updateIcons();

  if (playAudio) sound.playClick();
}

function applyTranslationsToDOM() {
  const safeSetText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };
  const safeSetHTML = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };
  const safeSetPlaceholder = (id, placeholder) => {
    const el = document.getElementById(id);
    if (el) el.placeholder = placeholder;
  };

  // Header & Balance
  safeSetText('lbl-balance-sub', t('remainingWallet'));
  safeSetText('lbl-spent', t('spent'));
  safeSetText('lbl-max-limit', t('maxLimit'));

  // Search
  safeSetPlaceholder('cart-search-input', t('searchPlaceholder'));

  // Cart View
  safeSetText('lbl-empty-cart-title', t('cartEmptyTitle'));
  safeSetText('lbl-empty-cart-desc', t('cartEmptyDesc'));
  safeSetText('lbl-empty-add-btn', t('addFirstItem'));
  safeSetText('lbl-btn-open-add', t('addToCartBtn'));
  safeSetText('lbl-total-items-prefix', t('totalItemsPrefix'));
  safeSetText('lbl-saved-prefix', t('savedPrefix'));
  safeSetText('lbl-total-price-title', t('totalPriceTitle'));
  safeSetText('lbl-checkout-btn', t('checkoutBtn'));

  // Bottom Navigation
  safeSetText('nav-label-cart', t('navCart'));
  safeSetText('nav-label-history', t('navHistory'));
  safeSetText('nav-label-budget', t('navBudget'));

  // History View
  safeSetText('lbl-history-title', t('historyTitle'));
  safeSetText('lbl-history-desc', t('historyDesc'));
  safeSetText('lbl-hist-curr-label', t('histCurrLabel'));
  safeSetText('lbl-hist-curr-caption', t('histCurrCaption'));
  safeSetText('lbl-hist-prev-label', t('histPrevLabel'));
  safeSetText('lbl-hist-prev-caption', t('histPrevCaption'));
  safeSetText('lbl-export-btn', t('exportBtn'));
  safeSetText('lbl-clear-btn', t('clearBtn'));

  // Budget View
  safeSetText('lbl-budget-title', t('budgetTitle'));
  safeSetText('lbl-budget-desc', t('budgetDesc'));
  safeSetText('lbl-safety-cap-label', t('safetyCapLabel'));
  safeSetText('lbl-safety-cap-badge', t('safetyCapBadge'));
  safeSetText('lbl-save-budget-btn', t('saveBudgetBtn'));
  safeSetText('lbl-spending-breakdown-title', t('spendingBreakdownTitle'));
  safeSetText('lbl-tips-header', t('tipsHeader'));
  safeSetHTML('lbl-tip-item-1', t('tip1'));
  safeSetHTML('lbl-tip-item-2', t('tip2'));
  safeSetHTML('lbl-tip-item-3', t('tip3'));

  // Item Modal
  safeSetText('modal-item-title', state.editingItemId ? t('editItemModalTitle') : t('addItemModalTitle'));
  safeSetText('btn-save-item-label', state.editingItemId ? t('saveItemBtnEdit') : t('saveItemBtnAdd'));
  safeSetText('lbl-item-name', t('itemName'));
  safeSetText('lbl-auto-compare-hint', t('autoCompareHint'));
  safeSetText('lbl-category', t('categoryLabel'));
  safeSetText('lbl-btn-add-cat', t('addNewCatBtn'));
  safeSetText('lbl-btn-save-cat', t('saveCatBtn'));
  safeSetText('lbl-unit', t('unitLabel'));
  safeSetText('lbl-quantity', t('qtyLabel'));
  safeSetText('lbl-unit-price', t('unitPriceLabel'));
  safeSetText('lbl-per-item-hint', t('perItemHint'));
  safeSetText('lbl-discount-calc-title', t('discountCalcTitle'));
  safeSetText('btn-mode-none', t('noDiscount'));
  safeSetText('btn-mode-single', t('singleDiscount'));
  safeSetText('btn-mode-tiered', t('tieredDiscount'));
  safeSetText('lbl-discount-single-label', t('discountSingleLabel'));
  safeSetText('lbl-discount-d1-label', t('discountD1Label'));
  safeSetText('lbl-discount-d2-label', t('discountD2Label'));
  safeSetText('lbl-before-discount', t('beforeDiscount'));
  safeSetText('lbl-saved-cut', t('savedCut'));
  safeSetText('lbl-final-row-price', t('finalRowPrice'));
  safeSetText('lbl-buying-tips-title', t('buyingTipsTitle'));
  safeSetHTML('lbl-buying-tip-1', t('buyingTip1'));
  safeSetHTML('lbl-buying-tip-2', t('buyingTip2'));
  safeSetHTML('lbl-buying-tip-3', t('buyingTip3'));

  // Settings Modal
  safeSetText('modal-settings-title', t('settingsTitle'));
  safeSetText('lbl-settings-lang-title', t('settingsLangTitle'));
  safeSetText('lbl-settings-lang-sub', t('settingsLangSub'));
  safeSetText('lbl-settings-theme-title', t('settingsThemeTitle'));
  safeSetText('lbl-settings-theme-sub', t('settingsThemeSub'));
  safeSetText('lbl-theme-bright-sub', t('themeBrightSub'));
  safeSetText('lbl-theme-ice-sub', t('themeIceSub'));
  safeSetText('lbl-theme-aurora-sub', t('themeAuroraSub'));
  safeSetText('lbl-theme-midnight-sub', t('themeMidnightSub'));
  safeSetText('lbl-settings-audio-title', t('settingsAudioTitle'));
  safeSetText('lbl-settings-audio-sub', t('settingsAudioSub'));
  safeSetText('lbl-settings-sound-switch', t('settingsSoundSwitch'));
  safeSetText('lbl-settings-account-title', t('settingsAccountTitle'));
  safeSetText('lbl-change-pwd-title', t('changePwdTitle'));
  safeSetText('lbl-current-pwd', t('currentPwdLabel'));
  safeSetText('lbl-new-pwd', t('newPwdLabel'));
  safeSetText('lbl-confirm-pwd', t('confirmPwdLabel'));
  safeSetText('lbl-save-new-pwd-btn', t('saveNewPwdBtn'));
  safeSetText('lbl-logout-btn', t('logoutBtn'));
  safeSetText('lbl-admin-firebase-title', t('adminFirebaseTitle'));
  safeSetText('lbl-admin-firebase-sub', t('adminFirebaseSub'));
  safeSetText('lbl-open-cloud-btn', t('openCloudBtn'));

  // Auth Modal
  safeSetText('lbl-auth-brand-sub', t('appSubtitle'));
  safeSetText('tab-login-btn', state.language === 'en' ? 'Login' : 'Masuk (Login)');
  safeSetText('tab-register-btn', state.language === 'en' ? 'Sign Up' : 'Daftar Akun (Sign Up)');
  safeSetText('lbl-auth-email', t('authEmailLabel'));
  safeSetText('lbl-auth-password', t('authPwdLabel'));
  safeSetText('lbl-auth-login-submit', t('authLoginSubmit'));
  safeSetText('lbl-reg-username', t('regUsernameLabel'));
  safeSetText('lbl-reg-email', t('regEmailLabel'));
  safeSetText('lbl-reg-password', t('regPwdLabel'));
  safeSetText('lbl-auth-reg-submit', t('authRegSubmit'));

  // Checkout Receipt Modal
  safeSetText('lbl-receipt-limit', t('receiptLimit'));
  safeSetText('lbl-receipt-net-total', t('receiptNetTotal'));
  safeSetText('lbl-receipt-discount-saved', t('receiptDiscountSaved'));
  safeSetText('lbl-confirm-save-receipt-btn', t('confirmSaveReceiptBtn'));

  // History Detail Modal
  safeSetText('modal-history-title', t('historyDetailModalTitle'));
  safeSetText('lbl-reload-to-cart-btn', t('reloadToCartBtn'));
}

// ==========================================================================
// THEME SWITCHER MANAGEMENT
// ==========================================================================

function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'liquid-bright';
  setTheme(savedTheme, false);
}

function setTheme(themeName, playAudio = true) {
  state.theme = themeName;
  document.documentElement.setAttribute('data-theme', themeName);
  localStorage.setItem(STORAGE_KEYS.THEME, themeName);

  document.querySelectorAll('.theme-card-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-theme') === themeName);
  });

  if (playAudio) sound.playClick();
}

// ==========================================================================
// AUTHENTICATION & ROLE MANAGEMENT
// ==========================================================================

function initAuth() {
  try {
    const storedUsers = localStorage.getItem(STORAGE_KEYS.USERS_LIST);
    state.usersList = storedUsers ? JSON.parse(storedUsers) : [];
  } catch (_) {
    state.usersList = [];
  }

  // Ensure default administrator account exists
  const hasAdmin = state.usersList.some(u => u.email === DEFAULT_ADMIN.email);
  if (!hasAdmin) {
    state.usersList.push(DEFAULT_ADMIN);
    localStorage.setItem(STORAGE_KEYS.USERS_LIST, JSON.stringify(state.usersList));
  }

  try {
    const storedCurrent = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    state.currentUser = storedCurrent ? JSON.parse(storedCurrent) : null;
  } catch (_) {
    state.currentUser = null;
  }

  updateAuthUI();
}

function isAdmin() {
  return state.currentUser && state.currentUser.email === DEFAULT_ADMIN.email;
}

function updateAuthUI() {
  const authModal = document.getElementById('auth-modal');
  const greetingEl = document.getElementById('header-user-greeting');
  const adminBadgeEl = document.getElementById('header-admin-badge');
  const cloudBtn = document.getElementById('btn-cloud-sync');
  const adminFirebaseSection = document.getElementById('settings-admin-firebase-section');
  const settingsUserInfo = document.getElementById('settings-user-info-text');

  if (state.currentUser) {
    if (authModal) authModal.classList.add('hidden');
    
    const displayName = state.currentUser.username || 'User';
    const helloPrefix = state.language === 'en' ? 'Hello' : 'Halo';
    if (greetingEl) greetingEl.textContent = `${helloPrefix}, ${displayName}`;

    const userIsAdmin = isAdmin();
    if (adminBadgeEl) adminBadgeEl.classList.toggle('hidden', !userIsAdmin);
    
    // FIREBASE SYNC: ONLY VISIBLE IF LOGGED IN AS ADMINISTRATOR
    if (cloudBtn) cloudBtn.classList.toggle('hidden', !userIsAdmin);
    if (adminFirebaseSection) adminFirebaseSection.classList.toggle('hidden', !userIsAdmin);

    if (settingsUserInfo) {
      const roleText = userIsAdmin ? 'Administrator' : (state.language === 'en' ? 'Member' : 'Pengguna');
      settingsUserInfo.textContent = `${displayName} (${state.currentUser.email}) • ${roleText}`;
    }
  } else {
    if (authModal) authModal.classList.remove('hidden');
    if (greetingEl) greetingEl.textContent = state.language === 'en' ? 'Not Logged In' : 'Belum Masuk';
    if (adminBadgeEl) adminBadgeEl.classList.add('hidden');
    if (cloudBtn) cloudBtn.classList.add('hidden');
    if (adminFirebaseSection) adminFirebaseSection.classList.add('hidden');
  }
}

function handleLogin(email, password) {
  const errorEl = document.getElementById('login-error-msg');
  errorEl.classList.add('hidden');

  const cleanEmail = email.trim().toLowerCase();
  const found = state.usersList.find(u => u.email.toLowerCase() === cleanEmail && u.password === password);

  if (found) {
    state.currentUser = found;
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(found));
    updateAuthUI();
    sound.playSuccess();
    return true;
  } else {
    errorEl.textContent = state.language === 'en'
      ? 'Invalid email or password. Please try again.'
      : 'Email atau password salah. Silakan coba lagi.';
    errorEl.classList.remove('hidden');
    sound.playWarning();
    return false;
  }
}

function handleRegister(username, email, password) {
  const errorEl = document.getElementById('register-error-msg');
  const successEl = document.getElementById('register-success-msg');
  errorEl.classList.add('hidden');
  successEl.classList.add('hidden');

  const cleanUser = username.trim();
  const cleanEmail = email.trim().toLowerCase();

  if (!cleanUser || !cleanEmail || !password) {
    errorEl.textContent = state.language === 'en'
      ? 'All registration fields are required!'
      : 'Semua kolom pendaftaran wajib diisi!';
    errorEl.classList.remove('hidden');
    sound.playWarning();
    return false;
  }

  if (password.length < 6) {
    errorEl.textContent = state.language === 'en'
      ? 'Password must be at least 6 characters!'
      : 'Password minimal harus 6 karakter!';
    errorEl.classList.remove('hidden');
    sound.playWarning();
    return false;
  }

  const existing = state.usersList.find(u => u.email.toLowerCase() === cleanEmail);
  if (existing) {
    errorEl.textContent = state.language === 'en'
      ? 'This email is already registered! Please log in.'
      : 'Email ini sudah terdaftar! Silakan login.';
    errorEl.classList.remove('hidden');
    sound.playWarning();
    return false;
  }

  const role = (cleanEmail === DEFAULT_ADMIN.email.toLowerCase()) ? 'admin' : 'user';
  const newUser = {
    username: cleanUser,
    email: cleanEmail,
    password: password,
    role: role
  };

  state.usersList.push(newUser);
  localStorage.setItem(STORAGE_KEYS.USERS_LIST, JSON.stringify(state.usersList));

  state.currentUser = newUser;
  localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(newUser));

  successEl.textContent = state.language === 'en'
    ? 'Registration successful! Entering app...'
    : 'Pendaftaran berhasil! Mengalihkan ke aplikasi...';
  successEl.classList.remove('hidden');
  sound.playSuccess();

  setTimeout(() => {
    updateAuthUI();
  }, 600);

  return true;
}

function handleLogout() {
  const confirmMsg = state.language === 'en'
    ? 'Log out of current GroceryX account?'
    : 'Keluar dari akun GroceryX saat ini?';
  if (confirm(confirmMsg)) {
    state.currentUser = null;
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    document.getElementById('settings-modal').classList.add('hidden');
    updateAuthUI();
    sound.playClick();
  }
}

function handleChangePassword(oldPwd, newPwd, confirmPwd) {
  const msgEl = document.getElementById('change-pwd-msg');
  msgEl.className = 'auth-inline-msg hidden';

  if (!state.currentUser) return;

  if (state.currentUser.password !== oldPwd) {
    msgEl.className = 'auth-inline-msg error';
    msgEl.textContent = state.language === 'en' ? 'Current password does not match!' : 'Password lama Anda tidak cocok!';
    sound.playWarning();
    return;
  }

  if (newPwd.length < 6) {
    msgEl.className = 'auth-inline-msg error';
    msgEl.textContent = state.language === 'en' ? 'New password must be at least 6 characters!' : 'Password baru minimal 6 karakter!';
    sound.playWarning();
    return;
  }

  if (newPwd !== confirmPwd) {
    msgEl.className = 'auth-inline-msg error';
    msgEl.textContent = state.language === 'en' ? 'Password confirmation does not match!' : 'Konfirmasi password baru tidak cocok!';
    sound.playWarning();
    return;
  }

  state.currentUser.password = newPwd;
  localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(state.currentUser));

  const idx = state.usersList.findIndex(u => u.email === state.currentUser.email);
  if (idx !== -1) {
    state.usersList[idx].password = newPwd;
    localStorage.setItem(STORAGE_KEYS.USERS_LIST, JSON.stringify(state.usersList));
  }

  msgEl.className = 'auth-inline-msg success';
  msgEl.textContent = state.language === 'en' ? 'Password successfully changed!' : 'Password berhasil diubah!';
  sound.playSuccess();

  document.getElementById('change-pwd-form').reset();
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

    const storedCustomCat = localStorage.getItem(STORAGE_KEYS.CUSTOM_CATEGORIES);
    state.customCategories = storedCustomCat ? JSON.parse(storedCustomCat) : [];
  } catch (err) {
    console.error('Error loading state from localStorage:', err);
    state.safetyCap = 500000;
    state.prevCatalog = { ...DEFAULT_PREV_CATALOG };
    state.history = [...DEFAULT_HISTORY];
    state.cart = [...DEFAULT_INITIAL_CART];
    state.soundEnabled = true;
    state.customCategories = [];
  }
}

function saveStateToLocalStorage() {
  try {
    localStorage.setItem(STORAGE_KEYS.SAFETY_CAP, state.safetyCap);
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(state.cart));
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(state.history));
    localStorage.setItem(STORAGE_KEYS.PREV_CATALOG, JSON.stringify(state.prevCatalog));
    localStorage.setItem(STORAGE_KEYS.SOUND_ENABLED, JSON.stringify(state.soundEnabled));
    localStorage.setItem(STORAGE_KEYS.CUSTOM_CATEGORIES, JSON.stringify(state.customCategories));
  } catch (err) {
    console.error('Error saving state to localStorage:', err);
  }
}

function saveState() {
  saveStateToLocalStorage();

  if (window.FirebaseSync && typeof window.FirebaseSync.pushLocalState === 'function') {
    window.FirebaseSync.pushLocalState();
  }
}

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
window.GroceryX = window.SmartGrocery;

// ==========================================================================
// RENDER METHODS: TABS & VIEWS
// ==========================================================================

function switchTab(targetViewId) {
  document.querySelectorAll('.app-view').forEach((view) => {
    view.classList.toggle('hidden', view.id !== targetViewId);
  });

  document.querySelectorAll('.nav-tab-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-target') === targetViewId);
  });

  state.activeTab = targetViewId;
  sound.playClick();

  if (targetViewId === 'view-cart') {
    renderCartItems();
  } else if (targetViewId === 'view-history') {
    renderHistorySessions();
  } else if (targetViewId === 'view-budget') {
    renderBudgetBreakdown();
  }

  updateIcons();
}

function updateSafetyCapBanner() {
  let totalSpent = 0;
  state.cart.forEach((item) => {
    const calc = calculateItemPricing(item);
    totalSpent += calc.finalRowTotal;
  });

  const remaining = state.safetyCap - totalSpent;
  const pct = state.safetyCap > 0 ? Math.min(100, Math.round((totalSpent / state.safetyCap) * 100)) : 0;

  const spentEl = document.getElementById('header-spent-budget');
  const limitEl = document.getElementById('header-limit-budget');
  const remainingEl = document.getElementById('header-remaining-budget');
  const percentEl = document.getElementById('header-percent-budget');
  const meterFill = document.getElementById('budget-meter-fill');
  const statusText = document.getElementById('budget-status-text');
  const statusDot = document.getElementById('budget-pulse-dot');
  const navAlert = document.getElementById('nav-budget-alert');
  const balanceSub = document.getElementById('lbl-balance-sub');

  spentEl.textContent = `Rp ${formatRupiah(totalSpent)}`;
  limitEl.textContent = `Rp ${formatRupiah(state.safetyCap)}`;
  percentEl.textContent = `${pct}%`;
  meterFill.style.width = `${pct}%`;

  if (remaining >= 0) {
    remainingEl.textContent = `Rp ${formatRupiah(remaining)}`;
    remainingEl.style.color = 'var(--primary)';
    if (balanceSub) balanceSub.textContent = t('remainingWallet');
  } else {
    remainingEl.textContent = `- Rp ${formatRupiah(Math.abs(remaining))}`;
    remainingEl.style.color = 'var(--crimson)';
    if (balanceSub) balanceSub.textContent = t('deficit');
  }

  meterFill.className = 'liquid-meter-fill';
  statusDot.className = 'status-pulse-dot';

  if (pct >= 100) {
    statusText.textContent = t('overBudget');
    statusText.style.color = 'var(--crimson)';
    statusDot.classList.add('danger');
    meterFill.classList.add('danger');
    navAlert.classList.remove('hidden');
  } else if (pct >= 80) {
    statusText.textContent = t('approachingLimit');
    statusText.style.color = 'var(--amber)';
    statusDot.classList.add('warning');
    meterFill.classList.add('warning');
    navAlert.classList.remove('hidden');
  } else {
    statusText.textContent = t('budgetSafe');
    statusText.style.color = 'var(--emerald)';
    navAlert.classList.add('hidden');
  }

  let totalQty = 0;
  let totalSaved = 0;
  state.cart.forEach((i) => {
    totalQty += (parseFloat(i.qty) || 0);
    const c = calculateItemPricing(i);
    totalSaved += c.savedAmount;
  });

  const itemSuffix = state.language === 'en' ? (totalQty === 1 ? 'item' : 'items') : 'item';
  document.getElementById('summary-total-qty').textContent = `${totalQty} ${itemSuffix}`;
  document.getElementById('summary-total-price').textContent = formatRupiah(totalSpent);
  document.getElementById('summary-saved-amount').textContent = `Rp ${formatRupiah(totalSaved)}`;
  document.getElementById('summary-discount-pill').classList.toggle('hidden', totalSaved <= 0);
  document.getElementById('nav-cart-badge').textContent = state.cart.length;
}

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

  const countAllEl = document.getElementById('count-all');
  if (countAllEl) countAllEl.textContent = state.cart.length;

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
        <h3>${state.language === 'en' ? 'No matching items' : 'Tidak ada item yang cocok'}</h3>
        <p>${state.language === 'en' ? 'Try another keyword or select "All" category filter.' : 'Coba gunakan kata kunci lain atau pilih filter kategori "Semua".'}</p>
      </div>
    `;
    updateIcons();
    updateSafetyCapBanner();
    return;
  }

  container.innerHTML = filtered.map((item) => {
    const calc = calculateItemPricing(item);
    const comp = comparePriceWithPrevMonth(item.name, item.unitPrice);

    let compBadgeHtml = '';
    const prevMonthPrefix = state.language === 'en' ? 'Last month' : 'Bulan lalu';
    if (comp.status === 'higher') {
      compBadgeHtml = `
        <span class="comp-badge higher" title="${prevMonthPrefix}: Rp ${formatRupiah(comp.prevPrice)}">
          <i data-lucide="trending-up"></i> ↑ +Rp ${formatRupiah(comp.diffVal)} (+${comp.diffPct}%)
        </span>
      `;
    } else if (comp.status === 'lower') {
      compBadgeHtml = `
        <span class="comp-badge lower" title="${prevMonthPrefix}: Rp ${formatRupiah(comp.prevPrice)}">
          <i data-lucide="trending-down"></i> ↓ -Rp ${formatRupiah(comp.diffVal)} (-${comp.diffPct}%)
        </span>
      `;
    } else if (comp.status === 'equal') {
      compBadgeHtml = `
        <span class="comp-badge equal" title="${prevMonthPrefix}: Rp ${formatRupiah(comp.prevPrice)}">
          <span>=</span> ${state.language === 'en' ? 'Stable' : 'Stabil'}
        </span>
      `;
    } else {
      compBadgeHtml = `
        <span class="comp-badge new">
          <i data-lucide="sparkles"></i> ${state.language === 'en' ? 'New Item' : 'Item Baru'}
        </span>
      `;
    }

    let discountTagHtml = '';
    const discLabel = state.language === 'en' ? 'Disc' : 'Diskon';
    if (item.discountType === 'single' && item.d1 > 0) {
      discountTagHtml = `<span class="discount-pill-mini">${discLabel} ${item.d1}%</span>`;
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
          <div class="qty-stepper-control">
            <button type="button" class="btn-stepper btn-cart-step-minus" data-id="${item.id}" aria-label="Kurangi">
              <i data-lucide="minus"></i>
            </button>
            <input type="number" class="cart-qty-direct" data-id="${item.id}" value="${item.qty}" min="0.1" step="1">
            <button type="button" class="btn-stepper btn-cart-step-plus" data-id="${item.id}" aria-label="Tambah">
              <i data-lucide="plus"></i>
            </button>
          </div>

          <div class="item-pricing-zone">
            <div class="item-price-current">
              Rp ${formatRupiah(calc.finalRowTotal)}
            </div>
            <div class="item-price-sub">
              ${strikePriceHtml}
              ${discountTagHtml}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  attachCartItemListeners();
  updateSafetyCapBanner();
  updateIcons();
}

function attachCartItemListeners() {
  document.querySelectorAll('.btn-edit-item').forEach((btn) => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-id');
      openItemModal(id);
    };
  });

  document.querySelectorAll('.btn-delete-item').forEach((btn) => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-id');
      state.cart = state.cart.filter((i) => i.id !== id);
      sound.playClick();
      saveState();
      renderCartItems();
    };
  });

  document.querySelectorAll('.btn-cart-step-plus').forEach((btn) => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-id');
      const item = state.cart.find((i) => i.id === id);
      if (item) {
        item.qty = (parseFloat(item.qty) || 0) + 1;
        sound.playClick();
        saveState();
        renderCartItems();
      }
    };
  });

  document.querySelectorAll('.btn-cart-step-minus').forEach((btn) => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-id');
      const item = state.cart.find((i) => i.id === id);
      if (item) {
        const cur = parseFloat(item.qty) || 1;
        if (cur > 1) {
          item.qty = cur - 1;
          sound.playClick();
          saveState();
          renderCartItems();
        } else {
          const deleteConfirm = state.language === 'en'
            ? `Remove "${item.name}" from shopping cart?`
            : `Hapus "${item.name}" dari troli belanja?`;
          if (confirm(deleteConfirm)) {
            state.cart = state.cart.filter((i) => i.id !== id);
            sound.playClick();
            saveState();
            renderCartItems();
          }
        }
      }
    };
  });

  document.querySelectorAll('.cart-qty-direct').forEach((input) => {
    input.onchange = (e) => {
      const id = input.getAttribute('data-id');
      const item = state.cart.find((i) => i.id === id);
      if (item) {
        const val = parseFloat(e.target.value);
        item.qty = val > 0 ? val : 1;
        saveState();
        renderCartItems();
      }
    };
  });
}

function renderHistorySessions() {
  const container = document.getElementById('history-sessions-container');
  const prevTotalEl = document.getElementById('hist-prev-total');
  const currTotalEl = document.getElementById('hist-current-total');

  let currentSpent = 0;
  state.cart.forEach((i) => {
    currentSpent += calculateItemPricing(i).finalRowTotal;
  });
  currTotalEl.textContent = `Rp ${formatRupiah(currentSpent)}`;

  if (state.history.length === 0) {
    prevTotalEl.textContent = 'Rp 0';
    container.innerHTML = `
      <div class="empty-state-card glass-card">
        <i data-lucide="receipt" style="width: 32px; height: 32px; color: var(--text-muted);"></i>
        <h3>${t('emptyHistoryTitle')}</h3>
        <p>${t('emptyHistoryDesc')}</p>
      </div>
    `;
    updateIcons();
    return;
  }

  const latestHistory = state.history[0];
  prevTotalEl.textContent = `Rp ${formatRupiah(latestHistory.totalSpent)}`;

  container.innerHTML = state.history.map((sess) => {
    const isOver = sess.totalSpent > sess.safetyCap;
    let statusText = '';
    if (state.language === 'en') {
      statusText = isOver ? 'OVER BUDGET' : 'ON BUDGET';
    } else {
      statusText = isOver ? 'OVER ANGGARAN' : 'SESUAI ANGGARAN';
    }
    const statusClass = isOver ? 'history-status-tag over' : 'history-status-tag';
    const itemsCountLabel = state.language === 'en'
      ? `${sess.itemCount || (sess.items ? sess.items.length : 0)} items purchased`
      : `${sess.itemCount || (sess.items ? sess.items.length : 0)} macam item dibeli`;

    const discountSavedLabel = state.language === 'en'
      ? `Saved: Rp ${formatRupiah(sess.totalSaved || 0)}`
      : `Hemat diskon: Rp ${formatRupiah(sess.totalSaved || 0)}`;

    return `
      <div class="history-session-card">
        <div class="history-card-header">
          <div class="history-date">
            <i data-lucide="receipt"></i>
            <span>${sess.date}</span>
          </div>
          <span class="${statusClass}">${statusText}</span>
        </div>

        <div class="history-card-body">
          <span class="history-items-count">${itemsCountLabel}</span>
          <strong class="history-total-spent">Rp ${formatRupiah(sess.totalSpent)}</strong>
        </div>

        <div class="history-card-footer">
          <span class="text-emerald">${discountSavedLabel}</span>
          <button class="btn-view-receipt-link" data-id="${sess.id}">
            ${t('viewReceipt')} <i data-lucide="arrow-right"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.btn-view-receipt-link').forEach((btn) => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-id');
      openHistoryDetailModal(id);
    };
  });

  updateIcons();
}

function renderBudgetBreakdown() {
  const barsContainer = document.getElementById('category-breakdown-bars');
  const badgeEl = document.getElementById('breakdown-items-badge');

  const catMap = {};
  let totalSpent = 0;
  let totalItems = 0;

  state.cart.forEach((item) => {
    const calc = calculateItemPricing(item);
    const cat = item.category || 'Lainnya';
    catMap[cat] = (catMap[cat] || 0) + calc.finalRowTotal;
    totalSpent += calc.finalRowTotal;
    totalItems += (parseFloat(item.qty) || 0);
  });

  badgeEl.textContent = state.language === 'en'
    ? `${totalItems} items in cart`
    : `${totalItems} item di troli`;

  const sortedCats = Object.entries(catMap).sort((a, b) => b[1] - a[1]);

  if (sortedCats.length === 0) {
    barsContainer.innerHTML = `
      <p style="font-size: 0.78rem; color: var(--text-muted); text-align: center; padding: 12px 0;">
        ${state.language === 'en'
          ? 'Cart is empty. Add items to see your category budget breakdown.'
          : 'Troli masih kosong. Tambahkan barang untuk melihat alokasi anggaran per kategori.'}
      </p>
    `;
    return;
  }

  barsContainer.innerHTML = sortedCats.map(([cat, amount]) => {
    const pct = totalSpent > 0 ? Math.round((amount / totalSpent) * 100) : 0;

    return `
      <div class="cat-bar-item">
        <div class="cat-bar-meta">
          <span><strong>${cat}</strong> (${pct}%)</span>
          <strong>Rp ${formatRupiah(amount)}</strong>
        </div>
        <div class="cat-bar-track">
          <div class="cat-bar-fill" style="width: ${pct}%;"></div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================================================
// MODAL LOGIC: ITEM BELANJA (ADD / EDIT)
// ==========================================================================

function openItemModal(itemId = null) {
  state.editingItemId = itemId;
  const modal = document.getElementById('item-modal');
  const titleEl = document.getElementById('modal-item-title');
  const saveLabel = document.getElementById('btn-save-item-label');
  const idInput = document.getElementById('item-id-input');
  const nameInput = document.getElementById('item-name-input');
  const unitInput = document.getElementById('item-unit-input');
  const qtyInput = document.getElementById('item-qty-input');
  const priceInput = document.getElementById('item-price-input');
  const discSingleInput = document.getElementById('input-discount-single');
  const discD1Input = document.getElementById('input-discount-d1');
  const discD2Input = document.getElementById('input-discount-d2');

  populateDatalist();
  populateQuickStaples();

  document.getElementById('new-category-inline-box').classList.add('hidden');

  if (itemId) {
    const item = state.cart.find((i) => i.id === itemId);
    if (!item) return;

    titleEl.textContent = t('editItemModalTitle');
    saveLabel.textContent = t('saveItemBtnEdit');
    idInput.value = item.id;
    nameInput.value = item.name;
    unitInput.value = item.unit;
    qtyInput.value = item.qty;
    priceInput.value = formatRupiah(item.unitPrice);

    populateCategoryDropdown(item.category);
    setDiscountMode(item.discountType || 'none');
    discSingleInput.value = item.d1 || 0;
    discD1Input.value = item.d1 || 50;
    discD2Input.value = item.d2 || 20;
  } else {
    titleEl.textContent = t('addItemModalTitle');
    saveLabel.textContent = t('saveItemBtnAdd');
    idInput.value = '';
    nameInput.value = '';
    unitInput.value = 'pcs';
    qtyInput.value = '1';
    priceInput.value = '';

    const defaultFirstCat = state.language === 'en' ? 'Staple Foods' : 'Bahan Pokok';
    populateCategoryDropdown(defaultFirstCat);
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
  const lastMonthPrefix = state.language === 'en' ? 'Last Month' : 'Bulan Lalu';

  if (comp.status === 'higher') {
    badgeCard.classList.remove('hidden');
    badgeCard.style.borderColor = 'rgba(225, 29, 72, 0.4)';
    icon.innerHTML = '<i data-lucide="trending-up" style="color: var(--crimson);"></i>';
    title.textContent = `${lastMonthPrefix}: Rp ${formatRupiah(comp.prevPrice)}`;
    desc.textContent = state.language === 'en'
      ? `Price INCREASED by Rp ${formatRupiah(comp.diffVal)} (+${comp.diffPct}%)`
      : `Harga NAIK Rp ${formatRupiah(comp.diffVal)} (+${comp.diffPct}%)`;
    pill.textContent = state.language === 'en' ? `↑ More Expensive (+${comp.diffPct}%)` : `↑ Lebih Mahal (+${comp.diffPct}%)`;
    pill.style.background = 'var(--crimson-soft)';
    pill.style.color = 'var(--crimson)';
  } else if (comp.status === 'lower') {
    badgeCard.classList.remove('hidden');
    badgeCard.style.borderColor = 'rgba(16, 185, 129, 0.4)';
    icon.innerHTML = '<i data-lucide="trending-down" style="color: var(--emerald-light);"></i>';
    title.textContent = `${lastMonthPrefix}: Rp ${formatRupiah(comp.prevPrice)}`;
    desc.textContent = state.language === 'en'
      ? `Price DECREASED by Rp ${formatRupiah(comp.diffVal)} (-${comp.diffPct}%)`
      : `Harga TURUN Rp ${formatRupiah(comp.diffVal)} (-${comp.diffPct}%)`;
    pill.textContent = state.language === 'en' ? `↓ Cheaper (-${comp.diffPct}%)` : `↓ Lebih Hemat (-${comp.diffPct}%)`;
    pill.style.background = 'var(--emerald-soft)';
    pill.style.color = 'var(--emerald)';
  } else if (comp.status === 'equal') {
    badgeCard.classList.remove('hidden');
    badgeCard.style.borderColor = 'rgba(37, 99, 235, 0.3)';
    icon.innerHTML = '<i data-lucide="check" style="color: var(--primary);"></i>';
    title.textContent = `${lastMonthPrefix}: Rp ${formatRupiah(comp.prevPrice)}`;
    desc.textContent = state.language === 'en' ? 'Price is stable and matches last purchase' : 'Harga stabil persis sama dengan bulan lalu';
    pill.textContent = state.language === 'en' ? '= Stable (Rp 0)' : '= Stabil (Rp 0)';
    pill.style.background = 'rgba(37, 99, 235, 0.12)';
    pill.style.color = 'var(--primary)';
  } else {
    badgeCard.classList.remove('hidden');
    badgeCard.style.borderColor = 'rgba(147, 51, 234, 0.3)';
    icon.innerHTML = '<i data-lucide="sparkles" style="color: #9333ea;"></i>';
    title.textContent = state.language === 'en' ? 'New Item Detected' : 'Item Baru Terdeteksi';
    desc.textContent = state.language === 'en'
      ? 'Not recorded in previous month. Will be saved as a new reference!'
      : 'Belum pernah dicatat sebelumnya, otomatis disimpan sebagai referensi baru!';
    pill.textContent = t('newItem');
    pill.style.background = 'rgba(147, 51, 234, 0.12)';
    pill.style.color = '#9333ea';
  }

  updateIcons();
}

function updateModalDiscountPreview() {
  const qty = parseFloat(document.getElementById('item-qty-input').value) || 0;
  const unitPrice = parseRupiahInput(document.getElementById('item-price-input').value);

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

  const calc = calculateItemPricing({ qty, unitPrice, discountType, d1, d2 });

  document.getElementById('preview-normal-total').textContent = `Rp ${formatRupiah(calc.normalRowTotal)}`;
  document.getElementById('preview-discount-saved').textContent = `- Rp ${formatRupiah(calc.savedAmount)}`;
  document.getElementById('preview-final-total').textContent = `Rp ${formatRupiah(calc.finalRowTotal)}`;
}

function populateDatalist() {
  const datalist = document.getElementById('last-month-datalist');
  datalist.innerHTML = Object.keys(state.prevCatalog).map((item) => {
    return `<option value="${item}"></option>`;
  }).join('');
}

function populateQuickStaples() {
  const container = document.getElementById('quick-staples-container');
  const items = Object.entries(state.prevCatalog).slice(0, 8);
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
      populateCategoryDropdown(chip.getAttribute('data-cat'));
      document.getElementById('item-price-input').value = formatRupiah(chip.getAttribute('data-price'));
      sound.playClick();
      updateModalComparatorPreview();
      updateModalDiscountPreview();
    };
  });
}

function saveItemFromModal() {
  const name = document.getElementById('item-name-input').value.trim();
  const catSelectVal = document.getElementById('item-category-select').value;
  const defaultOther = state.language === 'en' ? 'Others' : 'Lainnya';
  const category = (catSelectVal === '__add_new__') ? defaultOther : catSelectVal;
  const unit = document.getElementById('item-unit-input').value;
  const qty = parseFloat(document.getElementById('item-qty-input').value) || 1;
  const unitPrice = parseRupiahInput(document.getElementById('item-price-input').value);

  if (!name) {
    alert(state.language === 'en' ? 'Product name is required!' : 'Nama produk supermarket wajib diisi!');
    return;
  }
  if (unitPrice <= 0) {
    alert(state.language === 'en' ? 'Normal unit price is required!' : 'Harga satuan normal wajib diisi!');
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
    alert(state.language === 'en' ? 'Shopping cart is empty. Add items first!' : 'Troli belanja masih kosong. Tambahkan barang terlebih dahulu!');
    return;
  }

  const modal = document.getElementById('checkout-modal');
  const dateEl = document.getElementById('checkout-date-text');
  const itemsContainer = document.getElementById('checkout-receipt-items');
  const limitValEl = document.getElementById('receipt-limit-val');
  const totalValEl = document.getElementById('receipt-total-val');
  const savedValEl = document.getElementById('receipt-saved-val');
  const balanceValEl = document.getElementById('receipt-balance-val');
  const balanceLabel = document.getElementById('receipt-balance-label');
  const verdictCard = document.getElementById('receipt-verdict-card');
  const verdictTitle = document.getElementById('verdict-title');
  const verdictDesc = document.getElementById('verdict-desc');
  const verdictIcon = document.getElementById('verdict-icon');

  const now = new Date();
  const locale = state.language === 'en' ? 'en-US' : 'id-ID';
  const options = { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
  dateEl.textContent = `${t('receiptDatePrefix')}${now.toLocaleDateString(locale, options)}`;

  let totalSpent = 0;
  let totalSaved = 0;

  itemsContainer.innerHTML = state.cart.map((item) => {
    const calc = calculateItemPricing(item);
    totalSpent += calc.finalRowTotal;
    totalSaved += calc.savedAmount;

    let discountNote = '';
    if (item.discountType === 'single') {
      discountNote = `<small class="text-emerald">(Disc ${item.d1}%)</small>`;
    } else if (item.discountType === 'tiered') {
      discountNote = `<small class="text-emerald">(Disc ${item.d1}%+${item.d2}%)</small>`;
    }

    return `
      <div class="receipt-item-row">
        <div>
          <span>${item.name} x ${item.qty} ${item.unit}</span>
          ${discountNote}
        </div>
        <strong>Rp ${formatRupiah(calc.finalRowTotal)}</strong>
      </div>
    `;
  }).join('');

  limitValEl.textContent = `Rp ${formatRupiah(state.safetyCap)}`;
  totalValEl.textContent = `Rp ${formatRupiah(totalSpent)}`;
  savedValEl.textContent = `Rp ${formatRupiah(totalSaved)}`;

  const balance = state.safetyCap - totalSpent;
  if (balance >= 0) {
    balanceLabel.textContent = t('remainingWallet');
    balanceValEl.textContent = `Rp ${formatRupiah(balance)}`;
    balanceValEl.style.color = 'var(--emerald)';

    verdictCard.className = 'receipt-verdict-box safe';
    verdictIcon.setAttribute('data-lucide', 'shield-check');
    verdictTitle.textContent = t('receiptSafeTitle');
    verdictDesc.textContent = t('receiptSafeDesc');
  } else {
    balanceLabel.textContent = t('deficit');
    balanceValEl.textContent = `- Rp ${formatRupiah(Math.abs(balance))}`;
    balanceValEl.style.color = 'var(--crimson)';

    verdictCard.className = 'receipt-verdict-box warning';
    verdictIcon.setAttribute('data-lucide', 'alert-triangle');
    verdictTitle.textContent = t('receiptWarningTitle');
    verdictDesc.textContent = t('receiptWarningDesc');
  }

  modal.classList.remove('hidden');
  updateIcons();
  sound.playClick();
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal').classList.add('hidden');
}

function confirmCheckoutAndSave() {
  let totalSpent = 0;
  let totalSaved = 0;

  state.cart.forEach((i) => {
    const c = calculateItemPricing(i);
    totalSpent += c.finalRowTotal;
    totalSaved += c.savedAmount;

    state.prevCatalog[i.name] = {
      price: i.unitPrice,
      unit: i.unit,
      category: i.category
    };
  });

  const now = new Date();
  const locale = state.language === 'en' ? 'en-US' : 'id-ID';
  const dateStr = now.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });

  const sessionRecord = {
    id: 'hist_' + Date.now(),
    date: dateStr,
    timestamp: Date.now(),
    note: `Grocery ${dateStr}`,
    safetyCap: state.safetyCap,
    totalSpent,
    totalSaved,
    itemCount: state.cart.length,
    items: JSON.parse(JSON.stringify(state.cart))
  };

  state.history.unshift(sessionRecord);
  state.cart = [];

  saveState();
  closeCheckoutModal();
  sound.playSuccess();

  if (window.confetti) {
    window.confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.7 }
    });
  }

  switchTab('view-history');
}

function openHistoryDetailModal(sessionId) {
  const sess = state.history.find((s) => s.id === sessionId);
  if (!sess) return;

  const modal = document.getElementById('history-detail-modal');
  const body = document.getElementById('history-modal-body');

  const budgetLabel = state.language === 'en' ? 'Budget Limit At The Time:' : 'Batas Anggaran Waktu Itu:';
  const totalSpentLabel = state.language === 'en' ? 'Total Spent:' : 'Total Belanja:';
  const totalSavedLabel = state.language === 'en' ? 'Total Discount Saved:' : 'Total Hemat:';

  body.innerHTML = `
    <div class="receipt-paper">
      <div class="receipt-header">
        <h3>GROCERYX RECEIPT</h3>
        <p>${sess.date}</p>
      </div>

      <div class="receipt-divider"></div>

      <div class="receipt-items-summary">
        ${sess.items.map((item) => {
          const calc = calculateItemPricing(item);
          return `
            <div class="receipt-item-row">
              <div>
                <span>${item.name} x ${item.qty} ${item.unit}</span>
                <small style="color: var(--text-muted); display: block;">@ Rp ${formatRupiah(item.unitPrice)}</small>
              </div>
              <strong>Rp ${formatRupiah(calc.finalRowTotal)}</strong>
            </div>
          `;
        }).join('')}
      </div>

      <div class="receipt-divider"></div>

      <div class="receipt-totals">
        <div class="receipt-row">
          <span>${budgetLabel}</span>
          <strong>Rp ${formatRupiah(sess.safetyCap)}</strong>
        </div>
        <div class="receipt-row">
          <span>${totalSpentLabel}</span>
          <strong class="text-primary font-lg">Rp ${formatRupiah(sess.totalSpent)}</strong>
        </div>
        <div class="receipt-row text-emerald">
          <span>${totalSavedLabel}</span>
          <strong>Rp ${formatRupiah(sess.totalSaved)}</strong>
        </div>
      </div>
    </div>
  `;

  document.getElementById('btn-reload-to-cart').onclick = () => {
    reloadHistoryItemsToCart(sessionId);
  };

  modal.classList.remove('hidden');
  sound.playClick();
}

function reloadHistoryItemsToCart(sessionId) {
  const sess = state.history.find((s) => s.id === sessionId);
  if (!sess) return;

  if (state.cart.length > 0) {
    const confirmCopy = state.language === 'en'
      ? 'The cart already has items. Copy and merge all items from this receipt to active cart?'
      : 'Troli saat ini sudah berisi barang. Salin dan gabungkan item dari struk ini ke troli?';
    if (!confirm(confirmCopy)) {
      return;
    }
  }

  sess.items.forEach((item) => {
    state.cart.push({
      ...item,
      id: 'cart_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4)
    });
  });

  saveState();
  document.getElementById('history-detail-modal').classList.add('hidden');
  switchTab('view-cart');
  sound.playSuccess();
}

// ==========================================================================
// LUCIDE ICONS REFRESH HELPER
// ==========================================================================

function updateIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

// ==========================================================================
// PWA INSTALL PROMPT
// ==========================================================================

let deferredPrompt = null;

function setupPWA() {
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

  // Settings Modal Open / Close
  const settingsModal = document.getElementById('settings-modal');
  const settingsToggleBtn = document.getElementById('btn-settings-toggle');
  const settingsCloseBtn = document.getElementById('btn-close-settings-modal');

  if (settingsToggleBtn) {
    settingsToggleBtn.onclick = () => {
      settingsModal.classList.remove('hidden');
      sound.playClick();
    };
  }

  if (settingsCloseBtn) {
    settingsCloseBtn.onclick = () => {
      settingsModal.classList.add('hidden');
    };
  }

  // Language Buttons in Settings Modal (Indonesian vs English)
  document.getElementById('btn-lang-id')?.addEventListener('click', () => {
    setLanguage('id');
  });

  document.getElementById('btn-lang-en')?.addEventListener('click', () => {
    setLanguage('en');
  });

  // Theme Buttons in Settings Modal
  document.querySelectorAll('.theme-card-btn').forEach((btn) => {
    btn.onclick = () => {
      const theme = btn.getAttribute('data-theme');
      setTheme(theme);
    };
  });

  // Sound Switch in Settings Modal
  const soundCheckbox = document.getElementById('setting-sound-checkbox');
  if (soundCheckbox) {
    soundCheckbox.checked = state.soundEnabled;
    soundCheckbox.onchange = (e) => {
      state.soundEnabled = e.target.checked;
      localStorage.setItem(STORAGE_KEYS.SOUND_ENABLED, JSON.stringify(state.soundEnabled));
      if (state.soundEnabled) sound.playClick();
    };
  }

  // Change Password Form in Settings Modal
  const changePwdForm = document.getElementById('change-pwd-form');
  if (changePwdForm) {
    changePwdForm.onsubmit = (e) => {
      e.preventDefault();
      const oldPwd = document.getElementById('input-current-pwd').value;
      const newPwd = document.getElementById('input-new-pwd').value;
      const confirmPwd = document.getElementById('input-confirm-pwd').value;
      handleChangePassword(oldPwd, newPwd, confirmPwd);
    };
  }

  // Logout Button in Settings Modal
  const logoutBtn = document.getElementById('btn-settings-logout');
  if (logoutBtn) {
    logoutBtn.onclick = handleLogout;
  }

  // Open Cloud Config from Settings (Admin Only)
  const openCloudFromSettingsBtn = document.getElementById('btn-open-cloud-config-from-settings');
  if (openCloudFromSettingsBtn) {
    openCloudFromSettingsBtn.onclick = () => {
      if (!isAdmin()) {
        alert(state.language === 'en' ? 'Access restricted to administrator.' : 'Fitur ini hanya dapat diakses oleh administrator resmi.');
        return;
      }
      settingsModal.classList.add('hidden');
      document.getElementById('cloud-sync-modal').classList.remove('hidden');
      sound.playClick();
    };
  }

  // Auth Modal Tab Switcher (Login vs Sign Up)
  const tabLoginBtn = document.getElementById('tab-login-btn');
  const tabRegisterBtn = document.getElementById('tab-register-btn');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  if (tabLoginBtn && tabRegisterBtn) {
    tabLoginBtn.onclick = () => {
      tabLoginBtn.classList.add('active');
      tabRegisterBtn.classList.remove('active');
      loginForm.classList.remove('hidden');
      registerForm.classList.add('hidden');
      sound.playClick();
    };

    tabRegisterBtn.onclick = () => {
      tabRegisterBtn.classList.add('active');
      tabLoginBtn.classList.remove('active');
      registerForm.classList.remove('hidden');
      loginForm.classList.add('hidden');
      sound.playClick();
    };
  }

  // Password Visibility Toggles
  document.querySelectorAll('.btn-toggle-pwd').forEach((btn) => {
    btn.onclick = () => {
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);
      if (input) {
        input.type = (input.type === 'password') ? 'text' : 'password';
      }
    };
  });

  // Login Form Submission
  if (loginForm) {
    loginForm.onsubmit = (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const pwd = document.getElementById('login-password').value;
      handleLogin(email, pwd);
    };
  }

  // Register Form Submission
  if (registerForm) {
    registerForm.onsubmit = (e) => {
      e.preventDefault();
      const user = document.getElementById('reg-username').value;
      const email = document.getElementById('reg-email').value;
      const pwd = document.getElementById('reg-password').value;
      handleRegister(user, email, pwd);
    };
  }

  // Add Item Buttons
  document.getElementById('btn-open-add-modal').onclick = () => openItemModal();
  document.getElementById('btn-empty-add').onclick = () => openItemModal();
  document.getElementById('btn-close-item-modal').onclick = closeItemModal;
  document.getElementById('btn-save-item').onclick = saveItemFromModal;

  // Category Slide Navigation (PC Friendly)
  const catContainer = document.getElementById('category-filter-container');
  const btnCatPrev = document.getElementById('btn-cat-prev');
  const btnCatNext = document.getElementById('btn-cat-next');

  if (btnCatPrev && catContainer) {
    btnCatPrev.onclick = () => {
      catContainer.scrollBy({ left: -200, behavior: 'smooth' });
      sound.playClick();
    };
  }

  if (btnCatNext && catContainer) {
    btnCatNext.onclick = () => {
      catContainer.scrollBy({ left: 200, behavior: 'smooth' });
      sound.playClick();
    };
  }

  if (catContainer) {
    catContainer.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        catContainer.scrollLeft += e.deltaY;
      }
    }, { passive: false });
  }

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

  // Category Dropdown Change & Inline Custom Category Toggle
  const catSelect = document.getElementById('item-category-select');
  const inlineNewCatBox = document.getElementById('new-category-inline-box');
  const toggleNewCatBtn = document.getElementById('btn-toggle-new-cat');
  const confirmAddCatBtn = document.getElementById('btn-confirm-add-cat');
  const cancelAddCatBtn = document.getElementById('btn-cancel-add-cat');
  const inputNewCatName = document.getElementById('input-new-cat-name');

  if (catSelect) {
    catSelect.onchange = () => {
      if (catSelect.value === '__add_new__') {
        inlineNewCatBox.classList.remove('hidden');
        inputNewCatName.focus();
      } else {
        inlineNewCatBox.classList.add('hidden');
        document.getElementById('item-category-input').value = catSelect.value;
      }
      sound.playClick();
    };
  }

  if (toggleNewCatBtn) {
    toggleNewCatBtn.onclick = () => {
      inlineNewCatBox.classList.toggle('hidden');
      if (!inlineNewCatBox.classList.contains('hidden')) {
        inputNewCatName.focus();
      }
      sound.playClick();
    };
  }

  if (confirmAddCatBtn) {
    confirmAddCatBtn.onclick = () => {
      const newCat = inputNewCatName.value.trim();
      if (!newCat) {
        alert(state.language === 'en' ? 'Please enter a category name!' : 'Silakan masukkan nama kategori!');
        return;
      }
      const baseList = getDefaultCategoriesList();
      if (!state.customCategories.includes(newCat) && !baseList.includes(newCat)) {
        state.customCategories.push(newCat);
        localStorage.setItem(STORAGE_KEYS.CUSTOM_CATEGORIES, JSON.stringify(state.customCategories));
        populateCategoryDropdown(newCat);
        populateFilterPills();
      }
      catSelect.value = newCat;
      document.getElementById('item-category-input').value = newCat;
      inlineNewCatBox.classList.add('hidden');
      inputNewCatName.value = '';
      sound.playSuccess();
    };
  }

  if (cancelAddCatBtn) {
    cancelAddCatBtn.onclick = () => {
      inlineNewCatBox.classList.add('hidden');
      inputNewCatName.value = '';
      const fallback = state.language === 'en' ? 'Staple Foods' : 'Bahan Pokok';
      catSelect.value = document.getElementById('item-category-input').value || fallback;
    };
  }

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

  // Cloud Sync Firebase Modal Handlers (Admin Only)
  const cloudModal = document.getElementById('cloud-sync-modal');
  const cloudTextarea = document.getElementById('firebase-config-textarea');
  
  document.getElementById('btn-cloud-sync').onclick = () => {
    if (!isAdmin()) {
      alert(state.language === 'en' ? 'Firebase sync is restricted to administrator.' : 'Akses sinkronisasi Firebase hanya untuk administrator.');
      return;
    }
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
      alert(state.language === 'en' ? 'Invalid configuration format! Must contain apiKey and projectId.' : 'Format konfigurasi tidak valid! Pastikan mengandung apiKey dan projectId dari Firebase Console.');
      sound.playWarning();
      return;
    }

    try {
      if (window.FirebaseSync && typeof window.FirebaseSync.saveCustomConfig === 'function') {
        const ok = await window.FirebaseSync.saveCustomConfig(parsed);
        if (ok) {
          alert(state.language === 'en' ? 'Connected to Firebase! Database is now syncing across PC and Mobile.' : 'Berhasil terhubung ke Firebase! Database sekarang tersinkron realtime dengan HP & PC.');
          sound.playSuccess();
        } else {
          alert(state.language === 'en' ? 'Failed to connect. Check your apiKey & Firestore rules.' : 'Gagal menyambung ke Firebase. Periksa kembali apiKey & Security Rules Firestore Anda.');
          sound.playWarning();
        }
      }
    } catch (err) {
      alert('Error: ' + err.message);
      sound.playWarning();
    }
  };

  document.getElementById('btn-clear-firebase-config').onclick = () => {
    const promptClear = state.language === 'en' ? 'Remove saved Firebase config?' : 'Hapus konfigurasi Firebase yang tersimpan?';
    if (confirm(promptClear)) {
      if (window.FirebaseSync && typeof window.FirebaseSync.clearCustomConfig === 'function') {
        window.FirebaseSync.clearCustomConfig();
      }
      cloudTextarea.value = '';
      alert(state.language === 'en' ? 'Firebase configuration cleared.' : 'Konfigurasi Firebase lokal berhasil dihapus.');
      sound.playClick();
    }
  };

  document.getElementById('btn-manual-sync-now').onclick = () => {
    if (window.FirebaseSync && typeof window.FirebaseSync.pushLocalState === 'function') {
      window.FirebaseSync.pushLocalState(true);
      alert(state.language === 'en' ? 'Manual sync request sent to Firestore.' : 'Perintah sinkronisasi manual telah dikirim ke Cloud Firestore.');
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
      alert(state.language === 'en' ? 'Minimum budget limit is Rp 10.000!' : 'Batas minimal dompet adalah Rp 10.000!');
      return;
    }
    state.safetyCap = val;
    saveState();
    sound.playSuccess();
    updateSafetyCapBanner();
    renderBudgetBreakdown();
    const saveNotice = state.language === 'en'
      ? `Budget limit successfully saved: Rp ${formatRupiah(val)}!`
      : `Batas anggaran dompet berhasil disimpan: Rp ${formatRupiah(val)}!`;
    alert(saveNotice);
  };

  // Export Data JSON
  document.getElementById('btn-export-data').onclick = () => {
    const backupData = {
      appName: 'GroceryX',
      safetyCap: state.safetyCap,
      cart: state.cart,
      history: state.history,
      prevCatalog: state.prevCatalog,
      customCategories: state.customCategories,
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `groceryx_backup_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    sound.playSuccess();
  };

  // Clear All Data
  const clearAllBtn = document.getElementById('btn-clear-all-data');
  if (clearAllBtn) {
    clearAllBtn.onclick = () => {
      const clearConfirm = state.language === 'en'
        ? 'Are you sure you want to clear all cart items and shopping history? This action cannot be undone.'
        : 'Apakah Anda yakin ingin mengosongkan seluruh data troli belanja dan riwayat belanja? Tindakan ini tidak dapat dibatalkan.';
      if (confirm(clearConfirm)) {
        state.cart = [];
        state.history = [];
        saveState();
        renderCartItems();
        renderHistorySessions();
        renderBudgetBreakdown();
        updateSafetyCapBanner();
        sound.playSuccess();
        alert(state.language === 'en' ? 'All cart items and receipt history have been cleared.' : 'Seluruh data troli dan riwayat belanja berhasil dikosongkan.');
      }
    };
  }
}

// ==========================================================================
// APP BOOTSTRAP
// ==========================================================================

function initApp() {
  loadStateFromStorage();
  initTheme();
  initLanguage();
  initAuth();
  populateFilterPills();
  setupEventListeners();
  setupPWA();
  renderCartItems();
  renderHistorySessions();
  renderBudgetBreakdown();
  updateIcons();
}

window.addEventListener('DOMContentLoaded', initApp);
