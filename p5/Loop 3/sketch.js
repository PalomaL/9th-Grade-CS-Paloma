function setup() {
createCanvas(500, 500);//canvas size
  	for (var i = 0; i < 25; i++){
  		fill(0, 0, i * 10);//color
  		rect(0 + i * 10, 480 - i * 20, 500 - i * 20, 20);
  	}
}
  
  	

function draw() {
  // put drawing code here
}