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
          <ul className="nav__links">            <li><a href="/" className="nav__link">Home</a></li>
            <li><a href="/about-us" className="nav__link">Our Philosophy</a></li>
            <li><a href="/services" className="nav__link">Services</a></li>
            <li className="nav__cta"><a href="/schedule" className="btn btn--primary btn--small">Contact Us</a></li>

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
              
            </motion.div>
          </div>
        </div>
      </section>


      {/*  Core Pillars Section  */}
      <section className="section bg-light" style={{ padding: '80px 0', borderBottom: '1px solid rgba(10, 37, 64, 0.05)', marginBottom: '60px' }}>
        <div className="container">
          <motion.div 
            className="grid grid--3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
          >
            {/* Box 1 */}
            <motion.div 
              className="card"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              style={{
                background: 'white',
                borderLeft: '4px solid var(--color-navy)',
                padding: '40px 30px',
                borderRadius: '8px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '20px', fontWeight: '500', lineHeight: '1.3' }}>Research-led<br/>Decisions</h3>
              <p style={{ color: 'var(--color-body)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                Our research team conducts rigorous evaluation of mutual fund schemes using structured analytical frameworks – ensuring all recommendations are grounded in disciplined, evidence-based analysis.
              </p>
            </motion.div>

            {/* Box 2 */}
            <motion.div 
              className="card"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              style={{
                background: 'white',
                borderLeft: '4px solid var(--color-navy)',
                padding: '40px 30px',
                borderRadius: '8px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '20px', fontWeight: '500', lineHeight: '1.3' }}>Global Investment<br/>Process Standards</h3>
              <p style={{ color: 'var(--color-body)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                We apply established investment frameworks used in top global wealth management institutions – bringing a higher standard of discipline, suitability, and documentation to mutual fund distribution in India.
              </p>
            </motion.div>

            {/* Box 3 */}
            <motion.div 
              className="card"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              style={{
                background: 'white',
                borderLeft: '4px solid var(--color-navy)',
                padding: '40px 30px',
                borderRadius: '8px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '20px', fontWeight: '500', lineHeight: '1.3' }}>Highly qualified<br/>Professionals</h3>
              <p style={{ color: 'var(--color-body)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                Our team consists exclusively of finance professionals with advanced credentials such as the CFA designation, trained to work closely with investors and explain complex investment ideas with clarity.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/*  About us Section  */}
      <section className="section" style={{ "backgroundColor": "rgba(10, 37, 64, 0.03)", "padding": "120px 0", marginTop: "60px" }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{ "maxWidth": "900px", "margin": "0 auto" }}
          >
            {/* TODO: Add design / text here that was sent via WhatsApp before getting into why we exist */}
            
            <div className="card" style={{
              background: 'white',
              boxShadow: '0 25px 50px -12px rgba(10, 37, 64, 0.1)',
              borderRadius: '24px',
              padding: 'clamp(40px, 6vw, 80px)',
              position: 'relative',
              border: '1px solid rgba(10, 37, 64, 0.05)',
              overflow: 'hidden'
            }}>
              {/* Decorative Accent */}
              <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '6px', background: 'var(--color-gold)' }}></div>
              
              <div style={{ position: 'absolute', right: '-20px', top: '-40px', opacity: 0.03, zIndex: 0 }}>
                {/* Large decorative quote mark */}
                <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <h2 className="section-header__title mb-xl" style={{ fontSize: '2.5rem', marginBottom: '2.5rem' }}>Why we exist</h2>
                <div className="paragraph-container" style={{ "fontSize": "1.2rem", "lineHeight": "1.9", "color": "var(--color-navy)", "opacity": "0.9" }}>
                  <p className="mb-lg">Mutual funds can build wealth.</p>
                  <p className="mb-lg">But with thousands of funds and many advisors, how do you know recommendations are truly made in your interest?</p>
                  <p className="mb-lg">As educators who have trained thousands of professionals for careers in investment research, portfolio management, and wealth management, we’ve closely seen how difficult it is for investors to know and trust that the investment options presented to them are backed by rigorous research and informed professional judgement rather than sales incentives.</p>
                  <p style={{ "fontWeight": "700", "color": "var(--color-navy)", "fontSize": "1.3rem", "marginTop": "2rem", "borderTop": "1px solid rgba(10,37,64,0.1)", "paddingTop": "2rem" }}>
                    SoundThesis combines institutional research, disciplined processes, and highly-qualified professionals — so you can invest with confidence.
                  </p>
                </div>
              </div>
            </div>
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
            <h2>Talk to Us</h2>
            <p className="cta-tagline mb-md" style={{ "fontSize": "1.1rem", "fontWeight": "500", "color": "rgba(255,255,255,0.8)", "letterSpacing": "0.5px" }}>Investor-first. Research-driven. Trusted experts.</p>
            <p>
              Reach out to us and see if our approach resonates with you.
            </p>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/schedule" className="btn btn--white">Contact Us</motion.a>
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

            </div>
          </div>
          <div className="text-center mt-xl">
            <a href="/faq" className="btn btn--secondary">View All FAQs</a>
          </div>
        </div>
      </section>

      {/*  Footer  */}
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <div className="nav__logo" style={{ color: 'white', fontSize: '24px', marginBottom: '20px' }}>SoundThesis</div>
              <p>Investor-first. Research-driven. Trusted experts.</p>
            </div>
            <div className="footer__links">
              <h4>Research</h4>
              <a href="/methodology">Methodology</a>
            </div>
            <div className="footer__links">
              <h4>Services</h4>
              <a href="/services">Wealth Management</a>
              <a href="/about-us">Our Philosophy</a>
            </div>
            <div className="footer__links">
              <h4>Connect</h4>
              <a href="mailto:research@soundthesis.com">research@soundthesis.com</a>
              <a href="/schedule">Contact Us</a>
            </div>
          </div>
          <div className="footer__disclosure" style={{ "marginTop": "var(--space-xl)", "paddingTop": "var(--space-lg)", "borderTop": "1px solid rgba(255,255,255,0.1)", "fontSize": "0.85rem", "color": "rgba(255,255,255,0.5)", "textAlign": "left" }}>
            <h5 style={{ "color": "rgba(255,255,255,0.8)", "marginBottom": "var(--space-xs)", "fontSize": "0.9rem" }}>REGULATORY DISCLOSURE</h5>
            <p className="mb-xs">SoundThesis operates as an AMFI-registered Mutual Fund Distributor.</p>
            <p>Investment suggestions are limited to mutual fund schemes and are based on investor goals, risk profile, and suitability information shared by the investor.</p>
          </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p>© 2026 SoundThesis. All rights reserved.</p>
            </div>
        </div>
      </footer>





    </>
  );
}
