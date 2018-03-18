function Octave(level) {
  //octaves contain keys;
  this.level = level;
  this.active = false;
  this.notes = [];
  var topLeft = 0;
  var wKeyCount = 7;
  var bKeyCount = 5;
  //this.totalKeys = this.wKeyCount + this.bKeyCount;
  var wStart = this.level * wKeyCount;
  var wEndKey = ((this.level + 1) * wKeyCount);
  var bStart = this.level * bKeyCount;
  var bEndKey = ((this.level + 1) * bKeyCount);
  var wWidth = 50;
  var bWidth = 30;
  var wHeight = 200;
  var bHeight = floor(wHeight * .60);

  //load white keys
  var keyOffset = 0;
  for(var i = wStart; i < wEndKey; i++) {
    var pianoKey = new Pkey(keyOffset, wWidth, wHeight, bWidth, bHeight, 255, wFreq[i].note, wFreq[i].f, wFreq[i].wavelength);
    this.notes.push(pianoKey);
    keyOffset += wWidth;
  }

  //load black keys
  keyOffset = 0;
  for (i = bStart; i < bEndKey; i++) {
    var pianoKey = new Pkey(keyOffset, wWidth, wHeight, bWidth, bHeight, 0, bFreq[i].note, bFreq[i].f, bFreq[i].wavelength);
    this.notes.push(pianoKey);
    if (pianoKey.pos == 'skip') {
      keyOffset += (wWidth * 2);
    } else {
      keyOffset += wWidth;
    }
  }

  this.show = function(offset) {
    for( i = 0; i < this.notes.length; i++) {
      this.notes[i].show(offset);
    }
  }

  this.clicked = function(x,y,offset) {
    for( i = 0; i < this.notes.length; i++) {
      if ( this.notes[i].clicked(x,y,offset) ) {
        return this.notes[i];
      }
    }
    return 0;
  }
}
