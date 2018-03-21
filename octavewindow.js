function OctaveWindow() {
  this.createOctaves = function() {
    var o = [];
    var level = 0;
    for (i = 0; i < this.octCount + 1; i++){
      var oct = new Octave(level);
      o.push(oct);
      level++;
    }
    return o;
  }

  this.show = function() {
    var offset = 0;
    // set start octave in the center of the window
    for (var currentOctave = this.startOctave - 1; currentOctave < this.startOctave - 1 + this.octPerWindow; currentOctave++){
      this.octaves[currentOctave].show(offset);
      offset += this.octaveWidth;
    }
  }

  this.setOctave = function(octValue) {
    if ( octValue !== this.startOctave ) {
      this.startOctave = octValue;
      this.show();
    }
  }

  this.clicked = function(x,y) {
    var found = false;
    var offset = 0;
    for(i=this.startOctave - 1; i < this.startOctave - 1 + this.octPerWindow; i++) {
      var octNote = this.octaves[i].clicked(mouseX, mouseY, offset);
      if(octNote !== 0) {
        found = true;
        break;
      } else {
        found = false;
      }
      offset += this.octaveWidth;
    }
    if (found) {
      return octNote;
    } else {
      return 0;
    }
  }

  var whiteWidth = 50;
  var blackWidth = 30;
  this.octaves = [];
  this.octaveWidth = 350;
  this.octPerWindow = 3;
  this.startOctave = 4;
  this.octCount = 8;

  this.octaves = this.createOctaves();
}
