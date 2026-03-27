"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function ClientAboutus() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div style={{ backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-body)' }}>
            {/*  Navigation  */}
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
                        <li><a href="/about-us" className="nav__link nav__link--active">Our Philosophy</a></li>
                        <li><a href="/services" className="nav__link">Services</a></li>
                        <li className="nav__cta"><a href="/schedule" className="btn btn--primary btn--small">Contact Us</a></li>
                    </ul>
                </div>
            </nav>

            {/*  Hero Section  */}
            <section className="hero" style={{ minHeight: '50vh', background: 'linear-gradient(135deg, var(--color-navy) 0%, var(--color-emerald) 100%)' }}>
                <motion.div 
                    className="hero__content"
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
                >
                    <motion.h1 
                        className="hero__title"
                        style={{ color: 'var(--color-white)' }}
                    >
                        Our Philosophy
                    </motion.h1>
                    <motion.div className="hero__divider" style={{ background: 'var(--color-gold)', width: '60px', height: '3px', margin: '20px auto' }}></motion.div>
                </motion.div>
            </section>

            {/*  Why Sound Thinking Matters Section  */}
            <section className="section section--white">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2 className="section-header__title" style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>Why Sound Thinking Matters</motion.h2>
                        
                        <motion.div className="manifesto-letter" style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: 'var(--space-2xl)', borderLeft: '4px solid var(--color-gold)', paddingLeft: '30px' }}>
                            <p>Building wealth is not about predicting short-term market movements or reacting to every change. It is about making sound decisions under uncertainty — using research and disciplined thinking to understand risks, evaluate opportunities, and allocate capital across evolving market cycles.</p>
                            <p>Markets are complex. Investment products are numerous. And short-term movements often distract from long-term goals.</p>
                            <p>Most investors do not struggle due to lack of information — they struggle to filter what matters and act on it consistently over time.</p>
                            <p style={{ fontWeight: '600', color: 'var(--color-navy)', fontSize: '22px', margin: '30px 0' }}>Our Investment Thesis</p>
                            <p>Sound thinking involves rigorous analysis, a clear understanding of risk, and the ability to make consistent, well-reasoned decisions — particularly in situations where markets are uncertain and the right course of action is not immediately clear.</p>
                            <p>At SoundThesis, every investment decision begins with a <strong>clear investment thesis</strong> — a reasoned explanation of why an investment belongs in a portfolio and how it contributes to long-term wealth creation. This means being selective and taking risk only when it is understood and appropriately compensated.</p>
                            <p>This discipline helps investors navigate markets with clarity, confidence, and perspective.</p>
                        </motion.div>

                        <div className="grid grid--2">
                            <motion.div variants={fadeIn} className="card">
                                <h4 className="card__title" style={{ color: 'var(--color-gold)' }}>The Problem</h4>
                                <p className="text-muted">Complexity, market noise, and emotional reactions often distract from long-term goals.</p>
                            </motion.div>
                            <motion.div variants={fadeIn} className="card">
                                <h4 className="card__title" style={{ color: 'var(--color-emerald-light)' }}>The Solution</h4>
                                <p className="text-muted">Rigorous research and a clear investment thesis applied consistently over time.</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/*  The Investment Thesis Section  */}
            <section className="section section--secondary">
                <div className="container">
                    <motion.div 
                        className="section-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="section-header__title" style={{ letterSpacing: '2px', fontSize: '24px' }}>Our investment thesis</h2>
                    </motion.div>
                    
                    <motion.div 
                        className="grid grid--3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {[
                            { step: '01', title: 'Purpose', desc: 'Why does this investment belong in the portfolio?' },
                            { step: '02', title: 'Role', desc: 'How does it contribute to long-term wealth creation?' },
                            { step: '03', title: 'Risk', desc: 'What specific risks must be understood and managed?' }
                        ].map((item, i) => (
                            <motion.div key={i} variants={fadeIn} className="card card--center">
                                <span style={{ fontSize: '48px', fontWeight: '700', color: 'var(--color-gold-light)', display: 'block', marginBottom: '10px', opacity: 0.6 }}>{item.step}</span>
                                <h4 className="card__title">{item.title}</h4>
                                <p className="text-small text-muted">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/*  Process Over Persuasion Section  */}
            <section className="section section--white">
                <div className="container">
                    <div className="grid grid--2" style={{ alignItems: 'center' }}>
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                        >
                            <h2 className="mb-lg">Process Over Persuasion</h2>
                            <p className="mb-xl">We believe investment guidance should be governed by process rather than personality. At SoundThesis, decisions follow a structured framework to ensure consistency.</p>
                            <blockquote style={{ padding: '24px', backgroundColor: 'var(--color-bg-secondary)', borderLeft: '4px solid var(--color-navy)', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
                                <p style={{ fontSize: '18px', fontStyle: 'italic', marginBottom: 0 }}>"Process creates discipline. Discipline builds trust."</p>
                            </blockquote>
                        </motion.div>
                        <motion.div 
                            className="checklist"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            {[
                                { id: 'A', text: 'Understanding investor goals' },
                                { id: 'B', text: 'Assessing risk tolerance' },
                                { id: 'C', text: 'Selecting suitable investment options' },
                                { id: 'D', text: 'Reviewing holdings over time' }
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeIn} style={{ display: 'flex', alignItems: 'center', padding: '20px', backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', marginBottom: '16px', boxShadow: 'var(--shadow-sm)' }}>
                                    <span style={{ width: '32px', height: '32px', backgroundColor: 'var(--color-navy)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyCenter: 'center', marginRight: '16px', fontWeight: 'bold', flexShrink: 0, justifyContent: 'center' }}>{item.id}</span>
                                    <span style={{ fontWeight: '500' }}>{item.id === 'A' ? <b>{item.text}</b> : item.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/*  Research Before Decisions Section  */}
            <section className="section section--secondary">
                <div className="container">
                    <div className="grid grid--2" style={{ alignItems: 'center' }}>
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                        >
                            <h2 className="mb-lg">Research Before Decisions</h2>
                            <p className="mb-lg">Serious investing requires structured frameworks. Our team studies markets and evidence to ensure suggestions are grounded in principles, not sales incentives or noise.</p>
                            <ul className="feature-list">
                                <li className="feature-list__item">
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-gold)', marginRight: '12px' }}></div>
                                    <p style={{ marginBottom: 0 }}><strong>Evidence-Led:</strong> Decisions based on data and judgment.</p>
                                </li>
                                <li className="feature-list__item">
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-gold)', marginRight: '12px' }}></div>
                                    <p style={{ marginBottom: 0 }}><strong>Discipline:</strong> Helping investors remain patient through volatility.</p>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="card" style={{ backgroundColor: 'var(--color-navy)', color: 'white', padding: '48px' }}>
                                <h3 style={{ color: 'white', marginBottom: '24px' }}>Professional Expertise</h3>
                                <p style={{ opacity: 0.9, marginBottom: '32px' }}>Guidance from highly qualified finance professionals who prioritize clear communication. We believe knowledge builds insight, and transparency builds trust.</p>
                                <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '24px' }}>
                                    <span style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', opacity: 0.6 }}>CULTURE</span>
                                    <p style={{ fontSize: '20px', fontWeight: '500', marginBottom: 0 }}>Founded by Educators. Driven by Learning.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/*  Serving the Underserved Section  */}
            <section className="section" style={{ backgroundColor: 'var(--color-navy-dark)', color: 'white' }}>
                <div className="container">
                    <motion.div 
                        className="section-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 style={{ color: 'white', marginBottom: '24px' }}>Serving the Underserved</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto' }}>Access to financial guidance shouldn't depend on portfolio size. We dedicate <strong>20% of our time</strong> to families with low investable income.</p>
                    </motion.div>

                    <div className="grid grid--2">
                        <motion.div 
                            className="card" 
                            style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}
                            whileHover={{ translateY: -5 }}
                        >
                            <h4 style={{ color: 'var(--color-gold)', marginBottom: '16px' }}>Rural India Initiative</h4>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px' }}>All revenue from these clients, plus a portion of our profits, is donated to primary school education in rural India.</p>
                        </motion.div>
                        <motion.div 
                            className="card" 
                            style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}
                            whileHover={{ translateY: -5 }}
                        >
                            <h4 style={{ color: 'var(--color-gold)', marginBottom: '16px' }}>Broader Perspective</h4>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px' }}>Working closely with underserved investors reinforces that financial decisions have real consequences — reflected in our focus on thoughtful capital allocation and long-term wealth creation</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/*  What This Means for Investors Section  */}
            <section className="section section--white">
                <div className="container">
                    <motion.div 
                        className="section-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="section-header__title">What This Means for Investors</h2>
                    </motion.div>

                    <motion.div 
                        className="card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ maxWidth: '800px', margin: '0 auto', padding: '48px' }}
                    >
                        <ul className="feature-list" style={{ display: 'grid', gap: '20px' }}>
                            {[
                                'Investment thinking grounded in research',
                                'Disciplined processes guiding every decision',
                                'Highly qualified professionals responsible for recommendations',
                                'Clear explanations of the reasoning behind investments',
                                'A long-term focus on protecting and growing wealth'
                            ].map((text, i) => (
                                <motion.li key={i} className="feature-list__item" style={{ alignItems: 'flex-start' }}>
                                    <svg style={{ color: 'var(--color-gold)', width: '20px', height: '20px', marginTop: '4px', marginRight: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span style={{ fontSize: '18px' }}>{text}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/*  CTA Section  */}
            <section className="section" style={{ textAlign: 'center', backgroundColor: 'var(--color-bg-secondary)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: '42px', marginBottom: '16px' }}>See Our Thinking in Practice</h2>
                        <p style={{ fontSize: '20px', color: 'var(--color-body-light)', maxWidth: '700px', margin: '0 auto 40px' }}>
                            If you are looking for a more structured and thoughtful approach to investing, we would be happy to understand your goals and explore whether we are the right fit to work together.
                        </p>
                        <motion.a 
                            whileHover={{ scale: 1.05 }} 
                            whileTap={{ scale: 0.95 }} 
                            href="/schedule" 
                            className="btn btn--primary"
                            style={{ padding: '20px 48px', fontSize: '16px', textTransform: 'uppercase' }}
                        >
                            Contact Us
                        </motion.a>
                    </motion.div>
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
                </div>
            </footer>
        </div>
    );
}
