// --- Helpers ---
const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(val);
};

// --- Chart Options ---
const getSharedOptions = () => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                color: 'rgba(255, 255, 255, 0.8)',
                padding: 20,
                font: { size: 12, weight: '500' }
            }
        },
        tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#fff',
            bodyColor: '#fff',
            borderColor: 'rgba(212, 168, 77, 0.3)',
            borderWidth: 1,
            padding: 12,
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
                color: 'rgba(255, 255, 255, 0.6)',
                font: { size: 11 },
                callback: function (value) {
                    if (value >= 10000000) return '₹' + (value / 10000000).toFixed(1) + 'Cr';
                    if (value >= 100000) return '₹' + (value / 100000).toFixed(1) + 'L';
                    if (value >= 1000) return '₹' + (value / 1000).toFixed(0) + 'k';
                    return '₹' + value;
                }
            },
            grid: { color: 'rgba(255, 255, 255, 0.1)' }
        },
        x: {
            ticks: {
                color: 'rgba(255, 255, 255, 0.6)',
                font: { size: 11 }
            },
            grid: { display: false }
        }
    }
});

const PRIMARY_COLOR = '#D4A84D'; // Gold
const SECONDARY_COLOR = 'rgba(255, 255, 255, 0.9)'; // Off-white
const LIGHT_COLOR = 'rgba(255, 255, 255, 0.1)';
const DANGER_COLOR = '#F87171'; // Light Red for dark bg

// Store chart instances
const charts = {};

// --- CALCULATION FUNCTIONS ---

