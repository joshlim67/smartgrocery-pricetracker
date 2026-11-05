/**
 * GROCERYX 2.0 • Modern Food E-Commerce & Smart Budget Safety Tracker
 * Architecture: Vanilla ES Modules, Liquid Glass UI, Mobile-First 430px Chassis
 */

// ==========================================================================
// 1. I18N DICTIONARIES (INDONESIAN & ENGLISH)
// ==========================================================================

const I18N = {
  id: {
    appTitle: 'GroceryX',
    appSubtitle: 'Troli Belanja Supermarket',
    cartEmptyTitle: 'Keranjang Belanja Masih Kosong',
    cartEmptyDesc: 'Pilih produk makanan segar dan hemat di Etalase untuk mulai berbelanja.',
    emptyGoShopBtn: 'Buka Etalase Produk',
    catalogTitle: 'Menampilkan Produk Makanan',
    pinHint: 'Klik ❤️ untuk Pin ke Atas',
    addProdBtn: 'Tambah Produk Baru ke Katalog',
    btnAddProd: 'Tambah Produk Baru ke Katalog',
    bundleTitle: 'Paket Hemat Spesial',
    bundleSub: 'Diskon s/d 20%',
    bundleHint: 'Beli combo 2–3 produk hemat langsung di keranjang',
    bundleBuyBtn: 'Beli Paket',
    cartPageTitle: 'Keranjang Belanja',
    cartPageDesc: 'Periksa kuantitas item, masukkan voucher diskon, dan amankan budget Anda.',
    voucherTitle: 'Voucher & Kode Diskon',
    voucherSectionTitle: 'Voucher & Kode Diskon',
    applyVoucherBtn: 'Terapkan',
    voucherPlaceholder: 'cth: GROCERYHEMAT',
    cartTipsTitle: 'Tips Cerdas Belanja Saat Ini',
    totalItemsPrefix: 'Total Barang:',
    savedPrefix: 'Hemat',
    voucherDiscountTitle: 'Diskon Voucher:',
    totalPriceTitle: 'Total Belanja:',
    checkoutBtn: 'Selesaikan & Simpan Struk',
    historyTitle: 'Riwayat Belanja Bulanan',
    historyDesc: 'Data struk tersimpan sebagai acuan komparator harga belanja berikutnya.',
    histCurrLabel: 'Total Belanja Sesi Ini',
    histCurrCaption: 'Sesi berjalan',
    histPrevLabel: 'Belanja Sebelumnya',
    histPrevCaption: 'Struk acuan harga',
    exportBtn: 'Ekspor Data',
    clearBtn: 'Kosongkan Data',
    emptyHistoryTitle: 'Belum Ada Struk Belanja',
    emptyHistoryDesc: 'Struk belanja yang telah diselesaikan akan tersimpan rapi di sini.',
    emptyCatalogTitle: 'Produk Tidak Ditemukan',
    emptyCatalogDesc: 'Coba gunakan kata kunci lain atau pilih kategori "Semua".',
    resetCatalogBtn: 'Tampilkan Semua Produk',
    sehatTitle: 'Sehat Meter',
    sehatMeterTitle: 'Sehat Meter',
    sehatSub: 'Nutri-Score & analisis kualitas kesehatan produk makanan yang Anda beli.',
    sehatMeterSub: 'Nutri-Score & analisis kualitas kesehatan produk makanan yang Anda beli.',
    sehatCaption: 'Skor Makanan Sehat',
    statFresh: 'Bahan Segar<br>& Alami',
    statNeutral: 'Olahan<br>Seimbang',
    statJunk: 'Tinggi<br>Garam / Gula',
    spendingSummaryTitle: 'Ringkasan Pengeluaran Belanja',
    statTotalSpent: 'Total Pengeluaran',
    statTotalSaved: 'Total Diskon Dihemat',
    statTotalReceipts: 'Jumlah Struk',
    statAvgSpent: 'Rata-Rata per Belanja',
    catSpendingTitle: 'Proporsi Pengeluaran Kategori:',
    budgetSettingTitle: 'Pengaturan Batas Anggaran (Safety Cap)',
    budgetSettingSub: 'Tentukan batas maksimal dompet belanja bulanan agar Anda terhindar dari defisit.',
    saveBudgetBtn: 'Simpan Batas Anggaran',
    themeTitle: 'Pilihan Tema Tampilan (Liquid Glass)',
    themeSub: 'Pilih tema kaca transparan modern favorit Anda',
    themeBrightSub: 'Terang kristal & modern (Default)',
    themeIceSub: 'Kaca es transparan biru cyan',
    themeAuroraSub: 'Gradasi violet & peach transparan',
    themeMidnightSub: 'Kaca transparan gelap & neon',
    langTitle: 'Bahasa',
    langSub: '',
    audioTitle: 'Efek Suara Belanja',
    audioSub: 'Suara responsif saat scan barcode, klik, dan checkout',
    changePwdTitle: 'Ganti Password Akun',
    changePwdSub: 'Perbarui kata sandi untuk keamanan akun',
    currentPwd: 'Password Saat Ini',
    newPwd: 'Password Baru',
    confirmPwd: 'Konfirmasi Password Baru',
    saveNewPwdBtn: 'Simpan Password Baru',
    logoutBtn: 'Keluar dari Akun (Logout)',
    helpTitle: 'Pusat Bantuan (Help Center)',
    helpSub: 'Hubungi Customer Service kami jika membutuhkan bantuan',
    csPhone: '+62 123456777',
    csHours: 'CS Siap Membantu',
    csNote: 'Hubungi kami jika mengalami kendala atau membutuhkan informasi produk.',
    btnCallCs: 'Hubungi CS',
    btnSwitchAcc: 'Ganti Akun',
    clearCartText: 'Hapus Semua',
    balanceSub: 'Sisa Dompet:',
    spent: 'Terpakai:',
    maxLimit: 'Batas Maks:',
    navShop: 'Etalase',
    navCart: 'Keranjang',
    navScan: 'Scan',
    navHistory: 'Riwayat',
    navAccount: 'Akun',
    scannerTitle: 'Pindai Barcode Produk',
    scannerDesc: 'Arahkan kamera ke barcode pada kemasan makanan atau upload foto barcode.',
    uploadBarcodeBtn: 'Unggah Foto Barcode',
    warningTitle: 'Peringatan: Anggaran Terlampaui!',
    modalWarningTitle: 'Peringatan: Anggaran Terlampaui!',
    modalWarningDesc: 'Total belanjaan Anda saat ini telah melebihi batas anggaran yang ditentukan.',
    warningDesc: 'Total belanjaan Anda saat ini telah melebihi batas anggaran yang ditentukan.',
    warningBtnCart: 'Tinjau Keranjang & Hemat',
    warningBtnRaise: 'Naikkan Batas Anggaran',
    warningBtnDismiss: 'Tetap Lanjut Belanja',
    googleAuthText: 'Lanjutkan dengan Google',
    authBrandSub: 'Modern Food E-Commerce & Budget Safety Tracker',
    authEmail: 'Email',
    authPassword: 'Password',
    authLoginSubmit: 'Masuk ke GroceryX',
    regUsername: 'Username',
    regEmail: 'Email',
    regPassword: 'Password',
    authRegSubmit: 'Buat Akun Sekarang',
    btnSearchPlaceholder: 'Cari beras, minyak, susu, snack...'
  },
  en: {
    appTitle: 'GroceryX',
    appSubtitle: 'Supermarket Grocery Cart',
    cartEmptyTitle: 'Your Cart is Currently Empty',
    cartEmptyDesc: 'Browse fresh and discounted food groceries in the Catalog to start.',
    emptyGoShopBtn: 'Explore Products',
    catalogTitle: 'Showing Food Groceries',
    pinHint: 'Click ❤️ to Pin to Top',
    addProdBtn: 'Add New Product',
    btnAddProd: 'Add New Product',
    bundleTitle: 'Special Value Packs',
    bundleSub: 'Up to 20% Off',
    bundleHint: 'Buy 2–3 item combo directly to cart',
    bundleBuyBtn: 'Buy Bundle',
    cartPageTitle: 'Shopping Cart',
    cartPageDesc: 'Verify item quantities, apply promo vouchers, and protect your budget.',
    voucherTitle: 'Voucher & Promo Code',
    voucherSectionTitle: 'Vouchers & Promo Codes',
    applyVoucherBtn: 'Apply',
    voucherPlaceholder: 'e.g. GROCERYHEMAT',
    cartTipsTitle: 'Smart Shopping Tips',
    totalItemsPrefix: 'Total Items:',
    savedPrefix: 'Saved',
    voucherDiscountTitle: 'Voucher Discount:',
    totalPriceTitle: 'Total Spent:',
    checkoutBtn: 'Checkout & Save Receipt',
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
    emptyCatalogTitle: 'No Products Found',
    emptyCatalogDesc: 'Try another keyword or select "All" category.',
    resetCatalogBtn: 'Show All Products',
    sehatTitle: 'Health Meter',
    sehatMeterTitle: 'Health Meter',
    sehatSub: 'Nutri-Score and nutritional health analysis of your grocery cart.',
    sehatMeterSub: 'Nutri-Score and nutritional health analysis of your grocery cart.',
    sehatCaption: 'Healthy Food Score',
    statFresh: 'Fresh &<br>Natural',
    statNeutral: 'Balanced<br>Processed',
    statJunk: 'High Sodium<br>/ Sugar',
    spendingSummaryTitle: 'Grocery Spending Overview',
    statTotalSpent: 'Total Spent',
    statTotalSaved: 'Total Discounts Saved',
    statTotalReceipts: 'Receipts Count',
    statAvgSpent: 'Average per Trip',
    catSpendingTitle: 'Spending Proportion by Category:',
    budgetSettingTitle: 'Budget Limit Configuration (Safety Cap)',
    budgetSettingSub: 'Set your monthly wallet safety cap to avoid grocery overspending.',
    saveBudgetBtn: 'Save Budget Limit',
    themeTitle: 'Appearance Theme (Liquid Glass)',
    themeSub: 'Select your favorite modern translucent glass theme',
    themeBrightSub: 'Crystal bright & modern (Default)',
    themeIceSub: 'Cyan blue transparent ice glass',
    themeAuroraSub: 'Translucent violet & peach gradient',
    themeMidnightSub: 'Dark & neon transparent glass',
    langTitle: 'Language',
    langSub: '',
    audioTitle: 'Shopping Sound Effects',
    audioSub: 'Responsive haptics for barcode scan, clicks, and checkout',
    changePwdTitle: 'Change Account Password',
    changePwdSub: 'Update password for security',
    currentPwd: 'Current Password',
    newPwd: 'New Password',
    confirmPwd: 'Confirm New Password',
    saveNewPwdBtn: 'Save New Password',
    logoutBtn: 'Log Out of Account',
    helpTitle: 'Help Center',
    helpSub: 'Contact our Customer Service for support and inquiries',
    csPhone: '+62 123456777',
    csHours: 'CS Ready to Help',
    csNote: 'Contact us if you have any issues or need product information.',
    btnCallCs: 'Call CS',
    btnSwitchAcc: 'Switch Account',
    clearCartText: 'Clear Cart',
    balanceSub: 'Remaining:',
    spent: 'Spent:',
    maxLimit: 'Max Limit:',
    navShop: 'Shop',
    navCart: 'Cart',
    navScan: 'Scan',
    navHistory: 'History',
    navAccount: 'Account',
    scannerTitle: 'Scan Product Barcode',
    scannerDesc: 'Point camera at food packaging barcode or upload photo.',
    uploadBarcodeBtn: 'Upload Barcode Photo',
    warningTitle: 'Warning: Budget Exceeded!',
    modalWarningTitle: 'Warning: Budget Exceeded!',
    modalWarningDesc: 'Your grocery spending has exceeded your set monthly safety cap.',
    warningDesc: 'Your grocery spending has exceeded your set monthly safety cap.',
    warningBtnCart: 'Review Cart & Save',
    warningBtnRaise: 'Increase Budget Cap',
    warningBtnDismiss: 'Continue Shopping',
    googleAuthText: 'Continue with Google',
    authBrandSub: 'Modern Food E-Commerce & Budget Safety Tracker',
    authEmail: 'Email',
    authPassword: 'Password',
    authLoginSubmit: 'Sign In to GroceryX',
    regUsername: 'Username',
    regEmail: 'Email',
    regPassword: 'Password',
    authRegSubmit: 'Create Account Now',
    btnSearchPlaceholder: 'Search rice, cooking oil, milk, snack...'
  }
};

// ==========================================================================
// 2. FOOD PRODUCTS CATALOG (SHOPEE & ASTRO E-COMMERCE DATA)
// ==========================================================================

const DEFAULT_CATEGORIES = [
  'Semua',
  'Bahan Pokok',
  'Makanan Instan & Olahan',
  'Daging & Seafood Segar',
  'Sayur & Buah Segar',
  'Bumbu & Dapur',
  'Susu, Keju & Olahan',
  'Camilan & Snack',
  'Sabun Cuci & Deterjen',
  'Perlengkapan Mandi & Tubuh',
  'Lainnya'
];

const CATALOG_PRODUCTS = [
  {
    id: 'prod_beras_5kg',
    name: 'Beras Ramos Premium 5kg',
    category: 'Bahan Pokok',
    unit: 'kg',
    price: 74000,
    normalPrice: 82000,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format&fit=crop&q=80',
    barcode: '8991001001001',
    healthType: 'healthy',
    healthLabel: 'Bahan Segar Alami',
    smartTip: 'Bandingkan harga per kg kemasan 5kg vs 2.5kg. Cek butir beras utuh transparan tanpa pemutih.'
  },
  {
    id: 'prod_minyak_2l',
    name: 'Minyak Goreng Pouch 2L',
    category: 'Bahan Pokok',
    unit: 'liter',
    price: 34500,
    normalPrice: 38000,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop&q=80',
    barcode: '8999999123456',
    healthType: 'neutral',
    healthLabel: 'Minyak Nabati SNI',
    smartTip: 'Pouch 2L umumnya 10% lebih hemat daripada kemasan botol plastik.'
  },
  {
    id: 'prod_telur_1kg',
    name: 'Telur Ayam Negeri Fresh 1kg',
    category: 'Bahan Pokok',
    unit: 'kg',
    price: 28000,
    normalPrice: 31000,
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=500&auto=format&fit=crop&q=80',
    barcode: '8998888123456',
    healthType: 'healthy',
    healthLabel: 'Tinggi Protein Alami',
    smartTip: 'Pilih cangkang berselaput matte dan agak kasar; hindari cangkang licin mengkilap.'
  },
  {
    id: 'prod_indomie_dus',
    name: 'Indomie Goreng (Dus 40 Pcs)',
    category: 'Makanan Instan & Olahan',
    unit: 'dus',
    price: 112000,
    normalPrice: 125000,
    image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=500&auto=format&fit=crop&q=80',
    barcode: '8992388112233',
    healthType: 'unhealthy',
    healthLabel: 'Olahan Cepat Saji',
    smartTip: 'Beli per karton isi 40 pcs menghemat Rp 400 per bungkus dibanding beli eceran satuan.'
  },
  {
    id: 'prod_ultra_milk',
    name: 'Susu UHT Full Cream 1L',
    category: 'Susu, Keju & Olahan',
    unit: 'liter',
    price: 19500,
    normalPrice: 22500,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=80',
    barcode: '8992753123456',
    healthType: 'healthy',
    healthLabel: 'Kaya Kalsium',
    smartTip: 'Ambil kotak dari baris rak paling belakang (metode FIFO supermarket) untuk masa expired terlama.'
  },
  {
    id: 'prod_brokoli',
    name: 'Brokoli Hijau Segar 500g',
    category: 'Sayur & Buah Segar',
    unit: 'ikat',
    price: 18000,
    normalPrice: 22000,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format&fit=crop&q=80',
    barcode: '8992222123456',
    healthType: 'healthy',
    healthLabel: 'Kaya Serat & Antioksidan',
    smartTip: 'Timbang sendiri di timbangan digital supermarket untuk verifikasi berat sebelum ke kasir.'
  },
  {
    id: 'prod_daging_sapi',
    name: 'Daging Sapi Rendang Segar 500g',
    category: 'Daging & Seafood Segar',
    unit: 'kg',
    price: 65000,
    normalPrice: 72000,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80',
    barcode: '8993333123456',
    healthType: 'healthy',
    healthLabel: 'Protein & Zat Besi',
    smartTip: 'Ambil daging di urutan paling terakhir sebelum ke kasir agar suhu dingin tidak mencair di troli.'
  },
  {
    id: 'prod_roti_tawar',
    name: 'Roti Tawar Gandum Kupas',
    category: 'Bahan Pokok',
    unit: 'pack',
    price: 17500,
    normalPrice: 20000,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=80',
    barcode: '8991111123456',
    healthType: 'healthy',
    healthLabel: 'Gandum Utuh',
    smartTip: 'Cek tanggal kedaluwarsa pada kawat pengikat roti (biasanya hanya tahan 4-5 hari).'
  },
  {
    id: 'prod_roma_kelapa',
    name: 'Biskuit Roma Kelapa 300g',
    category: 'Camilan & Snack',
    unit: 'pack',
    price: 11500,
    normalPrice: 13500,
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=80',
    barcode: '8996001301234',
    healthType: 'unhealthy',
    healthLabel: 'Snack Manis',
    smartTip: 'Waspada belanja camilan saat perut lapar. Riset membuktikan pengeluaran impulsif naik hingga 45%!'
  },
  {
    id: 'prod_sunlight',
    name: 'Sunlight Jeruk Nipis Refill 700ml',
    category: 'Sabun Cuci & Deterjen',
    unit: 'pack',
    price: 14500,
    normalPrice: 17000,
    image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?w=500&auto=format&fit=crop&q=80',
    barcode: '8997777123456',
    healthType: 'neutral',
    healthLabel: 'Pembersih Rumah',
    smartTip: 'Kemasan isi ulang (refill) selalu 20% lebih hemat dibanding membeli kemasan botol pump baru.'
  },
  {
    id: 'prod_lifebuoy',
    name: 'Lifebuoy Sabun Mandi 4x110g',
    category: 'Perlengkapan Mandi & Tubuh',
    unit: 'pack',
    price: 23000,
    normalPrice: 27000,
    image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=500&auto=format&fit=crop&q=80',
    barcode: '8996666123456',
    healthType: 'neutral',
    healthLabel: 'Kebersihan Tubuh',
    smartTip: 'Paket multi-pack isi 4 batang memotong harga satuan hingga Rp 1.500 per batang sabun.'
  },
  {
    id: 'prod_kopi_kapal_api',
    name: 'Kopi Kapal Api Mix 10s',
    category: 'Camilan & Snack',
    unit: 'pack',
    price: 14000,
    normalPrice: 16500,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&auto=format&fit=crop&q=80',
    barcode: '8991002104567',
    healthType: 'neutral',
    healthLabel: 'Minuman Kopi',
    smartTip: 'Hitung harga per sachet saat membandingkan kemasan renceng isi 10 vs kantong isi 30.'
  },
  {
    id: 'prod_roma_sandwich',
    name: 'Biskuit Cokelat Roma Sandwich 120g',
    category: 'Camilan & Snack',
    unit: 'pack',
    price: 9500,
    normalPrice: 11000,
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=80',
    barcode: '1234567890',
    healthType: 'neutral',
    healthLabel: 'Camilan Halal',
    smartTip: 'Pilihan hemat untuk teman santai dan teh sore keluarga.'
  }
];

