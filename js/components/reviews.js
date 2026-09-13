// ============================================
// DriveX Motors — Reviews Component
// ============================================

window.DriveX = window.DriveX || {};

DriveX.Reviews = {
  render() {
    return `
    <section class="py-16 lg:py-24">
      <div class="max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 reveal">
          <span class="text-sm font-semibold text-[#ff6b00] uppercase tracking-widest mb-3 block">Testimonials</span>
          <h2 class="section-title text-3xl lg:text-4xl font-extrabold mb-4">What Our Customers Say</h2>
          <p class="text-base opacity-50 max-w-2xl mx-auto">Join thousands of satisfied buyers and sellers who trust DriveX Motors</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          ${DriveX.reviews.slice(0, 3).map((review, i) => `
            <div class="glass-card p-6 rounded-2xl reveal" style="--i: ${i}">
              <!-- Stars -->
              <div class="flex items-center gap-1 mb-4">
                ${Array(5).fill(0).map((_, s) => `<svg class="w-5 h-5 ${s < review.rating ? 'star-filled' : 'star-empty'}" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`).join('')}
              </div>
              
              <!-- Title -->
              <h4 class="font-bold text-base mb-2">"${review.title}"</h4>
              
              <!-- Text -->
              <p class="text-sm opacity-60 leading-relaxed mb-5">${review.text}</p>
              
              <!-- Author -->
              <div class="flex items-center gap-3 pt-4 border-t border-white/5">
                <div class="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm" style="background: ${DriveX.getAvatarColor(review.name)}">${DriveX.getInitials(review.name)}</div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2">
                    <span class="text-sm font-semibold">${review.name}</span>
                    ${review.verified ? '<span class="badge badge-verified text-[10px] py-0.5 px-2">✓ Verified</span>' : ''}
                  </div>
                  <p class="text-xs opacity-40 mt-0.5">${review.car} • ${review.date}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>`;
  }
};
