let student1, student2, student3, student4, student5, student6;
let timeout_phase1, timeout2_phase1, timeout3_phase1, timeout4_phase1, timeout5_phase1;
let timeout_phase2, timeout2_phase2, timeout3_phase2, timeout4_phase2, timeout5_phase2;

let phaseNum;

let bg;

let timerValue, timerValueMinutes;

let gameCanvas;

function preload(){
  
  bg = loadImage('./img/bg.png');

}

function setup() {

  gameCanvas = createCanvas(1280, 720);

  gameCanvas.parent("gameContainer");

  phaseNum = 0;

  student1 = new Student1(258, 215);
  student2 = new Student2(202, 351);
  student3 = new Student3(144, 502);
  student4 = new Student4(975, 215);
  student5 = new Student5(1052, 351);
  student6 = new Student6(1132, 502);

  timerValue = 0;
  timerValueMinutes = 3;

  setInterval(timeIt, 1000);
  intervalSetter();
}

function draw() {
  //console.log(mouseX + ", " + mouseY);

  background(255);
  image(bg, 0, 0);

  student1.paint();
  student2.paint();
  student3.paint();
  student4.paint();
  student5.paint();
  student6.paint();

  timer();
  endGame();

  student1.callTeacher();
  student2.callTeacher();
  student3.callTeacher();
  student4.callTeacher();
  student5.callTeacher();
  student6.callTeacher();

  console.log(mouseX + ", " + mouseY);

  changePhase();

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

function intervalSetter(){

  timeout_phase1 = setInterval((ev) =>{

    student1.calledTeacher = true;

  }, Math.floor(Math.random() * (10000 - 4000) + 4000));

  timeout2_phase1 = setInterval((ev) =>{

    student2.calledTeacher = true;

  }, Math.floor(Math.random() * (17000 - 10000) + 10000));

  timeout3_phase1 = setInterval((ev) =>{

    student6.calledTeacher = true;

  }, Math.floor(Math.random() * (30000 - 17000) + 10000));

  timeout4_phase1 = setInterval((ev) =>{

    student3.calledTeacher = true;

  }, Math.floor(Math.random() * (40000 - 30000) + 10000));

  timeout5_phase1 = setInterval((ev) =>{

    student5.calledTeacher = true;

  }, Math.floor(Math.random() * (59000 - 40000) + 40000));




}

function changePhase(){

  if(timerValue == 59){
    
    switch(timerValueMinutes){

      case 2:
        phaseNum = 1;
        break;
      case 1:
        phaseNum = 2;
        break;
      case 2:
        phaseNum = 3;
        break;
    }
  }
}

function endGame(){
  
  if(timerValue == 0 && timerValueMinutes == 0){

    alert("Juego terminado");

  }

}

function mousePressed() {
  console.log("Click");
    if(dist(mouseX, mouseY, student1.posX - 75, student1.posY - 35) < 30){

      console.log("student 1 clicked");

      student1.calledTeacher = false;

    }

    if(dist(mouseX, mouseY, student2.posX - 75, student2.posY - 35) < 30){

      console.log("student 2 clicked");

      student2.calledTeacher = false;

    }
    
    if(dist(mouseX, mouseY, student3.posX - 75, student3.posY - 35) < 30){

      console.log("student 3 clicked");

      student3.calledTeacher = false;

    }

    if(dist(mouseX, mouseY, student4.posX - 75, student4.posY - 35) < 30){

      console.log("student 4 clicked");

      student4.calledTeacher = false;

    }

    if(dist(mouseX, mouseY, student5.posX - 75, student5.posY - 35) < 30){

      console.log("student 5 clicked");

      student5.calledTeacher = false;

    }

    if(dist(mouseX, mouseY, student6.posX - 75, student6.posY - 35) < 30){

      console.log("student 6 clicked");

      student6.calledTeacher = false;

    }
}

function keyPressed() {

  //DEBUG
  if(keyCode === UP_ARROW){ 
    student1.posX++;
  }

}