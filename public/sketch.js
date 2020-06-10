var socket;

function setup() {
  createCanvas(600, 400);
  background(51);

  socket = io.connect('http://localhost:3000');
  socket.on('mouse', newDrawing);
}

function newDrawing(data) {
  noStroke();
  fill(0, 255, 0);
  circle(data.x, data.y, 50);
}

function draw() {

}

function mouseDragged() {
  console.log("Sending: " + mouseX + "," + mouseY);

  var data = {
    x: mouseX,
    y: mouseY
  }
  socket.emit('mouse', data);
  noStroke();
  fill(255);
  circle(mouseX, mouseY, 50);
}