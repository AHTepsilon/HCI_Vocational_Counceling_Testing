let students;

let bg;

let timerValue, timerValueMinutes;

let gameCanvas;

function preload(){
  
  bg = loadImage('./img/PLACEHOLDER_bg.png');

}

function setup() {

  gameCanvas = createCanvas(1280, 720);

  students = [];

  gameCanvas.parent("gameContainer");

  student1 = new Student1(161, 77);
  student2 = new Student2(161, 360);
  student3 = new Student3(1147, 77);
  student4 = new Student4(1147, 360);

  timerValue = 0;
  timerValueMinutes = 3;

  setInterval(timeIt, 1000);
}

function draw() {
  //console.log(mouseX + ", " + mouseY);

  background(255);
  image(bg, 0, 0);

  students.forEach(student =>{
    student.paint();
  });

  timer();
  endGame();

}

function timer()
{
	textSize(30);
	textAlign(CENTER);

	if(timerValue >= 10)
	{
		text(timerValueMinutes + ":" + timerValue, 145, 660);
	}
	if(timerValue < 10)
	{
		text(timerValueMinutes + ":0" + timerValue, 145, 660);
	}
	if(timerValue < 0)
	{
		timerValue = 59;
		timerValueMinutes -= 1;
	}

}

function timeIt()
{
	timerValue -= 1;
}

function endGame(){
  
  if(timerValue == 0 && timerValueMinutes == 0){

    alert("Juego terminado");

  }

}

function mousePressed() {

}

function keyPressed() {

  //DEBUG
  if(keyCode === UP_ARROW){ 
    student1.posX++;
  }

}