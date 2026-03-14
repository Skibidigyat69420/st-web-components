"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function ClientHome() {
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
          <ul className="nav__links">            <li><a href="/thesis-notes" className="nav__link">Thesis Notes</a></li>
            <li><a href="/services" className="nav__link">Services</a></li>
            <li><a href="/why-us" className="nav__link">Why We Exist</a></li>
            <li><a href="/calculators" className="nav__link">Calculators</a></li>
            <li className="nav__cta"><a href="/schedule" className="btn btn--primary btn--small">Schedule Consultation</a></li>

          </ul>
        </div>
      </nav>

            {/*  Modern Split Hero Section  */}
      <section className="hero">
        <div className="container">
          <div className="hero__grid">
            <motion.div 
              className="hero__text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="hero__pill">Built On Four Core Pillars</div>
              <motion.h1 
                className="hero__title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Institutional-Grade<br />
                <span className="text-highlight">Wealth Management</span><br />
                Made Accessible
              </motion.h1>
              <motion.p 
                className="hero__description" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Sound Thesis relies on four core pillars—fiduciary transparency, accessible research, behavioral coaching,
                and standardized execution—to deliver an institutional-grade wealth management experience.
              </motion.p>
              <motion.div 
                className="hero__buttons" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="/thesis-notes" className="btn btn--primary">
                  Explore Open Research
                  <svg className="btn-icon-animated" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
                <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="/services" className="btn btn--secondary">Wealth Services</motion.a>
              </motion.div>
            </motion.div>

            <motion.div 
              className="hero__stats"
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="stats-card glass-premium">
                <div className="stat-row">
                  <div className="stat-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div className="stat-content">
                    <span className="stat-label">Fiduciary</span>
                    <span className="stat-value">100%</span>
                  </div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-row">
                  <div className="stat-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <div className="stat-content">
                    <span className="stat-label">Research</span>
                    <span className="stat-value">Open</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/*  Market Ticker Widget  */}
      <div className="market-ticker-wrapper">
        <div className="market-ticker">
          <div className="ticker-content">
            <span className="ticker-item"><span className="ticker-name">NIFTY 50</span> <span className="ticker-price">22,336.40</span>
              <span className="ticker-change positive">▲ +0.52%</span></span>
            <span className="ticker-item"><span className="ticker-name">SENSEX</span> <span className="ticker-price">73,651.35</span>
              <span className="ticker-change positive">▲ +0.48%</span></span>
            <span className="ticker-item"><span className="ticker-name">BANK NIFTY</span> <span
              className="ticker-price">47,835.80</span> <span className="ticker-change negative">▼ -0.15%</span></span>
            <span className="ticker-item"><span className="ticker-name">S&P 500</span> <span className="ticker-price">5,137.08</span>
              <span className="ticker-change positive">▲ +0.80%</span></span>
            <span className="ticker-item"><span className="ticker-name">NASDAQ</span> <span className="ticker-price">16,274.94</span>
              <span className="ticker-change positive">▲ +1.14%</span></span>
            <span className="ticker-item"><span className="ticker-name">GOLD</span> <span className="ticker-price">₹63,450</span> <span
              className="ticker-change positive">▲ +0.22%</span></span>
            {/*  Duplicate for seamless scroll  */}
            <span className="ticker-item"><span className="ticker-name">NIFTY 50</span> <span className="ticker-price">22,336.40</span>
              <span className="ticker-change positive">▲ +0.52%</span></span>
            <span className="ticker-item"><span className="ticker-name">SENSEX</span> <span className="ticker-price">73,651.35</span>
              <span className="ticker-change positive">▲ +0.48%</span></span>
            <span className="ticker-item"><span className="ticker-name">BANK NIFTY</span> <span
              className="ticker-price">47,835.80</span> <span className="ticker-change negative">▼ -0.15%</span></span>
            <span className="ticker-item"><span className="ticker-name">S&P 500</span> <span className="ticker-price">5,137.08</span>
              <span className="ticker-change positive">▲ +0.80%</span></span>
            <span className="ticker-item"><span className="ticker-name">NASDAQ</span> <span className="ticker-price">16,274.94</span>
              <span className="ticker-change positive">▲ +1.14%</span></span>
            <span className="ticker-item"><span className="ticker-name">GOLD</span> <span className="ticker-price">₹63,450</span> <span
              className="ticker-change positive">▲ +0.22%</span></span>
          </div>
        </div>
      </div>

      {/*  Value Proposition - Bento Box Layout  */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-header__title">Why Sound Thesis?</h2>
            <p className="text-muted">A paradigm shift in how wealth is managed and research is consumed.</p>
          </motion.div>

          <motion.div 
            className="grid grid--2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 30, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } } }} className="card card--center hover-lift"
              style={{ "background": "linear-gradient(145deg, var(--color-navy) 0%, var(--color-navy-dark) 100%)", "color": "white" }}>
              <h3 style={{ "color": "white" }}>Fiduciary Responsibility<br />& Transparency</h3>
              <p style={{ "color": "rgba(255,255,255,0.7)", "fontSize": "15px" }}>Clear, honest pricing with no hidden costs for our
                wealth services.</p>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 30, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } } }} className="card card--center hover-lift" style={{ "background": "var(--color-bg-secondary)" }}>
              <h3 style={{ "color": "var(--color-navy)" }}>Research-Driven</h3>
              <p className="text-muted text-small">All our models and methodologies are published openly. Transparent,
                verifiable, and freely accessible.</p>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 30, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } } }} className="card card--center hover-lift" style={{ "background": "var(--color-bg-secondary)" }}>
              <h3 style={{ "color": "var(--color-navy)" }}>High-Quality Advisors<br />& Behavioral Focus</h3>
              <p className="text-muted text-small">Expert coaching to prevent emotional decisions and compounding errors over
                your investment journey.</p>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 30, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } } }} className="card card--center hover-lift"
              style={{ "background": "linear-gradient(145deg, var(--color-navy) 0%, var(--color-navy-dark) 100%)", "color": "white" }}>
              <h3 style={{ "color": "white" }}>Standardized<br />Processes</h3>
              <p style={{ "color": "rgba(255,255,255,0.7)", "fontSize": "15px" }}>Reliable, systematized execution ensuring every
                client receives institutional-grade wealth management.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/*  Interactive Tools & Insights  */}
      <section className="section section--white">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-header__title">Interactive Tools & Insights</h2>
            <div className="section-header__divider"></div>
            <p className="text-muted">Engage with our models and get daily market sentiment.</p>
          </motion.div>
          <motion.div 
            className="grid grid--2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
          >
            {/*  SIP Calculator Teaser  */}
            <motion.div className="card interactive-widget calc-widget-teaser" whileHover={{ translateY: -5 }}>
              <div className="widget-header">
                <h3>Wealth Projection</h3>
                <span className="tag tag--primary">Mini Calc</span>
              </div>
              <p className="text-small text-muted mb-xl">Visualize your potential returns over time. Adjust the slider to see
                how small consistent investments grow.</p>

              <div className="input-group">
                <label htmlFor="teaserSipAmount">Monthly SIP Amount: ₹<span id="teaserSipAmountDisplay">10,000</span></label>
                <input type="range" className="form-range" id="teaserSipAmount" min="1000" max="100000" step="1000"
                  defaultValue="10000" />
              </div>
              <div className="input-group">
                <label htmlFor="teaserSipYears">Duration: <span id="teaserSipYearsDisplay">10</span> Years</label>
                <input type="range" className="form-range" id="teaserSipYears" min="1" max="30" step="1" defaultValue="10" />
              </div>

              <div className="teaser-result">
                <div className="result-label">Projected Corpus (at 12% p.a.)</div>
                <div className="result-value" id="teaserProjValue">₹23,23,391</div>
              </div>

              <div className="text-center mt-lg">
                <a href="/calculators" className="btn btn--primary btn--small">View Full Calculators</a>
              </div>
            </motion.div>

            {/*  Daily Insight / Sentiment  */}
            <motion.div className="card interactive-widget insight-widget" whileHover={{ translateY: -5 }}>
              <div className="widget-header">
                <h3>Market Sentiment</h3>
                <span className="tag">Daily Update</span>
              </div>

              <div className="insight-content">
                <div className="sentiment-indicator">
                  <div className="sentiment-gauge">
                    <div className="sentiment-needle" style={{ "transform": "rotate(20deg)" }}></div>
                  </div>
                  <div className="sentiment-labels">
                    <span>Fear</span>
                    <span className="sentiment-current bullish">Cautiously Bullish</span>
                    <span>Greed</span>
                  </div>
                </div>

                <blockquote className="insight-quote">
                  "While mid-cap valuations appear stretched, large-cap financials continue to offer a margin of safety.
                  Selectivity is key in the current regime."
                </blockquote>
                <div className="insight-author">- Sound Thesis Research Desk</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/*  Two Column Cards Section  */}
      <section className="section section--secondary">
        <div className="container">
          <motion.div 
            className="grid grid--2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            {/*  Learn Card  */}
            <motion.div 
              className="card"
              variants={{ hidden: { opacity: 0, x: -40, scale: 0.95 }, visible: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 90, damping: 16 } } }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="card__title">Accessible Research</h3>
              <p className="card__description">
                Access our open models and transparent methodologies. Understand our
                decisions and remove bias with a fully published research library.
              </p>
              <ul className="feature-list">
                <li className="feature-list__item">
                  <svg className="feature-list__check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Freely accessible methodologies</span>
                </li>
                <li className="feature-list__item">
                  <svg className="feature-list__check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Data-driven & verifiable models</span>
                </li>
                <li className="feature-list__item">
                  <svg className="feature-list__check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Continuous public scrutiny</span>
                </li>
                <li className="feature-list__item">
                  <svg className="feature-list__check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No proprietary black boxes</span>
                </li>
              </ul>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/thesis-notes" className="btn btn--primary">Browse Research</motion.a>
            </motion.div>

            {/*  Invest Card  */}
            <motion.div 
              className="card"
              variants={{ hidden: { opacity: 0, x: 40, scale: 0.95 }, visible: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 90, damping: 16 } } }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="card__title">Comprehensive Wealth Services</h3>
              <p className="card__description">
                Apply our research with high-quality advisors. We implement standardized strategies
                with clear pricing and dedicated behavioral coaching.
              </p>
              <ul className="feature-list">
                <li className="feature-list__item">
                  <svg className="feature-list__check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fiduciary-aligned pricing</span>
                </li>
                <li className="feature-list__item">
                  <svg className="feature-list__check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Expert behavioral coaching</span>
                </li>
                <li className="feature-list__item">
                  <svg className="feature-list__check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Systematized execution</span>
                </li>
                <li className="feature-list__item">
                  <svg className="feature-list__check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No hidden costs or minimums</span>
                </li>
              </ul>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/schedule" className="btn btn--primary">Schedule Consultation</motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/*  Latest Research  */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-header__title">Latest Thesis</h2>
            <div className="section-header__divider"></div>
            <p className="text-muted">Our most recent publications from the Sound Thesis repository.</p>
          </motion.div>
          <motion.div 
            className="grid grid--3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.article 
              className="card research-card"
              variants={{ hidden: { opacity: 0, y: 40, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 14 } } }}
              whileHover={{ y: -5 }}
            >
              <span className="research-card__date">December 18, 2024</span>
              <h4 className="research-card__title">Global Capital Flows: A Systematic Analysis</h4>
              <div className="research-card__tags">
                <span className="tag">Macroeconomic</span>
              </div>
              <p className="text-small text-muted">How emerging market dynamics are reshaping traditional investment paradigms.
              </p>
              <a href="/thesis-notes" className="research-card__link">
                Read Analysis
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.article>
            <motion.article 
              className="card research-card"
              variants={{ hidden: { opacity: 0, y: 40, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 14 } } }}
              whileHover={{ y: -5 }}
            >
              <span className="research-card__date">December 10, 2024</span>
              <h4 className="research-card__title">Fixed Income in Higher Rate Environments</h4>
              <div className="research-card__tags">
                <span className="tag">Asset Allocation</span>
              </div>
              <p className="text-small text-muted">Strategic considerations for bond portfolios in the current regime.</p>
              <a href="/thesis-notes" className="research-card__link">
                Read Analysis
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.article>
            <motion.article 
              className="card research-card"
              variants={{ hidden: { opacity: 0, y: 40, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 14 } } }}
              whileHover={{ y: -5 }}
            >
              <span className="research-card__date">December 2, 2024</span>
              <h4 className="research-card__title">Geopolitical Risk: A Framework</h4>
              <div className="research-card__tags">
                <span className="tag">Geopolitics</span>
              </div>
              <p className="text-small text-muted">A systematic approach to incorporating geopolitical considerations.</p>
              <a href="/thesis-notes" className="research-card__link">
                Read Analysis
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.article>
          </motion.div>
          <motion.div 
            className="text-center mt-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/thesis-notes" className="btn btn--secondary">View All Research</motion.a>
          </motion.div>
        </div>
      </section>

      {/*  Quote Section  */}
      <section className="quote-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="quote">
              "We believe that transparent, rigorous research leads to better investment outcomes.
              By opening our methodologies, we invite scrutiny - and that makes us better."
            </blockquote>
            <p className="quote__author">- Our Core Belief</p>
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
            <h2>Start With Our Approach</h2>
            <p>
              Explore our accessible research models to understand our methodology before committing.
              No signup required. No barriers.
            </p>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/thesis-notes" className="btn btn--white">Browse Thesis Notes</motion.a>
          </motion.div>
        </div>
      </section>

      {/*  FAQ Section  */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Frequently Asked Questions</h2>
            <div className="section-header__divider"></div>
            <div className="faq-search-container">
              <input type="text" id="faqSearch" className="faq-search-input" placeholder="Search questions..." />
              <svg className="faq-search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="faq-carousel-container">
            <div className="faq-carousel" id="faqCarousel">
              {/*  1. Basics  */}
              <div className="faq-item">
                <h4 style={{ "marginBottom": "var(--space-sm)" }}>What is a Mutual Fund?</h4>
                <p className="text-muted">A mutual fund pools money from investors to invest in securities like stocks and bonds
                  in accordance with the scheme's objectives. Profits or losses are shared among investors in proportion to
                  their investments.</p>
              </div>

              {/*  2. Structure  */}
              <div className="faq-item">
                <h4 style={{ "marginBottom": "var(--space-sm)" }}>What is Net Asset Value (NAV)?</h4>
                <p className="text-muted">NAV is the market value of the securities held by the scheme divided by the total
                  number of units. It represents the price per unit and changes daily based on market performance.</p>
              </div>

              {/*  3. Types  */}
              <div className="faq-item">
                <h4 style={{ "marginBottom": "var(--space-sm)" }}>Open-Ended vs. Close-Ended Schemes?</h4>
                <p className="text-muted">Open-ended schemes allow buying and selling units continuously without a fixed
                  maturity. Close-ended schemes have a stipulated maturity period (e.g., 3-5 years) and are open for
                  subscription only at launch.</p>
              </div>

              {/*  4. Strategies  */}
              <div className="faq-item">
                <h4 style={{ "marginBottom": "var(--space-sm)" }}>Growth vs. Income Schemes?</h4>
                <p className="text-muted">Growth schemes invest in equities for long-term capital appreciation but carry higher
                  risk. Income schemes invest in fixed-income securities (bonds, gov securities) for steady income with
                  lower risk.</p>
              </div>

              {/*  5. SIP  */}
              <div className="faq-item">
                <h4 style={{ "marginBottom": "var(--space-sm)" }}>What is a Systematic Investment Plan (SIP)?</h4>
                <p className="text-muted">SIP allows you to invest a fixed small amount regularly (e.g., monthly). It helps
                  average out the cost of purchase over time and instills financial discipline without trying to time the
                  market.</p>
              </div>

              {/*  6. Expense  */}
              <div className="faq-item">
                <h4 style={{ "marginBottom": "var(--space-sm)" }}>What is an Expense Ratio?</h4>
                <p className="text-muted">It is the annual fee charged by the fund to manage your money, covering administration
                  and management costs. It is expressed as a percentage of the fund's daily net assets.</p>
              </div>

              {/*  7. Direct Plan  */}
              <div className="faq-item">
                <h4 style={{ "marginBottom": "var(--space-sm)" }}>What is a Direct Plan?</h4>
                <p className="text-muted">Direct plans are purchased directly from the mutual fund, avoiding distributor
                  commissions. This results in a lower expense ratio and potentially higher returns compared to regular
                  plans.</p>
              </div>

              {/*  8. Tax Saving  */}
              <div className="faq-item">
                <h4 style={{ "marginBottom": "var(--space-sm)" }}>What are Tax Saving Schemes (ELSS)?</h4>
                <p className="text-muted">Equity Linked Savings Schemes (ELSS) offer tax rebates under Section 80C. They are
                  growth-oriented equity funds with a lock-in period, suitable for long-term wealth creation.</p>
              </div>

              {/*  9. NRIs  */}
              <div className="faq-item">
                <h4 style={{ "marginBottom": "var(--space-sm)" }}>Can Non-Resident Indians (NRIs) invest?</h4>
                <p className="text-muted">Yes, NRIs can invest in mutual funds. Specific details and requirements are typically
                  provided in the scheme's offer documents.</p>
              </div>

              {/*  10. Safety  */}
              <div className="faq-item">
                <h4 style={{ "marginBottom": "var(--space-sm)" }}>Is my money safe?</h4>
                <p className="text-muted">Mutual funds are regulated by SEBI to protect investor interests. However, all
                  investments carry market risk, and returns are not guaranteed. Always read the offer document carefully.
                </p>
              </div>

              {/*  11. Complaints  */}
              <div className="faq-item">
                <h4 style={{ "marginBottom": "var(--space-sm)" }}>How can I redress complaints?</h4>
                <p className="text-muted">You can approach Sound Thesis first for an internal escalation and resolution. If
                  unresolved, you can
                  lodge a complaint with SEBI via the SCORES (SEBI Complaints Redress System) online platform.</p>
              </div>

              {/*  12. ETFs  */}
              <div className="faq-item">
                <h4 style={{ "marginBottom": "var(--space-sm)" }}>What are Exchange Traded Funds (ETFs)?</h4>
                <p className="text-muted">ETFs are mutual fund units that trade on stock exchanges like shares. They offer the
                  diversification of a mutual fund with the trading flexibility of a stock.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Footer  */}
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <div className="nav__logo">Sound Thesis</div>
              <p>Institutional-grade wealth management powered by accessible research, fiduciary transparency, and
                behavioral coaching.</p>
            </div>
            <div className="footer__links">
              <h4>Research</h4>
              <a href="/thesis-notes">Thesis Notes</a>            </div>
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