// ==========================================================================
// 3. PAKET HEMAT (COMBO BUNDLES) & VOUCHER CODES
// ==========================================================================

const COMBO_BUNDLES = [
  {
    id: 'bundle_sarapan',
    name: 'Paket Sarapan Ceria',
    subtitle: 'Telur Ayam 1kg + Susu UHT 1L + Roti Tawar Gandum',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=80',
    items: [
      { name: 'Telur Ayam Negeri Fresh 1kg', qty: 1, unit: 'kg', unitPrice: 28000, category: 'Bahan Pokok' },
      { name: 'Susu UHT Full Cream 1L', qty: 1, unit: 'liter', unitPrice: 19500, category: 'Susu, Keju & Olahan' },
      { name: 'Roti Tawar Gandum Kupas', qty: 1, unit: 'pack', unitPrice: 17500, category: 'Bahan Pokok' }
    ],
    normalTotal: 65000,
    bundlePrice: 53000,
    discountPercent: 18,
    savedAmount: 12000
  },
  {
    id: 'bundle_dapur',
    name: 'Paket Dapur Komplit',
    subtitle: 'Beras Ramos 5kg + Minyak Goreng 2L + Biskuit Roma',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=80',
    items: [
      { name: 'Beras Ramos Premium 5kg', qty: 1, unit: 'kg', unitPrice: 74000, category: 'Bahan Pokok' },
      { name: 'Minyak Goreng Pouch 2L', qty: 1, unit: 'liter', unitPrice: 34500, category: 'Bahan Pokok' },
      { name: 'Biskuit Roma Kelapa 300g', qty: 1, unit: 'pack', unitPrice: 11500, category: 'Camilan & Snack' }
    ],
    normalTotal: 120000,
    bundlePrice: 98000,
    discountPercent: 18,
    savedAmount: 22000
  },
  {
    id: 'bundle_sehat',
    name: 'Paket Nutrisi Segar',
    subtitle: 'Daging Sapi 500g + Brokoli Hijau + Telur 1kg',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format&fit=crop&q=80',
    items: [
      { name: 'Daging Sapi Rendang Segar 500g', qty: 1, unit: 'kg', unitPrice: 65000, category: 'Daging & Seafood Segar' },
      { name: 'Brokoli Hijau Segar 500g', qty: 1, unit: 'ikat', unitPrice: 18000, category: 'Sayur & Buah Segar' },
      { name: 'Telur Ayam Negeri Fresh 1kg', qty: 1, unit: 'kg', unitPrice: 28000, category: 'Bahan Pokok' }
    ],
    normalTotal: 111000,
    bundlePrice: 91000,
    discountPercent: 18,
    savedAmount: 20000
  }
];

const PROMO_VOUCHERS = {
  'GROCERYHEMAT': { type: 'percent', value: 15, desc: 'Diskon 15% dari total belanja', minSpend: 0 },
  'SEHATSEGAR': { type: 'fixed', value: 20000, desc: 'Potongan langsung Rp 20.000', minSpend: 50000 },
  'ASTROX': { type: 'fixed', value: 15000, desc: 'Diskon kilat Rp 15.000', minSpend: 40000 },
  'JOSHADMIN': { type: 'percent', value: 25, desc: 'Diskon eksklusif Administrator 25%', minSpend: 0 }
};

// ==========================================================================
// 4. STORAGE KEYS & APP STATE
// ==========================================================================

const STORAGE_KEYS = {
  CART: 'groceryx_cart_v2',
  HISTORY: 'groceryx_history_v2',
  SAFETY_CAP: 'groceryx_safety_cap_v2',
  PINNED_PRODUCTS: 'groceryx_pinned_products_v2',
  CUSTOM_PRODUCTS: 'groceryx_custom_products_v2',
  APPLIED_VOUCHER: 'groceryx_applied_voucher_v2',
  CURRENT_USER: 'sg_current_user_v1',
  USERS_LIST: 'sg_users_list_v1',
  THEME: 'groceryx_theme_v2',
  LANGUAGE: 'groceryx_lang_v2',
  SOUND: 'groceryx_sound_v2',
  LOCATION: 'groceryx_location_v2'
};

const state = {
  safetyCap: 500000,
  cart: [],
  history: [],
  pinnedProducts: [],
  customProducts: [],
  appliedVoucher: null,
  activeTab: 'view-shop',
  selectedCategory: 'Semua',
  searchQuery: '',
  theme: 'liquid-bright',
  language: 'id',
  soundEnabled: true,
  currentUser: null,
  currentLocation: JSON.parse(localStorage.getItem('groceryx_location_v2') || 'null') || {
    name: 'Lotte Mart Grocery - Puri Indah',
    coords: null,
    updatedAt: Date.now()
  },
  detectedCoords: null,
  hasTriggeredOverbudgetModal: false,
  stream: null,
  zxingReader: null
};

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast-message toast-${type}`;
  const iconName = type === 'success' ? 'check-circle-2' : (type === 'warning' ? 'alert-triangle' : 'info');
  toast.innerHTML = `<i data-lucide="${iconName}"></i> <span>${message}</span>`;
  container.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();
  setTimeout(() => {
    toast.classList.add('toast-fadeout');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 320);
  }, 2800);
}

function t(key) {
  const dict = I18N[state.language] || I18N.id;
  return dict[key] || (I18N.id[key] || key);
}

// ==========================================================================
// REALTIME FIREBASE SYNC BRIDGE & LOCAL STORAGE PERSISTENCE
// ==========================================================================

function syncToFirebase(immediate = false) {
  if (window.FirebaseSync && typeof window.FirebaseSync.pushLocalState === 'function') {
    window.FirebaseSync.pushLocalState(immediate);
  }
}

function saveStateToLocalStorage() {
  try {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(state.cart || []));
    localStorage.setItem(STORAGE_KEYS.SAFETY_CAP, (state.safetyCap || 500000).toString());
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(state.history || []));
    localStorage.setItem(STORAGE_KEYS.PINNED_PRODUCTS, JSON.stringify(state.pinnedProducts || []));
    localStorage.setItem(STORAGE_KEYS.CUSTOM_PRODUCTS, JSON.stringify(state.customProducts || []));
    if (state.appliedVoucher) {
      localStorage.setItem(STORAGE_KEYS.APPLIED_VOUCHER, state.appliedVoucher);
    } else {
      localStorage.removeItem(STORAGE_KEYS.APPLIED_VOUCHER);
    }
    if (state.currentUser) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(state.currentUser));
    }
    if (state.currentLocation) {
      localStorage.setItem(STORAGE_KEYS.LOCATION, JSON.stringify(state.currentLocation));
    }
  } catch (e) {
    console.warn('Gagal menyimpan state ke localStorage:', e);
  }
}

function renderAll() {
  updateSafetyBanner();
  renderCatalog();
  renderComboBundles();
  renderCart();
  renderVoucherUI();
  renderSehatMeter();
  renderCartSmartTips();
  renderHistory();
  renderAccountStats();
  applyUserSessionToUI();
  updateIcons();
}

// Global bridge for multi-device realtime synchronization
window.SmartGrocery = {
  state,
  renderAll,
  saveStateToLocalStorage,
  syncToFirebase,
  sound: null // populated after SoundEngine instantiates
};

// ==========================================================================
// 5. AUDIO SYNTHESIZER (WEB AUDIO API HAPTICS & SOUND EFFECTS)
// ==========================================================================

class SoundEngine {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playClick() {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (_) { }
  }

  playScanBeep() {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1760, this.ctx.currentTime); // High crisp scanner beep
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch (_) { }
  }

  playSuccess() {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.1, now + i * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.2);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.07);
        osc.stop(now + i * 0.07 + 0.2);
      });
    } catch (_) { }
  }

  playWarning() {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [440, 370, 311].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.12, now + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.18);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.1);
        osc.stop(now + i * 0.1 + 0.18);
      });
    } catch (_) { }
  }
}

const sound = new SoundEngine();
if (window.SmartGrocery) window.SmartGrocery.sound = sound;

// ==========================================================================
// 6. HELPER FORMATTERS
// ==========================================================================

function formatRupiah(num) {
  const val = Math.round(Number(num) || 0);
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function parseRupiahInput(str) {
  if (typeof str === 'number') return str;
  if (!str) return 0;
  const cleaned = str.toString().replace(/[^\d]/g, '');
  return parseInt(cleaned, 10) || 0;
}

function updateIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

function fireConfetti() {
  if (typeof window.confetti === 'function') {
    window.confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
  }
}

// ==========================================================================
// 7. USER AUTHENTICATION & GOOGLE SIGN-IN
// ==========================================================================

function loadUsersAndSession() {
  try {
    const rawUsers = localStorage.getItem(STORAGE_KEYS.USERS_LIST);
    state.usersList = rawUsers ? JSON.parse(rawUsers) : [];
  } catch (_) {
    state.usersList = [];
  }

  // Pre-seed official admin
  const adminEmail = 'joshualim@mutiarabangsa.sch.id';
  let admin = state.usersList.find((u) => u.email.toLowerCase() === adminEmail.toLowerCase());
  if (!admin) {
    admin = {
      username: 'josh',
      email: adminEmail,
      password: 'hellojosh672009',
      role: 'admin',
      provider: 'local'
    };
    state.usersList.push(admin);
    localStorage.setItem(STORAGE_KEYS.USERS_LIST, JSON.stringify(state.usersList));
  }

  try {
    const rawCur = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    state.currentUser = rawCur ? JSON.parse(rawCur) : null;
  } catch (_) {
    state.currentUser = null;
  }

  // Guest by default when not logged in
  if (!state.currentUser) {
    state.currentUser = null;
  }

  applyUserSessionToUI();
}

function isAdmin() {
  return state.currentUser && state.currentUser.email && state.currentUser.email.toLowerCase() === 'joshualim@mutiarabangsa.sch.id';
}

function applyUserSessionToUI() {
  const greetingEl = document.getElementById('header-user-greeting');
  const adminBadge = document.getElementById('header-admin-badge');
  const cloudBtn = document.getElementById('btn-cloud-sync');

  const accName = document.getElementById('account-user-name');
  const accEmail = document.getElementById('account-user-email');
  const accRole = document.getElementById('account-role-pill');
  const accAvatar = document.getElementById('account-avatar-initials');
  const accProvider = document.getElementById('account-provider-label');
  const btnLogout = document.getElementById('btn-settings-logout');

  const isEn = state.language === 'en';

  if (state.currentUser) {
    const name = state.currentUser.username || 'User';
    if (greetingEl) greetingEl.textContent = isEn ? `Hello, ${name}` : `Halo, ${name}`;
    if (accName) accName.textContent = name;
    if (accEmail) accEmail.textContent = state.currentUser.email;
    if (accAvatar) {
      const userPhoto = state.currentUser.photo || state.currentUser.avatarUrl;
      if (userPhoto) {
        accAvatar.innerHTML = `<img src="${userPhoto}" alt="${name}" referrerpolicy="no-referrer" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`;
      } else {
        accAvatar.textContent = name.charAt(0).toUpperCase();
      }
    }

    if (accProvider) {
      accProvider.textContent = state.currentUser.provider === 'google'
        ? (isEn ? 'Google Terverifikasi' : 'Akun Google Resmi')
        : (isEn ? 'Verified Account' : 'Akun Terverifikasi');
    }

    if (isAdmin()) {
      if (adminBadge) adminBadge.classList.remove('hidden');
      if (cloudBtn) cloudBtn.classList.remove('hidden');
      if (accRole) {
        accRole.textContent = 'ADMIN';
        accRole.className = 'badge-role-pill';
      }
    } else {
      if (adminBadge) adminBadge.classList.add('hidden');
      if (cloudBtn) cloudBtn.classList.add('hidden');
      if (accRole) {
        accRole.textContent = 'MEMBER';
        accRole.className = 'badge-role-pill bg-muted';
      }
    }
    if (btnLogout) btnLogout.classList.remove('hidden');
  } else {
    if (greetingEl) greetingEl.textContent = isEn ? 'Hello, Guest' : 'Halo, Pengguna';
    if (accName) accName.textContent = isEn ? 'Guest' : 'Tamu (Belum Masuk)';
    if (accEmail) accEmail.textContent = isEn ? 'Please log in' : 'Silakan masuk akun';
    if (accAvatar) accAvatar.textContent = '?';
    if (accProvider) accProvider.textContent = isEn ? 'Guest Mode' : 'Mode Tamu';
    if (adminBadge) adminBadge.classList.add('hidden');
    if (cloudBtn) cloudBtn.classList.add('hidden');
    if (accRole) {
      accRole.textContent = 'GUEST';
      accRole.className = 'badge-role-pill bg-muted';
    }
    if (btnLogout) btnLogout.classList.add('hidden');
  }
}

// ==========================================================================
// 7B. AUTHENTIC GOOGLE OAUTH 2.0 (GOOGLE IDENTITY SERVICES & FIREBASE AUTH)
// ==========================================================================

function parseJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error('Failed to parse JWT token:', e);
    return null;
  }
}

function getGoogleClientId() {
  if (typeof window !== 'undefined' && window.GOOGLE_OAUTH_CONFIG && window.GOOGLE_OAUTH_CONFIG.clientId && window.GOOGLE_OAUTH_CONFIG.clientId.trim()) {
    return window.GOOGLE_OAUTH_CONFIG.clientId.trim();
  }
  const local = localStorage.getItem('sg_google_client_id');
  if (local && local.trim()) return local.trim();
  return '';
}

async function handleGoogleSignIn() {
  sound.playClick();
  const clientId = getGoogleClientId();

  // 1. If Google OAuth Client ID is available, initiate authentic Google Identity Services
  if (clientId) {
    if (window.google && window.google.accounts) {
      try {
        // A. GIS OAuth 2.0 Token Client (Official popup with real Google Account Chooser & UserInfo)
        if (window.google.accounts.oauth2) {
          const tokenClient = window.google.accounts.oauth2.initTokenClient({
            client_id: clientId,
            scope: 'email profile openid',
            prompt: 'select_account',
            callback: async (resp) => {
              if (resp.error) {
                showToast(`Google OAuth: ${resp.error_description || resp.error}`, 'error');
                return;
              }
              if (resp.access_token) {
                try {
                  showToast('Memverifikasi akun Google resmi...', 'info');
                  const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: { Authorization: `Bearer ${resp.access_token}` }
                  });
                  const profile = await res.json();
                  if (profile && (profile.email || profile.sub)) {
                    applyGoogleUserSession({
                      name: profile.name || profile.given_name || profile.email?.split('@')[0] || 'Google User',
                      email: profile.email || '',
                      avatarUrl: profile.picture || '',
                      googleId: profile.sub || ('gid_' + Date.now())
                    });
                  } else {
                    showToast('Gagal memverifikasi profil Google.', 'error');
                  }
                } catch (fetchErr) {
                  console.error('Google userinfo fetch error:', fetchErr);
                  showToast('Gagal membaca data profil Google: ' + fetchErr.message, 'error');
                }
              }
            }
          });
          tokenClient.requestAccessToken({ prompt: 'select_account' });
          return;
        }

        // B. GIS ID Token Client (One-Tap / Credential popup)
        if (window.google.accounts.id) {
          window.google.accounts.id.initialize({
            client_id: clientId,
            callback: (res) => {
              const payload = parseJwt(res.credential);
              if (payload) {
                applyGoogleUserSession({
                  name: payload.name || payload.email?.split('@')[0] || 'Google User',
                  email: payload.email || '',
                  avatarUrl: payload.picture || '',
                  googleId: payload.sub || ('gid_' + Date.now())
                });
              }
            }
          });
          window.google.accounts.id.prompt();
          return;
        }
      } catch (gisErr) {
        console.warn('GIS error:', gisErr);
      }
    }
  }

  // 2. Try Firebase Auth GoogleAuthProvider if available
  try {
    const { initializeApp, getApps } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
    const { getAuth, signInWithPopup, GoogleAuthProvider } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js');
    const cfg = (typeof window !== 'undefined' && window.firebaseConfig) || (await import('./firebase-config.js')).firebaseConfig;
    if (cfg && cfg.apiKey) {
      const app = getApps().length > 0 ? getApps()[0] : initializeApp(cfg);
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      const result = await signInWithPopup(auth, provider);
      if (result && result.user) {
        applyGoogleUserSession({
          name: result.user.displayName || result.user.email?.split('@')[0] || 'Google User',
          email: result.user.email,
          avatarUrl: result.user.photoURL,
          googleId: result.user.uid
        });
        return;
      }
    }
  } catch (fbErr) {
    if (fbErr.code === 'auth/popup-closed-by-user') {
      showToast('Login Google dibatalkan.', 'info');
      return;
    }
    console.info('Firebase Auth direct popup note:', fbErr.message);
  }

  // 3. If neither Client ID nor Firebase Auth is ready, show Google OAuth Setup modal
  const googleModal = document.getElementById('google-oauth-modal');
  if (googleModal) {
    const input = document.getElementById('google-client-id-input');
    if (input) input.value = clientId || '';
    googleModal.classList.remove('hidden');
    if (window.lucide) window.lucide.createIcons();
  } else {
    showToast('Silakan masukkan Google OAuth Client ID di file google-auth-config.js.', 'warning');
  }
}

function applyGoogleUserSession({ name, email, avatarUrl, googleId }) {
  sound.playClick();
  const isEn = state.language === 'en';
  const cleanEmail = (email || '').trim().toLowerCase();
  const cleanName = (name || '').trim() || cleanEmail.split('@')[0] || 'Google User';
  const role = (cleanEmail === 'joshualim@mutiarabangsa.sch.id' || cleanEmail === 'joshualim.google@gmail.com') ? 'admin' : 'member';

  const finalAvatar = avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(cleanName)}&background=2563eb&color=fff&bold=true`;
  const googleUser = {
    googleId: googleId || ('gid_' + Math.abs(cleanEmail.split('').reduce((a, b) => ((a << 5) - a) + b.charCodeAt(0), 0))),
    username: cleanName,
    email: cleanEmail,
    role: role,
    provider: 'google',
    avatarUrl: finalAvatar,
    photo: finalAvatar,
    verifiedEmail: true
  };

  const existingIdx = state.usersList.findIndex((u) => u.email && u.email.toLowerCase() === cleanEmail);
  if (existingIdx >= 0) {
    state.usersList[existingIdx] = { ...state.usersList[existingIdx], ...googleUser };
  } else {
    state.usersList.push(googleUser);
  }
  localStorage.setItem(STORAGE_KEYS.USERS_LIST, JSON.stringify(state.usersList));

  state.currentUser = googleUser;
  localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(googleUser));
  localStorage.removeItem('sg_user_logged_out');

  applyUserSessionToUI();
  syncToFirebase(true);

  const googleModal = document.getElementById('google-oauth-modal');
  if (googleModal) googleModal.classList.add('hidden');
  const authModal = document.getElementById('auth-modal');
  if (authModal) authModal.classList.add('hidden');

  sound.playSuccess();
  fireConfetti();
  showToast(isEn
    ? `Welcome, ${cleanName}! Signed in via Google Account.`
    : `Berhasil masuk dengan Akun Google Resmi: ${cleanName} (${cleanEmail})!`, 'success');

  setTimeout(() => {
    openStoreLocationModal();
  }, 450);
}

