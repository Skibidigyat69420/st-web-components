"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function FAQ() {
    return (
        <div style={{ backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-body)' }}>
            {/* Navigation */}
            <nav className="nav" role="navigation" aria-label="Main navigation">
                <div className="nav__inner">
                    <a href="/" className="nav__logo">SoundThesis</a>
                    <button className="nav__toggle" aria-label="Toggle navigation" aria-expanded="false">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul className="nav__links">
                        <li><a href="/" className="nav__link">Home</a></li>
                        <li><a href="/about-us" className="nav__link">Our Philosophy</a></li>
                        <li><a href="/services" className="nav__link">Services</a></li>
                        <li className="nav__cta"><a href="/schedule" className="btn btn--primary btn--small">Contact Us</a></li>
                    </ul>
                </div>
            </nav>

            <section className="section" style={{ paddingTop: '150px' }}>
                <div className="container">
                    <div className="section-header text-center mb-xl">
                        <h1 className="section-header__title">Frequently Asked Questions</h1>
                        <p className="text-muted" style={{ fontSize: '1.2rem', marginTop: '1rem' }}>Everything you need to know about investing with us.</p>
                    </div>

                    <div className="faq-list" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {/* 1. Basics */}
                        <div className="card" style={{ padding: '32px' }}>
                            <h4 style={{ marginBottom: '16px', fontSize: '1.25rem', color: 'var(--color-navy)' }}>What is a Mutual Fund?</h4>
                            <p className="text-muted m-0">A mutual fund pools money from investors to invest in securities like stocks and bonds in accordance with the scheme's objectives. Profits or losses are shared among investors in proportion to their investments.</p>
                        </div>

                        {/* 2. Structure */}
                        <div className="card" style={{ padding: '32px' }}>
                            <h4 style={{ marginBottom: '16px', fontSize: '1.25rem', color: 'var(--color-navy)' }}>What is Net Asset Value (NAV)?</h4>
                            <p className="text-muted m-0">NAV is the market value of the securities held by the scheme divided by the total number of units. It represents the price per unit and changes daily based on market performance.</p>
                        </div>

                        {/* 3. Types */}
                        <div className="card" style={{ padding: '32px' }}>
                            <h4 style={{ marginBottom: '16px', fontSize: '1.25rem', color: 'var(--color-navy)' }}>Open-Ended vs. Close-Ended Schemes?</h4>
                            <p className="text-muted m-0">Open-ended schemes allow buying and selling units continuously without a fixed maturity. Close-ended schemes have a stipulated maturity period (e.g., 3-5 years) and are open for subscription only at launch.</p>
                        </div>

                        {/* 4. Strategies */}
                        <div className="card" style={{ padding: '32px' }}>
                            <h4 style={{ marginBottom: '16px', fontSize: '1.25rem', color: 'var(--color-navy)' }}>Growth vs. Income Schemes?</h4>
                            <p className="text-muted m-0">Growth schemes invest in equities for long-term capital appreciation but carry higher risk. Income schemes invest in fixed-income securities (bonds, gov securities) for steady income with lower risk.</p>
                        </div>

                        {/* 5. SIP */}
                        <div className="card" style={{ padding: '32px' }}>
                            <h4 style={{ marginBottom: '16px', fontSize: '1.25rem', color: 'var(--color-navy)' }}>What is a Systematic Investment Plan (SIP)?</h4>
                            <p className="text-muted m-0">SIP allows you to invest a fixed small amount regularly (e.g., monthly). It helps average out the cost of purchase over time and instills financial discipline without trying to time the market.</p>
                        </div>

                        {/* 6. Expense */}
                        <div className="card" style={{ padding: '32px' }}>
                            <h4 style={{ marginBottom: '16px', fontSize: '1.25rem', color: 'var(--color-navy)' }}>What is an Expense Ratio?</h4>
                            <p className="text-muted m-0">It is the annual fee charged by the fund to manage your money, covering administration and management costs. It is expressed as a percentage of the fund's daily net assets.</p>
                        </div>

                        {/* 7. Direct Plan */}
                        <div className="card" style={{ padding: '32px' }}>
                            <h4 style={{ marginBottom: '16px', fontSize: '1.25rem', color: 'var(--color-navy)' }}>What is a Direct Plan?</h4>
                            <p className="text-muted m-0">Direct plans are purchased directly from the mutual fund, avoiding distributor commissions. This results in a lower expense ratio and potentially higher returns compared to regular plans.</p>
                        </div>

                        {/* 8. Tax Saving */}
                        <div className="card" style={{ padding: '32px' }}>
                            <h4 style={{ marginBottom: '16px', fontSize: '1.25rem', color: 'var(--color-navy)' }}>What are Tax Saving Schemes (ELSS)?</h4>
                            <p className="text-muted m-0">Equity Linked Savings Schemes (ELSS) offer tax rebates under Section 80C. They are growth-oriented equity funds with a lock-in period, suitable for long-term wealth creation.</p>
                        </div>

                        {/* 9. NRIs */}
                        <div className="card" style={{ padding: '32px' }}>
                            <h4 style={{ marginBottom: '16px', fontSize: '1.25rem', color: 'var(--color-navy)' }}>Can Non-Resident Indians (NRIs) invest?</h4>
                            <p className="text-muted m-0">Yes, NRIs can invest in mutual funds. Specific details and requirements are typically provided in the scheme's offer documents.</p>
                        </div>

                        {/* 10. Safety */}
                        <div className="card" style={{ padding: '32px' }}>
                            <h4 style={{ marginBottom: '16px', fontSize: '1.25rem', color: 'var(--color-navy)' }}>Is my money safe?</h4>
                            <p className="text-muted m-0">Mutual funds are regulated by SEBI to protect investor interests. However, all investments carry market risk, and returns are not guaranteed. Always read the offer document carefully.</p>
                        </div>

                        {/* 11. Complaints */}
                        <div className="card" style={{ padding: '32px' }}>
                            <h4 style={{ marginBottom: '16px', fontSize: '1.25rem', color: 'var(--color-navy)' }}>How can I redress complaints?</h4>
                            <p className="text-muted m-0">You can approach SoundThesis first for an internal escalation and resolution. If unresolved, you can lodge a complaint with SEBI via the SCORES (SEBI Complaints Redress System) online platform.</p>
                        </div>

                        {/* 12. ETFs */}
                        <div className="card" style={{ padding: '32px' }}>
                            <h4 style={{ marginBottom: '16px', fontSize: '1.25rem', color: 'var(--color-navy)' }}>What are Exchange Traded Funds (ETFs)?</h4>
                            <p className="text-muted m-0">ETFs are mutual fund units that trade on stock exchanges like shares. They offer the diversification of a mutual fund with the trading flexibility of a stock.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer mt-2xl">
                <div className="container">
                    <div className="footer__grid">
                        <div className="footer__brand">
                            <div className="nav__logo" style={{ color: 'white', fontSize: '24px', marginBottom: '20px' }}>SoundThesis</div>
                            <p>Investor-first. Research-driven. Trusted experts.</p>
                        </div>
                        <div className="footer__links">
                            <h4>RESEARCH</h4>
                            <a href="/methodology">Methodology</a>
                        </div>
                        <div className="footer__links">
                            <h4>SERVICES</h4>
                            <a href="/services">Wealth Management</a>
                            <a href="/about-us">Our Philosophy</a>
                        </div>
                        <div className="footer__links">
                            <h4>CONNECT</h4>
                            <a href="mailto:research@soundthesis.com">research@soundthesis.com</a>
                            <a href="/schedule">Contact Us</a>
                        </div>
                    </div>
                    <div className="footer__bottom" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "40px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)" }}>
                        <p>© 2026 SoundThesis. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
