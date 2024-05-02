


let one = { //Green Circle
    x: 0,
    y: 0,
    d: 30
  };
  
  let two = { //Magenta Circle
    x: 0,
    y: 0,
    d: 30
  };
  
  let three = { //Orange Circle
    x: 0,
    y: 0,
    d: 30
  };
  
  
  
  function preload() {
    interactable = loadImage('r4.gif');
    interactable2 = loadImage('r4.gif');
    interactable1 = loadImage('r4.gif');
    bg = loadImage('bg.gif')
  }
  
  
    function windowResized(){
      resizeCanvas(windowWidth,windowHeight);
    }
    function setup() {
      createCanvas(windowWidth,windowHeight);
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
    
   image(interactable, three.x, three.y,);
   image(interactable2, two.x, two.y);
   image(interactable1, one.x, one.y);

  
    fill('rgb(220,247,220)');
    ellipse(one.x, one.y, one.d, one.d);
  
    fill('rgb(213,132,213)');
    ellipse(two.x, two.y, two.d, two.d);
  
    fill( 'orange');
    ellipse(three.x, three.y, three.d, three.d);
    
   
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
    
    
    one.x += 1; 
    one.y += 1; 
    
    two.x += 1; 
    two.y += 1; 
    
    three.x += 1; 
    three.y += 1; 
    
    
    if (mouseIsPressed) {
      click();
     
      press();
      
      hit();
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
            let button = dist(mouseX, mouseY, one.x, one.y);
            if (button <= 50) {
              one.d = 0 
              interactable1.setFrame(0);
              interactable1.play();
              console.log("hit!");
            }
}

    
  