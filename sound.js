let sounds;
let shifter = new Tone.PitchShift(2).toMaster();
let slider;
let checkbox;

//Tone.Transport.start();
function setup(){
  createCanvas(700, 600);
  background(0);
  slider = createSlider(-10, 10,0,1)
  slider.position(100,50)
  slider.style('width','500px')
  size = 200
  sounds = new Tone.Players({soundOne:"mixkit-clear-announce-tones-2861.wav",soundTwo:"mixkit-arcade-retro-game-over-213.wav",soundThree:"mixkit-race-countdown-1953.wav",soundFour:"mixkit-winning-an-extra-bonus-2060.wav"}).connect(shifter);
}
function draw(){
  background('lightblue');
  fill('red')
  shapeOne =  circle(width*1/4,height/4+30,size)
  fill('green')
  shapeTwo = circle(width*3/4,height/4+30,size)
  fill('blue')
  shapeThree = circle(width*1/4,height*3/4,size)
  fill('orange')
  shapeFour = circle(width*3/4,height*3/4,size)
  
  noStroke();
  textSize(24);


  fill("black")
  text("Pitch: "+slider.value(),width/2-40,30)
  stroke('black')
  fill('white')
  text("Announcement",width*1/4-textWidth("Announcement")/2,height/4+36)
  text("Death Sound",width*3/4-textWidth("Death Sound")/2,height/4+36)
  text("Race Countdown",width*1/4-textWidth("Race Countdown")/2,height*3/4+6)
  text("Bleep Sound",width*3/4-textWidth("Bleep Sound")/2,height*3/4+6)
  shifter.wet.value = 1;
  shifter.pitch = slider.value();
}

function mouseClicked() {
  if (dist(mouseX, mouseY, width*1/4,height/4+30) <= size/2) {
    sounds.player("soundOne").start();
  } else if (dist(mouseX, mouseY, width*3/4,height/4+30) <= size/2) {
    sounds.player("soundTwo").start();
  } else if (dist(mouseX, mouseY, width*1/4,height*3/4) <= size/2) {
    sounds.player("soundThree").start();
  }else if (dist(mouseX, mouseY, width*3/4,height*3/4) <= size/2) {
    sounds.player("soundFour").start();
  }
}