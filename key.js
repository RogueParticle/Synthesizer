function Pkey( inX, w, h, color, note, freq, wl) {
  this.x = inX;
  this.w = w;
  this.h = h;
  this.note = note;
  this.f = freq;
  this.waveLength = wl;
  this.fillColor = color;
  this.isClicked = false;
  this.shape = 'left';

  this.show = function() {
    stroke(0);
    strokeWeight(2);
    fill(this.fillColor);
    if (this.pos == 'left') {
      beginShape();
      vertex(this.x, 0);
      vertex(this.w - 10, 0);
      vertex(this.w - 10, this.h/2);
      vertex(this.w, 50, this.h/2);
      vertex(this.w, this.h);
      vertex(this.x, this.h);
      endShape(CLOSE);
    } else {
      rect(this.x, 0, this.w, this.h);
    }
  }

  this.clicked = function(x,y) {
    if(x > inX && x < (inX + w) && y > w && y < (w + h)) {
      return true;
    } else {
      return false;
    }
  }


}
