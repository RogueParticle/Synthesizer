function overNote(x, y) {
  overXP.html(x);
  overYP.html(y);
  octWindow.over(x, y);
}

var pX, pY, xPressed, yPressed, octaveP, octNoteP,octSlide, octSlideP, overXP, overYP, overNoteP, backColor;
var octWindow;
var kb;

var attackLevel = 1.0;
var releaseLevel = 0;

var attackTime = 0.001
var decayTime = 0.2;
var susPercent = 0.2;
var releaseTime = 0.5;

var env, sinOsc;

function setup() {
  backColor = 255;
  octWindow = new OctaveWindow();
  createCanvas(octWindow.octaveWidth * octWindow.octPerWindow, 200);
  background(backColor);
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
  sinOsc = new p5.Oscillator();
  sinOsc.setType('sine');
  env = new p5.Env();
  env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env.setRange(attackLevel, releaseLevel);
  sinOsc.amp(env);
  sinOsc.start();
}

function draw() {
  background(backColor);
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
    sinOsc.freq(octNote.f);
    env.play();
  } else {
    octNoteP.html('none');
    octaveP.html('none');
    octFreqP.html('none');
  }

}
