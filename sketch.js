var pX, pY, xPressed, yPressed, keyNote;
var whiteWidth = 50;
var blackWidth = 30;
var fequency = {};
var octaves = [];

function setup() {
  createCanvas(1200, 200);
  pX = createP();
  pY = createP();
  xPressed = createP();
  yPressed = createP();
  keyNote = createP();
  octave = createP();
  octaves = createOctaves();
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

function createOctaves(){
  var o = [];
  var level = 0;
  for (i = 0; i < 6; i++){
    var oct = new Octave()
    o.push(oct);
    level++;
  }
  return o;
}
