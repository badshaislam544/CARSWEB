// ============================================
// DHAKA AUTOS — Premium Car Showroom in Bangladesh
// Inventory Page Component
// Responsive filters: mobile drawer + desktop sidebar
// ============================================

window.DriveX = window.DriveX || {};
window.Garirbazar = window.DriveX;
Garirbazar.pages = Garirbazar.pages || {};

Garirbazar.pages.Inventory = {
  sortBy: 'featured',

  getFilteredCars() {
    let list = Garirbazar.filterCars(Garirbazar.state.filters);

    if (Garirbazar.state.searchQuery && Garirbazar.state.searchQuery.trim() !== '') {
      const q = Garirbazar.state.searchQuery.toLowerCase();
      list = list.filter(car => 
        car.brand.toLowerCase().includes(q) ||
        car.model.toLowerCase().includes(q) ||
        car.location.toLowerCase().includes(q) ||
        `${car.year} ${car.brand} ${car.model}`.toLowerCase().includes(q)
      );
    }

    if (this.sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (this.sortBy === 'newest') {
      list.sort((a, b) => b.year - a.year);
    } else if (this.sortBy === 'mileage') {
      list.sort((a, b) => a.mileage - b.mileage);
    }

    return list;
  },

  // Number of actively applied filters (for the mobile badge)
  activeFilterCount() {
    const f = Garirbazar.state.filters;
    let count = 0;
    if (f.brand) count++;
    if (f.condition) count++;
    if (f.city) count++;
    if (f.fuelType) count++;
    if (f.priceMax) count++;
    if (Garirbazar.state.searchQuery && Garirbazar.state.searchQuery.trim()) count++;
    return count;
  },

  render() {
    const cars = this.getFilteredCars();
    const totalCount = cars.length;
    const t = Garirbazar.t;
    const filterCount = this.activeFilterCount();

    return `
    <div id="page-inventory" class="py-8 bg-[#f4f6f9] min-h-screen">
      <div class="max-w-7xl mx-auto px-4">
        
        <!-- Compact Page Header — no breadcrumbs, single slim row -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div class="flex items-center gap-2.5 min-w-0">
            <h1 class="text-lg sm:text-xl font-black text-gray-900 truncate">${t('vehiclesForSaleBD')}</h1>
            <span class="inline-flex items-center shrink-0 px-2.5 py-0.5 rounded-full bg-[#34723e]/10 text-[#34723e] text-xs font-bold">${totalCount}</span>
          </div>

          <!-- Sort Bar -->
          <div class="flex items-center gap-2">
            <label class="text-xs text-gray-600 font-semibold whitespace-nowrap">${t('sortBy')}:</label>
            <select id="inventory-sort" class="gb-input text-xs py-1.5 px-3">
              <option value="featured" ${this.sortBy === 'featured' ? 'selected' : ''}>${t('featured')}</option>
              <option value="price-low" ${this.sortBy === 'price-low' ? 'selected' : ''}>${t('priceLow')}</option>
              <option value="price-high" ${this.sortBy === 'price-high' ? 'selected' : ''}>${t('priceHigh')}</option>
              <option value="newest" ${this.sortBy === 'newest' ? 'selected' : ''}>${t('newest')}</option>
              <option value="mileage" ${this.sortBy === 'mileage' ? 'selected' : ''}>${t('lowestMileage')}</option>
            </select>
          </div>
        </div>

        <!-- 2 Column Layout: Filter Sidebar (Left) + Listings Grid (Right) -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          
          <!-- Mobile Toolbar: count + filter toggle (only on small screens) -->
          <div class="lg:hidden flex items-center justify-between gap-3 bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm">
            <div>
              <p class="text-sm font-bold text-gray-900">${totalCount} Vehicles</p>
              <p class="text-[11px] text-gray-500">${Garirbazar.state.showroomLocation}</p>
            </div>
            <button type="button" id="mobile-filter-toggle" class="af-btn sm outline flex items-center gap-2">
              <i class="fa-solid fa-sliders"></i>
              <span class="mf-label font-semibold">Filters</span>
              ${filterCount > 0 ? `<span id="mobile-filter-count" class="min-w-[18px] h-[18px] px-1 rounded-full bg-[#1374dd] text-white text-[10px] font-bold inline-flex items-center justify-center">${filterCount}</span>` : ''}
            </button>
          </div>

          <!-- Filter Panel: slide-down drawer on mobile, static sidebar on desktop -->
          <div id="filter-panel" class="filter-drawer lg:col-span-1">
            ${Garirbazar.SearchFilters ? Garirbazar.SearchFilters.render(true) : ''}
          </div>

          <!-- Listings Area -->
          <div class="lg:col-span-3 space-y-4">
            ${totalCount === 0 ? `
              <div class="bg-white rounded-xl border border-gray-200 p-10 text-center shadow-sm">
                <span class="text-3xl block mb-2">🔍</span>
                <h3 class="font-bold text-base text-gray-800 mb-1">${t('noVehicles')}</h3>
                <p class="text-xs text-gray-500 mb-4">${t('tryAdjusting')}</p>
                <button id="reset-inventory-btn" class="af-btn green sm">${t('resetAll')}</button>
              </div>
            ` : `
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4">
                ${cars.map((car, i) => Garirbazar.CarCard.render(car, i)).join('')}
              </div>
            `}
          </div>

        </div>

      </div>
    </div>
    `;
  },

  initEvents() {
    // 1. Car card events
    if (Garirbazar.CarCard && Garirbazar.CarCard.initCardEvents) {
      Garirbazar.CarCard.initCardEvents();
    }

    // 2. Search filters events
    if (Garirbazar.SearchFilters && Garirbazar.SearchFilters.initEvents) {
      Garirbazar.SearchFilters.initEvents();
    }

    // 3. Sort change
    document.getElementById('inventory-sort')?.addEventListener('change', (e) => {
      this.sortBy = e.target.value;
      this.refreshList();
    });

    // 4. Reset button
    document.getElementById('reset-inventory-btn')?.addEventListener('click', () => {
      if (Garirbazar.App && Garirbazar.App.setCategory) {
        Garirbazar.App.setCategory('cars');
      } else {
        Garirbazar.state.filters = { category: 'cars', brand: '', model: '', condition: '', city: '', priceMin: '', priceMax: '', fuelType: '', transmission: '' };
        Garirbazar.state.searchQuery = '';
        this.refreshList();
      }
    });

    // 5. Clear filters in sidebar
    document.getElementById('sidebar-clear-filters')?.addEventListener('click', () => {
      if (Garirbazar.App && Garirbazar.App.setCategory) {
        Garirbazar.App.setCategory('cars');
      } else {
        Garirbazar.state.filters = { category: 'cars', brand: '', model: '', condition: '', city: '', priceMin: '', priceMax: '', fuelType: '', transmission: '' };
        Garirbazar.state.searchQuery = '';
        this.refreshList();
      }
    });

    // 6. Mobile filter drawer toggle (slide-down)
    document.getElementById('mobile-filter-toggle')?.addEventListener('click', () => {
      const panel = document.getElementById('filter-panel');
      if (!panel) return;
      panel.classList.toggle('open');
      const label = panel.parentElement.querySelector('.mf-label');
      if (label) label.textContent = panel.classList.contains('open') ? 'Hide Filters' : 'Filters';
    });
  },

  refreshList() {
    const pageContainer = document.getElementById('page-container');
    if (pageContainer) {
      pageContainer.innerHTML = this.render();
      this.initEvents();
    }
  }
};