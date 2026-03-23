export const metadata = { title: "Memos & Letters | SoundThesis" };

import React from 'react';

const memoStages = [
    {
        stage: "Stage 1: Foundational Letters",
        description: "The bedrocks of long-term thinking and business ownership mindset.",
        memos: [
            { title: "Berkshire Hathaway Shareholder Letters", author: "Warren Buffett", description: "Decades of unparalleled wisdom on value investing, corporate governance, and capital allocation from the Oracle of Omaha.", whyItMatters: "The foundation of value investing; teaches the discipline of capital allocation and business owner mindset.", link: "https://www.berkshirehathaway.com/letters/letters.html" },
            { title: "Amazon Shareholder Letters", author: "Jeff Bezos", description: "Essential reading on customer obsession, long-term thinking, and building durable moats.", whyItMatters: "The absolute guide to building durable moats through customer obsession and long-term thinking.", link: "https://ir.aboutamazon.com/annual-reports-proxies-and-shareholder-letters/default.aspx" }
        ]
    },
    {
        stage: "Stage 2: Strategy and Execution",
        description: "Unconventional approaches to building and identifying high-quality businesses.",
        memos: [
            { title: "Nomad Investment Partnership Letters", author: "Nick Sleep & Qais Zakaria", description: "A legendary series of letters detailing a deep, unconventional approach to long-term investing and 'scale economics shared'.", whyItMatters: "Masterclass in 'scale economics shared'—the most powerful force in long-term wealth creation.", link: "#" },
            { title: "Fundsmith Annual Letters", author: "Terry Smith", description: "Clear, no-nonsense insights into identifying and holding high-quality businesses for the long run.", whyItMatters: "Hard-hitting advice on simplicity: buy great companies, don't overpay, and then do nothing.", link: "https://www.fundsmith.co.uk/insights" }
        ]
    },
    {
        stage: "Stage 3: Market Psychology and Cycles",
        description: "Mastering the emotional and cyclical nature of financial markets.",
        memos: [
            { title: "Oaktree Capital Memos", author: "Howard Marks", description: "Insightful commentary on market cycles, risk management, and the behavioral aspects of investing.", whyItMatters: "Essential for understanding market cycles, risk mitigation, and second-level thinking.", link: "https://www.oaktreecapital.com/insights/memos" },
            { title: "Saber Capital Memos", author: "John Huber", description: "Excellent writings on value investing, the power of compound interest, and evaluating high-return businesses.", whyItMatters: "Technical and deep dive into business quality, ROIIC, and the math of compounding.", link: "https://sabercapitalmgt.com/category/letters/" }
        ]
    },
    {
        stage: "Stage 4: Technology and Innovation",
        description: "Deep dives into platform economics and the future of wealth creation.",
        memos: [
            { title: "Above the Crowd", author: "Bill Gurley", description: "Deep dives into venture capital, technology trends, and platform economics by one of Silicon Valley's top investors.", whyItMatters: "Modern insights into technology platform dynamics, venture capital, and the digital economy.", link: "http://abovethecrowd.com/" },
            { title: "Paul Graham's Essays", author: "Paul Graham", description: "Brilliant observations on startups, technology, wealth creation, and human behavior.", whyItMatters: "A fundamental shift in how to think about startups, technology, and wealth creation.", link: "http://paulgraham.com/articles.html" }
        ]
    },
    {
        stage: "Stage 5: Institutional Perspective",
        description: "Professional discipline and leadership from the peaks of the financial world.",
        memos: [
            { title: "JPMorgan Chase Annual Letters", author: "Jamie Dimon", description: "Comprehensive overviews of the global economy, banking, and public policy from a premier financial executive.", whyItMatters: "Insights into global finance leadership, risk management, and large-scale economic systems.", link: "https://www.jpmorganchase.com/about/our-leadership/letter-to-shareholders" },
            { title: "Baupost Group Letters (Excerpts)", author: "Seth Klarman", description: "While the letters are private, aggregated excerpts provide invaluable lessons on margin of safety and disciplined value investing.", whyItMatters: "Conservative, risk-averse wisdom on professional investing in distressed or complex markets.", link: "#" }
        ]
    }
];

