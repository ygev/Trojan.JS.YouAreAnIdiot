var gif 

var x = 0;
var y = 0;

var imgWidth = 204;
var imgHeight = 224;

var speed = 10;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(11, 142, 128);
    gif = loadImage('img/gif-with-window.gif');
  }
  
  function draw() {
    image(gif, x, 0);
    if (( x + imgWidth) > width) {
      speed = -10;
    }
  
    x = x + speed;
  }

  // https://editor.p5js.org/cmorgantywls/sketches/HkdbRQnOG