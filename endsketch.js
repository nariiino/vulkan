


let one = { //Green Circle
    x: -500,
    y: 0,
    d: 40
  };
  
  let two = { //Magenta Circle
    x: -6500,
    y: 0,
    d: 20
  };
  
  let three = { //Orange Circle
    x: -4000,
    y: 0,
    d: 30
  };

  let four = { //blue Circle
    x: -300,
    y: 0,
    d: 30
  };

  let fillcolor = '(rgb(170,243,193))';

  
  
  
  
  function preload() {
    interactable = loadImage('r4.gif');
    interactable2 = loadImage('r4.gif');
    interactable1 = loadImage('r4.gif');
    interactable4 = loadImage('r4.gif');
    bg = loadImage('bg.gif')
  }
  
  
    function windowResized(){
      resizeCanvas(windowWidth,windowHeight);
    }
    function setup() {
      createCanvas(windowWidth,windowHeight);
    noStroke();
    one.x = random(-300, -200);
    one.y = random(0, 500);
    two.x = random(-300, -200);
    two.y = random(0, 0);
    three.x = random(-700, -200);
    three.y = random(0, 500);
    four.x = random(-500, -200);
    four.y = random(0, 0);
  }
  
  function draw() {
    
    background(bg);
    
   image(interactable, three.x, three.y,);
   image(interactable2, two.x, two.y);
   image(interactable1, one.x, one.y);
   image(interactable4, four.x, four.y);

  
   fill(fillcolor);
    ellipse(one.x, one.y, one.d, one.d);
    fill(fillcolor);
    triangle(one.x -100 , one.y -100, one.x , one.y - 10 , one.x, one.y + 10);
  
    fill('rgb(213,132,213)');
    ellipse(two.x, two.y, two.d, two.d);
  
    fill( 'orange');
    ellipse(three.x, three.y, three.d, three.d);

    fill( 'blue');
    ellipse(four.x, four.y, four.d, four.d);
    
   
    if (one.x > width + 100) {
      one.x = random(0, 500); 
      one.y = 0; 
      one.d = 20
    }
    
     if (two.x > width + 100) {
      two.x = random(0, 500); 
      two.y = 0; 
    }
    
    
     if (three.x > width + 100) {
      three.x = random(0, 500); 
      three.y = 0; 
       
  
    }

    if (four.x > width + 100) {
        four.x = random(0, 500); 
        four.y = 0; 
         
    
      }
      
    
    
    one.x += 1; 
    one.y += 1; 
    
    two.x += 1; 
    two.y += 1; 
    
    three.x += 1; 
    three.y += 1; 

    four.x += 1; 
    four.y += 1; 
    
    
    if (mouseIsPressed) {
      click();
     
      press();
      
      hit();

      smash();


    } 
  
  }
  
  
  function mousePressed() {
   
    //interactable.setFrame(0);
    //interactable.play();

  
  }
  
  
  
  function click() {
    let button = dist(mouseX, mouseY, three.x, three.y);
    //let button = dist(mouseX, mouseY, two.x, two.y);
    if (button <= 50) {
      three.d = 0 
      interactable.setFrame(0);
    interactable.play();
      console.log("click!");
    }
}

    function press() {
        let button = dist(mouseX, mouseY, two.x, two.y);
        //let button = dist(mouseX, mouseY, two.x, two.y);
        if (button <= 50) {
          two.d = 0 
          interactable2.setFrame(0);
          interactable2.play();
          console.log("press!");
        }
    }

    function hit() {
        let button = dist(mouseX, mouseY, one.x , one.y);
        if (button <= 50) {
           one.d = 0;
          interactable1.setFrame(0);
          interactable1.play();
          console.log("hit!");
            }
}

function smash() {
    let button = dist(mouseX, mouseY, four.x, four.y);
    if (button <= 50) {
      four.d = 0 
      interactable4.setFrame(0);
      interactable4.play();
      console.log("smash!");
    }
}
    
  