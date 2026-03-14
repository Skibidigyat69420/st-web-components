"use client";

import { useEffect, useState } from 'react';
import { apiFetch } from '../../../lib/auth';

export default function AdminDashboard() {
    const [stats, setStats] = useState({ leads: 0, pendingLeads: 0 });
    const [syncing, setSyncing] = useState(false);
    const [syncStatus, setSyncStatus] = useState(null);

    const handleSync = async () => {
        setSyncing(true);
        setSyncStatus(null);
        try {
            const res = await apiFetch('/admin/save-changes', { method: 'POST' });
            if (res.ok) {
                setSyncStatus({ type: 'success', text: 'VCS: Successfully synced all changes to Git!' });
            }
        } catch (err) {
            setSyncStatus({ type: 'error', text: `VCS Sync Failed: ${err.message}` });
        } finally {
            setSyncing(false);
            setTimeout(() => setSyncStatus(null), 5000);
        }
    };

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const leadsRes = await apiFetch('/leads');
                if (leadsRes.ok) {
                    setStats({
                        leads: leadsRes.data.count,
                        pendingLeads: leadsRes.data.data.filter(l => l.status === 'Pending').length
                    });
                }
            } catch (err) {
                console.error(err);
            }
        };
        fetchStats();
    }, []);

    return (
        <div>
            <h2 style={{ marginBottom: 'var(--space-xl)', color: 'var(--color-navy)', fontSize: '28px' }}>Dashboard Overview</h2>

            <div className="grid grid--3">
                <style>{`
          .stat-card {
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            border-left: 4px solid var(--color-gold);
            transition: transform 0.2s, box-shadow 0.2s;
          }
          .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          }
          .stat-label {
            color: var(--color-body-light);
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .stat-value {
            font-size: 42px;
            font-weight: 800;
            color: var(--color-navy);
            margin-top: 10px;
            font-family: var(--font-sans);
          }
        `}</style>

                <div className="stat-card">
                    <div className="stat-label">Total Leads</div>
                    <div className="stat-value">{stats.leads}</div>
                </div>

                <div className="stat-card">
                    <div className="stat-label">Pending Leads</div>
                    <div className="stat-value" style={{ color: '#f59e0b' }}>{stats.pendingLeads}</div>
                </div>
            </div>

            <div style={{ marginTop: 'var(--space-xl)', display: 'flex', gap: '20px', alignItems: 'center' }}>
                <button
                    onClick={handleSync}
                    disabled={syncing}
                    className="btn btn--primary"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        fontWeight: '600'
                    }}
                >
                    {syncing ? '⌛ Syncing...' : '🔄 Sync to Git (VCS)'}
                </button>
                {syncStatus && (
                    <span style={{
                        fontSize: '14px',
                        color: syncStatus.type === 'success' ? '#10b981' : '#ef4444',
                        fontWeight: '600',
                        padding: '8px 16px',
                        backgroundColor: syncStatus.type === 'success' ? '#ecfdf5' : '#fef2f2',
                        borderRadius: '6px'
                    }}>
                        {syncStatus.text}
                    </span>
                )}
            </div>
        </div>
    );
}
