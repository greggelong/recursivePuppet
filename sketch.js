let h=0;  // offsets for color 
let s=0;  // not used with HSB only rgb
let off =500; // offsets for noise
let off1 = 5;
let 

function setup() {
  if (windowWidth > windowHeight){
  createCanvas(windowWidth, windowHeight);
} else {
  createCanvas(windowWidth,windowWidth);
}
    background(64);
    //rectMode(CENTER)
    angleMode(DEGREES)
    stroke(0,255,0);
    colorMode(HSB, width/8,200,200)
    strokeWeight(0.8)
    // original size and placement
    //translate(width/4,height/2)
    //puppet(0+width/8,0,width/4)
}
function draw(){
 if(mouseX>width/2){
  background(64);
}
 push()
 translate(width/3,height/2.5)
 puppet(0,0,width/3.5)
 pop()
h = frameCount%width/8
s = 200
off1 += 0.01;
off += 0.01;


}
function puppet(x,y,sz){
  // recursive function
  fill(sz,200,200)
  
  stroke(0) // normaly stroke is 0
  // seed shape
  rect(x,y,sz,sz); // middle
  rect(x+(sz),y+(sz/4),sz/2, sz/2); //top
  rect(x-(sz/2),y+(sz/4),sz/2,sz/2); // left arm 
  rect(x+(sz/4),y-(sz/2), sz/2,sz/2); // right arm
  
  if (sz >3){  // exit condition for recursion
    let newsz = sz * 0.25;
    push()
    // rotate with noise better than rotate(random(-3,3))
    let r = map(noise(off), 0,1,-5,5)
    rotate(r)
    puppet(x+ newsz*6,y,newsz) // recursive call right side
    pop()
    push()
    //rotate for animation
    let r1 = map(noise(off1), 0,1,-5,5)
    rotate(r1)
    puppet(x- newsz*3,y,newsz) // recursive call left side
    pop()
     
  }
}
 