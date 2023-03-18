function setup() {
  createCanvas(windowWidth, windowHeight). position(0,0).style('z-index',-1);
  createA("https://github.com/NAF02","✴Mi cuenta bonita, oña✴", "_blank").id("shiory");
  textSize(50);
}

function draw() {
  textSize(50)
  text("🐾", mouseX, mouseY);
}

function windoeResized() {
  resizeCanvas(windowWidth, windowHeight);
}
