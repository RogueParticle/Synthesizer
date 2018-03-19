function OctaveWindow() {
  this.createOctaves = function() {
    var o = [];
    var level = 0;
    for (i = 0; i < this.octCount; i++){
      var oct = new Octave(level);
      o.push(oct);
      level++;
    }
    return o;
  }

  this.show = function() {
    //var offset = this.startOctave;
    var offset = 0;
    for (var currentOctave = this.startOctave; currentOctave < this.startOctave + this.octPerWindow; currentOctave++){
      this.octaves[currentOctave].show(offset);
      offset += this.octaveWidth;
    }
  }

  this.clicked = function(x,y) {
    var found = false;
    var offset = 0;
    for(i=this.startOctave; i < this.startOctave + this.octPerWindow; i++) {
      var octNote = this.octaves[i].clicked(mouseX, mouseY, offset);
      if(octNote !== 0) {
        found = true;
        break;
      } else {
        found = false;
      }
      offset += this.octaveWidth;
    }
    if (found) return octNote;
  }

  var whiteWidth = 50;
  var blackWidth = 30;
  this.octaves = [];
  this.octaveWidth = 350;
  this.octPerWindow = 3;
  this.startOctave = 3;
  this.octCount = 8;

  this.octaves = this.createOctaves();
}
