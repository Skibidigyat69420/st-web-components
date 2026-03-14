const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..');
const appDir = path.join(__dirname, 'app');

const filesToMigrate = [
    { src: 'index.html', dest: 'page.js' },
    { src: 'books.html', dest: 'books/page.js' },
    { src: 'calculators.html', dest: 'calculators/page.js' },
    { src: 'memos.html', dest: 'memos/page.js' },
    { src: 'philosophy.html', dest: 'philosophy/page.js' },
    { src: 'services.html', dest: 'services/page.js' },
    { src: 'thesis-notes.html', dest: 'thesis-notes/page.js' },
    { src: 'why-us.html', dest: 'why-us/page.js' }
];

// Helper to convert HTML to JSX basics
function convertHtmlToJsx(html) {
    let jsx = html;

    // Replace class= with className=
    jsx = jsx.replace(/class=/g, 'className=');

    // Replace tabindex= with tabIndex=
    jsx = jsx.replace(/tabindex=/g, 'tabIndex=');

    // Replace for= with htmlFor=
    jsx = jsx.replace(/for=/g, 'htmlFor=');

    // Fix inline styles - simple approximation by removing them or replacing typical string styles
    // Or just replacing `style="X"` with `style={{}}`. Given complexity, since styles in the raw files might just be basic, 
    // let's try a regex for simple cases
    jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
        const styleObj = {};
        p1.split(';').forEach(rule => {
            if (!rule.trim()) return;
            const parts = rule.split(':');
            if (parts.length === 2) {
                let key = parts[0].trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
                styleObj[key] = parts[1].trim();
            }
        });
        return `style={${JSON.stringify(styleObj)}}`;
    });

    // Close unclosed tags
    const voidElements = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
    for (const tag of voidElements) {
        const regex = new RegExp(`<${tag}\\b([^>]*?)(?<!/)>`, 'gi');
        jsx = jsx.replace(regex, `<${tag}$1 />`);
    }

    // Fix HTML comments to JSX comments
    jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

    return jsx;
}

filesToMigrate.forEach(({ src, dest }) => {
    const srcPath = path.join(srcDir, src);
    if (!fs.existsSync(srcPath)) {
        console.log(`Skipping ${src} - not found`);
        return;
    }

    let htmlContent = fs.readFileSync(srcPath, 'utf8');

    // Extract just the body content since layout.js handles the HTML envelop
    const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let mainContent = bodyMatch ? bodyMatch[1] : htmlContent;

    // If there's a script tag at the end (like widgets.js), keep it or remove it and we'll add it globally
    mainContent = mainContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

    const jsxContent = convertHtmlToJsx(mainContent);

    const outPath = path.join(appDir, dest);
    const outDir = path.dirname(outPath);
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }

    const componentName = dest === 'page.js' ? 'Home' : dest.split('/')[0].replace(/-/g, '').replace(/^(.)/, c => c.toUpperCase());

    const fileOutput = `
import React from 'react';

export default function ${componentName}() {
  return (
    <>
      ${jsxContent}
    </>
  );
}
`;

    // Attempt to parse out head <title> to be next.js metadata
    const titleMatch = htmlContent.match(/<title>([^<]+)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : '';

    // We add simple exported metadata
    let finalOutput = fileOutput;
    if (title) {
        finalOutput = `export const metadata = { title: "${title.replace(/"/g, '\\"')}" };\n` + finalOutput;
    }

    fs.writeFileSync(outPath, finalOutput);
    console.log(`Migrated ${src} to ${dest}`);
});
