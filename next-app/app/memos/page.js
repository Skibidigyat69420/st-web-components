export const metadata = { title: "Memos | Sound Thesis" };

import React from 'react';

const recommendedMemos = [
    { title: "Berkshire Hathaway Shareholder Letters", author: "Warren Buffett", description: "Decades of unparalleled wisdom on value investing, corporate governance, and capital allocation from the Oracle of Omaha.", link: "https://www.berkshirehathaway.com/letters/letters.html" },
    { title: "Oaktree Capital Memos", author: "Howard Marks", description: "Insightful commentary on market cycles, risk management, and the behavioral aspects of investing.", link: "https://www.oaktreecapital.com/insights/memos" },
    { title: "Nomad Investment Partnership Letters", author: "Nick Sleep & Qais Zakaria", description: "A legendary series of letters detailing a deep, unconventional approach to long-term investing and 'scale economics shared'.", link: "#" },
    { title: "Amazon Shareholder Letters", author: "Jeff Bezos", description: "Essential reading on customer obsession, long-term thinking, and building durable moats.", link: "https://ir.aboutamazon.com/annual-reports-proxies-and-shareholder-letters/default.aspx" },
    { title: "Fundsmith Annual Letters", author: "Terry Smith", description: "Clear, no-nonsense insights into identifying and holding high-quality businesses for the long run.", link: "https://www.fundsmith.co.uk/insights" },
    { title: "Above the Crowd", author: "Bill Gurley", description: "Deep dives into venture capital, technology trends, and platform economics by one of Silicon Valley's top investors.", link: "http://abovethecrowd.com/" },
    { title: "Paul Graham's Essays", author: "Paul Graham", description: "Brilliant observations on startups, technology, wealth creation, and human behavior.", link: "http://paulgraham.com/articles.html" },
    { title: "Saber Capital Memos", author: "John Huber", description: "Excellent writings on value investing, the power of compound interest, and evaluating high-return businesses.", link: "https://sabercapitalmgt.com/category/letters/" },
    { title: "JPMorgan Chase Annual Letters", author: "Jamie Dimon", description: "Comprehensive overviews of the global economy, banking, and public policy from a premier financial executive.", link: "https://www.jpmorganchase.com/about/our-leadership/letter-to-shareholders" },
    { title: "Baupost Group Letters (Excerpts)", author: "Seth Klarman", description: "While the letters are private, aggregated excerpts provide invaluable lessons on margin of safety and disciplined value investing.", link: "#" }
];

export default function Memos() {
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
                    <h1 className="hero__title">Memos & Letters</h1>
                    <p className="hero__tagline">Insights on behavioral finance, market structures, and capital allocation.</p>
                </div>
            </section>

            <section style={{ background: "var(--color-bg-primary)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "2rem"
                    }}>
                        {recommendedMemos.map((memo, index) => (
                            <div key={index} className="memo-card" style={{
                                padding: "2rem",
                                borderRadius: "12px",
                                background: "var(--color-white)",
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
                                }}>{memo.title}</h3>
                                <h4 style={{
                                    color: "var(--color-body-light)",
                                    fontSize: "1rem",
                                    marginBottom: "1.25rem",
                                    fontWeight: "normal",
                                    fontStyle: "italic"
                                }}>by {memo.author}</h4>
                                <p style={{
                                    color: "var(--color-body)",
                                    fontSize: "1rem",
                                    lineHeight: "1.6",
                                    flexGrow: 1,
                                    opacity: "0.9",
                                    marginBottom: "1.5rem"
                                }}>{memo.description}</p>
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
