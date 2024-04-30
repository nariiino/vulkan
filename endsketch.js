
let one = { //Green Circle
    x: 0,
    y: 0,
    d: 20
  };
  
  let two = { //Magenta Circle
    x: 0,
    y: 0,
    d: 20
  };
  
  let three = { //Orange Circle
    x: 0,
    y: 0,
    d: 20
  };
  
  
  
  function preload() {
    r = loadImage('r4.gif');
    r2 = createImg('r4.gif', 'explosion')
    bg = loadImage('bg.gif')
  }
  
  
  
  function setup() {
    createCanvas(700, 700);
    noStroke();
    one.x = random(0, 500);
    one.y = random(0, 500);
    two.x = random(0, 500);
    two.y = random(0, 500);
    three.x = random(0, 500);
    three.y = random(0, 500);
  }
  
  function draw() {
    
    background(bg);
  
    fill('rgb(220,247,220)');
    ellipse(one.x, one.y, one.d, one.d);
  
    fill('rgb(213,132,213)');
    ellipse(two.x, two.y, two.d, two.d);
  
    fill( 'orange');
    ellipse(three.x, three.y, three.d, three.d);
    
   
    if (one.x > width + 100) {
      one.x = random(0, 500); 
      one.y = 0; 
    }
    
     if (two.x > width + 100) {
      two.x = random(0, 500); 
      two.y = 0; 
    }
    
    
     if (three.x > width + 100) {
      three.x = random(0, 500); 
      three.y = 0; 
       three.d = 30
  
    }
    
    
     one.x += 1; 
    one.y += 1; 
    
    two.x += 1; 
    two.y += 1; 
    
    three.x += 1; 
    three.y += 1; 
    
    
    if (mouseIsPressed) {
      click();
    } 
  
  }
  
  
  
  function click() {
    let button = dist(mouseX, mouseY, three.x, three.y);
    if (button <= 50) {
      three.d = 0 
      r2.position(three.x, three.y);
      console.log("click!");
    }
    
    
  }