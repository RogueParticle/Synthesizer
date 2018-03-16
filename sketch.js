var pX, pY, xPressed, yPressed, keyNote, octaveP,octPerWindow, startOctave;
var whiteWidth = 50;
var blackWidth = 30;
var fequency = {};
var octaves = [];
var octaveWidth = 350;

function setup() {
  createCanvas(1200, 200);
  pX = createP();
  pY = createP();
  xPressed = createP();
  yPressed = createP();
  keyNote = createP();
  octaveP = createP();
  octaves = createOctaves();
  octPerWindow = 3;
  startOctave = 0;
}

function draw() {
  background(255);
  var offset = 0;
  for (var currentOctave = startOctave; currentOctave < startOctave + octPerWindow; startOctave++){
    octaves[currentOctave].show(offset);
    offset += octaveWidth; 
  }
}

function mousePressed() {
  xPressed.html(mouseX);
  yPressed.html(mouseY);
  for(i=0; i < keys.length; i++) {
    if(keys[i].clicked(mouseX, mouseY)) {
      keyNote.html(keys[i].note);
      octave.html(keys[i].octave);
    }
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
