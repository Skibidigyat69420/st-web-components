"use client";

import { useEffect, useState } from 'react';

export default function ThesisNotes() {
    const [articles, setArticles] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api').replace(/\/$/, '');

                const [articlesRes, fileArticlesRes, categoriesRes] = await Promise.all([
                    fetch(`${apiUrl}/articles`).catch(err => ({ error: true, name: 'articles', message: err.message })),
                    fetch(`${apiUrl}/file-articles`).catch(err => ({ error: true, name: 'file-articles', message: err.message })),
                    fetch(`${apiUrl}/categories`).catch(err => ({ error: true, name: 'categories', message: err.message }))
                ]);

                // Check for connection failures
                const failures = [articlesRes, fileArticlesRes, categoriesRes].filter(r => r.error);
                if (failures.length > 0) {
                    throw new Error(`Connection failed: ${failures.map(f => f.name).join(', ')}`);
                }

                const articlesData = await articlesRes.json();
                const fileArticlesData = await fileArticlesRes.json();
                const categoriesData = await categoriesRes.json();

                // Merge DB articles and file-based articles
                const dbArticles = articlesData.success ? articlesData.data : [];
                const fileArticles = fileArticlesData.success ? fileArticlesData.data : [];

                // Deduplicate by slug (DB articles take priority)
                const slugSet = new Set(dbArticles.map(a => a.slug));
                const uniqueFileArticles = fileArticles.filter(a => !slugSet.has(a.slug));
                const merged = [...dbArticles, ...uniqueFileArticles];

                // Sort by publication date, most recent first
                merged.sort((a, b) => new Date(b.publicationDate) - new Date(a.publicationDate));

                setArticles(merged);

                if (categoriesData.success) {
                    // Start with DB categories, then add any new categories from file articles
                    const cats = categoriesData.data;
                    const existingNames = new Set(cats.map(c => c.name));
                    for (const fa of uniqueFileArticles) {
                        if (fa.category && fa.category.name && !existingNames.has(fa.category.name)) {
                            cats.push(fa.category);
                            existingNames.add(fa.category.name);
                        }
                    }
                    setCategories(cats);
                }
            } catch (err) {
                console.error('🔥 Error fetching articles:', err);
                setLoading(false);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const filteredArticles = activeFilter === 'all'
        ? articles
        : articles.filter(a => a.category && a.category.name === activeFilter);

    const stripHtml = (html) => html ? html.replace(/<[^>]*>?/gm, '') : '';

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
                    <ul className="nav__links">                        <li><a href="/thesis-notes" className="nav__link nav__link--active">Thesis Notes</a></li>
                        <li><a href="/services" className="nav__link">Services</a></li>
                        <li><a href="/why-us" className="nav__link">Why We Exist</a></li>
                        <li><a href="/calculators" className="nav__link">Calculators</a></li>
                        <li className="nav__cta"><a href="/schedule" className="btn btn--primary btn--small">Schedule Consultation</a></li>
                    </ul>
                </div>
            </nav>

            {/*  Hero Section  */}
            <section className="hero" style={{ "minHeight": "55vh" }}>
                <div className="hero__content">
                    <h1 className="hero__title">Thesis Notes</h1>
                    <p className="hero__tagline">Accessible financial research. Download. Review. Apply.</p>
                    <div className="hero__divider"></div>
                    <p className="hero__description">
                        Our complete research library - models, methodologies, and market analysis - published openly for
                        verification and application.
                    </p>
                </div>
            </section>

            {/*  Filter & Research Grid  */}
            <section className="section">
                <div className="container">
                    {/*  Filters — dynamically built from backend categories  */}
                    <div className="filters">
                        <button
                            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('all')}
                        >
                            All Research
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat._id}
                                className={`filter-btn ${activeFilter === cat.name ? 'active' : ''}`}
                                onClick={() => setActiveFilter(cat.name)}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/*  Research Grid  */}
                    {loading ? (
                        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--color-body)' }}>
                            Loading research...
                        </div>
                    ) : (
                        <div className="grid grid--2">
                            {filteredArticles.length > 0 ? (
                                filteredArticles.map((article, index) => (
                                    <article
                                        key={article._id}
                                        className="card research-card"
                                        style={index === 0 ? { gridColumn: 'span 2' } : {}}
                                    >
                                        <div style={index === 0 ? { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-md)' } : {}}>
                                            <div style={index === 0 ? { flex: 1, minWidth: '300px' } : {}}>
                                                <span className="research-card__date">
                                                    {new Date(article.publicationDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                                    {index === 0 ? ' • Featured' : ''}
                                                </span>
                                                {index === 0 ? (
                                                    <h3 className="research-card__title" style={{ fontSize: 'var(--h3-size)' }}>{article.title}</h3>
                                                ) : (
                                                    <h4 className="research-card__title">{article.title}</h4>
                                                )}
                                                <div className="research-card__tags">
                                                    <span className={`tag ${index === 0 ? 'tag--primary' : ''}`}>{article.category?.name}</span>
                                                    {index === 0 && <span className="tag">Open Access</span>}
                                                </div>
                                                <p className={index === 0 ? '' : 'text-small text-muted mb-md'} style={index === 0 ? { marginBottom: 'var(--space-md)' } : {}}>
                                                    {stripHtml(article.content).substring(0, index === 0 ? 250 : 150)}...
                                                </p>
                                                <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
                                                    {index === 0 ? (
                                                        <>
                                                            <a href={`/thesis-notes/${article.slug}`} className="btn btn--primary btn--small">
                                                                Read Full Note
                                                            </a>
                                                            <a href={`/thesis-notes/${article.slug}`} className="btn btn--secondary btn--small" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                                View Details
                                                            </a>
                                                        </>
                                                    ) : (
                                                        <a href={`/thesis-notes/${article.slug}`} className="research-card__link">Read Full Note →</a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))
                            ) : (
                                <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '50px', color: 'var(--color-body)' }}>
                                    No research notes found in this category.
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/*  Helpful Resources Section  */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-header__title">Helpful Resources</h2>
                        <div className="section-header__divider"></div>
                        <p className="text-muted">Tools and knowledge to support your investment journey.</p>
                    </div>

                    <div className="grid grid--2">
                        <div className="card">
                            <h3 className="card__title">Guiding Memos</h3>
                            <p className="text-small text-muted mb-md">Curated letters and memos from legendary investors that shape our core philosophy and market approach.</p>
                            <ul className="feature-list">
                                <li className="feature-list__item">
                                    <svg className="feature-list__check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    <a href="/memos" className="text-link">Berkshire Hathaway Letters to Shareholders</a>
                                </li>
                                <li className="feature-list__item">
                                    <svg className="feature-list__check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    <a href="/memos" className="text-link">Oaktree Capital Memos - Howard Marks</a>
                                </li>
                            </ul>
                            <a href="/memos" className="btn btn--secondary btn--small" style={{ marginTop: '15px' }}>Explore Collection</a>
                        </div>

                        <div className="card">
                            <h3 className="card__title">Books We Recommend</h3>
                            <p className="text-small text-muted mb-md">Foundational texts that build an unshakeable investing mindset.</p>
                            <ul className="feature-list">
                                <li className="feature-list__item">
                                    <svg className="feature-list__check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                    <span><strong>Thinking, Fast and Slow</strong> - Daniel Kahneman</span>
                                </li>
                                <li className="feature-list__item">
                                    <svg className="feature-list__check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                    <span><strong>The Most Important Thing</strong> - Howard Marks</span>
                                </li>
                            </ul>
                            <a href="/books" className="btn btn--secondary btn--small" style={{ marginTop: '15px' }}>View Book List</a>
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
                            <p>Institutional-grade wealth management powered by accessible research, fiduciary transparency, and behavioral coaching.</p>
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
