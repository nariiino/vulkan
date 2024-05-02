let system;
var Tx = 650;
var Ty = 200;

let smoke

let smokeX = -200
let smoke2X = -900


function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}


function setup() {
  createCanvas(windowWidth,windowHeight);
    h1 = createElement('h1', 'AUF DEM');
  h1.style('color', 'rgb(143,1,1)');
 

  system = new ParticleSystem(createVector(width / 2, 50));



  
  h1.mousePressed(redirect);
}


function preload(){
  
smoke2 = loadImage ('smoke.png');
smoke = loadImage ('smoke.png');
}



function draw() {
  background ('rgb(12,2,19)');
  system.addParticle();
  system.run();
    h1.position(Tx,Ty);
  Tx = Tx + random (-1, 1);
  Ty = Ty + random (-1, 1);
  
  
   image(smoke,smokeX,-400,1550,1250);
    
    smokeX++;
    
    if (smokeX > windowWidth) {
   smokeX = -1480;
    }
  
  
}

function redirect(){
  window.location.href = "vulkan.html";
}

// A simple Particle class
let Particle = function(position) {
  //this.acceleration = createVector(0, 0.05);
  //this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.acceleration = createVector(random(-0.5,0.5), random(-0.5,0.5));
  this.velocity = createVector(0, 0);
  //this.position = position.copy();
  this.position = createVector(random(width), random(height));
  this.lifespan = 155;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  //this.position.add(this.velocity);
  this.position = createVector(this.position.x + random(-5, 5), this.position.y + random(-5, 5));
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  stroke(70, this.lifespan);
  strokeWeight(1);
  fill(-200, this.lifespan);
  //ellipse(this.position.x, this.position.y, 12, 12);
  text("TANTZ", this.position.x, this.position.y);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  return this.lifespan < 0;
};

let ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (let i = this.particles.length-1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};