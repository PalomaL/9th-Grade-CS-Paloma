
var y = 0;
function setup() {
  createCanvas ( 1000, 1000);
}
function draw() {

  background (255);//white background
  
  fill(193, 213, 255);//light blue globe
  ellipse(500, 400, 700, 700);//globe
  fill(76, 51, 19);//brown globe base
  rect(300, 700, 400, 150, 10);//globe base

  fill(3, 66, 11);//green tree
  triangle(500, 425, 300, 600, 700, 600);
  triangle(500, 400, 325, 550, 675, 550);
  triangle(500, 350, 350, 500, 650, 500);
  triangle(500, 300, 375, 450, 625, 450);
  triangle(500, 250, 400, 400, 600, 400);
  
  fill(68, 40, 13);//brown tree stump
  rect(460, 600, 90, 75);//tree stump

  fill(255);//white snow
  rect(300, 675, 400, 25, 20);//snow

  fill(0, 80, 255);//blue
  for(var i = 0; i < 7; i++) {
    rect(345 + i * 50, 565, 20, 20, 10);
    }//(bottom) first row of ornaments

  fill(48, 206, 0);//green
  for(var i = 0; i < 6; i++) {
    rect(360 + i * 50, 520, 20, 20, 10);
    }//second row of ornaments

  fill(255, 242, 0);//yellow
  for(var i = 0; i < 5; i++) {
    rect(385 + i * 50, 470, 20, 20, 10);
    }//third row of ornaments

  fill(255, 144, 0);//orange
  for(var i = 0; i < 4; i++) {
    rect(410 + i * 50, 420, 20, 20, 10);
    }//forth row of ornaments

  fill(255, 0, 38);//red
  for(var i = 0; i < 3; i++) {
    rect(440 + i * 50, 360, 20, 20, 10);
    }//(top) fifth row of ornaments

  fill(255, 0, 38);//red
  for(var i = 0; i < 2; i++) {
    rect(465 + i * 50, 325, 20, 20, 10);
    }//(top) sixth row of ornaments
  
  fill(255, 0, 38);//red
  for(var i = 0; i < 1; i++) {
    rect(490 + i * 50, 290, 20, 20, 10);
    }//(top) sixth row of ornaments

  fill (175, 175, 175);//gray button
  rect (475, 750, 50, 50);//button
  
  fill (255);
  ellipse (500, y + 75, 20, 20);//snowball 1
  ellipse (700, y + 200, 20, 20);//snowball 2
  ellipse (300, y + 200, 20, 20);//snowball 3
  ellipse (400, y + 150, 20, 20);//snowball 4
  ellipse (600, y + 300, 20, 20);//snowball 5
  ellipse (550, y + 150, 20, 20);//snowball 6
  ellipse (450, y + 250, 20, 20);//snowball 7
  
  //If Statements to detect the mouse click on the red button
  if (mouseIsPressed)  {
  	if ( mouseX > 475 && mouseX < 525) {
		if (mouseY > 750 && mouseY < 800) {
			y += 2;
		}
	}
  }
  if (y > 400) {
  	y = 0;
  }
}
