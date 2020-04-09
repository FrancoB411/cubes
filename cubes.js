var speed = 0.001;
var numCubes = 12;

if (feature.canvas && feature.webGL) {
    console.log("Canvas and WebGL detected");
} else {
    var body = document.querySelector("body");
    var h1 = document.createElement('h1');
    h1.innerText = "WebGl Support Required";
    body.appendChild(h1);
}

function setup() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    createCanvas(width, height, WEBGL);
}

function draw() {
    background(0);
    normalMaterial();
    for (var c = 0; c < numCubes; c++) {
        rotateX(frameCount * speed);
        rotateY(frameCount * speed);
        box(100 * c, 100, 100);
    }
}
