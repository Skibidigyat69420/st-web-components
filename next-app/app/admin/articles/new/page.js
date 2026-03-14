"use client";

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { apiFetch } from '../../../../lib/auth';

export default function NewArticlePage() {
    const router = useRouter();
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        content: '',
        status: 'Published',
        publicationDate: new Date().toISOString().split('T')[0]
    });
    const formDataRef = useRef(formData);
    const [image, setImage] = useState(null);
    const [newCategory, setNewCategory] = useState('');
    const [loading, setLoading] = useState(false);

    // VCS / Draft state
    const [lastSaved, setLastSaved] = useState(null);
    const [draftId, setDraftId] = useState(null);
    const draftIdRef = useRef(null);
    const [versions, setVersions] = useState([]);
    const [showVersions, setShowVersions] = useState(false);
    const autoSaveActive = true;

    // Keep refs updated for setInterval closure
    useEffect(() => {
        formDataRef.current = formData;
    }, [formData]);

    useEffect(() => {
        draftIdRef.current = draftId;
    }, [draftId]);

    useEffect(() => {
        fetchCategories();

        // Restore form data from localStorage first (instant, no backend needed)
        const savedFormData = localStorage.getItem('soundthesis_new_article_draft');
        if (savedFormData) {
            try {
                const parsed = JSON.parse(savedFormData);
                setFormData(prev => ({ ...prev, ...parsed }));
            } catch (e) { }
        }

        // Then try to load the full draft from backend if we have an ID
        const savedDraftId = localStorage.getItem('current_article_draft_id');
        if (savedDraftId) {
            loadDraft(savedDraftId);
        }
    }, []);

    // Persist form data to localStorage on every change (debounced)
    useEffect(() => {
        const timer = setTimeout(() => {
            localStorage.setItem('soundthesis_new_article_draft', JSON.stringify(formData));
        }, 1000);
        return () => clearTimeout(timer);
    }, [formData]);

    useEffect(() => {
        let interval;
        if (autoSaveActive) {
            interval = setInterval(() => {
                handleAutoSave();
            }, 30000);
        }
        return () => clearInterval(interval);
    }, [autoSaveActive]);

    // Fetch versions when draftId changes
    useEffect(() => {
        if (draftId) {
            fetchVersions();
        }
    }, [draftId]);

    const fetchVersions = async () => {
        if (!draftIdRef.current) return;
        try {
            const res = await apiFetch(`/versions/${draftIdRef.current}`);
            if (res.ok) {
                setVersions(res.data.data);
            }
        } catch (err) {
            console.error('Failed to fetch versions', err);
        }
    };

    const loadDraft = async (id) => {
        try {
            const res = await apiFetch(`/drafts/${id}`);
            const data = res.data;
            if (data.success) {
                const draft = data.data;
                if (confirm(`Do you want to restore the unsaved draft: "${draft.title}"?`)) {
                    setFormData({
                        title: draft.title,
                        category: draft.category?._id || draft.category,
                        content: draft.content,
                        status: draft.status || 'Published',
                        publicationDate: draft.publicationDate ? new Date(draft.publicationDate).toISOString().split('T')[0] : formData.publicationDate
                    });
                    setDraftId(draft._id);
                    setLastSaved(new Date(draft.updatedAt || Date.now()));
                } else {
                    localStorage.removeItem('current_article_draft_id');
                }
            }
        } catch (err) {
            console.error('Failed to load draft:', err);
        }
    };

    const handleAutoSave = async () => {
        const currentData = formDataRef.current;
        const currentDraftId = draftIdRef.current;
        if (!currentData.title && !currentData.content) return;

        try {
            const res = await apiFetch('/drafts/autosave', {
                method: 'POST',
                body: JSON.stringify({
                    id: currentDraftId,
                    ...currentData
                })
            });
            const data = res.data;
            if (data.success) {
                if (!currentDraftId) {
                    setDraftId(data.data._id);
                    localStorage.setItem('current_article_draft_id', data.data._id);
                }
                setLastSaved(new Date());
                fetchVersions();
            }
        } catch (err) {
            console.error('Autosave failed:', err);
        }
    };

    const handleRestore = async (version) => {
        if (confirm(`Are you sure you want to restore to this ${version.versionType} version?`)) {
            setFormData({
                ...formDataRef.current,
                title: version.title,
                content: version.content,
                category: version.category || formDataRef.current.category,
                status: version.status || formDataRef.current.status
            });
            setShowVersions(false);
        }
    };

    const fetchCategories = async () => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
        const res = await fetch(`${apiUrl}/categories`);
        const data = await res.json();
        if (data.success) setCategories(data.data);
    };

    const handleCreateCategory = async () => {
        if (!newCategory) return;
        try {
            const res = await apiFetch('/categories', {
                method: 'POST',
                body: JSON.stringify({ name: newCategory })
            });
            const data = res.data;
            if (res.ok && data.success) {
                const createdCat = data.data;
                setNewCategory('');
                await fetchCategories();
                setFormData(prev => ({ ...prev, category: createdCat._id }));
            }
        } catch (err) {
            alert('Failed to create category');
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
        };
        reader.readAsText(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = new FormData();
        form.append('title', formData.title);
        form.append('category', formData.category);
        form.append('content', formData.content);
        form.append('status', formData.status);
        form.append('publicationDate', formData.publicationDate);
        if (image) form.append('featuredImage', image);

        try {
            const res = await apiFetch('/articles', {
                method: 'POST',
                headers: {}, // apiFetch will add Authorization
                body: form
            });

            if (res.ok) {
                // Clear all draft info on successful submit
                localStorage.removeItem('current_article_draft_id');
                localStorage.removeItem('soundthesis_new_article_draft');
                window.location.href = '/admin/articles';
            } else {
                const data = res.data;
                alert(data.error || 'Failed to create article');
            }
        } catch (err) {
            console.error('API Fetch Error:', err);
            alert('Error connecting to server');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '20px' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
                    <div>
                        <h2 style={{ color: 'var(--color-navy)', marginBottom: '4px' }}>Create New Article</h2>
                        {lastSaved && (
                            <span style={{ fontSize: '12px', color: 'var(--color-success)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-success)' }}></span>
                                Autosaved at {lastSaved.toLocaleTimeString()}
                            </span>
                        )}
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        {draftId && (
                            <button onClick={() => setShowVersions(!showVersions)} className="btn btn--secondary btn--small">
                                {showVersions ? 'Hide Versions' : 'View History'}
                            </button>
                        )}
                        <button onClick={() => router.back()} className="btn btn--secondary btn--small">Cancel</button>
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
                    .category-add { display: flex; gap: 10px; margin-top: 10px; }
                    
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

                <form onSubmit={handleSubmit} className="card">
                    <div className="form-group">
                        <label className="form-label">Article Title</label>
                        <input
                            type="text"
                            className="form-input"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            required
                            placeholder="Institutional Finance in 2024"
                        />
                    </div>

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
                        <div className="category-add">
                            <input
                                type="text"
                                className="form-input"
                                placeholder="New Category Name"
                                value={newCategory}
                                onChange={(e) => setNewCategory(e.target.value)}
                                style={{ flexGrow: 1 }}
                            />
                            <button type="button" onClick={handleCreateCategory} className="btn btn--secondary btn--small">Add</button>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Featured Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Upload Article File (.md, .txt, .html)</label>
                        <input
                            type="file"
                            accept=".txt,.md,.html"
                            onChange={handleFileUpload}
                            className="form-input"
                            style={{ background: '#f8fafc' }}
                            required
                        />
                        <small style={{ color: '#64748b', fontSize: '13px', marginTop: '6px', display: 'block' }}>
                            Upload a local file to auto-fill the content and title (if empty).
                        </small>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                        <div>
                            <label className="form-label">Publication Date</label>
                            <input
                                type="date"
                                className="form-input"
                                value={formData.publicationDate}
                                onChange={(e) => setFormData({ ...formData, publicationDate: e.target.value })}
                                required
                            />
                        </div>
                        <div>
                            {/* Status hidden but included in model default to Published */}
                        </div>
                    </div>

                    <button type="submit" className="btn btn--primary" disabled={loading}>
                        {loading ? 'Creating...' : 'Create Article'}
                    </button>
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
                                    type="button"
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
