from rembg import remove
from PIL import Image
import os

# Updated paths for UAT image
input_path = 'images/uat_image.jpg'
output_path = 'images/uat_image_nobg.png'

if not os.path.exists(input_path):
    print(f"Error: Could not find {input_path}")
    exit(1)

print(f"Processing {input_path}...")

try:
    with open(input_path, 'rb') as i:
        input_data = i.read()
        
    # Remove background
    output_data = remove(input_data)
    
    # Save temporarily to load into PIL for flipping
    temp_path = 'temp_nobg.png'
    with open(temp_path, 'wb') as o:
        o.write(output_data)
        
    # Flip the image horizontally to match orientation
    img = Image.open(temp_path)
    img_flipped = img.transpose(Image.FLIP_LEFT_RIGHT)
    img_flipped.save(output_path)
    
    # Clean up
    if os.path.exists(temp_path):
        os.remove(temp_path)
        
    print(f"Success! Saved to: {output_path}")
except Exception as e:
    print(f"An error occurred: {e}")
