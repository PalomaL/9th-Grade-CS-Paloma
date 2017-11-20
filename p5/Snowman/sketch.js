var x = 300;//value on x-axis
var y = 500;//value on y-axis
var snowManSize = 200;//value of snowman size
function setup() {
  createCanvas (600, 600);//canvas size
  background(0);//background color
  ellipse(x,y,snowManSize);//bottom circle
  ellipse(x,y - snowManSize * .5, snowManSize * .75, snowManSize * .75);//middle circle
  ellipse(x,y - snowManSize, snowManSize * .5, snowManSize * .5);//top circle
  ellipse(100, 500, 40, 40)//snowball 1
  ellipse(500, 500, 40, 40)//snowball 2
  ellipse(200, 200, 40, 40)//snowball 3
  ellipse(400, 100, 40, 40)//snowball 4
  ellipse(300, 50, 40, 40)//snowball 5
}

function draw() {
  // put drawing code here
}