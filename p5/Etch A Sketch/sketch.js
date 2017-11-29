var x = 100;
var y = 100;
function setup() {
  createCanvas(600, 600);//canvas size
  fill(226, 23, 4);//red
  rect(0, 0, 600, 600, 20);//body of etch a sketch
  fill(181, 181, 181)//gray
  rect(50, 50, 500, 450);//screen of etch a sketch
  fill(255, 255, 255);//white
  ellipse(50, 550, 75, 75);//left knob
  ellipse(550, 550, 75, 75);//left knob
}

function draw() {
  fill(0);//black
  ellipse(x, y, 4, 4);//drawing

  if(keyIsPressed && keyCode ===LEFT_ARROW){
  	x--;//left arrow key funcion
  	if (x < 50)
  		x=50;
  }
  if(keyIsPressed && keyCode ===RIGHT_ARROW){
  	x++;//right arrow key funcion
  	if (x > 550)
  		x=550;
  }
  if(keyIsPressed && keyCode ===UP_ARROW){
  	y--;//up arrow key funcion
  	if(y < 50)
  		y = 50;
  }
  if(keyIsPressed && keyCode ===DOWN_ARROW){
  	y++;//down arrow key funcion
  	if(y > 500)
  		y = 500;
  }
  if(keyIsPressed && keyCode ===32){
  	y = 300
  	x = 300;//space key funcion
  	fill(181, 181, 181);//gray
  	 rect(50, 50, 500, 450);//screen of etch a sketch
  	}
}