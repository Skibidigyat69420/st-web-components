"use client";

import { useEffect, useState } from 'react';
import { apiFetch } from '../../../lib/auth';
import Link from 'next/link';

export default function AdminArticlesPage() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [articleToDelete, setArticleToDelete] = useState(null);
    const [importing, setImporting] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    const fetchArticles = async () => {
        try {
            const res = await apiFetch('/articles?admin=true');
            if (res.ok) setArticles(res.data.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    const openDeleteModal = (article) => {
        setArticleToDelete(article);
        setDeleteModalOpen(true);
    };

    const confirmDelete = async () => {
        if (!articleToDelete) return;
        setDeleting(true);
        try {
            const res = await apiFetch(`/articles/${articleToDelete._id}`, { method: 'DELETE' });
            if (res.ok) {
                setMessage({ text: 'Article deleted successfully', type: 'success' });
                await fetchArticles();
                setTimeout(() => setMessage({ text: '', type: '' }), 3000);
            }
            setDeleteModalOpen(false);
            setArticleToDelete(null);
        } catch (err) {
            alert(err.message || 'Delete failed');
        } finally {
            setDeleting(false);
        }
    };

    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
        setArticleToDelete(null);
    };

    const handleImport = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setImporting(true);
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await apiFetch('/articles/import', {
                method: 'POST',
                body: formData
            });

            if (res.ok) {
                setMessage({ text: res.data.message || 'Import successful', type: 'success' });
                await fetchArticles();
            }
        } catch (err) {
            setMessage({ text: err.message, type: 'error' });
        } finally {
            setImporting(false);
            e.target.value = null; // Reset input
            setTimeout(() => setMessage({ text: '', type: '' }), 5000);
        }
    };

    const toggleStatus = async (article) => {
        const newStatus = article.status === 'Published' ? 'Draft' : 'Published';
        try {
            const res = await apiFetch(`/articles/${article._id}`, {
                method: 'PUT',
                body: JSON.stringify({ status: newStatus })
            });
            if (res.ok) {
                setMessage({ text: `Article set to ${newStatus}`, type: 'success' });
                fetchArticles();
                setTimeout(() => setMessage({ text: '', type: '' }), 3000);
            }
        } catch (err) {
            alert(err.message || 'Status toggle failed');
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
                <h2 style={{ color: 'var(--color-navy)' }}>Manage Articles</h2>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <label className="btn btn--secondary btn--small" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                        {importing ? 'Importing...' : '↑ Import JSON'}
                        <input type="file" accept=".json" onChange={handleImport} style={{ display: 'none' }} disabled={importing} />
                    </label>
                    <Link
                        href="/admin/articles/new"
                        className="btn btn--primary btn--small"
                    >
                        + Create New Article
                    </Link>
                </div>
            </div>

            <style>{`
        .articles-table {
          width: 100%;
          background: var(--color-white);
          border-collapse: collapse;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-sm);
        }
        .articles-table th {
          background: var(--color-bg-secondary);
          padding: 15px;
          text-align: left;
          color: var(--color-body-light);
          font-size: var(--nav-size);
          font-weight: var(--weight-medium);
        }
        .articles-table td {
          padding: 15px;
          border-top: 1px solid var(--color-border);
          color: var(--color-body);
        }
        .status-badge {
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
        }
        .status--published { background: #dcfce7; color: #166534; }
        .status--draft { background: #f1f5f9; color: #475569; }
        .action-link {
          font-weight: 600;
          font-size: 13px;
          text-decoration: none;
          cursor: pointer;
        }
      `}</style>

            {loading ? (
                <p>Loading articles...</p>
            ) : (
                <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                    <table className="articles-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.map(article => (
                                <tr key={article._id}>
                                    <td>
                                        <div style={{ fontWeight: '600', color: 'var(--color-navy)' }}>{article.title}</div>
                                    </td>
                                    <td>{article.category?.name || 'Uncategorized'}</td>
                                    <td>
                                        <span onClick={() => toggleStatus(article)} className={`status-badge status--${article.status.toLowerCase()}`} style={{ cursor: 'pointer' }}>
                                            {article.status}
                                        </span>
                                    </td>
                                    <td>{new Date(article.publicationDate).toLocaleDateString()}</td>
                                    <td>
                                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                            <Link href={`/admin/articles/${article._id}/edit`} className="action-link" style={{ color: 'var(--color-gold)' }}>Edit</Link>
                                            <a href={`/articles/${article.slug}`} target="_blank" className="action-link" style={{ color: 'var(--color-body-light)' }}>View</a>
                                            <button
                                                onClick={() => openDeleteModal(article)}
                                                className="action-link"
                                                style={{ color: '#ef4444', border: 'none', background: 'none', padding: 0 }}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {deleteModalOpen && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex',
                    justifyContent: 'center', alignItems: 'center', zIndex: 1000
                }}>
                    <div style={{
                        background: 'white', padding: '30px', borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%',
                        textAlign: 'center'
                    }}>
                        <h3 style={{ marginBottom: '15px', color: '#1e293b' }}>Confirm Deletion</h3>
                        <p style={{ marginBottom: '25px', color: '#64748b' }}>
                            Are you sure you want to delete the article <strong>"{articleToDelete?.title}"</strong>? This action cannot be undone.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                            <button
                                onClick={closeDeleteModal}
                                style={{ padding: '10px 20px', borderRadius: '6px', border: '1px solid #cbd5e1', background: 'white', cursor: 'pointer', fontWeight: '600', color: '#475569' }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                style={{ padding: '10px 20px', borderRadius: '6px', border: 'none', background: '#ef4444', cursor: 'pointer', fontWeight: '600', color: 'white' }}
                                disabled={deleting}
                            >
                                {deleting ? 'Deleting...' : 'Yes, Delete'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {message.text && (
                <div style={{
                    position: 'fixed', bottom: '20px', right: '20px',
                    backgroundColor: message.type === 'success' ? '#10b981' : '#ef4444',
                    color: 'white', padding: '12px 24px', borderRadius: '6px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)', zIndex: 1001,
                    animation: 'slideIn 0.3s ease'
                }}>
                    {message.text}
                </div>
            )}

            <style>{`
                @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
            `}</style>
        </div>
    );
}
