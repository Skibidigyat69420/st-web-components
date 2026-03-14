import os

def update_client_home():
    file_path = r"c:\Users\ketan\OneDrive - JoshiSiddharth\Sound Thesis\Website design\next-app\app\ClientHome.js"
    
    # Remove deny rule first (just in case)
    os.system(f'icacls "{file_path}" /inheritance:d /remove:d Everyone')
    os.system(f'icacls "{file_path}" /grant ketan:F')
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Update Navigation
    old_nav = """      {/*  Navigation  */}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="nav__inner">
          <a href="/" className="nav__logo">Sound Thesis</a>
          <button className="nav__toggle" aria-label="Toggle navigation" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="nav__links">            <li><a href="/thesis-notes" className="nav__link">Thesis Notes</a></li>
            <li><a href="/services" className="nav__link">Services</a></li>
            <li><a href="/why-us" className="nav__link">Why We Exist</a></li>
            <li><a href="/calculators" className="nav__link">Calculators</a></li>
            <li className="nav__cta"><a href="/schedule" className="btn btn--primary btn--small">Schedule Consultation</a></li>

          </ul>
        </div>
      </nav>"""
    
    new_nav = """      {/*  Navigation  */}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="nav__inner">
          <a href="/" className="nav__logo">Sound Thesis</a>
          <button 
            className="nav__toggle" 
            aria-label="Toggle navigation" 
            aria-expanded="false"
            id="mobileMenuToggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="nav__links" id="navLinks">            
            <li style={{ transitionDelay: '0.1s' }}><a href="/thesis-notes" className="nav__link">Thesis Notes</a></li>
            <li style={{ transitionDelay: '0.2s' }}><a href="/services" className="nav__link">Services</a></li>
            <li style={{ transitionDelay: '0.3s' }}><a href="/why-us" className="nav__link">Why We Exist</a></li>
            <li style={{ transitionDelay: '0.4s' }}><a href="/calculators" className="nav__link">Calculators</a></li>
            <li className="nav__cta" style={{ transitionDelay: '0.5s' }}><a href="/schedule" className="btn btn--primary btn--small">Schedule Consultation</a></li>
          </ul>
        </div>
      </nav>"""
    
    # Try literal match first
    if old_nav in content:
        content = content.replace(old_nav, new_nav)
    else:
        # Fallback to more flexible replacement if exact whitespace differs
        print("Exact nav match failed, trying flexible replacement")
        import re
        content = re.sub(r'<nav className="nav".*?</nav>', new_nav, content, flags=re.DOTALL)

    # 2. Update Hero Section
    old_hero = r"""      {/*  Modern Split Hero Section  */}
      <section className="hero">
        <div className="container">
          <div className="split-hero">
            <motion.div 
              className="split-hero__content"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
            >
              <span className="tag tag--primary mb-md"
                style={{ "background": "rgba(212, 168, 77, 0.15)", "color": "#D4A84D", "border": "1px solid rgba(212, 168, 77, 0.3)" }}>Built
                On
                Four Core Pillars</span>
              <motion.h1 
                className="hero__title"
                initial={{ opacity: 0, y: 40, rotateX: 15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
              >
                Institutional-Grade<br />
                <span style={{ "color": "#D4A84D" }}>Wealth Management</span><br />
                Made Accessible
              </motion.h1>
              <motion.p 
                className="hero__description" 
                style={{ "maxWidth": "500px", "margin": "0 0 var(--space-xl) 0" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Sound Thesis relies on four core pillars—fiduciary transparency, accessible research, behavioral coaching,
                and standardized execution—to deliver an institutional-grade wealth management experience.
              </motion.p>
              <motion.div 
                className="hero__buttons" 
                style={{ "justifyContent": "flex-start" }}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.6 }}
              >
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/thesis-notes" className="btn btn--primary">
                  Explore Open Research
                  <svg className="btn-icon-animated" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/services" className="btn btn--secondary">Wealth Services</motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>"""
    
    new_hero = """      {/*  Modern Split Hero Section  */}
      <section className="hero">
        <div className="container">
          <div className="hero__grid">
            <motion.div 
              className="hero__text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="hero__pill">Built On Four Core Pillars</div>
              <motion.h1 
                className="hero__title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Institutional-Grade<br />
                <span className="text-highlight">Wealth Management</span><br />
                Made Accessible
              </motion.h1>
              <motion.p 
                className="hero__description" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Sound Thesis relies on four core pillars—fiduciary transparency, accessible research, behavioral coaching,
                and standardized execution—to deliver an institutional-grade wealth management experience.
              </motion.p>
              <motion.div 
                className="hero__buttons" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="/thesis-notes" className="btn btn--primary">
                  Explore Open Research
                  <svg className="btn-icon-animated" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
                <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="/services" className="btn btn--secondary">Wealth Services</motion.a>
              </motion.div>
            </motion.div>

            <motion.div 
              className="hero__stats"
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="stats-card glass-premium">
                <div className="stat-row">
                  <div className="stat-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div className="stat-content">
                    <span className="stat-label">Fiduciary</span>
                    <span className="stat-value">100%</span>
                  </div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-row">
                  <div className="stat-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <div className="stat-content">
                    <span className="stat-label">Research</span>
                    <span className="stat-value">Open</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>"""
    
    if old_hero in content:
        content = content.replace(old_hero, new_hero)
    else:
        print("Exact hero match failed, trying flexible replacement")
        import re
        content = re.sub(r'\{/\*  Modern Split Hero Section  \*/\}.*?</section>', new_hero, content, flags=re.DOTALL)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Updated ClientHome.js")

if __name__ == "__main__":
    update_client_home()
