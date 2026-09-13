// ============================================
// DHAKA AUTOS — Premium Car Showroom in Bangladesh
// Vehicle Card Component
// ============================================

window.DriveX = window.DriveX || {};
window.Garirbazar = window.DriveX;

Garirbazar.CarCard = {
  render(car, index = 0) {
    const isFav = Garirbazar.state.favorites.has(car.id);
    const condClass = car.condition === 'Reconditioned' ? 'reconditioned' : car.condition === 'New' ? 'new' : 'used';
    const formattedPrice = Garirbazar.formatPrice(car.price);
    const imageCount = (car.images && car.images.length) || 4;

    return `
    <div class="gb-car-card group" id="vehicle-card-${car.id}">
      
      <!-- Top Image Wrapper -->
      <div class="gb-card-img-wrap">
        <a href="#car-${car.id}">
          <img src="${car.images[0]}" alt="${car.brand} ${car.model} in Bangladesh" class="gb-card-img" loading="lazy">
        </a>

        <!-- Condition & Seller Tags -->
        <div class="card-tags">
          <span class="tag-condition ${condClass}">${Garirbazar.conditionLabel(car.condition)}</span>
          <span class="tag-seller">${car.sellerType}</span>
        </div>

        <!-- Image Counter Badge -->
        <div class="img-counter-badge">
          <i class="fa-solid fa-camera"></i>
          <span>${imageCount}</span>
        </div>

        <!-- Wishlist Bookmark Button -->
        <button class="bookmark-btn ${isFav ? 'saved' : ''} card-bookmark-trigger" data-id="${car.id}" title="${Garirbazar.t('saveWishlist')}">
          ${isFav ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>'}
        </button>
      </div>

      <!-- Card Body -->
      <div class="gb-card-body">
        
        <!-- Title — wraps cleanly, clamped to 2 lines by CSS -->
        <h3 class="gb-card-title" title="${car.year} ${car.brand} ${car.model}">
          <a href="#car-${car.id}">${car.year} ${car.brand} ${car.model}</a>
        </h3>

        <!-- Location — fixed permanent company showroom -->
        <div class="gb-card-location">
          <i class="fa-solid fa-location-dot"></i>
          <span class="truncate">${Garirbazar.state.showroomLocation}</span>
        </div>

        <!-- Specs Row (Mileage, Fuel, Transmission) -->
        <div class="gb-card-specs">
          <div class="gb-card-spec-item" title="Mileage">
            <i class="fa-solid fa-bolt"></i>
            <span>${Garirbazar.formatNumber(car.mileage)} km</span>
          </div>
          <div class="gb-card-spec-item" title="Fuel Type">
            <i class="fa-solid fa-gas-pump"></i>
            <span>${car.fuelType}</span>
          </div>
          <div class="gb-card-spec-item" title="Transmission">
            <i class="fa-solid fa-gear"></i>
            <span>${car.transmission}</span>
          </div>
        </div>

        <!-- Price & Action — pinned to card bottom via CSS -->
        <div class="gb-card-footer">
          <div>
            <div class="gb-card-price">${formattedPrice}</div>
            ${car.originalPrice > car.price ? `
              <span class="gb-card-old-price">${Garirbazar.formatPrice(car.originalPrice)}</span>
            ` : ''}
          </div>

          <a href="#car-${car.id}" class="af-btn sm blue">
            ${Garirbazar.t('viewAd')} &rarr;
          </a>
        </div>

      </div>
    </div>
    `;
  },

  initCardEvents() {
    // Wishlist bookmark clicks
    document.querySelectorAll('.card-bookmark-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const id = parseInt(btn.getAttribute('data-id'));
        Garirbazar.toggleFavorite(id);
        const isFav = Garirbazar.state.favorites.has(id);
        btn.innerHTML = isFav ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>';
        btn.classList.toggle('saved', isFav);

        // Update header count
        const headerCount = document.getElementById('header-fav-count');
        if (headerCount) {
          headerCount.textContent = Garirbazar.state.favorites.size;
        }
      });
    });
  }
};
