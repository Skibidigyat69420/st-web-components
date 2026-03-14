"use client";

import { useEffect, useState, use, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { apiFetch } from '../../../../../lib/auth';

export default function EditArticlePage({ params: paramsPromise }) {
    const params = use(paramsPromise);
    const id = params.id;
    const router = useRouter();
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        content: '',
        status: 'Published',
        publicationDate: ''
    });
    const formDataRef = useRef(formData); // For autosave
    const [image, setImage] = useState(null);
    const [newCategory, setNewCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    // VCS State
    const [versions, setVersions] = useState([]);
    const [showVersions, setShowVersions] = useState(false);
    const [lastSavedTime, setLastSavedTime] = useState(null);

    // Keep formDataRef updated for the setInterval closure
    useEffect(() => {
        formDataRef.current = formData;
    }, [formData]);

    // Persist form data to localStorage on every change (debounced)
    useEffect(() => {
        if (!id || loading) return;
        const timer = setTimeout(() => {
            localStorage.setItem(`soundthesis_edit_article_${id}`, JSON.stringify(formData));
        }, 1000);
        return () => clearTimeout(timer);
    }, [formData, id, loading]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [catsRes, articleRes] = await Promise.all([
                    apiFetch('/categories'),
                    apiFetch(`/articles/${id}?admin=true`)
                ]);

                if (catsRes.ok) setCategories(catsRes.data.data);

                if (articleRes.ok) {
                    const article = articleRes.data.data;
                    setFormData({
                        title: article.title,
                        category: article.category?._id || article.category,
                        content: article.content,
                        status: article.status,
                        publicationDate: article.publicationDate ? new Date(article.publicationDate).toISOString().split('T')[0] : ''
                    });
                }

                fetchVersions();
            } catch (err) {
                console.error('Failed to fetch data:', err);
                // Fallback: restore from localStorage if backend is unreachable
                const savedFormData = localStorage.getItem(`soundthesis_edit_article_${id}`);
                if (savedFormData) {
                    try {
                        const parsed = JSON.parse(savedFormData);
                        setFormData(prev => ({ ...prev, ...parsed }));
                        setMessage({ text: 'Restored from local cache (backend offline)', type: 'warning' });
                    } catch (e) { }
                } else {
                    setMessage({ text: 'Failed to load article data', type: 'error' });
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        // Autosave every 30 seconds
        const autoSaveInterval = setInterval(() => {
            handleAutosave();
        }, 30000);
        return () => clearInterval(autoSaveInterval);
    }, [id]);

    const fetchVersions = async () => {
        try {
            const res = await apiFetch(`/versions/${id}`);
            if (res.ok) {
                setVersions(res.data.data);
            }
        } catch (err) {
            console.error('Failed to fetch versions', err);
        }
    };

    const handleAutosave = async () => {
        const currentData = formDataRef.current;
        if (!currentData.title && !currentData.content) return;

        try {
            const res = await apiFetch(`/articles/${id}/autosave`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(currentData)
            });
            if (res.ok) {
                setLastSavedTime(new Date());
                fetchVersions(); // Refresh history
            }
        } catch (err) {
            console.error('Autosave failed:', err);
        }
    };

    const handleRestore = async (version) => {
        if (confirm(`Are you sure you want to restore to this ${version.versionType} version? Unsaved changes will be lost.`)) {
            setFormData({
                ...formData,
                title: version.title,
                content: version.content,
                category: version.category || formData.category,
                status: version.status || formData.status
            });
            setMessage({ text: 'Version restored. Click "Update Article" to save.', type: 'success' });
            setShowVersions(false);
        }
    };

    const handleCreateCategory = async () => {
        if (!newCategory) return;
        try {
            const res = await apiFetch('/categories', {
                method: 'POST',
                body: JSON.stringify({ name: newCategory })
            });
            if (res.ok) {
                const createdCat = res.data.data;
                setNewCategory('');
                const catsRes = await apiFetch('/categories');
                if (catsRes.ok) setCategories(catsRes.data.data);
                setFormData(prev => ({ ...prev, category: createdCat._id }));
                setMessage({ text: 'Category created', type: 'success' });
            }
        } catch (err) {
            setMessage({ text: err.message || 'Failed to create category', type: 'error' });
        }
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const fileContent = event.target.result;
            // Try to auto-fill title from filename
            let newTitle = formData.title;
            if (!formData.title) {
                newTitle = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
                newTitle = newTitle.replace(/\b\w/g, l => l.toUpperCase());
            }

            setFormData(prev => ({
                ...prev,
                title: newTitle,
                content: fileContent
            }));
            setMessage({ text: 'File loaded successfully! Please review before updating.', type: 'success' });
        };
        reader.readAsText(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        setMessage({ text: '', type: '' });

        const form = new FormData();
        form.append('title', formData.title);
        form.append('category', formData.category);
        form.append('content', formData.content);
        form.append('status', formData.status);
        form.append('publicationDate', formData.publicationDate);
        if (image) form.append('featuredImage', image);

        try {
            const res = await apiFetch(`/articles/${id}`, {
                method: 'PUT',
                body: form
            });

            if (res.ok) {
                setMessage({ text: 'Article updated successfully!', type: 'success' });
                fetchVersions(); // refresh versions
                setLastSavedTime(new Date());
                setTimeout(() => router.push('/admin/articles'), 1500);
            }
        } catch (err) {
            setMessage({ text: err.message || 'Failed to update article', type: 'error' });
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div style={{ padding: '40px', textAlign: 'center' }}>Loading article data...</div>;

    return (
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '20px' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
                    <div>
                        <h2 style={{ color: 'var(--color-navy)', margin: 0 }}>Edit Article</h2>
                        {lastSavedTime && (
                            <span style={{ fontSize: '12px', color: 'var(--color-success)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-success)' }}></span>
                                Last saved at {lastSavedTime.toLocaleTimeString()}
                            </span>
                        )}
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button onClick={() => setShowVersions(!showVersions)} className="btn btn--secondary btn--small">
                            {showVersions ? 'Hide Versions' : 'View History'}
                        </button>
                        <button onClick={() => router.back()} className="btn btn--secondary btn--small">Back</button>
                    </div>
                </div>

                <style>{`
                    .form-group { margin-bottom: 20px; }
                    .form-label { display: block; font-weight: 600; margin-bottom: 8px; font-size: 14px; }
                    .form-input { 
                        width: 100%; 
                        padding: 12px; 
                        border: 1px solid var(--color-border); 
                        border-radius: 6px; 
                        font-size: 16px;
                        transition: border-color 0.2s;
                    }
                    .form-input:focus { border-color: var(--color-gold); outline: none; }
                    .msg { 
                        padding: 12px; 
                        border-radius: 6px; 
                        margin-bottom: 20px; 
                        font-weight: 500;
                        animation: fadeIn 0.3s ease;
                    }
                    .msg--success { background: rgba(16, 185, 129, 0.1); color: #059669; border: 1px solid rgba(16, 185, 129, 0.2); }
                    .msg--error { background: rgba(239, 68, 68, 0.1); color: #dc2626; border: 1px solid rgba(239, 68, 68, 0.2); }
                    @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
                    
                    /* VCS Sidebar */
                    .vcs-sidebar {
                        width: 300px;
                        background: white;
                        border-radius: 8px;
                        box-shadow: 0 4px 12px rgba(0,0,0,0.05);
                        padding: 20px;
                        height: fit-content;
                        max-height: 80vh;
                        overflow-y: auto;
                    }
                    .version-item {
                        padding: 12px;
                        border-bottom: 1px solid var(--color-border);
                        font-size: 13px;
                    }
                    .version-item:last-child { border-bottom: none; }
                    .version-meta { color: #64748b; margin-bottom: 8px; }
                    .version-badge {
                        display: inline-block;
                        padding: 2px 6px;
                        border-radius: 4px;
                        font-size: 11px;
                        font-weight: 600;
                        margin-right: 6px;
                    }
                    .badge-auto { background: #e0f2fe; color: #0284c7; }
                    .badge-manual { background: #dcfce7; color: #166534; }
                `}</style>

                {message.text && (
                    <div className={`msg msg--${message.type}`}>
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="card">
                    <div className="form-group">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-input"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            required
                        />
                    </div>

                    <div className="grid grid--2">
                        <div className="form-group">
                            <label className="form-label">Category</label>
                            <select
                                className="form-input"
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                required
                            >
                                <option value="">Select Category</option>
                                {categories.map(cat => (
                                    <option key={cat._id} value={cat._id}>{cat.name}</option>
                                ))}
                            </select>
                            <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                                <input
                                    type="text"
                                    className="form-input"
                                    style={{ padding: '8px' }}
                                    placeholder="New category..."
                                    value={newCategory}
                                    onChange={(e) => setNewCategory(e.target.value)}
                                />
                                <button type="button" onClick={handleCreateCategory} className="btn btn--secondary btn--small">Add</button>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Status</label>
                            <select
                                className="form-input"
                                value={formData.status}
                                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                            >
                                <option value="Draft">Draft</option>
                                <option value="Published">Published</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid--2">
                        <div className="form-group">
                            <label className="form-label">Publication Date</label>
                            <input
                                type="date"
                                className="form-input"
                                value={formData.publicationDate}
                                onChange={(e) => setFormData({ ...formData, publicationDate: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Update Featured Image (Optional)</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setImage(e.target.files[0])}
                                className="form-input"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Upload Article File (.md, .txt, .html)</label>
                        <input
                            type="file"
                            accept=".txt,.md,.html"
                            onChange={handleFileUpload}
                            className="form-input"
                            style={{ background: '#f8fafc' }}
                        />
                        <small style={{ color: '#64748b', fontSize: '13px', marginTop: '6px', display: 'block' }}>
                            Upload a local file to replace the current content.
                        </small>
                    </div>

                    <div style={{ display: 'flex', gap: '15px' }}>
                        <button type="submit" className="btn btn--primary" disabled={saving}>
                            {saving ? 'Saving...' : 'Update Article'}
                        </button>
                        <button type="button" onClick={() => router.push('/admin/articles')} className="btn btn--secondary">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>

            {showVersions && (
                <div className="vcs-sidebar">
                    <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: 'var(--color-navy)' }}>Version History</h3>
                    {versions.length === 0 ? (
                        <p style={{ color: '#64748b', fontSize: '13px' }}>No versions saved yet.</p>
                    ) : (
                        versions.map(v => (
                            <div key={v._id} className="version-item">
                                <div className="version-meta">
                                    <span className={`version-badge ${v.versionType === 'autosave' ? 'badge-auto' : 'badge-manual'}`}>
                                        {v.versionType === 'autosave' ? 'Auto Run' : 'Manual'}
                                    </span>
                                    {new Date(v.createdAt).toLocaleString()}
                                </div>
                                <div style={{ marginBottom: '8px', fontWeight: '500' }}>{v.title}</div>
                                <button
                                    onClick={() => handleRestore(v)}
                                    className="btn btn--secondary btn--small"
                                    style={{ padding: '4px 10px', fontSize: '11px' }}
                                >
                                    Restore
                                </button>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
