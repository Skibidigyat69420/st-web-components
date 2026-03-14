const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const slugify = require('slugify');

const ARTICLES_DIR = path.join(__dirname, '..', 'articles');
const SUPPORTED_EXTENSIONS = ['.txt', '.html', '.htm', '.pdf', '.docx'];

/**
 * Derive a stable hex ID from a filename so links don't break.
 */
function fileNameToId(fileName) {
    return crypto.createHash('md5').update(fileName).digest('hex').slice(0, 24);
}

/**
 * Derive a human-readable title from a filename.
 * "Global-Capital-Flows_Analysis.pdf" → "Global Capital Flows Analysis"
 */
function titleFromFileName(fileName) {
    const baseName = path.basename(fileName, path.extname(fileName));
    return baseName
        .replace(/[-_]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/\b\w/g, c => c.toUpperCase());
}

/**
 * Parse a .txt file. First non-empty line = title, rest = content.
 */
function parseTxt(filePath) {
    const raw = fs.readFileSync(filePath, 'utf8');
    const lines = raw.split(/\r?\n/);
    const firstNonEmpty = lines.findIndex(l => l.trim().length > 0);

    let title = '';
    let contentLines = [];

    if (firstNonEmpty >= 0) {
        title = lines[firstNonEmpty].trim();
        contentLines = lines.slice(firstNonEmpty + 1);
    }

    // Wrap non-empty lines in <p> tags, preserve blank lines as breaks
    const contentHtml = contentLines
        .map(line => {
            const trimmed = line.trim();
            if (trimmed.length === 0) return '';
            return `<p>${trimmed}</p>`;
        })
        .filter(Boolean)
        .join('\n');

    return { title, content: contentHtml || '<p>(Empty article)</p>' };
}

/**
 * Parse an .html file. Extract <title> or <h1> for the title, and the body content.
 */
function parseHtml(filePath) {
    const raw = fs.readFileSync(filePath, 'utf8');

    // Try to extract title from <title> tag
    let title = '';
    const titleMatch = raw.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    if (titleMatch) {
        title = titleMatch[1].trim();
    }

    // Fallback: try <h1>
    if (!title) {
        const h1Match = raw.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
        if (h1Match) {
            title = h1Match[1].replace(/<[^>]*>/g, '').trim();
        }
    }

    // Extract body content, or use the whole file if no <body> tag
    let content = raw;
    const bodyMatch = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
        content = bodyMatch[1].trim();
    }

    return { title, content };
}

/**
 * Parse a .pdf file using pdf-parse.
 */
async function parsePdf(filePath) {
    const pdfParse = require('pdf-parse');
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);

    const text = (data.text || '').trim();
    const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);

    // First line as title, rest as content
    const title = lines.length > 0 ? lines[0].trim() : '';
    const contentLines = lines.slice(1);
    const contentHtml = contentLines
        .map(line => `<p>${line.trim()}</p>`)
        .join('\n');

    return { title, content: contentHtml || '<p>(Empty PDF)</p>' };
}

/**
 * Parse a .docx file using mammoth.
 */
async function parseDocx(filePath) {
    const mammoth = require('mammoth');
    const result = await mammoth.convertToHtml({ path: filePath });
    const html = result.value || '';

    // Try to extract first <h1> or <p> as title
    let title = '';
    const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    if (h1Match) {
        title = h1Match[1].replace(/<[^>]*>/g, '').trim();
    } else {
        // Use first <p> as title
        const pMatch = html.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
        if (pMatch) {
            title = pMatch[1].replace(/<[^>]*>/g, '').trim();
        }
    }

    return { title, content: html || '<p>(Empty document)</p>' };
}

/**
 * Scan the articles directory and return parsed article objects.
 * Subdirectories = categories. Root-level files = "Uncategorized".
 * Each article has: _id, title, slug, content, fileType, fileName,
 *                    category, author, status, publicationDate, lastModified
 */
async function scanArticles() {
    // Ensure directory exists
    if (!fs.existsSync(ARTICLES_DIR)) {
        fs.mkdirSync(ARTICLES_DIR, { recursive: true });
        return [];
    }

    const articles = [];

    // Collect files: { filePath, fileName, categoryName }
    const filesToScan = [];

    // 1. Root-level files → "Uncategorized"
    const rootEntries = fs.readdirSync(ARTICLES_DIR, { withFileTypes: true });
    for (const entry of rootEntries) {
        if (entry.isFile() && !entry.name.startsWith('.')) {
            const ext = path.extname(entry.name).toLowerCase();
            if (SUPPORTED_EXTENSIONS.includes(ext)) {
                filesToScan.push({
                    filePath: path.join(ARTICLES_DIR, entry.name),
                    fileName: entry.name,
                    categoryName: 'Uncategorized'
                });
            }
        }
        // 2. Subdirectory files → directory name = category
        if (entry.isDirectory() && !entry.name.startsWith('.')) {
            const subDir = path.join(ARTICLES_DIR, entry.name);
            const subFiles = fs.readdirSync(subDir);
            for (const subFile of subFiles) {
                const ext = path.extname(subFile).toLowerCase();
                const subFilePath = path.join(subDir, subFile);
                if (fs.statSync(subFilePath).isFile() && SUPPORTED_EXTENSIONS.includes(ext) && !subFile.startsWith('.')) {
                    filesToScan.push({
                        filePath: subFilePath,
                        fileName: subFile,
                        categoryName: entry.name
                    });
                }
            }
        }
    }

    for (const { filePath, fileName, categoryName } of filesToScan) {
        const ext = path.extname(fileName).toLowerCase();
        const stat = fs.statSync(filePath);

        try {
            let parsed;
            if (ext === '.txt') {
                parsed = parseTxt(filePath);
            } else if (ext === '.html' || ext === '.htm') {
                parsed = parseHtml(filePath);
            } else if (ext === '.pdf') {
                parsed = await parsePdf(filePath);
            } else if (ext === '.docx') {
                parsed = await parseDocx(filePath);
            } else {
                continue;
            }

            // Use filename-derived title as fallback
            const title = parsed.title || titleFromFileName(fileName);
            const slug = slugify(title, { lower: true, strict: true });
            // Stable ID from category + filename so files in different folders don't collide
            const idSource = categoryName + '/' + fileName;
            const catSlug = slugify(categoryName, { lower: true, strict: true });

            articles.push({
                _id: fileNameToId(idSource),
                title,
                slug,
                content: parsed.content,
                fileType: ext.replace('.', ''),
                fileName,
                category: { _id: catSlug, name: categoryName },
                author: 'Sound Thesis',
                status: 'Published',
                publicationDate: stat.mtime.toISOString(),
                lastModified: stat.mtime.toISOString(),
                source: 'file'
            });
        } catch (err) {
            console.error(`[ArticleScanner] Failed to parse "${fileName}":`, err.message);
        }
    }

    // Sort by last modified, most recent first
    articles.sort((a, b) => new Date(b.publicationDate) - new Date(a.publicationDate));
    return articles;
}

/**
 * Find a single article by slug or ID.
 */
async function findArticle(idOrSlug) {
    const articles = await scanArticles();
    return articles.find(a => a.slug === idOrSlug || a._id === idOrSlug) || null;
}

module.exports = { scanArticles, findArticle, ARTICLES_DIR };
