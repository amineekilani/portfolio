from pypdf import PdfReader,PdfWriter
fichier_pdf="assets/pdf/resume.pdf"
reader=PdfReader(fichier_pdf)
writer=PdfWriter()
for page in reader.pages:
    writer.add_page(page)
writer.add_metadata({"/Title":"Amine Kilani | Resume"})
with open("assets/pdf/resume.pdf","wb") as f:
    writer.write(f)
print("PDF title successfully changed !")