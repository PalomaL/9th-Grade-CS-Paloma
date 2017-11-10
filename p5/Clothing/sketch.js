function setup() {
  createCanvas(1000, 1000)
  fill(255, 233, 216)//skin
  ellipse(400, 150, 100, 100)//head
  fill(0, 0, 0)//black
  rect(340, 200, 120, 160)//body
  rect(340, 360, 50, 160)//left leg
  rect(410, 360, 50, 160)//right leg
  rect(240, 200, 100, 40)//left arm
  rect(460, 200, 100, 40)//right arm 
  fill(255, 233, 216)//skin
  rect(240, 200, 40, 40)//left hand
  rect(520, 200, 40, 40)//right hand
  fill(255, 255, 255)//white
  triangle(370, 200, 400, 300, 430, 200)//white tux
  fill(0, 0, 0)//black
  ellipse(400, 220, 20, 20)//circle bowtie
  triangle(380, 210, 380, 230, 400, 220)
  triangle(420, 210, 420, 230, 400, 220)
}

function draw() {
  // put drawing code here
}