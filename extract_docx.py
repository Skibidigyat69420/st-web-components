import docx
import os

def extract_text(docx_path):
    doc = docx.Document(docx_path)
    fullText = []
    for para in doc.paragraphs:
        fullText.append(para.text)
    return '\n'.join(fullText)

files = [
    "Philosophy _ Sound Thesis - TJ Edits.docx",
    "Sound Thesis _ Democratized Research & Wealth Management - Tj edits.docx"
]

for file in files:
    try:
        text = extract_text(file)
        with open(file + ".txt", "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Extracted text from {file}")
    except Exception as e:
        print(f"Error extracting from {file}: {e}")
