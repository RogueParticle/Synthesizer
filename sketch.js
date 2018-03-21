var pX, pY, xPressed, yPressed, octaveP, octNoteP,octSlide, octSlideP;
var octWindow = new OctaveWindow();

function setup() {
  createCanvas(octWindow.octaveWidth * octWindow.octPerWindow, 200);
  xPressed = createP('none');
  yPressed = createP('none');
  octaveP = createP('none');
  octNoteP = createP('none');
  octFreqP = createP('none');
  octSlider = createSlider(1, octWindow.octCount - 1, octWindow.startOctave);
  octSlideP = createP(octSlider.value());
}

function draw() {
  background(85);
  var octVal = octSlider.value();
  octWindow.setOctave(octVal);
  octWindow.show();
  octSlideP.html(octVal);
}

function mousePressed() {
  xPressed.html(mouseX);
  yPressed.html(mouseY);
  var octNote = octWindow.clicked(mouseX, mouseY);
  if(octNote !== 0) {
    octNoteP.html(octNote.note);
    octaveP.html(octNote.octave);
    octFreqP.html(octNote.f);
  } else {
    octNoteP.html('none');
    octaveP.html('none');
    octFreqP.html('none');
  }
}
