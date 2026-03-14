export const metadata = { title: "Books We Recommend | Sound Thesis" };

import React from 'react';

const recommendedBooks = [
    { title: "The Intelligent Investor", author: "Benjamin Graham", description: "The classic text on value investing, teaching investors how to analyze stocks and minimize risk." },
    { title: "The Psychology of Money", author: "Morgan Housel", description: "Timeless lessons on wealth, greed, and happiness, focusing on how personal behavior impacts financial success." },
    { title: "A Random Walk Down Wall Street", author: "Burton G. Malkiel", description: "A highly influential guide that argues for the superiority of index funds over actively managed portfolios." },
    { title: "The Little Book of Common Sense Investing", author: "John C. Bogle", description: "A simple, logical approach to investing that emphasizes the power of low-cost index funds." },
    { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", description: "A deep dive into the two systems that drive the way we think, revealing the cognitive biases that affect our decisions." },
    { title: "One Up On Wall Street", author: "Peter Lynch", description: "A practical guide showing how average investors can use their everyday knowledge to beat the pros." },
    { title: "Poor Charlie's Almanack", author: "Charles T. Munger", description: "A collection of speeches and talks by Charlie Munger, focusing on his multidisciplinary approach to investing and life." },
    { title: "The Most Important Thing", author: "Howard Marks", description: "Insightful reflections on investing strategy, risk management, and the cyclical nature of markets." },
    { title: "Margin of Safety", author: "Seth A. Klarman", description: "A rare and highly respected guide to risk-averse value investing strategies." },
    { title: "Fooled by Randomness", author: "Nassim Nicholas Taleb", description: "An exploration of the hidden role of luck and probability in the financial markets and our lives." },
    { title: "Security Analysis", author: "Benjamin Graham and David Dodd", description: "The foundational academic text on value investing and detailed financial analysis." },
    { title: "Against the Gods", author: "Peter L. Bernstein", description: "A historical overview of the concept of risk and how our understanding of it has shaped the modern world." },
    { title: "Common Sense on Mutual Funds", author: "John C. Bogle", description: "A comprehensive look at mutual funds, advocating for simplicity and long-term holding strategies." },
    { title: "The Essays of Warren Buffett", author: "Warren Buffett", description: "A curated collection of Buffett’s annual letters to Berkshire Hathaway shareholders, filled with timeless wisdom." },
    { title: "Principles: Life and Work", author: "Ray Dalio", description: "The unconventional principles developed by one of the world's most successful investors." },
    { title: "Your Money or Your Life", author: "Vicki Robin", description: "A transformative guide to redefining your relationship with money and achieving financial independence." },
    { title: "The Bogleheads' Guide to Investing", author: "Taylor Larimore, et al.", description: "A practical, easy-to-follow guide to investing based on the philosophy of Vanguard founder John Bogle." },
    { title: "Mastering the Market Cycle", author: "Howard Marks", description: "An analysis of market cycles and how investors can recognize and appropriately respond to them." },
    { title: "The Behavioral Investor", author: "Daniel Crosby", description: "A fascinating look at the psychology, neurology, and sociology of investing decisions." },
    { title: "The Simple Path to Wealth", author: "J.L. Collins", description: "A straightforward, accessible guide to achieving long-term financial independence through index investing." }
];

export default function Books() {
    return (
        <>

            {/*  Navigation  */}
            <nav className="nav" role="navigation" aria-label="Main navigation">
                <div className="nav__inner">
                    <a href="/" className="nav__logo">Sound Thesis</a>
                    <ul className="nav__links">                        <li><a href="/thesis-notes" className="nav__link">Thesis Notes</a></li>
                        <li><a href="/services" className="nav__link">Services</a></li>
                        <li><a href="/why-us" className="nav__link">Why We Exist</a></li>
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

            <section style={{ background: "var(--color-bg-primary)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "2rem"
                    }}>
                        {recommendedBooks.map((book, index) => (
                            <div key={index} className="book-card" style={{
                                padding: "2rem",
                                borderRadius: "12px",
                                background: "var(--color-bg-primary)",
                                border: "1px solid var(--color-border)",
                                boxShadow: "var(--shadow-sm)",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                display: "flex",
                                flexDirection: "column",
                                cursor: "pointer"
                            }}>
                                <h3 style={{
                                    color: "var(--color-gold)",
                                    fontSize: "1.35rem",
                                    marginBottom: "0.5rem",
                                    fontFamily: "'Playfair Display', serif",
                                    lineHeight: "1.3"
                                }}>{book.title}</h3>
                                <h4 style={{
                                    color: "var(--color-body-light)",
                                    fontSize: "1rem",
                                    marginBottom: "1.25rem",
                                    fontWeight: "normal",
                                    fontStyle: "italic"
                                }}>by {book.author}</h4>
                                <p style={{
                                    color: "var(--color-body)",
                                    fontSize: "1rem",
                                    lineHeight: "1.6",
                                    flexGrow: 1,
                                    opacity: "0.9"
                                }}>{book.description}</p>
                            </div>
                        ))}
                    </div>
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
                            <a href="/calculators">Calculators</a>
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
