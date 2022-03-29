let CLOCK = setInterval(clock, 20),
  goal = new Audio("./goal.wav"),
  LEVEL = 1,
  started = false,
  // start screen keys
  startKeys = setInterval(function () {
  document.addEventListener("keydown", function () {
    if ((!started && event.keyCode == 75) || event.keyCode == 88) {
      document.getElementById("start").innerHTML =
        "########## start game ##########";
      var s = setInterval(function () {
        if (document.getElementById("start").innerHTML != "# start game #") {
          document.getElementById("images_map").style.display = "flex";
          document.getElementById("player_map").style.display = "flex";
          document.getElementById("startScreen").style.display = "none";
          started = true;
        }
        clearInterval(s);
      }, 800);
    }
  });
}, 20);
let map_grid = [
  ["#","#","#","#","#","#","#","#","#","#"],
  ["#","@",".",".",".",".",".",".",".","."],
  ["#",".",".",".",".",".",".",".",".","."],
  ["#",".",".",".",".",".",".",".",".","."],
  ["#",".",".",".",".",".",".",".",".","."],
  ["#",".",".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".",".",".","."],
];
let npc = [],
  wall = [],
  p;
  //start function
function start() {
  p = new object("player_map", "./player.png");
  LLC();
}
// fullscreen if available
fs = () => {
  if ("requestFullscreen" in document.documentElement) {
    document.documentElement.requestFullscreen();  
  }
};  
let isMovingLeft = false,
  isMovingUp = false,
  isMovingRight = true,
  isMovingDown = false;
//movement functions
setInterval(function() {
  p.move();
  window.addEventListener("keydown", function () {
    if (started) {
      //left
      if (event.keyCode == 65 || event.keyCode == 37) {
        if (!isMovingUp && !isMovingDown) {
          p.SPDX = -5;
          event.keyCode = null;
          isMovingLeft = true;    
        }
      }
      //right
      if (event.keyCode == 68 || event.keyCode == 39) {
        if (!isMovingUp && !isMovingDown) {
          p.SPDX = 5;
          event.keyCode = null;
          isMovingRight = true;    
        }
      }
      //up
      if (event.keyCode == 87 || event.keyCode == 38) {
        if (!isMovingRight && !isMovingLeft) {
          p.SPDY = -5;
          event.keyCode = null;
          isMovingUp = true;    
        }
      }
      //down
      if (event.keyCode == 83 || event.keyCode == 40) {
        if (!isMovingRight && !isMovingLeft) {
          p.SPDY = 5;
          event.keyCode = null;
          isMovingDown = true;    
        }
      }
      if (event.keyCode == 82) {
        LLC();
      }
    }
  });
  if (p.SPDX != 0) {
    p.SPDX = 0;
  }
  if (p.SPDY != 0) {
    p.SPDY = 0;  
  }
  isMovingLeft = false;
  isMovingRight = false;
  isMovingUp = false;
  isMovingDown = false;
}, 110);
function clock() {
  document.addEventListener("click",fs);
  wall.forEach(e => e.coll());
  wall.forEach(e => e.move());
  //map borders
  if (p.x < 0) {
    p.x += 5;
  }
  if (p.x + 5 > 50) {
    p.x -= 5;
  }
  if (p.y + 5 > 35) {
    p.y -= 5;
  }
  if (p.y < 0) {
    p.y += 5;
  }
}
