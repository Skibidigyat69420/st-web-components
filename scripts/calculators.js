// calculators.js
// Handles all calculator logic and Chart.js rendering

document.addEventListener('DOMContentLoaded', () => {

    // --- Tabs Logic ---
    const tabs = document.querySelectorAll('.filters .filter-btn');
    const sections = document.querySelectorAll('.calc-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active to clicked
            tab.classList.add('active');

            // Hide all sections
            sections.forEach(s => s.classList.remove('active-calc'));
            // Show target section
            const target = document.getElementById(tab.getAttribute('data-target'));
            if (target) {
                target.classList.add('active-calc');
            }
        });
    });

    // --- Format Currency ---
    const formatCurrency = (val) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(val);
    };

    // --- Chart Global Defaults ---
    Chart.defaults.font.family = "'Outfit', -apple-system, sans-serif";
    Chart.defaults.color = "#0F172A"; // Slate/Navy for Light Mode
    const PRIMARY_COLOR = '#1B7340'; // Luminous Phthalo Green
    const SECONDARY_COLOR = '#D97706'; // Sapient Amber Gold
    const LIGHT_COLOR = 'rgba(15, 23, 42, 0.05)'; // Light border for Light Mode
    const DANGER_COLOR = '#dc2626';

    const getSharedOptions = () => ({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom' },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || '';
                        if (label) { label += ': '; }
                        if (context.parsed.y !== null) {
                            label += formatCurrency(context.parsed.y);
                        }
                        return label;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        if (value >= 10000000) return '₹' + (value / 10000000).toFixed(1) + 'Cr';
                        if (value >= 100000) return '₹' + (value / 100000).toFixed(1) + 'L';
                        if (value >= 1000) return '₹' + (value / 1000).toFixed(0) + 'k';
                        return '₹' + value;
                    }
                },
                grid: { color: 'rgba(15, 23, 42, 0.05)' } // Very subtle dark line
            },
            x: {
                grid: { display: false }
            }
        }
    });

    // --- SIP Calculator ---
    let sipChartInstance = null;
    const calculateSIP = () => {
        const p = parseFloat(document.getElementById('sip-amount').value);
        const rate = parseFloat(document.getElementById('sip-rate').value);
        const t = parseFloat(document.getElementById('sip-time').value);

        if (isNaN(p) || isNaN(rate) || isNaN(t)) return;

        const i = (rate / 100) / 12;
        const n = t * 12;

        const investedAmount = p * n;
        const estReturnAmount = (p * (Math.pow(1 + i, n) - 1) / i) * (1 + i);
        const totalValue = estReturnAmount;
        const profit = totalValue - investedAmount;

        document.getElementById('sip-invested').innerText = formatCurrency(investedAmount);
        document.getElementById('sip-returns').innerText = formatCurrency(profit);
        document.getElementById('sip-total').innerText = formatCurrency(totalValue);

        // Chart Data
        const labels = [];
        const investedData = [];
        const returnsData = [];

        for (let year = 1; year <= t; year++) {
            labels.push(`Year ${year}`);
            const currentMonths = year * 12;
            const currentInvested = p * currentMonths;
            const currentTotal = (p * (Math.pow(1 + i, currentMonths) - 1) / i) * (1 + i);
            investedData.push(currentInvested);
            returnsData.push(currentTotal - currentInvested);
        }

        const ctx = document.getElementById('sipChart').getContext('2d');
        if (sipChartInstance) { sipChartInstance.destroy(); }
        sipChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Invested Amount',
                        data: investedData,
                        backgroundColor: PRIMARY_COLOR,
                        stack: 'Stack 0',
                    },
                    {
                        label: 'Returns',
                        data: returnsData,
                        backgroundColor: SECONDARY_COLOR,
                        stack: 'Stack 0',
                    }
                ]
            },
            options: getSharedOptions()
        });
    };

    // --- Step-Up SIP Calculator ---
    let stepChartInstance = null;
    const calculateStepUp = () => {
        const initialSip = parseFloat(document.getElementById('step-amount').value);
        const stepIncrease = parseFloat(document.getElementById('step-increase').value);
        const rate = parseFloat(document.getElementById('step-rate').value);
        const t = parseFloat(document.getElementById('step-time').value);

        if (isNaN(initialSip) || isNaN(stepIncrease) || isNaN(rate) || isNaN(t)) return;

        const i = (rate / 100) / 12;

        let totalInvested = 0;
        let totalValue = 0;
        let currentSip = initialSip;

        const labels = [];
        const investedData = [];
        const returnsData = [];

        for (let year = 1; year <= t; year++) {
            labels.push(`Year ${year}`);

            // For each month in this year
            for (let month = 1; month <= 12; month++) {
                totalInvested += currentSip;
                totalValue = (totalValue + currentSip) * (1 + i);
            }

            investedData.push(totalInvested);
            returnsData.push(totalValue - totalInvested);

            // Increase SIP for next year
            currentSip = currentSip * (1 + (stepIncrease / 100));
        }

        const profit = totalValue - totalInvested;

        document.getElementById('step-invested').innerText = formatCurrency(totalInvested);
        document.getElementById('step-returns').innerText = formatCurrency(profit);
        document.getElementById('step-total').innerText = formatCurrency(totalValue);

        const ctx = document.getElementById('stepChart').getContext('2d');
        if (stepChartInstance) { stepChartInstance.destroy(); }
        stepChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Invested Amount',
                        data: investedData,
                        backgroundColor: PRIMARY_COLOR,
                        stack: 'Stack 0',
                    },
                    {
                        label: 'Returns',
                        data: returnsData,
                        backgroundColor: SECONDARY_COLOR,
                        stack: 'Stack 0',
                    }
                ]
            },
            options: getSharedOptions()
        });
    };

    // --- EMI & Loan Calculator ---
    let emiChartInstance = null;
    const calculateEMI = () => {
        const p = parseFloat(document.getElementById('emi-amount').value);
        const rate = parseFloat(document.getElementById('emi-rate').value);
        const t = parseFloat(document.getElementById('emi-time').value);

        if (isNaN(p) || isNaN(rate) || isNaN(t)) return;

        const r = (rate / 100) / 12;
        const n = t * 12;

        // EMI Formula = P * r * (1+r)^n / ((1+r)^n - 1)
        const emi = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
        const totalPayment = emi * n;
        const totalInterest = totalPayment - p;

        document.getElementById('emi-monthly').innerText = formatCurrency(emi);
        document.getElementById('emi-principal').innerText = formatCurrency(p);
        document.getElementById('emi-interest').innerText = formatCurrency(totalInterest);
        document.getElementById('emi-total-payment').innerText = formatCurrency(totalPayment);

        const ctx = document.getElementById('emiChart').getContext('2d');
        if (emiChartInstance) { emiChartInstance.destroy(); }
        emiChartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Principal', 'Total Interest'],
                datasets: [{
                    data: [p, totalInterest],
                    backgroundColor: [PRIMARY_COLOR, '#e57373'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'right' },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return ' ' + formatCurrency(context.parsed);
                            }
                        }
                    }
                },
                cutout: '70%'
            }
        });
    };

    // --- Lumpsum Calculator ---
    let lumChartInstance = null;
    const calculateLumpsum = () => {
        const p = parseFloat(document.getElementById('lum-amount').value);
        const rate = parseFloat(document.getElementById('lum-rate').value);
        const t = parseFloat(document.getElementById('lum-time').value);

        if (isNaN(p) || isNaN(rate) || isNaN(t)) return;

        const r = rate / 100;
        const totalValue = p * Math.pow((1 + r), t);
        const profit = totalValue - p;

        document.getElementById('lum-invested').innerText = formatCurrency(p);
        document.getElementById('lum-returns').innerText = formatCurrency(profit);
        document.getElementById('lum-total').innerText = formatCurrency(totalValue);

        // Chart Data
        const labels = [];
        const totalData = [];

        for (let year = 1; year <= t; year++) {
            labels.push(`Year ${year}`);
            totalData.push(p * Math.pow((1 + r), year));
        }

        const ctx = document.getElementById('lumpsumChart').getContext('2d');
        if (lumChartInstance) { lumChartInstance.destroy(); }
        lumChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Value',
                        data: totalData,
                        borderColor: PRIMARY_COLOR,
                        backgroundColor: LIGHT_COLOR,
                        fill: true,
                        tension: 0.4
                    }
                ]
            },
            options: getSharedOptions()
        });
    };

    // --- SWP Calculator ---
    let swpChartInstance = null;
    const calculateSWP = () => {
        const p = parseFloat(document.getElementById('swp-corpus').value);
        const w = parseFloat(document.getElementById('swp-withdrawal').value);
        const rate = parseFloat(document.getElementById('swp-rate').value);
        const t = parseFloat(document.getElementById('swp-time').value);

        if (isNaN(p) || isNaN(w) || isNaN(rate) || isNaN(t)) return;

        const r = (rate / 100) / 12;
        const n = t * 12;

        let balance = p;
        let totalWithdrawn = 0;

        const labels = [];
        const balanceData = [];

        for (let month = 1; month <= n; month++) {
            if (month % 12 === 0 || month === 1) {
                labels.push(`Year ${Math.ceil(month / 12)}`);
                balanceData.push(Math.max(0, balance));
            }

            balance = balance * (1 + r) - w;
            if (balance < 0) {
                totalWithdrawn += (w + balance); // Only withdrew the remaining amount
                balance = 0;
                break;
            } else {
                totalWithdrawn += w;
            }
        }

        document.getElementById('swp-invested-display').innerText = formatCurrency(p);
        document.getElementById('swp-total-withdrawn').innerText = formatCurrency(totalWithdrawn);
        document.getElementById('swp-final-balance').innerText = formatCurrency(Math.max(0, balance));

        const ctx = document.getElementById('swpChart').getContext('2d');
        if (swpChartInstance) { swpChartInstance.destroy(); }
        swpChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Remaining Balance',
                        data: balanceData,
                        borderColor: PRIMARY_COLOR,
                        backgroundColor: LIGHT_COLOR,
                        fill: true,
                        tension: 0.1
                    }
                ]
            },
            options: getSharedOptions()
        });
    };

    // --- CAGR Calculator ---
    let cagrChartInstance = null;
    const calculateCAGR = () => {
        const initialValue = parseFloat(document.getElementById('cagr-initial').value);
        const finalValue = parseFloat(document.getElementById('cagr-final').value);
        const t = parseFloat(document.getElementById('cagr-time').value);

        if (isNaN(initialValue) || isNaN(finalValue) || isNaN(t) || t <= 0) return;

        const cagr = (Math.pow((finalValue / initialValue), (1 / t)) - 1) * 100;
        const absReturn = ((finalValue - initialValue) / initialValue) * 100;

        document.getElementById('cagr-initial-disp').innerText = formatCurrency(initialValue);
        document.getElementById('cagr-final-disp').innerText = formatCurrency(finalValue);
        document.getElementById('cagr-absret').innerText = absReturn.toFixed(2) + '%';
        document.getElementById('cagr-result').innerText = cagr.toFixed(2) + '%';

        const ctx = document.getElementById('cagrChart').getContext('2d');
        if (cagrChartInstance) { cagrChartInstance.destroy(); }
        cagrChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Initial Value', 'Final Value'],
                datasets: [{
                    label: 'Value',
                    data: [initialValue, finalValue],
                    backgroundColor: [LIGHT_COLOR, PRIMARY_COLOR]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return formatCurrency(context.parsed.y);
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(15, 23, 42, 0.05)' }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    };

    // --- Retirement Calculator ---
    const calculateRetirement = () => {
        const currentAge = parseFloat(document.getElementById('ret-age').value);
        const retAge = parseFloat(document.getElementById('ret-retage').value);
        const expense = parseFloat(document.getElementById('ret-expense').value);
        const inflation = parseFloat(document.getElementById('ret-inflation').value);
        const retRate = parseFloat(document.getElementById('ret-rate-pre').value);

        if (isNaN(currentAge) || isNaN(retAge) || isNaN(expense) || isNaN(inflation) || isNaN(retRate)) return;

        const yearsToRetire = retAge - currentAge;
        if (yearsToRetire <= 0) return;

        // Future Value of Expenses
        const futureExpenseM = expense * Math.pow((1 + inflation / 100), yearsToRetire);

        // Rough Rule of thumb for corpus: 25x annual expenses (or using safe withdrawal rate 4%)
        // Future annual expense = futureExpenseM * 12
        const annualExpenseFuture = futureExpenseM * 12;
        const targetCorpus = annualExpenseFuture * 25; // using 4% rule

        // Monthly SIP Required to reach targetCorpus
        const i = (retRate / 100) / 12;
        const n = yearsToRetire * 12;
        const reqSip = (targetCorpus * i) / ((Math.pow(1 + i, n) - 1) * (1 + i));

        document.getElementById('ret-years').innerText = yearsToRetire;
        document.getElementById('ret-future-expense').innerText = formatCurrency(futureExpenseM);
        document.getElementById('ret-corpus').innerText = formatCurrency(targetCorpus);
        document.getElementById('ret-required-sip').innerText = formatCurrency(reqSip);
    };

    // --- Cost of Delay Calculator ---
    let codChartInstance = null;
    const calculateCOD = () => {
        const p = parseFloat(document.getElementById('cod-sip').value);
        const rate = parseFloat(document.getElementById('cod-rate').value);
        const totalYears = parseFloat(document.getElementById('cod-time').value);
        const delayYears = parseFloat(document.getElementById('cod-delay').value);

        if (isNaN(p) || isNaN(rate) || isNaN(totalYears) || isNaN(delayYears)) return;
        if (totalYears <= delayYears) return;

        const i = (rate / 100) / 12;
        const nToday = totalYears * 12;
        const nDelayed = (totalYears - delayYears) * 12;

        const valToday = (p * (Math.pow(1 + i, nToday) - 1) / i) * (1 + i);
        const valDelayed = (p * (Math.pow(1 + i, nDelayed) - 1) / i) * (1 + i);
        const loss = valToday - valDelayed;

        document.getElementById('cod-today').innerText = formatCurrency(valToday);
        document.getElementById('cod-delayed').innerText = formatCurrency(valDelayed);
        document.getElementById('cod-loss').innerText = formatCurrency(loss);

        const ctx = document.getElementById('codChart').getContext('2d');
        if (codChartInstance) { codChartInstance.destroy(); }

        codChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Start Today', `Delay by ${delayYears} Years`],
                datasets: [{
                    label: 'Final Corpus',
                    data: [valToday, valDelayed],
                    backgroundColor: [PRIMARY_COLOR, '#e57373'],
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return formatCurrency(context.parsed.y);
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(15, 23, 42, 0.05)' }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    };

    // --- Behavioral Alpha Calculator ---
    let alphaChartInstance = null;
    const calculateAlpha = () => {
        const p = parseFloat(document.getElementById('ba-lumpsum').value);
        const marketRate = parseFloat(document.getElementById('ba-market-rate').value);
        const penalty = parseFloat(document.getElementById('ba-penalty').value);
        const t = parseFloat(document.getElementById('ba-time').value);

        if (isNaN(p) || isNaN(marketRate) || isNaN(penalty) || isNaN(t)) return;

        const rD = marketRate / 100;
        const rE = (marketRate - penalty) / 100;

        const valD = p * Math.pow((1 + rD), t);
        const valE = p * Math.pow((1 + rE), t);
        const loss = valD - valE;

        document.getElementById('ba-disciplined').innerText = formatCurrency(valD);
        document.getElementById('ba-emotional').innerText = formatCurrency(valE);
        document.getElementById('ba-lost').innerText = formatCurrency(loss);

        // Chart Data
        const labels = [];
        const dData = [];
        const eData = [];

        for (let year = 1; year <= t; year++) {
            labels.push(`Year ${year}`);
            dData.push(p * Math.pow((1 + rD), year));
            eData.push(p * Math.pow((1 + rE), year));
        }

        const ctx = document.getElementById('alphaChart').getContext('2d');
        if (alphaChartInstance) { alphaChartInstance.destroy(); }

        alphaChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Disciplined Investor (Buy & Hold)',
                        data: dData,
                        borderColor: PRIMARY_COLOR,
                        backgroundColor: PRIMARY_COLOR,
                        tension: 0.4
                    },
                    {
                        label: 'Emotional Investor (Timing the Market)',
                        data: eData,
                        borderColor: DANGER_COLOR,
                        backgroundColor: DANGER_COLOR,
                        tension: 0.4
                    }
                ]
            },
            options: getSharedOptions()
        });
    };

    // --- Sync Sliders and Inputs ---
    const setupSync = (inputId, sliderId, calcFunc) => {
        const input = document.getElementById(inputId);
        const slider = document.getElementById(sliderId);

        if (!input || !slider) return;

        input.addEventListener('input', () => {
            slider.value = input.value;
            calcFunc();
        });

        slider.addEventListener('input', () => {
            input.value = slider.value;
            calcFunc();
        });
    };

    // Setup mappings
    setupSync('sip-amount', 'sip-amount-slider', calculateSIP);
    setupSync('sip-rate', 'sip-rate-slider', calculateSIP);
    setupSync('sip-time', 'sip-time-slider', calculateSIP);

    setupSync('step-amount', 'step-amount-slider', calculateStepUp);
    setupSync('step-increase', 'step-increase-slider', calculateStepUp);
    setupSync('step-rate', 'step-rate-slider', calculateStepUp);
    setupSync('step-time', 'step-time-slider', calculateStepUp);

    setupSync('lum-amount', 'lum-amount-slider', calculateLumpsum);
    setupSync('lum-rate', 'lum-rate-slider', calculateLumpsum);
    setupSync('lum-time', 'lum-time-slider', calculateLumpsum);

    setupSync('emi-amount', 'emi-amount-slider', calculateEMI);
    setupSync('emi-rate', 'emi-rate-slider', calculateEMI);
    setupSync('emi-time', 'emi-time-slider', calculateEMI);

    setupSync('swp-corpus', 'swp-corpus-slider', calculateSWP);
    setupSync('swp-withdrawal', 'swp-withdrawal-slider', calculateSWP);
    setupSync('swp-rate', 'swp-rate-slider', calculateSWP);
    setupSync('swp-time', 'swp-time-slider', calculateSWP);

    setupSync('cagr-initial', 'cagr-initial-slider', calculateCAGR);
    setupSync('cagr-final', 'cagr-final-slider', calculateCAGR);
    setupSync('cagr-time', 'cagr-time-slider', calculateCAGR);

    setupSync('ret-age', 'ret-age-slider', calculateRetirement);
    setupSync('ret-retage', 'ret-retage-slider', calculateRetirement);
    setupSync('ret-expense', 'ret-expense-slider', calculateRetirement);
    setupSync('ret-inflation', 'ret-inflation-slider', calculateRetirement);
    setupSync('ret-rate-pre', 'ret-rate-pre-slider', calculateRetirement);

    setupSync('cod-sip', 'cod-sip-slider', calculateCOD);
    setupSync('cod-rate', 'cod-rate-slider', calculateCOD);
    setupSync('cod-time', 'cod-time-slider', calculateCOD);
    setupSync('cod-delay', 'cod-delay-slider', calculateCOD);

    setupSync('ba-lumpsum', 'ba-lumpsum-slider', calculateAlpha);
    setupSync('ba-market-rate', 'ba-market-rate-slider', calculateAlpha);
    setupSync('ba-penalty', 'ba-penalty-slider', calculateAlpha);
    setupSync('ba-time', 'ba-time-slider', calculateAlpha);

    // Try to trigger initial calculations to render charts
    setTimeout(() => {
        calculateSIP();
        calculateStepUp();
        calculateLumpsum();
        calculateEMI();
        calculateSWP();
        calculateCAGR();
        calculateRetirement();
        calculateCOD();
        calculateAlpha();
    }, 100);

    // Initial load resize trigger to correctly paint Chart.js bounds
    window.addEventListener('resize', () => {
        if (sipChartInstance) sipChartInstance.resize();
        if (stepChartInstance) stepChartInstance.resize();
        if (lumChartInstance) lumChartInstance.resize();
        if (emiChartInstance) emiChartInstance.resize();
        if (swpChartInstance) swpChartInstance.resize();
        if (cagrChartInstance) cagrChartInstance.resize();
        if (codChartInstance) codChartInstance.resize();
        if (alphaChartInstance) alphaChartInstance.resize();
    });
});
