function Pkey( inX, ww, wh, bw, bh, color, note, freq, wl) {
  //keys hold frequencies
  this.x = inX;
  this.whiteWidth = ww;
  this.x2 = this.x + this.w;
  this.whiteHeight = wh;
  this.blackWidth = bw;
  this.blackHeight = bh;
  this.note = note;
  this.f = freq;
  this.waveLength = wl;
  this.fillColor = color;
  this.isClicked = false;

  this.octave = this.note.substr(1,1);
  if (this.octave == '#') {
    this.octave = this.note.substr(2,1);
    this.note = this.note.substr(0,2);
  } else {
    this.note = this.note.substr(0,1);
  }

  if (this.fillColor == 255) {
    switch(this.note) {
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
  } else {
    switch(this.note) {
      case 'F#':
        this.pos = 'skip';
        this.x = this.x + (this.whiteWidth) - (this.blackWidth / 2);
        break;
      case 'C#':
        this.pos = 'skip';
        this.x = this.x + (this.whiteWidth) - (this.blackWidth / 2);
        break;
      default:
        this.pos = 'noskip';
        this.x = this.x - (this.blackWidth / 2);
        break;
    }
  }

  this.show = function() {
    stroke(0);
    strokeWeight(2);
    fill(this.fillColor);
    if ( this.fillColor == 255) { //drqw white keys
      switch(this.pos) {
        case 'left':
          beginShape();
          vertex(this.x, 0);
          vertex(this.x2 - this.blackWidth/2, 0);
          vertex(this.x2 - this.blackWidth/2, this.blackHeight);
          vertex(this.x2, this.blackHeight);
          vertex(this.x2, this.h);
          vertex(this.x, this.h);
          endShape(CLOSE);
          break;
        case 'center':
          beginShape();
          vertex(this.x + this.blackWidth/2, 0);
          vertex(this.x2 - this.blackWidth/2, 0);
          vertex(this.x2 - this.blackWidth/2, this.blackHeight);
          vertex(this.x2, this.blackHeight);
          vertex(this.x2, this.h);
          vertex(this.x, this.h);
          vertex(this.x, this.blackHeight);
          vertex(this.x + this.blackWidth/2, this.blackHeight);
          endShape(CLOSE);
          break;
        case 'right':
          beginShape();
          vertex(this.x + this.blackWidth/2, 0);
          vertex(this.x2, 0);
          vertex(this.x2, this.h);
          vertex(this.x, this.h);
          vertex(this.x, this.blackHeight);
          vertex(this.x + this.blackWidth/2, this.blackHeight);
          endShape(CLOSE);
          break;
      }
    } else { //draw black keys
        rect(this.x, 0, this.blackWidth, this.blackHeight);
    }
  }

  this.clicked = function(x,y) {
    if(x > this.x && x < (this.x + this.w) && y > this.w && y < (this.w + this.h)) {
      return true;
    } else {
      return false;
    }
  }


}
