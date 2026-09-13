// ============================================
// DHAKA AUTOS — Premium Car Showroom in Bangladesh
// Finance Page Component — Car Loan & EMI Calculator
// Fully customizable: type amounts manually and/or drag sliders
// ============================================

window.DriveX = window.DriveX || {};
window.Garirbazar = window.DriveX;
Garirbazar.pages = Garirbazar.pages || {};

Garirbazar.pages.Finance = {
  price: 3650000,     // 36.5 Lakh BDT
  downPayment: 730000, // 20%
  termYears: 5,
  interestRate: 9.5,

  loanAmount() {
    return Math.max(0, this.price - this.downPayment);
  },

  calculate() {
    const loan = this.loanAmount();
    const n = this.termYears * 12;
    const r = (this.interestRate / 100) / 12;

    let monthly = 0;
    if (r > 0) {
      monthly = (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    } else {
      monthly = n > 0 ? loan / n : 0;
    }

    const totalPaid = monthly * n + this.downPayment;
    const totalInterest = Math.max(0, (monthly * n) - loan);

    return {
      monthlyEMI: Math.round(monthly),
      loanAmount: Math.round(loan),
      totalInterest: Math.round(totalInterest),
      totalCost: Math.round(totalPaid)
    };
  },

  render() {
    const res = this.calculate();
    const loan = this.loanAmount();

    return `
    <div id="page-finance" class="py-10 bg-[#f4f6f9] min-h-screen">
      <div class="max-w-7xl mx-auto px-4">

        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto mb-10">
          <span class="text-xs font-bold text-[#34723e] uppercase tracking-wider bg-green-50 px-3 py-1 rounded-full border border-green-200">DHAKA AUTOS Financial Advisory</span>
          <h1 class="text-2xl sm:text-4xl font-black text-gray-900 mt-2">Car Loan & EMI Calculator (Bangladesh)</h1>
          <p class="text-xs sm:text-sm text-gray-500 mt-1">Type any amount directly or drag the sliders — your EMI updates instantly. Rates reflect top Bangladeshi banks (City Bank, BRAC Bank, EBL, IDLC).</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">

          <!-- LEFT: Inputs & Sliders (7 cols) -->
          <div class="lg:col-span-7 bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-6">
            <h2 class="text-base font-bold text-gray-900 pb-2 border-b border-gray-100">Loan Parameters</h2>

            <!-- Vehicle Purchase Price -->
            <div>
              <div class="flex flex-wrap items-center justify-between gap-2 text-xs font-bold mb-1.5">
                <span class="text-gray-700">Vehicle Purchase Price</span>
                <div class="flex items-center gap-2">
                  <span class="text-gray-400 font-medium">৳</span>
                  <input id="bd-price-input" type="number" min="800000" max="15000000" step="10000" value="${this.price}" class="w-36 px-2.5 py-1.5 border border-gray-300 rounded-md text-sm font-black text-[#34723e] text-right focus:outline-none focus:border-[#34723e]">
                </div>
              </div>
              <input type="range" id="bd-price-range" min="800000" max="15000000" step="50000" value="${this.price}" class="w-full accent-[#34723e]">
              <div class="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>৳ 8 Lakh</span>
                <span>৳ 1.5 Crore</span>
              </div>
            </div>

            <!-- Down Payment -->
            <div>
              <div class="flex flex-wrap items-center justify-between gap-2 text-xs font-bold mb-1.5">
                <span class="text-gray-700">Down Payment (Cash)</span>
                <div class="flex items-center gap-2">
                  <span class="text-gray-400 font-medium">৳</span>
                  <input id="bd-down-input" type="number" min="0" max="${this.price}" step="10000" value="${this.downPayment}" class="w-36 px-2.5 py-1.5 border border-gray-300 rounded-md text-sm font-black text-gray-900 text-right focus:outline-none focus:border-[#34723e]">
                </div>
              </div>
              <input type="range" id="bd-down-range" min="200000" max="15000000" step="50000" value="${this.downPayment}" class="w-full accent-[#34723e]">
            </div>

            <!-- Loan Amount (custom) -->
            <div class="bg-green-50 border border-green-200 rounded-lg p-3">
              <div class="flex flex-wrap items-center justify-between gap-2 text-xs font-bold mb-1.5">
                <span class="text-[#34723e]">Loan Amount (auto = price − down, or type your own)</span>
                <div class="flex items-center gap-2">
                  <span class="text-[#34723e] font-medium">৳</span>
                  <input id="bd-loan-input" type="number" min="0" max="15000000" step="10000" value="${loan}" class="w-36 px-2.5 py-1.5 border border-green-300 bg-white rounded-md text-sm font-black text-[#34723e] text-right focus:outline-none focus:border-[#34723e]">
                </div>
              </div>
              <p class="text-[10px] text-green-700">Typing a custom loan amount automatically adjusts your down payment.</p>
            </div>

            <!-- Loan Tenure -->
            <div>
              <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                <label class="block text-xs font-bold text-gray-700">Loan Tenure</label>
                <div class="flex items-center gap-1.5">
                  <input id="bd-term-input" type="number" min="1" max="10" value="${this.termYears}" class="w-16 px-2 py-1 border border-gray-300 rounded-md text-sm font-black text-gray-900 text-center focus:outline-none focus:border-[#34723e]">
                  <span class="text-[10px] font-bold text-gray-500">YEARS</span>
                </div>
              </div>
              <div class="grid grid-cols-5 gap-2">
                ${[1, 2, 3, 4, 5].map(yr => `
                  <button type="button" class="bd-tenure-btn py-2 rounded-md text-xs font-bold border transition-all ${yr === this.termYears ? 'bg-[#34723e] text-white border-[#34723e]' : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'}" data-year="${yr}">
                    ${yr} Year${yr > 1 ? 's' : ''}
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Bank Interest Rate -->
            <div>
              <div class="flex flex-wrap items-center justify-between gap-2 text-xs font-bold mb-1.5">
                <span class="text-gray-700">Bank Interest Rate (APR)</span>
                <div class="flex items-center gap-2">
                  <input id="bd-rate-input" type="number" min="0" max="20" step="0.25" value="${this.interestRate}" class="w-24 px-2.5 py-1.5 border border-gray-300 rounded-md text-sm font-black text-[#1374dd] text-right focus:outline-none focus:border-[#1374dd]">
                  <span class="text-gray-500 font-bold">%</span>
                </div>
              </div>
              <input type="range" id="bd-rate-range" min="7.5" max="14.0" step="0.25" value="${this.interestRate}" class="w-full accent-[#1374dd]">
              <div class="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>City Bank (9.0%)</span>
                <span>BRAC Bank (9.5%)</span>
                <span>Standard (11.5%)</span>
              </div>
            </div>
          </div>

          <!-- RIGHT: Calculated EMI Card (5 cols) -->
          <div class="lg:col-span-5 space-y-5">
            <div class="bg-white border-2 border-[#34723e] rounded-xl p-6 sm:p-8 shadow-sm">
              <span class="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Monthly Installment (EMI)</span>
              <div class="text-3xl sm:text-4xl font-black text-[#34723e] mb-4">
                <span id="bd-res-emi">৳ ${Garirbazar.formatNumber(res.monthlyEMI)}</span>
                <span class="text-xs font-normal text-gray-500">/month</span>
              </div>

              <div class="space-y-2.5 text-xs text-gray-600 border-t border-gray-100 pt-4">
                <div class="flex justify-between">
                  <span>Financed Loan Amount:</span>
                  <strong id="bd-res-loan" class="text-gray-900">৳ ${Garirbazar.formatNumber(res.loanAmount)}</strong>
                </div>
                <div class="flex justify-between">
                  <span>Down Payment:</span>
                  <strong id="bd-res-down" class="text-gray-900">৳ ${Garirbazar.formatNumber(this.downPayment)}</strong>
                </div>
                <div class="flex justify-between">
                  <span>Total Bank Interest:</span>
                  <strong id="bd-res-interest" class="text-amber-700">৳ ${Garirbazar.formatNumber(res.totalInterest)}</strong>
                </div>
                <div class="flex justify-between">
                  <span>Loan Duration:</span>
                  <strong id="bd-res-term" class="text-gray-900">${this.termYears * 12} Months</strong>
                </div>
                <div class="flex justify-between pt-2 border-t border-gray-100 font-bold">
                  <span>Total Payment:</span>
                  <strong id="bd-res-total" class="text-gray-900">৳ ${Garirbazar.formatNumber(res.totalCost)}</strong>
                </div>
              </div>

              <button id="apply-loan-btn" class="af-btn green w-full mt-6 text-sm font-bold shadow-sm">
                Apply for Bank Pre-Approval &rarr;
              </button>
            </div>

            <!-- Documents Required for Bangladeshi Bank Loan -->
            <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm text-xs space-y-2 text-gray-700">
              <h3 class="font-bold text-gray-900 text-xs uppercase tracking-wider mb-2">Documents Required in Bangladesh:</h3>
              <p>✓ National ID Card (NID) & Passport size photos</p>
              <p>✓ Salary Certificate / Pay Slip (or Trade License for Businessmen)</p>
              <p>✓ Last 6 to 12 months Bank Statement</p>
              <p>✓ E-TIN Certificate & recent tax return acknowledgment</p>
            </div>
          </div>

        </div>

      </div>
    </div>
    `;
  },

  initEvents() {
    const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

    const setResultValues = () => {
      const res = this.calculate();
      document.getElementById('bd-res-emi').textContent = `৳ ${Garirbazar.formatNumber(res.monthlyEMI)}`;
      document.getElementById('bd-res-loan').textContent = `৳ ${Garirbazar.formatNumber(res.loanAmount)}`;
      document.getElementById('bd-res-down').textContent = `৳ ${Garirbazar.formatNumber(this.downPayment)}`;
      document.getElementById('bd-res-interest').textContent = `৳ ${Garirbazar.formatNumber(res.totalInterest)}`;
      document.getElementById('bd-res-term').textContent = `${this.termYears * 12} Months`;
      document.getElementById('bd-res-total').textContent = `৳ ${Garirbazar.formatNumber(res.totalCost)}`;
    };

    // Sync all controls (sliders + inputs + loan box) from current state
    const syncControls = () => {
      document.getElementById('bd-price-range').value = this.price;
      document.getElementById('bd-price-input').value = this.price;
      document.getElementById('bd-down-range').value = this.downPayment;
      document.getElementById('bd-down-input').value = this.downPayment;
      document.getElementById('bd-rate-range').value = this.interestRate;
      document.getElementById('bd-rate-input').value = this.interestRate;
      document.getElementById('bd-term-input').value = this.termYears;
      document.getElementById('bd-loan-input').value = this.loanAmount();
      setResultValues();
    };

    // Recalculate after reading control values back into state
    const refresh = () => {
      const price = parseInt(document.getElementById('bd-price-input').value) || this.price;
      this.price = clamp(price, 800000, 15000000);
      let down = parseInt(document.getElementById('bd-down-input').value) || 0;
      down = clamp(down, 0, this.price);
      this.downPayment = down;
      this.interestRate = clamp(parseFloat(document.getElementById('bd-rate-input').value) || this.interestRate, 0, 20);
      this.termYears = clamp(parseInt(document.getElementById('bd-term-input').value) || 1, 1, 10);
      syncControls();
    };

    // Linked slider + number input pairs
    const pair = (rangeId, inputId, onChange) => {
      const range = document.getElementById(rangeId);
      const input = document.getElementById(inputId);
      if (!range || !input) return;
      range.addEventListener('input', () => { input.value = range.value; onChange(); });
      input.addEventListener('input', () => { refresh(); onChange(); });
      input.addEventListener('change', () => { refresh(); onChange(); });
    };

    pair('bd-price-range', 'bd-price-input', () => { this.price = parseInt(document.getElementById('bd-price-input').value) || 0; refresh(); });
    pair('bd-down-range', 'bd-down-input', () => { this.downPayment = parseInt(document.getElementById('bd-down-input').value) || 0; refresh(); });
    pair('bd-rate-range', 'bd-rate-input', () => { this.interestRate = parseFloat(document.getElementById('bd-rate-input').value) || 0; refresh(); });

    // Custom loan amount -> adjusts down payment
    document.getElementById('bd-loan-input')?.addEventListener('change', () => {
      const loanVal = clamp(parseInt(document.getElementById('bd-loan-input').value) || 0, 0, this.price);
      this.downPayment = Math.max(0, this.price - loanVal);
      refresh();
    });

    // Tenure number input
    document.getElementById('bd-term-input')?.addEventListener('change', () => { refresh(); });

    // Tenure preset buttons
    document.querySelectorAll('.bd-tenure-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.termYears = parseInt(btn.getAttribute('data-year'));
        document.querySelectorAll('.bd-tenure-btn').forEach(b => {
          b.classList.remove('bg-[#34723e]', 'text-white', 'border-[#34723e]');
          b.classList.add('bg-gray-50', 'text-gray-700', 'border-gray-200');
        });
        btn.classList.add('bg-[#34723e]', 'text-white', 'border-[#34723e]');
        btn.classList.remove('bg-gray-50', 'text-gray-700', 'border-gray-200');
        refresh();
      });
    });

    document.getElementById('apply-loan-btn')?.addEventListener('click', () => {
      alert('Your auto loan application request has been forwarded to City Bank & BRAC Bank auto loan desk. A loan officer will call you within 24 hours.');
    });
  }
};