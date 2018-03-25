function Pkey( inX, ww, wh, bw, bh, colors, type, note, freq, wl) {
  //keys hold frequencies
  this.x = inX;
  this.whiteWidth = ww;
  this.whiteHeight = wh;
  this.blackWidth = bw;
  this.blackHeight = bh;
  this.note = note;
  this.f = freq;
  this.waveLength = wl;
  this.colors = colors;
  this.isClicked = false;
  this.type = type;

  this.octave = this.note.substr(1,1);
  if (this.octave == '#') {
    this.octave = this.note.substr(2,1);
    this.note = this.note.substr(0,2);
  } else {
    this.note = this.note.substr(0,1);
  }

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
    case 'F#':
      this.pos = 'skip';
      this.x = this.x + (this.whiteWidth) - (this.blackWidth / 2);
      this.x2 = this.x + this.blackWidth;
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

  this.show = function(offset) {
    stroke(0);
    strokeWeight(2);
    if ( this.type == 'white') { //drqw white keys
      fill(this.colors.w);
      this.x2 = this.x + this.whiteWidth;
      switch(this.pos) {
        case 'left':
          beginShape();
          vertex(this.x + offset, 0);
          vertex(this.x2 + offset - this.blackWidth/2, 0);
          vertex(this.x2 + offset - this.blackWidth/2, this.blackHeight);
          vertex(this.x2 + offset, this.blackHeight);
          vertex(this.x2 + offset, this.whiteHeight);
          vertex(this.x + offset, this.whiteHeight);
          endShape(CLOSE);
          break;
        case 'center':
          beginShape();
          vertex(this.x + offset + this.blackWidth/2, 0);
          vertex(this.x2 + offset - this.blackWidth/2, 0);
          vertex(this.x2 + offset - this.blackWidth/2, this.blackHeight);
          vertex(this.x2 + offset, this.blackHeight);
          vertex(this.x2 + offset, this.whiteHeight);
          vertex(this.x + offset, this.whiteHeight);
          vertex(this.x + offset, this.blackHeight);
          vertex(this.x + offset + this.blackWidth/2, this.blackHeight);
          endShape(CLOSE);
          break;
        case 'right':
          beginShape();
          vertex(this.x + offset + this.blackWidth/2, 0);
          vertex(this.x2 + offset, 0);
          vertex(this.x2 + offset, this.whiteHeight);
          vertex(this.x + offset, this.whiteHeight);
          vertex(this.x + offset, this.blackHeight);
          vertex(this.x + offset + this.blackWidth/2, this.blackHeight);
          endShape(CLOSE);
          break;
      }
    } else { //draw black keys
        this.x2 = this.x + this.blackWidth;
        fill(this.colors.b);
        rect(this.x + offset, 0, this.blackWidth, this.blackHeight);
    }
  }

  this.clicked = function(x,y,offset) {
    if(this.isInside(x,y,offset)) {
      return true;
    } else {
      return false;
    }
  }

  this.over = function(x,y,offset) {
    if(this.isInside(x,y,offset)) {
      return true;
    } else {
      return false;
    }
  }

  this.isInside = function(x,y,offset) {
    let inside = false;
    if (this.type == 'white') {
      switch (this.pos) {
        case 'left':
          //check top
          if (y > 0 && y < this.blackHeight) {
            if (x > this.x + offset && x < this.x2 + offset - this.blackWidth / 2) {
              inside = true;
            }
          //check bottom
          } else if( y >= this.blackHeight && y <= this.whiteHeight) {
            if (x > this.x + offset && x < this.x2 + offset) {
              inside = true;
            }
          }
          break;
        case 'right':
          //check top
          if (y >= 0 && y <= this.blackHeight) {
            if (x >= this.x + offset  + this.blackWidth / 2 && x < this.x2 + offset) {
              inside = true;
            }
          //check bottom
          } else if (y >= this.blackHeight && y <= this.whiteHeight) {
            if (x > this.x + offset && x < this.x2 + offset) {
              inside = true;
            }
          }
          break;
        case 'center':
          //check top
          if (y > 0 && y < this.blackHeight) {
            if (x > this.x + offset + this.blackWidth / 2 && x < this.x2 + offset - this.blackWidth / 2 ) {
              inside = true;
            }
          //check bottom
          } else if ( y >= this.blackHeight && y <= this.whiteHeight) {
            if (x > this.x + offset && x < this.x2 + offset) {
              inside = true;
            }
          }
          break;
      }
    //Check black keys
    } else {
      if (y > 0 && y < this.blackHeight && x > this.x + offset && x < this.x2 + offset) {
        inside = true;
      }
    }
    return inside;
  }

  this.showValues = function(offset) {
    this.showHover(offset);
    noStroke();
    textSize(12);
    if (this.type == 'white') {
      var x = this.x + offset + 20;
      var y = this.whiteHeight - 20;
      fill(0);
    } else {
      var x = this.x + offset + 5;
      var y = this.blackHeight - 20;
      fill(255);
    }
    text(this.note + this.octave,x,y);
  }

  this.showHover =function(offset) {
    stroke(0);
    strokeWeight(2);
    if ( this.type == 'white') { //drqw white keys
      fill(this.colors.wHover);
      this.x2 = this.x + this.whiteWidth;
      switch(this.pos) {
        case 'left':
          beginShape();
          vertex(this.x + offset, 0);
          vertex(this.x2 + offset - this.blackWidth/2, 0);
          vertex(this.x2 + offset - this.blackWidth/2, this.blackHeight);
          vertex(this.x2 + offset, this.blackHeight);
          vertex(this.x2 + offset, this.whiteHeight);
          vertex(this.x + offset, this.whiteHeight);
          endShape(CLOSE);
          break;
        case 'center':
          beginShape();
          vertex(this.x + offset + this.blackWidth/2, 0);
          vertex(this.x2 + offset - this.blackWidth/2, 0);
          vertex(this.x2 + offset - this.blackWidth/2, this.blackHeight);
          vertex(this.x2 + offset, this.blackHeight);
          vertex(this.x2 + offset, this.whiteHeight);
          vertex(this.x + offset, this.whiteHeight);
          vertex(this.x + offset, this.blackHeight);
          vertex(this.x + offset + this.blackWidth/2, this.blackHeight);
          endShape(CLOSE);
          break;
        case 'right':
          beginShape();
          vertex(this.x + offset + this.blackWidth/2, 0);
          vertex(this.x2 + offset, 0);
          vertex(this.x2 + offset, this.whiteHeight);
          vertex(this.x + offset, this.whiteHeight);
          vertex(this.x + offset, this.blackHeight);
          vertex(this.x + offset + this.blackWidth/2, this.blackHeight);
          endShape(CLOSE);
          break;
      }
    } else { //draw black keys
        this.x2 = this.x + this.blackWidth;
        fill(this.colors.bHover);
        rect(this.x + offset, 0, this.blackWidth, this.blackHeight);
    }
  }

}
