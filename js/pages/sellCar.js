// ============================================
// DHAKA AUTOS — Admin Pages Module
// 1) AdminPage     : Inventory manager (view / delete listings)
// 2) AddVehicle    : Dedicated full-screen Add Listing page (PC + Mobile)
// Single-company model: only the authorized DHAKA AUTOS admin can add / manage inventory.
// ============================================

window.DriveX = window.DriveX || {};
window.Garirbazar = window.DriveX;
Garirbazar.pages = Garirbazar.pages || {};

/* ------------------------------------------------------------------ */
/*  1. INVENTORY MANAGER — manage existing listings                    */
/* ------------------------------------------------------------------ */

Garirbazar.pages.AdminPage = {
  render() {
    const t = Garirbazar.t;
    const vehicles = Garirbazar.cars;
    const cars = vehicles.filter(v => v.category === 'cars');
    const bikes = vehicles.filter(v => v.category === 'bikes');
    const trucks = vehicles.filter(v => v.category === 'trucks');

    const catPill = (cat) => {
      const base = 'px-2 py-0.5 rounded-full text-[10px] font-bold';
      if (cat === 'bikes') return `<span class="${base} bg-orange-50 text-orange-700 border border-orange-200">${t('bikes')}</span>`;
      if (cat === 'trucks') return `<span class="${base} bg-purple-50 text-purple-700 border border-purple-200">${t('trucks')}</span>`;
      return `<span class="${base} bg-blue-50 text-blue-700 border border-blue-200">${t('cars')}</span>`;
    };

    return `
    <div id="page-admin" class="py-8 bg-[#f4f6f9] min-h-screen">
      <div class="max-w-7xl mx-auto px-4">

        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-200">
          <div>
            <span class="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#34723e] bg-green-50 border border-green-200 px-3 py-1 rounded-full mb-2">
              <i class="fa-solid fa-user-shield"></i> ${t('adminOnly')}
            </span>
            <h1 class="text-2xl sm:text-3xl font-black text-gray-900">DHAKA AUTOS — Inventory Manager</h1>
            <p class="text-xs text-gray-500 mt-0.5">${t('showing')} <strong class="text-[#34723e]">${vehicles.length}</strong> ${t('availableAtShowroom')}</p>
          </div>
          <div class="flex items-center gap-3">
            <a href="#admin-add" data-open-admin class="af-btn green whitespace-nowrap shadow-sm">
              <i class="fa-solid fa-plus"></i>
              <span class="ml-2">${t('addNewListing')}</span>
            </a>
          </div>
        </div>

        <!-- Category Stats -->
        <div class="grid grid-cols-3 gap-4 mb-6">
          <div class="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm">
            <h3 class="text-2xl font-black text-[#1374dd]">${cars.length}</h3>
            <p class="text-xs font-semibold text-gray-500 mt-0.5">${t('cars')}</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm">
            <h3 class="text-2xl font-black text-orange-600">${bikes.length}</h3>
            <p class="text-xs font-semibold text-gray-500 mt-0.5">${t('bikes')}</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm">
            <h3 class="text-2xl font-black text-purple-600">${trucks.length}</h3>
            <p class="text-xs font-semibold text-gray-500 mt-0.5">${t('trucks')}</p>
          </div>
        </div>

        <!-- Listings Table -->
        <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-gray-50 border-b border-gray-200 text-gray-500 uppercase tracking-wider">
                <tr>
                  <th class="py-3 px-4 font-bold">Vehicle</th>
                  <th class="py-3 px-3 font-bold">${t('category')}</th>
                  <th class="py-3 px-3 font-bold">${t('condition')}</th>
                  <th class="py-3 px-3 font-bold">Mileage</th>
                  <th class="py-3 px-3 font-bold">Price</th>
                  <th class="py-3 px-3 font-bold">${t('location')}</th>
                  <th class="py-3 px-3 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                ${vehicles.map(v => `
                  <tr class="hover:bg-gray-50 transition-colors">
                    <td class="py-3 px-4">
                      <div class="flex items-center gap-3">
                        <img src="${v.images[0]}" alt="${v.brand} ${v.model}" class="w-12 h-9 rounded-md object-cover border border-gray-100">
                        <div>
                          <p class="font-bold text-gray-900">${v.year} ${v.brand} ${v.model}</p>
                          <p class="text-[10px] text-gray-400">${v.sellerName}</p>
                        </div>
                      </div>
                    </td>
                    <td class="py-3 px-3">${catPill(v.category)}</td>
                    <td class="py-3 px-3 text-gray-600">${Garirbazar.conditionLabel(v.condition)}</td>
                    <td class="py-3 px-3 text-gray-600">${Garirbazar.formatNumber(v.mileage)} km</td>
                    <td class="py-3 px-3">
                      <span class="font-black text-[#34723e]">${Garirbazar.formatPrice(v.price)}</span>
                      ${v.originalPrice > v.price ? `<span class="text-[10px] text-gray-400 line-through ml-1">${Garirbazar.formatPrice(v.originalPrice)}</span>` : ''}
                    </td>
                    <td class="py-3 px-3 text-gray-600">${Garirbazar.state.showroomLocation}</td>
                    <td class="py-3 px-3">
                      <div class="flex items-center justify-end gap-2">
                        <a href="#car-${v.id}" class="text-[#1374dd] font-semibold hover:underline px-2 py-1">${t('viewAd')}</a>
                        <button type="button" class="admin-delete-btn text-[#d3001d] font-semibold hover:underline px-2 py-1" data-id="${v.id}">
                          <i class="fa-solid fa-trash-can mr-1"></i>Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Showroom Footer Note -->
        <div class="mt-6 bg-green-50 border border-green-200 rounded-xl p-4 text-xs text-gray-600 flex items-center gap-2">
          <i class="fa-solid fa-location-dot text-[#34723e]"></i>
          All vehicles are sold directly from our flagship showroom at <strong class="text-gray-900">${Garirbazar.state.showroomLocation} — House 7, Road 3, Sector 7, Uttara, Dhaka</strong>.
          Only the authorized DHAKA AUTOS admin can add or remove listings.
        </div>

      </div>
    </div>
    `;
  },

  initEvents() {
    document.querySelectorAll('.admin-delete-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'));
        const car = Garirbazar.getCarById(id);
        if (!car) return;

        if (window.confirm(`Remove "${car.year} ${car.brand} ${car.model}" from the site inventory? This cannot be undone.`)) {
          Garirbazar.removeVehicle(id);
          if (Garirbazar.Admin && Garirbazar.Admin.toast) {
            Garirbazar.Admin.toast(`${car.year} ${car.brand} ${car.model} removed`, 'success');
          }
          const pageContainer = document.getElementById('page-container');
          if (pageContainer) {
            pageContainer.innerHTML = this.render();
            this.initEvents();
          }
        }
      });
    });
  }
};

/* ------------------------------------------------------------------ */
/*  2. ADD VEHICLE — dedicated full-screen listing form (PC + Mobile)  */
/* ------------------------------------------------------------------ */

Garirbazar.pages.AddVehicle = {
  render() {
    const t = Garirbazar.t;
    const prefill = (['cars', 'bikes', 'trucks'].includes(Garirbazar.state.prefillCat))
      ? Garirbazar.state.prefillCat
      : (Garirbazar.state.filters.category || 'cars');

    const sel = (val, current) => `value="${val}" ${current === val ? 'selected' : ''}`;

    return `
    <div id="page-add-vehicle" class="py-8 bg-[#f4f6f9] min-h-screen">
      <div class="max-w-4xl mx-auto px-4">

        <!-- Header -->
        <div class="mb-6">
          <span class="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#34723e] bg-green-50 border border-green-200 px-3 py-1 rounded-full mb-2">
            <i class="fa-solid fa-user-shield"></i> ${t('adminOnly')}
          </span>
          <h1 class="text-2xl sm:text-3xl font-black text-gray-900">${t('addNewListing')}</h1>
          <p class="text-xs text-gray-500 mt-1">Complete the form below — the listing is published instantly to the DHAKA AUTOS inventory at <strong class="text-gray-800">${Garirbazar.state.showroomLocation}</strong>.</p>
        </div>

        <!-- Identity lock note -->
        <div class="admin-lock-note mb-5">
          <i class="fa-solid fa-lock"></i>
          <span>Every new listing is auto-published as <strong>DHAKA AUTOS Certified</strong> with the official showroom location &amp; verified badge. The location cannot be changed by sellers.</span>
        </div>

        <!-- Form Card -->
        <form id="admin-add-form" class="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <div class="px-5 sm:px-7 py-6 space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div class="admin-field">
                <label for="admin-cat">${t('category')} *</label>
                <select id="admin-cat">
                  <option ${sel('cars', prefill)}>Cars</option>
                  <option ${sel('bikes', prefill)}>Bikes</option>
                  <option ${sel('trucks', prefill)}>Trucks</option>
                </select>
              </div>

              <div class="admin-field">
                <label for="admin-brand">${t('brandMake')} *</label>
                <input id="admin-brand" type="text" placeholder="e.g. Toyota / Yamaha / Isuzu" required>
              </div>

              <div class="admin-field">
                <label for="admin-model">Model & Package *</label>
                <input id="admin-model" type="text" placeholder="e.g. Premio F EX / R15 / Elf NKR" required>
              </div>

              <div class="admin-field">
                <label for="admin-year">Year *</label>
                <input id="admin-year" type="number" min="2000" max="2030" value="2024" required>
              </div>

              <div class="admin-field">
                <label for="admin-price">Price (BDT ৳) *</label>
                <input id="admin-price" type="number" min="10000" placeholder="3450000" required>
              </div>

              <div class="admin-field">
                <label for="admin-original-price">Original / Market Price (BDT ৳)</label>
                <input id="admin-original-price" type="number" min="0" placeholder="3750000 (optional, shows a discount)">
              </div>

              <div class="admin-field">
                <label for="admin-milage">Mileage (km) *</label>
                <input id="admin-milage" type="number" min="0" placeholder="24500" required>
              </div>

              <div class="admin-field">
                <label for="admin-engine">Engine</label>
                <input id="admin-engine" type="text" placeholder="e.g. 1500 cc VVT-i / 250 cc">
              </div>

              <div class="admin-field">
                <label for="admin-fuel">${t('fuelType')} *</label>
                <select id="admin-fuel">
                  <option>Octane</option>
                  <option>Hybrid</option>
                  <option>Electric</option>
                  <option>Diesel</option>
                  <option>CNG</option>
                </select>
              </div>

              <div class="admin-field">
                <label for="admin-trans">Transmission</label>
                <select id="admin-trans">
                  <option>Automatic</option>
                  <option>6-Speed Manual</option>
                  <option>5-Speed Manual</option>
                  <option>Manual</option>
                </select>
              </div>

              <div class="admin-field">
                <label for="admin-cond">${t('condition')} *</label>
                <select id="admin-cond">
                  <option>Reconditioned</option>
                  <option>Used</option>
                  <option>New</option>
                </select>
              </div>

              <div class="admin-field">
                <label for="admin-color">Color</label>
                <input id="admin-color" type="text" placeholder="Pearl White">
              </div>

              <div class="admin-field sm:col-span-2">
                <label for="admin-img">Photo URL (optional)</label>
                <input id="admin-img" type="url" placeholder="https://... (defaults to our catalog photo)">
              </div>

              <div class="admin-field sm:col-span-2">
                <label for="admin-features">Key Features (comma separated)</label>
                <input id="admin-features" type="text" placeholder="Sunroof, Leather Seats, Backup Camera">
              </div>

              <div class="admin-field sm:col-span-2">
                <label for="admin-desc">Description</label>
                <textarea id="admin-desc" rows="3" placeholder="Vehicle notes for buyers..."></textarea>
              </div>

            </div>
          </div>

          <!-- Footer -->
          <div class="px-5 sm:px-7 py-4 bg-gray-50 border-t border-gray-200 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
            <span class="text-[11px] text-gray-400">* Required fields. New listings appear at the top of the inventory.</span>
            <div class="flex items-center gap-3">
              <a href="#admin" class="af-btn outline sm">Cancel</a>
              <button type="submit" class="af-btn sm green font-bold">
                <i class="fa-solid fa-cloud-arrow-up"></i> Publish Listing
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
    `;
  },

  initEvents() {
    const form = document.getElementById('admin-add-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const brand = document.getElementById('admin-brand').value.trim();
        const model = document.getElementById('admin-model').value.trim();
        if (!brand || !model) return;
        if (Garirbazar.Admin && Garirbazar.Admin.handleSubmit) {
          Garirbazar.Admin.handleSubmit();
        }
      });
    }
  }
};

// Back-compat: old route `#sell` also opens the admin manager
Garirbazar.pages.SellCar = Garirbazar.pages.AdminPage;