// ============================================
// DHAKA AUTOS — Premium Car Showroom in Bangladesh
// Showroom Dashboard Component
// ============================================

window.DriveX = window.DriveX || {};
DriveX.pages = DriveX.pages || {};

DriveX.pages.Dashboard = {
  activeTab: 'favorites', // 'favorites', 'listings', 'messages', 'analytics', 'settings'

  render() {
    // If no favorites, populate 2 by default for a beautiful initial experience
    if (DriveX.state.favorites.size === 0) {
      DriveX.state.favorites.add(1);
      DriveX.state.favorites.add(3);
    }

    const favCars = Array.from(DriveX.state.favorites).map(id => DriveX.getCarById(id)).filter(Boolean);

    return `
    <div id="page-dashboard" class="pt-24 pb-20 min-h-screen">
      <div class="max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- User Profile Banner -->
        <div class="glass-card p-6 sm:p-8 rounded-3xl mb-8 border border-white/10 relative overflow-hidden">
          <div class="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 relative z-10">
            <div class="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-[#34723e] to-[#4fb25f] flex items-center justify-center text-white text-3xl font-black shadow-xl shadow-[#34723e]/30">
                DA
              </div>
              <div>
                <div class="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <h1 class="text-2xl sm:text-3xl font-black">DHAKA AUTOS</h1>
                  <span class="badge badge-verified text-xs">Verified Showroom</span>
                </div>
                <p class="text-xs opacity-60">info@dhakautos.com • Uttara, Dhaka</p>
                <div class="flex items-center gap-4 mt-3 text-xs">
                  <span class="text-green-400 font-semibold">● BRTA Certified</span>
                  <span class="text-[#ffd700] font-semibold">★ 4.9 Customer Rating</span>
                  <span class="opacity-60">120+ Cars Delivered</span>
                </div>
              </div>
            </div>

            <div class="flex gap-3">
              <button type="button" data-open-admin class="btn-primary py-3 px-6 rounded-2xl text-xs font-bold shadow-lg shadow-[#ff6b00]/20 flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                Add New Vehicle
              </button>
            </div>
          </div>

          <!-- Quick Metrics Bar -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10 text-center">
            <div class="p-3 bg-white/5 rounded-2xl">
              <span class="text-2xl font-black text-white">${favCars.length}</span>
              <p class="text-xs opacity-50 mt-1">Saved Favorites</p>
            </div>
            <div class="p-3 bg-white/5 rounded-2xl">
              <span class="text-2xl font-black text-white">2</span>
              <p class="text-xs opacity-50 mt-1">Active Vehicles</p>
            </div>
            <div class="p-3 bg-white/5 rounded-2xl">
              <span class="text-2xl font-black text-[#ff6b00]">3</span>
              <p class="text-xs opacity-50 mt-1">Pending Inquiries</p>
            </div>
            <div class="p-3 bg-white/5 rounded-2xl">
              <span class="text-2xl font-black text-[#ffd700]">৳ 2.1 Cr</span>
              <p class="text-xs opacity-50 mt-1">Garage Valuation</p>
            </div>
          </div>
        </div>

        <!-- Dashboard Tabs Navigation -->
        <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-white/10">
          <button class="dash-tab-btn px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${this.activeTab === 'favorites' ? 'bg-[#ff6b00] text-white shadow-lg' : 'glass hover:bg-white/10'}" data-tab="favorites">
            Favorites (${favCars.length})
          </button>
          <button class="dash-tab-btn px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${this.activeTab === 'listings' ? 'bg-[#ff6b00] text-white shadow-lg' : 'glass hover:bg-white/10'}" data-tab="listings">
            My Listings (2)
          </button>
          <button class="dash-tab-btn px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${this.activeTab === 'messages' ? 'bg-[#ff6b00] text-white shadow-lg' : 'glass hover:bg-white/10'}" data-tab="messages">
            Messages <span class="ml-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] inline-flex items-center justify-center font-bold">3</span>
          </button>
          <button class="dash-tab-btn px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${this.activeTab === 'analytics' ? 'bg-[#ff6b00] text-white shadow-lg' : 'glass hover:bg-white/10'}" data-tab="analytics">
            Analytics & Insights
          </button>
          <button class="dash-tab-btn px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${this.activeTab === 'settings' ? 'bg-[#ff6b00] text-white shadow-lg' : 'glass hover:bg-white/10'}" data-tab="settings">
            Account Settings
          </button>
        </div>

        <!-- Tab 1: Saved Favorites -->
        <div id="tab-panel-favorites" class="dash-panel ${this.activeTab === 'favorites' ? 'block' : 'hidden'}">
          ${favCars.length === 0 ? `
            <div class="glass-card p-12 rounded-3xl text-center">
              <p class="text-sm opacity-60 mb-4">You have not favorited any luxury vehicles yet.</p>
              <a href="#inventory" class="btn-primary py-3 px-6 rounded-xl text-xs font-bold inline-block">Browse Showroom</a>
            </div>
          ` : `
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              ${favCars.map((car, i) => DriveX.CarCard.render(car, i)).join('')}
            </div>
          `}
        </div>

        <!-- Tab 2: My Listings -->
        <div id="tab-panel-listings" class="dash-panel ${this.activeTab === 'listings' ? 'block' : 'hidden'} space-y-4">
          <div class="glass-card p-6 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex items-center gap-4 w-full md:w-auto">
              <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80" class="w-24 h-16 rounded-2xl object-cover">
              <div>
                <span class="badge badge-hot text-[10px] mb-1">Active Listing</span>
                <h4 class="font-bold text-base">2020 Toyota Allion A15 G Plus</h4>
                <p class="text-xs opacity-50">42,000 km • Listed for 32.5 Lakh BDT</p>
              </div>
            </div>
            <div class="flex items-center gap-3 w-full md:w-auto justify-end">
              <span class="text-xs text-green-400 font-semibold">18 Inquiries (3 Unread)</span>
              <a href="#car-2" class="px-4 py-2 rounded-xl glass text-xs font-bold hover:bg-white/10">View Live</a>
              <button class="px-4 py-2 rounded-xl bg-[#ff6b00]/10 text-[#ff6b00] text-xs font-bold hover:bg-[#ff6b00] hover:text-white transition-colors">Edit</button>
            </div>
          </div>

          <div class="glass-card p-6 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex items-center gap-4 w-full md:w-auto">
              <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80" class="w-24 h-16 rounded-2xl object-cover">
              <div>
                <span class="badge badge-new text-[10px] mb-1">Under Inspection</span>
                <h4 class="font-bold text-base">2021 Toyota Premio F EX Package</h4>
                <p class="text-xs opacity-50">28,000 km • Listed for 36.5 Lakh BDT</p>
              </div>
            </div>
            <div class="flex items-center gap-3 w-full md:w-auto justify-end">
              <span class="text-xs opacity-50">Scheduled with master tech</span>
              <button class="px-4 py-2 rounded-xl bg-white/5 text-xs font-bold opacity-60">Pending Cert</button>
            </div>
          </div>
        </div>

        <!-- Tab 3: Messages -->
        <div id="tab-panel-messages" class="dash-panel ${this.activeTab === 'messages' ? 'block' : 'hidden'}">
          ${DriveX.Messaging ? DriveX.Messaging.render() : ''}
        </div>

        <!-- Tab 4: Analytics -->
        <div id="tab-panel-analytics" class="dash-panel ${this.activeTab === 'analytics' ? 'block' : 'hidden'} space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="glass-card p-6 rounded-3xl">
              <span class="text-xs opacity-50 uppercase font-bold">Total Listing Impressions</span>
              <h3 class="text-3xl font-black mt-2 text-white">14,290</h3>
              <p class="text-xs text-green-400 mt-1">↑ +24% vs last 30 days</p>
            </div>
            <div class="glass-card p-6 rounded-3xl">
              <span class="text-xs opacity-50 uppercase font-bold">Test Drive Inquiries</span>
              <h3 class="text-3xl font-black mt-2 text-white">32</h3>
              <p class="text-xs text-green-400 mt-1">↑ 8 Qualified Pre-Approvals</p>
            </div>
            <div class="glass-card p-6 rounded-3xl">
              <span class="text-xs opacity-50 uppercase font-bold">Average Days on Market</span>
              <h3 class="text-3xl font-black mt-2 text-[#ffd700]">9.4 Days</h3>
              <p class="text-xs opacity-50 mt-1">Industry avg: 38 days</p>
            </div>
          </div>
        </div>

        <!-- Tab 5: Settings -->
        <div id="tab-panel-settings" class="dash-panel ${this.activeTab === 'settings' ? 'block' : 'hidden'}">
          <div class="glass-card p-8 rounded-3xl max-w-2xl space-y-6 border border-white/10">
            <h3 class="text-xl font-bold border-b border-white/10 pb-4">Personal Information</h3>
            <div class="space-y-4">
              <div>
                <label class="text-xs font-bold uppercase opacity-60 mb-1 block">Full Name</label>
                <input type="text" value="DHAKA AUTOS" class="form-input text-sm py-2.5 px-3 w-full">
              </div>
              <div>
                <label class="text-xs font-bold uppercase opacity-60 mb-1 block">Email Address</label>
                <input type="email" value="info@dhakautos.com" class="form-input text-sm py-2.5 px-3 w-full">
              </div>
              <div>
                <label class="text-xs font-bold uppercase opacity-60 mb-1 block">Phone Number</label>
                <input type="tel" value="01647-712206" class="form-input text-sm py-2.5 px-3 w-full">
              </div>
              <div>
                <label class="text-xs font-bold uppercase opacity-60 mb-1 block">Preferred Currency</label>
                <select class="form-input text-sm py-2.5 px-3 w-full">
                  <option>BDT (৳)</option>
                  <option>USD ($)</option>
                </select>
              </div>
            </div>
            <button class="btn-primary py-3 px-8 rounded-xl font-bold text-xs">Save Changes</button>
          </div>
        </div>

      </div>
    </div>
    `;
  },

  initEvents() {
    // 1. Car Card favorites listeners
    if (DriveX.CarCard && DriveX.CarCard.initCardEvents) {
      DriveX.CarCard.initCardEvents();
    }

    // 2. Messaging events (if messages tab active)
    if (DriveX.Messaging && DriveX.Messaging.initEvents) {
      DriveX.Messaging.initEvents();
    }

    // 3. Tab switching
    document.querySelectorAll('.dash-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeTab = btn.getAttribute('data-tab');
        const pageContainer = document.getElementById('page-container');
        if (pageContainer) {
          pageContainer.innerHTML = this.render();
          this.initEvents();
        }
      });
    });
  }
};
