var x = 600
var y = 600
var cloudx = 300
var cloudy = 300

function setup() {
  createCanvas (1000, 1000);//1000x1000 canvas
}

function draw() {
 background(143, 212, 252)//sky
  fill(144, 144, 150)//gray
 rect(0, 850, 1000, 200);//street
 fill(77, 77, 81);//dark gray
 rect(0, 200, 300, 650);//building 1
 fill(145, 131, 110);//brown
 rect(300, 400, 200, 450);//building 2
 fill(193, 191, 187);//light gray
 rect(500, 300, 250, 550);//building 3
 triangle(625, 250, 500, 300, 750, 300);//roof
 fill(35, 33, 32);//dark gray
 rect(750, 100, 250, 750);//building 4
 fill(255, 255, 255);//white
 ellipse(cloudx - 200, cloudy -225, 200, 50);//cloud
 fill(255, 12, 0);//red
 rect(x - 400, y + 200, 200, 100, 20);//car
 fill(0,0,0);//black
 ellipse(x - 400, y +300, 50, 50);//left wheele
 ellipse(x - 200, y +300, 50, 50);//left wheele

 x = x + 1;//motion of car
 if(x > 1450){
 	x = 0
 }

 cloudx = cloudx + .5;//motion of cloud
 if(cloudx > 1300){
 	cloudx = 0
}
}