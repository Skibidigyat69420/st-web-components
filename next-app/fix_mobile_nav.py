import os

def fix_css_and_react():
    css_path = r"c:\Users\ketan\OneDrive - JoshiSiddharth\Sound Thesis\Website design\next-app\app\globals.css"
    react_path = r"c:\Users\ketan\OneDrive - JoshiSiddharth\Sound Thesis\Website design\next-app\app\ClientHome.js"
    
    # Fix CSS
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
    background: rgba(11, 20, 16, 0.98);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
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
    color: var(--color-white);
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
    
    # Replace the existing mobile nav block
    import re
    content = re.sub(r'@media \(max-width: 900px\) \{.*?\}.*?\n\}', new_mobile_nav, content, flags=re.DOTALL)
    
    with open(css_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed globals.css mobile nav")

    # Fix React Component
    with open(react_path, 'r', encoding='utf-8') as f:
        react_content = f.read()
    
    # 1. Add useState import
    if 'useState' not in react_content:
        react_content = react_content.replace("import React from 'react';", "import React, { useState } from 'react';")
    
    # 2. Add menuOpen state
    if 'const [isMenuOpen, setIsMenuOpen] = useState(false);' not in react_content:
        react_content = react_content.replace('export default function ClientHome() {', 'export default function ClientHome() {\n  const [isMenuOpen, setIsMenuOpen] = useState(false);\n\n  const toggleMenu = () => {\n    setIsMenuOpen(!isMenuOpen);\n    document.body.style.overflow = !isMenuOpen ? "hidden" : "";\n  };\n\n  const closeMenu = () => {\n    setIsMenuOpen(false);\n    document.body.style.overflow = "";\n  };')

    # 3. Update Nav toggle and links in JSX
    # First, let's find the nav block
    nav_pattern = r'<nav className="nav".*?</nav>'
    new_jsx_nav = """<nav className={`nav ${isMenuOpen ? 'menu-open' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="nav__inner">
          <a href="/" className="nav__logo" onClick={closeMenu}>Sound Thesis</a>
          <button 
            className={`nav__toggle ${isMenuOpen ? 'active' : ''}`}
            aria-label="Toggle navigation" 
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav__links ${isMenuOpen ? 'active' : ''}`}>            
            <li style={{ transitionDelay: '0.1s' }}><a href="/thesis-notes" className="nav__link" onClick={closeMenu}>Thesis Notes</a></li>
            <li style={{ transitionDelay: '0.2s' }}><a href="/services" className="nav__link" onClick={closeMenu}>Services</a></li>
            <li style={{ transitionDelay: '0.3s' }}><a href="/why-us" className="nav__link" onClick={closeMenu}>Why We Exist</a></li>
            <li style={{ transitionDelay: '0.4s' }}><a href="/calculators" className="nav__link" onClick={closeMenu}>Calculators</a></li>
            <li className="nav__cta" style={{ transitionDelay: '0.5s' }}><a href="/schedule" className="btn btn--primary btn--small" onClick={closeMenu}>Schedule Consultation</a></li>
          </ul>
        </div>
      </nav>"""
    
    react_content = re.sub(nav_pattern, new_jsx_nav, react_content, flags=re.DOTALL)
    
    with open(react_path, 'w', encoding='utf-8') as f:
        f.write(react_content)
    print("Fixed ClientHome.js with React state and event handlers")

if __name__ == "__main__":
    fix_css_and_react()
