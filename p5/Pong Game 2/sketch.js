//ball variables
var ballX = 400;
var ballY = 300;
var ballDiameter = 20;
var ballSpeedX;
var ballSpeedY;

//paddle variables
var paddleX = 780;
var paddleTop;
var paddleleBottom;
var paddleWidth = 20;
var paddleHeight = 80;

//AI paddle Variables
var paddleXAI = 0;
var paddleYAI = 300;
var paddleTopAI;
var paddleBottomAI;
var paddleAISpeed = 5.3;

//score variables
var leftPlayerScore = 0;
var rightPlayerScore = 0;

//image variable
var img;

function setup() {
  //image
  img = loadImage ('https://static.boredpanda.com/blog/wp-content/uploads/2017/07/funny-tiny-face-cats-photoshop-battle-1-596db6ab86588__605.jpg')
  createCanvas (800, 600);
  resetBall();
  paddleTop = height/2;
}

function draw() {
  //black background
  background (0);
  //image size
  image (img, 0, 0, width, height);
  
  if (keyIsPressed === true) {
    if (keyCode === UP_ARROW) {
      paddleTop -= 5;
    }
  }

  if (keyIsPressed === true) {
    if (keyCode === DOWN_ARROW) {
      paddleTop += 5;
    }
  }
  //paddle AI
  if (paddleYAI < ballY){
  	paddleYAI += paddleAISpeed;
  }

  if (paddleYAI > ballY){
  	paddleYAI -= paddleAISpeed;
  }

//once the score reaches 10, the screen says game over and the score resets
if (rightPlayerScore < leftPlayerScore && leftPlayerScore >= 10) {
ballX = ballX;
ballY = ballY;
alert("YOU LOSE! DO YOU WANT TO PLAY AGAIN?");
rightPlayerScore = 0;
leftPlayerScore = 0;
}
if (leftPlayerScore < rightPlayerScore && rightPlayerScore >= 10) {
ballX = ballX;
ballY = ballY;
alert("YOU WIN! DO YOU WANT TO PLAY AGAIN?");
rightPlayerScore = 0;
leftPlayerScore = 0;
}

  //paddle top & paddle bottom variable updates
  //paddleTop = mouseY - paddleHeight/2;
  paddleBottom = paddleTop + paddleHeight;

  //paddle top & paddle bottom AI variable updates
  paddleTopAI = paddleYAI;
  paddleBottomAI = paddleTopAI + paddleHeight;


  //keep paddle from going off top
  if (paddleTop < 0) {
    paddleTop = 0;
  }

  //keep paddle from going off bottom
  if (paddleBottom > height) {
    paddleTop = height - paddleHeight;
  }

  //center of court dashed line
  for (var i = 0; i < 15; i++) {
  	fill (255);
  	rect (398, i * 40, 4, 20);
  }

  //ball
  fill (255);
  ellipse (ballX, ballY, ballDiameter);

  //paddle right
  fill (255);
  rect (paddleX, paddleTop, paddleWidth, paddleHeight);

  //paddle AI
  fill (255);
  rect (paddleXAI, paddleYAI, paddleWidth, paddleHeight);


  //bounce off of top
  if (ballY < ballDiameter/2) {
  	ballSpeedY *= -1;
  }

  //bounce off of bottom
  if (ballY > height - ballDiameter/2) {
  	ballSpeedY *= -1;
  }

  //change ball position by ball speed
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  //make ball bounce off of right paddle
  if (ballY > paddleTop && ballY < paddleBottom && ballX + ballDiameter/2 > paddleX) {
    ballSpeedX = abs(ballSpeedX) * -1;
  }

  //make ball bounce off of AI paddle
  if (ballY > paddleTopAI && ballY < paddleBottomAI && ballX - ballDiameter/2 < paddleXAI + paddleWidth) {
    ballSpeedX = abs(ballSpeedX);
  }

  //display score
  fill (255);
  textSize (60);
  text (leftPlayerScore, 50, 100);
  text (rightPlayerScore, 700, 100);

  // increase right player score and reset ball
  if (ballX < 0) {
    rightPlayerScore++;
    resetBall();
  }

  // increase left player score and reset ball
  if (ballX > width) {
    leftPlayerScore++;
    resetBall();
  }
}


//function to reset ball
var resetBall = function () {
  //ball variables
  ballX = 300;
  ballY = 300;

  //chance variables
  leftOrRight = random (1);
  upOrDown = random (1);

  //50 percent chance to go left or right
  if (leftOrRight > .5) {
    ballSpeedX = random (-7, -4);
  } else {
    ballSpeedX = random (4, 7);
  }

  //50 percent chance to go up or down
  if (upOrDown > .5) {
    ballSpeedY = random (-7, -4);
  } else {
    ballSpeed = random (4, 7);
  }

}
