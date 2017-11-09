function setup() {
  createCanvas (800, 800);
  background(119, 189, 255);

  //body of house
  fill(142, 116, 59); //brown
  rect(100, 300, 500, 500);
  fill(112, 78, 40); //brown
  rect(500, 150, 50, 150); //chimney
  triangle(100, 300, 600, 300, 350, 75); //roof
  rect(250, 550, 200, 300); //door
  fill(164, 204, 242); //light blue
  rect(150, 400, 100, 100); //window
  rect(450, 400, 100, 100); //window
  fill(71, 46, 24); //dark brown
  ellipse(275, 700, 20, 20); //doorknob
  fill(62, 140, 23); //green
  rect(0, 780, 800, 20) //grass
  fill(255, 227, 22); //yellow
  ellipse(675, 200, 150, 150); //sun
  fill(255, 255, 255); //white
  ellipse(100, 100, 150, 50); //cloud
  ellipse(150, 150, 200, 50); //cloud
  fill(76, 54, 8) //brown
  rect(675, 500, 50, 280) //tree trunk
  fill(62, 140, 23); //green
  ellipse(700, 475, 150, 150); //leaves
}

function draw() {
  // put drawing code here
}