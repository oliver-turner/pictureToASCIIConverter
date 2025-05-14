// Read input file and display on canvas
const inputFile = document.getElementById("file");
const preview = document.getElementById("canvas");
const contextPreview = preview.getContext('2d');
const reader = new FileReader();

inputFile.onchange = function(e) {
    const file = e.target.files[0];
    
    reader.onload = (event) => {
        const image = new Image();
        image.onload = () => {
            preview.width = image.width;
            preview.height = image.height;

            contextPreview.drawImage(image, 0, 0);
        }

        image.src = event.target.result;
    };

    reader.readAsDataURL(file);
};


// Read pixel data using canvas.getContext("2d).getImageData()
// Convert brightness levels to characters using a predefined ASCII ramp
// Render output as <pre>