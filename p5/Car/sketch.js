var x = 500
var y = 500
function setup() {
  createCanvas(1000, 1000);
  fill(243, 255, 30);//yellow
  rect(x, y - 200, 400, 200, 20);//car body
  rect(x + 100, y- 100, 100, 50)
  fill(0, 0, 0);//black
  ellipse(x, y, 100, 100);//left tire
  ellipse(x + 400, y, 100, 100);//right tire
  fill(179, 181, 183);//gray
  ellipse(x, y, 50, 50);//left center wheele
  ellipse(x + 400, y, 50, 50);//right center wheele

}

function draw() {
  // put drawing code here
}