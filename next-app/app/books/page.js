export const metadata = { title: "Books We Recommend | SoundThesis" };

import React from 'react';

const bookStages = [
    {
        stage: "Stage 1: The Foundation",
        description: "Developing the right mindset and understanding the basics of personal finance.",
        books: [
            { title: "The Simple Path to Wealth", author: "J.L. Collins", description: "A straightforward, accessible guide to achieving long-term financial independence through index investing.", whyItMatters: "Simplifies investing to its core essence, removing the noise of Wall Street." },
            { title: "Your Money or Your Life", author: "Vicki Robin", description: "A transformative guide to redefining your relationship with money and achieving financial independence.", whyItMatters: "Transforms your relationship with money from a 'scorecard' to 'life energy'." },
            { title: "The Psychology of Money", author: "Morgan Housel", description: "Timeless lessons on wealth, greed, and happiness, focusing on how personal behavior impacts financial success.", whyItMatters: "Teaches that doing well with money isn't necessarily about what you know, but how you behave." }
        ]
    },
    {
        stage: "Stage 2: The Basics of Investing",
        description: "Understanding market mechanics and the power of passive strategies.",
        books: [
            { title: "The Bogleheads' Guide to Investing", author: "Taylor Larimore, et al.", description: "A practical, easy-to-follow guide to investing based on the philosophy of Vanguard founder John Bogle.", whyItMatters: "Provides a complete, practical toolkit for the most reliable way to build wealth: low-cost indexing." },
            { title: "The Little Book of Common Sense Investing", author: "John C. Bogle", description: "A simple, logical approach to investing that emphasizes the power of low-cost index funds.", whyItMatters: "The definitive case for passive investing from the creator of the index fund himself." },
            { title: "Common Sense on Mutual Funds", author: "John C. Bogle", description: "A comprehensive look at mutual funds, advocating for simplicity and long-term holding strategies.", whyItMatters: "Deeper dive into the industry mechanics and why costs are the only certainty in investing." },
            { title: "A Random Walk Down Wall Street", author: "Burton G. Malkiel", description: "A highly influential guide that argues for the superiority of index funds over actively managed portfolios.", whyItMatters: "The academic foundation for why beating the market is consistently improbable for most." }
        ]
    },
    {
        stage: "Stage 3: Building a Value Mindset",
        description: "Learning the core principles of value investing and fundamental analysis.",
        books: [
            { title: "One Up On Wall Street", author: "Peter Lynch", description: "A practical guide showing how average investors can use their everyday knowledge to beat the pros.", whyItMatters: "Empowers the individual investor to find great companies in their own backyard." },
            { title: "The Intelligent Investor", author: "Benjamin Graham", description: "The classic text on value investing, teaching investors how to analyze stocks and minimize risk.", whyItMatters: "The 'Bible' of value investing; introduces the crucial concepts of 'Mr. Market' and 'Margin of Safety'." },
            { title: "The Essays of Warren Buffett", author: "Warren Buffett", description: "A curated collection of Buffett’s annual letters to Berkshire Hathaway shareholders, filled with timeless wisdom.", whyItMatters: "Direct wisdom from the most successful investor in history on business quality and management." }
        ]
    },
    {
        stage: "Stage 4: Mastering Strategy & Cycles",
        description: "Navigating market psychology and understanding the cyclical nature of investing.",
        books: [
            { title: "The Most Important Thing", author: "Howard Marks", description: "Insightful reflections on investing strategy, risk management, and the cyclical nature of markets.", whyItMatters: "Focuses on 'second-level thinking' and the nuances of risk and contrarianism." },
            { title: "Mastering the Market Cycle", author: "Howard Marks", description: "An analysis of market cycles and how investors can recognize and appropriately respond to them.", whyItMatters: "Teaches how to recognize where we are in the pendulum of market emotions." },
            { title: "The Behavioral Investor", author: "Daniel Crosby", description: "A fascinating look at the psychology, neurology, and sociology of investing decisions.", whyItMatters: "A technical and practical guide to identifying and overcoming the biological biases that sabotage investors." }
        ]
    },
    {
        stage: "Stage 5: Advanced Philosophy & Risk",
        description: "Challenging conventional wisdom and mastering complex financial systems.",
        books: [
            { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", description: "A deep dive into the two systems that drive the way we think, revealing the cognitive biases that affect our decisions.", whyItMatters: "The definitive work on human cognition; essential for understanding *why* we make financial mistakes." },
            { title: "Fooled by Randomness", author: "Nassim Nicholas Taleb", description: "An exploration of the hidden role of luck and probability in the financial markets and our lives.", whyItMatters: "A harsh but necessary reminder of the role of luck and the 'black swans' that can ruin an unprepared investor." },
            { title: "Poor Charlie's Almanack", author: "Charles T. Munger", description: "A collection of speeches and talks by Charlie Munger, focusing on his multidisciplinary approach to investing and life.", whyItMatters: "A masterclass in multidisciplinary thinking and avoiding 'man with a hammer' syndrome." },
            { title: "Principles: Life and Work", author: "Ray Dalio", description: "The unconventional principles developed by one of the world's most successful investors.", whyItMatters: "A systematic approach to decision-making and radical transparency in business and life." },
            { title: "Margin of Safety", author: "Seth A. Klarman", description: "A rare and highly respected guide to risk-averse value investing strategies.", whyItMatters: "An advanced, risk-first approach to value investing in complex or distressed markets." },
            { title: "Security Analysis", author: "Benjamin Graham and David Dodd", description: "The foundational academic text on value investing and detailed financial analysis.", whyItMatters: "The rigorous, formal foundation of financial analysis for those who want to master the craft." },
            { title: "Against the Gods", author: "Peter L. Bernstein", description: "A historical overview of the concept of risk and how our understanding of it has shaped the modern world.", whyItMatters: "The history of risk; understanding how humanity learned to measure and manage the unknown." }
        ]
    }
];

export default function Books() {
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
                    <h1 className="hero__title">Recommended Books</h1>
                    <p className="hero__tagline">Foundational texts that build an unshakeable investing mindset.</p>
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
                    .book-card {
                        padding: 1.5rem;
                        border-radius: 12px;
                        background: var(--color-white);
                        border: 1px solid var(--color-border);
                        box-shadow: var(--shadow-sm);
                        transition: all 0.3s ease;
                        position: relative;
                    }
                    .book-card:hover {
                        transform: translateY(-5px);
                        box-shadow: var(--shadow-lg);
                        border-color: var(--color-gold);
                    }
                    .book-card::before {
                        content: '';
                        position: absolute;
                        top: 50%;
                        width: 20px;
                        height: 2px;
                        background: var(--color-gold);
                        opacity: 0.5;
                    }
                    .roadmap-item:nth-child(odd) .book-card::before {
                        right: -20px;
                    }
                    .roadmap-item:nth-child(even) .book-card::before {
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
                        .book-card::before {
                            display: none;
                        }
                    }
                `
                }} />
                <div className="roadmap-container">
                    <div className="roadmap-line"></div>
                    {bookStages.map((stage, sIndex) => (
                        <div key={sIndex} className="roadmap-stage">
                            <div className="roadmap-stage-header">
                                <h2 className="roadmap-stage-title">{stage.stage}</h2>
                            </div>
                            <p className="roadmap-stage-desc">{stage.description}</p>
                            <div className="roadmap-items">
                                {stage.books.map((book, bIndex) => (
                                    <div key={bIndex} className="roadmap-item">
                                        <div className="roadmap-dot"></div>
                                        <div className="roadmap-card-wrapper">
                                            <div className="book-card">
                                                <h3 style={{
                                                    color: "var(--color-gold)",
                                                    fontSize: "1.2rem",
                                                    marginBottom: "0.5rem",
                                                    fontFamily: "var(--font-serif)",
                                                    lineHeight: "1.3"
                                                }}>{book.title}</h3>
                                                <h4 style={{
                                                    color: "var(--color-body-light)",
                                                    fontSize: "0.9rem",
                                                    marginBottom: "1rem",
                                                    fontWeight: "normal",
                                                    fontStyle: "italic"
                                                }}>by {book.author}</h4>
                                                <p style={{
                                                    color: "var(--color-body)",
                                                    fontSize: "0.95rem",
                                                    lineHeight: "1.5",
                                                    opacity: "0.9",
                                                    marginBottom: "1.25rem"
                                                }}>{book.description}</p>
                                                <div style={{
                                                    background: "rgba(217, 119, 6, 0.05)",
                                                    padding: "1rem",
                                                    borderRadius: "8px",
                                                    borderLeft: "3px solid var(--color-gold)",
                                                    marginTop: "auto"
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
                                                    }}>{book.whyItMatters}</p>
                                                </div>
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
