// ============================================
// DHAKA AUTOS — Premium Car Showroom in Bangladesh
// Compare Page Component
// ============================================

window.DriveX = window.DriveX || {};
window.Garirbazar = window.DriveX;
Garirbazar.pages = Garirbazar.pages || {};

Garirbazar.pages.Compare = {
  render() {
    if (!Garirbazar.state.compareList || Garirbazar.state.compareList.length === 0) {
      Garirbazar.state.compareList = [1, 2];
    }

    const comparedCars = Garirbazar.state.compareList.map(id => Garirbazar.getCarById(id)).filter(Boolean);
    const availableCars = Garirbazar.cars.filter(c => !Garirbazar.state.compareList.includes(c.id));

    return `
    <div id="page-compare" class="py-8 bg-[#f4f6f9] min-h-screen">
      <div class="max-w-7xl mx-auto px-4">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-200">
          <div>
            <h1 class="text-2xl sm:text-3xl font-black text-gray-900">Compare Cars in Bangladesh</h1>
            <p class="text-xs text-gray-500 mt-0.5">Compare prices, engine capacity, fuel economy and specs side-by-side</p>
          </div>
          <a href="#inventory" class="af-btn outline sm font-bold">
            + Add Another Vehicle
          </a>
        </div>

        <!-- Compared Vehicle Cards Bar -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          ${[0, 1, 2].map(idx => {
            const car = comparedCars[idx];
            if (car) {
              return `
              <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm relative group">
                <button class="remove-compare-btn absolute top-3 right-3 w-7 h-7 rounded-full bg-gray-100 text-gray-600 hover:bg-red-600 hover:text-white flex items-center justify-center text-xs font-bold transition-colors" data-id="${car.id}">✕</button>
                <div class="aspect-[16/10] rounded-lg overflow-hidden mb-3">
                  <img src="${car.images[0]}" alt="${car.brand} ${car.model}" class="w-full h-full object-cover">
                </div>
                <span class="tag-condition ${car.condition === 'Reconditioned' ? 'reconditioned' : 'used'} text-[10px] mb-1 inline-block">${car.condition}</span>
                <h3 class="font-bold text-sm text-gray-900 truncate">${car.year} ${car.brand} ${car.model}</h3>
                <div class="text-lg font-black text-[#34723e] mt-1">${Garirbazar.formatPrice(car.price)}</div>
                <a href="#car-${car.id}" class="af-btn sm blue w-full mt-3">View Vehicle Details</a>
              </div>
              `;
            } else {
              return `
              <div class="bg-white border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center">
                <span class="text-2xl mb-2 text-gray-400">+</span>
                <h4 class="font-bold text-xs text-gray-700 mb-1">Add Vehicle to Compare</h4>
                <select class="add-compare-select gb-input text-xs py-1.5 mt-2 max-w-xs">
                  <option value="">Choose a car...</option>
                  ${availableCars.map(c => `<option value="${c.id}">${c.year} ${c.brand} ${c.model} (${Garirbazar.formatPrice(c.price)})</option>`).join('')}
                </select>
              </div>
              `;
            }
          }).join('')}
        </div>

        <!-- Comparison Table -->
        <div class="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <div class="p-4 bg-gray-50 border-b border-gray-200 font-bold text-xs uppercase tracking-wider text-gray-700">
            Side-by-Side Comparison Matrix
          </div>
          <table class="w-full text-left text-xs">
            <tbody class="divide-y divide-gray-100">
              <tr>
                <td class="p-3.5 font-bold text-gray-500 w-1/4">Price</td>
                ${comparedCars.map(c => `<td class="p-3.5 font-black text-sm text-[#34723e]">${Garirbazar.formatPrice(c.price)}</td>`).join('')}
              </tr>
              <tr>
                <td class="p-3.5 font-bold text-gray-500">Condition</td>
                ${comparedCars.map(c => `<td class="p-3.5 font-semibold text-gray-800">${c.condition}</td>`).join('')}
              </tr>
              <tr>
                <td class="p-3.5 font-bold text-gray-500">Engine Capacity</td>
                ${comparedCars.map(c => `<td class="p-3.5 font-semibold text-gray-800">${c.engine}</td>`).join('')}
              </tr>
              <tr>
                <td class="p-3.5 font-bold text-gray-500">Fuel Type</td>
                ${comparedCars.map(c => `<td class="p-3.5 text-gray-800">${c.fuelType}</td>`).join('')}
              </tr>
              <tr>
                <td class="p-3.5 font-bold text-gray-500">Mileage Driven</td>
                ${comparedCars.map(c => `<td class="p-3.5 text-gray-800">${Garirbazar.formatNumber(c.mileage)} km</td>`).join('')}
              </tr>
              <tr>
                <td class="p-3.5 font-bold text-gray-500">Transmission</td>
                ${comparedCars.map(c => `<td class="p-3.5 text-gray-800">${c.transmission}</td>`).join('')}
              </tr>
              <tr>
                <td class="p-3.5 font-bold text-gray-500">Location in BD</td>
                ${comparedCars.map(c => `<td class="p-3.5 text-gray-800">${c.location}</td>`).join('')}
              </tr>
              <tr>
                <td class="p-3.5 font-bold text-gray-500">BRTA Registration</td>
                ${comparedCars.map(c => `<td class="p-3.5 text-gray-800">${c.brtaRegistration || 'Dhaka Metro'}</td>`).join('')}
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
    `;
  },

  initEvents() {
    document.querySelectorAll('.remove-compare-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'));
        Garirbazar.removeFromCompare(id);
        const pageContainer = document.getElementById('page-container');
        if (pageContainer) {
          pageContainer.innerHTML = this.render();
          this.initEvents();
        }
      });
    });

    document.querySelectorAll('.add-compare-select').forEach(select => {
      select.addEventListener('change', (e) => {
        const id = parseInt(e.target.value);
        if (id) {
          Garirbazar.addToCompare(id);
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
