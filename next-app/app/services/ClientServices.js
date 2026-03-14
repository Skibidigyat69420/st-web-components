"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function ClientServices() {
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
                    <ul className="nav__links">                        <li><a href="/thesis-notes" className="nav__link">Thesis Notes</a></li>
                        <li><a href="/services" className="nav__link nav__link--active">Services</a></li>
                        <li><a href="/why-us" className="nav__link">Why We Exist</a></li>
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
                        Wealth Management,<br />Built on Four Core Pillars.
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
                        Fiduciary transparency, accessible research, behavioral coaching, and systematized execution.
                        Apply institutional-grade analysis to your wealth.
                    </motion.p>
                </motion.div>
            </section>

            {/*  No Minimums Statement  */}
            <section className="section section--white">
                <div className="container text-center" style={{ "maxWidth": "800px" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="mb-md">No Minimum Investment Required</h2>
                        <div className="section-header__divider" style={{ "margin": "0 auto var(--space-md)" }}></div>
                        <p style={{ "fontSize": "18px", "lineHeight": "1.8" }}>
                            We believe sophisticated strategies shouldn't have a ticket price. Traditional wealth managers
                            require $1M, $5M, or more to access their services. We rejected that model entirely.
                        </p>
                        <p className="text-muted" style={{ "marginTop": "var(--space-md)" }}>
                            Our service tiers are based on the level of support you need - not the size of your portfolio.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/*  Service Tiers  */}
            <section className="section">
                <div className="container">
                    <motion.div 
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-header__title">Ways to Engage</h2>
                        <p className="text-muted">Choose how you want to apply our research.</p>
                    </motion.div>
                    <motion.div 
                        className="bento-grid"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {/*  Wealth Implementation  */}
                        <motion.div 
                            className="bento-item bento-col-12 hover-lift"
                            style={{ "background": "linear-gradient(145deg, var(--color-navy) 0%, var(--color-navy-dark) 100%)", "color": "white", "border": "none" }}
                            whileHover={{ y: -5 }}
                        >
                            <div style={{ "display": "flex", "flexDirection": "column", "height": "100%", "position": "relative", "zIndex": "2" }}>
                                <h3 className="card__title" style={{ "color": "white", "fontSize": "32px" }}>Wealth Implementation</h3>
                                <p className="text-small mb-md"
                                    style={{ "color": "var(--color-gold)", "fontWeight": "600", "textTransform": "uppercase", "letterSpacing": "1px" }}>
                                    Distribution Based Wealth Management</p>
                                <p className="card__description"
                                    style={{ "color": "rgba(255,255,255,0.8)", "fontSize": "18px", "maxWidth": "90%" }}>
                                    We implement your portfolio into <strong>Mutual Funds, AIFs, PMS, and SIFs</strong>.
                                    Services include tax-optimized portfolios and full rebalancing.
                                </p>
                                <div
                                    style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "var(--space-md)", "marginBottom": "var(--space-xl)", "marginTop": "auto" }}>
                                    <div
                                        style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px", "background": "rgba(255,255,255,0.05)", "padding": "16px", "borderRadius": "12px" }}>
                                        <svg style={{ "color": "var(--color-gold)", "width": "24px", "height": "24px", "flexShrink": "0" }}
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span style={{ "fontWeight": "500" }}>Fiduciary-aligned implementation (No hidden
                                            costs)</span>
                                    </div>
                                    <div
                                        style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px", "background": "rgba(255,255,255,0.05)", "padding": "16px", "borderRadius": "12px" }}>
                                        <svg style={{ "color": "var(--color-gold)", "width": "24px", "height": "24px", "flexShrink": "0" }}
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span style={{ "fontWeight": "500" }}>Research-driven portfolio construction</span>
                                    </div>
                                    <div
                                        style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px", "background": "rgba(255,255,255,0.05)", "padding": "16px", "borderRadius": "12px" }}>
                                        <svg style={{ "color": "var(--color-gold)", "width": "24px", "height": "24px", "flexShrink": "0" }}
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span style={{ "fontWeight": "500" }}>Dedicated behavioral coaching & guidance</span>
                                    </div>
                                    <div
                                        style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px", "background": "rgba(255,255,255,0.05)", "padding": "16px", "borderRadius": "12px" }}>
                                        <svg style={{ "color": "var(--color-gold)", "width": "24px", "height": "24px", "flexShrink": "0" }}
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span style={{ "fontWeight": "500" }}>Systematized execution & standardized monitoring</span>
                                    </div>
                                </div>
                                <div
                                    style={{ "paddingTop": "var(--space-md)", "borderTop": "1px dashed rgba(255,255,255,0.2)", "display": "flex", "alignItems": "center", "justifyContent": "flex-end" }}>
                                    <motion.a 
                                        whileHover={{ scale: 1.05 }} 
                                        whileTap={{ scale: 0.95 }} 
                                        href="/schedule" 
                                        className="btn btn--white"
                                        style={{ "borderRadius": "var(--radius-pill)" }}>Schedule Consultation</motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>


            {/*  How We Select Clients  */}
            <section className="section section--secondary">
                <div className="container text-center" style={{ "maxWidth": "800px" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="mb-md">How We Select Clients</h2>
                        <div className="section-header__divider" style={{ "margin": "0 auto var(--space-md)" }}></div>
                        <p style={{ "fontSize": "18px", "lineHeight": "1.8" }}>
                            We are deliberate about who we work with. Implementation shouldn't be focused entirely on minimums, but
                            on alignment. We seek investors who value our fiduciary commitment, understand our research-driven
                            methodology,
                            desire behavioral discipline, and appreciate the reliability of standardized processes.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/*  Products Offered  */}
            <section className="section section--navy"
                style={{ "background": "linear-gradient(145deg, var(--color-navy) 0%, var(--color-navy-dark) 100%)", "color": "white" }}>
                <div className="container">
                    <motion.div 
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-header__title" style={{ "color": "white", "marginBottom": "var(--space-md)" }}>Products Offered
                        </h2>
                        <div className="section-header__divider"
                            style={{ "margin": "0 auto var(--space-md)", "background": "var(--color-gold)" }}></div>
                        <p style={{ "color": "rgba(255,255,255,0.8)" }}>A comprehensive suite of investment vehicles tailored to your
                            wealth strategy.</p>
                    </motion.div>

                    <motion.div 
                        className="grid grid--2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                        }}
                    >
                        {/*  Mutual Funds  */}
                        <motion.div 
                            className="card"
                            variants={{ hidden: { opacity: 0, scale: 0.95, y: 30 }, visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } } }}
                            whileHover={{ y: -5 }}
                            style={{ "background": "rgba(255,255,255,0.03)", "border": "1px solid rgba(212, 168, 77, 0.2)", "borderRadius": "16px", "padding": "var(--space-lg)", "transition": "none" }}>
                            <div style={{ "display": "flex", "alignItems": "center", "gap": "16px", "marginBottom": "var(--space-md)" }}>
                                <div
                                    style={{ "width": "48px", "height": "48px", "borderRadius": "12px", "background": "rgba(212, 168, 77, 0.1)", "display": "flex", "alignItems": "center", "justifyContent": "center", "color": "var(--color-gold)" }}>
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 style={{ "color": "var(--color-white)", "margin": "0", "fontSize": "24px" }}>Mutual Funds</h3>
                            </div>
                            <p style={{ "color": "rgba(255,255,255,0.7)", "fontSize": "16px", "marginBottom": "0" }}>Regulated pooled
                                investment vehicles offering diversified exposure across asset classes with high liquidity and
                                transparency.</p>
                        </motion.div>

                        {/*  PMS  */}
                        <motion.div 
                            className="card"
                            variants={{ hidden: { opacity: 0, scale: 0.95, y: 30 }, visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } } }}
                            whileHover={{ y: -5 }}
                            style={{ "background": "rgba(255,255,255,0.03)", "border": "1px solid rgba(212, 168, 77, 0.2)", "borderRadius": "16px", "padding": "var(--space-lg)", "transition": "none" }}>
                            <div style={{ "display": "flex", "alignItems": "center", "gap": "16px", "marginBottom": "var(--space-md)" }}>
                                <div
                                    style={{ "width": "48px", "height": "48px", "borderRadius": "12px", "background": "rgba(212, 168, 77, 0.1)", "display": "flex", "alignItems": "center", "justifyContent": "center", "color": "var(--color-gold)" }}>
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 style={{ "color": "var(--color-white)", "margin": "0", "fontSize": "24px" }}>PMS</h3>
                            </div>
                            <p style={{ "color": "rgba(255,255,255,0.7)", "fontSize": "16px", "marginBottom": "0" }}>Portfolio Management
                                Services offering customized portfolios managed by professionals for targeted and sophisticated
                                strategies.</p>
                        </motion.div>

                        {/*  AIF  */}
                        <motion.div 
                            className="card"
                            variants={{ hidden: { opacity: 0, scale: 0.95, y: 30 }, visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } } }}
                            whileHover={{ y: -5 }}
                            style={{ "background": "rgba(255,255,255,0.03)", "border": "1px solid rgba(212, 168, 77, 0.2)", "borderRadius": "16px", "padding": "var(--space-lg)", "transition": "none" }}>
                            <div style={{ "display": "flex", "alignItems": "center", "gap": "16px", "marginBottom": "var(--space-md)" }}>
                                <div
                                    style={{ "width": "48px", "height": "48px", "borderRadius": "12px", "background": "rgba(212, 168, 77, 0.1)", "display": "flex", "alignItems": "center", "justifyContent": "center", "color": "var(--color-gold)" }}>
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <h3 style={{ "color": "var(--color-white)", "margin": "0", "fontSize": "24px" }}>AIF</h3>
                            </div>
                            <p style={{ "color": "rgba(255,255,255,0.7)", "fontSize": "16px", "marginBottom": "0" }}>Alternative Investment
                                Funds providing sophisticated access to non-traditional assets like private equity, venture
                                capital, and structured products.</p>
                        </motion.div>

                        {/*  SIF  */}
                        <motion.div 
                            className="card"
                            variants={{ hidden: { opacity: 0, scale: 0.95, y: 30 }, visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } } }}
                            whileHover={{ y: -5 }}
                            style={{ "background": "rgba(255,255,255,0.03)", "border": "1px solid rgba(212, 168, 77, 0.2)", "borderRadius": "16px", "padding": "var(--space-lg)", "transition": "none" }}>
                            <div style={{ "display": "flex", "alignItems": "center", "gap": "16px", "marginBottom": "var(--space-md)" }}>
                                <div
                                    style={{ "width": "48px", "height": "48px", "borderRadius": "12px", "background": "rgba(212, 168, 77, 0.1)", "display": "flex", "alignItems": "center", "justifyContent": "center", "color": "var(--color-gold)" }}>
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 style={{ "color": "var(--color-white)", "margin": "0", "fontSize": "24px" }}>SIF</h3>
                            </div>
                            <p style={{ "color": "rgba(255,255,255,0.7)", "fontSize": "16px", "marginBottom": "0" }}>Specialized Investment
                                Funds structured to capture niche market opportunities, thematic strategies, or specific
                                geographical exposures.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/*  Overview & Scope  */}
            <section className="section">
                <div className="container">
                    <motion.div 
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-header__title">Our Approach & Process</h2>
                        <div className="section-header__divider"></div>
                        <p className="text-muted">An overview of our role and working structure.</p>
                    </motion.div>

                    <motion.div 
                        className="bento-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                        }}
                    >
                        {/*  What We Do / How We Work  */}
                        <motion.div 
                            className="bento-item bento-col-4 hover-lift"
                            variants={{ hidden: { opacity: 0, scale: 0.95, y: 30 }, visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } } }}
                            style={{ "display": "flex", "flexDirection": "column", "justifyContent": "space-between" }}
                        >
                            <div>
                                <h3 className="mb-sm">What We Do</h3>
                                <p className="text-muted mb-md">Facilitating distribution of various financial products and related
                                    transactions.</p>

                                <h3 className="mb-sm" style={{ "marginTop": "var(--space-md)" }}>How We Work</h3>
                                <p className="text-muted mb-md">A structured, process-driven approach to investing.</p>

                                <h3 className="mb-sm" style={{ "marginTop": "var(--space-md)" }}>Engagement</h3>
                                <p className="text-muted">Flexible options for client interaction.</p>
                            </div>
                        </motion.div>

                        {/*  Scope of Our Role (Comparison)  */}
                        <motion.div 
                            className="bento-item bento-col-8 hover-lift" 
                            style={{ "background": "var(--color-surface)" }}
                            variants={{ hidden: { opacity: 0, scale: 0.95, y: 30 }, visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } } }}
                        >
                            <h3 className="mb-md">Scope of Our Role</h3>
                            <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "var(--space-md)" }}>

                                {/*  We Support Clients With  */}
                                <div>
                                    <h4
                                        style={{ "color": "var(--color-gold)", "marginBottom": "var(--space-sm)", "paddingBottom": "var(--space-xs)", "borderBottom": "2px solid var(--color-gold)" }}>
                                        We Support Clients With</h4>
                                    <ul style={{ "listStyle": "none", "padding": "0" }}>
                                        <li style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px", "marginBottom": "12px" }}>
                                            <svg style={{ "color": "var(--color-gold)", "width": "20px", "height": "20px", "flexShrink": "0", "marginTop": "2px" }}
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-muted">Understanding financial products</span>
                                        </li>
                                        <li style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px", "marginBottom": "12px" }}>
                                            <svg style={{ "color": "var(--color-gold)", "width": "20px", "height": "20px", "flexShrink": "0", "marginTop": "2px" }}
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-muted">Risk profiling</span>
                                        </li>
                                        <li style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px", "marginBottom": "12px" }}>
                                            <svg style={{ "color": "var(--color-gold)", "width": "20px", "height": "20px", "flexShrink": "0", "marginTop": "2px" }}
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-muted">Facilitating transactions</span>
                                        </li>
                                        <li style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px", "marginBottom": "12px" }}>
                                            <svg style={{ "color": "var(--color-gold)", "width": "20px", "height": "20px", "flexShrink": "0", "marginTop": "2px" }}
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-muted">Portfolio monitoring support</span>
                                        </li>
                                    </ul>
                                </div>

                                {/*  We Do Not  */}
                                <div>
                                    <h4
                                        style={{ "color": "#64748b", "marginBottom": "var(--space-sm)", "paddingBottom": "var(--space-xs)", "borderBottom": "2px solid #e2e8f0" }}>
                                        We Do Not</h4>
                                    <ul style={{ "listStyle": "none", "padding": "0", "opacity": "0.8" }}>
                                        <li style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px", "marginBottom": "12px" }}>
                                            <svg style={{ "color": "#64748b", "width": "20px", "height": "20px", "flexShrink": "0", "marginTop": "2px" }}
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <span className="text-muted">Manufacture financial products</span>
                                        </li>
                                        <li style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px", "marginBottom": "12px" }}>
                                            <svg style={{ "color": "#64748b", "width": "20px", "height": "20px", "flexShrink": "0", "marginTop": "2px" }}
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <span className="text-muted">Manage client money directly</span>
                                        </li>
                                        <li style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px", "marginBottom": "12px" }}>
                                            <svg style={{ "color": "#64748b", "width": "20px", "height": "20px", "flexShrink": "0", "marginTop": "2px" }}
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <span className="text-muted">Take discretionary investment decisions</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div
                                style={{ "marginTop": "var(--space-md)", "padding": "12px", "background": "rgba(212, 168, 77, 0.05)", "borderRadius": "8px", "borderLeft": "3px solid var(--color-gold)" }}>
                                <p className="text-small" style={{ "margin": "0" }}><strong>Note:</strong> All investments are made by
                                    clients in their own accounts.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/*  Client Onboarding Process  */}
            <section className="section section--secondary">
                <div className="container">
                    <motion.div 
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-header__title">Client Onboarding Process</h2>
                        <div className="section-header__divider"></div>
                    </motion.div>

                    <motion.div 
                        className="process-steps"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                        }}
                    >
                        <motion.div variants={{ hidden: { opacity: 0, scale: 0.8, y: 30 }, visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 14 } } }} className="process-step">
                            <div className="process-step__number">1</div>
                            <h4 className="process-step__title">Risk Profiling</h4>
                            <p className="text-small text-muted">Collecting info on financial goals, time horizon, and risk
                                tolerance.</p>
                        </motion.div>
                        <motion.div variants={{ hidden: { opacity: 0, scale: 0.8, y: 30 }, visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 14 } } }} className="process-step">
                            <div className="process-step__number">2</div>
                            <h4 className="process-step__title">IPS Creation</h4>
                            <p className="text-small text-muted">Drafting a written document to record preferences and constraints.
                            </p>
                        </motion.div>
                        <motion.div variants={{ hidden: { opacity: 0, scale: 0.8, y: 30 }, visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 14 } } }} className="process-step">
                            <div className="process-step__number">3</div>
                            <h4 className="process-step__title">Construction</h4>
                            <p className="text-small text-muted">Presenting options and explaining asset allocation.</p>
                        </motion.div>
                        <motion.div variants={{ hidden: { opacity: 0, scale: 0.8, y: 30 }, visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 14 } } }} className="process-step">
                            <div className="process-step__number">4</div>
                            <h4 className="process-step__title">Decision</h4>
                            <p className="text-small text-muted">Final investment decisions are made by the client.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/*  Ongoing Portfolio Support  */}
            <section className="section section--navy"
                style={{ "background": "linear-gradient(145deg, var(--color-navy) 0%, var(--color-navy-dark) 100%)", "color": "white" }}>
                <div className="container">
                    <motion.div 
                        className="section-header"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-header__title" style={{ "fontFamily": "var(--font-serif)", "color": "white" }}>Ongoing Portfolio Support</h2>
                        <div className="section-header__divider" style={{ "background": "var(--color-gold)", "margin": "0 auto var(--space-md)" }}></div>
                    </motion.div>

                    {/*  Horizontal Layout for Ongoing Support  */}
                    <motion.div 
                        className="hide-scrollbar"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                        }}
                        style={{ "display": "flex", "flexDirection": "row", "gap": "var(--space-lg)", "overflowX": "auto", "padding": "var(--space-md) 0 var(--space-xl) 0", "flexWrap": "nowrap", "WebkitOverflowScrolling": "touch" }}
                    >
                        {/*  Periodic Reviews  */}
                        <motion.div 
                            className="bento-item hover-lift card--center glass-panel"
                            variants={{ hidden: { opacity: 0, scale: 0.95, x: 50 }, visible: { opacity: 1, scale: 1, x: 0, transition: { type: "spring", stiffness: 90, damping: 15 } } }}
                            style={{ "flex": "1", "minWidth": "320px", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "flex-start", "padding": "var(--space-2xl) var(--space-xl)", "border": "1px solid rgba(212, 168, 77, 0.2)", "background": "rgba(255, 255, 255, 0.05)", "backdropFilter": "blur(12px)", "boxShadow": "0 8px 32px 0 rgba(0, 0, 0, 0.37)" }}>
                            <div
                                style={{ "width": "70px", "height": "70px", "background": "linear-gradient(135deg, rgba(212, 168, 77, 0.2) 0%, rgba(212, 168, 77, 0.05) 100%)", "borderRadius": "20px", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "var(--space-lg)", "color": "var(--color-gold)", "boxShadow": "0 4px 15px rgba(212, 168, 77, 0.2)" }}>
                                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="mb-md" style={{ "fontFamily": "var(--font-serif)", "color": "var(--color-gold)" }}>Periodic Reviews</h3>
                            <p style={{ "lineHeight": "1.6", "color": "rgba(255, 255, 255, 0.8)" }}>Portfolios are reviewed periodically to ensure alignment with goals.</p>
                        </motion.div>

                        {/*  Information Sharing  */}
                        <motion.div 
                            className="bento-item hover-lift card--center glass-panel"
                            variants={{ hidden: { opacity: 0, scale: 0.95, x: 50 }, visible: { opacity: 1, scale: 1, x: 0, transition: { type: "spring", stiffness: 90, damping: 15 } } }}
                            style={{ "flex": "1", "minWidth": "320px", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "flex-start", "padding": "var(--space-2xl) var(--space-xl)", "border": "1px solid rgba(212, 168, 77, 0.2)", "background": "rgba(255, 255, 255, 0.05)", "backdropFilter": "blur(12px)", "boxShadow": "0 8px 32px 0 rgba(0, 0, 0, 0.37)" }}>
                            <div
                                style={{ "width": "70px", "height": "70px", "background": "linear-gradient(135deg, rgba(212, 168, 77, 0.2) 0%, rgba(212, 168, 77, 0.05) 100%)", "borderRadius": "20px", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "var(--space-lg)", "color": "var(--color-gold)", "boxShadow": "0 4px 15px rgba(212, 168, 77, 0.2)" }}>
                                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="mb-md" style={{ "fontFamily": "var(--font-serif)", "color": "var(--color-gold)" }}>Information Sharing</h3>
                            <ul style={{ "listStyle": "none", "padding": "0", "textAlign": "left", "display": "inline-block", "width": "100%", "color": "rgba(255, 255, 255, 0.8)" }}>
                                <li style={{ "marginBottom": "10px", "display": "flex", "alignItems": "center", "gap": "8px" }}><span style={{ "color": "var(--color-gold)" }}>•</span> Portfolio composition</li>
                                <li style={{ "marginBottom": "10px", "display": "flex", "alignItems": "center", "gap": "8px" }}><span style={{ "color": "var(--color-gold)" }}>•</span> Asset allocation</li>
                                <li style={{ "display": "flex", "alignItems": "center", "gap": "8px" }}><span style={{ "color": "var(--color-gold)" }}>•</span> Material changes in funds</li>
                            </ul>
                        </motion.div>

                        {/*  Client Confirmation  */}
                        <motion.div 
                            className="bento-item hover-lift card--center glass-panel"
                            variants={{ hidden: { opacity: 0, scale: 0.95, x: 50 }, visible: { opacity: 1, scale: 1, x: 0, transition: { type: "spring", stiffness: 90, damping: 15 } } }}
                            style={{ "flex": "1", "minWidth": "320px", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "flex-start", "padding": "var(--space-2xl) var(--space-xl)", "border": "1px solid rgba(212, 168, 77, 0.2)", "background": "rgba(255, 255, 255, 0.05)", "backdropFilter": "blur(12px)", "boxShadow": "0 8px 32px 0 rgba(0, 0, 0, 0.37)" }}>
                            <div
                                style={{ "width": "70px", "height": "70px", "background": "linear-gradient(135deg, rgba(212, 168, 77, 0.2) 0%, rgba(212, 168, 77, 0.05) 100%)", "borderRadius": "20px", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "var(--space-lg)", "color": "var(--color-gold)", "boxShadow": "0 4px 15px rgba(212, 168, 77, 0.2)" }}>
                                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="mb-md" style={{ "fontFamily": "var(--font-serif)", "color": "var(--color-gold)" }}>Client Confirmation</h3>
                            <p style={{ "lineHeight": "1.6", "color": "rgba(255, 255, 255, 0.8)" }}>Any changes are carried out only with client confirmation and aligned with the IPS.</p>
                        </motion.div>

                        {/* Spacer to maintain gap on mobile when fully scrolled */}
                        <div style={{ minWidth: "16px", flexShrink: 0 }}></div>
                    </motion.div>
                </div>
            </section>

            {/*  Our Mission  */}
            <section className="section section--navy"
                style={{ "background": "linear-gradient(145deg, var(--color-navy) 0%, var(--color-navy-dark) 100%)", "color": "white" }}>
                <div className="container">
                    <motion.div 
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-header__title" style={{ "color": "white" }}>Our Mission</h2>
                        <div className="section-header__divider" style={{ "margin": "0 auto var(--space-md)" }}></div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        style={{ "maxWidth": "800px", "margin": "0 auto", "textAlign": "center" }}>
                        <blockquote
                            style={{ "fontSize": "24px", "fontWeight": "300", "lineHeight": "1.5", "fontStyle": "italic", "marginBottom": "var(--space-xl)", "color": "rgba(255,255,255,0.9)" }}>
                            "To provide a clear, consistent, and process-driven financial distribution experience for retail
                            investors."
                        </blockquote>

                        <div className="bento-grid"
                            style={{ "gridTemplateColumns": "repeat(3, 1fr)", "gap": "var(--space-md)", "textAlign": "left" }}>
                            <div
                                style={{ "background": "rgba(255,255,255,0.05)", "padding": "var(--space-md)", "borderRadius": "12px", "borderTop": "3px solid var(--color-gold)" }}>
                                <h4 style={{ "color": "var(--color-gold)", "marginBottom": "8px" }}>Documenting</h4>
                                <p style={{ "color": "rgba(255,255,255,0.8)", "fontSize": "14px", "margin": "0" }}>Risk preferences</p>
                            </div>
                            <div
                                style={{ "background": "rgba(255,255,255,0.05)", "padding": "var(--space-md)", "borderRadius": "12px", "borderTop": "3px solid var(--color-gold)" }}>
                                <h4 style={{ "color": "var(--color-gold)", "marginBottom": "8px" }}>Maintaining</h4>
                                <p style={{ "color": "rgba(255,255,255,0.8)", "fontSize": "14px", "margin": "0" }}>Consistency in portfolio
                                    structure</p>
                            </div>
                            <div
                                style={{ "background": "rgba(255,255,255,0.05)", "padding": "var(--space-md)", "borderRadius": "12px", "borderTop": "3px solid var(--color-gold)" }}>
                                <h4 style={{ "color": "var(--color-gold)", "marginBottom": "8px" }}>Ensuring</h4>
                                <p style={{ "color": "rgba(255,255,255,0.8)", "fontSize": "14px", "margin": "0" }}>Understanding of portfolio
                                    reviews</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/*  Important Disclosure  */}
            <section className="section" style={{ "padding": "var(--space-md) 0" }}>
                <div className="container text-center">
                    <p className="text-small text-muted" style={{ "maxWidth": "600px", "margin": "0 auto", "opacity": "0.8" }}>
                        <strong>Important Disclosure:</strong> Investments in securities markets are subject to market risks.
                        Please read
                        all related documents carefully before investing.
                    </p>
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
                        <h2>Start a Conversation</h2>
                        <p>
                            Begin with a no-obligation consultation to discuss your needs and explore
                            if our approach is right for you.
                        </p>
                        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/schedule" className="btn btn--white">Schedule Consultation</motion.a>
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
                            <a href="/thesis-notes">Thesis Notes</a>                        </div>
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
