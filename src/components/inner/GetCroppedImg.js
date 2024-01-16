// getCroppedImg.js
function GetCroppedImg(imageUrl, crop, zoom) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
  
    const image = new Image();
    image.src = imageUrl;
  
    canvas.width = 400; // Set your desired width
    canvas.height = 300; // Set your desired height
  
    ctx.drawImage(
      image,
      crop.x,
      crop.y,
      crop.width,
      crop.height,
      0,
      0,
      canvas.width,
      canvas.height
    );
  
    return canvas.toDataURL('image/jpeg'); // You can change the image format if needed
  }
  
  export default GetCroppedImg;
  