"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ThesisNoteDetail() {
    const { slug } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

                // Try DB articles first
                let res = await fetch(`${apiUrl}/articles/${slug}`);
                let data = await res.json();

                // Fall back to file-based articles
                if (!data.success || !data.data) {
                    res = await fetch(`${apiUrl}/file-articles/${slug}`);
                    data = await res.json();
                }

                if (data.success) setArticle(data.data);
            } catch (err) {
                console.error('Error fetching article:', err);
            } finally {
                setLoading(false);
            }
        };
        if (slug) fetchArticle();
    }, [slug]);

    if (loading) return <div style={{ paddingTop: '200px', textAlign: 'center' }}>Loading research note...</div>;
    if (!article) return <div style={{ paddingTop: '200px', textAlign: 'center' }}>Research note not found.</div>;

    return (
        <>
            <style>{`
                .note-hero { padding: 180px 0 100px; background: linear-gradient(145deg, #063c32 0%, #042922 100%); color: white; text-align: center; }
                .note-hero h1 { color: var(--color-gold); font-size: 48px; margin-bottom: 20px; }
                .note-meta { margin-top: 20px; display: flex; justify-content: center; gap: 20px; font-size: 14px; color: rgba(255,255,255,0.7); }
                .note-body { max-width: 800px; margin: -60px auto 100px; background: white; padding: 50px; border-radius: 12px; box-shadow: 0 20px 50px rgba(0,0,0,0.1); line-height: 1.8; color: #2d3748; font-size: 18px; }
                .note-body h2 { margin: 40px 0 20px; color: #1a202c; }
                .note-body p { margin-bottom: 25px; }
                .back-link { display: inline-block; margin-bottom: 30px; color: var(--color-gold); text-decoration: none; font-weight: 600; }
            `}</style>

            <nav className="nav" role="navigation">
                <div className="nav__inner">
                    <a href="/" className="nav__logo">SoundThesis</a>
                    <ul className="nav__links">                        <li><a href="/thesis-notes" className="nav__link nav__link--active">Thesis Notes</a></li>
                        <li><a href="/services" className="nav__link">Services</a></li>
                        <li><a href="/about-us" className="nav__link">About us</a></li>
                        <li><a href="/calculators" className="nav__link">Calculators</a></li>
                        <li className="nav__cta"><a href="/schedule" className="btn btn--primary btn--small">Schedule Consultation</a></li>
                    </ul>
                </div>
            </nav>

            <section className="note-hero">
                <div className="container">
                    <a href="/thesis-notes" className="back-link">← Back to Thesis Notes</a>
                    <h1>{article.title}</h1>
                    <div className="note-meta">
                        <span>{article.category?.name}</span>
                        <span>•</span>
                        <span>{new Date(article.publicationDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        <span>•</span>
                        <span>By {article.author}</span>
                    </div>
                </div>
            </section>

            <article className="container">
                <div className="note-body">
                    <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
                </div>
            </article>
        </>
    );
}
