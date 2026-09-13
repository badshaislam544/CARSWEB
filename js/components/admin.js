// ============================================
// DHAKA AUTOS — Admin Actions Component
// Single-company model: only the authorized admin
// can add / manage vehicle listings on the site.
// The Add-Listing form lives on a dedicated page
// (route #admin-add) — no popup modal.
// ============================================

window.DriveX = window.DriveX || {};
window.Garirbazar = window.DriveX;

Garirbazar.Admin = {
  // Global delegation: any element with [data-open-admin] routes to the
  // dedicated Add Listing page. Works across every re-render.
  setup() {
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-open-admin]');
      if (trigger) {
        e.preventDefault();

        // Optionally pre-fill the vehicle category from the trigger
        const cat = trigger.getAttribute('data-cat');
        if (cat && ['cars', 'bikes', 'trucks'].includes(cat)) {
          Garirbazar.state.prefillCat = cat;
        }

        window.location.hash = '#admin-add';
      }
    });
  },

  // Publish a listing directly from the dedicated page form
  handleSubmit() {
    const read = (id) => {
      const el = document.getElementById(id);
      return el ? el.value : '';
    };

    const vehicle = Garirbazar.addVehicle({
      category: read('admin-cat') || 'cars',
      brand: read('admin-brand'),
      model: read('admin-model'),
      year: read('admin-year'),
      price: read('admin-price'),
      originalPrice: read('admin-original-price'),
      mileage: read('admin-milage'),
      fuelType: read('admin-fuel'),
      transmission: read('admin-trans'),
      condition: read('admin-cond'),
      engine: read('admin-engine'),
      color: read('admin-color'),
      imageUrl: read('admin-img'),
      features: read('admin-features'),
      description: read('admin-desc')
    });

    this.toast(`Listing " ${vehicle.brand} ${vehicle.model}" ${Garirbazar.t('published')} ✓`);

    // Navigate to the inventory manager so the new listing is visible immediately
    window.location.hash = '#admin';
  },

  toast(message, type = 'success') {
    const existing = document.getElementById('vs-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'vs-toast';
    toast.className = 'vs-toast ' + type;
    toast.innerHTML = `<i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}"></i><span>${message}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('out');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
};