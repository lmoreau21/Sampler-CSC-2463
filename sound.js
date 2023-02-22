
let shifter = new Tone.PitchShift(2).toMaster();

let sounds = new Tone.Players({Announcement:"mixkit-clear-announce-tones-2861.wav",Death:"mixkit-arcade-retro-game-over-213.wav",Race:"mixkit-race-countdown-1953.wav",Bleep:"mixkit-winning-an-extra-bonus-2060.wav"}).connect(shifter);
const delay = new Tone.FeedbackDelay("8n", 0);
let name = ["Announcement", "Death", "Race", "Bleep"]
let buttons = [];
let slider, delaySlider;

//Tone.Transport.start();

function setup(){
  createCanvas(windowWidth-20,windowHeight-20);
  background('lightblue');
  sounds.connect(delay);
  delay.toDestination();

  slider = createSlider(-10, 10,0,1)
  
  delaySlider = createSlider(0, 1,0,.1);
  
  textAlign(CENTER)
  fill('black');
  resizeCanvas(windowWidth-20, windowHeight-20);
  
  slider.position(width/8,50)
  slider.style('width',width*3/4+'px')

  delaySlider.position(width/8,150)
  delaySlider.style('width',width*3/4+'px')

  name.forEach((word, index) => {
    buttons[index] = createButton(word);
    buttons[index].position(width/2-width/6, index*height/6+180);
    buttons[index].size(width/3,100);
    buttons[index].mousePressed( () => buttonSound(word))
  })

  shifter.wet.value = 1;
}
function draw(){
  background('lightblue');
  
  textSize(24);
  shifter.pitch = slider.value();
  delay.feedback.value = delaySlider.value();

  fill("black")
  text("Pitch: "+slider.value(),width/2-15,30);
  text("Delay: "+delaySlider.value(),width/2-15,130) 
}

function buttonSound(theSound) {
  sounds.player(theSound).start();
}

