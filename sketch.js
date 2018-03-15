var pX, pY, xPressed, yPressed, keyNote;
var scl = 50;
var blackWidth = 30;
var fequency = {};
var keys = [];

function setup() {
  createCanvas(1200, 200);
  pX = createP();
  pY = createP();
  xPressed = createP();
  yPressed = createP();
  keyNote = createP();
  octave = createP();
  keys = createKeys();
}

function draw() {
  background(255);
  for (var i = 0; i < keys.length; i++){
    keys[i].show();
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

function createKeys(){
  var k = [];
//white keys
  var keyCount = width / scl;
  var topLeft = 0;
  for (var i = 0; i < keyCount; i++) {
    var pianoKey = new Pkey(topLeft,scl,height,255,wFreq[i].note,wFreq[i].f, wFreq[i].wavelength, scl, blackWidth);
    k.push(pianoKey);
    topLeft += scl;
  }
  topLeft = 0;
  for (i = 0; i < keyCount / 2; i++) {
    var pianoKey = new Pkey(topLeft, blackWidth, height, 0, bFreq[i].note, bFreq[i].f, bFreq[i].wavelength, scl, blackWidth);
    k.push(pianoKey);
    if (pianoKey.pos == 'skip') {
      topLeft += (scl * 2);
    } else {
      topLeft += scl;
    }
  }
  return k;
}
