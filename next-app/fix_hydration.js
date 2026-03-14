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

const allJsFiles = walkSync(appDir).filter(f => f.endsWith('.js'));
let totalFixes = 0;

allJsFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const original = content;

    // 1. Replace value= with defaultValue= on input elements
    // Match <input ...value="..." /> patterns
    // We need to be careful to only replace value= inside <input> tags
    content = content.replace(/<input([^>]*?) value=/g, '<input$1 defaultValue=');

    // 2. Fix duplicate style props: two style={{...}} on same element
    // Pattern: style={{...}} ... style={{...}} within same element
    // The second style should win (merge would be ideal but complex)
    // For now, remove first style when there are two on same element line
    // e.g., className="..." style={{...}} id="..." style={{...}}
    // We look for: style={...} followed by more attrs then another style={...} within same JSX element
    content = content.replace(/(style=\{\{[^}]*\}\})\s*([\w\-"{}= ]*?)\s*style=(\{\{[^}]*\}\})/g, '$2 style=$3');

    // 3. Fix homepage teaser inputs too
    // Already covered by rule 1

    if (content !== original) {
        fs.writeFileSync(file, content);
        totalFixes++;
        console.log(`Fixed: ${path.relative(__dirname, file)}`);
    }
});

console.log(`\nTotal files fixed: ${totalFixes}`);
