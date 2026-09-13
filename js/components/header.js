// ============================================
// DHAKA AUTOS — Elite Automotive Marketplace
// Header Component (compact, responsive)
// ============================================

window.DriveX = window.DriveX || {};
window.Garirbazar = window.DriveX;

Garirbazar.Header = {
  render() {
    const favCount = Garirbazar.state.favorites.size;
    const t = Garirbazar.t;
    const showroom = Garirbazar.state.showroomLocation;

    return `
    <header id="main-header" class="w-full z-50 sticky top-0 bg-white border-b border-gray-200 shadow-sm transition-all duration-300">

      <!-- 1. Slim Info Strip — hotline + official showroom (saves vertical space) -->
      <div class="hidden md:block bg-[#0f172a] text-gray-300">
        <div class="max-w-7xl mx-auto px-4 flex items-center justify-between text-[11px] leading-none py-[7px]">
          <div class="flex items-center gap-3">
            <span class="flex items-center gap-1.5 font-medium">
              <i class="fa-solid fa-headset text-[#4fb25f]"></i>
              <a href="tel:+880164772206" class="font-bold text-white hover:text-[#4fb25f] transition-colors">01647-712206</a>
            </span>
            <span class="text-gray-600">|</span>
            <span class="flex items-center gap-1.5">
              <i class="fa-solid fa-location-dot text-[#4fb25f]"></i>
              <strong class="text-white font-semibold">${showroom}</strong>
              <span class="text-gray-500">— ${t('flagship')}</span>
            </span>
          </div>

          <div class="flex items-center gap-4">
            <span class="flex items-center gap-1">
              <i class="fa-solid fa-microchip text-gray-500"></i>
              DHAKA AUTOS — Elite Automotive Marketplace
            </span>
            <span class="text-gray-600">|</span>

            <!-- Currency Switcher -->
            <button id="currency-toggle-btn" class="flex items-center gap-1 font-bold text-gray-200 hover:text-[#4fb25f] cursor-pointer" title="Switch currency">
              <i class="fa-solid fa-coins"></i>
              <span id="curr-label">${Garirbazar.state.currency}</span>
              <span class="text-[9px] text-gray-500">▼</span>
            </button>

            <a href="#dashboard" class="flex items-center gap-1.5 font-bold text-gray-200 hover:text-[#4fb25f] transition-colors">
              <i class="fa-regular fa-user"></i>
              <span>${Garirbazar.state.user.name}</span>
            </a>
          </div>
        </div>
      </div>

      <!-- 2. Main Navigation Bar (tight vertical padding) -->
      <div class="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">

        <!-- Logo & Tagline -->
        <a href="#home" class="flex items-center gap-2 group">
          <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-[#34723e] to-[#4fb25f] flex items-center justify-center text-white text-base shadow-sm group-hover:scale-105 transition-transform">
            <i class="fa-solid fa-car-side"></i>
          </div>
          <div class="flex flex-col justify-center">
            <span class="text-lg leading-none font-black tracking-tight text-[#212529]">
              DHAKA <span class="text-[#34723e]">AUTOS</span>
            </span>
            <span class="text-[9px] text-gray-500 font-semibold tracking-wide mt-0.5">Elite Auto Marketplace</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-0.5">
          <a href="#home" class="header-nav-link ${Garirbazar.state.currentPage === 'home' ? 'active' : ''}" data-nav="home">
            <span>${t('home')}</span>
          </a>
          <button type="button" class="category-quick-btn header-nav-link" data-cat="cars">
            <span>${t('cars')}</span>
          </button>
          <button type="button" class="category-quick-btn header-nav-link" data-cat="bikes">
            <span>${t('bikes')}</span>
          </button>
          <button type="button" class="category-quick-btn header-nav-link" data-cat="trucks">
            <span>${t('trucks')}</span>
          </button>
          <a href="#finance" class="header-nav-link ${Garirbazar.state.currentPage === 'finance' ? 'active' : ''}" data-nav="finance">
            <span>Loan EMI</span>
          </a>
          <a href="#compare" class="header-nav-link ${Garirbazar.state.currentPage === 'compare' ? 'active' : ''}" data-nav="compare">
            <span>${t('compare')}</span>
          </a>
        </nav>

        <!-- Right Actions -->
        <div class="flex items-center gap-2">

          <!-- Universal Search -->
          <div class="relative hidden sm:block w-40 xl:w-52">
            <input type="text" id="header-search-input" placeholder="${t('searchPlaceholder')}" class="w-full text-xs py-1.5 pl-8 pr-3 border border-gray-300 rounded-md bg-gray-50 focus:bg-white focus:outline-none focus:border-[#1374dd]">
            <i class="fa-solid fa-magnifying-glass absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
          </div>

          <!-- Saved Wishlist -->
          <a href="#dashboard" class="relative p-2 rounded-md hover:bg-gray-100 text-gray-600 transition-colors" title="${t('savedVehicles')}">
            <i class="fa-regular fa-heart text-base"></i>
            <span id="header-fav-count" class="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#d3001d] text-white text-[9px] font-bold rounded-full flex items-center justify-center">${favCount}</span>
          </a>

          <!-- Admin quick CTA — opens the dedicated Add Listing page -->
          <button type="button" data-open-admin class="af-btn sm green whitespace-nowrap">
            <i class="fa-solid fa-plus"></i>
            <span class="hidden sm:inline ml-1.5">${t('sellYourCar')}</span>
          </button>

          <!-- Mobile Hamburger -->
          <button id="mobile-menu-btn" class="lg:hidden p-2 -mr-1 rounded-md hover:bg-gray-100 text-gray-700" aria-label="Menu">
            <i class="fa-solid fa-bars text-lg"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Dropdown -->
      <div id="mobile-nav-dropdown" class="hidden lg:hidden border-t border-gray-200 bg-white px-4 py-3 space-y-1">
        <a href="#home" class="block py-2 text-sm font-semibold text-gray-800 hover:text-[#34723e]"><i class="fa-solid fa-house mr-2 text-[#34723e]"></i>${t('home')}</a>
        <button type="button" class="category-quick-btn block w-full text-left py-2 text-sm font-semibold text-gray-800 hover:text-[#34723e]" data-cat="cars"><i class="fa-solid fa-car mr-2 text-[#34723e]"></i>${t('carsForSale')}</button>
        <button type="button" class="category-quick-btn block w-full text-left py-2 text-sm font-semibold text-gray-800 hover:text-[#34723e]" data-cat="bikes"><i class="fa-solid fa-motorcycle mr-2 text-[#34723e]"></i>${t('bikesInBD')}</button>
        <button type="button" class="category-quick-btn block w-full text-left py-2 text-sm font-semibold text-gray-800 hover:text-[#34723e]" data-cat="trucks"><i class="fa-solid fa-truck mr-2 text-[#34723e]"></i>${t('trucksCommercial')}</button>
        <a href="#finance" class="block py-2 text-sm font-semibold text-gray-800 hover:text-[#34723e]"><i class="fa-solid fa-landmark mr-2 text-[#34723e]"></i>${t('loanCalculator')}</a>
        <a href="#compare" class="block py-2 text-sm font-semibold text-gray-800 hover:text-[#34723e]"><i class="fa-solid fa-scale-balanced mr-2 text-[#34723e]"></i>${t('compareVehicles')}</a>
        <a href="#blog" class="block py-2 text-sm font-semibold text-gray-800 hover:text-[#34723e]"><i class="fa-solid fa-newspaper mr-2 text-[#34723e]"></i>${t('journal')}</a>
        <a href="#admin" class="block py-2 text-sm font-semibold text-gray-800 hover:text-[#34723e]"><i class="fa-solid fa-user-shield mr-2 text-[#34723e]"></i>${t('adminPanel')}</a>
        <a href="#dashboard" class="block py-2 text-sm font-semibold text-gray-800 hover:text-[#34723e]"><i class="fa-solid fa-gauge mr-2 text-[#34723e]"></i>${t('dashboard')}</a>
      </div>

    </header>
    `;
  },

  init() {
    // Currency switcher
    document.getElementById('currency-toggle-btn')?.addEventListener('click', () => {
      Garirbazar.state.currency = Garirbazar.state.currency === 'BDT' ? 'USD' : 'BDT';
      const label = document.getElementById('curr-label');
      if (label) label.textContent = Garirbazar.state.currency;
      window.dispatchEvent(new Event('hashchange'));
    });

    // Mobile hamburger menu
    const menuBtn = document.getElementById('mobile-menu-btn');
    const dropdown = document.getElementById('mobile-nav-dropdown');
    if (menuBtn && dropdown) {
      menuBtn.addEventListener('click', () => {
        dropdown.classList.toggle('hidden');
      });
    }

    // Category quick buttons
    document.querySelectorAll('.category-quick-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-cat');
        if (Garirbazar.App && Garirbazar.App.setCategory) {
          Garirbazar.App.setCategory(cat);
        } else {
          Garirbazar.state.filters.category = cat;
          window.location.hash = '#inventory';
        }
        const dd = document.getElementById('mobile-nav-dropdown');
        if (dd) dd.classList.add('hidden');
      });
    });

    // Header search
    const searchInput = document.getElementById('header-search-input');
    if (searchInput) {
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          Garirbazar.state.searchQuery = searchInput.value;
          window.location.hash = '#inventory';
        }
      });
    }
  },

  updateActiveNav() {
    const current = Garirbazar.state.currentPage;
    const cat = Garirbazar.state.filters.category;
    document.querySelectorAll('.header-nav-link').forEach(link => {
      if (link.hasAttribute('data-cat')) {
        link.classList.toggle('active', current === 'inventory' && link.getAttribute('data-cat') === cat);
      } else {
        link.classList.toggle('active', link.getAttribute('data-nav') === current);
      }
    });

    const favCountEl = document.getElementById('header-fav-count');
    if (favCountEl) favCountEl.textContent = Garirbazar.state.favorites.size;
  }
};