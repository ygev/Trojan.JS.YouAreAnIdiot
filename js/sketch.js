var gif 

var x = 0;
var y = 0;

var xspeed;
var yspeed;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(11, 142, 128);
    frameRate(20)
    gif = loadImage('img/gif-with-window.gif');
    
    x = random(width);
    y = random(height);
    xspeed = 40;
    yspeed = 40;
    
  }
  
  function draw() {

    image(gif, x, y);
    x = x + xspeed;
    y = y + yspeed;
  
    if (x + gif.width >= width) {
      xspeed = -xspeed;
      x = width - gif.width;
    } else if (x <= 0) {
      xspeed = -xspeed;
      x = 0;
    }
  
    if (y + gif.height >= height) {
      yspeed = -yspeed;
      y = height - gif.height;
    } else if (y <= 0) {
      yspeed = -yspeed;
      y = 0;
    }
  }
  // https://editor.p5js.org/cmorgantywls/sketches/HkdbRQnOG