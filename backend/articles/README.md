# Article Drop Directory

Drop your article files here. They will automatically appear on the website.

## Supported Formats
- `.txt` — Plain text (first line = title, rest = content)
- `.html` — HTML files (extracts `<title>` or `<h1>` for the title)
- `.pdf` — PDF documents (text is extracted automatically)
- `.docx` — Word documents (converted to HTML automatically)

## Categories via Subdirectories

Organize articles into categories by creating subdirectories:

```
articles/
├── Macroeconomic/
│   └── Global-Capital-Flows.pdf
├── Behavioral Finance/
│   └── temperament-tax.html
├── Asset Allocation/
│   └── compound-interest.html
└── my-uncategorized-article.txt   ← Root files = "Uncategorized"
```

The **folder name** becomes the category and appears as a filter button on the site.

## Naming Convention
If no title is found inside the file, the **filename** becomes the title.
Example: `Global-Capital-Flows-Analysis.pdf` → Title: "Global Capital Flows Analysis"

## How It Works
- **Add a file** → it appears on the Thesis Notes page instantly
- **Edit a file** → changes reflect on next page load
- **Remove a file** → article disappears from the site
- **Create a folder** → new category filter appears

No database, no admin panel needed. Always in sync.
