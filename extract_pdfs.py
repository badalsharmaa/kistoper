import fitz # PyMuPDF
import os

def extract_assets(pdf_path, output_dir):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    doc = fitz.open(pdf_path)
    text = ""
    
    print(f"Processing: {pdf_path}")
    for page_index in range(len(doc)):
        page = doc[page_index]
        text += page.get_text()
        
        image_list = page.get_images(full=True)
        for img_index, img in enumerate(image_list):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            image_filename = f"{os.path.basename(pdf_path)}_p{page_index}_img{img_index}.{image_ext}"
            with open(os.path.join(output_dir, image_filename), "wb") as f:
                f.write(image_bytes)
    
    with open(os.path.join(output_dir, f"{os.path.basename(pdf_path)}_text.txt"), "w") as f:
        f.write(text)
    
    doc.close()

product_pdfs = [
    "Client given info/product/SHIVANSH INTERNATIONAL  Handcrafted Glass lamps-1.pdf",
    "Client given info/product/Table_Lamp  SHIVANSH INTERNATIONAL.pdf",
    "Client given info/product/SHOES_PIC KISTOPER  (29)[1].pdf"
]

output_base = "extracted_assets/product"

for pdf in product_pdfs:
    try:
        extract_assets(pdf, output_base)
    except Exception as e:
        print(f"Error processing {pdf}: {e}")
