from rembg import remove
from PIL import Image
import os

input_path = 'images/uat_image.jpg'
output_path = 'images/uat_image_nobg.png'

if not os.path.exists(input_path):
    print(f"Error: Could not find {input_path}")
    # try looking in current dir just in case
    if os.path.exists('uat_image.jpg'):
        input_path = 'uat_image.jpg'

print(f"Processing {input_path}...")

try:
    with open(input_path, 'rb') as i:
        input_data = i.read()
        output_data = remove(input_data)
        
    with open(output_path, 'wb') as o:
        o.write(output_data)
        
    print(f"Success! Saved to: {output_path}")
except Exception as e:
    print(f"An error occurred: {e}")
