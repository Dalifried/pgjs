// object creator
function object(parent,src) {
  this.x=-5;
  this.y=-5;
  this.src=src;
  this.SPDX = 0;
  this.SPDY = 0;
  this.img = new Image();
  document.getElementById([parent]).appendChild(this.img);
  this.img.src = this.src;
  this.newPos = function(x,y) {
    this.x = x;
    this.y = y;
  };
  this.move = function() {
    this.img.style.left = `${this.x}px`;
    this.img.style.top = `${this.y}px`;
    this.x += this.SPDX;
    this.y += this.SPDY;
  };
  this.coll = function() {
    if (!this.moveable) {
      if (p.x == this.x && p.y == this.y && isMovingLeft) {
        p.x += 5;
        p.SPDX = 0;
        isMovingLeft = false;
      }
      if (p.x == this.x && p.y == this.y && isMovingRight) {
        p.x -= 5;
        p.SPDX = 0;
        isMovingRight = false;
      }
      if (p.y == this.y && p.x == this.x && isMovingUp) {
        p.y += 5;
        p.SPDY = 0;
        isMovingUp = false;
      }
      if (p.y == this.y && p.x == this.x && isMovingDown) {
        p.y -= 5;
        p.SPDY = 0;
        isMovingDown = false;
      }
    }
  };
  this.allowMove = true;
  this.pushable = true;
  this.moveable = false;
}