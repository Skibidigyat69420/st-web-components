import os
import re

def fix_styles():
    css_path = r"c:\Users\ketan\OneDrive - JoshiSiddharth\Sound Thesis\Website design\next-app\app\globals.css"
    
    # Force permissions
    os.system(f'icacls "{css_path}" /grant Everyone:F')
    os.system(f'attrib -r "{css_path}"')
    
    with open(css_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_mobile_nav = """@media (max-width: 900px) {
  .nav__toggle {
    display: flex;
  }

  .nav__links {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-xl);
    background: rgba(11, 20, 16, 0.98) !important;
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    padding: var(--space-2xl);
    transform: translateY(-100%);
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 1001;
    visibility: hidden;
  }

  .nav__links.active {
    transform: translateY(0);
    visibility: visible;
  }

  .nav__link {
    width: auto;
    padding: var(--space-sm) 0;
    font-size: 28px;
    font-family: var(--font-serif);
    color: var(--color-white) !important;
    border-bottom: none;
    text-align: center;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .nav__links.active .nav__link {
    opacity: 1;
    transform: translateY(0);
  }

  .nav__cta {
    margin-left: 0;
    margin-top: var(--space-xl);
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
  }

  .nav__links.active .nav__cta {
    opacity: 1;
    transform: translateY(0);
  }
}"""
    
    # Replace the media query block
    content = re.sub(r'@media \(max-width: 900px\) \{.*?\}\n\}', new_mobile_nav, content, flags=re.DOTALL)
    
    # Also ensure fluid typography is present
    content = content.replace('--h1-size: 64px;', '--h1-size: clamp(38px, 8vw, 64px);')
    content = content.replace('--h2-size: 40px;', '--h2-size: clamp(28px, 6vw, 40px);')
    content = content.replace('--h3-size: 26px;', '--h3-size: clamp(22px, 4vw, 28px);')
    content = content.replace('--h4-size: 22px;', '--h4-size: clamp(18px, 3vw, 22px);')
    content = content.replace('--body-size: 17px;', '--body-size: clamp(15px, 2vw, 17px);')
    content = content.replace('--small-size: 15px;', '--small-size: 13px;')

    with open(css_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed globals.css")

def fix_hero():
    react_path = r"c:\Users\ketan\OneDrive - JoshiSiddharth\Sound Thesis\Website design\next-app\app\ClientHome.js"
    
    with open(react_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
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
    
    content = re.sub(r'\{/\*  Modern Split Hero Section  \*/\}.*?</section>', new_hero, content, flags=re.DOTALL)
    
    with open(react_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed ClientHome.js Hero")

if __name__ == "__main__":
    fix_styles()
    fix_hero()
