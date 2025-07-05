from paddleocr import PaddleOCR
import matplotlib.pyplot as plt
import matplotlib.patches as patches
from PIL import Image
import numpy as np

# Initialize PaddleOCR model (English only)
# Using minimal parameters to avoid compatibility issues
ocr = PaddleOCR(lang='en')  # Simple initialization

def draw_ocr_results(image_path, result):
    """Custom function to draw OCR results on image"""
    # Load image
    image = Image.open(image_path).convert('RGB')
    
    # Create figure and axis
    fig, ax = plt.subplots(1, figsize=(12, 8))
    ax.imshow(image)
    
    # Draw bounding boxes and text
    for line in result[0]:
        # Extract coordinates and text
        coordinates = line[0]
        text = line[1][0]
        confidence = line[1][1]
        
        # Convert coordinates to rectangle
        # coordinates is a list of 4 points: [[x1,y1], [x2,y2], [x3,y3], [x4,y4]]
        x_coords = [point[0] for point in coordinates]
        y_coords = [point[1] for point in coordinates]
        
        # Get bounding box
        x_min, x_max = min(x_coords), max(x_coords)
        y_min, y_max = min(y_coords), max(y_coords)
        
        # Draw rectangle
        rect = patches.Rectangle(
            (x_min, y_min), 
            x_max - x_min, 
            y_max - y_min, 
            linewidth=2, 
            edgecolor='red', 
            facecolor='none'
        )
        ax.add_patch(rect)
        
        # Add text annotation
        ax.text(
            x_min, 
            y_min - 5, 
            f"{text} ({confidence:.2f})", 
            fontsize=8, 
            color='red', 
            bbox=dict(boxstyle="round,pad=0.3", facecolor="white", alpha=0.8)
        )
    
    ax.set_title("OCR Results with Bounding Boxes")
    ax.axis('off')
    plt.tight_layout()
    plt.show()

def run_paddleocr(image_path):
    # Run OCR
    result = ocr.ocr(image_path)
    
    # Check if result is valid
    if result is None or len(result) == 0 or result[0] is None:
        print("No text detected in the image.")
        return result
    
    # Extract and display structured results
    print("\n=== OCR Results ===\n")
    for i, line in enumerate(result[0]):
        text = line[1][0]
        confidence = line[1][1]
        coordinates = line[0]
        print(f"Line {i+1}: {text} | Confidence: {confidence:.2f}")
        print(f"Coordinates: {coordinates}")
        print("-" * 50)
    
    # Draw results on image
    draw_ocr_results(image_path, result)
    
    return result

def extract_text_only(image_path):
    """Simple function to just extract text without visualization"""
    result = ocr.ocr(image_path)
    
    if result is None or len(result) == 0 or result[0] is None:
        return "No text detected"
    
    extracted_text = []
    for line in result[0]:
        text = line[1][0]
        confidence = line[1][1]
        if confidence > 0.5:  # Only include high-confidence text
            extracted_text.append(text)
    
    return "\n".join(extracted_text)

if __name__ == "__main__":
    image_path = "backend/images/IMG_5097.jpg"
    
    # Run full OCR with visualization
    print("Running OCR with visualization...")
    result = run_paddleocr(image_path)
    
    # Also get just the text
    print("\n=== Extracted Text Only ===")
    text_only = extract_text_only(image_path)
    print(text_only)