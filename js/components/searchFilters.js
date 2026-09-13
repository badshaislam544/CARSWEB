// ============================================
// DHAKA AUTOS — Search Filters Component (bilingual)
// ============================================

window.DriveX = window.DriveX || {};
window.Garirbazar = window.DriveX;

Garirbazar.SearchFilters = {
  render(isSidebar = false) {
    const brands = [...new Set(Garirbazar.cars.map(c => c.brand))].sort();
    const cities = Garirbazar.cities;
    const currentFilters = Garirbazar.state.filters;
    const t = Garirbazar.t;

    if (!isSidebar) {
      // Hero Homepage Tabbed Filter Box
      return `
      <div class="search-filter-card max-w-4xl mx-auto">
        <!-- Category Tabs -->
        <div class="search-nav-tabs">
          <button class="search-tab-item ${currentFilters.category === 'cars' ? 'active' : ''}" data-cat="cars">
            <i class="fa-solid fa-car"></i>
            <span>${t('cars')}</span>
          </button>
          <button class="search-tab-item ${currentFilters.category === 'bikes' ? 'active' : ''}" data-cat="bikes">
            <i class="fa-solid fa-motorcycle"></i>
            <span>${t('bikes')}</span>
          </button>
          <button class="search-tab-item ${currentFilters.category === 'trucks' ? 'active' : ''}" data-cat="trucks">
            <i class="fa-solid fa-truck"></i>
            <span>${t('trucks')}</span>
          </button>
        </div>

        <!-- Filter Fields -->
        <div class="p-4 sm:p-6 bg-white space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <!-- Brand -->
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1">${t('brandMake')}</label>
              <select id="hero-filter-brand" class="gb-input text-xs py-2.5">
                <option value="">${t('allBrands')}</option>
                ${brands.map(b => `<option value="${b}" ${currentFilters.brand === b ? 'selected' : ''}>${b}</option>`).join('')}
              </select>
            </div>

            <!-- City / Division -->
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1">${t('divisionCity')}</label>
              <select id="hero-filter-city" class="gb-input text-xs py-2.5">
                ${cities.map(c => `<option value="${c === 'All Bangladesh' ? '' : c}">${c}</option>`).join('')}
              </select>
            </div>

            <!-- Condition -->
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1">${t('condition')}</label>
              <select id="hero-filter-condition" class="gb-input text-xs py-2.5">
                <option value="">${t('allConditions')}</option>
                <option value="Reconditioned">${t('recCarsJapan')}</option>
                <option value="Used">${t('usedSecondHand')}</option>
                <option value="New">${t('brandNew')}</option>
              </select>
            </div>

            <!-- Max Budget -->
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1">${t('maxBudget')}</label>
              <select id="hero-filter-price" class="gb-input text-xs py-2.5">
                <option value="">${t('anyBudget')}</option>
                <option value="2000000">${t('under')} ৳ 20 ${t('lakh')}</option>
                <option value="3500000">${t('under')} ৳ 35 ${t('lakh')}</option>
                <option value="5000000">${t('under')} ৳ 50 ${t('lakh')}</option>
                <option value="8000000">${t('under')} ৳ 80 ${t('lakh')}</option>
                <option value="15000000">${t('under')} ৳ 1.5 ${t('crore')}</option>
              </select>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex items-center justify-between pt-2 border-t border-gray-100">
            <button id="hero-filter-reset" class="text-xs text-gray-500 hover:text-[#d3001d] font-semibold">
              ${t('resetFilters')}
            </button>
            <button id="hero-filter-submit" class="af-btn green py-2.5 px-8 text-sm shadow-sm flex items-center gap-2">
              <i class="fa-solid fa-magnifying-glass"></i>
              <span>${t('searchVehicles')}</span>
            </button>
          </div>
        </div>
      </div>
      `;
    }

    // Sidebar Filter Panel (for Inventory page)
    return `
    <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-5">
      <div class="flex items-center justify-between pb-3 border-b border-gray-100">
        <h3 class="font-bold text-sm text-gray-900 flex items-center gap-1.5">
          <i class="fa-solid fa-sliders"></i> ${t('filterVehicles')}
        </h3>
        <button id="sidebar-clear-filters" class="text-xs text-[#1374dd] font-semibold hover:underline">${t('clearAll')}</button>
      </div>

      <!-- Vehicle Category -->
      <div>
        <label class="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">${t('category')}</label>
        <div class="grid grid-cols-3 gap-1 p-1 bg-gray-100 rounded-md">
          <button class="side-cat-btn py-1.5 text-xs font-semibold rounded ${currentFilters.category === 'cars' ? 'bg-white shadow text-[#34723e]' : 'text-gray-600'}" data-cat="cars">${t('cars')}</button>
          <button class="side-cat-btn py-1.5 text-xs font-semibold rounded ${currentFilters.category === 'bikes' ? 'bg-white shadow text-[#34723e]' : 'text-gray-600'}" data-cat="bikes">${t('bikes')}</button>
          <button class="side-cat-btn py-1.5 text-xs font-semibold rounded ${currentFilters.category === 'trucks' ? 'bg-white shadow text-[#34723e]' : 'text-gray-600'}" data-cat="trucks">${t('trucks')}</button>
        </div>
      </div>

      <!-- Brand -->
      <div>
        <label class="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">${t('brandMake')}</label>
        <select id="side-filter-brand" class="gb-input text-xs py-2">
          <option value="">${t('allBrands')}</option>
          ${brands.map(b => `<option value="${b}" ${currentFilters.brand === b ? 'selected' : ''}>${b}</option>`).join('')}
        </select>
      </div>

      <!-- Condition -->
      <div>
        <label class="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">${t('condition')}</label>
        <div class="space-y-1.5 text-xs text-gray-700">
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="side-cond" value="" ${!currentFilters.condition ? 'checked' : ''} class="accent-[#34723e]">
            <span>${t('allConditions')}</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="side-cond" value="Reconditioned" ${currentFilters.condition === 'Reconditioned' ? 'checked' : ''} class="accent-[#34723e]">
            <span>${t('recImported')}</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="side-cond" value="Used" ${currentFilters.condition === 'Used' ? 'checked' : ''} class="accent-[#34723e]">
            <span>${t('usedRegBD')}</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="side-cond" value="New" ${currentFilters.condition === 'New' ? 'checked' : ''} class="accent-[#34723e]">
            <span>${t('brandNew')}</span>
          </label>
        </div>
      </div>

      <!-- Division / City -->
      <div>
        <label class="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">${t('divisionCity')}</label>
        <select id="side-filter-city" class="gb-input text-xs py-2">
          ${cities.map(c => `<option value="${c === 'All Bangladesh' ? '' : c}">${c}</option>`).join('')}
        </select>
      </div>

      <!-- Fuel Type -->
      <div>
        <label class="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">${t('fuelType')}</label>
        <select id="side-filter-fuel" class="gb-input text-xs py-2">
          <option value="">${t('anyFuelType')}</option>
          <option value="Octane">Octane</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Electric">Electric (EV)</option>
          <option value="CNG">CNG</option>
          <option value="LPG">LPG</option>
          <option value="Diesel">Diesel</option>
        </select>
      </div>

      <!-- Price Cap -->
      <div>
        <label class="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">${t('maxPrice')}</label>
        <select id="side-filter-price" class="gb-input text-xs py-2">
          <option value="">${t('anyPrice')}</option>
          <option value="1500000">${t('under')} 15 ${t('lakh')}</option>
          <option value="3000000">${t('under')} 30 ${t('lakh')}</option>
          <option value="5000000">${t('under')} 50 ${t('lakh')}</option>
          <option value="10000000">${t('under')} 1 ${t('crore')}</option>
        </select>
      </div>

      <button id="side-apply-btn" class="af-btn green w-full text-xs font-bold py-2.5">
        ${t('applyFilters')}
      </button>
    </div>
    `;
  },

  initEvents() {
    // 1. Hero tab clicks (select category in hero — submit applies it)
    document.querySelectorAll('.search-tab-item').forEach(tab => {
      tab.addEventListener('click', () => {
        const cat = tab.getAttribute('data-cat');
        Garirbazar.state.filters.category = cat;
        Garirbazar.state.activeCategory = cat;
        document.querySelectorAll('.search-tab-item').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      });
    });

    // 2. Hero submit
    document.getElementById('hero-filter-submit')?.addEventListener('click', () => {
      Garirbazar.state.filters.brand = document.getElementById('hero-filter-brand')?.value || '';
      Garirbazar.state.filters.city = document.getElementById('hero-filter-city')?.value || '';
      Garirbazar.state.filters.condition = document.getElementById('hero-filter-condition')?.value || '';
      Garirbazar.state.filters.priceMax = document.getElementById('hero-filter-price')?.value || '';
      window.location.hash = '#inventory';
    });

    // 3. Hero reset
    document.getElementById('hero-filter-reset')?.addEventListener('click', () => {
      Garirbazar.state.filters = { category: 'cars', brand: '', model: '', condition: '', city: '', priceMin: '', priceMax: '', fuelType: '', transmission: '' };
      window.location.reload();
    });

    // 4. Sidebar apply
    document.getElementById('side-apply-btn')?.addEventListener('click', () => {
      Garirbazar.state.filters.brand = document.getElementById('side-filter-brand')?.value || '';
      Garirbazar.state.filters.city = document.getElementById('side-filter-city')?.value || '';
      Garirbazar.state.filters.fuelType = document.getElementById('side-filter-fuel')?.value || '';
      Garirbazar.state.filters.priceMax = document.getElementById('side-filter-price')?.value || '';

      const condEl = document.querySelector('input[name="side-cond"]:checked');
      Garirbazar.state.filters.condition = condEl ? condEl.value : '';

      if (Garirbazar.pages.Inventory && Garirbazar.pages.Inventory.refreshList) {
        Garirbazar.pages.Inventory.refreshList();
      }
    });

    // 5. Sidebar category toggle — routed through central setCategory for full sync
    document.querySelectorAll('.side-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-cat');
        if (Garirbazar.App && Garirbazar.App.setCategory) {
          Garirbazar.App.setCategory(cat);
        } else {
          Garirbazar.state.filters.category = cat;
          if (Garirbazar.pages.Inventory && Garirbazar.pages.Inventory.refreshList) {
            Garirbazar.pages.Inventory.refreshList();
          }
        }
      });
    });
  }
};