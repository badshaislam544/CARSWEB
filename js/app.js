// ============================================
// DHAKA AUTOS — Premium Car Showroom in Bangladesh
// Main Application & SPA Router
// ============================================

window.DriveX = window.DriveX || {};
window.Garirbazar = window.DriveX;

Garirbazar.App = {
  init() {
    console.log('🚀 Initializing DHAKA AUTOS Application...');

    // 0. Apply the active language to the document (sets <html lang> + body.lang-bn)
    if (Garirbazar.i18n) Garirbazar.i18n.setLanguage(Garirbazar.state.language);

    // 1. Render Global Shell (Header & Footer)
    this.renderShell();

    // 1b. Wire the Admin "Add Listing" modal triggers (delegated globally)
    if (Garirbazar.Admin) Garirbazar.Admin.setup();

    // 2. Setup Router Listener
    window.addEventListener('hashchange', () => this.handleRoute());
    
    // 3. Render Initial Route
    this.handleRoute();

    // 3b. Welcome Demo Popup (appears once per page load)
    if (Garirbazar.WelcomePopup) Garirbazar.WelcomePopup.init();

    // 4. Register PWA Service Worker if available
    this.registerServiceWorker();

    console.log('✅ DHAKA AUTOS App Ready!');
  },

  renderShell() {
    const headerSlot = document.getElementById('header-slot');
    const footerSlot = document.getElementById('footer-slot');

    if (headerSlot && Garirbazar.Header) {
      headerSlot.innerHTML = Garirbazar.Header.render();
      if (Garirbazar.Header.init) Garirbazar.Header.init();
    }

    if (footerSlot && Garirbazar.Footer) {
      footerSlot.innerHTML = Garirbazar.Footer.render();
      if (Garirbazar.Footer.init) Garirbazar.Footer.init();
    }
  },

  handleRoute() {
    const hash = window.location.hash.replace(/^#\/?/, '') || 'home';
    const pageContainer = document.getElementById('page-container');
    if (!pageContainer) return;

    // Smooth subtle opacity transition
    pageContainer.style.opacity = '0';
    pageContainer.style.transition = 'opacity 150ms ease';

    setTimeout(() => {
      let pageModule = null;
      let routeName = hash;

      if (hash === 'home' || hash === '') {
        pageModule = Garirbazar.pages.Home;
        routeName = 'home';
      } else if (hash.startsWith('inventory')) {
        pageModule = Garirbazar.pages.Inventory;
        routeName = 'inventory';
      } else if (hash.startsWith('car-')) {
        const carId = hash.replace('car-', '');
        pageModule = Garirbazar.pages.CarDetails;
        routeName = 'carDetails';
        pageContainer.innerHTML = pageModule.render(carId);
        if (pageModule.initEvents) pageModule.initEvents();
      } else if (hash.startsWith('admin-add') || hash.startsWith('sell-add')) {
        // Dedicated full-screen Add Listing page
        if (!Garirbazar.isAdmin) { window.location.hash = '#home'; return; }
        pageModule = Garirbazar.pages.AddVehicle || Garirbazar.pages.AdminPage;
        routeName = 'admin-add';
      } else if (hash.startsWith('admin') || hash.startsWith('sell')) {
        // Single-company admin listings manager (replaces the old marketplace sell page)
        if (!Garirbazar.isAdmin) { window.location.hash = '#home'; return; }
        pageModule = Garirbazar.pages.AdminPage || Garirbazar.pages.SellCar;
        routeName = 'admin';
      } else if (hash.startsWith('compare')) {
        pageModule = Garirbazar.pages.Compare;
        routeName = 'compare';
      } else if (hash.startsWith('finance')) {
        pageModule = Garirbazar.pages.Finance;
        routeName = 'finance';
      } else if (hash.startsWith('dashboard')) {
        pageModule = Garirbazar.pages.Dashboard;
        routeName = 'dashboard';
      } else if (hash.startsWith('blog')) {
        pageModule = Garirbazar.pages.Blog;
        routeName = 'blog';
      } else {
        pageModule = Garirbazar.pages.Home;
        routeName = 'home';
      }

      Garirbazar.state.currentPage = routeName;

      if (!hash.startsWith('car-') && pageModule) {
        pageContainer.innerHTML = pageModule.render();
        if (pageModule.initEvents) pageModule.initEvents();
      }

      // Update Nav active indicator
      if (Garirbazar.Header && Garirbazar.Header.updateActiveNav) {
        Garirbazar.Header.updateActiveNav();
      }

      // Reset scroll position
      window.scrollTo({ top: 0, behavior: 'instant' });

      // Fade in
      pageContainer.style.opacity = '1';
    }, 100);
  },

  // Centralized category switching — keeps header nav, sidebar filters,
  // and inventory grid in perfect sync wherever it's triggered from.
  setCategory(cat) {
    if (!['cars', 'bikes', 'trucks'].includes(cat)) return;

    const filters = Garirbazar.state.filters;
    filters.category = cat;
    filters.brand = '';
    filters.model = '';
    filters.condition = '';
    filters.city = '';
    filters.fuelType = '';
    filters.priceMin = '';
    filters.priceMax = '';
    filters.transmission = '';
    Garirbazar.state.activeCategory = cat;
    Garirbazar.state.searchQuery = '';

    if (Garirbazar.state.currentPage === 'inventory' && Garirbazar.pages.Inventory) {
      Garirbazar.pages.Inventory.refreshList();
    } else {
      window.location.hash = '#inventory';
    }

    if (Garirbazar.Header && Garirbazar.Header.updateActiveNav) {
      Garirbazar.Header.updateActiveNav();
    }
  },

  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
          .catch(() => {});
      });
    }
  }
};

// Auto boot
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => Garirbazar.App.init());
} else {
  Garirbazar.App.init();
}