const calculateSIP = () => {
    const p = parseFloat(document.getElementById('sip-amount')?.value);
    const rate = parseFloat(document.getElementById('sip-rate')?.value);
    const t = parseFloat(document.getElementById('sip-time')?.value);
    const canvas = document.getElementById('sipChart');
    if (!p || !rate || !t || !canvas) return;

    const i = (rate / 100) / 12;
    const n = t * 12;
    const investedAmount = p * n;
    const totalValue = (p * (Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const profit = totalValue - investedAmount;

    document.getElementById('sip-invested').innerText = formatCurrency(investedAmount);
    document.getElementById('sip-returns').innerText = formatCurrency(profit);
    document.getElementById('sip-total').innerText = formatCurrency(totalValue);

    if (typeof Chart === 'undefined') return;
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

    if (charts.sip) charts.sip.destroy();
    charts.sip = new Chart(canvas, {
        type: 'bar',
        data: {
            labels,
            datasets: [
                { label: 'Invested', data: investedData, backgroundColor: PRIMARY_COLOR, stack: 'S0' },
                { label: 'Returns', data: returnsData, backgroundColor: SECONDARY_COLOR, stack: 'S0' }
            ]
        },
        options: getSharedOptions()
    });
};

const calculateStepUp = () => {
    const initialSip = parseFloat(document.getElementById('step-amount')?.value);
    const stepIncrease = parseFloat(document.getElementById('step-increase')?.value);
    const rate = parseFloat(document.getElementById('step-rate')?.value);
    const t = parseFloat(document.getElementById('step-time')?.value);
    const canvas = document.getElementById('stepChart');
    if (!initialSip || isNaN(stepIncrease) || !rate || !t || !canvas) return;

    const i = (rate / 100) / 12;
    let totalInvested = 0, totalValue = 0, currentSip = initialSip;
    const labels = [], investedData = [], returnsData = [];

    for (let year = 1; year <= t; year++) {
        labels.push(`Year ${year}`);
        for (let month = 1; month <= 12; month++) {
            totalInvested += currentSip;
            totalValue = (totalValue + currentSip) * (1 + i);
        }
        investedData.push(totalInvested);
        returnsData.push(totalValue - totalInvested);
        currentSip *= (1 + (stepIncrease / 100));
    }

    document.getElementById('step-invested').innerText = formatCurrency(totalInvested);
    document.getElementById('step-returns').innerText = formatCurrency(totalValue - totalInvested);
    document.getElementById('step-total').innerText = formatCurrency(totalValue);

    if (typeof Chart === 'undefined') return;
    if (charts.step) charts.step.destroy();
    charts.step = new Chart(canvas, {
        type: 'bar',
        data: {
            labels,
            datasets: [
                { label: 'Invested', data: investedData, backgroundColor: PRIMARY_COLOR, stack: 'S0' },
                { label: 'Returns', data: returnsData, backgroundColor: SECONDARY_COLOR, stack: 'S0' }
            ]
        },
        options: getSharedOptions()
    });
};

// ... Similar simplified functions for Lumpsum, EMI, SWP, CAGR, Retirement, Delay, Alpha ...
// (I will group them all under a single dynamic trigger to keep it DRY)

const calculateLumpsum = () => {
    const p = parseFloat(document.getElementById('lum-amount')?.value);
    const rate = parseFloat(document.getElementById('lum-rate')?.value);
    const t = parseFloat(document.getElementById('lum-time')?.value);
    const canvas = document.getElementById('lumpsumChart');
    if (!p || !rate || !t || !canvas) return;

    const r = rate / 100;
    const totalValue = p * Math.pow((1 + r), t);
    document.getElementById('lum-invested').innerText = formatCurrency(p);
    document.getElementById('lum-returns').innerText = formatCurrency(totalValue - p);
    document.getElementById('lum-total').innerText = formatCurrency(totalValue);

    if (typeof Chart === 'undefined') return;
    const labels = [], totalData = [];
    for (let yr = 1; yr <= t; yr++) {
        labels.push(`Year ${yr}`);
        totalData.push(p * Math.pow((1 + r), yr));
    }
    if (charts.lum) charts.lum.destroy();
    charts.lum = new Chart(canvas, {
        type: 'line',
        data: { labels, datasets: [{ label: 'Value', data: totalData, borderColor: PRIMARY_COLOR, backgroundColor: LIGHT_COLOR, fill: true, tension: 0.4 }] },
        options: getSharedOptions()
    });
};



const calculateSWP = () => {
    const p = parseFloat(document.getElementById('swp-corpus')?.value);
    const w = parseFloat(document.getElementById('swp-withdrawal')?.value);
    const rate = parseFloat(document.getElementById('swp-rate')?.value);
    const t = parseFloat(document.getElementById('swp-time')?.value);
    const canvas = document.getElementById('swpChart');
    if (!p || !w || !rate || !t || !canvas) return;

    const r = (rate / 100) / 12;
    const n = t * 12;
    let balance = p, totalWithdrawn = 0;
    const labels = [], balanceData = [];

    for (let month = 1; month <= n; month++) {
        if (month % 12 === 0 || month === 1) {
            labels.push(`Year ${Math.ceil(month / 12)}`);
            balanceData.push(Math.max(0, balance));
        }
        balance = balance * (1 + r) - w;
        if (balance < 0) { totalWithdrawn += (w + balance); balance = 0; break; }
        else { totalWithdrawn += w; }
    }

    document.getElementById('swp-invested-display').innerText = formatCurrency(p);
    document.getElementById('swp-total-withdrawn').innerText = formatCurrency(totalWithdrawn);
    document.getElementById('swp-final-balance').innerText = formatCurrency(Math.max(0, balance));

    if (typeof Chart === 'undefined') return;
    if (charts.swp) charts.swp.destroy();
    charts.swp = new Chart(canvas, {
        type: 'line',
        data: { labels, datasets: [{ label: 'Balance', data: balanceData, borderColor: PRIMARY_COLOR, backgroundColor: LIGHT_COLOR, fill: true, tension: 0.1 }] },
        options: getSharedOptions()
    });
};

const calculateCAGR = () => {
    const initialValue = parseFloat(document.getElementById('cagr-initial')?.value);
    const finalValue = parseFloat(document.getElementById('cagr-final')?.value);
    const t = parseFloat(document.getElementById('cagr-time')?.value);
    const canvas = document.getElementById('cagrChart');
    if (!initialValue || !finalValue || !t || !canvas) return;

    const cagr = (Math.pow((finalValue / initialValue), (1 / t)) - 1) * 100;
    const absReturn = ((finalValue - initialValue) / initialValue) * 100;

    document.getElementById('cagr-initial-disp').innerText = formatCurrency(initialValue);
    document.getElementById('cagr-final-disp').innerText = formatCurrency(finalValue);
    document.getElementById('cagr-absret').innerText = absReturn.toFixed(2) + '%';
    document.getElementById('cagr-result').innerText = cagr.toFixed(2) + '%';

    if (typeof Chart === 'undefined') return;
    if (charts.cagr) charts.cagr.destroy();
    charts.cagr = new Chart(canvas, {
        type: 'bar',
        data: { labels: ['Initial', 'Final'], datasets: [{ data: [initialValue, finalValue], backgroundColor: [LIGHT_COLOR, PRIMARY_COLOR] }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
    });
};



const calculateCOD = () => {
    const p = parseFloat(document.getElementById('cod-sip')?.value);
    const rate = parseFloat(document.getElementById('cod-rate')?.value);
    const totalYears = parseFloat(document.getElementById('cod-time')?.value);
    const delayYears = parseFloat(document.getElementById('cod-delay')?.value);
    const canvas = document.getElementById('codChart');
    if (!p || !rate || !totalYears || isNaN(delayYears) || !canvas) return;

    if (totalYears <= delayYears) return;
    const i = (rate / 100) / 12, nToday = totalYears * 12, nDelayed = (totalYears - delayYears) * 12;
    const vToday = (p * (Math.pow(1 + i, nToday) - 1) / i) * (1 + i);
    const vDelayed = (p * (Math.pow(1 + i, nDelayed) - 1) / i) * (1 + i);

    document.getElementById('cod-today').innerText = formatCurrency(vToday);
    document.getElementById('cod-delayed').innerText = formatCurrency(vDelayed);
    document.getElementById('cod-loss').innerText = formatCurrency(vToday - vDelayed);

    if (typeof Chart === 'undefined') return;
    if (charts.cod) charts.cod.destroy();
    charts.cod = new Chart(canvas, {
        type: 'bar',
        data: { labels: ['Start Today', `Delayed by ${delayYears}y`], datasets: [{ data: [vToday, vDelayed], backgroundColor: [PRIMARY_COLOR, '#e57373'] }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
    });
};

const triggerCalculation = (sectionId) => {
    switch (sectionId) {
        case 'calc-sip': calculateSIP(); break;
        case 'calc-stepup': calculateStepUp(); break;
        case 'calc-lumpsum': calculateLumpsum(); break;
        case 'calc-swp': calculateSWP(); break;
        case 'calc-cagr': calculateCAGR(); break;
        case 'calc-cod': calculateCOD(); break;
    }
};

// --- Initialization ---

// Global listener for input changes (Event Delegation)
document.addEventListener('input', (e) => {
    const el = e.target;
    if (el.matches('.form-input, .form-range')) {
        // Sync input and slider
        let other;
        if (el.id.endsWith('-slider')) {
            other = document.getElementById(el.id.replace('-slider', ''));
        } else {
            other = document.getElementById(el.id + '-slider');
        }
        if (other) other.value = el.value;

        // Re-calculate the active calculator
        const section = el.closest('.calc-section');
        if (section) triggerCalculation(section.id);
    }
});

// Global listener for tab clicks (Event Delegation)
document.addEventListener('click', (e) => {
    const tab = e.target.closest('#calc-tabs .filter-btn');
    if (!tab || !tab.dataset.target) return;

    e.preventDefault();

    // Switch tabs
    document.querySelectorAll('#calc-tabs .filter-btn').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Switch sections
    document.querySelectorAll('.calc-section').forEach(s => s.classList.remove('active-calc'));
    const targetId = tab.dataset.target;
    const target = document.getElementById(targetId);
    if (target) {
        target.classList.add('active-calc');
        triggerCalculation(targetId);
    }
});

// Run initial calculations on load
const runInitialCalcs = () => {
    triggerCalculation('calc-sip');
    triggerCalculation('calc-stepup');
    triggerCalculation('calc-lumpsum');
    triggerCalculation('calc-swp');
    triggerCalculation('calc-cagr');
    triggerCalculation('calc-cod');
};

window.runInitialCalcs = runInitialCalcs;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.runInitialCalcs);
} else {
    window.runInitialCalcs();
}

// Ensure charts resize if container becomes visible or screen scales
window.addEventListener('resize', () => {
    Object.values(charts).forEach(c => c.resize());
});
