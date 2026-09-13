// ============================================
// DHAKA AUTOS — Welcome Demo Popup Component
// Shows once per page load (demo showcase).
// ============================================

window.DriveX = window.DriveX || {};
window.Garirbazar = window.DriveX;

Garirbazar.WelcomePopup = {
  // Opens WhatsApp chat with the demo studio
  WHATSAPP_URL: 'https://wa.me/8801647712206?text=Hello%20Vareon%20Studio,%20I%20saw%20your%20demo%20website%20and%20want%20to%20know%20more.',

  init() {
    if (document.getElementById('welcome-overlay')) return;

    const overlay = document.createElement('div');
    overlay.className = 'welcome-overlay';
    overlay.id = 'welcome-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML = `
      <div class="welcome-modal" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
        <button type="button" class="welcome-close" id="welcome-close" aria-label="পপআপ বন্ধ করুন">
          <i class="fa-solid fa-xmark"></i>
        </button>

        <!-- Hero Band -->
        <div class="welcome-hero">
          <span class="welcome-badge"><i class="fa-solid fa-circle-check"></i> অফিসিয়াল ডেমো শোকেস</span>
          <div class="welcome-logo"><i class="fa-solid fa-car-side"></i></div>
          <h2 id="welcome-title">DHAKA AUTOS-এ স্বাগতম</h2>
          <p class="welcome-sub">লাইভ ডেমো শোকেস</p>
        </div>

        <!-- Body -->
        <div class="welcome-body">
          <p>
            এটি একটি সম্পূর্ণ কার্যক্ষম প্রোটোটাইপ এবং ডেমো ওয়েবসাইট — তৈরি করেছে <strong>VAREON STUDIO</strong>।
            এই ডিজাইনটি ভালো লাগলে বা আপনার নিজের ব্যবসার জন্য একটি কাস্টমাইজড, প্রফেশনাল ওয়েবসাইট বানাতে চাইলে,
            নির্দ্বিধায় আমাদের সাথে যোগাযোগ করুন!
          </p>

          <a class="welcome-wa-btn"
             href="${this.WHATSAPP_URL}"
             target="_blank" rel="noopener noreferrer"
             aria-label="Vareon Studio-র সাথে WhatsApp-এ চ্যাট শুরু করুন">
            <span class="wa-icon"><i class="fa-brands fa-whatsapp"></i></span>
            <span class="wa-text">
              <strong>WhatsApp-এ যোগাযোগ করুন</strong>
              <small>তাৎক্ষণিক উত্তর পেতে আজই চ্যাট করুন</small>
            </span>
            <span class="wa-arrow"><i class="fa-solid fa-arrow-right"></i></span>
          </a>

          <a class="welcome-continue" href="#" id="welcome-dismiss">ডেমোটি দেখতে থাকুন &rarr;</a>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    const close = () => this.hide(overlay);

    document.getElementById('welcome-close').addEventListener('click', close);
    document.getElementById('welcome-dismiss').addEventListener('click', (e) => {
      e.preventDefault();
      close();
    });
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('show')) close();
    });

    // Smooth reveal shortly after the page finishes painting + lock scroll
    setTimeout(() => {
      overlay.classList.add('show');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        const x = document.getElementById('welcome-close');
        if (x) x.focus();
      });
    }, 650);
  },

  hide(overlay) {
    overlay.classList.remove('show');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => overlay.remove(), 360);
  }
};