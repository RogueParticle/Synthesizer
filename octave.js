function Octave(level) {
  //octaves contain keys;
  this.level = level
  this.active = false;
  this.notes = [];
  this.topLeft = 0;
  this.wKeyCount = 12;
  this.bKeyCount = 5;
  this.wWidth = 50;
  this.bWidth = 30;
  this.wHeight = 200;
  this.bHeight = floor(this.wHeight * .60);

  //load white keys
  this.keyOffset = 0;
  for(var i = 0; i < this.keyCount; i++) {
    var pianoKey = new Pkey(this.keyOffset, this.wWidth, this.wHeight, this.bWidth, this.bHeight, 255, wFreq[i].note, wFreq[i].f, wFreq[i].wavelength);
    this.notes.push(pianoKey);
    this.keyOffset += this.wWidth;
  }

  //load black keys
  this.keyOffset = 0;
  for (i = 0; i < this.bKeyCount; i++) {
    var pianoKey = new Pkey(this.topLeft, this.wWidth, this.wHeight, this.bWidth, this.bHeight, 0, bFreq[i].note, bFreq[i].f, bFreq[i].wavelength);
    this.notes.push(pianoKey);
    if (pianoKey.pos == 'skip') {
      this.keyOffset += (this.wWidth * 2);
    } else {
      this.keyOffset += this.wWidth;
    }
  }
}

this.show = function(offset) {

}
