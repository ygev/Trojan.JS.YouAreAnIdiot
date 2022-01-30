var gif 
var song

var viruses = [];


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
    
    setInterval(clearCanvas, 100);

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
          song.loop();
          iconTxt[i].classList.remove("icon-txt_selected"); // Unselect the icon
        }
      }
     });

    //  So do I store these in an array?
    x = mouseX;
    y = mouseY;
    xspeed = 5;
    yspeed = 5;

    // for (var i = 0; i < 1; i++) {
    //   viruses[i] = new MakeVirus(x, y)
    //   }

  }
   

  function draw() {
    for (var i = 1; i < viruses.length; i++) {
      viruses[i].move();
      viruses[i].show();
    }
  }

  function mousePressed() {
    var newVirus = new MakeVirus(mouseX, mouseY);
    viruses.push(newVirus);
    // song.play();
  }

  function MakeVirus( x, y) {
    this.xPos = x;
    this.yPos = y;
  }
  
  MakeVirus.prototype = {
    constructor: MakeVirus,
    show: function() {
      image(gif, this.xPos, this.yPos);
  },

    move() {
      this.xPos = this.xPos + xspeed;
      this.yPos = this.yPos +  yspeed;

      if (this.xPos + gif.width >= width) {
        xspeed = -xspeed;
        this.xPos = width - gif.width;
      } else if (this.xPos <= 0) {
        xspeed = -xspeed;
        this.xPos = 0;
      }
    
      if (this.yPos + gif.height >= height) {
        yspeed = -yspeed;
        this.yPos = height - gif.height;
      } else if (this.yPos <= 0) {
        yspeed = -yspeed;
        this.yPos = 0;
      }
    }
  }


  // image(gif, mouseX, mouseY);
  // x = mouseX + xspeed;
  // y = mouseY + yspeed;



  // function move() {
  
   
  // }

    // Clear Canvas
    function clearCanvas(){  
      clear();
     }

  // https://editor.p5js.org/cmorgantywls/sketches/HkdbRQnOG