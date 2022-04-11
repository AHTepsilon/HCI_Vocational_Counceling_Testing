let student1, student2, student3, student4, student5, student6;
let timeout_phase1, timeout2_phase1, timeout3_phase1, timeout4_phase1, timeout5_phase1;
let timeout_phase2, timeout2_phase2, timeout3_phase2, timeout4_phase2, timeout5_phase2;

let studentsArr;

let phaseNum;

let bg;

let timerValue, timerValueMinutes;

let gameCanvas;

function preload() {
  bg = loadImage("./img/PLACEHOLDER_bg.png");
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

  studentsArr = [student1, student2, student3, student4, student5, student6];

  console.log(studentsArr);

  timerValue = 0;
  timerValueMinutes = 3;

  setInterval(timeIt, 1000);

  timeout = setInterval((ev) => {
    student1.calledTeacher = true;
  }, Math.floor(Math.random() * (10000 - 4000) + 4000));

  timeout2 = setInterval((ev) => {
    student2.calledTeacher = true;
  }, Math.floor(Math.random() * (18000 - 7000) + 7000));

  timeout3 = setInterval((ev) => {
    student3.calledTeacher = true;
  }, Math.floor(Math.random() * (20000 - 5000) + 5000));

  timeout4 = setInterval((ev) => {
    student4.calledTeacher = true;
  }, Math.floor(Math.random() * (24000 - 8000) + 8000));

  timeout5 = setInterval((ev) => {
    student5.calledTeacher = true;
  }, Math.floor(Math.random() * (32000 - 24000) + 24000));

  timeout6 = setInterval((ev) => {
    student6.calledTeacher = true;
  }, Math.floor(Math.random() * (28000 - 16000) + 16000));
}

function draw() {
  //console.log(mouseX + ", " + mouseY);

  background(255);
  image(bg, 0, 0);

  
  studentsArr.forEach((stud) => {

    stud.paint();
    stud.callTeacher();

    if(stud.questionActive){
      stud.showProblem();
    }

  });

  timer();
  endGame();

  changePhase();
}

function timer() {
  textSize(30);
  textAlign(CENTER);

  if (timerValue >= 10) {
    text(timerValueMinutes + ":" + timerValue, 145, 660);
  }
  if (timerValue < 10) {
    text(timerValueMinutes + ":0" + timerValue, 145, 660);
  }
  if (timerValue < 0) {
    timerValue = 59;
    timerValueMinutes -= 1;
  }
}

function timeIt() {
  timerValue -= 1;
}

function changePhase() {
  if (timerValue == 59) {
    switch (timerValueMinutes) {
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

function endGame() {
  if (timerValue == 0 && timerValueMinutes == 0) {
    alert("Juego terminado");
  }
}

function mousePressed() {
  console.log("Click");

  studentsArr.forEach(stud => {

    if(mouseX > stud.posX - 152 && mouseY > stud.posY - 77 && mouseX < stud.posX && mouseY < stud.posY - 24 && stud.calledTeacher){

      console.log(stud + " clicked");

      stud.calledTeacher = false;
      stud.questionActive = true;

    }

    if (
      mouseX > 348 &&
      mouseY > 52 &&
      mouseX < 898 &&
      mouseY < 402 &&
      stud.questionActive
    ) {
      stud.questionActive = false;
    }

  });
}

function keyPressed() {
  //DEBUG
  if (keyCode === UP_ARROW) {
    student1.posX++;
  }
}
