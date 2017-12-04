var x = 0;//x variable
var xspeed = 5;//x speed
var y = 300;//y variable
var yspeed = 8;//y speed 
var x2 = 10;//variable
var xspeed2 = 4;//x2 speed
var y2 = 200;//y2 variable
var yspeed2 = 7;//y2 speed
function setup() {
 	createCanvas(600, 600);//canvas size
}

function draw() {
  background(255, 175, 197);//background color
  fill(255, 251, 186);//ball color yellow
  ellipse(x, y, 50, 50);//ball size 1
  if (x > 600) {//conditional
  	xspeed = xspeed * -1;//making the ball go in reverse
  }
  if (x < 0){//conditional
  	xspeed = xspeed * -1;//making the ball go in reverse
  }
  x = x + xspeed;//making the ball move

  if (y > 600) {//conditional
  	yspeed = yspeed * -1;//making the ball go in reverse
  }
  if (y < 0){//conditional
  	yspeed = yspeed * -1;//making the ball go in reverse
  }
  y = y + yspeed;//making the ball move
  fill(198, 187, 237);//ball color purple
   ellipse(x2, y2, 50, 50);//ball size 2
  if (x2 > 600) {//conditional
  		if(xspeed2 > 0) {
  			xspeed2++;//increase in speed
  		}
  	xspeed2 = xspeed2 * -1;//making the ball go in reverse
  }
  if (x2 < 0){//conditional
  		if(xspeed2 < 0) {
  			xspeed2--;//increase in speed
  		}
  	xspeed2 = xspeed2 * -1;//making the ball go in reverse
  }
  x2 = x2 + xspeed2;//making the ball move

  if (y2 > 600) {//conditional
  	yspeed2 = yspeed2 * -1;//making the ball go in reverse
  }
  if (y2 < 0){//conditional
  	yspeed2 = yspeed2 * -1;//making the ball go in reverse
  }
  y2 = y2 + yspeed2;//making the ball move
}