import fitz
import os
import json
from collections import Counter

def label_products(pdf_path, output_dir):
    print(f"Labeling: {pdf_path}")
    doc = fitz.open(pdf_path)
    mapping = []
    
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # First pass to find recurring xrefs (logos/templates)
    all_xrefs = []
    for page in doc:
        for img in page.get_images(full=True):
            all_xrefs.append(img[0])
    
    xref_counts = Counter(all_xrefs)
    # If an image appears on more than 30% of pages, it's likely a logo
    # For very short PDFs, we use a higher threshold
    logo_threshold = max(3, len(doc) * 0.3) if len(doc) > 1 else 100
    logo_xrefs = {xref for xref, count in xref_counts.items() if count > logo_threshold}
    if logo_xrefs:
        print(f"  Detected logo/template xrefs to skip: {logo_xrefs}")

    for page_index in range(len(doc)):
        page = doc[page_index]
        words = page.get_text("words") 
        
        # Extract SKUs
        skus = []
        for w in words:
            text = w[4].strip().upper()
            prefixes = ["DS", "AUH", "BTS", "SUV", "ASH", "APL", "BEN", "MTR", "JIT", "AMS", "PUN", "TUB"]
            if any(text.startswith(prefix) for prefix in prefixes):
                clean_sku = text.rstrip(':').rstrip('.')
                skus.append({
                    "text": clean_sku, 
                    "rect": fitz.Rect(w[:4]),
                    "y_center": (w[1] + w[3]) / 2
                })
        
        images = page.get_images(full=True)
        for img in images:
            xref = img[0]
            if xref in logo_xrefs:
                continue
                
            rects = page.get_image_rects(xref)
            for img_rect in rects:
                # Filter out icons/tiny artifacts
                if img_rect.width < 30 or img_rect.height < 30:
                    continue
                    
                img_y_center = (img_rect.y0 + img_rect.y1) / 2
                
                if not skus:
                    continue
                    
                # Find the closest SKU
                def get_score(sku_item, i_rect, i_y_center):
                    v_dist = abs(sku_item["y_center"] - i_y_center)
                    h_dist = abs(sku_item["rect"].x0 - i_rect.x0)
                    if v_dist < 150:
                        return v_dist + (h_dist / 5)
                    return v_dist * 10 + h_dist

                candidates = sorted(skus, key=lambda s: get_score(s, img_rect, img_y_center))
                best_sku = candidates[0]["text"]
                
                # Increased vertical tolerance
                if abs(candidates[0]["y_center"] - img_y_center) > 600:
                    continue

                try:
                    base_img = doc.extract_image(xref)
                    # Lowered threshold to 5KB to allow small lamp images but skip tiny icons
                    if len(base_img['image']) < 5000: 
                        continue
                        
                    filename = f"{best_sku}_p{page_index}_{xref}.{base_img['ext']}"
                    with open(os.path.join(output_dir, filename), "wb") as f:
                        f.write(base_img["image"])
                    
                    mapping.append({
                        "sku": best_sku,
                        "pdf": os.path.basename(pdf_path),
                        "image": filename
                    })
                except Exception as e:
                    print(f"    Error extracting image {xref} on page {page_index}: {e}")

    mapping_file = os.path.join(output_dir, f"{os.path.basename(pdf_path)}_mapping.json")
    with open(mapping_file, "w") as f:
        json.dump(mapping, f, indent=4)
    print(f"  Mapped {len(mapping)} images for {os.path.basename(pdf_path)}")
    doc.close()

product_pdfs = [
    "Client given info/product/SHIVANSH INTERNATIONAL  Handcrafted Glass lamps-1.pdf",
    "Client given info/product/Table_Lamp  SHIVANSH INTERNATIONAL.pdf",
    "Client given info/product/SHOES_PIC KISTOPER  (29)[1].pdf"
]

for pdf in product_pdfs:
    try:
        label_products(pdf, "labeled_assets")
    except Exception as e:
        print(f"Error processing {pdf}: {e}")
