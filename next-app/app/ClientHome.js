"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function ClientHome() {
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
          <ul className="nav__links">            <li><a href="/thesis-notes" className="nav__link">Thesis Notes</a></li>
            <li><a href="/services" className="nav__link">Services</a></li>
            <li><a href="/about-us" className="nav__link">Why we exist</a></li>
            <li><a href="/calculators" className="nav__link">Calculators</a></li>
            <li className="nav__cta"><a href="/schedule" className="btn btn--primary btn--small">Schedule Consultation</a></li>

          </ul>
        </div>
      </nav>

      {/*  Modern Split Hero Section  */}
      <section className="hero">
        <div className="container">
          <div className="split-hero">
            <motion.div 
              className="split-hero__content"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
            >
              <p className="hero__tagline mb-md" style={{ "fontSize": "1.1rem", "fontWeight": "500", "color": "white", "opacity": "0.9", "letterSpacing": "0.5px" }}>Investor-first. Research-driven. Trusted experts.</p>
              <div className="arn-badges-placeholder mb-lg" style={{ "minHeight": "40px", "display": "flex", "alignItems": "center", "gap": "15px" }}>
                {/*  ARN Badges Placeholder  */}
              </div>
              <motion.h1 
                className="hero__title"
                initial={{ opacity: 0, y: 40, rotateX: 15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
              >
                Research-Driven<br />
                <span style={{ "color": "#D4A84D" }}>Mutual Fund</span><br />
                Distribution
              </motion.h1>
              <motion.p 
                className="hero__description" 
                style={{ "maxWidth": "500px", "margin": "0 0 var(--space-xl) 0" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Helping investors preserve and grow wealth through rigorous research, disciplined investment frameworks, and highly qualified professionals.
              </motion.p>
              <motion.div 
                className="hero__buttons" 
                style={{ "justifyContent": "flex-start" }}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.6 }}
              >
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/thesis-notes" className="btn btn--primary">
                  Explore Open Research
                  <svg className="btn-icon-animated" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/services" className="btn btn--secondary">Wealth Services</motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      {/*  About us Section  */}
      <section className="section bg-light">
        <div className="container">
          <motion.div 
            className="why-we-exist-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{ "maxWidth": "800px", "margin": "0 auto", "textAlign": "center" }}
          >
            <h2 className="section-header__title mb-xl">Why we exist</h2>
            <div className="paragraph-container" style={{ "fontSize": "1.15rem", "lineHeight": "1.8", "color": "var(--color-navy)", "opacity": "0.9" }}>
              <p className="mb-lg">Mutual funds can build wealth.</p>
              <p className="mb-lg">But with thousands of funds and many advisors, how do you know recommendations are truly made in your interest?</p>
              <p className="mb-lg">As educators who have trained thousands of professionals for careers in investment research, portfolio management, and wealth management, we’ve closely seen how difficult it is for investors to know and trust that the investment options presented to them are backed by rigorous research and informed professional judgement rather than sales incentives.</p>
              <p className="mb-lg" style={{ "fontWeight": "600", "color": "var(--color-navy-dark)" }}>SoundThesis combines institutional research, disciplined processes, and highly-qualified professionals — so you can invest with confidence.</p>
            </div>
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
            <p className="text-muted">Our most recent publications from the SoundThesis repository.</p>
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
              "Sound investing begins with sound thinking — disciplined decisions grounded in research and focused on long-term wealth."
            </blockquote>
            <p className="quote__author">- OUR CORE BELIEF</p>
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
            <p className="cta-tagline mb-md" style={{ "fontSize": "1.1rem", "fontWeight": "500", "color": "rgba(255,255,255,0.8)", "letterSpacing": "0.5px" }}>Investor-first. Research-driven. Trusted experts.</p>
            <p>
              The best way to understand SoundThesis is to see how we approach investing. Explore our Thesis Notes and see if our approach resonates with you.
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
                <p className="text-muted">You can approach SoundThesis first for an internal escalation and resolution. If
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
              <div className="nav__logo">SoundThesis</div>
              <p>Democratized financial research and accessible wealth management. No minimum investment barriers.</p>
            </div>
            <div className="footer__links">
              <a href="/thesis-notes">Thesis Notes</a>
              <a href="/methodology">Methodology</a>
            </div>
            <div className="footer__links">
              <h4>Services</h4>
              <a href="/services">Wealth Management</a>
              <a href="/about-us">Why we exist</a>
            </div>
            <div className="footer__links">
              <h4>Connect</h4>
              <a href="mailto:research@soundthesis.com">research@soundthesis.com</a>
              <a href="/schedule">Schedule Consultation</a>
            </div>
          </div>
          <div className="footer__disclosure" style={{ "marginTop": "var(--space-xl)", "paddingTop": "var(--space-lg)", "borderTop": "1px solid rgba(255,255,255,0.1)", "fontSize": "0.85rem", "color": "rgba(255,255,255,0.5)", "textAlign": "left" }}>
            <h5 style={{ "color": "rgba(255,255,255,0.8)", "marginBottom": "var(--space-xs)", "fontSize": "0.9rem" }}>REGULATORY DISCLOSURE</h5>
            <p className="mb-xs">SoundThesis operates as an AMFI-registered Mutual Fund Distributor.</p>
            <p>Investment suggestions are limited to mutual fund schemes and are based on investor goals, risk profile, and suitability information shared by the investor.</p>
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
