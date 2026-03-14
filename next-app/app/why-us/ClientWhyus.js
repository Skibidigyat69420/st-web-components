"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function ClientWhyus() {
    return (
        <>
            {/*  Navigation  */}
            <nav className="nav" role="navigation" aria-label="Main navigation">
                <div className="nav__inner">
                    <a href="/" className="nav__logo">Sound Thesis</a>
                    <button className="nav__toggle" aria-label="Toggle navigation" aria-expanded="false">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul className="nav__links">
                        <li><a href="/thesis-notes" className="nav__link">Thesis Notes</a></li>
                        <li><a href="/services" className="nav__link">Services</a></li>
                        <li><a href="/why-us" className="nav__link nav__link--active">Why We Exist</a></li>
                        <li><a href="/calculators" className="nav__link">Calculators</a></li>
                        <li className="nav__cta"><a href="/schedule" className="btn btn--primary btn--small">Schedule Consultation</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/*  Hero Section  */}
            <section className="hero" style={{ "minHeight": "60vh" }}>
                <motion.div 
                    className="hero__content"
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
                >
                    <motion.h1 
                        className="hero__title"
                        initial={{ opacity: 0, y: 40, rotateX: 15 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
                    >
                        Why We Exist
                    </motion.h1>
                    <motion.div 
                        className="hero__divider"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    ></motion.div>
                    <motion.p 
                        className="hero__description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        In an industry defined by hidden costs and conflicts of interest, we built something fundamentally
                        different around four core pillars.
                        Here's why it matters.
                    </motion.p>
                </motion.div>
            </section>

            {/*  The Problem & The Case for Objectivity  */}
            <section className="section section--white">
                <div className="container pattern-bg"
                    style={{ "maxWidth": "800px", "padding": "var(--space-xl) var(--space-md)", "borderRadius": "var(--radius-lg)" }}>
                    <motion.div 
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-header__title">The Case for Objectivity</h2>
                        <div className="section-header__divider"></div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                        }}
                    >
                        <motion.p variants={{ hidden: { opacity: 0, scale: 0.98, y: 20 }, visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } } }} style={{ "fontSize": "18px", "lineHeight": "1.8", "marginBottom": "var(--space-md)" }}>
                            The reason we do what we do is because traditional wealth management historically focuses purely on
                            finding the "best mutual fund" or timing the market. It treats investing purely as a math problem.
                            For decades, the most sophisticated financial research has been locked away—developed
                            in closed environments, validated by internal committees, and shared only with those
                            who could afford the price of admission. Meanwhile, wealth management has been plagued
                            by hidden fees and misaligned incentives.
                        </motion.p>
                        <motion.p variants={{ hidden: { opacity: 0, scale: 0.98, y: 20 }, visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } } }} style={{ "fontSize": "18px", "lineHeight": "1.8", "marginBottom": "var(--space-md)" }}>
                            But the reality is that behavioral mistakes—panic selling during a drawdown, chasing last year's
                            winners, abandoning a strategy prematurely—destroy more wealth than fund selection creates. An
                            institutional investor has committees to enforce discipline. A retail investor is usually alone.
                        </motion.p>
                        <motion.p variants={{ hidden: { opacity: 0, scale: 0.98, y: 20 }, visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } } }} style={{ "fontSize": "18px", "lineHeight": "1.8", "marginBottom": "var(--space-md)" }}>
                            We believe that <strong>objectivity leads to better outcomes</strong>. We provide the institutional-grade research, transparency, and behavioral framing required to navigate long-term compounding successfully. When our frameworks are open, they become stronger. When our interests are fully aligned through transparent pricing, trust is built. When we focus on behavioral coaching rather than market timing, wealth is preserved.
                        </motion.p>
                        <motion.p variants={{ hidden: { opacity: 0, scale: 0.98, y: 20 }, visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } } }} style={{ "fontSize": "18px", "lineHeight": "1.8", "color": "var(--color-navy)", "fontWeight": "500" }}>
                            Our advantage comes not from secrecy or complex fee structures, but from the rigorous application of
                            standardized processes and fiduciary responsibility.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/*  Our Core Pillars (From Philosophy)  */}
            <section className="section section--secondary">
                <div className="container">
                    <motion.div 
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-header__title">Our Core Pillars</h2>
                        <div className="section-header__divider"></div>
                        <p className="text-muted">How our model fundamentally differs from the industry standard.</p>
                    </motion.div>

                    <motion.div 
                        className="interactive-widget principle-accordion"
                        initial={{ opacity: 0, scale: 0.95, y: 40 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ type: "spring", stiffness: 70, damping: 18 }}
                    >
                        {/* Accordion Item 1 */}
                        <div className="accordion-item active">
                            <button className="accordion-header" aria-expanded="true">
                                <span className="accordion-title">Fiduciary Responsibility &amp; Transparency</span>
                                <span className="accordion-icon"></span>
                            </button>
                            <div className="accordion-content">
                                <div className="accordion-grid">
                                    <div className="accordion-col trad-col">
                                        <h5>Traditional</h5>
                                        <p className="text-small text-muted">Complex fee structures, hidden commissions, and
                                            conflicts of interest that erode long-term returns.</p>
                                    </div>
                                    <div className="accordion-col st-col">
                                        <h5>Sound Thesis</h5>
                                        <p className="text-small">Clear, honest pricing with no hidden costs for our wealth
                                            services. Total alignment of interests.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Accordion Item 2 */}
                        <div className="accordion-item">
                            <button className="accordion-header" aria-expanded="false">
                                <span className="accordion-title">Research-Driven</span>
                                <span className="accordion-icon"></span>
                            </button>
                            <div className="accordion-content" style={{ display: "none" }}>
                                <div className="accordion-grid">
                                    <div className="accordion-col trad-col">
                                        <h5>Traditional</h5>
                                        <p className="text-small text-muted">Proprietary &quot;black box&quot; algorithms or narrative-based
                                            investing without verifiable data.</p>
                                    </div>
                                    <div className="accordion-col st-col">
                                        <h5>Sound Thesis</h5>
                                        <p className="text-small">All our models and methodologies are published openly.
                                            Transparent, verifiable, and freely accessible.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Accordion Item 3 */}
                        <div className="accordion-item">
                            <button className="accordion-header" aria-expanded="false">
                                <span className="accordion-title">High-Quality Advisors &amp; Behavioral Focus</span>
                                <span className="accordion-icon"></span>
                            </button>
                            <div className="accordion-content" style={{ display: "none" }}>
                                <div className="accordion-grid">
                                    <div className="accordion-col trad-col">
                                        <h5>Traditional</h5>
                                        <p className="text-small text-muted">Sales-driven relationship managers focused on product
                                            distribution rather than coaching.</p>
                                    </div>
                                    <div className="accordion-col st-col">
                                        <h5>Sound Thesis</h5>
                                        <p className="text-small">Expert coaching to prevent emotional decisions and compounding
                                            errors over your investment journey.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Accordion Item 4 */}
                        <div className="accordion-item">
                            <button className="accordion-header" aria-expanded="false">
                                <span className="accordion-title">Standardized Processes</span>
                                <span className="accordion-icon"></span>
                            </button>
                            <div className="accordion-content" style={{ display: "none" }}>
                                <div className="accordion-grid">
                                    <div className="accordion-col trad-col">
                                        <h5>Traditional</h5>
                                        <p className="text-small text-muted">Inconsistent execution dependent on individual
                                            relationship managers or changing internal whims.</p>
                                    </div>
                                    <div className="accordion-col st-col">
                                        <h5>Sound Thesis</h5>
                                        <p className="text-small">Reliable, systematized execution ensuring every client receives
                                            institutional-grade wealth management.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/*  Interactive Matrix Widget  */}
            <section className="section section--white">
                <div className="container">
                    <motion.div 
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-header__title">Is Sound Thesis Right For You?</h2>
                        <div className="section-header__divider"></div>
                        <p className="text-muted">An interactive guide to our ideal client fit.</p>
                    </motion.div>

                    <motion.div 
                        className="interactive-widget matrix-widget"
                        initial={{ opacity: 0, scale: 0.92, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ type: "spring", stiffness: 80, damping: 20 }}
                    >
                        <div className="matrix-toggle">
                            <span className="matrix-label active" id="btnTrad">Traditional Approach</span>
                            <label className="switch">
                                <input type="checkbox" id="matrixToggle" />
                                <span className="slider round"></span>
                            </label>
                            <span className="matrix-label" id="btnSt">Sound Thesis Approach</span>
                        </div>

                        <div className="matrix-content-wrapper">
                            <div className="matrix-pane trad-pane active" id="paneTrad">
                                <ul className="matrix-list">
                                    <li><span className="matrix-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                                        className="matrix-svg matrix-svg--danger">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg></span> Content with hidden, bundled fees.</li>
                                    <li><span className="matrix-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                                        className="matrix-svg matrix-svg--danger">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg></span> Prefers a "black box" where decisions are made
                                        without explanation.</li>
                                    <li><span className="matrix-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                                        className="matrix-svg matrix-svg--danger">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg></span> Seeks hot stock tips and short-term trading signals.
                                    </li>
                                    <li><span className="matrix-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                                        className="matrix-svg matrix-svg--danger">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg></span> Relies entirely on the brand name rather than
                                        verifiable methodology.</li>
                                </ul>
                            </div>
                            <div className="matrix-pane st-pane" id="paneSt">
                                <ul className="matrix-list">
                                    <li><span className="matrix-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                                        className="matrix-svg matrix-svg--success">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg></span> Demands complete transparency in fee structures
                                        (Fee-only, 0% commissions).</li>
                                    <li><span className="matrix-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                                        className="matrix-svg matrix-svg--success">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg></span> Wants to understand the "why" behind every investment
                                        decision.</li>
                                    <li><span className="matrix-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                                        className="matrix-svg matrix-svg--success">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg></span> Values long-term, macroeconomic stability over
                                        short-term noise.</li>
                                    <li><span className="matrix-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                                        className="matrix-svg matrix-svg--success">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg></span> Believes financial research should be accessible
                                        and open for scrutiny.</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quote Carousel Widget */}
            <section className="section section--secondary quote-carousel-section" style={{ padding: "var(--space-2xl) 0" }}>
                <div className="container">
                    <motion.div 
                        className="quote-carousel-container interactive-widget"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="quote-carousel-track" id="philosophyQuoteTrack">
                            {/* Quotes will be injected via JS */}
                        </div>
                        <div className="carousel-indicators" id="quoteIndicators">
                            {/* Indicators injected via JS */}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/*  CTA Section  */}
            <section className="cta-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Start by Reading Our Research</h2>
                        <p>
                            The best way to understand us is to experience our work. Explore our Thesis Notes
                            and see if our approach resonates with you.
                        </p>
                        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/thesis-notes" className="btn btn--white">Browse Thesis Notes</motion.a>
                    </motion.div>
                </div>
            </section>

            {/*  Footer  */}
            <footer className="footer">
                <div className="container">
                    <div className="footer__grid">
                        <div className="footer__brand">
                            <div className="nav__logo">Sound Thesis</div>
                            <p>Institutional-grade wealth management powered by accessible research, fiduciary transparency,
                                and behavioral coaching.</p>
                        </div>
                        <div className="footer__links">
                            <h4>Research</h4>
                            <a href="/thesis-notes">Thesis Notes</a>
                        </div>
                        <div className="footer__links">
                            <h4>Services</h4>
                            <a href="/services">Wealth Management</a>
                            <a href="/why-us">Why We Exist</a>
                        </div>
                        <div className="footer__links">
                            <h4>Connect</h4>
                            <a href="mailto:research@soundthesis.com">research@soundthesis.com</a>
                            <a href="/schedule">Schedule Consultation</a>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <p>&copy; 2024 Sound Thesis. All rights reserved.</p>
                        <p>Fiduciary Alignment. Research-Driven. Behavioral Focus. Standardized Processes.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