function selectGoogleAccount(name, email) {
  applyGoogleUserSession({ name, email });
}

// ==========================================================================
// 8. THEME & LANGUAGE MANAGEMENT
// ==========================================================================

function setTheme(themeName) {
  state.theme = themeName;
  localStorage.setItem(STORAGE_KEYS.THEME, themeName);
  document.documentElement.setAttribute('data-theme', themeName);

  if (themeName === 'midnight-glass') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  document.querySelectorAll('.theme-card-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-theme') === themeName);
  });
}

const CATEGORY_NAMES_EN = {
  'Semua': 'All',
  'Bahan Pokok': 'Staple Food',
  'Makanan Instan & Olahan': 'Instant & Processed',
  'Daging & Seafood Segar': 'Fresh Meat & Seafood',
  'Sayur & Buah Segar': 'Fresh Produce',
  'Bumbu & Dapur': 'Seasoning & Pantry',
  'Susu, Keju & Olahan': 'Dairy & Cheese',
  'Camilan & Snack': 'Snacks & Treats',
  'Sabun Cuci & Deterjen': 'Laundry & Detergent',
  'Perlengkapan Mandi & Tubuh': 'Personal Care'
};

function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function setLanguage(lang) {
  state.language = lang === 'en' ? 'en' : 'id';
  localStorage.setItem(STORAGE_KEYS.LANGUAGE, state.language);
  document.documentElement.setAttribute('lang', state.language);

  document.querySelectorAll('.lang-card-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === state.language);
  });

  const dict = I18N[state.language] || I18N.id;

  // Apply translations to UI elements
  document.querySelectorAll('[id^="lbl-"]').forEach((el) => {
    const rawKey = el.id.replace('lbl-', '');
    const camelKey = toCamelCase(rawKey);
    if (dict[camelKey] !== undefined) {
      el.innerHTML = dict[camelKey];
    } else if (dict[rawKey] !== undefined) {
      el.innerHTML = dict[rawKey];
    } else if (dict[el.id] !== undefined) {
      el.innerHTML = dict[el.id];
    }
  });

  const searchInput = document.getElementById('shop-search-input');
  if (searchInput) {
    searchInput.placeholder = dict.btnSearchPlaceholder || (state.language === 'en' ? 'Search rice, cooking oil, milk, snack...' : 'Cari beras, minyak, susu, snack...');
  }

  const voucherInput = document.getElementById('voucher-code-input');
  if (voucherInput) {
    voucherInput.placeholder = dict.voucherPlaceholder || 'cth: GROCERYHEMAT';
  }

  // Update Bottom Nav Labels
  const navShop = document.getElementById('lbl-nav-shop');
  if (navShop) navShop.textContent = dict.navShop || (state.language === 'en' ? 'Shop' : 'Etalase');

  const navCart = document.getElementById('lbl-nav-cart');
  if (navCart) navCart.textContent = dict.navCart || (state.language === 'en' ? 'Cart' : 'Keranjang');

  const navScan = document.getElementById('lbl-nav-scan');
  if (navScan) navScan.textContent = dict.navScan || 'Scan';

  const navHistory = document.getElementById('lbl-nav-history');
  if (navHistory) navHistory.textContent = dict.navHistory || (state.language === 'en' ? 'History' : 'Riwayat');

  const navAccount = document.getElementById('lbl-nav-account');
  if (navAccount) navAccount.textContent = dict.navAccount || (state.language === 'en' ? 'Account' : 'Akun');

  const catalogCountLabel = document.getElementById('catalog-count-label');
  if (catalogCountLabel) {
    catalogCountLabel.textContent = dict.catalogTitle || (state.language === 'en' ? 'Showing Food Groceries' : 'Menampilkan Produk Makanan');
  }

  renderCategoryPills();
  renderComboBundles();
  renderCatalog();
  renderCart();
  renderHistory();
  renderSehatMeter();
  updateSafetyBanner();
  applyUserSessionToUI();
  updateIcons();
}

// ==========================================================================
// 9. PRODUCT CATALOG, LIKE/PIN & UPLOAD FOTO
// ==========================================================================

function getAllCatalogProducts() {
  const custom = Array.isArray(state.customProducts) ? state.customProducts : [];
  return [...CATALOG_PRODUCTS, ...custom];
}

function toggleLikeProduct(prodId) {
  sound.playClick();
  const index = state.pinnedProducts.indexOf(prodId);
  if (index >= 0) {
    state.pinnedProducts.splice(index, 1);
  } else {
    state.pinnedProducts.push(prodId);
    sound.playSuccess();
  }
  localStorage.setItem(STORAGE_KEYS.PINNED_PRODUCTS, JSON.stringify(state.pinnedProducts));
  renderCatalog();
  updateIcons();
  syncToFirebase();
}

function renderCategoryPills() {
  const container = document.getElementById('category-filter-container');
  if (!container) return;

  container.innerHTML = DEFAULT_CATEGORIES.map((cat) => {
    const isActive = state.selectedCategory === cat ? 'active' : '';
    const label = state.language === 'en' ? (CATEGORY_NAMES_EN[cat] || cat) : cat;
    return `<button type="button" class="filter-pill ${isActive}" data-category="${cat}">${label}</button>`;
  }).join('');

  container.querySelectorAll('.filter-pill').forEach((btn) => {
    btn.onclick = () => {
      sound.playClick();
      state.selectedCategory = btn.getAttribute('data-category');
      renderCategoryPills();
      renderCatalog();
    };
  });
}

