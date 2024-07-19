let brushSize = 20; // Initial size of the brush
let brushColor; // Variable to store brush color

function setup() {
  createCanvas(800, 800);
  brushColor = color(0); // Initialize brush color (black)
  background(255); // White background
}

function draw() {
  // Draw a circle at the mouse position when the mouse is pressed
  if (mouseIsPressed) {
    noStroke();
    fill(brushColor);
    ellipse(mouseX, mouseY, brushSize, brushSize);
  }
}

function keyPressed() {
  // Change brush color using keyboard keys (R, G, B)
  if (key === 'r' || key === 'R') {
    brushColor = color(255, 0, 0); // Red
  } else if (key === 'g' || key === 'G') {
    brushColor = color(0, 255, 0); // Green
  } else if (key === 'b' || key === 'B') {
    brushColor = color(0, 0, 255); // Blue
  }
}

function mouseWheel(event) {
  // Adjust brush size using mouse wheel
  brushSize += event.delta / 50;
  brushSize = constrain(brushSize, 5, 50); // Limit brush size between 5 and 50
}
