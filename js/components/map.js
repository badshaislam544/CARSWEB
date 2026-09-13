// ============================================
// DriveX Motors — Map Component
// ============================================

window.DriveX = window.DriveX || {};

DriveX.Map = {
  render() {
    return `
    <section class="py-16 lg:py-24">
      <div class="max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 reveal">
          <span class="text-sm font-semibold text-[#ff6b00] uppercase tracking-widest mb-3 block">Locations</span>
          <h2 class="section-title text-3xl lg:text-4xl font-extrabold mb-4">Find Dealers Near You</h2>
          <p class="text-base opacity-50 max-w-2xl mx-auto">Visit one of our premium showrooms across the United States</p>
        </div>

        <div class="glass-card rounded-2xl overflow-hidden reveal">
          <div class="grid grid-cols-1 lg:grid-cols-3">
            <!-- Map Visual -->
            <div class="lg:col-span-2 relative min-h-[400px] lg:min-h-[500px] bg-gradient-to-br from-[#0f172a] to-[#1e293b] overflow-hidden">
              <!-- Stylized US Map Background -->
              <div class="absolute inset-0 opacity-10">
                <svg viewBox="0 0 960 600" class="w-full h-full" fill="none" stroke="currentColor" stroke-width="0.5">
                  <path d="M 230 140 L 270 130 L 340 120 L 400 100 L 470 95 L 520 100 L 580 110 L 630 105 L 680 120 L 720 140 L 740 170 L 750 210 L 760 250 L 770 300 L 760 340 L 740 370 L 720 400 L 680 420 L 630 430 L 580 450 L 520 460 L 470 455 L 400 440 L 340 420 L 280 400 L 230 370 L 200 340 L 180 300 L 170 260 L 180 220 L 200 180 Z" stroke="#ff6b00" fill="rgba(255,107,0,0.03)"/>
                </svg>
              </div>
              
              <!-- Grid Lines -->
              <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255,107,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.03) 1px, transparent 1px); background-size: 40px 40px;"></div>
              
              <!-- Dealer Pins -->
              ${DriveX.dealers.map((dealer, i) => {
                const positions = [
                  { x: 18, y: 55 },  // LA
                  { x: 78, y: 78 },  // Miami
                  { x: 75, y: 28 },  // NY
                  { x: 58, y: 32 },  // Chicago
                  { x: 55, y: 72 },  // Houston
                  { x: 15, y: 38 },  // SF
                ];
                const pos = positions[i] || { x: 50, y: 50 };
                return `
                <div class="map-pin absolute group" style="left: ${pos.x}%; top: ${pos.y}%;">
                  <div class="relative">
                    <!-- Pulse Ring -->
                    <div class="absolute -inset-3 bg-[#ff6b00]/20 rounded-full animate-ping"></div>
                    <!-- Pin -->
                    <div class="relative w-8 h-8 bg-gradient-to-br from-[#ff6b00] to-[#ffd700] rounded-full flex items-center justify-center shadow-lg cursor-pointer transform hover:scale-125 transition-transform z-10">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    </div>
                    <!-- Tooltip -->
                    <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 glass-card p-3 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
                      <p class="text-sm font-bold text-[#ff6b00]">${dealer.name}</p>
                      <p class="text-xs opacity-60 mt-1">${dealer.cars} vehicles available</p>
                      <div class="flex items-center gap-1 mt-1">
                        <svg class="w-3 h-3 text-[#ffd700]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <span class="text-xs font-medium">${dealer.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>`;
              }).join('')}
            </div>

            <!-- Dealer List -->
            <div class="p-6 space-y-4 max-h-[500px] overflow-y-auto">
              <h3 class="text-lg font-bold mb-4">Our Showrooms</h3>
              ${DriveX.dealers.map(dealer => `
                <div class="p-4 rounded-xl bg-white/5 hover:bg-[#ff6b00]/5 transition-colors cursor-pointer group">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-[#ff6b00]/10 flex items-center justify-center group-hover:bg-[#ff6b00] transition-colors">
                      <svg class="w-5 h-5 text-[#ff6b00] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                    </div>
                    <div>
                      <p class="text-sm font-semibold">${dealer.name}</p>
                      <p class="text-xs opacity-50">${dealer.cars} cars • ⭐ ${dealer.rating}</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>`;
  }
};
