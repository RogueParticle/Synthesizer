function Pkey( inX, w, h, color, note, freq, wl) {
  this.x = inX;
  this.w = w;
  this.x2 = this.x + this.w;
  this.h = h;
  this.note = note;
  this.f = freq;
  this.waveLength = wl;
  this.fillColor = color;
  this.isClicked = false;
  //this.shape = 'left';
  console.log('note: ' + this.note + ' x: ' + this.x + ' w: ' + this.w + ' h: ' + this.h)

  this.show = function() {
    stroke(0);
    strokeWeight(2);
    fill(this.fillColor);
    if (this.pos == 'left') {
      stroke(0, 255, 0);
      beginShape();
      vertex(this.x, 0);
      vertex(this.x2 - 20, 0);
      vertex(this.x2 - 20, this.h/2);
      vertex(this.x2, this.h/2);
      vertex(this.x2, this.h);
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
