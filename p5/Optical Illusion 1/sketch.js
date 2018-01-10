function setup() {
  createCanvas(1000, 1000);//canvas size
  background(0);//black
  //vertical white stripes
  for(var i = 0; i < 10; i++) {
  	rect(i * 100, 0, 25, 1000);
}
 for(var i = 0; i < 10; i++) {
  	rect(0, i * 100, 1000, 25);
}
}
function draw() {
  // put drawing code here
}