// Read input file and display on canvas
const inputFile = document.getElementById("file");
const preview = document.getElementById("canvas");
const contextPreview = preview.getContext('2d');
const reader = new FileReader();

const context =  canvas.getContext('2d');

inputFile.onchange = (e) => {
    const file = e.target.files[0];
    
    reader.onload = (event) => {
        const image = new Image();
        image.onload = () => {
            preview.width = image.width;
            preview.height = image.height;

            // Draw image onto canvas
            contextPreview.drawImage(image, 0, 0);
        }

        image.src = event.target.result;
    };

    reader.readAsDataURL(file);
};

// Read pixel data using canvas.getContext("2d).getImageData()
const toAscii = (canvas) => {
    const context = canvas.getContext('2d');
    const imgData = context.getImageData(0, 0, canvas.width, canvas.height);
    const pixelData = imgData.data;

    for (let i = 0; i < pixelData.length; i += 4) {
        const red = pixelData[i];
        const green = pixelData[i + 1];
        const blue = pixelData[i + 2];

        const grayscaleBrightness = 0.299 * red + 0.587 * green + 0.114 * blue;

        
    }

} 






// Convert brightness levels to characters using a predefined ASCII ramp
// Render output as <pre>