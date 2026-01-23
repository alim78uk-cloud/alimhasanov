from pypdf import PdfReader

reader = PdfReader("CV_AlimHasanov.pdf")
text = ""
for page in reader.pages:
    text += page.extract_text() + "\n"

with open("cv_extracted.txt", "w") as f:
    f.write(text)
