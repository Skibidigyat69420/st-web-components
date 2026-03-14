"use client";

import { useEffect, useState } from 'react';
import { apiFetch, getAuthToken } from '../../../lib/auth';

export default function AdminLeadsPage() {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchLeads = async () => {
        try {
            const res = await apiFetch('/leads');
            if (res.ok && res.data && res.data.success) {
                setLeads(res.data.data);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    const handleUpdateStatus = async (id, status) => {
        try {
            const res = await apiFetch(`/leads/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ status })
            });
            if (res.ok) fetchLeads();
        } catch (err) {
            alert('Update failed');
        }
    };

    const handleExport = async () => {
        try {
            const token = getAuthToken();
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
            const res = await fetch(`${apiUrl}/leads/export`, {
                headers: {
                    ...(token ? { 'Authorization': `Bearer ${token}` } : {})
                }
            });
            
            if (!res.ok) throw new Error('Export failed');
            
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `leads-export-${new Date().toISOString().split('T')[0]}.csv`;
            document.body.appendChild(a);
            a.click();
            a.remove();
        } catch (err) {
            alert('Export failed');
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
                <h2 style={{ color: 'var(--color-navy)' }}>Consultation Leads</h2>
                <button
                    onClick={handleExport}
                    className="btn btn--primary btn--small"
                >
                    Export CSV
                </button>
            </div>

            <style>{`
        .leads-table {
          width: 100%;
          background: var(--color-white);
          border-collapse: collapse;
          border-radius: var(--radius-sm);
          overflow: hidden;
        }
        .leads-table th {
          background: var(--color-bg-secondary);
          padding: 15px;
          text-align: left;
          font-family: var(--font-sans);
          font-size: var(--nav-size);
          color: var(--color-body-light);
          font-weight: var(--weight-medium);
        }
        .leads-table td {
          padding: 15px;
          border-top: 1px solid var(--color-border);
          font-size: var(--small-size);
          color: var(--color-body);
        }
        .status-badge {
          padding: 4px 12px;
          border-radius: var(--radius-pill);
          font-size: 12px;
          font-weight: var(--weight-semibold);
        }
        .status-Pending { background: rgba(217, 119, 6, 0.15); color: var(--color-gold); }
        .status-Contacted { background: rgba(27, 115, 64, 0.1); color: var(--color-emerald-light); }
        .status-Closed { background: var(--color-bg-secondary); color: var(--color-body-light); }
        
        .message-cell {
          max-width: 300px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      `}</style>

            {loading ? (
                <p>Loading leads...</p>
            ) : (
                <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                    <table className="leads-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Contact Info</th>
                                <th>Status</th>
                                <th>Message</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leads.map(lead => (
                                <tr key={lead._id}>
                                    <td>
                                        <strong style={{ color: 'var(--color-navy)' }}>{lead.name}</strong><br />
                                        <small style={{ color: 'var(--color-body-light)' }}>{lead.company}</small>
                                    </td>
                                    <td>
                                        {lead.email}<br />
                                        <small style={{ color: 'var(--color-body-light)' }}>{lead.phone}</small>
                                    </td>
                                    <td>
                                        <span className={`status-badge status-${lead.status}`}>{lead.status}</span>
                                    </td>
                                    <td className="message-cell" title={lead.message}>{lead.message}</td>
                                    <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
                                    <td>
                                        <select
                                            value={lead.status}
                                            onChange={(e) => handleUpdateStatus(lead._id, e.target.value)}
                                            style={{ padding: '6px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none', fontFamily: 'var(--font-sans)', fontSize: '13px' }}
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Contacted">Contacted</option>
                                            <option value="Closed">Closed</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
