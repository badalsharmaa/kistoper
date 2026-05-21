import json
import os
import re

mapping_files = [
    "public/labeled_assets/Table_Lamp  SHIVANSH INTERNATIONAL.pdf_mapping.json",
    "public/labeled_assets/SHOES_PIC KISTOPER  (29)[1].pdf_mapping.json",
    "public/labeled_assets/manual_mapping.json"
]

# Try to parse dimensions from Table_Lamp text
lamp_info = {}
text_path = "extracted_assets/product/Table_Lamp  SHIVANSH INTERNATIONAL.pdf_text.txt"
if os.path.exists(text_path):
    with open(text_path, "r") as f:
        content = f.read()
        # Find DSxxx followed by numbers
        matches = re.findall(r"(DS\d+)\s*\n\s*(\d+)\s*\n\s*(\d+)\s*\n\s*(\d+)", content)
        for m in matches:
            lamp_info[m[0]] = f"{m[1]}x{m[2]}x{m[3]} cm"

products = []
seen_skus = set()

for mapping_file in mapping_files:
    if not os.path.exists(mapping_file):
        continue
    with open(mapping_file, "r") as f:
        data = json.load(f)
        for item in data:
            sku = item["sku"]
            if sku in seen_skus:
                continue
            seen_skus.add(sku)
            
            category = item.get("category", "Glass Lamps" if "Lamp" in mapping_file else "Designer Shoes")
            
            # Default values or overrides
            price = item.get("price", 29.99 if category == "Glass Lamps" else 45.00)
            unit = item.get("unit", lamp_info.get(sku, "Piece" if category == "Glass Lamps" else "Pair"))
            name = item.get("name", f"{'Mosaic Table Lamp' if category == 'Glass Lamps' else 'Designer Footwear'} - {sku}")
            
            # Image path handling (automated mapping uses 'image', manual uses 'raw_image')
            image_name = item.get("image", item.get("raw_image"))
            
            # Add some discounts to populate Flash Sale
            discount = None
            if len(products) % 5 == 0: # Every 5th product
                discount = "20%"
            elif len(products) % 8 == 0:
                discount = "15%"
            
            product = {
                "id": sku,
                "name": name,
                "price": price,
                "image": f"/labeled_assets/{image_name}",
                "category": category,
                "unit": unit,
                "inStock": True
            }
            if discount:
                product["discount"] = discount
                product["originalPrice"] = price * 1.25 # Mock an original price
            
            products.append(product)

products.sort(key=lambda p: p["id"])

ts_content = f"""import {{ Product }} from './cart-context';

export const MOCK_PRODUCTS: Product[] = {json.dumps(products, indent=2)};
"""

with open("src/lib/data.ts", "w") as f:
    f.write(ts_content)

print(f"Generated {len(products)} products in src/lib/data.ts")
