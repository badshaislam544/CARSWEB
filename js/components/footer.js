// ============================================
// DHAKA AUTOS — Footer Component (bilingual)
// ============================================

window.DriveX = window.DriveX || {};
window.Garirbazar = window.DriveX;

Garirbazar.Footer = {
  render() {
    const t = Garirbazar.t;

    return `
    <footer class="bg-[#111827] text-gray-300 mt-16 border-t border-gray-800">
      
      <!-- Top Hotline & Newsletter Strip -->
      <div class="border-b border-gray-800 py-8 bg-[#0b0f19]">
        <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-4 text-center md:text-left">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#34723e] to-[#4fb25f] flex items-center justify-center text-white text-xl">
              <i class="fa-solid fa-headset"></i>
            </div>
            <div>
              <span class="text-xs text-gray-400 block uppercase tracking-wider">DHAKA AUTOS Customer Support</span>
              <a href="tel:+880164772206" class="text-xl font-bold text-white hover:text-[#4fb25f] transition-colors">01647-712206</a>
              <span class="block text-[10px] text-gray-500 mt-1 flex items-center justify-center gap-1">
                <i class="fa-solid fa-location-dot text-[#4fb25f]"></i>
                ${Garirbazar.state.showroomLocation} — ${t('flagship')}
              </span>
            </div>
          </div>

          <!-- Quick Subscribe -->
          <div class="w-full md:w-auto flex flex-col sm:flex-row gap-2">
            <input type="email" placeholder="${t('subscribePlaceholder')}" class="bg-gray-800 text-xs px-4 py-2.5 rounded-md border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#34723e] w-full sm:w-72">
            <button class="af-btn green sm whitespace-nowrap">${t('subscribeFree')}</button>
          </div>
        </div>
      </div>

      <!-- Main Footer Columns -->
      <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          
          <!-- Column 1: Popular Cars in BD -->
          <div>
            <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">${t('popularInBD')}</h4>
            <ul class="space-y-2 text-xs text-gray-400">
              <li><a href="#inventory" class="hover:text-[#4fb25f]">Toyota Premio for Sale</a></li>
              <li><a href="#inventory" class="hover:text-[#4fb25f]">Toyota Allion A15 Price</a></li>
              <li><a href="#inventory" class="hover:text-[#4fb25f]">Toyota Corolla Cross Hybrid</a></li>
              <li><a href="#inventory" class="hover:text-[#4fb25f]">Toyota Prado TX-L in Dhaka</a></li>
              <li><a href="#inventory" class="hover:text-[#4fb25f]">Honda Vezel e:HEV Z Package</a></li>
              <li><a href="#inventory" class="hover:text-[#4fb25f]">Toyota Noah Family MPV</a></li>
              <li><a href="#inventory" class="hover:text-[#4fb25f]">BYD Electric Cars in Bangladesh</a></li>
            </ul>
          </div>

          <!-- Column 2: Vehicle Categories -->
          <div>
            <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">${t('vehicleCategories')}</h4>
            <ul class="space-y-2 text-xs text-gray-400">
              <li><a href="#inventory" class="hover:text-[#4fb25f]">Reconditioned Cars (Japan Import)</a></li>
              <li><a href="#inventory" class="hover:text-[#4fb25f]">Used / Second Hand Cars</a></li>
              <li><a href="#inventory" class="hover:text-[#4fb25f]">Brand New Cars in Dhaka</a></li>
              <li><a href="#inventory" class="hover:text-[#4fb25f]">Motorbikes & Scooters</a></li>
              <li><a href="#inventory" class="hover:text-[#4fb25f]">Commercial Trucks & Pickups</a></li>
              <li><a href="#admin" class="hover:text-[#4fb25f]">Sell Your Car to DHAKA AUTOS</a></li>
              <li><a href="#blog" class="hover:text-[#4fb25f]">Journal & Trust Guides</a></li>
            </ul>
          </div>

          <!-- Column 3: Locations & Showrooms -->
          <div>
            <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">${t('majorLocations')}</h4>
            <ul class="space-y-2 text-xs text-gray-400">
              <li><a href="#inventory" class="hover:text-[#4fb25f]">DHAKA AUTOS Flagship Showroom — Uttara</a></li>
              <li class="flex items-start gap-1.5 pt-1">
                <i class="fa-solid fa-location-dot text-[#4fb25f] mt-0.5"></i>
                <span>House 7, Road 3, Sector 7, Uttara, Dhaka</span>
              </li>
              <li class="flex items-start gap-1.5 text-gray-500">
                <i class="fa-regular fa-clock text-[#4fb25f] mt-0.5"></i>
                <span>Open Daily 9:00 AM – 8:00 PM</span>
              </li>
              <li class="pt-1"><a href="#inventory" class="hover:text-[#4fb25f]">Tejgaon Commercial Division</a></li>
            </ul>
          </div>

          <!-- Column 4: Services & Trust -->
          <div>
            <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">${t('services')}</h4>
            <ul class="space-y-2 text-xs text-gray-400">
              <li><a href="#finance" class="hover:text-[#4fb25f]">Car Loan / EMI Calculator</a></li>
              <li><a href="#compare" class="hover:text-[#4fb25f]">Compare Vehicle Specs</a></li>
              <li><a href="#blog" class="hover:text-[#4fb25f]">Paper Verification Guides</a></li>
              <li><a href="#dashboard" class="hover:text-[#4fb25f]">Test Drive Booking</a></li>
              <li><a href="#admin" class="hover:text-[#4fb25f]">Buy Back & Exchange Programme</a></li>
            </ul>
          </div>

        </div>

        <!-- Trust & Assurance Strip -->
        <div class="rounded-xl bg-white/5 border border-gray-800 p-6 grid grid-cols-1 sm:grid-cols-3 gap-5 text-center mb-10">
          <div class="flex items-center gap-3 justify-center">
            <i class="fa-solid fa-shield-halved text-green-400 text-xl"></i>
            <span class="text-xs text-gray-300 font-semibold">100% Paper Verified — BRTA Tax Token, Fitness & Registration Fully Checked</span>
          </div>
          <div class="flex items-center gap-3 justify-center">
            <i class="fa-solid fa-magnifying-glass-chart text-green-400 text-xl"></i>
            <span class="text-xs text-gray-300 font-semibold">Full Inspection Report on Every Showroom Vehicle</span>
          </div>
          <div class="flex items-center gap-3 justify-center">
            <i class="fa-solid fa-handshake text-green-400 text-xl"></i>
            <span class="text-xs text-gray-300 font-semibold">Test Drive & Ownership Transfer Support Included</span>
          </div>
        </div>

        <!-- Copyright & Legal -->
        <div class="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 DHAKA AUTOS — Elite Automotive Marketplace. All rights reserved. Quality assured, papers verified, honest prices.</p>
          <div class="flex items-center gap-4">
            <a href="#" class="hover:underline">Privacy Policy</a>
            <a href="#" class="hover:underline">Terms of Service</a>
            <a href="#" class="hover:underline">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
    `;
  },

  init() {}
};