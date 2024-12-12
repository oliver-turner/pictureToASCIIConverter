// Read input file and display on canvas

const inputFile = document.getElementByID("file");
const preview = document.getElementByID("canvas");
const contextPreview = preview.getContext('2d');
const reader = new FileReader();

inputFile.onchange = function(e) {
    const file = e.target.files[0];
    
    reader.readAsDataURL(file);
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