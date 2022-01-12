var gif 
var song

var x = 0;
var y = 0;

var xspeed;
var yspeed;

function preload() {
  soundFormats('mp3', 'ogg');
  song = loadSound('assets/idiot');
  
  gif = loadImage('assets/gif-with-window.gif');
}

function setup() {
    let mycanvas = createCanvas(windowWidth, windowHeight);
    mycanvas.parent('canvas');
    
    // Window Moving Around
    x = random(width);
    y = random(height);
    xspeed = 5;
    yspeed = 5;

    // Selection Logic
    var iconImg = document.getElementsByClassName('icon-img')[0];
    var iconTxt = document.getElementsByClassName('icon-txt')[0];
    var icon = document.getElementsByClassName('icon')[0];
    document.addEventListener('click', function(event) {
      var isClickInside = icon.contains(event.target);

      if (!isClickInside) {
        iconTxt.classList.remove("icon-txt_selected");
      }
      else {
        iconTxt.classList.add("icon-txt_selected");
      }
    });

     // Double Click Logic
     var leCanvas = document.getElementById('canvas');

     leCanvas.style.display = "none"; 
     document.addEventListener('dblclick', function(event) {
      var isDoubleClickInside = icon.contains(event.target);
      if (isDoubleClickInside){
        leCanvas.style.display = "block"; 
        song.loop();
        iconTxt.classList.remove("icon-txt_selected");
      }
     });

  }
  
  function draw() {
    clear()

  // Animation of the image
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

    // If you click, start another instance of the song.
  }

  // https://editor.p5js.org/cmorgantywls/sketches/HkdbRQnOG