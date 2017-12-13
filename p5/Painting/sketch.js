var r;//variable r
var g;//variable g
var b;//varible b
function setup() {
  createCanvas(600, 600);//canvas size
}

function draw() {
  fill(255, 175, 208);//pink
  rect(550, 50, 20, 20);//color selector box

  fill(255, 251, 175);//yellow
  rect(550, 70, 20 ,20);//color selector box

  fill(173, 216, 255);//blue
  rect(550, 90, 20, 20);//color selector box

   fill(227, 186, 255);//purple
  rect(550, 110, 20, 20);//color selector box

   fill(255, 212, 178);//orange
  rect(550, 130, 20, 20);//color selector box
};

function mouseClicked () {
    
    //select pink box
    if (mouseX > 550 && mouseX < 570) {
        if (mouseY > 50 && mouseY < 70) {
            r = 255;
            g = 175;
            b = 208;
        }
    }
    
    //select yellow box
    if (mouseX > 550 && mouseX < 570) {
        if (mouseY > 70 && mouseY < 90) {
            r = 255;
            g = 251;
            b = 175;
        }
    }

     //select blue box
    if (mouseX > 550 && mouseX < 570) {
        if (mouseY > 90 && mouseY < 110) {
            r = 173;
            g = 216;
            b = 255;
        }
    }

     //select purple box
    if (mouseX > 550 && mouseX < 570) {
        if (mouseY > 110 && mouseY < 130) {
            r = 227;
            g = 186;
            b = 255;
        }
    }

     //select orange box
    if (mouseX > 550 && mouseX < 570) {
        if (mouseY > 130 && mouseY < 150) {
            r = 255;
            g = 212;
            b = 178;
        }
    }
    
    //draw \circle
    fill (r, g, b);
    ellipse (mouseX, mouseY, 10, 10);

};