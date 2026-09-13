// ============================================
// DHAKA AUTOS — Premium Car Showroom in Bangladesh
// Vehicle Details Page Component
// ============================================

window.DriveX = window.DriveX || {};
window.Garirbazar = window.DriveX;
Garirbazar.pages = Garirbazar.pages || {};

Garirbazar.pages.CarDetails = {
  currentCarId: 1,

  render(carId = 1) {
    this.currentCarId = parseInt(carId) || 1;
    const car = Garirbazar.getCarById(this.currentCarId) || Garirbazar.cars[0];
    const isFav = Garirbazar.state.favorites.has(car.id);
    const inCompare = Garirbazar.state.compareList.includes(car.id);
    const similarCars = Garirbazar.cars.filter(c => c.id !== car.id && c.category === car.category).slice(0, 4);

    // Bangladeshi bank loan estimation (20% down, 5 years, 9.5% APR)
    const downPayment = Math.round(car.price * 0.2);
    const loanAmount = car.price - downPayment;
    const monthlyRate = 0.095 / 12;
    const termMonths = 60;
    const estMonthly = Math.round((loanAmount * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1));

    return `
    <div id="page-car-details" class="py-8 bg-[#f4f6f9] min-h-screen">
      <div class="max-w-7xl mx-auto px-4">
        
        <!-- Top Header Summary Bar -->
        <div class="bg-white border border-gray-200 rounded-xl p-5 mb-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="tag-condition ${car.condition === 'Reconditioned' ? 'reconditioned' : car.condition === 'New' ? 'new' : 'used'}">${Garirbazar.conditionLabel(car.condition)}</span>
              <span class="text-xs text-gray-500 font-medium">📍 ${Garirbazar.state.showroomLocation}</span>
              <span class="text-xs text-green-700 font-semibold">● Verified Listing</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-black text-gray-900">${car.year} ${car.brand} ${car.model}</h1>
            <p class="text-xs text-gray-500 mt-1">BRTA Registration: <strong class="text-gray-800">${car.brtaRegistration || 'Dhaka Metro'}</strong></p>
          </div>

          <div class="flex flex-col md:items-end">
            <span class="text-2xl sm:text-3xl font-black text-[#34723e]">${Garirbazar.formatPrice(car.price)}</span>
            <span class="text-xs text-gray-500 mt-0.5">Est. EMI: <strong class="text-gray-900">৳ ${Garirbazar.formatNumber(estMonthly)}/mo</strong> (9.5% Bank Loan)</span>
          </div>
        </div>

        <!-- Main Layout: Gallery on Left (8 cols), Contact & Dealer on Right (4 cols) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          
          <!-- LEFT COLUMN: Image Gallery & Specs -->
          <div class="lg:col-span-8 space-y-6">
            
            <!-- Main Showcase Image -->
            <div class="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm aspect-[16/10] relative">
              <img id="detail-main-img" src="${car.images[0]}" alt="${car.brand} ${car.model}" class="w-full h-full object-cover">
              <div class="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-md font-semibold backdrop-blur-sm">
                📷 Verified Vehicle Photos
              </div>
            </div>

            <!-- Thumbnails -->
            <div class="grid grid-cols-4 gap-2">
              ${car.images.map((img, i) => `
                <div class="cursor-pointer rounded-lg overflow-hidden border-2 aspect-[16/10] detail-thumb ${i === 0 ? 'border-[#34723e]' : 'border-transparent opacity-70 hover:opacity-100'}" data-img="${img}">
                  <img src="${img}" class="w-full h-full object-cover">
                </div>
              `).join('')}
            </div>

            <!-- Bangladesh Vehicle Specifications Card -->
            <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 class="text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                <span>📋</span> Key Vehicle Specifications
              </h2>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 text-xs">
                <div>
                  <span class="text-gray-400 block mb-0.5">Engine Capacity</span>
                  <span class="font-bold text-gray-800">${car.engine}</span>
                </div>
                <div>
                  <span class="text-gray-400 block mb-0.5">Mileage Driven</span>
                  <span class="font-bold text-gray-800">${Garirbazar.formatNumber(car.mileage)} km</span>
                </div>
                <div>
                  <span class="text-gray-400 block mb-0.5">Fuel Type</span>
                  <span class="font-bold text-gray-800">${car.fuelType}</span>
                </div>
                <div>
                  <span class="text-gray-400 block mb-0.5">Transmission</span>
                  <span class="font-bold text-gray-800">${car.transmission}</span>
                </div>
                <div>
                  <span class="text-gray-400 block mb-0.5">Tax Token Validity</span>
                  <span class="font-bold text-gray-800">${car.taxTokenValidity || 'Dec 2025'}</span>
                </div>
                <div>
                  <span class="text-gray-400 block mb-0.5">Fitness Validity</span>
                  <span class="font-bold text-gray-800">${car.fitnessValidity || 'Jan 2026'}</span>
                </div>
                <div>
                  <span class="text-gray-400 block mb-0.5">Exterior Color</span>
                  <span class="font-bold text-gray-800">${car.color || 'Pearl White'}</span>
                </div>
                <div>
                  <span class="text-gray-400 block mb-0.5">Condition</span>
                  <span class="font-bold text-gray-800">${Garirbazar.conditionLabel(car.condition)}</span>
                </div>
                <div>
                  <span class="text-gray-400 block mb-0.5">Seller Location</span>
                  <span class="font-bold text-gray-800">${Garirbazar.state.showroomLocation}</span>
                </div>
              </div>
            </div>

            <!-- Features & Installed Options -->
            <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 class="text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                <span>✨</span> Features & Equipment
              </h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                ${(car.features || ['Push Start', 'Optical Meter', 'Back Camera', 'Power Steering', 'ABS & Airbags', 'Alloy Rims']).map(f => `
                  <div class="flex items-center gap-2 text-gray-700">
                    <span class="text-[#34723e] font-bold">✓</span>
                    <span>${f}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Vehicle Description -->
            <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 class="text-base font-bold text-gray-900 mb-3 pb-2 border-b border-gray-100">Seller Notes</h2>
              <p class="text-xs text-gray-600 leading-relaxed">${car.description || 'Very clean vehicle, direct import from Japan with auction sheet verified. Price slightly negotiable.'}</p>
            </div>

          </div>

          <!-- RIGHT COLUMN: Contact Seller & Loan Tools -->
          <div class="lg:col-span-4 space-y-5">
            
            <!-- Seller Profile Card -->
            <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 rounded-xl bg-[#34723e] text-white flex items-center justify-center font-bold text-lg">
                  ${car.sellerName.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <div class="flex items-center gap-1">
                    <h3 class="font-bold text-sm text-gray-900">${car.sellerName}</h3>
                    <span class="text-xs text-green-600 font-bold">✓</span>
                  </div>
                  <span class="text-xs text-gray-500">${car.sellerType}</span>
                </div>
              </div>

              <!-- Phone Call Button -->
              <a href="tel:${car.sellerPhone || '+880164772206'}" class="af-btn green w-full mb-2.5 font-bold shadow-sm flex items-center justify-center gap-2">
                <i class="fa-solid fa-phone"></i>
                <span>Call Showroom: ${car.sellerPhone || '01647-712206'}</span>
              </a>

              <!-- WhatsApp Chat Button -->
              <a href="https://wa.me/880164772206" target="_blank" class="af-btn outline w-full font-bold flex items-center justify-center gap-2">
                <i class="fa-brands fa-whatsapp text-lg"></i>
                <span>Send WhatsApp Inquiry</span>
              </a>

              <div class="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <button id="detail-fav-btn" class="font-semibold text-gray-600 hover:text-red-600 flex items-center gap-1">
                  <span>${isFav ? '❤️ Saved' : '🤍 Save Ad'}</span>
                </button>
                <button id="detail-comp-btn" class="font-semibold text-gray-600 hover:text-[#1374dd] flex items-center gap-1">
                  <span>⚖️ ${inCompare ? 'In Compare' : 'Add to Compare'}</span>
                </button>
              </div>
            </div>

            <!-- Bank Loan Calculator Widget -->
            <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-3">
              <h3 class="font-bold text-sm text-gray-900 flex items-center justify-between border-b border-gray-100 pb-2">
                <span>Bank Loan Estimate</span>
                <span class="text-xs text-[#34723e] font-extrabold">9.5% APR</span>
              </h3>
              
              <div class="text-xs space-y-2">
                <div class="flex justify-between text-gray-600">
                  <span>Vehicle Price:</span>
                  <strong class="text-gray-900">${Garirbazar.formatPrice(car.price)}</strong>
                </div>
                <div class="flex justify-between text-gray-600">
                  <span>Down Payment (20%):</span>
                  <strong class="text-gray-900">৳ ${Garirbazar.formatNumber(downPayment)}</strong>
                </div>
                <div class="flex justify-between text-gray-600">
                  <span>Estimated Loan (80%):</span>
                  <strong class="text-gray-900">৳ ${Garirbazar.formatNumber(loanAmount)}</strong>
                </div>
                <div class="pt-2 border-t border-gray-100 flex justify-between items-center">
                  <span class="font-semibold text-gray-700">Monthly Installment:</span>
                  <span class="text-base font-black text-[#34723e]">৳ ${Garirbazar.formatNumber(estMonthly)}<span class="text-[10px] font-normal text-gray-500">/mo</span></span>
                </div>
              </div>

              <a href="#finance" class="af-btn outline w-full text-xs font-bold mt-2">
                Customize Loan Parameters &rarr;
              </a>
            </div>

            <!-- Safe Buying Tips for Bangladesh -->
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs space-y-2 text-amber-900">
              <h4 class="font-bold flex items-center gap-1">
                <span>🛡️</span> DHAKA AUTOS Safety Tips
              </h4>
              <p>1. Never send advance money via bKash/Nagad before physically inspecting the vehicle.</p>
              <p>2. Verify BRTA registration smart card, fitness, and tax token validity before signing.</p>
              <p>3. Meet the seller at public showrooms or BRTA circle offices for title transfer.</p>
            </div>

          </div>
        </div>

        <!-- Similar Vehicles -->
        <div class="pt-8 border-t border-gray-200">
          <h2 class="text-xl font-bold text-gray-900 mb-4">Similar Vehicles</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            ${similarCars.map((c, i) => Garirbazar.CarCard.render(c, i)).join('')}
          </div>
        </div>

      </div>
    </div>
    `;
  },

  initEvents() {
    const car = Garirbazar.getCarById(this.currentCarId) || Garirbazar.cars[0];

    // Thumbnails click
    document.querySelectorAll('.detail-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        const src = thumb.getAttribute('data-img');
        const mainImg = document.getElementById('detail-main-img');
        if (mainImg && src) mainImg.src = src;

        document.querySelectorAll('.detail-thumb').forEach(t => {
          t.classList.remove('border-[#34723e]');
          t.classList.add('border-transparent', 'opacity-70');
        });
        thumb.classList.add('border-[#34723e]');
        thumb.classList.remove('border-transparent', 'opacity-70');
      });
    });

    // Favorite toggle
    document.getElementById('detail-fav-btn')?.addEventListener('click', () => {
      Garirbazar.toggleFavorite(car.id);
      window.dispatchEvent(new Event('hashchange'));
    });

    // Compare toggle
    document.getElementById('detail-comp-btn')?.addEventListener('click', () => {
      if (Garirbazar.state.compareList.includes(car.id)) {
        Garirbazar.removeFromCompare(car.id);
      } else {
        Garirbazar.addToCompare(car.id);
      }
      window.location.hash = '#compare';
    });
  }
};
