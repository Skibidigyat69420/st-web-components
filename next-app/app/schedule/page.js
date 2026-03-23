"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SchedulePage() {
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
    company: '',
    message: '',
    date1: '',
    time1: '',
    date2: '',
    time2: '',
    date3: '',
    time3: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  useEffect(() => {
    // Set date picker constraints to next 3 months
    const today = new Date();

    const getFormattedDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    const maxD = new Date(today);
    maxD.setMonth(maxD.getMonth() + 3);

    setMinDate(getFormattedDate(today));
    setMaxDate(getFormattedDate(maxD));

    // Load from localStorage if available
    const savedDraft = localStorage.getItem('soundthesis_lead_draft');
    if (savedDraft) {
      try {
        const parsedData = JSON.parse(savedDraft);
        setFormData(parsedData);
      } catch (err) {
        console.error('Failed to parse saved draft:', err);
      }
    }
  }, []);

  // Save to localStorage when form data changes
  useEffect(() => {
    // Basic debounce / throttle to avoid spam saving on every keystroke
    const timer = setTimeout(() => {
      localStorage.setItem('soundthesis_lead_draft', JSON.stringify(formData));
    }, 1000);
    return () => clearTimeout(timer);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${apiUrl}/contact`, {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: `${formData.countryCode} ${formData.phone}`,
          company: formData.company,
          message: `${formData.message}\n\nDate Prefs:\n1: ${formData.date1} ${formData.time1}\n2: ${formData.date2} ${formData.time2}\n3: ${formData.date3} ${formData.time3}`
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({
          name: '', email: '', phone: '', countryCode: '+91', company: '', message: '',
          date1: '', time1: '', date2: '', time2: '', date3: '', time3: ''
        });
        localStorage.removeItem('soundthesis_lead_draft');
      } else {
        setStatus({ loading: false, success: false, error: data.message || 'Submission failed' });
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: 'Could not connect to the server' });
    }
  };

  return (
    <>
      <style>{`
        .schedule-hero {
          padding: 180px 0 120px;
          background: linear-gradient(145deg, var(--color-navy) 0%, var(--color-navy-dark) 100%);
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .schedule-hero::before {
          content: '';
          position: absolute;
          top: -30%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(217, 119, 6, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .schedule-hero::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(27, 115, 64, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .schedule-hero h1 {
          color: white;
          margin-bottom: var(--space-md);
        }

        .schedule-hero p {
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: 0 auto;
          font-size: 18px;
        }

        .form-section {
          padding: 0 0 var(--space-4xl) 0;
          background-color: var(--color-bg-primary);
          position: relative;
        }

        .glass-form-card {
          max-width: 800px;
          margin: -80px auto 0;
          position: relative;
          z-index: 10;
          background: var(--color-white);
          border-radius: var(--radius-lg);
          padding: var(--space-2xl);
          box-shadow: 0 25px 50px -12px rgba(11, 20, 16, 0.1);
          border: 1px solid rgba(15, 23, 42, 0.05);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-lg);
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-label {
          display: block;
          font-family: var(--font-sans);
          font-weight: 600;
          color: var(--color-navy);
          margin-bottom: var(--space-xs);
          font-size: var(--small-size);
        }

        .form-input {
          width: 100%;
          padding: 16px 20px;
          font-family: var(--font-sans);
          font-size: 16px;
          color: var(--color-headlines);
          background: var(--color-bg-secondary);
          border: 1px solid transparent;
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
          outline: none;
        }

        .form-input:focus {
          background: var(--color-white);
          border-color: var(--color-gold);
          box-shadow: 0 0 0 4px rgba(217, 119, 6, 0.1);
        }

        .dates-container {
          background: var(--color-bg-hero);
          border-radius: var(--radius-md);
          padding: var(--space-lg);
          border: 1px solid var(--color-border);
          margin-top: var(--space-md);
        }

        .dates-container-header {
          margin-bottom: var(--space-md);
          text-align: center;
        }

        .dates-container-header h4 {
          margin-bottom: 4px;
          color: var(--color-navy);
        }

        .dates-container-header p {
          font-size: 14px;
          margin: 0;
        }

        .dates-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-md);
        }

        .date-preference-box {
          display: flex;
          flex-direction: column;
        }

        .date-preference-box span {
          display: inline-block;
          font-size: 12px;
          color: var(--color-body);
          margin-bottom: 8px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .form-input[type="date"], select.form-input {
            padding: 14px 16px;
            cursor: pointer;
            color: var(--color-headlines);
            font-weight: 500;
            appearance: none;
            -webkit-appearance: none;
            position: relative;
            background-color: var(--color-bg-secondary);
            border: 1px solid rgba(15, 23, 42, 0.05);
            transition: all var(--transition-fast);
        }

        .form-input[type="date"]:focus, select.form-input:focus {
            background-color: var(--color-white);
            border-color: var(--color-gold);
            box-shadow: 0 0 0 4px rgba(217, 119, 6, 0.1);
        }

        select.form-input {
            background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
            background-repeat: no-repeat;
            background-position: right 15px top 50%;
            background-size: 12px auto;
        }

        /* Calendar picker icon styling */
        .form-input[type="date"]::-webkit-calendar-picker-indicator {
          cursor: pointer;
          opacity: 0; /* completely hide the default icon but keep it clickable */
          position: absolute;
          right: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: transparent;
        }

        /* Custom drawn calendar icon over the date input */
        .date-picker-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
        }

        .date-picker-wrapper::after {
          content: '';
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23D97706' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3e%3c/rect%3e%3cline x1='16' y1='2' x2='16' y2='6'%3e%3c/line%3e%3cline x1='8' y1='2' x2='8' y2='6'%3e%3c/line%3e%3cline x1='3' y1='10' x2='21' y2='10'%3e%3c/line%3e%3c/svg%3e");
          background-size: contain;
          background-repeat: no-repeat;
          pointer-events: none; /* let clicks pass through to the invisible generic calendar icon */
          transition: all 0.2s ease;
        }

        .date-picker-wrapper:hover::after {
          opacity: 0.8;
          transform: translateY(-50%) scale(1.05);
        }

        /* Calendar picker icon styling */
        .form-input[type="date"]::-webkit-calendar-picker-indicator {
          cursor: pointer;
          opacity: 0; /* completely hide the default icon but keep it clickable */
          position: absolute;
          right: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: transparent;
        }

        /* Custom drawn calendar icon over the date input */
        .date-picker-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
        }

        .date-picker-wrapper::after {
          content: '';
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23D97706' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3e%3c/rect%3e%3cline x1='16' y1='2' x2='16' y2='6'%3e%3c/line%3e%3cline x1='8' y1='2' x2='8' y2='6'%3e%3c/line%3e%3cline x1='3' y1='10' x2='21' y2='10'%3e%3c/line%3e%3c/svg%3e");
          background-size: contain;
          background-repeat: no-repeat;
          pointer-events: none; /* let clicks pass through to the invisible generic calendar icon */
          transition: all 0.2s ease;
        }

        .date-picker-wrapper:hover::after {
          opacity: 0.8;
          transform: translateY(-50%) scale(1.05);
        }

        .submit-btn-wrapper {
          margin-top: var(--space-2xl);
          text-align: center;
        }

        .btn-submit {
          width: 100%;
          max-width: 400px;
          background: linear-gradient(135deg, var(--color-gold) 0%, #B45F06 100%);
          color: white;
          border: none;
          font-size: 16px;
          padding: 18px;
          border-radius: var(--radius-pill);
          font-weight: 600;
          font-family: var(--font-sans);
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all var(--transition-medium);
          box-shadow: 0 10px 25px rgba(217, 119, 6, 0.25);
          position: relative;
          overflow: hidden;
        }

        .btn-submit::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%);
          transform: skewX(-20deg);
          transition: all 0.7s ease;
        }

        .btn-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(217, 119, 6, 0.35);
        }

        .btn-submit:hover::after {
          left: 150%;
        }

        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
            gap: var(--space-md);
          }
          
          .dates-grid {
            grid-template-columns: 1fr;
          }
          
          .glass-form-card {
            padding: var(--space-xl) var(--space-lg);
            margin: -40px 15px 0;
            width: auto;
          }

          .schedule-hero {
            padding: 140px 20px 80px;
          }
        }
      `}</style>

      {/*  Navigation  */}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="nav__inner">
          <a href="/" className="nav__logo">SoundThesis</a>
          <button className="nav__toggle" aria-label="Toggle navigation" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="nav__links">            <li><a href="/thesis-notes" className="nav__link">Thesis Notes</a></li>
            <li><a href="/services" className="nav__link">Services</a></li>
            <li><a href="/about-us" className="nav__link">About us</a></li>
            <li><a href="/calculators" className="nav__link">Calculators</a></li>
            <li className="nav__cta"><a href="/schedule" className="btn btn--primary btn--small">Schedule Consultation</a></li>
          </ul>
        </div>
      </nav>

      <section className="schedule-hero">
        <div className="container">
          <h1 className="fade-in-up" style={{ animationDelay: '0.1s' }}>Schedule a Consultation</h1>
          <p className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            Connect with our core team. Choose a time that works best for you, and we'll be in touch to confirm the details.
          </p>
        </div>
      </section>

      <section className="form-section">
        <div className="container">
          <div className="glass-form-card fade-in-up" style={{ animationDelay: '0.3s' }}>
            <form id="consultationForm" onSubmit={handleSubmit}>

              <div className="form-grid">
                <div className="form-group full-width">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" id="name" className="form-input" placeholder="e.g. John Doe" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" id="email" className="form-input" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <select className="form-input" id="countryCode" value={formData.countryCode} onChange={handleChange} style={{ width: '130px', padding: '16px 12px', backgroundPosition: 'right 15px top 50%', backgroundSize: '12px auto' }} required>
                      <option value="+91">+91 (IN)</option>
                      <option value="+1">+1 (US/CA)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+61">+61 (AU)</option>
                      <option value="+65">+65 (SG)</option>
                      <option value="+971">+971 (AE)</option>
                    </select>
                    <input type="tel" id="phone" className="form-input" placeholder="98765 43210" value={formData.phone} onChange={handleChange} style={{ flex: 1 }} required />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="company" className="form-label">Company Name (Optional)</label>
                  <input type="text" id="company" className="form-input" placeholder="Your organization" value={formData.company} onChange={handleChange} />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message" className="form-label">How can we help you?</label>
                  <textarea id="message" className="form-input" placeholder="Please share details about your requirements..." value={formData.message} onChange={handleChange} style={{ minHeight: '120px', resize: 'vertical' }} required></textarea>
                </div>
              </div>

              <div className="dates-container">
                <div className="dates-container-header">
                  <h4>Select Your Availability</h4>
                  <p className="text-muted">Please select up to 3 preferred dates within the next 3 months.</p>
                </div>

                <div className="dates-grid">
                  <div className="date-preference-box">
                    <span>Preference 1</span>
                    <div className="date-picker-wrapper" style={{ marginBottom: '12px' }}>
                      <input type="date" className="form-input date-picker" id="date1" min={minDate} max={maxDate} value={formData.date1} onChange={handleChange} required />
                    </div>
                    <select className="form-input" id="time1" value={formData.time1} onChange={handleChange} required>
                      <option value="" disabled>Select Time</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="17:00">05:00 PM</option>
                      <option value="18:00">06:00 PM</option>
                      <option value="19:00">07:00 PM</option>
                      <option value="20:00">08:00 PM</option>
                      <option value="21:00">09:00 PM</option>
                    </select>
                  </div>
                  <div className="date-preference-box">
                    <span>Preference 2</span>
                    <div className="date-picker-wrapper" style={{ marginBottom: '12px' }}>
                      <input type="date" className="form-input date-picker" id="date2" min={minDate} max={maxDate} value={formData.date2} onChange={handleChange} />
                    </div>
                    <select className="form-input" id="time2" value={formData.time2} onChange={handleChange}>
                      <option value="" disabled>Select Time</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="17:00">05:00 PM</option>
                      <option value="18:00">06:00 PM</option>
                      <option value="19:00">07:00 PM</option>
                      <option value="20:00">08:00 PM</option>
                      <option value="21:00">09:00 PM</option>
                    </select>
                  </div>
                  <div className="date-preference-box">
                    <span>Preference 3</span>
                    <div className="date-picker-wrapper" style={{ marginBottom: '12px' }}>
                      <input type="date" className="form-input date-picker" id="date3" min={minDate} max={maxDate} value={formData.date3} onChange={handleChange} />
                    </div>
                    <select className="form-input" id="time3" value={formData.time3} onChange={handleChange}>
                      <option value="" disabled>Select Time</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="17:00">05:00 PM</option>
                      <option value="18:00">06:00 PM</option>
                      <option value="19:00">07:00 PM</option>
                      <option value="20:00">08:00 PM</option>
                      <option value="21:00">09:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="submit-btn-wrapper">
                <button type="submit" className="btn-submit" disabled={status.loading}>
                  {status.loading ? 'Sending...' : 'Request Consultation'}
                </button>
              </div>

              {status.success && (
                <div style={{ marginTop: '20px', padding: '15px', background: '#dcfce7', color: '#166534', borderRadius: '8px', textAlign: 'center' }}>
                  Thank you! Your request has been sent successfully. We will be in touch soon.
                </div>
              )}

              {status.error && (
                <div style={{ marginTop: '20px', padding: '15px', background: '#fee2e2', color: '#991b1b', borderRadius: '8px', textAlign: 'center' }}>
                  {status.error}
                </div>
              )}

            </form>
          </div>
        </div>
      </section>

      {/*  Footer  */}
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <div className="nav__logo">SoundThesis</div>
              <p>Democratized financial research and accessible wealth management. No minimum investment barriers.</p>
            </div>
            <div className="footer__links">
              <h4>RESEARCH</h4>
              <a href="/thesis-notes">Thesis Notes</a>
              <a href="/methodology">Methodology</a>
            </div>
            <div className="footer__links">
              <h4>Services</h4>
              <a href="/services">Wealth Management</a>
              <a href="/about-us">About us</a>
            </div>
            <div className="footer__links">
              <h4>Connect</h4>
              <a href="mailto:research@soundthesis.com">research@soundthesis.com</a>
              <a href="/schedule">Schedule Consultation</a>
            </div>
          </div>
          <div className="footer__bottom">
            <p>&copy; 2024 SoundThesis. All rights reserved.</p>
            <p>Democratized Research. Transparent Wealth Management.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
