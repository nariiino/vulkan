
var canvas;
var h1;
var Tx = 300;
var Ty = 200;
var Ax = 100;
var Ay = 200;
var bgcolor;
var button;
var slider;


let smoke

let smokeX = -200
let smoke2X = -900

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
function setup() {
  createCanvas(windowWidth,windowHeight); 
   
   h1 = createElement('h1', 'VULKAN');
  h1.style('color', 'rgb(143,1,1)');

  
}

function preload(){
  
smoke2 = loadImage ('smoke.png');
smoke = loadImage ('smoke.png');
}
  function draw() {
   
    background ('rgb(12,2,19)'); 
     h1.position(Tx,Ty);
  Tx = Tx + random (-1, 1);
  Ty = Ty + random (-1, 1);
    

    text(mouseX + "," + mouseY, 20, 20);
    
 
    
    image(smoke,smokeX,-400,950,950);
    
    smokeX++;
    
    
    if (smokeX > 600) {
   smokeX = -1000;
   
    
  }
    
    

  
function mousePressed() { 
     h1.style('color', 'rgb(210,0,223)');
    
}
  
}