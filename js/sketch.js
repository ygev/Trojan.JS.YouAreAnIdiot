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
    
    setInterval(clearCanvas, 1000);
    // Window Moving Around
    x = random(width);
    y = random(height);
    xspeed = 5;
    yspeed = 5;

    // Selection Logic
    var iconTxt = document.getElementsByClassName('icon-txt');
    var icon = document.getElementsByClassName('icon');
    document.addEventListener('click', function(event) {
      for(var i = 0; i < icon.length; i++){
        var isClickInside = icon[i].contains(event.target);

        if (!isClickInside) {
          iconTxt[i].classList.remove("icon-txt_selected");
        }
        else {
          iconTxt[i].classList.add("icon-txt_selected");
        }
      }
    });

     // Double Click Logic
     var leCanvas = document.getElementById('canvas');

     leCanvas.style.display = "none"; 
     document.addEventListener('dblclick', function(event) {
      for(var i = 0; i < icon.length; i++){
        var isDoubleClickInside = icon[i].contains(event.target);
        if (isDoubleClickInside){
          leCanvas.style.display = "block"; // Open the p5 Canvas takeover
          song.loop(); // Play the song
          iconTxt[i].classList.remove("icon-txt_selected"); // Unselect the icon
        }
      }
     });

  }
   

  function draw() {

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

  }

    // Clear Canvas
    function clearCanvas(){  
      clear();
     }

  // https://editor.p5js.org/cmorgantywls/sketches/HkdbRQnOG