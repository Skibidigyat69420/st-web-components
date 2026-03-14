"use client";

import { useEffect, useState } from 'react';
import { apiFetch } from '../../../lib/auth';

export default function AdminCategoriesPage() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newCategory, setNewCategory] = useState('');
    const [editingCategory, setEditingCategory] = useState(null);
    const [editName, setEditName] = useState('');
    const [message, setMessage] = useState({ text: '', type: '' });

    const fetchCategories = async () => {
        try {
            const res = await apiFetch('/categories');
            const data = res.data;
            if (data.success) setCategories(data.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleCreate = async (e) => {
        e.preventDefault();
        if (!newCategory) return;
        try {
            const res = await apiFetch('/categories', {
                method: 'POST',
                body: JSON.stringify({ name: newCategory })
            });
            if (res.ok) {
                setNewCategory('');
                fetchCategories();
                showMessage('Category created successfully', 'success');
            }
        } catch (err) {
            showMessage(err.message || 'Failed to create', 'error');
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!editName || !editingCategory) return;
        try {
            const res = await apiFetch(`/categories/${editingCategory._id}`, {
                method: 'PUT',
                body: JSON.stringify({ name: editName })
            });
            if (res.ok) {
                setEditingCategory(null);
                setEditName('');
                fetchCategories();
                showMessage('Category updated successfully', 'success');
            }
        } catch (err) {
            showMessage(err.message || 'Update failed', 'error');
        }
    };

    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [categoryToDelete, setCategoryToDelete] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = (category) => {
        setCategoryToDelete(category);
        setDeleteModalOpen(true);
    };

    const confirmDelete = async () => {
        if (!categoryToDelete) return;
        setIsDeleting(true);
        try {
            const res = await apiFetch(`/categories/${categoryToDelete._id}`, { method: 'DELETE' });
            if (res.ok) {
                fetchCategories();
                showMessage('Category deleted', 'success');
            }
        } catch (err) {
            showMessage(err.message || 'Delete failed', 'error');
        } finally {
            setIsDeleting(false);
            setDeleteModalOpen(false);
            setCategoryToDelete(null);
        }
    };

    const showMessage = (text, type) => {
        setMessage({ text, type });
        setTimeout(() => setMessage({ text: '', type: '' }), 3000);
    };

    const startEdit = (cat) => {
        setEditingCategory(cat);
        setEditName(cat.name);
    };

    return (
        <div>
            <h2 style={{ color: 'var(--color-navy)', marginBottom: 'var(--space-lg)' }}>Manage Categories</h2>

            <div className="card" style={{ marginBottom: 'var(--space-xl)' }}>
                <h3 style={{ fontSize: '16px', marginBottom: '15px' }}>Add New Category</h3>
                <form onSubmit={handleCreate} style={{ display: 'flex', gap: '10px' }}>
                    <input
                        type="text"
                        placeholder="Category Name"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        style={{
                            flex: 1, padding: '10px', borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--color-border)', outline: 'none'
                        }}
                    />
                    <button type="submit" className="btn btn--primary">Add</button>
                </form>
            </div>

            <style>{`
                .cat-table { width: 100%; border-collapse: collapse; background: white; border-radius: var(--radius-sm); overflow: hidden; }
                .cat-table th { background: var(--color-bg-secondary); padding: 15px; text-align: left; color: var(--color-body-light); font-size: 14px; }
                .cat-table td { padding: 15px; border-top: 1px solid var(--color-border); }
                .btn-link { background: none; border: none; cursor: pointer; font-weight: 600; font-size: 14px; }
            `}</style>

            {loading ? (
                <p>Loading categories...</p>
            ) : (
                <div className="card" style={{ padding: 0 }}>
                    <table className="cat-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th style={{ width: '150px' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map(cat => (
                                <tr key={cat._id}>
                                    <td>
                                        {editingCategory?._id === cat._id ? (
                                            <form onSubmit={handleUpdate} style={{ display: 'flex', gap: '10px' }}>
                                                <input
                                                    type="text"
                                                    value={editName}
                                                    onChange={(e) => setEditName(e.target.value)}
                                                    autoFocus
                                                    style={{ padding: '5px', flex: 1 }}
                                                />
                                                <button type="submit" style={{ color: 'var(--color-emerald-light)' }} className="btn-link">Save</button>
                                                <button type="button" onClick={() => setEditingCategory(null)} className="btn-link">Cancel</button>
                                            </form>
                                        ) : (
                                            <strong>{cat.name}</strong>
                                        )}
                                    </td>
                                    <td>
                                        <div style={{ display: 'flex', gap: '15px' }}>
                                            <button onClick={() => startEdit(cat)} style={{ color: 'var(--color-gold)' }} className="btn-link">Edit</button>
                                            <button onClick={() => handleDelete(cat._id)} style={{ color: '#ef4444' }} className="btn-link">Delete</button>
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
                            Are you sure you want to delete the category <strong>"{categoryToDelete?.name}"</strong>? This may affect articles using it.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                            <button
                                onClick={() => setDeleteModalOpen(false)}
                                style={{ padding: '10px 20px', borderRadius: '6px', border: '1px solid #cbd5e1', background: 'white', cursor: 'pointer', fontWeight: '600', color: '#475569' }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                style={{ padding: '10px 20px', borderRadius: '6px', border: 'none', background: '#ef4444', cursor: 'pointer', fontWeight: '600', color: 'white' }}
                                disabled={isDeleting}
                            >
                                {isDeleting ? 'Deleting...' : 'Yes, Delete'}
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
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)', zIndex: 1001
                }}>
                    {message.text}
                </div>
            )}
        </div>
    );
}
