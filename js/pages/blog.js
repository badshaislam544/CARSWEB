// ============================================
// DHAKA AUTOS — Journal & Trust Guides Component
// ============================================

window.DriveX = window.DriveX || {};
DriveX.pages = DriveX.pages || {};

DriveX.pages.Blog = {
  selectedCategory: 'All',

  render() {
    const posts = DriveX.blogPosts || [];
    const filteredPosts = this.selectedCategory === 'All' 
      ? posts 
      : posts.filter(p => p.category.toLowerCase().includes(this.selectedCategory.toLowerCase()));
    const featured = posts[0] || {
      title: '2025 Electric Supercars: The Future is Now',
      excerpt: 'From the Rimac Nevera to the Lotus Evija, explore the electric hypercars reshaping performance benchmark standards.',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&q=80',
      category: 'Hypercars',
      author: 'DHAKA AUTOS Team',
      date: '2026-09-10',
      readTime: '8 min'
    };

    return `
    <div id="page-blog" class="pt-24 pb-20 min-h-screen">
      <div class="max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-12">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#ff6b00]/30 text-xs font-semibold text-[#ff6b00] mb-4">
            Trusted Buying Guides
          </div>
          <h1 class="text-3xl sm:text-5xl font-black tracking-tight">The DHAKA AUTOS Journal</h1>
          <p class="text-sm opacity-60 mt-3">Honest buying guides, paper-verification tips and market insights from our showroom team.</p>
        </div>

        <!-- Featured Hero Story -->
        <div class="glass-card rounded-3xl overflow-hidden mb-16 border border-white/10 group relative">
          <div class="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
            <div class="lg:col-span-7 relative overflow-hidden">
              <img src="${featured.image}" alt="${featured.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
              <div class="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent lg:hidden"></div>
            </div>
            <div class="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center">
              <span class="badge badge-hot text-xs mb-4 self-start">${featured.category}</span>
              <h2 class="text-2xl sm:text-3xl font-black mb-4 leading-snug group-hover:text-[#ff6b00] transition-colors">
                ${featured.title}
              </h2>
              <p class="text-sm opacity-70 leading-relaxed mb-6">
                ${featured.excerpt}
              </p>
              <div class="flex items-center gap-3 text-xs opacity-50 mb-6">
                <div class="w-8 h-8 rounded-full bg-[#ff6b00] text-white font-bold flex items-center justify-center">
                  ${DriveX.getInitials(featured.author || 'DHAKA AUTOS Team')}
                </div>
                <span>${featured.author || 'DHAKA AUTOS Team'}</span>
                <span>•</span>
                <span>${featured.date}</span>
                <span>•</span>
                <span>${featured.readTime}</span>
              </div>
              <button class="read-article-btn btn-primary py-3 px-6 rounded-xl text-xs font-bold self-start" data-id="${featured.id}">
                Read Feature Article &rarr;
              </button>
            </div>
          </div>
        </div>

        <!-- Category Filters -->
        <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-white/10">
          ${['All', 'News', 'Buying Guide', 'Reviews', 'Technology'].map(cat => `
            <button class="blog-cat-btn px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${this.selectedCategory === cat ? 'bg-[#ff6b00] text-white shadow-lg' : 'glass hover:bg-white/10'}" data-cat="${cat}">
              ${cat}
            </button>
          `).join('')}
        </div>

        <!-- Articles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          ${filteredPosts.map(post => `
            <article class="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col group hover:border-[#ff6b00]/40 transition-all">
              <div class="relative aspect-[16/10] overflow-hidden">
                <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
                <span class="badge badge-new absolute top-4 left-4 text-xs">${post.category}</span>
              </div>
              <div class="p-6 flex flex-col flex-1">
                <div class="flex items-center gap-3 text-xs opacity-50 mb-3">
                  <span>${post.date}</span>
                  <span>•</span>
                  <span>${post.readTime}</span>
                </div>
                <h3 class="text-lg font-bold mb-3 group-hover:text-[#ff6b00] transition-colors leading-snug">
                  ${post.title}
                </h3>
                <p class="text-xs opacity-60 leading-relaxed mb-6 flex-1">
                  ${post.excerpt}
                </p>
                <button class="read-article-btn text-xs font-bold text-[#ff6b00] flex items-center gap-1 hover:gap-2 transition-all self-start" data-id="${post.id}">
                  Read Full Story <span>&rarr;</span>
                </button>
              </div>
            </article>
          `).join('')}
        </div>

        <!-- Newsletter Subscription Box -->
        <div class="glass-card p-8 sm:p-12 rounded-3xl border border-[#ff6b00]/30 text-center max-w-3xl mx-auto relative overflow-hidden">
          <span class="text-xs font-bold uppercase tracking-widest text-[#ff6b00] mb-2 block">Weekly Dispatch</span>
          <h3 class="text-2xl sm:text-3xl font-black mb-3">Stay Ahead of the Luxury Market</h3>
          <p class="text-xs sm:text-sm opacity-60 mb-8 max-w-md mx-auto">Get exclusive private listings, supercar auction results, and market intelligence sent to your inbox every Thursday.</p>
          <form id="blog-newsletter-form" class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email..." required class="form-input text-sm py-3 px-4 flex-1 rounded-2xl">
            <button type="submit" class="btn-primary py-3 px-6 rounded-2xl text-xs font-bold">Subscribe</button>
          </form>
        </div>

      </div>
    </div>
    `;
  },

  initEvents() {
    // 1. Category click
    document.querySelectorAll('.blog-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedCategory = btn.getAttribute('data-cat');
        const pageContainer = document.getElementById('page-container');
        if (pageContainer) {
          pageContainer.innerHTML = this.render();
          this.initEvents();
        }
      });
    });

    // 2. Read article click
    document.querySelectorAll('.read-article-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        alert('Opening full guide. DHAKA AUTOS members enjoy unlimited access to our journal.');
      });
    });

    // 3. Newsletter submit
    document.getElementById('blog-newsletter-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! You are now subscribed to the weekly DHAKA AUTOS Dispatch.');
    });
  }
};
