from PIL import Image
import os

input_path = 'darkblue_nobg.png'
output_path = 'darkblue_centered.png'

if not os.path.exists(input_path):
    print(f"Error: Could not find {input_path}")
    exit(1)

print(f"Centering subject in {input_path}...")

try:
    img = Image.open(input_path)
    
    # 1. Trim the empty transparent space (get bounding box of non-zero alpha)
    bbox = img.getbbox()
    if not bbox:
        print("Error: Image seems to be completely transparent/empty.")
        exit(1)
        
    cropped_img = img.crop(bbox)
    
    # 2. Create a new square canvas based on the largest dimension of the cropped subject
    # Add a little padding (e.g., 5%) so it's not touching the edges
    width, height = cropped_img.size
    new_size = int(max(width, height) * 1.05) 
    
    # Create new transparent image
    centered_img = Image.new("RGBA", (new_size, new_size), (0, 0, 0, 0))
    
    # 3. Paste the cropped subject in the exact center
    paste_x = (new_size - width) // 2
    paste_y = (new_size - height) // 2
    
    centered_img.paste(cropped_img, (paste_x, paste_y))
    
    centered_img.save(output_path)
    print(f"Success! Centered image saved to: {output_path}")

except Exception as e:
    print(f"An error occurred: {e}")
