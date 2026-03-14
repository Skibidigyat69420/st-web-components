"use client";

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { logout, getAuthToken, apiFetch } from '../../lib/auth';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const [authenticated, setAuthenticated] = useState(true); // FORCE AUTHENTICATED
  const [loginError, setLoginError] = useState(null);
  const [loginLoading, setLoginLoading] = useState(false);
  const [syncLoading, setSyncLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    // Authentication check bypassed
    setAuthenticated(true);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError(null);

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      setLoginError('Please enter both email and password');
      setLoginLoading(false);
      return;
    }

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      const res = await fetch(`${apiUrl}/auth/login`, {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('st_token', data.token);
        localStorage.setItem('st_user', JSON.stringify(data.user));
        setAuthenticated(true);
      } else {
        setLoginError(data.error || 'Invalid credentials');
      }
    } catch {
      setLoginError('Cannot connect to server');
    } finally {
      setLoginLoading(false);
    }
  };

  return (
    <div className="admin-layout">
      <style>{`
        /* ── Login Firewall ── */
        .login-firewall {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(11, 20, 16, 0.92); /* Navy with opacity */
          backdrop-filter: blur(12px);
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        .login-modal {
          background: var(--color-white);
          width: 100%;
          max-width: 400px;
          border-radius: var(--radius-lg);
          padding: var(--card-padding);
          box-shadow: var(--shadow-lg);
          animation: slideUp 0.35s ease;
        }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

        .login-modal h2 {
          text-align: center;
          color: var(--color-headlines);
          margin: 0 0 6px;
          font-size: var(--h3-size);
        }
        .login-modal .subtitle {
          text-align: center;
          color: var(--color-body-light);
          font-size: var(--small-size);
          margin-bottom: var(--space-lg);
        }
        .login-modal .fg { margin-bottom: var(--space-md); }
        .login-modal label {
          display: block;
          font-size: 13px;
          font-weight: var(--weight-semibold);
          color: var(--color-body);
          margin-bottom: 6px;
        }
        .login-modal input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          font-size: var(--body-size);
          transition: border-color var(--transition-fast);
          outline: none;
          box-sizing: border-box;
          font-family: var(--font-sans);
        }
        .login-modal input:focus {
          border-color: var(--color-gold);
          box-shadow: 0 0 0 3px rgba(217, 119, 6, 0.12);
        }
        .login-err {
          background: #fef2f2;
          color: #dc2626;
          padding: 10px;
          border-radius: var(--radius-sm);
          font-size: 13px;
          text-align: center;
          margin-bottom: var(--space-sm);
        }
        .login-lock {
          text-align: center;
          margin-bottom: var(--space-sm);
          font-size: 32px;
        }

        /* ── Admin Shell ── */
        .admin-layout {
          display: flex;
          min-height: 100vh;
          background: var(--color-bg-secondary);
        }
        .admin-sidebar {
          width: 260px;
          background: var(--color-navy);
          color: var(--color-white);
          padding: var(--space-lg) var(--space-sm);
          display: flex;
          flex-direction: column;
        }
        .sidebar-brand {
          font-family: var(--font-serif);
          font-size: 20px;
          font-weight: var(--weight-medium);
          color: var(--color-gold);
          margin-bottom: var(--space-xl);
          padding-left: 8px;
          letter-spacing: 0.5px;
        }
        .sidebar-nav { flex-grow: 1; }
        .nav-item {
          display: block;
          padding: 12px 14px;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          border-radius: var(--radius-sm);
          margin-bottom: 4px;
          font-weight: var(--weight-medium);
          font-size: var(--nav-size);
          transition: all var(--transition-fast);
        }
        .nav-item:hover, .nav-item.active {
          background: rgba(255, 255, 255, 0.1);
          color: var(--color-white);
        }
        .nav-item.active { color: var(--color-gold); }
        .admin-main {
          flex-grow: 1;
          padding: var(--card-padding);
          overflow-y: auto;
        }
        .logout-btn {
          margin-top: auto;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.15);
          color: #ef4444;
          padding: 12px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-weight: var(--weight-semibold);
          font-size: 14px;
          transition: background var(--transition-fast);
          font-family: var(--font-sans);
        }
        .logout-btn:hover { background: rgba(239,68,68,0.1); }
        .sync-btn {
          margin-top: var(--space-md);
          background: rgba(217, 119, 6, 0.1);
          border: 1px solid var(--color-gold);
          color: var(--color-gold);
          padding: 12px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-weight: var(--weight-semibold);
          font-size: 14px;
          transition: all var(--transition-fast);
          font-family: var(--font-sans);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .sync-btn:hover { background: rgba(217, 119, 6, 0.2); }
        .sync-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        .save-btn {
          margin-top: 8px;
          background: var(--color-gold);
          border: 1px solid var(--color-gold);
          color: var(--color-navy);
          padding: 12px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-weight: var(--weight-bold);
          font-size: 14px;
          transition: all var(--transition-fast);
          font-family: var(--font-sans);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .save-btn:hover { background: #eab308; }
        .save-btn:disabled { opacity: 0.5; cursor: not-allowed; }
      `}</style>

      {/* ── Login Firewall Overlay ── */}
      {!authenticated && (
        <div className="login-firewall">
          <div className="login-modal">
            <div className="login-lock"></div>
            <h2>Admin Access</h2>
            <p className="subtitle">Authenticate to manage Sound Thesis</p>

            {loginError && <div className="login-err">{loginError}</div>}

            <form onSubmit={handleLogin}>
              <div className="fg">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="admin@soundthesis.com"
                  ref={emailRef}
                  required
                  autoFocus
                />
              </div>
              <div className="fg">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  ref={passwordRef}
                  required
                />
              </div>
              <button type="submit" className="btn btn--primary" style={{ width: '100%', marginTop: '8px' }} disabled={loginLoading}>
                {loginLoading ? 'Authenticating...' : 'Secure Login'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ── Admin Dashboard Shell (visible only when authenticated) ── */}
      {authenticated && (
        <>
          <aside className="admin-sidebar">
            <div className="sidebar-brand">ST Admin</div>
            <nav className="sidebar-nav">
              <Link href="/admin/dashboard" className={`nav-item ${pathname === '/admin/dashboard' ? 'active' : ''}`}>Dashboard</Link>
              <Link href="/admin/leads" className={`nav-item ${pathname?.includes('/admin/leads') ? 'active' : ''}`}>Leads</Link>
            </nav>
            <button
              className="sync-btn"
              onClick={async () => {
                setSyncLoading(true);
                try {
                  const res = await apiFetch('/admin/sync-git', { method: 'POST' });
                  if (res.ok) alert('Successfully synced to Git!');
                  else alert('Sync failed');
                } catch {
                  alert('Sync failed');
                } finally {
                  setSyncLoading(false);
                }
              }}
              disabled={syncLoading}
            >
              {syncLoading ? 'Pushing...' : 'Push to Git'}
            </button>
            <button
              className="save-btn"
              onClick={async () => {
                setSaveLoading(true);
                try {
                  const res = await apiFetch('/admin/save-changes', { method: 'POST' });
                  if (res.ok) alert('All changes permanently saved and backed up!');
                  else alert('Save failed');
                } catch {
                  alert('Save failed');
                } finally {
                  setSaveLoading(false);
                }
              }}
              disabled={saveLoading}
            >
              {saveLoading ? 'Saving...' : 'Save All Changes'}
            </button>
            <button className="logout-btn" onClick={() => { logout(); setAuthenticated(false); }}>Sign Out</button>
          </aside>
          <main className="admin-main">
            {children}
          </main>
        </>
      )}
    </div>
  );
}
