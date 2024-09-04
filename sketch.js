var squaresAcross = 16
var squaresHigh = 4
var squareSize = 32
var onOrOff = []

function setup() {
  // create canvas of the right size
  var horSize = squareSize * squaresAcross
  var verSize = squareSize * squaresHigh
  createCanvas(horSize, verSize)

  // initilize 2D array "onOrOff" as all values "off" (0)
  for (var row = 0; row < squaresHigh; row++) {
    onOrOff[row] = [] // row starts out empty
    for (var col = 0; col < squaresAcross; col++) {
      onOrOff[row][col] = 0
    }
  }
}

function draw() {
  var numSquares = squaresAcross * squaresHigh
  for (var row = 0; row < squaresHigh; row++) {
    for (var col = 0; col < squaresAcross; col++) {
      x = col * squareSize
      y = row * squareSize
      fill(100) // default to dark
      if (onOrOff[row][col]) {
        fill(200) // but if "on" then square is light instead
      }
      square(x, y, squareSize)
    }
  }
}

function mousePressed() {
  var col = int(mouseX / squareSize)
  var row = int(mouseY / squareSize)
  // flip between 0 and 1 (or vice versa)
  onOrOff[row][col] = 1 - onOrOff[row][col] 
}