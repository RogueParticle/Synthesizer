var pX, pY, xPressed, yPressed, keyNote, octaveP, octNote, octPerWindow, startOctave;
var whiteWidth = 50;
var blackWidth = 30;
var fequency = {};
var octaves = [];
var octaveWidth = 350;

function setup() {
  createCanvas(octaveWidth * 3, 200);
  //var octWindow = new OctaveWindow();
  xPressed = createP('none');
  yPressed = createP('none');
  octaveP = createP('none');
  octNoteP = createP('none');
  octFreqP = createP('none');
  octaves = createOctaves();
  octPerWindow = 3;
  startOctave = 0;
  octaveWindow.push(octaves[0])
  octaveWindow.push(octaves[1]);
  octaveWindow.push(octaves[2]);
}

function draw() {
  background(85);
  var offset = 0;
  for (var currentOctave = startOctave; currentOctave < startOctave + octPerWindow; currentOctave++){
    octaves[currentOctave].show(offset);
    offset += octaveWidth;
  }
}

function mousePressed() {
  var offset = 0;
  xPressed.html(mouseX);
  yPressed.html(mouseY);
  var found = false;
  for(i=0; i < octaves.length; i++) {
    var octNote = octaves[i].clicked(mouseX, mouseY, offset)
    if(octNote !== 0) {
      octNoteP.html(octNote.note);
      octaveP.html(octNote.octave);
      octFreqP.html(octNote.f);
      found = true;
      break;
    } else {
      octNoteP.html('none');
      octaveP.html('none');
      octFreqP.html('none');
    }
    if (found) break;
    offset += octaveWidth;
  }
}

function createOctaves(){
  //octaves contain keys
  var o = [];
  var level = 0;
  for (i = 0; i < 6; i++){
    var oct = new Octave(level);
    o.push(oct);
    level++;
  }
  return o;
}
