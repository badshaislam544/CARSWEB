// ============================================
// DHAKA AUTOS — Premium Car Showroom in Bangladesh
// Home Page Component (modern redesign)
// ============================================

window.DriveX = window.DriveX || {};
window.Garirbazar = window.DriveX;
Garirbazar.pages = Garirbazar.pages || {};

Garirbazar.pages.Home = {
  featuredCars() {
    return Garirbazar.cars.slice(0, 8);
  },

  render() {
    const feats = this.featuredCars();
    const brands = Garirbazar.brands || [];
    const dealerships = Garirbazar.dealerships || [];
    const cats = [
      { key: 'cars', name: 'Cars', icon: 'fa-solid fa-car', count: Garirbazar.cars.filter(c => c.category === 'cars').length,
        img: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80', desc: 'Premium sedans, SUVs & hybrids' },
      { key: 'bikes', name: 'Bikes', icon: 'fa-solid fa-motorcycle', count: Garirbazar.cars.filter(c => c.category === 'bikes').length,
        img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80', desc: 'Naked, sport & classic motorcycles' },
      { key: 'trucks', name: 'Trucks', icon: 'fa-solid fa-truck', count: Garirbazar.cars.filter(c => c.category === 'trucks').length,
        img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80', desc: 'Light & heavy commercial vehicles' }
    ];

    return `
    <div id="page-home" class="min-h-screen bg-[#f4f6f9]">

      <!-- 1. HERO SECTION -->
      <section class="relative bg-gradient-to-br from-[#0b1220] via-[#12203a] to-[#0b1220] text-white overflow-hidden">
        <div class="absolute inset-0 opacity-[0.07]" style="background-image:linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px);background-size:44px 44px;"></div>
        <div class="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#34723e]/30 blur-3xl"></div>
        <div class="absolute -bottom-40 -left-24 w-96 h-96 rounded-full bg-[#1374dd]/20 blur-3xl"></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#4fb25f] mb-5 border border-white/10">
            <i class="fa-solid fa-flag-checkered"></i> DHAKA AUTOS — Bangladesh's Most Trusted Auto Marketplace
          </div>

          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-4">
            Find the <span class="text-[#4fb25f]">Best Car Price</span><br class="hidden sm:block">
            in Bangladesh
          </h1>

          <p class="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mb-9 font-medium">
            Reconditioned, used &amp; brand new cars, bikes and trucks — every vehicle inspected, paper-verified and honestly priced at our Uttara flagship showroom.
          </p>

          <!-- Search Filter Box -->
          <div class="max-w-4xl mx-auto text-left text-gray-800">
            ${Garirbazar.SearchFilters ? Garirbazar.SearchFilters.render(false) : ''}
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mt-10 pt-8 border-t border-white/10 text-center">
            <div>
              <span class="text-2xl sm:text-3xl font-extrabold text-white">${Garirbazar.cars.length}</span>
              <p class="text-xs text-gray-400 mt-0.5">Verified Vehicles</p>
            </div>
            <div>
              <span class="text-2xl sm:text-3xl font-extrabold text-[#4fb25f]">100%</span>
              <p class="text-xs text-gray-400 mt-0.5">Paper Verified</p>
            </div>
            <div>
              <span class="text-2xl sm:text-3xl font-extrabold text-white">350+</span>
              <p class="text-xs text-gray-400 mt-0.5">Happy Customers</p>
            </div>
            <div>
              <span class="text-2xl sm:text-3xl font-extrabold text-[#1374dd]">৳ 450 Cr+</span>
              <p class="text-xs text-gray-400 mt-0.5">Vehicles Delivered</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. FEATURED CATEGORIES -->
      <section class="py-10 bg-white border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex items-end justify-between mb-6">
            <div>
              <span class="text-[11px] font-bold text-[#34723e] uppercase tracking-widest bg-green-50 px-2.5 py-1 rounded-full border border-green-200">Browse Inventory</span>
              <h2 class="text-2xl font-black text-gray-900 mt-2">Shop by Category</h2>
            </div>
            <a href="#inventory" class="text-xs font-bold text-[#1374dd] hover:underline">View All &rarr;</a>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
            ${cats.map(cat => `
              <button type="button" class="home-cat-card relative rounded-2xl overflow-hidden text-left group shadow-sm border border-gray-200 focus:outline-none" data-cat="${cat.key}">
                <img src="${cat.img}" alt="${cat.name}" class="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                <div class="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div class="flex items-center justify-between">
                    <div>
                      <i class="${cat.icon} text-2xl text-[#4fb25f] mb-1"></i>
                      <h3 class="text-xl font-black">${cat.name}</h3>
                      <p class="text-[11px] text-gray-300 mt-0.5">${cat.count} vehicles · ${cat.desc}</p>
                    </div>
                    <span class="w-9 h-9 rounded-full bg-white/15 border border-white/25 flex items-center justify-center group-hover:bg-[#34723e] group-hover:border-[#34723e] transition-colors">
                      <i class="fa-solid fa-arrow-right text-sm"></i>
                    </span>
                  </div>
                </div>
              </button>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- 3. TRUST & ASSURANCE BADGES -->
      <section class="py-12 px-4">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-8">
            <span class="text-[11px] font-bold text-[#34723e] uppercase tracking-widest bg-green-50 px-2.5 py-1 rounded-full border border-green-200">Trust & Assurance</span>
            <h2 class="text-2xl sm:text-3xl font-black text-gray-900 mt-2">Why Buy From DHAKA AUTOS?</h2>
            <p class="text-xs sm:text-sm text-gray-500 mt-1.5">Every vehicle we sell is inspected, paper-verified and honestly priced — no hidden surprises.</p>
          </div>

          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all">
              <div class="w-11 h-11 rounded-xl bg-green-50 text-[#34723e] flex items-center justify-center text-lg mb-3">
                <i class="fa-solid fa-shield-halved"></i>
              </div>
              <h3 class="font-bold text-sm text-gray-900 mb-1">100% Paper Verified</h3>
              <p class="text-[11px] text-gray-500 leading-relaxed">BRTA tax token, fitness, smart card & ownership history checked on every vehicle.</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all">
              <div class="w-11 h-11 rounded-xl bg-green-50 text-[#34723e] flex items-center justify-center text-lg mb-3">
                <i class="fa-solid fa-screwdriver-wrench"></i>
              </div>
              <h3 class="font-bold text-sm text-gray-900 mb-1">Full Inspection</h3>
              <p class="text-[11px] text-gray-500 leading-relaxed">Engine, gearbox, chassis & AC inspected by senior mechanics before listing.</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all">
              <div class="w-11 h-11 rounded-xl bg-green-50 text-[#34723e] flex items-center justify-center text-lg mb-3">
                <i class="fa-solid fa-hand-holding-dollar"></i>
              </div>
              <h3 class="font-bold text-sm text-gray-900 mb-1">Honest Pricing</h3>
              <p class="text-[11px] text-gray-500 leading-relaxed">Fair market price with full transparency — no hidden charges, easy negotiation.</p>
            </div>
            <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all">
              <div class="w-11 h-11 rounded-xl bg-green-50 text-[#34723e] flex items-center justify-center text-lg mb-3">
                <i class="fa-solid fa-car-rear"></i>
              </div>
              <h3 class="font-bold text-sm text-gray-900 mb-1">Test Drive & Support</h3>
              <p class="text-[11px] text-gray-500 leading-relaxed">Test drive at our showroom plus full help with BRTA ownership transfer.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. TOP DEALS / FEATURED VEHICLES -->
      <section class="py-4 pb-12">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <span class="text-[11px] font-bold text-[#1374dd] uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">Handpicked</span>
              <h2 class="text-2xl font-black text-gray-900 mt-2">Top Deals at Our Showroom</h2>
              <p class="text-xs text-gray-500 mt-1">Freshly listed vehicles with verified registration papers and competitive prices</p>
            </div>

            <!-- Quick filter pills -->
            <div class="flex items-center gap-1.5 overflow-x-auto pb-1">
              <button class="home-filter-pill active px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#34723e] text-white" data-filter="all">All</button>
              <button class="home-filter-pill px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-gray-200 text-gray-700 hover:border-gray-400" data-filter="Toyota">Toyota</button>
              <button class="home-filter-pill px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-gray-200 text-gray-700 hover:border-gray-400" data-filter="Honda">Honda</button>
              <button class="home-filter-pill px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-gray-200 text-gray-700 hover:border-gray-400" data-filter="Reconditioned">Reconditioned</button>
              <button class="home-filter-pill px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-gray-200 text-gray-700 hover:border-gray-400" data-filter="Hybrid">Hybrid</button>
            </div>
          </div>

          <!-- Vehicles Grid -->
          <div id="home-cars-grid" class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            ${feats.map((car, i) => Garirbazar.CarCard.render(car, i)).join('')}
          </div>

          <div class="text-center mt-9">
            <a href="#inventory" class="af-btn green py-3 px-8 text-sm shadow-sm inline-flex items-center gap-2">
              <span>View All ${Garirbazar.cars.length} Vehicles in Bangladesh</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <!-- 5. POPULAR BRANDS -->
      <section class="py-10 bg-white border-y border-gray-200">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-xl font-bold text-gray-900">Popular Brands in Bangladesh</h2>
              <p class="text-xs text-gray-500 mt-0.5">Trusted Japanese &amp; global manufacturers, all in stock</p>
            </div>
            <a href="#inventory" class="text-xs font-bold text-[#1374dd] hover:underline">View All &rarr;</a>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            ${brands.map(b => `
              <div class="home-brand-card p-3 rounded-lg border border-gray-200 hover:border-[#34723e] hover:shadow-sm transition-all cursor-pointer text-center bg-gray-50/60 group" data-brand="${b.name}">
                <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center font-black text-xs mx-auto mb-2 text-[#34723e] group-hover:bg-[#34723e] group-hover:text-white transition-colors border border-gray-100">
                  ${b.logo.substring(0, 3)}
                </div>
                <h3 class="font-bold text-xs text-gray-900 group-hover:text-[#34723e]">${b.name}</h3>
                <span class="text-[10px] text-gray-500">${b.count}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- 6. SHOWROOMS DIRECTORY -->
      <section class="py-10">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-xl font-bold text-gray-900">DHAKA AUTOS Showrooms</h2>
              <p class="text-xs text-gray-500 mt-0.5">Flagship showroom at Uttara, Dhaka — all vehicles verified under one roof</p>
            </div>
            <a href="#inventory" class="text-xs font-bold text-[#1374dd] hover:underline">Showroom Directory &rarr;</a>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            ${dealerships.map(deal => `
              <div class="p-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:shadow-md transition-all">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="font-bold text-sm text-gray-900">${deal.name}</h3>
                  <span class="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">★ ${deal.rating}</span>
                </div>
                <p class="text-xs text-gray-600 mb-3 flex items-start gap-1">
                  <i class="fa-solid fa-location-dot text-[#34723e] mt-0.5"></i>
                  <span>${deal.address}</span>
                </p>
                <div class="flex items-center justify-between text-xs pt-2 border-t border-gray-200">
                  <span class="text-gray-500 font-medium">${deal.carsCount} Vehicles in Stock</span>
                  <a href="tel:${deal.phone}" class="font-bold text-[#1374dd] hover:underline">${deal.phone}</a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- 7. BANK LOAN & FINANCING BANNER -->
      <section class="pb-12 px-4">
        <div class="max-w-7xl mx-auto rounded-2xl bg-[#34723e] text-white p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div class="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10 blur-2xl"></div>
          <div class="relative z-10 max-w-2xl">
            <span class="text-xs font-bold uppercase tracking-widest text-green-200 block mb-2">DHAKA AUTOS Financial Services</span>
            <h2 class="text-2xl sm:text-4xl font-extrabold mb-3 leading-tight">Need a Bank Loan to Buy Your Next Car?</h2>
            <p class="text-xs sm:text-sm text-green-100 mb-6 leading-relaxed">
              Calculate your monthly installments with Bangladesh bank interest rates (City Bank, BRAC Bank, Eastern Bank, IDLC) and get pre-approved in 48 hours.
            </p>
            <div class="flex flex-wrap gap-3">
              <a href="#finance" class="bg-white text-[#34723e] font-bold text-xs px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition-colors">
                Calculate Auto Loan EMI &rarr;
              </a>
              <button type="button" data-open-admin class="bg-[#275930] text-white border border-green-400 font-bold text-xs px-6 py-3 rounded-lg hover:bg-green-800 transition-colors">
                Sell Your Vehicle Fast
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
    `;
  },

  initEvents() {
    // 1. Car card bookmark listeners
    if (Garirbazar.CarCard && Garirbazar.CarCard.initCardEvents) {
      Garirbazar.CarCard.initCardEvents();
    }

    // 2. Search filter events (hero box)
    if (Garirbazar.SearchFilters && Garirbazar.SearchFilters.initEvents) {
      Garirbazar.SearchFilters.initEvents();
    }

    // 3. Home filter pills
    document.querySelectorAll('.home-filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.home-filter-pill').forEach(p => {
          p.classList.remove('active', 'bg-[#34723e]', 'text-white');
          p.classList.add('bg-white', 'border', 'border-gray-200', 'text-gray-700');
        });
        pill.classList.add('active', 'bg-[#34723e]', 'text-white');
        pill.classList.remove('bg-white', 'border', 'border-gray-200', 'text-gray-700');

        const filter = pill.getAttribute('data-filter');
        const grid = document.getElementById('home-cars-grid');
        if (!grid) return;

        let filtered = Garirbazar.cars;
        if (filter === 'Toyota' || filter === 'Honda') {
          filtered = Garirbazar.cars.filter(c => c.brand.toLowerCase() === filter.toLowerCase());
        } else if (filter === 'Reconditioned') {
          filtered = Garirbazar.cars.filter(c => c.condition === 'Reconditioned');
        } else if (filter === 'Hybrid') {
          filtered = Garirbazar.cars.filter(c => c.fuelType.includes('Hybrid'));
        }

        grid.innerHTML = filtered.slice(0, 8).map((c, i) => Garirbazar.CarCard.render(c, i)).join('');
        if (Garirbazar.CarCard.initCardEvents) Garirbazar.CarCard.initCardEvents();
      });
    });

    // 4. Brand card click
    document.querySelectorAll('.home-brand-card').forEach(card => {
      card.addEventListener('click', () => {
        const brand = card.getAttribute('data-brand');
        if (brand) {
          Garirbazar.state.filters.brand = brand;
          window.location.hash = '#inventory';
        }
      });
    });

    // 5. Featured category cards -> open inventory for that category
    document.querySelectorAll('.home-cat-card').forEach(card => {
      card.addEventListener('click', () => {
        const cat = card.getAttribute('data-cat');
        if (cat && Garirbazar.App && Garirbazar.App.setCategory) {
          Garirbazar.App.setCategory(cat);
        }
      });
    });
  }
};