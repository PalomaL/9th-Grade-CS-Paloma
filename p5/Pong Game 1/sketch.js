//paddle variables
var paddleWidth = 20;
var paddleHeight = 80;
var paddleX = 780;

//ball variables
var ballX = 400;
var ballY = 300;
var ballDiameter = 20;
var ballSpeedX;
var ballSpeedY;
function setup() {
  //canvas size
  createCanvas(800, 600);
  ballSpeedX = random (-6, 6);
  ballSpeedY = random (-6, 6);
}

function draw() {
	//black background
  background(0);
  //dashed white lines down the middle
  for (var i = 0; i < 15; i++) {
		  rect (398, i * 40, 4, 20);
	}
	//paddle code
	fill(255);
	rect(paddleX, mouseY, paddleWidth, paddleHeight);

	//ball code
	fill(255);
	ellipse(ballX, ballY, ballDiameter);

	//ball movement
	ballX += ballSpeedX
	ballY += ballSpeedY

	if (ballY < ballDiameter/2){
		ballSpeedY *= -1;
	}	
}