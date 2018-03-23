function overNote(x, y) {
  overXP.html(x);
  overYP.html(y);
  octWindow.over(x, y);
}

var pX, pY, xPressed, yPressed, octaveP, octNoteP,octSlide, octSlideP, overXP, overYP, overNoteP;
var octWindow = new OctaveWindow();
var kb;

function setup() {
  kb = createCanvas(octWindow.octaveWidth * octWindow.octPerWindow, 200);
  xPressed = createP('none');
  yPressed = createP('none');
  octaveP = createP('none');
  octNoteP = createP('none');
  octFreqP = createP('none');
  octSlider = createSlider(1, octWindow.octCount - 1, octWindow.startOctave);
  octSlideP = createP(octSlider.value());
  octWindow.setOctave(octSlider.value());
  octWindow.show();
  overXP = createP('none');
  overYP = createP('none');
  overNoteP = createP('none');
}

function draw() {
  background(200);
  var octVal = octSlider.value();
  octWindow.setOctave(octVal);
  octWindow.show();
  octSlideP.html(octVal);
  overNote(mouseX, mouseY);
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
