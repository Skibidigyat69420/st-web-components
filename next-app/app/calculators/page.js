export const metadata = { title: "Calculators | SoundThesis" };

import React from 'react';

export default function Calculators() {
    return (
        <>
            {/*  Navigation  */}
            <nav className="nav" role="navigation" aria-label="Main navigation">
                <div className="nav__inner">
                    <a href="/" className="nav__logo">SoundThesis</a>
                    <button className="nav__toggle" aria-label="Toggle navigation" aria-expanded="false">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul className="nav__links">                        <li><a href="/thesis-notes" className="nav__link">Thesis Notes</a></li>
                        <li><a href="/services" className="nav__link">Services</a></li>
                        <li><a href="/about-us" className="nav__link">About us</a></li>
                        <li><a href="/calculators" className="nav__link nav__link--active">Calculators</a></li>
                        <li className="nav__cta"><a href="/schedule" className="btn btn--primary btn--small">Schedule Consultation</a></li>
                    </ul>
                </div>
            </nav>

            {/*  Header Section  */}
            <section className="hero" style={{ "minHeight": "40vh", "paddingTop": "150px", "paddingBottom": "50px" }}>
                <div className="container">
                    <div className="hero__text" style={{ "margin": "0 auto", "textAlign": "center" }}>
                        <span className="hero__pill">Financial Tools</span>
                        <h1 className="hero__title">
                            Smart <span className="text-highlight">Calculators</span>
                        </h1>
                        <p className="hero__description">
                            Plan your financial future with our institutional-grade modeling tools.
                            Analyze your SIPs and the true cost of delay.
                        </p>
                    </div>
                </div>
            </section>

            {/*  Calculators Section  */}
            <section className="section">
                <div className="container">
                    <div style={{ "display": "flex", "justifyContent": "center", "marginBottom": "var(--space-xl)" }}>
                        <div className="filters" id="calc-tabs"
                            style={{ "background": "var(--color-bg-secondary)", "padding": "8px", "borderRadius": "var(--radius-pill)", "display": "inline-flex", "overflowX": "auto", "maxWidth": "100%", "boxShadow": "inset 0 2px 4px rgba(0,0,0,0.02)", "border": "1px solid var(--color-border)" }}>
                        <button className="filter-btn active" data-target="calc-sip"
                            style={{ "borderRadius": "var(--radius-pill)", "padding": "10px 24px", "fontWeight": "500", "fontFamily": "var(--font-sans)", "transition": "all 0.3s ease", "border": "none", "whiteSpace": "nowrap" }}>SIP</button>
                        <button className="filter-btn" data-target="calc-stepup"
                            style={{ "borderRadius": "var(--radius-pill)", "padding": "10px 24px", "fontWeight": "500", "fontFamily": "var(--font-sans)", "transition": "all 0.3s ease", "border": "none", "whiteSpace": "nowrap" }}>Step-Up
                            SIP</button>
                        <button className="filter-btn" data-target="calc-lumpsum"
                            style={{ "borderRadius": "var(--radius-pill)", "padding": "10px 24px", "fontWeight": "500", "fontFamily": "var(--font-sans)", "transition": "all 0.3s ease", "border": "none", "whiteSpace": "nowrap" }}>Lumpsum</button>
                        <button className="filter-btn" data-target="calc-swp"
                            style={{ "borderRadius": "var(--radius-pill)", "padding": "10px 24px", "fontWeight": "500", "fontFamily": "var(--font-sans)", "transition": "all 0.3s ease", "border": "none", "whiteSpace": "nowrap" }}>SWP</button>
                        <button className="filter-btn" data-target="calc-cagr"
                            style={{ "borderRadius": "var(--radius-pill)", "padding": "10px 24px", "fontWeight": "500", "fontFamily": "var(--font-sans)", "transition": "all 0.3s ease", "border": "none", "whiteSpace": "nowrap" }}>CAGR</button>
                        <button className="filter-btn" data-target="calc-cod"
                            style={{ "borderRadius": "var(--radius-pill)", "padding": "10px 24px", "fontWeight": "500", "fontFamily": "var(--font-sans)", "transition": "all 0.3s ease", "border": "none", "whiteSpace": "nowrap" }}>Cost
                            of Delay</button>
                        </div>
                    </div>

                    {/*  Calculators Container  */}
                    <div className="calculators-container bento-item"
                        style={{ "padding": "0", "overflow": "hidden", "display": "flex", "flexDirection": "column" }}>

                        {/*  SIP Calculator  */}
                        <div id="calc-sip" className="calc-section active-calc">
                            <div className="calc-grid">
                                <div className="calc-inputs"
                                    style={{ "padding": "var(--space-2xl)", "flex": "1", "background": "var(--color-white)" }}>
                                    <h3 className="card__title">SIP Calculator</h3>
                                    <div className="input-group">
                                        <label htmlFor="sip-amount">Monthly Investment (₹)</label>
                                        <input type="number" id="sip-amount" className="form-input" defaultValue="10000" min="500" />
                                        <input type="range" id="sip-amount-slider" className="form-range" min="500" max="100000"
                                            step="500" defaultValue="10000" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="sip-rate">Expected Return Rate (p.a %)</label>
                                        <input type="number" id="sip-rate" className="form-input" defaultValue="12" min="1" max="30" />
                                        <input type="range" id="sip-rate-slider" className="form-range" min="1" max="30" step="0.5"
                                            defaultValue="12" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="sip-time">Time Period (Years)</label>
                                        <input type="number" id="sip-time" className="form-input" defaultValue="10" min="1" max="50" />
                                        <input type="range" id="sip-time-slider" className="form-range" min="1" max="50" step="1"
                                            defaultValue="10" />
                                    </div>
                                </div>
                                <div className="calc-results"
                                    style={{ "padding": "var(--space-2xl)", "flex": "1", "display": "flex", "flexDirection": "column", "justifyContent": "center", "position": "relative", "background": "var(--color-emerald)", "color": "var(--color-white)" }}>
                                    <h3 className="card__title text-center" style={{ "color": "var(--color-white)", "marginBottom": "var(--space-xl)", "fontFamily": "var(--font-serif)" }}>
                                        Estimation</h3>
                                    <div className="result-row" style={{ "borderBottom": "1px solid rgba(255,255,255,0.1)" }}>
                                        <span style={{ "color": "rgba(255,255,255,0.6)", "fontSize": "13px", "textTransform": "uppercase", "letterSpacing": "1px" }}>Invested Amount</span>
                                        <span className="result-val" style={{ "color": "var(--color-white)", "fontSize": "18px", "fontWeight": "500" }} id="sip-invested">₹12,00,000</span>
                                    </div>
                                    <div className="result-row" style={{ "borderBottom": "1px solid rgba(255,255,255,0.1)" }}>
                                        <span style={{ "color": "rgba(255,255,255,0.6)", "fontSize": "13px", "textTransform": "uppercase", "letterSpacing": "1px" }}>Est. Returns</span>
                                        <span className="result-val" style={{ "color": "var(--color-gold)", "fontSize": "20px", "fontWeight": "600" }} id="sip-returns">₹11,23,391</span>
                                    </div>
                                    <div className="result-row total-row" style={{ "borderTop": "2px solid rgba(255,255,255,0.2)", "marginTop": "var(--space-md)", "paddingTop": "var(--space-md)" }}>
                                        <span style={{ "color": "rgba(255,255,255,0.6)", "fontSize": "13px", "textTransform": "uppercase", "letterSpacing": "1px" }}>Total Value</span>
                                        <span className="result-val total-val" style={{ "color": "var(--color-gold)", "fontSize": "32px", "fontWeight": "700" }} id="sip-total">₹23,23,391</span>
                                    </div>
                                    <div className="chart-container">
                                        <canvas id="sipChart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Step-Up SIP Calculator  */}
                        <div id="calc-stepup" className="calc-section">
                            <div className="calc-grid">
                                <div className="calc-inputs"
                                    style={{ "padding": "var(--space-2xl)", "flex": "1", "background": "var(--color-white)" }}>
                                    <h3 className="card__title">Step-Up SIP Calculator</h3>
                                    <div className="input-group">
                                        <label htmlFor="step-amount">Initial Monthly SIP (₹)</label>
                                        <input type="number" id="step-amount" className="form-input" defaultValue="10000" min="500" />
                                        <input type="range" id="step-amount-slider" className="form-range" min="500" max="100000" step="500" defaultValue="10000" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="step-increase">Annual Step-Up (%)</label>
                                        <input type="number" id="step-increase" className="form-input" defaultValue="10" min="1" max="50" />
                                        <input type="range" id="step-increase-slider" className="form-range" min="1" max="50" step="1" defaultValue="10" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="step-rate">Expected Return Rate (p.a %)</label>
                                        <input type="number" id="step-rate" className="form-input" defaultValue="12" min="1" max="30" />
                                        <input type="range" id="step-rate-slider" className="form-range" min="1" max="30" step="0.5" defaultValue="12" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="step-time">Time Period (Years)</label>
                                        <input type="number" id="step-time" className="form-input" defaultValue="10" min="1" max="50" />
                                        <input type="range" id="step-time-slider" className="form-range" min="1" max="50" step="1" defaultValue="10" />
                                    </div>
                                </div>
                                <div className="calc-results"
                                    style={{ "padding": "var(--space-2xl)", "flex": "1", "display": "flex", "flexDirection": "column", "justifyContent": "center", "position": "relative", "background": "var(--color-emerald)", "color": "var(--color-white)" }}>
                                    <h3 className="card__title text-center" style={{ "color": "var(--color-white)", "marginBottom": "var(--space-xl)", "fontFamily": "var(--font-serif)" }}>Estimation</h3>
                                    <div className="result-row" style={{ "borderBottom": "1px solid rgba(255,255,255,0.1)" }}>
                                        <span style={{ "color": "rgba(255,255,255,0.6)", "fontSize": "13px", "textTransform": "uppercase", "letterSpacing": "1px" }}>Total Invested</span>
                                        <span className="result-val" style={{ "color": "var(--color-white)", "fontSize": "18px", "fontWeight": "500" }} id="step-invested">₹19,12,491</span>
                                    </div>
                                    <div className="result-row" style={{ "borderBottom": "1px solid rgba(255,255,255,0.1)" }}>
                                        <span style={{ "color": "rgba(255,255,255,0.6)", "fontSize": "13px", "textTransform": "uppercase", "letterSpacing": "1px" }}>Est. Returns</span>
                                        <span className="result-val" style={{ "color": "var(--color-gold)", "fontSize": "20px", "fontWeight": "600" }} id="step-returns">₹14,24,295</span>
                                    </div>
                                    <div className="result-row total-row" style={{ "borderTop": "2px solid rgba(255,255,255,0.2)", "marginTop": "var(--space-md)", "paddingTop": "var(--space-md)" }}>
                                        <span style={{ "color": "rgba(255,255,255,0.6)", "fontSize": "13px", "textTransform": "uppercase", "letterSpacing": "1px" }}>Total Value</span>
                                        <span className="result-val total-val" style={{ "color": "var(--color-gold)", "fontSize": "32px", "fontWeight": "700" }} id="step-total">₹33,36,786</span>
                                    </div>
                                    <div className="chart-container">
                                        <canvas id="stepChart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Lumpsum Calculator  */}
                        <div id="calc-lumpsum" className="calc-section">
                            <div className="calc-grid">
                                <div className="calc-inputs"
                                    style={{ "padding": "var(--space-2xl)", "flex": "1", "background": "var(--color-white)" }}>
                                    <h3 className="card__title">Lumpsum Calculator</h3>
                                    <div className="input-group">
                                        <label htmlFor="lum-amount">Total Investment (₹)</label>
                                        <input type="number" id="lum-amount" className="form-input" defaultValue="100000" min="1000" />
                                        <input type="range" id="lum-amount-slider" className="form-range" min="1000" max="10000000" step="1000" defaultValue="100000" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="lum-rate">Expected Return Rate (p.a %)</label>
                                        <input type="number" id="lum-rate" className="form-input" defaultValue="12" min="1" max="30" />
                                        <input type="range" id="lum-rate-slider" className="form-range" min="1" max="30" step="0.5" defaultValue="12" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="lum-time">Time Period (Years)</label>
                                        <input type="number" id="lum-time" className="form-input" defaultValue="10" min="1" max="50" />
                                        <input type="range" id="lum-time-slider" className="form-range" min="1" max="50" step="1" defaultValue="10" />
                                    </div>
                                </div>
                                <div className="calc-results"
                                    style={{ "padding": "var(--space-2xl)", "flex": "1", "display": "flex", "flexDirection": "column", "justifyContent": "center", "position": "relative", "background": "var(--color-emerald)", "color": "var(--color-white)" }}>
                                    <h3 className="card__title text-center" style={{ "color": "var(--color-white)", "marginBottom": "var(--space-xl)", "fontFamily": "var(--font-serif)" }}>Estimation</h3>
                                    <div className="result-row" style={{ "borderBottom": "1px solid rgba(255,255,255,0.1)" }}>
                                        <span style={{ "color": "rgba(255,255,255,0.6)", "fontSize": "13px", "textTransform": "uppercase", "letterSpacing": "1px" }}>Invested Amount</span>
                                        <span className="result-val" style={{ "color": "var(--color-white)", "fontSize": "18px", "fontWeight": "500" }} id="lum-invested">₹1,00,000</span>
                                    </div>
                                    <div className="result-row" style={{ "borderBottom": "1px solid rgba(255,255,255,0.1)" }}>
                                        <span style={{ "color": "rgba(255,255,255,0.6)", "fontSize": "13px", "textTransform": "uppercase", "letterSpacing": "1px" }}>Est. Returns</span>
                                        <span className="result-val" style={{ "color": "var(--color-gold)", "fontSize": "20px", "fontWeight": "600" }} id="lum-returns">₹2,10,585</span>
                                    </div>
                                    <div className="result-row total-row" style={{ "borderTop": "2px solid rgba(255,255,255,0.2)", "marginTop": "var(--space-md)", "paddingTop": "var(--space-md)" }}>
                                        <span style={{ "color": "rgba(255,255,255,0.6)", "fontSize": "13px", "textTransform": "uppercase", "letterSpacing": "1px" }}>Total Value</span>
                                        <span className="result-val total-val" style={{ "color": "var(--color-gold)", "fontSize": "32px", "fontWeight": "700" }} id="lum-total">₹3,10,585</span>
                                    </div>
                                    <div className="chart-container">
                                        <canvas id="lumpsumChart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/*  SWP Calculator  */}
                        <div id="calc-swp" className="calc-section">
                            <div className="calc-grid">
                                <div className="calc-inputs"
                                    style={{ "padding": "var(--space-2xl)", "flex": "1", "background": "var(--color-white)" }}>
                                    <h3 className="card__title">SWP Calculator</h3>
                                    <div className="input-group">
                                        <label htmlFor="swp-corpus">Total Investment/Corpus (₹)</label>
                                        <input type="number" id="swp-corpus" className="form-input" defaultValue="10000000" min="100000" />
                                        <input type="range" id="swp-corpus-slider" className="form-range" min="100000" max="100000000" step="100000" defaultValue="10000000" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="swp-withdrawal">Monthly Withdrawal (₹)</label>
                                        <input type="number" id="swp-withdrawal" className="form-input" defaultValue="50000" min="1000" />
                                        <input type="range" id="swp-withdrawal-slider" className="form-range" min="1000" max="1000000" step="1000" defaultValue="50000" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="swp-rate">Expected Return Rate (p.a %)</label>
                                        <input type="number" id="swp-rate" className="form-input" defaultValue="8" min="1" max="25" />
                                        <input type="range" id="swp-rate-slider" className="form-range" min="1" max="25" step="0.1" defaultValue="8" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="swp-time">Time Period (Years)</label>
                                        <input type="number" id="swp-time" className="form-input" defaultValue="10" min="1" max="40" />
                                        <input type="range" id="swp-time-slider" className="form-range" min="1" max="40" step="1" defaultValue="10" />
                                    </div>
                                </div>
                                <div className="calc-results"
                                    style={{ "padding": "var(--space-2xl)", "flex": "1", "display": "flex", "flexDirection": "column", "justifyContent": "center", "position": "relative", "background": "var(--color-emerald)", "color": "var(--color-white)" }}>
                                    <h3 className="card__title text-center" style={{ "color": "var(--color-white)", "marginBottom": "var(--space-xl)", "fontFamily": "var(--font-serif)" }}>Withdrawal Review</h3>
                                    <div className="result-row" style={{ "borderBottom": "1px solid rgba(255,255,255,0.1)" }}>
                                        <span style={{ "color": "rgba(255,255,255,0.6)", "fontSize": "13px", "textTransform": "uppercase", "letterSpacing": "1px" }}>Total Investment</span>
                                        <span className="result-val" style={{ "color": "var(--color-white)", "fontSize": "18px", "fontWeight": "500" }} id="swp-invested-display">₹1,00,00,000</span>
                                    </div>
                                    <div className="result-row" style={{ "borderBottom": "1px solid rgba(255,255,255,0.1)" }}>
                                        <span style={{ "color": "rgba(255,255,255,0.6)", "fontSize": "13px", "textTransform": "uppercase", "letterSpacing": "1px" }}>Total Withdrawn</span>
                                        <span className="result-val" style={{ "color": "var(--color-gold)", "fontSize": "20px", "fontWeight": "600" }} id="swp-total-withdrawn">₹60,00,000</span>
                                    </div>
                                    <div className="result-row total-row" style={{ "borderTop": "2px solid rgba(255,255,255,0.2)", "marginTop": "20px", "paddingTop": "var(--space-md)" }}>
                                        <span style={{ "color": "rgba(255,255,255,0.6)", "fontSize": "13px", "textTransform": "uppercase", "letterSpacing": "1px" }}>Final Balance</span>
                                        <span className="result-val total-val" style={{ "color": "var(--color-gold)", "fontSize": "32px", "fontWeight": "700" }} id="swp-final-balance">₹98,42,109</span>
                                    </div>
                                    <div className="chart-container mt-lg" style={{ "height": "200px" }}>
                                        <canvas id="swpChart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  CAGR Calculator  */}
                        <div id="calc-cagr" className="calc-section">
                            <div className="calc-grid">
                                <div className="calc-inputs"
                                    style={{ "padding": "var(--space-2xl)", "flex": "1", "background": "var(--color-white)" }}>
                                    <h3 className="card__title">CAGR Calculator</h3>
                                    <div className="input-group">
                                        <label htmlFor="cagr-initial">Initial Value (₹)</label>
                                        <input type="number" id="cagr-initial" className="form-input" defaultValue="100000" min="1000" />
                                        <input type="range" id="cagr-initial-slider" className="form-range" min="1000" max="10000000" step="1000" defaultValue="100000" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="cagr-final">Final Value (₹)</label>
                                        <input type="number" id="cagr-final" className="form-input" defaultValue="310585" min="1000" />
                                        <input type="range" id="cagr-final-slider" className="form-range" min="1000" max="50000000" step="1000" defaultValue="310585" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="cagr-time">Time Period (Years)</label>
                                        <input type="number" id="cagr-time" className="form-input" defaultValue="10" min="1" max="50" />
                                        <input type="range" id="cagr-time-slider" className="form-range" min="1" max="50" step="1" defaultValue="10" />
                                    </div>
                                </div>
                                <div className="calc-results"
                                    style={{ "padding": "var(--space-2xl)", "flex": "1", "display": "flex", "flexDirection": "column", "justifyContent": "center", "position": "relative", "background": "var(--color-emerald)", "color": "var(--color-white)" }}>
                                    <h3 className="card__title text-center" style={{ "color": "var(--color-white)", "marginBottom": "var(--space-xl)", "fontFamily": "var(--font-serif)" }}>Growth Analysis</h3>
                                    <div className="result-row" style={{ "borderBottom": "1px solid rgba(255,255,255,0.1)" }}>
                                        <span style={{ "color": "rgba(255,255,255,0.6)", "fontSize": "13px", "textTransform": "uppercase", "letterSpacing": "1px" }}>Initial Investment</span>
                                        <span className="result-val" style={{ "color": "var(--color-white)", "fontSize": "18px", "fontWeight": "500" }} id="cagr-initial-disp">₹1,00,000</span>
                                    </div>
                                    <div className="result-row" style={{ "borderBottom": "1px solid rgba(255,255,255,0.1)" }}>
                                        <span style={{ "color": "rgba(255,255,255,0.6)", "fontSize": "13px", "textTransform": "uppercase", "letterSpacing": "1px" }}>Final Value</span>
                                        <span className="result-val" style={{ "color": "var(--color-white)", "fontSize": "18px", "fontWeight": "500" }} id="cagr-final-disp">₹3,10,585</span>
                                    </div>
                                    <div className="result-row" style={{ "borderBottom": "1px solid rgba(255,255,255,0.1)" }}>
                                        <span style={{ "color": "rgba(255,255,255,0.6)", "fontSize": "13px", "textTransform": "uppercase", "letterSpacing": "1px" }}>Absolute Return</span>
                                        <span className="result-val" style={{ "color": "var(--color-gold)", "fontSize": "20px", "fontWeight": "600" }} id="cagr-absret">210.58%</span>
                                    </div>
                                    <div className="result-row total-row" style={{ "borderTop": "2px solid rgba(255,255,255,0.2)", "marginTop": "20px", "paddingTop": "var(--space-md)" }}>
                                        <span style={{ "color": "rgba(255,255,255,0.6)", "fontSize": "16px" }}>CAGR</span>
                                        <span className="result-val total-val" id="cagr-result" style={{ "color": "var(--color-gold)" }}>12.00%</span>
                                    </div>
                                    <div className="chart-container mt-lg" style={{ "height": "150px" }}>
                                        <canvas id="cagrChart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/*  Cost of Delay Calculator  */}
                        <div id="calc-cod" className="calc-section">
                            <div className="calc-grid">
                                <div className="calc-inputs"
                                    style={{ "padding": "var(--space-2xl)", "flex": "1", "background": "var(--color-white)" }}>
                                    <h3 className="card__title">Cost of Delay</h3>
                                    <div className="input-group">
                                        <label htmlFor="cod-sip">Monthly SIP Amount (₹)</label>
                                        <input type="number" id="cod-sip" className="form-input" defaultValue="10000" min="1000" />
                                        <input type="range" id="cod-sip-slider" className="form-range" min="1000" max="100000" step="500" defaultValue="10000" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="cod-rate">Expected Return Rate (p.a %)</label>
                                        <input type="number" id="cod-rate" className="form-input" defaultValue="12" min="1" max="30" />
                                        <input type="range" id="cod-rate-slider" className="form-range" min="1" max="30" step="0.5" defaultValue="12" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="cod-time">Investment Horizon (Years)</label>
                                        <input type="number" id="cod-time" className="form-input" defaultValue="20" min="5" max="40" />
                                        <input type="range" id="cod-time-slider" className="form-range" min="5" max="40" step="1" defaultValue="20" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="cod-delay">Delay in Investing (Years)</label>
                                        <input type="number" id="cod-delay" className="form-input" defaultValue="5" min="1" max="15" />
                                        <input type="range" id="cod-delay-slider" className="form-range" min="1" max="15" step="1" defaultValue="5" />
                                    </div>
                                </div>
                                <div className="calc-results"
                                    style={{ "padding": "var(--space-2xl)", "flex": "1", "display": "flex", "flexDirection": "column", "justifyContent": "center", "position": "relative", "background": "var(--color-emerald)", "color": "var(--color-white)" }}>
                                    <h3 className="card__title text-center" style={{ "color": "var(--color-white)", "marginBottom": "var(--space-xl)", "fontFamily": "var(--font-serif)" }}>Impact of Waiting</h3>
                                    <div className="result-row" style={{ "borderBottom": "1px solid rgba(255,255,255,0.1)" }}>
                                        <span style={{ "color": "rgba(255,255,255,0.6)", "fontSize": "13px", "textTransform": "uppercase", "letterSpacing": "1px" }}>Value if Started Today</span>
                                        <span className="result-val" style={{ "color": "var(--color-white)", "fontSize": "18px", "fontWeight": "500" }} id="cod-today">₹99,91,479</span>
                                    </div>
                                    <div className="result-row" style={{ "borderBottom": "1px solid rgba(255,255,255,0.1)" }}>
                                        <span style={{ "color": "rgba(255,255,255,0.6)", "fontSize": "13px", "textTransform": "uppercase", "letterSpacing": "1px" }}>Value if Delayed</span>
                                        <span className="result-val" style={{ "color": "var(--color-white)", "fontSize": "18px", "fontWeight": "500" }} id="cod-delayed">₹50,45,760</span>
                                    </div>
                                    <div className="result-row total-row" style={{ "borderTop": "2px solid rgba(255,255,255,0.2)", "marginTop": "20px", "paddingTop": "var(--space-md)" }}>
                                        <span style={{ "color": "#F87171" }}>Total Cost of Delay</span>
                                        <span className="result-val total-val" id="cod-loss" style={{ "color": "#F87171" }}>₹49,45,719</span>
                                    </div>
                                    <div className="chart-container mt-lg">
                                        <canvas id="codChart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>

            {/*  Quote Section  */}
            <section className="quote-section">
                <div className="container">
                    <blockquote className="quote">
                        "Compound interest is the eighth wonder of the world. He who understands it, earns it; he who doesn't,
                        pays it."
                    </blockquote>
                    <p className="quote__author">- Albert Einstein</p>
                </div>
            </section>

            {/*  CTA Section  */}
            <section className="cta-section">
                <div className="container">
                    <h2>Transform Numbers to Reality</h2>
                    <p>
                        Calculators just show you the path. We walk it with you.
                        Execute your plan seamlessly with our expert guidance.
                    </p>
                    <a href="/services" className="btn btn--white">Explore Our Services</a>
                </div>
            </section>

            {/*  Footer  */}
            <footer className="footer">
                <div className="container">
                    <div className="footer__grid">
                        <div className="footer__brand">
                            <div className="nav__logo">SoundThesis</div>
                            <p>Democratized financial research and accessible wealth management. No minimum investment barriers.</p>
                        </div>
                        <div className="footer__links">
                            <h4>RESEARCH</h4>
                            <a href="/thesis-notes">Thesis Notes</a>
                            <a href="/methodology">Methodology</a>
                        </div>
                        <div className="footer__links">
                            <h4>Services</h4>
                            <a href="/services">Wealth Management</a>
                            <a href="/about-us">About us</a>
                            <a href="/calculators">Calculators</a>
                        </div>
                        <div className="footer__links">
                            <h4>Connect</h4>
                            <a href="mailto:research@soundthesis.com">research@soundthesis.com</a>
                            <a href="/schedule">Schedule Consultation</a>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <p>&copy; 2024 SoundThesis. All rights reserved.</p>
                        <p>Democratized Research. Transparent Wealth Management.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