export default function Memos() {
    return (
        <>
            {/*  Navigation  */}
            <nav className="nav" role="navigation" aria-label="Main navigation">
                <div className="nav__inner">
                    <a href="/" className="nav__logo">SoundThesis</a>
                    <ul className="nav__links">                        <li><a href="/thesis-notes" className="nav__link">Thesis Notes</a></li>
                        <li><a href="/services" className="nav__link">Services</a></li>
                        <li><a href="/about-us" className="nav__link">About us</a></li>
                        <li><a href="/calculators" className="nav__link">Calculators</a></li>
                        <li className="nav__cta"><a href="/schedule" className="btn btn--primary btn--small">Schedule Consultation</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <section className="hero" style={{ "minHeight": "40vh" }}>
                <div className="hero__content">
                    <h1 className="hero__title">Memos & Letters</h1>
                    <p className="hero__tagline">Foundational insights from the most successful investment minds.</p>
                </div>
            </section>

            <section style={{ background: "var(--color-bg-primary)", padding: "5rem 0", position: "relative", overflow: "hidden" }}>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .roadmap-container {
                        position: relative;
                        max-width: 1000px;
                        margin: 0 auto;
                        padding: 40px 20px;
                    }
                    .roadmap-line {
                        position: absolute;
                        left: 50%;
                        top: 0;
                        bottom: 0;
                        width: 2px;
                        background: linear-gradient(to bottom, var(--color-border) 0%, var(--color-gold) 15%, var(--color-gold) 85%, var(--color-border) 100%);
                        transform: translateX(-50%);
                        z-index: 1;
                    }
                    .roadmap-stage {
                        position: relative;
                        margin-bottom: 100px;
                        z-index: 2;
                    }
                    .roadmap-stage-header {
                        text-align: center;
                        margin-bottom: 50px;
                        background: var(--color-bg-primary);
                        display: inline-block;
                        padding: 10px 30px;
                        border: 2px solid var(--color-gold);
                        border-radius: 50px;
                        position: relative;
                        left: 50%;
                        transform: translateX(-50%);
                        box-shadow: var(--shadow-md);
                    }
                    .roadmap-stage-title {
                        color: var(--color-navy);
                        font-family: var(--font-serif);
                        font-size: 1.5rem;
                        margin: 0;
                    }
                    .roadmap-stage-desc {
                        text-align: center;
                        max-width: 600px;
                        margin: -30px auto 50px;
                        color: var(--color-body-light);
                        font-style: italic;
                    }
                    .roadmap-items {
                        display: flex;
                        flex-direction: column;
                        gap: 40px;
                    }
                    .roadmap-item {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width: 100%;
                        position: relative;
                    }
                    .roadmap-item:nth-child(even) {
                        flex-direction: row-reverse;
                    }
                    .roadmap-card-wrapper {
                        width: 45%;
                    }
                    .roadmap-dot {
                        width: 16px;
                        height: 16px;
                        background: var(--color-gold);
                        border: 4px solid var(--color-bg-primary);
                        border-radius: 50%;
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%);
                        z-index: 3;
                        box-shadow: 0 0 0 4px rgba(217, 119, 6, 0.2);
                    }
                    .memo-card {
                        padding: 1.5rem;
                        border-radius: 12px;
                        background: var(--color-white);
                        border: 1px solid var(--color-border);
                        box-shadow: var(--shadow-sm);
                        transition: all 0.3s ease;
                        position: relative;
                    }
                    .memo-card:hover {
                        transform: translateY(-5px);
                        box-shadow: var(--shadow-lg);
                        border-color: var(--color-gold);
                    }
                    .memo-card::before {
                        content: '';
                        position: absolute;
                        top: 50%;
                        width: 20px;
                        height: 2px;
                        background: var(--color-gold);
                        opacity: 0.5;
                    }
                    .roadmap-item:nth-child(odd) .memo-card::before {
                        right: -20px;
                    }
                    .roadmap-item:nth-child(even) .memo-card::before {
                        left: -20px;
                    }
                    @media (max-width: 768px) {
                        .roadmap-line {
                            left: 30px;
                        }
                        .roadmap-stage-header {
                            left: 30px;
                            transform: none;
                            text-align: left;
                            margin-left: 20px;
                        }
                        .roadmap-stage-desc {
                            text-align: left;
                            margin-left: 50px;
                        }
                        .roadmap-item, .roadmap-item:nth-child(even) {
                            flex-direction: row;
                            justify-content: flex-start;
                            padding-left: 60px;
                        }
                        .roadmap-card-wrapper {
                            width: 100%;
                        }
                        .roadmap-dot {
                            left: 30px;
                        }
                        .memo-card::before {
                            display: none;
                        }
                    }
                `
                }} />
                <div className="roadmap-container">
                    <div className="roadmap-line"></div>
                    {memoStages.map((stage, sIndex) => (
                        <div key={sIndex} className="roadmap-stage">
                            <div className="roadmap-stage-header">
                                <h2 className="roadmap-stage-title">{stage.stage}</h2>
                            </div>
                            <p className="roadmap-stage-desc">{stage.description}</p>
                            <div className="roadmap-items">
                                {stage.memos.map((memo, mIndex) => (
                                    <div key={mIndex} className="roadmap-item">
                                        <div className="roadmap-dot"></div>
                                        <div className="roadmap-card-wrapper">
                                            <div className="memo-card">
                                                <h3 style={{
                                                    color: "var(--color-gold)",
                                                    fontSize: "1.2rem",
                                                    marginBottom: "0.5rem",
                                                    fontFamily: "var(--font-serif)",
                                                    lineHeight: "1.3"
                                                }}>{memo.title}</h3>
                                                <h4 style={{
                                                    color: "var(--color-body-light)",
                                                    fontSize: "0.9rem",
                                                    marginBottom: "1rem",
                                                    fontWeight: "normal",
                                                    fontStyle: "italic"
                                                }}>by {memo.author}</h4>
                                                <p style={{
                                                    color: "var(--color-body)",
                                                    fontSize: "0.95rem",
                                                    lineHeight: "1.5",
                                                    opacity: "0.9",
                                                    marginBottom: "1.25rem"
                                                }}>{memo.description}</p>
                                                <div style={{
                                                    background: "rgba(217, 119, 6, 0.05)",
                                                    padding: "1rem",
                                                    borderRadius: "8px",
                                                    borderLeft: "3px solid var(--color-gold)",
                                                    marginBottom: "1.25rem"
                                                }}>
                                                    <span style={{
                                                        display: "block",
                                                        fontSize: "0.75rem",
                                                        textTransform: "uppercase",
                                                        letterSpacing: "1px",
                                                        color: "var(--color-gold)",
                                                        fontWeight: "600",
                                                        marginBottom: "0.25rem"
                                                    }}>Why this matters</span>
                                                    <p style={{
                                                        fontSize: "0.9rem",
                                                        color: "var(--color-navy)",
                                                        margin: 0,
                                                        lineHeight: "1.4",
                                                        fontStyle: "italic"
                                                    }}>{memo.whyItMatters}</p>
                                                </div>
                                                {memo.link !== "#" && (
                                                    <a href={memo.link} target="_blank" rel="noopener noreferrer" style={{
                                                        color: "var(--color-gold)",
                                                        textDecoration: "none",
                                                        fontWeight: "bold",
                                                        fontSize: "0.9rem",
                                                        display: "inline-block",
                                                        borderBottom: "1px solid transparent",
                                                        transition: "border-color 0.3s ease"
                                                    }}>
                                                        Read Collection →
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
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
