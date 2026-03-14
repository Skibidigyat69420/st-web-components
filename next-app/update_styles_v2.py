import os

def update_globals_css():
    file_path = r"c:\Users\ketan\OneDrive - JoshiSiddharth\Sound Thesis\Website design\next-app\app\globals.css"
    
    # Remove deny rule first
    os.system(f'icacls "{file_path}" /inheritance:d /remove:d Everyone')
    os.system(f'icacls "{file_path}" /grant ketan:F')
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Update Fluid Typography
    content = content.replace('--h1-size: 64px;', '--h1-size: clamp(38px, 8vw, 64px);')
    content = content.replace('--h2-size: 40px;', '--h2-size: clamp(28px, 6vw, 40px);')
    content = content.replace('--h3-size: 26px;', '--h3-size: clamp(22px, 4vw, 28px);')
    content = content.replace('--h4-size: 22px;', '--h4-size: clamp(18px, 3vw, 22px);')
    content = content.replace('--body-size: 17px;', '--body-size: clamp(15px, 2vw, 17px);')
    content = content.replace('--small-size: 15px;', '--small-size: 13px;')
    
    # 2. Add Glassmorphism Tokens
    if '--glass-bg' not in content:
        content = content.replace('--radius-pill: 100px;', '--radius-pill: 100px;\n\n  /* Premium Glassmorphism */\n  --glass-bg: rgba(255, 255, 255, 0.7);\n  --glass-border: rgba(255, 255, 255, 0.3);\n  --glass-blur: 16px;\n  --glass-shadow: 0 8px 32px 0 rgba(7, 15, 12, 0.1);')
    
    # 3. Add Glassmorphism Class
    if '.glass-premium' not in content:
        content = content.replace('.section--white {', '.glass-premium {\n  background: var(--glass-bg);\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n  border: 1px solid var(--glass-border);\n  box-shadow: var(--glass-shadow);\n}\n\n.section--white {')

    # 4. Refine Mobile Nav
    # This is a bit more complex, I'll use a safer marker
    old_mobile_nav = """@media (max-width: 900px) {
  .nav__toggle {
    display: flex;
  }

  .nav__links {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    background-color: var(--color-white);
    padding: var(--space-md);
    transform: translateX(100%);
    transition: transform var(--transition-medium);
  }

  .nav__links.active {
    transform: translateX(0);
  }

  .nav__link {
    width: 100%;
    padding: var(--space-sm) 0;
    font-size: 15px;
    border-bottom: 1px solid var(--color-border);
  }

  .nav__cta {
    margin-left: 0;
    margin-top: var(--space-md);
  }
}"""
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
    if old_mobile_nav in content:
        content = content.replace(old_mobile_nav, new_mobile_nav)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Updated globals.css")

if __name__ == "__main__":
    update_globals_css()
