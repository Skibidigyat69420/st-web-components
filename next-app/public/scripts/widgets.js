// Interactive Widgets Logic

window.initWidgets = () => {
    // SIP Teaser Calculator
    const sipAmount = document.getElementById('teaserSipAmount');
    const sipAmountDisplay = document.getElementById('teaserSipAmountDisplay');
    const sipYears = document.getElementById('teaserSipYears');
    const sipYearsDisplay = document.getElementById('teaserSipYearsDisplay');
    const projValue = document.getElementById('teaserProjValue');

    const returnRate = 0.12; // 12% p.a.

    function calculateSip() {
        if (!sipAmount || !sipYears || !projValue) return;

        const p = parseInt(sipAmount.value);
        const n = parseInt(sipYears.value) * 12;
        const r = returnRate / 12;

        // SIP Formula: M = P × ({[1 + i]^n – 1} / i) × (1 + i)
        const futureValue = p * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);

        // Format displays
        if (sipAmountDisplay) sipAmountDisplay.textContent = p.toLocaleString('en-IN');
        if (sipYearsDisplay) sipYearsDisplay.textContent = sipYears.value;
        if (projValue) projValue.textContent = '₹' + Math.round(futureValue).toLocaleString('en-IN');
    }

    if (sipAmount && sipYears) {
        sipAmount.addEventListener('input', calculateSip);
        sipYears.addEventListener('input', calculateSip);

        // Initial calc
        calculateSip();
    }

    // Fee Compounding Visualizer
    const initialInvest = document.getElementById('initialInvest');
    const initialInvestDisplay = document.getElementById('initialInvestDisplay');
    const investYears = document.getElementById('investYears');
    const investYearsDisplay = document.getElementById('investYearsDisplay');
    const stFinalValue = document.getElementById('stFinalValue');
    const tradFinalValue = document.getElementById('tradFinalValue');
    const wealthLostValue = document.getElementById('wealthLostValue');

    function calculateFees() {
        if (!initialInvest || !investYears) return;

        const p = parseFloat(initialInvest.value);
        const t = parseInt(investYears.value);

        // Assume baseline 12% return
        const marketReturn = 0.12;
        const tradFee = 0.015; // 1.5%

        // Compounding logic: A = P(1+r)^t
        const stCorpus = p * Math.pow(1 + marketReturn, t);
        const tradCorpus = p * Math.pow(1 + (marketReturn - tradFee), t);
        const lost = stCorpus - tradCorpus;

        if (initialInvestDisplay) initialInvestDisplay.textContent = p.toLocaleString('en-IN');
        if (investYearsDisplay) investYearsDisplay.textContent = t;

        if (stFinalValue) stFinalValue.textContent = '₹' + Math.round(stCorpus).toLocaleString('en-IN');
        if (tradFinalValue) tradFinalValue.textContent = '₹' + Math.round(tradCorpus).toLocaleString('en-IN');
        if (wealthLostValue) wealthLostValue.textContent = '₹' + Math.round(lost).toLocaleString('en-IN');
    }

    if (initialInvest && investYears) {
        initialInvest.addEventListener('input', calculateFees);
        investYears.addEventListener('input', calculateFees);
        calculateFees();
    }

    // === Accordion Global Event Delegation ===
    if (!window.__accordionBound) {
        document.addEventListener('click', (e) => {
            const header = e.target.closest('.accordion-header');
            if (!header) return;

            const item = header.parentElement;
            const content = item.querySelector('.accordion-content');
            if (!content) return;

            const isActive = item.classList.contains('active');

            // Scope closing to the container
            const container = header.closest('.interactive-widget') || header.closest('.accordion-container') || document;

            container.querySelectorAll('.accordion-item').forEach(accItem => {
                accItem.classList.remove('active');
                const h = accItem.querySelector('.accordion-header');
                if (h) h.setAttribute('aria-expanded', 'false');
                const c = accItem.querySelector('.accordion-content');
                if (c) c.style.display = 'none';
            });

            // Open clicked if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
                content.style.display = 'block';
            }
        });
        window.__accordionBound = true;
    }

    // === Philosophy Page: Quote Carousel ===
    const quoteTrack = document.getElementById('philosophyQuoteTrack');
    const quoteIndicators = document.getElementById('quoteIndicators');

    if (quoteTrack && quoteIndicators) {
        quoteTrack.innerHTML = '';
        quoteIndicators.innerHTML = '';
        if (window.__quoteInterval) clearInterval(window.__quoteInterval);

        const quotes = [
            {
                text: "The miracle of compounding returns is overwhelmed by the tyranny of compounding costs.",
                author: "John C. Bogle",
                role: "Founder, Vanguard Group"
            },
            {
                text: "Show me the incentive and I will show you the outcome.",
                author: "Charlie Munger",
                role: "Vice Chairman, Berkshire Hathaway"
            },
            {
                text: "Investing is not a game where the guy with the 160 IQ beats the guy with 130 IQ... Once you have ordinary intelligence, what you need is the temperament to control the urges that get other people into trouble.",
                author: "Warren Buffett",
                role: "CEO, Berkshire Hathaway"
            },
            {
                text: "The investor's chief problem – and even his worst enemy – is likely to be himself.",
                author: "Benjamin Graham",
                role: "Father of Value Investing"
            },
            {
                text: "Far more money has been lost by investors preparing for corrections, or trying to anticipate corrections, than has been lost in corrections themselves.",
                author: "Peter Lynch",
                role: "Manager, Magellan Fund"
            },
            {
                text: "In reality, no one knows what the market will do; trying to predict it is a waste of time, and investing based upon that prediction is a speculative undertaking.",
                author: "Seth Klarman",
                role: "CEO, Baupost Group"
            },
            {
                text: "We're right 50.75 percent of the time... but we're 100 percent right 50.75 percent of the time. You can make billions that way.",
                author: "Jim Simons",
                role: "Founder, Renaissance Technologies"
            },
            {
                text: "You can't predict. You can prepare.",
                author: "Howard Marks",
                role: "Co-chairman, Oaktree Capital Management"
            },
            {
                text: "He who lives by the crystal ball will eat shattered glass.",
                author: "Ray Dalio",
                role: "Founder, Bridgewater Associates"
            },
            {
                text: "Doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people.",
                author: "Morgan Housel",
                role: "Author, The Psychology of Money"
            }
        ];

        let currentQuote = 0;

        // Build slides
        quotes.forEach((q, idx) => {
            const slide = document.createElement('div');
            slide.className = `quote-slide ${idx === 0 ? 'active-slide' : ''}`;
            slide.innerHTML = `
                <svg class="quote-slide-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div class="quote-slide-text">"${q.text}"</div>
                <div class="quote-slide-author">${q.author}</div>
                <div class="quote-slide-role">${q.role}</div>
            `;
            quoteTrack.appendChild(slide);

            const dot = document.createElement('div');
            dot.className = `indicator-dot ${idx === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => goToQuote(idx));
            quoteIndicators.appendChild(dot);
        });

        function goToQuote(index) {
            const slides = quoteTrack.querySelectorAll('.quote-slide');
            const dots = quoteIndicators.querySelectorAll('.indicator-dot');

            slides[currentQuote].classList.remove('active-slide');
            dots[currentQuote].classList.remove('active');

            currentQuote = index;

            slides[currentQuote].classList.add('active-slide');
            dots[currentQuote].classList.add('active');

            quoteTrack.style.transform = `translateX(-${currentQuote * 100}%)`;
        }

        // Auto-advance
        window.__quoteInterval = setInterval(() => {
            let next = (currentQuote + 1) % quotes.length;
            goToQuote(next);
        }, 6000);
    }

    // === Thesis Notes: Macro Dashboard ===
    const macroNifty = document.getElementById('macroNifty');
    const macroYield = document.getElementById('macroYield');
    const macroUsd = document.getElementById('macroUsd');

    if (macroNifty && macroYield && macroUsd) {
        // Base values
        let valNifty = 22419.55;
        let valYield = 7.12;
        let valUsd = 83.34;

        // Simulate live updates every 5-10 seconds
        setInterval(() => {
            // Nifty fluctuates between -5 and +5
            const diffNifty = (Math.random() * 10 - 5);
            valNifty += diffNifty;
            macroNifty.textContent = valNifty.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

            // Re-eval styling based on diff direction (optional micro-interaction)
            const niftyChangeEl = macroNifty.nextElementSibling;
            if (diffNifty > 0) {
                macroNifty.style.color = '#16a34a';
                setTimeout(() => macroNifty.style.color = '', 500);
            } else {
                macroNifty.style.color = '#dc2626';
                setTimeout(() => macroNifty.style.color = '', 500);
            }

            // Yield fluctuates slightly
            valYield += (Math.random() * 0.04 - 0.02);
            macroYield.textContent = valYield.toFixed(2) + '%';

            // USD fluctuates slightly
            valUsd += (Math.random() * 0.1 - 0.05);
            macroUsd.textContent = valUsd.toFixed(2);

        }, 7000);
    }

    // === Why Us Page: Matrix Toggle ===
    const matrixToggle = document.getElementById('matrixToggle');
    const paneTrad = document.getElementById('paneTrad');
    const paneSt = document.getElementById('paneSt');
    const btnTrad = document.getElementById('btnTrad');
    const btnSt = document.getElementById('btnSt');

    if (matrixToggle && paneTrad && paneSt) {
        matrixToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                // Show ST
                paneTrad.classList.remove('active');
                btnTrad.classList.remove('active');
                setTimeout(() => {
                    paneSt.classList.add('active');
                    btnSt.classList.add('active');
                }, 100); // slight delay for smooth transition
            } else {
                // Show Trad
                paneSt.classList.remove('active');
                btnSt.classList.remove('active');
                setTimeout(() => {
                    paneTrad.classList.add('active');
                    btnTrad.classList.add('active');
                }, 100);
            }
        });

        // Allow clicking labels to toggle
        if (btnTrad && btnSt) {
            btnTrad.addEventListener('click', () => {
                if (matrixToggle.checked) {
                    matrixToggle.checked = false;
                    matrixToggle.dispatchEvent(new Event('change'));
                }
            });
            btnSt.addEventListener('click', () => {
                if (!matrixToggle.checked) {
                    matrixToggle.checked = true;
                    matrixToggle.dispatchEvent(new Event('change'));
                }
            });
        }
    }

    // === Why Us Page: Animated Counters ===
    const counters = document.querySelectorAll('.counter-number[data-target]');
    if (counters.length > 0) {
        // Intersection Observer to start animation when visible
        const counterOptions = {
            root: null,
            threshold: 0.5
        };

        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const targetEl = entry.target;
                    const targetNum = parseInt(targetEl.getAttribute('data-target'));
                    animateValue(targetEl, 0, targetNum, 2000);
                    observer.unobserve(targetEl); // only animate once
                }
            });
        }, counterOptions);

        counters.forEach(counter => counterObserver.observe(counter));

        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                // easeOutQuart
                const easeOut = 1 - Math.pow(1 - progress, 4);
                obj.innerHTML = Math.floor(easeOut * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    obj.innerHTML = end; // ensure it ends perfectly on target
                }
            };
            window.requestAnimationFrame(step);
        }
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.initWidgets);
} else {
    window.initWidgets();
}
