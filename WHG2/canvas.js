var canvasElement = $("<canvas oncontextmenu='return false;' id='twhgCanvas'></canvas>").get(0);
var canvas = canvasElement.getContext("2d");

function resizeCanvas() {
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);
