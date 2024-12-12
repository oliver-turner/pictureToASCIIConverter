// Read input file and display on canvas

const inputFile = document.getElementByID("file");
const preview = document.getElementByID("canvas");
const contextPreview = preview.getContext("2d");
const reader = new FileReader();

