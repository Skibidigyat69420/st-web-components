"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function ClientServices() {
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
                    <ul className="nav__links">
                        <li><a href="/" className="nav__link">Home</a></li>
                        <li><a href="/about-us" className="nav__link">Our Philosophy</a></li>
                        <li><a href="/services" className="nav__link nav__link--active">Services</a></li>
                        <li className="nav__cta"><a href="/schedule" className="btn btn--primary btn--small">Contact Us</a></li>
                    </ul>
                </div>
            </nav>

            {/*  Hero Section  */}
            <section className="hero" style={{ minHeight: '70vh' }}>
                <div className="hero__content">
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hero__title"
                        style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', lineHeight: '1.1', color: 'white', fontWeight: '700' }}
                    >
                        Sound Investing Requires More Than Instinct.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="hero__description"
                        style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', lineHeight: '1.6' }}
                    >
                        We support you across your entire investment journey — from understanding your goals to selecting suitable investments and guiding you as your portfolio evolves over time.
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ background: 'rgba(255,255,255,0.05)', borderLeft: '4px solid var(--color-gold)', padding: 'var(--space-md) var(--space-lg)', borderRadius: '0 12px 12px 0', marginBottom: 'var(--space-xl)', maxWidth: '800px', margin: '0 auto var(--space-xl)', backdropFilter: 'blur(10px)', textAlign: 'left' }}
                    >
                        <p style={{ margin: 0, fontSize: '1.1rem', color: 'white', lineHeight: '1.6' }}>
                            <strong>Our focus is simple:</strong> <span style={{ color: 'rgba(255,255,255,0.8)' }}>help you avoid costly mistakes, stay disciplined, and build long-term wealth with clarity and confidence.</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/*  Investment Options We Support  */}
            <section className="section bg-white" style={{ paddingTop: 'var(--space-2xl)' }}>
                <div className="container">
                    <motion.div 
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: 'var(--space-md)' }}>Investment Options We Support</h1>
                        <p className="text-muted" style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
                            Different investors need different solutions. We help you choose what fits your goals, risk comfort, and scale.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid--2 mt-xl"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                        }}
                        style={{ gap: 'var(--space-md)' }}
                    >
                        {/* Mutual Funds */}
                        <motion.div 
                            className="card card--hover text-left"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}
                            style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--color-surface)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px' }}
                        >
                            <div style={{ padding: '12px', background: 'rgba(15, 118, 110, 0.1)', borderRadius: '12px', width: 'fit-content', color: '#0F766E', marginBottom: 'var(--space-md)' }}>
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: 'var(--space-sm)' }}>Mutual Funds</h3>
                            <p className="text-muted mb-lg" style={{ fontSize: '0.95rem', flexGrow: 1 }}>Simple, diversified, and flexible. Best for most investors starting or building long-term wealth.</p>
                            <div style={{ color: 'var(--color-navy)', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>FOR MOST LONG-TERM INVESTORS</div>
                        </motion.div>

                        {/* PMS */}
                        <motion.div 
                            className="card card--hover text-left"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}
                            style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--color-surface)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px' }}
                        >
                            <div style={{ padding: '12px', background: 'rgba(30, 58, 138, 0.1)', borderRadius: '12px', width: 'fit-content', color: 'var(--color-navy)', marginBottom: 'var(--space-md)' }}>
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                </svg>
                            </div>
                            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: 'var(--space-sm)' }}>PMS</h3>
                            <p className="text-muted mb-lg" style={{ fontSize: '0.95rem', flexGrow: 1 }}>Professionally managed with concentrated strategies and customization.</p>
                            <div style={{ color: 'var(--color-navy)', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>FOR LARGER (₹50L+), CUSTOMIZED PORTFOLIOS</div>
                        </motion.div>

                        {/* AIF */}
                        <motion.div 
                            className="card card--hover text-left"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}
                            style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--color-surface)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px' }}
                        >
                            <div style={{ padding: '12px', background: 'rgba(15, 118, 110, 0.1)', borderRadius: '12px', width: 'fit-content', color: '#0F766E', marginBottom: 'var(--space-md)' }}>
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: 'var(--space-sm)' }}>AIF</h3>
                            <p className="text-muted mb-lg" style={{ fontSize: '0.95rem', flexGrow: 1 }}>Access to private markets, venture capital, and non-traditional opportunities.</p>
                            <div style={{ color: '#0F766E', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>FOR EXPERIENCED INVESTORS EXPLORING ALTERNATIVE ASSETS</div>
                        </motion.div>

                        {/* SIF */}
                        <motion.div 
                            className="card card--hover text-left"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}
                            style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--color-surface)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '16px' }}
                        >
                            <div style={{ padding: '12px', background: 'rgba(212, 168, 77, 0.1)', borderRadius: '12px', width: 'fit-content', color: 'var(--color-gold)', marginBottom: 'var(--space-md)' }}>
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: 'var(--space-sm)' }}>SIF</h3>
                            <p className="text-muted mb-lg" style={{ fontSize: '0.95rem', flexGrow: 1 }}>A hybrid category between mutual funds and PMS, offering more flexibility and strategy-driven portfolio construction.</p>
                            <div style={{ color: 'var(--color-gold)', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>FOR TARGETED EXPOSURE TO SPECIFIC SECTORS AND THEMES (₹10L+)</div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/*  Why This Matters for You  */}
            <section className="section bg-navy" style={{ background: 'linear-gradient(145deg, var(--color-navy) 0%, var(--color-navy-dark) 100%)', color: 'white' }}>
                <div className="container" style={{ maxWidth: '1200px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-2xl)', alignItems: 'center' }}>
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{ paddingRight: 'var(--space-lg)' }}
                        >
                            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: 'var(--space-md)', color: 'white' }}>Why This Matters for You</h2>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: 'var(--space-xl)', lineHeight: '1.6' }}>
                                Today, many investors struggle to know whether the guidance they receive is truly aligned with their needs, or influenced by the incentives of those offering or facilitating investments.
                            </p>
                            
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: 'var(--space-lg)' }}>
                                    <div style={{ color: 'var(--color-navy)', background: 'white', borderRadius: '50%', padding: '4px', flexShrink: 0, marginTop: '4px' }}>
                                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.9)', lineHeight: '1.6' }}><strong>Portfolio Allocation:</strong> Long-term outcomes are largely driven by asset allocation, not individual investment selection.</p>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                    <div style={{ color: 'var(--color-navy)', background: 'white', borderRadius: '50%', padding: '4px', flexShrink: 0, marginTop: '4px' }}>
                                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.9)', lineHeight: '1.6' }}><strong>Behavioral Discipline:</strong> Investor behavior during market volatility often has a greater impact on outcomes than the investments themselves.</p>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{ background: '#e2e8f0', color: 'var(--color-navy)', padding: 'var(--space-2xl)', borderRadius: '24px' }}
                        >
                            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: 'var(--space-xl)' }}>Our Commitment</h3>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
                                <div style={{ display: 'flex', gap: '24px' }}>
                                    <div style={{ color: 'var(--color-gold)', fontWeight: '700', fontSize: '1.25rem', marginTop: '2px' }}>01</div>
                                    <div>
                                        <h4 style={{ margin: '0 0 6px 0', fontSize: '1.15rem' }}>Research-Driven Investment Decisions</h4>
                                        <p style={{ margin: 0, color: 'var(--color-navy)', opacity: 0.7, fontSize: '1.05rem' }}>Evaluating opportunities and risks with rigor and clarity.</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '24px' }}>
                                    <div style={{ color: 'var(--color-gold)', fontWeight: '700', fontSize: '1.25rem', marginTop: '2px' }}>02</div>
                                    <div>
                                        <h4 style={{ margin: '0 0 6px 0', fontSize: '1.15rem' }}>Disciplined Portfolio Construction Process</h4>
                                        <p style={{ margin: 0, color: 'var(--color-navy)', opacity: 0.7, fontSize: '1.05rem' }}>Ensuring consistency and alignment through market cycles.</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '24px' }}>
                                    <div style={{ color: 'var(--color-gold)', fontWeight: '700', fontSize: '1.25rem', marginTop: '2px' }}>03</div>
                                    <div>
                                        <h4 style={{ margin: '0 0 6px 0', fontSize: '1.15rem' }}>Highly Qualified Professionals</h4>
                                        <p style={{ margin: 0, color: 'var(--color-navy)', opacity: 0.7, fontSize: '1.05rem' }}>Experts to help you navigate uncertainty and support sound decision-making.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/*  Our Investment Framework  */}
            <section className="section bg-white">
                <div className="container">
                    <motion.div 
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>Our Investment Framework</h2>
                        <p className="text-muted" style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
                            A systematic approach to wealth creation through clarity, reasoning, and behavioral discipline.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid--4 mt-xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                        }}
                        style={{ gap: 'var(--space-md)' }}
                    >
                        {/* 01 Understand */}
                        <motion.div 
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}
                            style={{ padding: 'var(--space-xl)', background: 'var(--color-surface)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column' }}
                        >
                            <div style={{ width: '64px', height: '64px', background: 'rgba(15, 118, 110, 0.1)', color: 'var(--color-navy)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-md)', position: 'relative', transform: 'rotate(45deg)' }}>
                                <div style={{ transform: 'rotate(-45deg)' }}>
                                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: 'var(--color-navy)', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold', transform: 'rotate(-45deg)', border: '2px solid white' }}>
                                    01
                                </div>
                            </div>
                            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: 'var(--space-sm)' }}>Understand</h3>
                            <p className="text-muted" style={{ fontSize: '0.95rem', flexGrow: 1, marginBottom: 'var(--space-lg)' }}>Moving beyond generic questionnaires to map your goals, risk comfort, and constraints through established financial principles.</p>
                            <div style={{ height: '3px', background: 'var(--color-navy)', width: '40px', margin: '0 auto', borderRadius: '2px' }}></div>
                        </motion.div>

                        {/* 02 Architect */}
                        <motion.div 
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}
                            style={{ padding: 'var(--space-xl)', background: 'var(--color-surface)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column' }}
                        >
                            <div style={{ width: '64px', height: '64px', background: 'rgba(15, 118, 110, 0.1)', color: 'var(--color-navy)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-md)', position: 'relative', transform: 'rotate(45deg)' }}>
                                <div style={{ transform: 'rotate(-45deg)' }}>
                                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                    </svg>
                                </div>
                                <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: 'var(--color-navy)', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold', transform: 'rotate(-45deg)', border: '2px solid white' }}>
                                    02
                                </div>
                            </div>
                            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: 'var(--space-sm)' }}>Architect</h3>
                            <p className="text-muted" style={{ fontSize: '0.95rem', flexGrow: 1, marginBottom: 'var(--space-lg)' }}>Recommending investment options with explicit reasoning. You understand the 'why' behind every allocation and the risks involved.</p>
                            <div style={{ height: '3px', background: 'var(--color-navy)', width: '40px', margin: '0 auto', borderRadius: '2px' }}></div>
                        </motion.div>

                        {/* 03 Execute */}
                        <motion.div 
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}
                            style={{ padding: 'var(--space-xl)', background: 'var(--color-surface)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column' }}
                        >
                            <div style={{ width: '64px', height: '64px', background: 'rgba(15, 118, 110, 0.1)', color: 'var(--color-navy)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-md)', position: 'relative', transform: 'rotate(45deg)' }}>
                                <div style={{ transform: 'rotate(-45deg)' }}>
                                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: 'var(--color-navy)', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold', transform: 'rotate(-45deg)', border: '2px solid white' }}>
                                    03
                                </div>
                            </div>
                            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: 'var(--space-sm)' }}>Execute</h3>
                            <p className="text-muted" style={{ fontSize: '0.95rem', flexGrow: 1, marginBottom: 'var(--space-lg)' }}>Streamlined transaction guidance to ensure your plan is accurately reflected in your portfolio without technical friction or common errors.</p>
                            <div style={{ height: '3px', background: 'var(--color-navy)', width: '40px', margin: '0 auto', borderRadius: '2px' }}></div>
                        </motion.div>

                        {/* 04 Preserve */}
                        <motion.div 
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}
                            style={{ padding: 'var(--space-xl)', background: 'var(--color-surface)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '24px', textAlign: 'center', display: 'flex', flexDirection: 'column' }}
                        >
                            <div style={{ width: '64px', height: '64px', background: 'rgba(15, 118, 110, 0.1)', color: 'var(--color-navy)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-md)', position: 'relative', transform: 'rotate(45deg)' }}>
                                <div style={{ transform: 'rotate(-45deg)' }}>
                                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                    </svg>
                                </div>
                                <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: 'var(--color-navy)', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold', transform: 'rotate(-45deg)', border: '2px solid white' }}>
                                    04
                                </div>
                            </div>
                            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: 'var(--space-sm)' }}>Preserve</h3>
                            <p className="text-muted" style={{ fontSize: '0.95rem', flexGrow: 1, marginBottom: 'var(--space-lg)' }}>Applying behavioral science to help you stay focused during volatility. We evaluate market shifts so you can decide whether to act or stay patient.</p>
                            <div style={{ height: '3px', background: 'var(--color-navy)', width: '40px', margin: '0 auto', borderRadius: '2px' }}></div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/*  Who We Work With  */}
            <section className="section bg-light">
                <div className="container">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ background: '#f8fafc', padding: 'var(--space-2xl) var(--space-xl)', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.05)', maxWidth: '1000px', margin: '0 auto' }}
                    >
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>Who We Work With</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-navy)', opacity: 0.8, marginBottom: 'var(--space-xl)', maxWidth: '800px' }}>
                            We are selective in the investors we work with — not based on how much you invest, but on <strong>alignment</strong> with how we approach investing.
                        </p>
                        
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-lg)', marginBottom: 'var(--space-xl)' }}>
                            <div style={{ display: 'flex', gap: '16px', flex: '1 1 40%', minWidth: '250px' }}>
                                <div style={{ color: 'var(--color-navy)', marginTop: '2px', flexShrink: 0 }}>
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <p style={{ margin: 0, color: 'var(--color-navy)', fontSize: '1rem', lineHeight: '1.6' }}>Focused on building wealth over a <strong>multi-year horizon</strong>.</p>
                            </div>
                            <div style={{ display: 'flex', gap: '16px', flex: '1 1 40%', minWidth: '250px' }}>
                                <div style={{ color: 'var(--color-navy)', marginTop: '2px', flexShrink: 0 }}>
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <p style={{ margin: 0, color: 'var(--color-navy)', fontSize: '1rem', lineHeight: '1.6' }}>Comfortable following <strong>structure</strong> over market noise.</p>
                            </div>
                            <div style={{ display: 'flex', gap: '16px', flex: '1 1 40%', minWidth: '250px' }}>
                                <div style={{ color: 'var(--color-navy)', marginTop: '2px', flexShrink: 0 }}>
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <p style={{ margin: 0, color: 'var(--color-navy)', fontSize: '1rem', lineHeight: '1.6' }}>Willing to take the time to <strong>understand</strong> positioning.</p>
                            </div>
                            <div style={{ display: 'flex', gap: '16px', flex: '1 1 40%', minWidth: '250px' }}>
                                <div style={{ color: 'var(--color-navy)', marginTop: '2px', flexShrink: 0 }}>
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <p style={{ margin: 0, color: 'var(--color-navy)', fontSize: '1rem', lineHeight: '1.6' }}>Aligned with a <strong>disciplined process</strong> built on research.</p>
                            </div>
                        </div>

                        <p style={{ margin: 0, textAlign: 'center', fontStyle: 'italic', color: 'var(--color-navy)', opacity: 0.7, fontSize: '0.95rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: 'var(--space-md)' }}>
                            This allows us to dedicate meaningful time and attention to each investor, maintaining a consistent, high-quality experience.
                        </p>
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
                        <h2>Start a Conversation</h2>
                        <p className="cta-tagline mb-md" style={{ "fontSize": "1.1rem", "fontWeight": "500", "color": "rgba(255,255,255,0.8)", "letterSpacing": "0.5px" }}>Let's understand your goals and see if our approach is right for you.</p>
                        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/schedule" className="btn btn--white mt-md">Contact Us</motion.a>
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
                    <div className="footer__disclosure" style={{ "marginTop": "var(--space-xl)", "paddingTop": "var(--space-lg)", "borderTop": "1px solid rgba(255,255,255,0.1)", "fontSize": "0.85rem", "color": "rgba(255,255,255,0.5)", "textAlign": "left" }}>
                        <h5 style={{ "color": "rgba(255,255,255,0.8)", "marginBottom": "var(--space-xs)", "fontSize": "0.9rem", "textTransform": "uppercase" }}>Important Disclosure</h5>
                        <p className="mb-xs">SoundThesis operates as a Mutual Fund Distributor and facilitates investments based on your goals, risk profile, and suitability.</p>
                        <p className="mb-xs">All investments are made in your own account with your approval.</p>
                        <p>Investments in securities markets are subject to market risks. Please read all related documents carefully before investing.</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <p>© 2026 SoundThesis. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
