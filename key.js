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
  var startNote = this.note.substr(0,1)
  switch(startNote) {
    case 'C':
      this.pos = 'left';
      break;
    case 'D':
      this.pos = 'center';
      break;
    case 'E':
      this.pos = 'right';
      break;
    case 'F':
      this.pos = 'left';
      break;
    case 'G':
      this.pos = 'center';
      break;
    case 'A':
      this.pos = 'center';
      break;
    case 'B':
      this.pos = 'right';
      break;
  }

  this.show = function() {
    stroke(0);
    strokeWeight(2);
    fill(this.fillColor);
    switch(this.pos) {
      case 'left':
        beginShape();
        vertex(this.x, 0);
        vertex(this.x2 - 20, 0);
        vertex(this.x2 - 20, this.h/2);
        vertex(this.x2, this.h/2);
        vertex(this.x2, this.h);
        vertex(this.x, this.h);
        endShape(CLOSE);
        break;
      case 'center':
        beginShape();
        vertex(this.x + 20, 0);
        vertex(this.x2 - 20, 0);
        vertex(this.x2 - 20, this.h/2);
        vertex(this.x2, this.h/2);
        vertex(this.x2, this.h);
        vertex(this.x, this.h);
        vertex(this.x, this.h/2);
        vertex(this.x + 20, this.h/2);
        endShape(CLOSE);
        break;
      case 'right':
        beginSpape();
        vertex(this.x + 20, 0);
        vertex(this.x2, 0);
        vertex(this.x2, this.h);
        vertex(this.x, this.h);
        vertex(this.x, this.h/2);
        vertex(this.x + 20, this.h/2);
        endShape(CLOSE);
        break;
    }
    //rect(this.x, 0, this.w, this.h);
  }

  this.clicked = function(x,y) {
    if(x > inX && x < (inX + w) && y > w && y < (w + h)) {
      return true;
    } else {
      return false;
    }
  }


}