function renderCatalog() {
  const grid = document.getElementById('catalog-products-grid');
  const emptyState = document.getElementById('catalog-empty-state');
  if (!grid) return;

  const all = getAllCatalogProducts();

  // Filter by category & search query
  let filtered = all.filter((p) => {
    const matchCat = state.selectedCategory === 'Semua' || p.category === state.selectedCategory;
    const matchQuery = !state.searchQuery || p.name.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchCat && matchQuery;
  });

  // Sort: Pinned (Liked ❤️) items always appear at the very TOP
  filtered.sort((a, b) => {
    const isAPinned = state.pinnedProducts.includes(a.id);
    const isBPinned = state.pinnedProducts.includes(b.id);
    if (isAPinned && !isBPinned) return -1;
    if (!isAPinned && isBPinned) return 1;
    return 0;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  const isEn = state.language === 'en';

  grid.innerHTML = filtered.map((prod) => {
    const isPinned = state.pinnedProducts.includes(prod.id);
    const cartItem = state.cart.find((i) => i.name.toLowerCase() === prod.name.toLowerCase());
    const qtyInCart = cartItem ? cartItem.qty : 0;

    const nutriClass = prod.healthType === 'healthy' ? 'tag-healthy' : (prod.healthType === 'neutral' ? 'tag-neutral' : 'tag-unhealthy');
    const nutriText = prod.healthType === 'healthy'
      ? (isEn ? '🟢 Natural' : '🟢 Alami')
      : (prod.healthType === 'neutral'
        ? (isEn ? '🟡 Processed' : '🟡 Olahan')
        : (isEn ? '🔴 High Sugar' : '🔴 Tinggi Gula'));

    return `
      <div class="product-card ${isPinned ? 'is-pinned' : ''}" data-id="${prod.id}">
        ${isPinned ? `<div class="pinned-badge-chip">📌 ${isEn ? 'Pinned' : 'Disukai'}</div>` : ''}
        
        <button type="button" class="btn-pin-like ${isPinned ? 'active is-pinned-heart' : ''}" data-id="${prod.id}" title="${isEn ? 'Pin to Top' : 'Pin ke Atas'}">
          <i data-lucide="heart" class="${isPinned ? 'fill-crimson text-crimson' : ''}"></i>
        </button>

        <div class="product-card-img-wrap">
          <img src="${prod.image}" alt="${prod.name}" class="product-card-img" loading="lazy">
        </div>

        <div class="product-card-body">
          <span class="nutri-tag ${nutriClass}">${nutriText}</span>
          <h4 class="product-card-title">${prod.name}</h4>

          <div class="product-card-price-row">
            <span class="product-curr-price">Rp ${formatRupiah(prod.price)}</span>
            ${prod.normalPrice > prod.price ? `<span class="product-normal-price">Rp ${formatRupiah(prod.normalPrice)}</span>` : ''}
          </div>

          <div class="product-card-action mt-2">
            ${qtyInCart > 0 ? `
              <div class="catalog-stepper">
                <button type="button" class="catalog-stepper-btn btn-cart-dec" data-name="${prod.name}">
                  <i data-lucide="minus"></i>
                </button>
                <span class="catalog-stepper-qty">${qtyInCart} ${prod.unit}</span>
                <button type="button" class="catalog-stepper-btn btn-cart-inc" data-name="${prod.name}">
                  <i data-lucide="plus"></i>
                </button>
              </div>
            ` : `
              <button type="button" class="btn-catalog-add btn-quick-add" data-id="${prod.id}">
                <i data-lucide="plus"></i> <span>${isEn ? 'Cart' : 'Keranjang'}</span>
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Event handlers for Like/Pin
  grid.querySelectorAll('.btn-pin-like').forEach((btn) => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      toggleLikeProduct(id);
    };
  });

  // Event handlers for quick add
  grid.querySelectorAll('.btn-quick-add').forEach((btn) => {
    btn.onclick = () => {
      const totals = calculateCartTotals();
      const limit = state.safetyCap || 500000;
      if (totals.finalNetTotal > limit) {
        sound.playWarning();
        const deficit = totals.finalNetTotal - limit;
        showToast(`Batas anggaran terlampaui (+Rp ${formatRupiah(deficit)}). Tidak dapat menambah barang ke keranjang!`, 'error');
        if (typeof showOverbudgetModal === 'function') {
          showOverbudgetModal(totals.finalNetTotal, limit, deficit);
        }
        return;
      }
      const id = btn.getAttribute('data-id');
      const prod = all.find((p) => p.id === id);
      if (prod) {
        addItemToCart({
          name: prod.name,
          category: prod.category,
          unit: prod.unit,
          qty: 1,
          unitPrice: prod.price,
          discountType: 'none',
          d1: 0,
          d2: 0,
          image: prod.image,
          healthType: prod.healthType
        });
        sound.playClick();
      }
    };
  });

  // Stepper handlers
  grid.querySelectorAll('.btn-cart-inc').forEach((btn) => {
    btn.onclick = () => {
      const totals = calculateCartTotals();
      const limit = state.safetyCap || 500000;
      if (totals.finalNetTotal > limit) {
        sound.playWarning();
        const deficit = totals.finalNetTotal - limit;
        showToast(`Batas anggaran terlampaui (+Rp ${formatRupiah(deficit)}). Tidak dapat menambah kuantitas barang!`, 'error');
        if (typeof showOverbudgetModal === 'function') {
          showOverbudgetModal(totals.finalNetTotal, limit, deficit);
        }
        return;
      }
      const name = btn.getAttribute('data-name');
      const item = state.cart.find((i) => i.name === name);
      if (item) {
        item.qty += 1;
        saveCart();
      }
    };
  });

  grid.querySelectorAll('.btn-cart-dec').forEach((btn) => {
    btn.onclick = () => {
      const name = btn.getAttribute('data-name');
      const item = state.cart.find((i) => i.name === name);
      if (item) {
        if (item.qty > 1) {
          item.qty -= 1;
        } else {
          state.cart = state.cart.filter((i) => i.name !== name);
        }
        saveCart();
      }
    };
  });

  updateIcons();
}

function renderComboBundles() {
  const container = document.getElementById('bundle-cards-container');
  if (!container) return;

  container.innerHTML = COMBO_BUNDLES.map((b) => `
    <div class="bundle-card">
      <div class="bundle-card-img-wrap">
        <span class="bundle-chip-badge">Hemat ${b.discountPercent}%</span>
        <img src="${b.image}" alt="${b.name}" class="bundle-card-img" loading="lazy">
      </div>
      <div class="bundle-card-body">
        <h4 class="bundle-card-name">${b.name}</h4>
        <p class="bundle-card-sub">${b.subtitle}</p>
        <div class="bundle-price-row">
          <span class="bundle-final-price">Rp ${formatRupiah(b.bundlePrice)}</span>
          <span class="bundle-strikethrough-price">Rp ${formatRupiah(b.normalTotal)}</span>
        </div>
        <button type="button" class="btn-bundle-buy" data-bundle-id="${b.id}">
          <i data-lucide="package-plus"></i> <span>Beli Paket (-Rp ${formatRupiah(b.savedAmount)})</span>
        </button>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.btn-bundle-buy').forEach((btn) => {
    btn.onclick = () => {
      const bId = btn.getAttribute('data-bundle-id');
      const bundle = COMBO_BUNDLES.find((b) => b.id === bId);
      if (bundle) {
        bundle.items.forEach((item) => {
          addItemToCart({
            ...item,
            discountType: 'none',
            d1: 0,
            d2: 0,
            image: bundle.image
          });
        });
        sound.playSuccess();
        fireConfetti();
        showToast(`Paket ${bundle.name} berhasil dimasukkan ke anggaran! Hemat Rp ${formatRupiah(bundle.savedAmount)}`, 'success');
      }
    };
  });

  updateIcons();
}

// ==========================================================================
// 10. KERANJANG BELANJA (CART) & VOUCHER ENGINE
// ==========================================================================

function calculateCartTotals() {
  let subtotalNormal = 0;
  let totalDiskonPromo = 0;
  let totalItemsCount = 0;

  state.cart.forEach((item) => {
    const qty = Number(item.qty) || 1;
    const unitP = Number(item.unitPrice) || 0;
    const normalRow = qty * unitP;
    subtotalNormal += normalRow;
    totalItemsCount += qty;

    let finalUnitP = unitP;
    if (item.discountType === 'single') {
      finalUnitP = unitP * (1 - (Number(item.d1) || 0) / 100);
    } else if (item.discountType === 'tiered') {
      const step1 = unitP * (1 - (Number(item.d1) || 0) / 100);
      finalUnitP = step1 * (1 - (Number(item.d2) || 0) / 100);
    }
    const finalRow = qty * finalUnitP;
    totalDiskonPromo += (normalRow - finalRow);
  });

  const cartAfterPromo = subtotalNormal - totalDiskonPromo;

  // Apply Voucher Discount
  let voucherCut = 0;
  if (state.appliedVoucher && PROMO_VOUCHERS[state.appliedVoucher]) {
    const v = PROMO_VOUCHERS[state.appliedVoucher];
    if (cartAfterPromo >= (v.minSpend || 0)) {
      if (v.type === 'percent') {
        voucherCut = cartAfterPromo * (v.value / 100);
      } else if (v.type === 'fixed') {
        voucherCut = v.value;
      }
    }
  }

  const finalNetTotal = Math.max(0, cartAfterPromo - voucherCut);
  const totalSavedAll = totalDiskonPromo + voucherCut;

  return {
    subtotalNormal,
    totalDiskonPromo,
    voucherCut,
    finalNetTotal,
    totalSavedAll,
    totalItemsCount
  };
}

function clearAllCartItems() {
  if (!state.cart || state.cart.length === 0) return;
  const isEn = state.language === 'en';
  const confirmMsg = isEn
    ? 'Are you sure you want to remove all items from your cart?'
    : 'Apakah Anda yakin ingin menghapus semua barang dari keranjang belanja?';

  if (confirm(confirmMsg)) {
    state.cart = [];
    saveCart();
    sound.playClick();
    showToast(isEn ? 'Cart cleared successfully.' : 'Semua barang di keranjang belanja berhasil dihapus.', 'info');
  }
}

function renderCart() {
  const container = document.getElementById('cart-items-container');
  const emptyState = document.getElementById('cart-empty-state');
  const badge = document.getElementById('nav-cart-badge');
  const btnClear = document.getElementById('btn-clear-cart');
  if (!container) return;

  const totals = calculateCartTotals();

  if (badge) {
    badge.textContent = state.cart.length;
  }

  if (btnClear) {
    btnClear.classList.toggle('hidden', state.cart.length === 0);
  }

  if (state.cart.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    document.getElementById('summary-total-qty').textContent = '0 item';
    document.getElementById('summary-saved-amount').textContent = 'Rp 0';
    document.getElementById('summary-total-price').textContent = '0';
    document.getElementById('summary-voucher-row').classList.add('hidden');
    updateSafetyBanner();
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  container.innerHTML = state.cart.map((item, idx) => {
    const qty = Number(item.qty) || 1;
    const unitP = Number(item.unitPrice) || 0;
    const normalRow = qty * unitP;

    let finalUnitP = unitP;
    if (item.discountType === 'single') {
      finalUnitP = unitP * (1 - (Number(item.d1) || 0) / 100);
    } else if (item.discountType === 'tiered') {
      const step1 = unitP * (1 - (Number(item.d1) || 0) / 100);
      finalUnitP = step1 * (1 - (Number(item.d2) || 0) / 100);
    }
    const finalRow = qty * finalUnitP;
    const savedRow = normalRow - finalRow;
    const imgUrl = item.image || 'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=300&auto=format&fit=crop&q=80';

    return `
      <div class="cart-item-card glass-card" data-idx="${idx}">
        <div class="cart-item-thumb">
          <img src="${imgUrl}" alt="${item.name}">
        </div>
        <div class="cart-item-details">
          <div class="cart-item-header">
            <h4 class="cart-item-name">${item.name}</h4>
            <button type="button" class="btn-del-item" data-idx="${idx}" title="Hapus Item">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
          <span class="cart-item-unit-tag">@ Rp ${formatRupiah(item.unitPrice)} / ${item.unit}</span>

          <div class="cart-item-bottom-row">
            <div class="catalog-stepper" style="max-width: 110px;">
              <button type="button" class="catalog-stepper-btn btn-cart-row-dec" data-idx="${idx}">
                <i data-lucide="minus"></i>
              </button>
              <span class="catalog-stepper-qty">${item.qty} ${item.unit}</span>
              <button type="button" class="catalog-stepper-btn btn-cart-row-inc" data-idx="${idx}">
                <i data-lucide="plus"></i>
              </button>
            </div>
            <div class="cart-item-price-col">
              ${savedRow > 0 ? `<span class="cart-item-strikethrough">Rp ${formatRupiah(normalRow)}</span>` : ''}
              <strong class="cart-item-final-price">Rp ${formatRupiah(finalRow)}</strong>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Cart summary update
  document.getElementById('summary-total-qty').textContent = `${totals.totalItemsCount} item`;
  document.getElementById('summary-saved-amount').textContent = `Rp ${formatRupiah(totals.totalSavedAll)}`;
  document.getElementById('summary-total-price').textContent = formatRupiah(totals.finalNetTotal);

  const voucherRow = document.getElementById('summary-voucher-row');
  if (totals.voucherCut > 0) {
    voucherRow.classList.remove('hidden');
    document.getElementById('summary-voucher-amount').textContent = `- Rp ${formatRupiah(totals.voucherCut)}`;
  } else {
    voucherRow.classList.add('hidden');
  }

  // Update dynamic smart buying tips in cart
  renderCartSmartTips();

  // Attach event listeners
  container.querySelectorAll('.btn-del-item').forEach((btn) => {
    btn.onclick = () => {
      const idx = parseInt(btn.getAttribute('data-idx'), 10);
      state.cart.splice(idx, 1);
      sound.playClick();
      saveCart();
    };
  });

  container.querySelectorAll('.btn-cart-row-inc').forEach((btn) => {
    btn.onclick = () => {
      const totals = calculateCartTotals();
      const limit = state.safetyCap || 500000;
      if (totals.finalNetTotal > limit) {
        sound.playWarning();
        const deficit = totals.finalNetTotal - limit;
        showToast(`Batas anggaran terlampaui (+Rp ${formatRupiah(deficit)}). Tidak dapat menambah kuantitas barang!`, 'error');
        return;
      }
      const idx = parseInt(btn.getAttribute('data-idx'), 10);
      if (state.cart[idx]) {
        state.cart[idx].qty += 1;
        saveCart();
      }
    };
  });

  container.querySelectorAll('.btn-cart-row-dec').forEach((btn) => {
    btn.onclick = () => {
      const idx = parseInt(btn.getAttribute('data-idx'), 10);
      if (state.cart[idx]) {
        if (state.cart[idx].qty > 1) {
          state.cart[idx].qty -= 1;
        } else {
          state.cart.splice(idx, 1);
        }
        saveCart();
      }
    };
  });

  updateSafetyBanner();
  updateFloatingButtonsVisibility();
  updateIcons();
}

function isCartOverbudget() {
  const totals = calculateCartTotals();
  const limit = state.safetyCap || 500000;
  return totals.finalNetTotal > limit;
}

function addItemToCart(itemData) {
  const totals = calculateCartTotals();
  const limit = state.safetyCap || 500000;

  // STRICT OVERBUDGET LOCK: Jika belanjaan sudah melampaui limit anggaran, blokir penambahan barang baru
  if (totals.finalNetTotal > limit) {
    sound.playWarning();
    const deficit = totals.finalNetTotal - limit;
    showToast(`Batas anggaran terlampaui (Overbudget Rp ${formatRupiah(deficit)}). Hapus atau kurangi item sebelum menambah barang baru!`, 'error');
    if (typeof showOverbudgetModal === 'function') {
      showOverbudgetModal(totals.finalNetTotal, limit, deficit);
    }
    return false;
  }

  const existing = state.cart.find((i) => i.name.toLowerCase() === itemData.name.toLowerCase());
  if (existing) {
    existing.qty += (itemData.qty || 1);
  } else {
    state.cart.push({
      id: 'cart_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      ...itemData
    });
  }
  saveCart();
  return true;
}

function saveCart() {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(state.cart));
  renderCart();
  renderCatalog();
  renderSehatMeter();
  syncToFirebase();
}

function applyVoucherCode(code) {
  const clean = (code || '').trim().toUpperCase();
  if (!clean) return;

  if (clean === 'JOSHADMIN' && !isAdmin()) {
    alert(state.language === 'en' ? 'Voucher JOSHADMIN is exclusive for Administrator!' : 'Voucher JOSHADMIN hanya khusus untuk Administrator!');
    return;
  }

  if (PROMO_VOUCHERS[clean]) {
    state.appliedVoucher = clean;
    localStorage.setItem(STORAGE_KEYS.APPLIED_VOUCHER, clean);
    sound.playSuccess();
    fireConfetti();
    renderVoucherUI();
    renderCart();
    syncToFirebase();
  } else {
    sound.playWarning();
    alert(state.language === 'en' ? 'Invalid voucher code!' : 'Kode voucher tidak valid!');
  }
}

function removeAppliedVoucher() {
  state.appliedVoucher = null;
  localStorage.removeItem(STORAGE_KEYS.APPLIED_VOUCHER);
  sound.playClick();
  renderVoucherUI();
  renderCart();
  syncToFirebase();
}

function renderVoucherUI() {
  const appliedPill = document.getElementById('voucher-applied-pill');
  const activeBadge = document.getElementById('voucher-active-badge');
  const codeText = document.getElementById('voucher-applied-code');
  const descText = document.getElementById('voucher-applied-desc');

  if (state.appliedVoucher && PROMO_VOUCHERS[state.appliedVoucher]) {
    const v = PROMO_VOUCHERS[state.appliedVoucher];
    if (appliedPill) appliedPill.classList.remove('hidden');
    if (activeBadge) activeBadge.classList.remove('hidden');
    if (codeText) codeText.textContent = state.appliedVoucher;
    if (descText) descText.textContent = v.desc;
  } else {
    if (appliedPill) appliedPill.classList.add('hidden');
    if (activeBadge) activeBadge.classList.add('hidden');
  }
}

// ==========================================================================
// 11. STICKY BUDGET TRACKER & OVERBUDGET FIX & WARNING MODAL
// ==========================================================================

function updateSafetyBanner() {
  const totals = calculateCartTotals();
  const spent = totals.finalNetTotal;
  const limit = state.safetyCap || 500000;
  const percent = limit > 0 ? Math.round((spent / limit) * 100) : 0;
  const remaining = limit - spent;
  const isEn = state.language === 'en';

  const statusPill = document.getElementById('budget-status-pill');
  const statusText = document.getElementById('budget-status-text');
  const balanceSub = document.getElementById('lbl-balance-sub');
  const remainingBudget = document.getElementById('header-remaining-budget');
  const meterFill = document.getElementById('budget-meter-fill');
  const spentBudget = document.getElementById('header-spent-budget');
  const limitBudget = document.getElementById('header-limit-budget');
  const percentBudget = document.getElementById('header-percent-budget');

  if (spentBudget) spentBudget.textContent = `Rp ${formatRupiah(spent)}`;
  if (limitBudget) limitBudget.textContent = `Rp ${formatRupiah(limit)}`;
  if (percentBudget) percentBudget.textContent = `${percent}%`;

  if (spent > limit) {
    // F-05: BANNER MERAH TEGAS (>100% OVER BUDGET)
    const deficit = spent - limit;
    if (statusPill) {
      statusPill.className = 'safety-status-label badge-overbudget';
    }
    if (statusText) statusText.textContent = isEn ? 'OVER BUDGET!' : 'ANGGARAN LEBIH!';
    if (balanceSub) balanceSub.textContent = isEn ? 'Defisit:' : 'Defisit:';
    if (remainingBudget) {
      remainingBudget.textContent = `Rp ${formatRupiah(deficit)}`;
      remainingBudget.className = 'text-deficit';
    }
    if (meterFill) {
      meterFill.style.width = '100%';
      meterFill.style.background = 'linear-gradient(90deg, #f43f5e, #e11d48)';
    }

    // Trigger Overbudget Warning Modal
    if (!state.hasTriggeredOverbudgetModal && spent > limit && state.cart.length > 0) {
      showOverbudgetModal(spent, limit, deficit);
      state.hasTriggeredOverbudgetModal = true;
    }
  } else if (percent >= 90) {
    // F-05: KUNING WASPADA (>=90% KAPASITAS DOMPET)
    if (statusPill) {
      statusPill.className = 'safety-status-label badge-warning-yellow';
    }
    if (statusText) statusText.textContent = isEn ? 'WARNING (>=90%)' : 'WASPADA (>=90%)';
    if (balanceSub) balanceSub.textContent = isEn ? 'Remaining:' : 'Sisa Dompet:';
    if (remainingBudget) {
      remainingBudget.textContent = `Rp ${formatRupiah(remaining)}`;
      remainingBudget.className = 'text-warning-yellow';
    }
    if (meterFill) {
      meterFill.style.width = `${Math.min(100, percent)}%`;
      meterFill.style.background = 'linear-gradient(90deg, #f59e0b 0%, #d97706 100%)';
    }
    state.hasTriggeredOverbudgetModal = false;
  } else {
    // BUDGET SAFE STATE (<90% AMAN)
    if (statusPill) {
      statusPill.className = 'safety-status-label';
    }
    if (statusText) statusText.textContent = isEn ? 'BUDGET SAFE' : 'ANGGARAN AMAN';
    if (balanceSub) balanceSub.textContent = isEn ? 'Remaining:' : 'Sisa Dompet:';
    if (remainingBudget) {
      remainingBudget.textContent = `Rp ${formatRupiah(remaining)}`;
      remainingBudget.className = '';
    }
    if (meterFill) {
      meterFill.style.width = `${Math.min(100, percent)}%`;
      meterFill.style.background = 'linear-gradient(90deg, #10b981 0%, #3b82f6 100%)';
    }
    state.hasTriggeredOverbudgetModal = false;
  }
  const locEl = document.getElementById('header-store-location');
  if (locEl) {
    locEl.textContent = (state.currentLocation && state.currentLocation.name) ? state.currentLocation.name : 'Tentukan Lokasi Toko...';
  }
}

function showOverbudgetModal(spent, limit, deficit) {
  sound.playWarning();
  const modal = document.getElementById('overbudget-warning-modal');
  if (!modal) return;

  document.getElementById('warning-total-spent').textContent = `Rp ${formatRupiah(spent)}`;
  document.getElementById('warning-safety-limit').textContent = `Rp ${formatRupiah(limit)}`;
  document.getElementById('warning-deficit-amount').textContent = `Rp ${formatRupiah(deficit)}`;

  modal.classList.remove('hidden');
}

// ==========================================================================
// 12. SEHAT METER (NUTRI-SCORE & HEALTH ANALYSIS)
// ==========================================================================

function renderSehatMeter() {
  const allProds = getAllCatalogProducts();
  const items = state.cart;
  const isEn = state.language === 'en';

  let healthyCount = 0;
  let neutralCount = 0;
  let unhealthyCount = 0;

  if (items.length === 0) {
    healthyCount = 7;
    neutralCount = 2;
    unhealthyCount = 1;
  } else {
    items.forEach((item) => {
      const match = allProds.find((p) => p.name.toLowerCase() === item.name.toLowerCase());
      const hType = (match && match.healthType) || item.healthType || 'healthy';
      if (hType === 'healthy') healthyCount += item.qty;
      else if (hType === 'neutral') neutralCount += item.qty;
      else unhealthyCount += item.qty;
    });
  }

  const total = healthyCount + neutralCount + unhealthyCount || 1;
  const pFresh = Math.round((healthyCount / total) * 100);
  const pNeutral = Math.round((neutralCount / total) * 100);
  const pJunk = Math.max(0, 100 - pFresh - pNeutral);

  // Score formula
  const score = Math.max(20, Math.min(100, Math.round(pFresh * 0.9 + pNeutral * 0.5 - pJunk * 0.2 + 20)));

  const scoreVal = document.getElementById('sehat-score-val');
  const progressFill = document.getElementById('sehat-progress-fill');
  const gradeBadge = document.getElementById('sehat-grade-badge');
  const adviceText = document.getElementById('sehat-advice-text');

  if (scoreVal) scoreVal.textContent = `${score}%`;
  if (progressFill) progressFill.style.width = `${score}%`;

  document.getElementById('sehat-stat-fresh').textContent = `${pFresh}%`;
  document.getElementById('sehat-stat-neutral').textContent = `${pNeutral}%`;
  document.getElementById('sehat-stat-junk').textContent = `${pJunk}%`;

  if (score >= 80) {
    if (gradeBadge) {
      gradeBadge.textContent = isEn ? 'Grade A (Healthy)' : 'Grade A (Sehat)';
      gradeBadge.className = 'sehat-grade-badge grade-a';
    }
    if (adviceText) adviceText.textContent = isEn
      ? 'Great job! Your basket is predominantly filled with wholesome, fresh, and nutrient-dense ingredients. Keep up this healthy habit.'
      : 'Bagus sekali! Belanjaan Anda didominasi bahan segar kaya serat dan protein alami. Pertahankan komposisi ini.';
  } else if (score >= 65) {
    if (gradeBadge) {
      gradeBadge.textContent = isEn ? 'Grade B (Balanced)' : 'Grade B (Seimbang)';
      gradeBadge.className = 'sehat-grade-badge grade-b';
    }
    if (adviceText) adviceText.textContent = isEn
      ? 'Your cart is well balanced between staple foods and processed groceries. Consider adding green vegetables for optimal nutrition.'
      : 'Keranjang Anda cukup seimbang antara bahan pokok dan olahan. Tambahkan sayuran hijau untuk nutrisi maksimal.';
  } else {
    if (gradeBadge) {
      gradeBadge.textContent = isEn ? 'Grade C (Evaluation)' : 'Grade C (Evaluasi)';
      gradeBadge.className = 'sehat-grade-badge grade-c';
    }
    if (adviceText) adviceText.textContent = isEn
      ? 'Caution: High amount of instant and sugary snacks. Consider swapping processed items for fresh organic fruits.'
      : 'Perhatian: Komposisi belanjaan Anda tinggi makanan instan dan camilan manis. Pertimbangkan mengganti camilan dengan buah segar.';
  }
}

// ==========================================================================
// 13. REAL SMART BUYING TIPS ENGINE
// ==========================================================================

function renderCartSmartTips() {
  const list = document.getElementById('cart-smart-tips-list');
  if (!list) return;

  const allProds = getAllCatalogProducts();
  const tips = [];

  // Check specific categories in cart
  const hasRice = state.cart.some((i) => i.name.toLowerCase().includes('beras'));
  const hasOil = state.cart.some((i) => i.name.toLowerCase().includes('minyak'));
  const hasEgg = state.cart.some((i) => i.name.toLowerCase().includes('telur'));
  const hasMilk = state.cart.some((i) => i.name.toLowerCase().includes('susu'));
  const hasMeat = state.cart.some((i) => i.category === 'Daging & Seafood Segar');

  if (hasRice) {
    tips.push('<strong>Beras Premium:</strong> Pastikan butir beras utuh transparan tanpa aroma wangi buatan berlebihan.');
  }
  if (hasOil) {
    tips.push('<strong>Minyak Goreng:</strong> Kemasan pouch 2L umumnya 12% lebih murah dibanding botol dengan volume yang sama.');
  }
  if (hasEgg) {
    tips.push('<strong>Telur Ayam:</strong> Kocok perlahan di tangan; telur segar tidak bersuara dan terasa padat.');
  }
  if (hasMilk) {
    tips.push('<strong>Susu UHT:</strong> Ambil susu di rak paling belakang untuk tanggal kedaluwarsa paling panjang.');
  }
  if (hasMeat) {
    tips.push('<strong>Daging & Seafood:</strong> Masukkan daging ke troli di urutan terakhir sebelum ke kasir agar rantai dingin terjaga.');
  }

  // Default general tip if few items
  if (tips.length < 3) {
    tips.push('<strong>Trik Supermarket:</strong> Barang dengan harga paling menguntungkan pembeli biasanya ditaruh di rak bawah atau atas, bukan setinggi mata.');
    tips.push('<strong>Diskon Bertingkat:</strong> Diskon 50%+20% berarti Anda tetap membayar 40% (bukan diskon 70%).');
  }

  list.innerHTML = tips.slice(0, 3).map((t) => `<li>${t}</li>`).join('');
}

// ==========================================================================
// 14. BARCODE SCANNER (CAMERA & IMAGE UPLOAD & POPULAR TEST CODES)
// ==========================================================================

function openBarcodeScannerModal() {
  sound.playClick();
  const modal = document.getElementById('barcode-scanner-modal');
  if (!modal) return;
  modal.classList.remove('hidden');

  const statusEl = document.getElementById('scanner-camera-status');
  if (statusEl) statusEl.textContent = 'Menghubungkan Kamera Barcode...';

  // Use ZXing BrowserMultiFormatReader for real-time supermarket barcode scanning
  if (window.ZXing && window.ZXing.BrowserMultiFormatReader) {
    try {
      if (!state.zxingReader) {
        state.zxingReader = new window.ZXing.BrowserMultiFormatReader();
      }
      state.zxingReader.decodeFromVideoDevice(null, 'barcode-video', (result, err) => {
        if (result && result.getText()) {
          const code = result.getText();
          handleBarcodeDetected(code);
        }
      }).then(() => {
        if (statusEl) statusEl.textContent = 'Kamera Aktif: Arahkan ke Barcode Kemasan Supermarket...';
      }).catch((err) => {
        console.warn('ZXing video start error:', err);
        fallbackCameraStream(statusEl);
      });
    } catch (e) {
      fallbackCameraStream(statusEl);
    }
  } else {
    fallbackCameraStream(statusEl);
  }
}

function fallbackCameraStream(statusEl) {
  const video = document.getElementById('barcode-video');
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then((stream) => {
        state.stream = stream;
        if (video) {
          video.srcObject = stream;
          video.play();
        }
        if (statusEl) statusEl.textContent = 'Kamera Aktif: Arahkan barcode ke kotak pemindai...';
      })
      .catch((_) => {
        if (statusEl) statusEl.textContent = 'Kamera tidak tersedia. Gunakan tombol uji cepat atau unggah foto di bawah.';
      });
  } else {
    if (statusEl) statusEl.textContent = 'Gunakan tombol barcode instan atau upload foto di bawah.';
  }
}

function closeBarcodeScannerModal() {
  const modal = document.getElementById('barcode-scanner-modal');
  if (modal) modal.classList.add('hidden');

  if (state.zxingReader) {
    try {
      state.zxingReader.reset();
    } catch (e) { }
  }

  if (state.stream) {
    state.stream.getTracks().forEach((track) => track.stop());
    state.stream = null;
  }
}

function handleBarcodeDetected(barcode) {
  if (!barcode) return;
  const cleanCode = barcode.toString().trim();
  sound.playScanBeep();
  closeBarcodeScannerModal();

  const all = getAllCatalogProducts();
  const found = all.find((p) => p.barcode === cleanCode);

  if (found) {
    addItemToCart({
      name: found.name,
      category: found.category,
      unit: found.unit,
      qty: 1,
      unitPrice: found.price,
      discountType: 'none',
      d1: 0,
      d2: 0,
      image: found.image,
      healthType: found.healthType
    });
    fireConfetti();
    showToast(`Barcode [${cleanCode}] Terdeteksi: ${found.name} (Rp ${formatRupiah(found.price)}) dimasukkan ke keranjang!`, 'success');
  } else {
    sound.playWarning();
    showToast(`Barcode [${cleanCode}] belum ada di katalog. Membuka form tambah produk...`, 'info');

    // Automatically open "Tambah Produk Baru" modal and pre-fill the scanned barcode
    openAddItemModal();
    const barcodeInput = document.getElementById('item-barcode-input');
    const nameInput = document.getElementById('item-name-input');
    if (barcodeInput) barcodeInput.value = cleanCode;
    if (nameInput) {
      nameInput.value = '';
      nameInput.focus();
    }
  }
}

// ==========================================================================
// 15. RIWAYAT BELANJA (HISTORY) & CHECKOUT
// ==========================================================================

function openCheckoutModal() {
  if (state.cart.length === 0) {
    alert(state.language === 'en' ? 'Your cart is empty!' : 'Keranjang belanja masih kosong!');
    return;
  }
  sound.playClick();
  const modal = document.getElementById('checkout-modal');
  if (!modal) return;

  const totals = calculateCartTotals();
  const dateStr = (state.currentLocation && state.currentLocation.shoppingDate)
    ? state.currentLocation.shoppingDate
    : new Date().toLocaleDateString(state.language === 'en' ? 'en-US' : 'id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });

  const locName = (state.currentLocation && state.currentLocation.name)
    ? state.currentLocation.name
    : 'Lotte Mart Grocery - Puri Indah';

  const modalTitle = document.getElementById('receipt-modal-title');
  if (modalTitle) modalTitle.textContent = locName.toUpperCase();

  const storeEl = document.getElementById('receipt-modal-store');
  if (storeEl) storeEl.textContent = locName;

  const dateEl = document.getElementById('receipt-date-time');
  if (dateEl) dateEl.textContent = dateStr;

  const userEl = document.getElementById('receipt-session-user');
  if (userEl) userEl.textContent = (state.user && state.user.displayName) ? state.user.displayName : 'Josh (Mandiri)';

  const barcodeEl = document.getElementById('receipt-barcode-code');
  if (barcodeEl) barcodeEl.textContent = `GROCERYX-TRX-${Date.now().toString().slice(-8)}`;

  document.getElementById('receipt-val-limit').textContent = `Rp ${formatRupiah(state.safetyCap)}`;
  document.getElementById('receipt-val-normal').textContent = `Rp ${formatRupiah(totals.subtotalNormal)}`;
  document.getElementById('receipt-val-saved').textContent = `- Rp ${formatRupiah(totals.totalSavedAll)}`;
  document.getElementById('receipt-val-final').textContent = `Rp ${formatRupiah(totals.finalNetTotal)}`;

  const verdictBox = document.getElementById('receipt-verdict-box');
  const verdictTitle = document.getElementById('receipt-verdict-title');
  const verdictDesc = document.getElementById('receipt-verdict-desc');
  const verdictIcon = document.getElementById('verdict-icon-symbol');

  if (totals.finalNetTotal > state.safetyCap) {
    verdictBox.className = 'receipt-verdict-box verdict-warning';
    verdictTitle.textContent = 'Perhatian! Melebihi Anggaran';
    verdictDesc.textContent = `Total belanja melebihi batas target bulanan Anda sebesar Rp ${formatRupiah(totals.finalNetTotal - state.safetyCap)}.`;
    if (verdictIcon) verdictIcon.setAttribute('data-lucide', 'alert-triangle');
  } else {
    verdictBox.className = 'receipt-verdict-box verdict-safe';
    verdictTitle.textContent = 'Hebat! Belanja Terkendali';
    verdictDesc.textContent = 'Pengeluaran belanjaan Anda masih berada di bawah batas keamanan anggaran.';
    if (verdictIcon) verdictIcon.setAttribute('data-lucide', 'check-circle');
  }

  // Render receipt items with discount tags
  const table = document.getElementById('receipt-items-table');
  table.innerHTML = state.cart.map((item) => {
    const qty = Number(item.qty) || 1;
    const unitP = Number(item.unitPrice) || 0;
    let finalUnitP = unitP;
    let discBadge = '';
    if (item.discountType === 'single') {
      finalUnitP = unitP * (1 - (Number(item.d1) || 0) / 100);
      discBadge = ` <span class="receipt-item-disc-tag">-${item.d1}%</span>`;
    } else if (item.discountType === 'tiered') {
      const step1 = unitP * (1 - (Number(item.d1) || 0) / 100);
      finalUnitP = step1 * (1 - (Number(item.d2) || 0) / 100);
      discBadge = ` <span class="receipt-item-disc-tag">-${item.d1}%+${item.d2}%</span>`;
    }
    const finalRow = qty * finalUnitP;

    return `
      <div class="receipt-table-row">
        <div class="receipt-item-info">
          <strong>${item.name}${discBadge}</strong>
          <span>${qty} ${item.unit || 'pcs'} x Rp ${formatRupiah(unitP)}</span>
        </div>
        <strong class="receipt-item-subtotal">Rp ${formatRupiah(finalRow)}</strong>
      </div>
    `;
  }).join('');

  updateIcons();
  modal.classList.remove('hidden');
}

function confirmCheckoutAndSave() {
  const totals = calculateCartTotals();
  const locName = (state.currentLocation && state.currentLocation.name) ? state.currentLocation.name : 'Lotte Mart Grocery - Puri Indah';
  const defaultDateStr = new Date().toLocaleDateString(state.language === 'en' ? 'en-US' : 'id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const session = {
    id: 'hist_' + Date.now(),
    date: (state.currentLocation && state.currentLocation.shoppingDate) ? state.currentLocation.shoppingDate : defaultDateStr,
    formattedDate: defaultDateStr,
    timestamp: Date.now(),
    storeName: locName,
    storeLocation: locName,
    storeCoords: (state.currentLocation && state.currentLocation.coords) ? state.currentLocation.coords : null,
    note: locName,
    safetyCap: state.safetyCap,
    totalSpent: totals.finalNetTotal,
    totalSaved: totals.totalSavedAll,
    itemCount: totals.totalItemsCount,
    items: [...state.cart]
  };

  state.history.unshift(session);
  localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(state.history));

  // Clear current cart and applied voucher
  state.cart = [];
  state.appliedVoucher = null;
  localStorage.removeItem(STORAGE_KEYS.CART);
  localStorage.removeItem(STORAGE_KEYS.APPLIED_VOUCHER);
  syncToFirebase(true);

  sound.playSuccess();
  fireConfetti();
  document.getElementById('checkout-modal').classList.add('hidden');

  renderCart();
  renderHistory();
  renderAccountStats();
  switchTab('view-history');
  showToast(`Sesi belanja di ${locName} tersimpan rapi ke database riwayat!`, 'success');
}

function renderHistory() {
  const container = document.getElementById('history-sessions-container');
  const emptyState = document.getElementById('history-empty-state');
  if (!container) return;

  const currentTotals = calculateCartTotals();
  document.getElementById('hist-current-total').textContent = `Rp ${formatRupiah(currentTotals.finalNetTotal)}`;

  const prevSpent = state.history.length > 0 ? state.history[0].totalSpent : 0;
  document.getElementById('hist-prev-total').textContent = `Rp ${formatRupiah(prevSpent)}`;

  if (state.history.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  container.innerHTML = state.history.map((h, idx) => `
    <div class="history-card glass-card" data-hist-idx="${idx}">
      <div class="history-card-header">
        <div class="history-card-info">
          <div class="history-store-row">
            <i data-lucide="map-pin" class="store-icon text-primary"></i>
            <h4 class="history-store-title">${h.storeLocation || h.storeName || h.note || 'Lotte Mart Grocery - Puri Indah'}</h4>
          </div>
          <div class="history-meta-sub">
            <span class="meta-item"><i data-lucide="calendar"></i> ${h.formattedDate || h.date}</span>
            <span class="meta-dot">&bull;</span>
            <span class="meta-item"><i data-lucide="shopping-bag"></i> ${h.itemCount || (h.items ? h.items.length : 1)} Item</span>
          </div>
        </div>
        <div class="history-price-badge">
          <span class="history-badge-curr">Rp</span>
          <strong class="history-badge-val">${formatRupiah(h.totalSpent)}</strong>
        </div>
      </div>
      <div class="history-card-footer">
        <button type="button" class="btn-history-view btn-view-receipt" data-hist-idx="${idx}">
          <i data-lucide="receipt"></i> <span>Lihat Rincian Struk</span>
        </button>
        ${h.totalSaved > 0 ? `
          <span class="history-saved-badge">
            <i data-lucide="tag"></i> Hemat Rp ${formatRupiah(h.totalSaved)}
          </span>
        ` : ''}
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.btn-view-receipt').forEach((btn) => {
    btn.onclick = () => {
      const idx = parseInt(btn.getAttribute('data-hist-idx'), 10);
      openHistoryDetailModal(idx);
    };
  });

  renderAccountStats();
  updateIcons();
}

function openHistoryDetailModal(idx) {
  const h = state.history[idx];
  if (!h) return;
  sound.playClick();

  const modal = document.getElementById('history-detail-modal');
  const content = document.getElementById('history-detail-content');

  content.innerHTML = `
    <div class="receipt-header">
      <div class="receipt-brand-logo"><i data-lucide="shopping-cart"></i></div>
      <h2>${(h.storeLocation || h.storeName || 'GROCERYX SUPERMARKET').toUpperCase()}</h2>
      <p class="receipt-sub-loc">STRUK &amp; DATABASE PEMBANDING RESMI</p>
      <div class="receipt-dashed-line"></div>
      <div class="receipt-meta-info">
        <div class="receipt-meta-row">
          <span>Tanggal:</span>
          <strong>${h.formattedDate || h.date}</strong>
        </div>
        <div class="receipt-meta-row">
          <span>Lokasi:</span>
          <strong><i data-lucide="map-pin" class="text-primary" style="width:13px;height:13px;display:inline-block;vertical-align:middle;margin-right:2px;"></i> ${h.storeLocation || h.storeName || h.note || 'Supermarket'}</strong>
        </div>
        <div class="receipt-meta-row">
          <span>Status Sesi:</span>
          <strong class="text-emerald">Tersimpan di Database</strong>
        </div>
      </div>
      <div class="receipt-dashed-line"></div>
    </div>
    <div class="receipt-items-table">
      ${(h.items || []).map((it) => {
        const qty = Number(it.qty) || 1;
        const unitP = Number(it.unitPrice) || 0;
        let finalUnitP = unitP;
        let discBadge = '';
        if (it.discountType === 'single') {
          finalUnitP = unitP * (1 - (Number(it.d1) || 0) / 100);
          discBadge = ` <span class="receipt-item-disc-tag">-${it.d1}%</span>`;
        } else if (it.discountType === 'tiered') {
          const step1 = unitP * (1 - (Number(it.d1) || 0) / 100);
          finalUnitP = step1 * (1 - (Number(it.d2) || 0) / 100);
          discBadge = ` <span class="receipt-item-disc-tag">-${it.d1}%+${it.d2}%</span>`;
        }
        const rowTotal = qty * finalUnitP;
        return `
          <div class="receipt-table-row">
            <div class="receipt-item-info">
              <strong>${it.name}${discBadge}</strong>
              <span>${qty} ${it.unit || 'pcs'} x Rp ${formatRupiah(unitP)}</span>
            </div>
            <strong class="receipt-item-subtotal">Rp ${formatRupiah(rowTotal)}</strong>
          </div>
        `;
      }).join('')}
    </div>
    <div class="receipt-dashed-line"></div>
    <div class="receipt-totals-section">
      <div class="receipt-row">
        <span>Batas Anggaran:</span>
        <span>Rp ${formatRupiah(h.safetyCap || 500000)}</span>
      </div>
      ${h.totalSaved > 0 ? `
        <div class="receipt-row text-emerald">
          <span>Total Dihemat:</span>
          <strong>- Rp ${formatRupiah(h.totalSaved)}</strong>
        </div>
      ` : ''}
      <div class="receipt-row grand-total">
        <span>TOTAL BELANJA:</span>
        <strong class="receipt-grand-amount">Rp ${formatRupiah(h.totalSpent)}</strong>
      </div>
    </div>
    <div class="receipt-barcode-wrap">
      <div class="receipt-barcode-bars"></div>
      <span class="receipt-barcode-num">${h.id || 'GROCERYX-TRX'}</span>
      <p class="receipt-thank-you">*** DOKUMEN HISTORI RESMI GROCERYX ***</p>
    </div>
  `;

  document.getElementById('btn-copy-history-to-cart').onclick = () => {
    (h.items || []).forEach((it) => addItemToCart(it));
    sound.playSuccess();
    modal.classList.add('hidden');
    switchTab('view-cart');
    alert(state.language === 'en' ? 'All items copied to active cart!' : 'Semua item dari struk ini berhasil disalin ke keranjang aktif!');
  };

  updateIcons();
  modal.classList.remove('hidden');
}

function renderAccountStats() {
  const totalSpentAll = state.history.reduce((sum, h) => sum + (h.totalSpent || 0), 0);
  const totalSavedAll = state.history.reduce((sum, h) => sum + (h.totalSaved || 0), 0);
  const count = state.history.length;
  const avg = count > 0 ? Math.round(totalSpentAll / count) : 0;

  const statSpent = document.getElementById('account-stat-spent');
  const statSaved = document.getElementById('account-stat-saved');
  const statReceipts = document.getElementById('account-stat-receipts');
  const statAvg = document.getElementById('account-stat-avg');

  if (statSpent) statSpent.textContent = `Rp ${formatRupiah(totalSpentAll)}`;
  if (statSaved) statSaved.textContent = `Rp ${formatRupiah(totalSavedAll)}`;
  if (statReceipts) statReceipts.textContent = `${count} Transaksi`;
  if (statAvg) statAvg.textContent = `Rp ${formatRupiah(avg)}`;

  // Category proportion bars
  const catMap = {};
  state.history.forEach((h) => {
    (h.items || []).forEach((it) => {
      const c = it.category || 'Lainnya';
      catMap[c] = (catMap[c] || 0) + (it.qty * it.unitPrice);
    });
  });

  const catBars = document.getElementById('account-category-bars');
  if (!catBars) return;

  const entries = Object.entries(catMap);
  if (entries.length === 0) {
    catBars.innerHTML = '<span class="text-hint">Belum ada data transaksi yang tercatat.</span>';
    return;
  }

  const CAT_PALETTE = {
    'Bahan Pokok': '#2563eb',
    'Sayuran': '#10b981',
    'Buah & Sayur': '#10b981',
    'Daging & Seafood': '#ef4444',
    'Bumbu & Masak': '#f59e0b',
    'Minyak & Saus': '#f97316',
    'Susu & Olahan': '#06b6d4',
    'Minuman': '#8b5cf6',
    'Snack & Biskuit': '#ec4899',
    'Lainnya': '#64748b'
  };
  const DEFAULT_COLORS = ['#2563eb', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4'];

  entries.sort((a, b) => b[1] - a[1]);
  catBars.innerHTML = entries.slice(0, 5).map(([cat, total], idx) => {
    const p = totalSpentAll > 0 ? Math.round((total / totalSpentAll) * 100) : 0;
    const color = CAT_PALETTE[cat] || DEFAULT_COLORS[idx % DEFAULT_COLORS.length];
    return `
      <div class="cat-bar-item">
        <div class="cat-bar-header">
          <div class="cat-name-wrap">
            <span class="cat-color-dot" style="background: ${color};"></span>
            <span class="cat-name">${cat}</span>
          </div>
          <div class="cat-val-wrap">
            <strong class="cat-amount">Rp ${formatRupiah(total)}</strong>
            <span class="cat-percent-badge">${p}%</span>
          </div>
        </div>
        <div class="cat-bar-track">
          <div class="cat-bar-fill" style="width: ${p}%; background: ${color};"></div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================================================
// 17. TAB SWITCHING ENGINE
// ==========================================================================

function switchTab(targetViewId) {
  sound.playClick();
  setTimeout(updateJumpToCheckoutVisibility, 60);

  // ROUTE PROTECTION: Require login for private tabs (Account & History)
  const protectedTabs = ['view-account', 'view-history'];
  if (protectedTabs.includes(targetViewId) && (!state.currentUser || localStorage.getItem('sg_user_logged_out') === 'true')) {
    const authModal = document.getElementById('auth-modal');
    if (authModal) authModal.classList.remove('hidden');
    showToast(state.language === 'en' ? 'Please sign in to access this page.' : 'Silakan login dengan Google terlebih dahulu untuk mengakses menu ini.', 'warning');
    return;
  }

  state.activeTab = targetViewId;

  document.querySelectorAll('.app-view').forEach((view) => {
    view.classList.toggle('active', view.id === targetViewId);
    view.classList.toggle('hidden', view.id !== targetViewId);
  });

  document.querySelectorAll('.nav-tab-btn[data-target]').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-target') === targetViewId);
  });

  if (targetViewId === 'view-shop') {
    renderCatalog();
  } else if (targetViewId === 'view-cart') {
    renderCart();
  } else if (targetViewId === 'view-history') {
    renderHistory();
  } else if (targetViewId === 'view-account') {
    renderAccountStats();
    renderSehatMeter();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateFloatingButtonsVisibility();
  updateIcons();
}

// ==========================================================================
// 17B. STORE LOCATION & GEOLOCATION METADATA ENGINE
// ==========================================================================

function openStoreLocationModal() {
  sound.playClick();
  const modal = document.getElementById('store-location-modal');
  if (!modal) return;
  modal.classList.remove('hidden');

  const inputName = document.getElementById('input-store-name');
  const inputDate = document.getElementById('input-store-date');
  if (inputName) {
    inputName.value = (state.currentLocation && state.currentLocation.name) ? state.currentLocation.name : 'Lotte Mart Grocery - Puri Indah';
    inputName.focus();
  }
  if (inputDate) {
    const todayStr = new Date().toISOString().split('T')[0];
    inputDate.value = (state.currentLocation && state.currentLocation.shoppingDate) ? state.currentLocation.shoppingDate : todayStr;
  }

  const statusTitle = document.getElementById('gps-status-title');
  const statusDetail = document.getElementById('gps-status-detail');
  if (statusTitle) statusTitle.textContent = 'Deteksi Otomatis Lokasi GPS';
  if (statusDetail) {
    if (state.currentLocation && state.currentLocation.coords) {
      statusDetail.textContent = `Koordinat tersimpan: ${state.currentLocation.coords.lat.toFixed(4)}, ${state.currentLocation.coords.lng.toFixed(4)}`;
    } else {
      statusDetail.textContent = 'Klik tombol di bawah untuk meminta izin GPS perangkat...';
    }
  }
}

function closeStoreLocationModal() {
  const modal = document.getElementById('store-location-modal');
  if (modal) modal.classList.add('hidden');
}

function initStoreLocationModule() {
  const btnCloseLoc = document.getElementById('btn-close-location-modal');
  if (btnCloseLoc) btnCloseLoc.onclick = closeStoreLocationModal;

  const btnSkipLoc = document.getElementById('btn-skip-location');
  if (btnSkipLoc) {
    btnSkipLoc.onclick = () => {
      closeStoreLocationModal();
      showToast('Menggunakan lokasi: ' + ((state.currentLocation && state.currentLocation.name) || 'Lotte Mart Grocery - Puri Indah'), 'info');
    };
  }

  // Header location strip & change button
  const locStrip = document.getElementById('budget-location-strip');
  const btnChangeLoc = document.getElementById('btn-change-store-location');
  if (locStrip) locStrip.onclick = openStoreLocationModal;
  if (btnChangeLoc) {
    btnChangeLoc.onclick = (e) => {
      e.stopPropagation();
      openStoreLocationModal();
    };
  }

  // GPS Request button
  const btnRequestGps = document.getElementById('btn-request-gps');
  if (btnRequestGps) {
    btnRequestGps.onclick = () => {
      sound.playClick();
      const statusTitle = document.getElementById('gps-status-title');
      const statusDetail = document.getElementById('gps-status-detail');
      const inputName = document.getElementById('input-store-name');

      if (!navigator.geolocation) {
        if (statusDetail) statusDetail.textContent = 'Browser ini tidak mendukung Geolocation GPS.';
        return;
      }

      if (statusTitle) statusTitle.textContent = 'Meminta Izin Lokasi...';
      if (statusDetail) statusDetail.textContent = 'Mohon izinkan akses lokasi pada browser/perangkat Anda...';

      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          state.detectedCoords = { lat, lng };

          if (statusTitle) statusTitle.textContent = 'GPS Berhasil Dideteksi!';
          if (statusDetail) statusDetail.textContent = `Koordinat: ${lat.toFixed(5)}, ${lng.toFixed(5)}`;
          sound.playSuccess();

          // Attempt reverse geocoding via OpenStreetMap Nominatim
          try {
            if (statusDetail) statusDetail.textContent = 'Mencari nama supermarket/wilayah terdekat...';
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`);
            if (res.ok) {
              const data = await res.json();
              const addr = data.address || {};
              const place = addr.supermarket || addr.shop || addr.mall || addr.commercial || addr.suburb || addr.neighbourhood || addr.city;
              if (place && inputName) {
                inputName.value = place + (addr.suburb ? ` - ${addr.suburb}` : '');
              }
              if (statusDetail) statusDetail.textContent = `Area: ${data.display_name.split(',').slice(0, 3).join(', ')}`;
            }
          } catch (e) {
            console.log('Reverse geocoding error or offline:', e);
            if (statusDetail) statusDetail.textContent = `GPS terkunci (${lat.toFixed(4)}, ${lng.toFixed(4)}). Silakan ketik nama toko di bawah.`;
          }
        },
        (err) => {
          sound.playWarning();
          if (statusTitle) statusTitle.textContent = 'Izin Akses Lokasi Ditolak';
          if (statusDetail) statusDetail.textContent = 'Silakan pilih rekomendasi toko atau ketik manual nama supermarket Anda.';
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    };
  }

  // Quick store chip buttons
  document.querySelectorAll('.btn-store-chip').forEach((btn) => {
    btn.onclick = () => {
      sound.playClick();
      const storeName = btn.getAttribute('data-store');
      const inputName = document.getElementById('input-store-name');
      if (inputName && storeName) {
        inputName.value = storeName;
      }
      document.querySelectorAll('.btn-store-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    };
  });

  // Location form submit
  const formLocation = document.getElementById('form-store-location');
  if (formLocation) {
    formLocation.onsubmit = (e) => {
      e.preventDefault();
      const inputName = document.getElementById('input-store-name');
      const inputDate = document.getElementById('input-store-date');
      const name = (inputName && inputName.value.trim()) || 'Lotte Mart Grocery - Puri Indah';
      const shoppingDate = (inputDate && inputDate.value) || new Date().toISOString().split('T')[0];

      state.currentLocation = {
        name,
        shoppingDate,
        coords: state.detectedCoords || (state.currentLocation ? state.currentLocation.coords : null),
        updatedAt: Date.now()
      };

      saveStateToLocalStorage();
      updateSafetyBanner();
      closeStoreLocationModal();
      sound.playSuccess();
      showToast(`Lokasi belanja aktif: ${name}`, 'success');
      syncToFirebase(true);
    };
  }
}

// ==========================================================================
// 18. INITIALIZATION & GLOBAL EVENT HANDLERS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Load saved state
  try {
    const rawCart = localStorage.getItem(STORAGE_KEYS.CART);
    state.cart = rawCart ? JSON.parse(rawCart) : [];
  } catch (_) { state.cart = []; }

  try {
    const rawHist = localStorage.getItem(STORAGE_KEYS.HISTORY);
    state.history = rawHist ? JSON.parse(rawHist) : [];
  } catch (_) { state.history = []; }

  try {
    const rawCap = localStorage.getItem(STORAGE_KEYS.SAFETY_CAP);
    state.safetyCap = rawCap ? parseInt(rawCap, 10) : 500000;
  } catch (_) { state.safetyCap = 500000; }

  try {
    const rawPinned = localStorage.getItem(STORAGE_KEYS.PINNED_PRODUCTS);
    state.pinnedProducts = rawPinned ? JSON.parse(rawPinned) : [];
  } catch (_) { state.pinnedProducts = []; }

  try {
    const rawCustom = localStorage.getItem(STORAGE_KEYS.CUSTOM_PRODUCTS);
    state.customProducts = rawCustom ? JSON.parse(rawCustom) : [];
  } catch (_) { state.customProducts = []; }

  try {
    state.appliedVoucher = localStorage.getItem(STORAGE_KEYS.APPLIED_VOUCHER) || null;
  } catch (_) { state.appliedVoucher = null; }

  try {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'liquid-bright';
    setTheme(savedTheme);
  } catch (_) { }

  try {
    const savedLang = localStorage.getItem(STORAGE_KEYS.LANGUAGE) || 'id';
    state.language = savedLang;
  } catch (_) { }

  try {
    const savedSound = localStorage.getItem(STORAGE_KEYS.SOUND);
    state.soundEnabled = savedSound !== null ? savedSound === 'true' : true;
  } catch (_) { state.soundEnabled = true; }

  loadUsersAndSession();
  renderCategoryPills();
  renderComboBundles();
  renderCatalog();
  renderCart();
  renderHistory();
  renderVoucherUI();
  renderSehatMeter();
  updateSafetyBanner();
  initStoreLocationModule();
  initJumpToCheckoutButton();

  // Bottom Navigation Dock Click Handlers
  document.querySelectorAll('.nav-tab-btn[data-target]').forEach((btn) => {
    btn.onclick = () => {
      const target = btn.getAttribute('data-target');
      switchTab(target);
    };
  });

  // Center Scan Barcode Button
  const btnNavScan = document.getElementById('nav-btn-scan');
  if (btnNavScan) {
    btnNavScan.onclick = (e) => {
      e.preventDefault();
      sound.playClick();
      openBarcodeScannerModal();
    };
  }

  // Interactive Horizontal Carousel Engine (IDLIX / Netflix Dynamic Edge Fade & Smooth Gestures)
  function makeHorizontalCarouselInteractive({ container, btnPrev, btnNext, step = 260 }) {
    if (!container) return () => {};

    function updateScrollState() {
      const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth);
      const current = container.scrollLeft;

      container.classList.remove('scroll-fade-both', 'scroll-fade-right', 'scroll-fade-left', 'scroll-fade-none');

      if (maxScroll <= 6) {
        container.classList.add('scroll-fade-none');
        if (btnPrev) btnPrev.classList.add('is-hidden');
        if (btnNext) btnNext.classList.add('is-hidden');
        return;
      }

      const atStart = current <= 6;
      const atEnd = current >= maxScroll - 6;

      if (atStart) {
        container.classList.add('scroll-fade-right');
        if (btnPrev) btnPrev.classList.add('is-hidden');
        if (btnNext) btnNext.classList.remove('is-hidden');
      } else if (atEnd) {
        container.classList.add('scroll-fade-left');
        if (btnPrev) btnPrev.classList.remove('is-hidden');
        if (btnNext) btnNext.classList.add('is-hidden');
      } else {
        container.classList.add('scroll-fade-both');
        if (btnPrev) btnPrev.classList.remove('is-hidden');
        if (btnNext) btnNext.classList.remove('is-hidden');
      }
    }

    // Floating navigation arrows with smooth scrolling
    if (btnPrev) {
      btnPrev.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        sound.playClick();
        container.scrollBy({ left: -step, behavior: 'smooth' });
      };
    }
    if (btnNext) {
      btnNext.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        sound.playClick();
        container.scrollBy({ left: step, behavior: 'smooth' });
      };
    }

    container.addEventListener('scroll', updateScrollState, { passive: true });

    // Smooth Mouse / Gesture Dragging
    let isDown = false;
    let startX = 0;
    let scrollLeftStart = 0;
    let hasDragged = false;

    container.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      isDown = true;
      hasDragged = false;
      startX = e.pageX - container.offsetLeft;
      scrollLeftStart = container.scrollLeft;
      container.style.scrollBehavior = 'auto';
      container.style.scrollSnapType = 'none';
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX);
      if (Math.abs(walk) > 4) {
        hasDragged = true;
        container.style.cursor = 'grabbing';
        container.scrollLeft = scrollLeftStart - walk;
      }
    });

    const stopDrag = () => {
      if (!isDown) return;
      isDown = false;
      container.style.cursor = '';
      container.style.scrollBehavior = 'smooth';
      container.style.scrollSnapType = 'x mandatory';
      setTimeout(() => {
        hasDragged = false;
      }, 60);
    };

    window.addEventListener('mouseup', stopDrag);

    // Suppress child click if user performed drag gesture
    container.addEventListener('click', (e) => {
      if (hasDragged) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);

    // Initial state trigger
    requestAnimationFrame(updateScrollState);
    window.addEventListener('resize', updateScrollState);

    // Observe changes inside container to re-check scroll boundaries
    if ('MutationObserver' in window) {
      const observer = new MutationObserver(() => {
        requestAnimationFrame(updateScrollState);
      });
      observer.observe(container, { childList: true, subtree: true });
    }

    return updateScrollState;
  }

  // Category Carousel Slider & Touch Gestures (IDLIX / Netflix Fade & Gesture Style)
  const catContainer = document.getElementById('category-filter-container');
  const btnCatPrev = document.getElementById('btn-cat-prev');
  const btnCatNext = document.getElementById('btn-cat-next');
  makeHorizontalCarouselInteractive({
    container: catContainer,
    btnPrev: btnCatPrev,
    btnNext: btnCatNext,
    step: 220
  });

  // Shop Search Input
  const searchInput = document.getElementById('shop-search-input');
  const searchClear = document.getElementById('shop-search-clear');
  if (searchInput) {
    searchInput.oninput = (e) => {
      state.searchQuery = e.target.value.trim();
      if (searchClear) searchClear.classList.toggle('hidden', !state.searchQuery);
      renderCatalog();
    };
  }
  if (searchClear) {
    searchClear.onclick = () => {
      searchInput.value = '';
      state.searchQuery = '';
      searchClear.classList.add('hidden');
      renderCatalog();
    };
  }

  // Barcode Scanner Triggers
  const btnCloseScanner = document.getElementById('btn-close-scanner-modal');
  if (btnCloseScanner) btnCloseScanner.onclick = closeBarcodeScannerModal;

  // Barcode popular test buttons
  document.querySelectorAll('.btn-test-barcode').forEach((btn) => {
    btn.onclick = () => {
      const code = btn.getAttribute('data-code');
      handleBarcodeDetected(code);
    };
  });

  // Barcode photo file input (Real ZXing supermarket barcode decoding)
  const barcodeFileInput = document.getElementById('barcode-file-input');
  if (barcodeFileInput) {
    barcodeFileInput.onchange = (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      const statusEl = document.getElementById('scanner-camera-status');
      if (statusEl) statusEl.textContent = 'Membaca barcode dari foto...';

      const reader = new FileReader();
      reader.onload = (re) => {
        const dataUrl = re.target.result;
        if (window.ZXing && window.ZXing.BrowserMultiFormatReader) {
          const imgReader = new window.ZXing.BrowserMultiFormatReader();
          imgReader.decodeFromImageUrl(dataUrl)
            .then((res) => {
              if (res && res.getText()) {
                handleBarcodeDetected(res.getText());
              }
            })
            .catch(() => {
              // Fallback to HTMLImageElement + BarcodeDetector if available
              const img = new Image();
              img.onload = () => {
                if ('BarcodeDetector' in window) {
                  const detector = new window.BarcodeDetector();
                  detector.detect(img)
                    .then(barcodes => {
                      if (barcodes.length > 0) {
                        handleBarcodeDetected(barcodes[0].rawValue);
                      } else {
                        sound.playWarning();
                        alert('Barcode tidak terbaca pada foto. Pastikan gambar barcode tegak, tidak buram, dan kontras.');
                      }
                    })
                    .catch(() => {
                      sound.playWarning();
                      alert('Barcode tidak terbaca pada foto.');
                    });
                } else {
                  sound.playWarning();
                  alert('Barcode tidak terbaca pada foto. Pastikan gambar barcode jelas dan tidak berbayang.');
                }
              };
              img.src = dataUrl;
            });
        }
      };
      reader.readAsDataURL(file);
    };
  }

  // Clear cart button (Hapus Semua)
  const btnClearCart = document.getElementById('btn-clear-cart');
  if (btnClearCart) {
    btnClearCart.onclick = () => {
      clearAllCartItems();
    };
  }

  // Google Sign-In button
  const googleBtn = document.getElementById('btn-google-signin');
  if (googleBtn) {
    googleBtn.onclick = handleGoogleSignIn;
  }

  // Voucher apply & recommendations
  const btnApplyVoucher = document.getElementById('btn-apply-voucher');
  const voucherInput = document.getElementById('voucher-code-input');
  if (btnApplyVoucher && voucherInput) {
    btnApplyVoucher.onclick = () => {
      applyVoucherCode(voucherInput.value);
    };
  }

  const btnRemoveVoucher = document.getElementById('btn-remove-applied-voucher');
  if (btnRemoveVoucher) {
    btnRemoveVoucher.onclick = removeAppliedVoucher;
  }

  document.querySelectorAll('.btn-quick-voucher').forEach((btn) => {
    btn.onclick = () => {
      const code = btn.getAttribute('data-code');
      if (voucherInput) voucherInput.value = code;
      applyVoucherCode(code);
    };
  });

  // Overbudget modal actions
  const btnWarnCart = document.getElementById('btn-warning-view-cart');
  const btnWarnRaise = document.getElementById('btn-warning-raise-budget');
  const btnWarnDismiss = document.getElementById('btn-warning-dismiss');

  if (btnWarnCart) {
    btnWarnCart.onclick = () => {
      document.getElementById('overbudget-warning-modal').classList.add('hidden');
      switchTab('view-cart');
    };
  }
  if (btnWarnRaise) {
    btnWarnRaise.onclick = () => {
      document.getElementById('overbudget-warning-modal').classList.add('hidden');
      switchTab('view-account');
      const input = document.getElementById('account-budget-limit-input');
      if (input) input.focus();
    };
  }
  if (btnWarnDismiss) {
    btnWarnDismiss.onclick = () => {
      document.getElementById('overbudget-warning-modal').classList.add('hidden');
    };
  }

  // Account budget limit form
  const budgetForm = document.getElementById('account-budget-form');
  const budgetInput = document.getElementById('account-budget-limit-input');
  if (budgetInput) {
    budgetInput.value = formatRupiah(state.safetyCap);
    budgetInput.oninput = (e) => {
      const parsed = parseRupiahInput(e.target.value);
      e.target.value = formatRupiah(parsed);
    };
  }
  if (budgetForm) {
    budgetForm.onsubmit = (e) => {
      e.preventDefault();
      const val = parseRupiahInput(budgetInput.value);
      if (val > 0) {
        state.safetyCap = val;
        localStorage.setItem(STORAGE_KEYS.SAFETY_CAP, val.toString());
        sound.playSuccess();
        updateSafetyBanner();
        syncToFirebase();
        alert(state.language === 'en' ? 'Budget limit updated successfully!' : 'Batas anggaran berhasil diperbarui!');
      }
    };
  }

  document.querySelectorAll('.btn-budget-chip').forEach((btn) => {
    btn.onclick = () => {
      const val = parseInt(btn.getAttribute('data-val'), 10);
      if (budgetInput) budgetInput.value = formatRupiah(val);
      state.safetyCap = val;
      localStorage.setItem(STORAGE_KEYS.SAFETY_CAP, val.toString());
      sound.playClick();
      updateSafetyBanner();
      syncToFirebase();
    };
  });

  // Theme button selectors
  document.querySelectorAll('.theme-card-btn').forEach((btn) => {
    btn.onclick = () => {
      const th = btn.getAttribute('data-theme');
      setTheme(th);
      sound.playClick();
    };
  });

  // Language selectors
  document.querySelectorAll('.lang-card-btn').forEach((btn) => {
    btn.onclick = () => {
      const lg = btn.getAttribute('data-lang');
      setLanguage(lg);
      sound.playClick();
    };
  });

  // Sound toggle switch
  const switchSound = document.getElementById('switch-sound-fx');
  if (switchSound) {
    switchSound.checked = state.soundEnabled;
    switchSound.onchange = (e) => {
      state.soundEnabled = e.target.checked;
      localStorage.setItem(STORAGE_KEYS.SOUND, state.soundEnabled.toString());
      if (state.soundEnabled) sound.playClick();
    };
  }

  // Checkout modal buttons
  document.getElementById('btn-checkout-session').onclick = openCheckoutModal;
  document.getElementById('btn-close-checkout-modal').onclick = () => {
    document.getElementById('checkout-modal').classList.add('hidden');
  };
  document.getElementById('btn-confirm-save-receipt').onclick = confirmCheckoutAndSave;

  // History detail modal
  document.getElementById('btn-close-history-modal').onclick = () => {
    document.getElementById('history-detail-modal').classList.add('hidden');
  };

  // Header quick buttons
  const btnSettings = document.getElementById('btn-settings-toggle');
  if (btnSettings) {
    btnSettings.onclick = () => {
      switchTab('view-account');
    };
  }
  const btnHeaderProf = document.getElementById('btn-header-profile');
  if (btnHeaderProf) {
    btnHeaderProf.onclick = () => {
      switchTab('view-account');
    };
  }

  // Bundle Carousel Slider & Touch Gestures (IDLIX / Netflix Fade & Gesture Style)
  const bundleContainer = document.getElementById('bundle-cards-container');
  const btnBundlePrev = document.getElementById('btn-bundle-prev');
  const btnBundleNext = document.getElementById('btn-bundle-next');
  makeHorizontalCarouselInteractive({
    container: bundleContainer,
    btnPrev: btnBundlePrev,
    btnNext: btnBundleNext,
    step: 272
  });

  // Open Add Product Modal with Photo Upload
  const btnOpenAddProduct = document.getElementById('btn-open-add-product');
  const itemModal = document.getElementById('item-modal');
  const btnCloseItemModal = document.getElementById('btn-close-item-modal');
  const photoFile = document.getElementById('item-photo-file');
  const photoPreviewImg = document.getElementById('item-photo-preview-img');
  const photoDataUrl = document.getElementById('item-photo-data-url');
  const btnRemovePhoto = document.getElementById('btn-remove-photo');

  function openAddItemModal() {
    const totals = calculateCartTotals();
    const limit = state.safetyCap || 500000;
    if (totals.finalNetTotal > limit) {
      sound.playWarning();
      const deficit = totals.finalNetTotal - limit;
      showToast(`Batas anggaran terlampaui (Overbudget Rp ${formatRupiah(deficit)}). Tidak dapat menambah produk baru sebelum anggaran aman!`, 'error');
      if (typeof showOverbudgetModal === 'function') {
        showOverbudgetModal(totals.finalNetTotal, limit, deficit);
      }
      return;
    }
    sound.playClick();
    if (itemModal) itemModal.classList.remove('hidden');
  }

  if (btnOpenAddProduct) {
    btnOpenAddProduct.onclick = openAddItemModal;
  }

  if (btnCloseItemModal) {
    btnCloseItemModal.onclick = () => {
      itemModal.classList.add('hidden');
    };
  }

  // Photo file picker with instant preview
  if (photoFile) {
    photoFile.onchange = (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          photoPreviewImg.src = evt.target.result;
          photoDataUrl.value = evt.target.result;
          sound.playSuccess();
        };
        reader.readAsDataURL(file);
      }
    };
  }

  if (btnRemovePhoto) {
    btnRemovePhoto.onclick = () => {
      const defImg = 'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=300&auto=format&fit=crop&q=80';
      photoPreviewImg.src = defImg;
      photoDataUrl.value = defImg;
    };
  }

  // Photo preset selector
  document.querySelectorAll('.btn-preset-photo').forEach((btn) => {
    btn.onclick = () => {
      const img = btn.getAttribute('data-img');
      photoPreviewImg.src = img;
      photoDataUrl.value = img;
      sound.playClick();
    };
  });

  // Populate category select dropdown in modal
  const catSelect = document.getElementById('item-category-select');
  if (catSelect) {
    catSelect.innerHTML = DEFAULT_CATEGORIES.filter((c) => c !== 'Semua').map((c) => `<option value="${c}">${c}</option>`).join('');
  }

  // Price input formatter in item modal
  const modalPriceInput = document.getElementById('item-price-input');
  if (modalPriceInput) {
    modalPriceInput.oninput = (e) => {
      const parsed = parseRupiahInput(e.target.value);
      e.target.value = formatRupiah(parsed);
      updateModalDiscountPreview();
    };
  }

  // Quick price chips in modal
  document.querySelectorAll('.btn-price-chip').forEach((chip) => {
    chip.onclick = () => {
      const add = parseInt(chip.getAttribute('data-add'), 10) || 0;
      const cur = parseRupiahInput(modalPriceInput.value);
      modalPriceInput.value = formatRupiah(cur + add);
      sound.playClick();
      updateModalDiscountPreview();
    };
  });

  // Discount mode toggling in modal
  let currentDiscountMode = 'none';
  document.querySelectorAll('.discount-mode-toggle .mode-btn').forEach((btn) => {
    btn.onclick = () => {
      currentDiscountMode = btn.getAttribute('data-mode');
      document.querySelectorAll('.discount-mode-toggle .mode-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('section-discount-single').classList.toggle('hidden', currentDiscountMode !== 'single');
      document.getElementById('section-discount-tiered').classList.toggle('hidden', currentDiscountMode !== 'tiered');
      sound.playClick();
      updateModalDiscountPreview();
    };
  });


// ==========================================================================
// F-04: KOMPARATOR HARGA REALTIME VS RIWAYAT TOKO & BULAN LALU
// ==========================================================================
function findHistoricalPriceReference(productName, storeName) {
  if (!productName) return null;
  const cleanName = productName.trim().toLowerCase();
  const currentStore = storeName || (state.currentLocation && state.currentLocation.name) || 'Lotte Mart Grocery - Puri Indah';

  // 1. Cek dari struk riwayat transaksi sebelumnya (history) di toko yang sama terlebih dahulu
  if (Array.isArray(state.history) && state.history.length > 0) {
    for (const receipt of state.history) {
      if (Array.isArray(receipt.items)) {
        const found = receipt.items.find((it) => it.name && it.name.trim().toLowerCase() === cleanName);
        if (found && found.unitPrice) {
          return {
            price: Number(found.unitPrice),
            sourceStore: receipt.storeLocation || receipt.storeName || currentStore,
            date: receipt.date || receipt.formattedDate || 'Bulan Lalu'
          };
        }
      }
    }
  }

  // 2. Cek dari katalog default (normalPrice sebagai referensi harga bulan lalu)
  const all = getAllCatalogProducts();
  const match = all.find((p) => p.name.trim().toLowerCase() === cleanName);
  if (match && match.normalPrice) {
    return {
      price: match.normalPrice,
      sourceStore: currentStore,
      date: 'Bulan Lalu'
    };
  }

  return null;
}

function updatePriceComparatorUI() {
  const box = document.getElementById('price-comparator-box');
  const nameInput = document.getElementById('item-name-input');
  const priceInput = document.getElementById('item-price-input');
  if (!box || !nameInput || !priceInput) return;

  const name = nameInput.value.trim();
  const currentPrice = parseRupiahInput(priceInput.value);

  if (!name || currentPrice <= 0) {
    box.classList.add('hidden');
    return;
  }

  const hist = findHistoricalPriceReference(name);
  if (!hist || !hist.price) {
    box.classList.add('hidden');
    return;
  }

  box.classList.remove('hidden');
  const prevP = hist.price;
  const diff = currentPrice - prevP;

  const lblPrev = document.getElementById('comp-label-prev');
  const expEl = document.getElementById('comp-explanation');
  const pillEl = document.getElementById('comp-delta-pill');
  const iconEl = document.getElementById('comp-icon');
  const badgeEl = document.getElementById('comp-icon-badge');

  if (lblPrev) lblPrev.textContent = `${hist.date} (${hist.sourceStore}): Rp ${formatRupiah(prevP)}`;

  if (diff > 0) {
    // Panah Merah Naik (↑): Jika harga naik dibanding riwayat bulan lalu di toko tersebut (+Rp selisih)
    if (pillEl) {
      pillEl.className = 'comparator-delta-pill pill-up';
      pillEl.textContent = `↑ Naik (+Rp ${formatRupiah(diff)})`;
    }
    if (expEl) expEl.textContent = `Harga lebih mahal Rp ${formatRupiah(diff)} dibanding ${hist.date.toLowerCase()}`;
    if (badgeEl) badgeEl.className = 'comparator-icon-badge badge-up';
    if (iconEl) iconEl.setAttribute('data-lucide', 'arrow-up-right');
  } else if (diff < 0) {
    // Panah Hijau Turun (↓): Jika harga turun dibanding riwayat bulan lalu di toko tersebut (-Rp hemat)
    const hemat = Math.abs(diff);
    if (pillEl) {
      pillEl.className = 'comparator-delta-pill pill-down';
      pillEl.textContent = `↓ Turun (-Rp ${formatRupiah(hemat)} hemat)`;
    }
    if (expEl) expEl.textContent = `Lebih murah! Hemat Rp ${formatRupiah(hemat)} dibanding ${hist.date.toLowerCase()}`;
    if (badgeEl) badgeEl.className = 'comparator-icon-badge badge-down';
    if (iconEl) iconEl.setAttribute('data-lucide', 'arrow-down-right');
  } else {
    // Tanda Setara (=): Jika harga stabil/tetap
    if (pillEl) {
      pillEl.className = 'comparator-delta-pill pill-stable';
      pillEl.textContent = `= Setara (Rp 0)`;
    }
    if (expEl) expEl.textContent = `Harga stabil/tetap persis sama dengan ${hist.date.toLowerCase()}`;
    if (badgeEl) badgeEl.className = 'comparator-icon-badge badge-stable';
    if (iconEl) iconEl.setAttribute('data-lucide', 'minus');
  }

  if (window.lucide) window.lucide.createIcons();
}

  function updateModalDiscountPreview() {
    updatePriceComparatorUI();
    const rawPrice = parseRupiahInput(modalPriceInput.value);
    const qty = parseFloat(document.getElementById('item-qty-input').value) || 1;
    const normalTotal = rawPrice * qty;
    let finalUnitPrice = rawPrice;

    if (currentDiscountMode === 'single') {
      const d1 = parseFloat(document.getElementById('input-discount-single').value) || 0;
      finalUnitPrice = rawPrice * (1 - d1 / 100);
    } else if (currentDiscountMode === 'tiered') {
      const d1 = parseFloat(document.getElementById('input-discount-d1').value) || 0;
      const d2 = parseFloat(document.getElementById('input-discount-d2').value) || 0;
      finalUnitPrice = rawPrice * (1 - d1 / 100) * (1 - d2 / 100);
    }

    const finalTotal = Math.round(finalUnitPrice * qty);
    const saved = normalTotal - finalTotal;

    document.getElementById('preview-normal-total').textContent = `Rp ${formatRupiah(normalTotal)}`;
    document.getElementById('preview-discount-saved').textContent = `- Rp ${formatRupiah(saved)}`;
    document.getElementById('preview-final-total').textContent = `Rp ${formatRupiah(finalTotal)}`;
  }

  document.getElementById('btn-qty-plus').onclick = () => {
    const el = document.getElementById('item-qty-input');
    el.value = (parseFloat(el.value) || 1) + 1;
    updateModalDiscountPreview();
  };

  document.getElementById('btn-qty-minus').onclick = () => {
    const el = document.getElementById('item-qty-input');
    const val = (parseFloat(el.value) || 1);
    if (val > 1) el.value = val - 1;
    updateModalDiscountPreview();
  };

  // Save new product from modal
  const btnSaveItemModal = document.getElementById('btn-save-item-modal');
  if (btnSaveItemModal) {
    btnSaveItemModal.onclick = () => {
      const name = document.getElementById('item-name-input').value.trim();
      const rawPrice = parseRupiahInput(modalPriceInput.value);
      if (!name) {
        alert('Silakan masukkan nama produk!');
        return;
      }
      if (rawPrice <= 0) {
        alert('Silakan masukkan harga satuan!');
        return;
      }

      const category = document.getElementById('item-category-select').value;
      const unit = document.getElementById('item-unit-input').value;
      const qty = parseFloat(document.getElementById('item-qty-input').value) || 1;
      const photo = photoDataUrl.value || 'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=300&auto=format&fit=crop&q=80';

      const healthRadio = document.querySelector('input[name="item-health-type"]:checked');
      const healthType = healthRadio ? healthRadio.value : 'healthy';

      const d1 = currentDiscountMode === 'single' ? parseFloat(document.getElementById('input-discount-single').value) || 0 : (currentDiscountMode === 'tiered' ? parseFloat(document.getElementById('input-discount-d1').value) || 0 : 0);
      const d2 = currentDiscountMode === 'tiered' ? parseFloat(document.getElementById('input-discount-d2').value) || 0 : 0;

      const newProduct = {
        id: 'custom_prod_' + Date.now(),
        name,
        category,
        unit,
        price: rawPrice,
        normalPrice: rawPrice,
        image: photo,
        barcode: (document.getElementById('item-barcode-input') && document.getElementById('item-barcode-input').value.trim()) || ('899' + Math.floor(1000000000 + Math.random() * 9000000000)),
        healthType,
        healthLabel: healthType === 'healthy' ? 'Bahan Segar' : (healthType === 'neutral' ? 'Olahan Seimbang' : 'Tinggi Gula/Garam'),
        smartTip: 'Periksa selalu tanggal kedaluwarsa dan bandingkan harga per satuan unit.'
      };

      state.customProducts.push(newProduct);
      localStorage.setItem(STORAGE_KEYS.CUSTOM_PRODUCTS, JSON.stringify(state.customProducts));

      // Also add to active cart
      addItemToCart({
        name,
        category,
        unit,
        qty,
        unitPrice: rawPrice,
        discountType: currentDiscountMode,
        d1,
        d2,
        image: photo,
        healthType
      });

      sound.playSuccess();
      fireConfetti();
      itemModal.classList.add('hidden');
      document.getElementById('item-form').reset();
      renderCatalog();
      syncToFirebase(true);
    };
  }

  // Cloud sync trigger
  document.getElementById('btn-cloud-sync').onclick = () => {
    if (!isAdmin()) {
      alert('Akses Cloud Firebase hanya untuk Administrator.');
      return;
    }
    document.getElementById('cloud-sync-modal').classList.remove('hidden');
  };
  document.getElementById('btn-close-cloud-modal').onclick = () => {
    document.getElementById('cloud-sync-modal').classList.add('hidden');
  };

  // Auth switch account modal
  const btnSwitchAcc = document.getElementById('btn-switch-account');
  const authModal = document.getElementById('auth-modal');
  if (btnSwitchAcc && authModal) {
    btnSwitchAcc.onclick = () => {
      authModal.classList.remove('hidden');
    };
  }

  // Auth Form tabs
  const tabLoginBtn = document.getElementById('tab-login-btn');
  const tabRegBtn = document.getElementById('tab-register-btn');
  const loginForm = document.getElementById('login-form');
  const regForm = document.getElementById('register-form');

  if (tabLoginBtn && tabRegBtn) {
    tabLoginBtn.onclick = () => {
      tabLoginBtn.classList.add('active');
      tabRegBtn.classList.remove('active');
      loginForm.classList.remove('hidden');
      regForm.classList.add('hidden');
      sound.playClick();
    };
    tabRegBtn.onclick = () => {
      tabRegBtn.classList.add('active');
      tabLoginBtn.classList.remove('active');
      regForm.classList.remove('hidden');
      loginForm.classList.add('hidden');
      sound.playClick();
    };
  }

  // Password Show / Hide Toggle (Eye Icon)
  document.querySelectorAll('.btn-toggle-pwd').forEach((btn) => {
    btn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);
      if (!input) return;

      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';

      const icon = btn.querySelector('i, svg');
      if (icon) {
        icon.setAttribute('data-lucide', isPassword ? 'eye-off' : 'eye');
        if (window.lucide) {
          window.lucide.createIcons();
        }
      }
      btn.setAttribute('aria-label', isPassword ? 'Sembunyikan Password' : 'Lihat Password');
      sound.playClick();
    };
  });

  // Login form handler
  if (loginForm) {
    const errEl = document.getElementById('login-error-msg');
    const emailInput = document.getElementById('login-email');
    const pwdInput = document.getElementById('login-password');

    // Real-time error dismissal when user types
    [emailInput, pwdInput].forEach((inp) => {
      if (inp) {
        inp.addEventListener('input', () => {
          if (errEl) {
            errEl.classList.add('hidden');
            errEl.textContent = '';
          }
        });
      }
    });

    loginForm.onsubmit = (e) => {
      e.preventDefault();
      const identifier = (emailInput?.value || '').trim();
      const pwd = pwdInput?.value || '';

      if (!identifier || !pwd) {
        if (errEl) {
          errEl.textContent = 'Mohon masukkan email/username dan password.';
          errEl.classList.remove('hidden');
        }
        sound.playWarning();
        return;
      }

      // Find user by either email OR username (case-insensitive)
      const user = state.usersList.find((u) =>
        (u.email && u.email.trim().toLowerCase() === identifier.toLowerCase()) ||
        (u.username && u.username.trim().toLowerCase() === identifier.toLowerCase())
      );

      // Inform user if account was registered via Google Sign-In
      if (user && user.provider === 'google' && !user.password) {
        if (errEl) {
          errEl.textContent = 'Akun ini terdaftar via Google. Silakan klik tombol "Lanjutkan dengan Google".';
          errEl.classList.remove('hidden');
        }
        sound.playWarning();
        return;
      }

      // Password comparison (direct or trimmed match)
      const isPasswordValid = user && user.password && (user.password === pwd || user.password === pwd.trim());

      if (user && isPasswordValid) {
        if (errEl) {
          errEl.classList.add('hidden');
          errEl.textContent = '';
        }
        if (pwdInput) pwdInput.value = '';

        state.currentUser = user;
        localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
        localStorage.removeItem('sg_user_logged_out');
        applyUserSessionToUI();
        syncToFirebase(true);
        if (window.FirebaseSync && typeof window.FirebaseSync.init === 'function') {
          window.FirebaseSync.init();
        }
        authModal.classList.add('hidden');
        sound.playSuccess();
        showToast(`Selamat datang kembali, ${user.username}!`, 'success');
        setTimeout(() => {
          openStoreLocationModal();
        }, 450);
      } else {
        sound.playWarning();
        if (errEl) {
          errEl.textContent = 'Email, username, atau password salah!';
          errEl.classList.remove('hidden');
        }
      }
    };
  }

  // Register form handler
  if (regForm) {
    regForm.onsubmit = (e) => {
      e.preventDefault();
      const username = document.getElementById('reg-username').value.trim();
      const email = document.getElementById('reg-email').value.trim();
      const pwd = document.getElementById('reg-password').value;

      if (state.usersList.some((u) => u.email.toLowerCase() === email.toLowerCase() || (u.username && u.username.toLowerCase() === username.toLowerCase()))) {
        document.getElementById('register-error-msg').textContent = 'Email atau username sudah terdaftar!';
        document.getElementById('register-error-msg').classList.remove('hidden');
        return;
      }

      const newUser = {
        username,
        email,
        password: pwd,
        role: 'member',
        provider: 'local'
      };
      state.usersList.push(newUser);
      localStorage.setItem(STORAGE_KEYS.USERS_LIST, JSON.stringify(state.usersList));

      state.currentUser = newUser;
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(newUser));
      localStorage.removeItem('sg_user_logged_out');
      applyUserSessionToUI();
      syncToFirebase(true);
      if (window.FirebaseSync && typeof window.FirebaseSync.init === 'function') {
        window.FirebaseSync.init();
      }
      authModal.classList.add('hidden');
      sound.playSuccess();
      fireConfetti();
      showToast(`Akun berhasil dibuat! Selamat datang di GroceryX, ${username}!`, 'success');
      setTimeout(() => {
        openStoreLocationModal();
      }, 450);
    };
  }

  // Change Password Form in Settings Tab
  const formChangePwd = document.getElementById('form-change-password');
  if (formChangePwd) {
    formChangePwd.onsubmit = (e) => {
      e.preventDefault();
      const curPwd = document.getElementById('input-current-pwd')?.value || '';
      const newPwd = document.getElementById('input-new-pwd')?.value || '';
      const confirmPwd = document.getElementById('input-confirm-pwd')?.value || '';
      const msgEl = document.getElementById('change-pwd-msg');

      if (!state.currentUser) {
        showToast('Silakan login terlebih dahulu.', 'warning');
        return;
      }

      if (state.currentUser.password && state.currentUser.password !== curPwd && state.currentUser.password !== curPwd.trim()) {
        if (msgEl) {
          msgEl.textContent = 'Password saat ini tidak sesuai!';
          msgEl.className = 'auth-inline-msg error';
          msgEl.classList.remove('hidden');
        }
        sound.playWarning();
        return;
      }

      if (newPwd.length < 6) {
        if (msgEl) {
          msgEl.textContent = 'Password baru minimal 6 karakter!';
          msgEl.className = 'auth-inline-msg error';
          msgEl.classList.remove('hidden');
        }
        sound.playWarning();
        return;
      }

      if (newPwd !== confirmPwd) {
        if (msgEl) {
          msgEl.textContent = 'Konfirmasi password baru tidak cocok!';
          msgEl.className = 'auth-inline-msg error';
          msgEl.classList.remove('hidden');
        }
        sound.playWarning();
        return;
      }

      state.currentUser.password = newPwd;
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(state.currentUser));

      const idx = state.usersList.findIndex((u) => u.email?.toLowerCase() === state.currentUser.email?.toLowerCase());
      if (idx >= 0) {
        state.usersList[idx].password = newPwd;
        localStorage.setItem(STORAGE_KEYS.USERS_LIST, JSON.stringify(state.usersList));
      }

      formChangePwd.reset();
      if (msgEl) {
        msgEl.textContent = 'Password berhasil diperbarui!';
        msgEl.className = 'auth-inline-msg success';
        msgEl.classList.remove('hidden');
      }
      sound.playSuccess();
      showToast('Password akun berhasil diperbarui!', 'success');
    };
  }

  // Close Auth Modal
  const btnCloseAuth = document.getElementById('btn-close-auth-modal');
  if (btnCloseAuth && authModal) {
    btnCloseAuth.onclick = () => {
      authModal.classList.add('hidden');
    };
  }

  // Google OAuth 2.0 Setup / Connect Modal Handlers
  const googleOauthModal = document.getElementById('google-oauth-modal');
  const btnCloseGoogleOauth = document.getElementById('btn-close-google-oauth');
  const btnCancelGoogleConfig = document.getElementById('btn-cancel-google-config');
  const googleClientIdForm = document.getElementById('google-clientid-form');

  if (btnCloseGoogleOauth && googleOauthModal) {
    btnCloseGoogleOauth.onclick = () => {
      googleOauthModal.classList.add('hidden');
    };
  }

  if (btnCancelGoogleConfig && googleOauthModal) {
    btnCancelGoogleConfig.onclick = () => {
      googleOauthModal.classList.add('hidden');
    };
  }

  if (googleClientIdForm) {
    googleClientIdForm.onsubmit = (e) => {
      e.preventDefault();
      const input = document.getElementById('google-client-id-input');
      const val = (input?.value || '').trim();
      if (!val) {
        showToast('Masukkan Google OAuth Client ID yang valid.', 'warning');
        return;
      }
      localStorage.setItem('sg_google_client_id', val);
      if (typeof window !== 'undefined' && window.GOOGLE_OAUTH_CONFIG) {
        window.GOOGLE_OAUTH_CONFIG.clientId = val;
      }
      if (googleOauthModal) googleOauthModal.classList.add('hidden');
      showToast('Client ID berhasil disimpan. Membuka login Google resmi...', 'success');
      handleGoogleSignIn();
    };
  }

  // Logout button
  const btnLogout = document.getElementById('btn-settings-logout');
  if (btnLogout) {
    btnLogout.onclick = () => {
      const confirmMsg = state.language === 'en'
        ? 'Are you sure you want to log out of your account?'
        : 'Apakah Anda yakin ingin keluar dari akun?';
      if (confirm(confirmMsg)) {
        state.currentUser = null;
        localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
        localStorage.setItem('sg_user_logged_out', 'true');
        if (window.FirebaseSync && typeof window.FirebaseSync.detachListener === 'function') {
          window.FirebaseSync.detachListener();
        }
        sound.playClick();
        applyUserSessionToUI();
        if (authModal) {
          authModal.classList.remove('hidden');
        }
        alert(state.language === 'en' ? 'You have successfully logged out.' : 'Anda telah berhasil keluar dari akun.');
      }
    };
  }

  // Reset database / clear data
  const btnResetDemo = document.getElementById('btn-reset-demo');
  if (btnResetDemo) {
    btnResetDemo.onclick = () => {
      if (confirm('Kosongkan semua riwayat belanja?')) {
        state.history = [];
        localStorage.removeItem(STORAGE_KEYS.HISTORY);
        sound.playClick();
        renderHistory();
        syncToFirebase(true);
      }
    };
  }

  // Export JSON data
  const btnExport = document.getElementById('btn-export-data');
  if (btnExport) {
    btnExport.onclick = () => {
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify({
        cart: state.cart,
        history: state.history,
        safetyCap: state.safetyCap,
        exportedAt: new Date().toISOString()
      }, null, 2));
      const a = document.createElement('a');
      a.href = dataStr;
      a.download = `GroceryX_Backup_${Date.now()}.json`;
      a.click();
    };
  }

  // Empty cart go to shop button
  const btnEmptyGoShop = document.getElementById('btn-empty-go-shop');
  if (btnEmptyGoShop) {
    btnEmptyGoShop.onclick = () => {
      switchTab('view-shop');
    };
  }

  updateIcons();
});


// Floating Action Buttons Visibility Engine (Etalase + / Cart v)
function updateFloatingButtonsVisibility() {
  const fabAddBtn = document.getElementById('btn-open-add-product');
  const jumpBtn = document.getElementById('btn-jump-to-checkout');

  const shopView = document.getElementById('view-shop');
  const cartView = document.getElementById('view-cart');

  const isShopActive = (state.activeTab === 'view-shop') || (shopView && !shopView.classList.contains('hidden'));
  const isCartActive = (state.activeTab === 'view-cart') || (cartView && !cartView.classList.contains('hidden'));

  // Etalase FAB (+)
  if (fabAddBtn) {
    if (isShopActive) {
      fabAddBtn.classList.remove('hidden');
      fabAddBtn.style.display = 'flex';
    } else {
      fabAddBtn.classList.add('hidden');
      fabAddBtn.style.display = 'none';
    }
  }

  // Cart Jump Button (v)
  if (jumpBtn) {
    if (isCartActive && state.cart && state.cart.length > 0) {
      jumpBtn.classList.remove('hidden');
      jumpBtn.style.display = 'flex';
    } else {
      jumpBtn.classList.add('hidden');
      jumpBtn.style.display = 'none';
    }
  }
}

function updateJumpToCheckoutVisibility() {
  updateFloatingButtonsVisibility();
}

function initJumpToCheckoutButton() {
  const jumpBtn = document.getElementById('btn-jump-to-checkout');
  if (jumpBtn) {
    jumpBtn.onclick = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (typeof sound !== 'undefined' && sound.playClick) sound.playClick();
      const checkoutBtn = document.getElementById('btn-checkout-session');
      const mainContent = document.querySelector('.app-main-content');

      if (checkoutBtn) {
        checkoutBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      if (mainContent) {
        mainContent.scrollTo({ top: mainContent.scrollHeight, behavior: 'smooth' });
      }
    };
  }
  updateFloatingButtonsVisibility();
}