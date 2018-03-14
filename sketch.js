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
  //stroke(255);
  //line(width / 2, height / 2, mouseX, mouseY);
  //pX.html(mouseX)
  //pY.html(mouseY);

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
    var startNote = pianoKey.note.substr(0,1)
    switch(startNote) {
      case 'C':
        break;
      case 'D':
        break;
      case 'E':
        break;

    }
    k.push(pianoKey);
    topLeft += scl;
  }
  return k;
}
