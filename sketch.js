var pX, pY, xPressed, yPressed, keyNote;
var scl = 50;
var fequency = {};
var keys = [];

function setup() {
  createCanvas(1200, 200);
  pX = createP();
  pY = createP();
  xPressed = createP();
  yPressed = createP();
  keyNote = createP();
  keys = createKeys();
}

function draw() {
  background(0);
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
    }
  }
}

function createKeys(){
  var k = [];
//white keys
  var keyCount = width / scl;
  var topLeft = 0;
  for (var i = 0; i < keyCount; i++) {
    var pianoKey = new Pkey(topLeft,scl,height,255,wFreq[i].note,wFreq[i].f, wFreq[i].wavelength);
    k.push(pianoKey);
    topLeft += scl;
  }
  return k;
}
