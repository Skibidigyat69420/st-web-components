const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');

function walkSync(dir, filelist = []) {
    fs.readdirSync(dir).forEach(file => {
        const fp = path.join(dir, file);
        filelist = fs.statSync(fp).isDirectory()
            ? walkSync(fp, filelist)
            : filelist.concat(fp);
    });
    return filelist;
}

const allJsFiles = walkSync(appDir).filter(f => f.endsWith('.js') || f.endsWith('.jsx'));

let totalFixes = 0;

allJsFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const original = content;

    // 1. Fix .html links -> clean Next.js routes
    content = content.replace(/href="([^"]+?)\.html(#[^"]*)?"/g, (match, p1, p2) => {
        let route = p1;
        if (route === 'index') route = '/';
        else if (!route.startsWith('/')) route = '/' + route;
        return `href="${route}${p2 || ''}"`;
    });

    // 2. Fix SVG attributes (camelCase for JSX)
    content = content.replace(/stroke-width=/g, 'strokeWidth=');
    content = content.replace(/stroke-linecap=/g, 'strokeLinecap=');
    content = content.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
    content = content.replace(/fill-rule=/g, 'fillRule=');
    content = content.replace(/clip-rule=/g, 'clipRule=');
    content = content.replace(/clip-path=/g, 'clipPath=');
    content = content.replace(/fill-opacity=/g, 'fillOpacity=');
    content = content.replace(/stroke-opacity=/g, 'strokeOpacity=');
    content = content.replace(/stroke-dasharray=/g, 'strokeDasharray=');
    content = content.replace(/stroke-dashoffset=/g, 'strokeDashoffset=');
    content = content.replace(/font-size=/g, 'fontSize=');
    content = content.replace(/font-weight=/g, 'fontWeight=');
    content = content.replace(/text-anchor=/g, 'textAnchor=');
    content = content.replace(/dominant-baseline=/g, 'dominantBaseline=');
    content = content.replace(/pointer-events=/g, 'pointerEvents=');
    content = content.replace(/stop-color=/g, 'stopColor=');
    content = content.replace(/stop-opacity=/g, 'stopOpacity=');
    content = content.replace(/color-interpolation=/g, 'colorInterpolation=');
    content = content.replace(/xlink:href=/g, 'xlinkHref=');
    content = content.replace(/xml:space=/g, 'xmlSpace=');
    content = content.replace(/xmlns:xlink=/g, 'xmlnsXlink=');

    // 3. Fix remaining HTML attributes not caught by original migration
    // tabindex -> tabIndex (case sensitive - only replace lowercase)
    content = content.replace(/ tabindex=/g, ' tabIndex=');
    // for= -> htmlFor= (only in label context, be careful)
    content = content.replace(/ for="/g, ' htmlFor="');
    // autocomplete -> autoComplete
    content = content.replace(/ autocomplete=/g, ' autoComplete=');
    // maxlength -> maxLength
    content = content.replace(/ maxlength=/g, ' maxLength=');
    // readonly -> readOnly
    content = content.replace(/ readonly/g, ' readOnly');
    // cellpadding / cellspacing
    content = content.replace(/ cellpadding=/g, ' cellPadding=');
    content = content.replace(/ cellspacing=/g, ' cellSpacing=');
    // colspan -> colSpan
    content = content.replace(/ colspan=/g, ' colSpan=');
    // rowspan -> rowSpan
    content = content.replace(/ rowspan=/g, ' rowSpan=');

    // 4. Self-close void elements that aren't already self-closed
    // <br> -> <br />
    content = content.replace(/<br\s*(?!\/)>/g, '<br />');
    // <hr> -> <hr />
    content = content.replace(/<hr\s*(?!\/)>/g, '<hr />');
    // <img ... > -> <img ... /> (if not already self-closed)
    content = content.replace(/<img([^>]*?)(?<!\/)>/g, '<img$1 />');
    // <input ... > -> <input ... />
    content = content.replace(/<input([^>]*?)(?<!\/)>/g, '<input$1 />');
    // <meta ... > -> <meta ... />
    content = content.replace(/<meta([^>]*?)(?<!\/)>/g, '<meta$1 />');
    // <link ... > -> <link ... />
    content = content.replace(/<link([^>]*?)(?<!\/)>/g, '<link$1 />');

    if (content !== original) {
        fs.writeFileSync(file, content);
        totalFixes++;
        console.log(`Fixed: ${path.relative(__dirname, file)}`);
    }
});

console.log(`\nTotal files fixed: ${totalFixes}`);
