


let one = { //Green Circle
    x: -900,
    y: 0,
    d: 20
  };

  let onee = { //Green Circle
    x: -900,
    y: 0,
    d: 20
  };


  let onea = { //Green Circle
    x: 100,
    y: 0,
    d: 20
  };

  let oneb = { //Green Circle
    x: 100,
    y: 0,
    d: 20
  };

  let onec = { //Green Circle
    x: 100,
    y: 0,
    d: 20
  };
  


  let fillcolor = ('red');

  let system;
  


let smoke

let smokeX = -200
let smoke2X = -900

  
  

  
  
  
  
  function preload() {
    interactable = loadImage('r4.gif');
    interactable2 = loadImage('r4.gif');
    interactable1 = loadImage('r4.gif');
    interactable4 = loadImage('r4.gif');
    interactable3 = loadImage('r4.gif');
    interactable5 = loadImage('r4.gif');
    bg = loadImage('back3.gif')
    smoke2 = loadImage ('smoke.png');
    smoke = loadImage ('smoke.png');
  }
  
  
    function windowResized(){
      resizeCanvas(windowWidth,windowHeight);
    }
    function setup() {
      createCanvas(windowWidth,windowHeight);
    noStroke();
    one.x =  (-600);
    one.y = (-200);
    onee.x = (-270);
    onee.y = (-250);
    onea.x = (-800);
    onea.y = (-300);
    oneb.x = (-1300);
    oneb.y = (-600);
    onec.x = (-100);
    onec.y = (-550);
  }
  
  function draw() {
    
    background(bg);

    image(smoke,smokeX,-00,1550,1250);
    
    smokeX++;
    
    if (smokeX > windowWidth) {
   smokeX = -1480;
    }


    
   image(interactable, onee.x, onee.y,);
   image(interactable2, onea.x, onea.y);
   image(interactable1, one.x, one.y);
   image(interactable3, oneb.x, oneb.y);
   image(interactable5, onec.x, onec.y);
  

  
   fill(fillcolor);
    ellipse(one.x, one.y, one.d, one.d);
    
  fill(fillcolor);
    ellipse(onee.x, onee.y, onee.d, onee.d);

  fill(fillcolor);
    ellipse(onea.x, onea.y, onea.d, onea.d);

  fill(fillcolor);
    ellipse(oneb.x, oneb.y, oneb.d, oneb.d);

  fill(fillcolor);
    ellipse(onec.x, onec.y, onec.d, onec.d);


    

    

   
    if (one.x > width ) {
      one.x = random(0, 300); 
      one.y = 0; 
      one.d = 20;
     
    }

    if (onee.x > width ) {
      onee.x = random(0, 300); 
      onee.y = 0; 
      onee.d = 20;
     
    }

    if (onea.x > width ) {
      onea.x = random(0, 300); 
      onea.y = 0; 
      onea.d = 20;
     
    }

    if (oneb.x > width + 5) {
      oneb.x = random(0, 300); 
      oneb.y = 0; 
      oneb.d = 20;
     
    }


    if (onec.x > width + 5) {
      onec.x = random(0, 300); 
      onec.y = 0; 
      onec.d = 20;
     
    }
    
    
    
    
    one.x += 1.5; 
    one.y += 1; 

    onee.x += 1.5; 
    onee.y += 1; 

    onea.x += 1.5; 
    onea.y += 1; 

    oneb.x += 1.5; 
    oneb.y += 1; 

    onec.x += 1.5; 
    onec.y += 1; 
    
    
   
    
    
    if (mouseIsPressed) {
    
      hit();

      hitt();

      hit1();

      hit2();

      hit3();

    


    } 
  
  }
  
  
  function mousePressed() {
   
    //interactable.setFrame(0);
    //interactable.play();

  
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


function hitt() {
  let button = dist(mouseX, mouseY, onee.x , onee.y);
  if (button <= 50) {
     onee.d = 0;
    interactable.setFrame(0);
    interactable.play();
    console.log("hitt!");
      }
}


function hit1() {
  let button = dist(mouseX, mouseY, onea.x , onea.y);
  if (button <= 50) {
     onea.d = 0;
    interactable2.setFrame(0);
    interactable2.play();
    console.log("hit1!");
      }
}

function hit2() {
  let button = dist(mouseX, mouseY, oneb.x , oneb.y);
  if (button <= 50) {
     oneb.d = 0;
    interactable3.setFrame(0);
    interactable3.play();
    console.log("hit2!");
      }
}

function hit3() {
  let button = dist(mouseX, mouseY, onec.x , onec.y);
  if (button <= 50) {
     onec.d = 0;
    interactable5.setFrame(0);
    interactable5.play();
    console.log("hit3!");
      }
}



  