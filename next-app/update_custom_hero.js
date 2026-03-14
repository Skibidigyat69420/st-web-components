const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');

const newHeroJSX = `
  {/* Modern Split Hero Section */}
  <section className="hero">
    <div className="container" style={{ textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
      <div className="hero-left" style={{ flex: '1 1 500px', maxWidth: '600px', position: 'relative', zIndex: 2 }}>
        <span className="tag" style={{ background: 'rgba(27, 115, 64, 0.15)', color: '#4ade80', border: '1px solid rgba(27, 115, 64, 0.5)', marginBottom: '24px', letterSpacing: '1px' }}>INDIA'S PREMIER RESEARCH HOUSE</span>
        <h1 className="hero__title" style={{ fontSize: '64px', lineHeight: '1.1', marginBottom: '24px' }}>
          Democratizing<br />
          <span style={{ color: '#D4A84D' }}>Institutional-Grade</span><br />
          Research
        </h1>
        <p className="hero__description" style={{ fontSize: '18px', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '40px' }}>
          SoundThesis makes premium financial research—once exclusive to ultra-high-net-worth investors—accessible to every serious investor in India.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="/thesis-notes" className="btn" style={{ background: '#fff', color: '#000', padding: '14px 32px', borderRadius: '100px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            Explore Open Research
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a href="/services" className="btn" style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', padding: '14px 32px', borderRadius: '100px', fontWeight: '600' }}>Wealth Services</a>
        </div>
      </div>
      
      <div className="hero-right" style={{ flex: '1 1 400px', position: 'relative', minHeight: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ position: 'absolute', width: '300px', height: '300px', border: '1px dashed rgba(212, 168, 77, 0.3)', borderRadius: '50%' }}></div>
        
        <div style={{ textAlign: 'center', zIndex: 2 }}>
          <div style={{ fontSize: '48px', fontWeight: '700', color: '#fff', lineHeight: '1' }}>1K</div>
          <div style={{ fontSize: '14px', color: '#D4A84D', letterSpacing: '2px', fontWeight: '600', marginTop: '8px' }}>FAMILIES REACHED</div>
        </div>

        <div style={{ position: 'absolute', top: '20px', right: '0', background: '#0B1410', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212, 168, 77, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4A84D' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
          </div>
          <div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>AUM Advised</div>
            <div style={{ fontSize: '18px', fontWeight: '600', color: '#fff' }}>₹500Cr+</div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '20px', left: '0', background: '#0B1410', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </div>
          <div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Research Papers</div>
            <div style={{ fontSize: '18px', fontWeight: '600', color: '#fff' }}>120+</div>
          </div>
        </div>
      </div>
    </div>
  </section>`;


function replaceHeroAndLinks() {
    const pageJsPath = path.join(appDir, 'page.js');
    let pageContent = fs.readFileSync(pageJsPath, 'utf8');

    // Replace hero section
    const heroRegex = /\{\/\*\s*Modern Split Hero Section\s*\*\/\}\s*<section className="hero">[\s\S]*?<\/section>/;
    if (heroRegex.test(pageContent)) {
        pageContent = pageContent.replace(heroRegex, newHeroJSX);
    } else {
        console.error("Could not find hero regex in page.js");
    }

    fs.writeFileSync(pageJsPath, pageContent);

    // Replace all .html extension links across all pages
    const walkSync = (dir, filelist = []) => {
        fs.readdirSync(dir).forEach(file => {
            filelist = fs.statSync(path.join(dir, file)).isDirectory()
                ? walkSync(path.join(dir, file), filelist)
                : filelist.concat(path.join(dir, file));
        });
        return filelist;
    };

    const allJsFiles = walkSync(appDir).filter(f => f.endsWith('.js') || f.endsWith('.jsx'));

    allJsFiles.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');

        // Remove .html from hrefs
        // href="philosophy.html" -> href="/philosophy"
        // href="index.html" -> href="/"
        content = content.replace(/href="([^"]+?)\.html(#.*?)*"/g, (match, p1, p2) => {
            let pureRoute = p1;
            if (pureRoute === 'index') {
                pureRoute = '/';
            } else if (!pureRoute.startsWith('/')) {
                pureRoute = '/' + pureRoute;
            }
            return `href="${pureRoute}${p2 || ''}"`;
        });

        fs.writeFileSync(file, content);
        console.log("Updated links in", file);
    });
}

replaceHeroAndLinks();
