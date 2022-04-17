let student1, student2, student3, student4, student5, student6;
let timeout_phase1, timeout2_phase1, timeout3_phase1, timeout4_phase1, timeout5_phase1;
let timeout_phase2, timeout2_phase2, timeout3_phase2, timeout4_phase2, timeout5_phase2;

let screenPic1, screenPic2, screenPic3, screenPic4, screenPic5, screenPic6;

let screen;

let studentsArr;

let phaseNum;

let bg, desk;

let timerValue, timerValueMinutes;

let gameCanvas;

function preload() {

  screenPic1 = loadImage("./img/screen1.png");
  screenPic2 = loadImage("./img/screen2.png");
  screenPic3 = loadImage("./img/screen3.png");
  screenPic4 = loadImage("./img/screen4.png");
  screenPic5 = loadImage("./img/screen5.png");
  //screenPic6 = loadImage("./img/screen6.png");


  //preguntas pics

  /*questionOne = loadImage("./img/question1.png");
  questionTwo = loadImage("./img/question2.png");
  questionThree = loadImage("./img/question3.png");
  questionFour = loadImage("./img/question4.png");
  questionFive = loadImage("./img/question5.png");
  questionSix = loadImage("./img/question6.png");
  questionSeven = loadImage("./img/question7.png");
  questionEight = loadImage("./img/question8.png");
  questionNine = loadImage("./img/question9.png");
  questionTen = loadImage("./img/question10.png");
  questionEleven = loadImage("./img/question11.png");
  questionTwelve = loadImage("./img/question12.png");
  questionThirteen = loadImage("./img/question13.png");*/

  bg = loadImage("./img/bg.png");
  desk = loadImage("./img/desk.png");
}

function setup() {
  gameCanvas = createCanvas(1280, 720);

  gameCanvas.parent("gameContainer");

  phaseNum = 0;
  screen = 0;

  student1 = new Student1(258, 174);
  student2 = new Student2(202, 351);
  student3 = new Student3(144, 502);
  student4 = new Student4(975, 215);
  student5 = new Student5(1052, 351);
  student6 = new Student6(1132, 531);

  studentsArr = [student1, student2, student3, student4, student5, student6];

  console.log(studentsArr);

  timerValue = 0;
  timerValueMinutes = 3;

  setInterval(timeIt, 1000);

  //if(screen === 6){
  timeout = setInterval((ev) => {
    student1.calledTeacher = true;
  }, Math.floor(Math.random() * (10000 - 4000) + 4000) + frameCount);

  timeout2 = setInterval((ev) => {
    student2.calledTeacher = true;
  }, Math.floor(Math.random() * (18000 - 7000) + 7000) + frameCount);

  timeout3 = setInterval((ev) => {
    student3.calledTeacher = true;
  }, Math.floor(Math.random() * (20000 - 5000) + 5000) + frameCount);

  timeout4 = setInterval((ev) => {
    student4.calledTeacher = true;
  }, Math.floor(Math.random() * (24000 - 8000) + 8000) + frameCount);

  timeout5 = setInterval((ev) => {
    student5.calledTeacher = true;
  }, Math.floor(Math.random() * (32000 - 24000) + 24000) + frameCount);

  timeout6 = setInterval((ev) => {
    student6.calledTeacher = true;
  }, Math.floor(Math.random() * (28000 - 16000) + 16000) + frameCount);

  //}
}

function draw() {

  imageMode(CORNER);
  background(255);
  //console.log(mouseX + ", " + mouseY);
  console.log(frameCount);

  if (screen === 0) {

    image(screenPic1, 0, 0);

  }

  else if (screen === 1) {

    image(screenPic2, 0, 0);

  }

  else if (screen === 2) {

    image(screenPic3, 0, 0);

  }

  else if (screen === 3) {

    image(screenPic4, 0, 0);

  }

  else if (screen === 4) {

    image(screenPic5, 0, 0);

  }

  /* else if(screen === 5){
 
     image(screenPic6, 0, 0);
 
   }*/

  else if (screen === 5) {

    image(bg, 0, 0);


    studentsArr.forEach((stud) => {

      stud.paint();
      stud.callTeacher();

      if (stud.questionActive) {
        stud.showProblem();
      }

    });

    imageMode(CORNER);
    image(desk, 5, 531);

    timer();
    endGame();

    changePhase();

  }


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

  if (screen === 0) {

    if (mouseX > 534 && mouseY > 523 && mouseX < 745 && mouseY < 583) {

      screen = 1;

    }

  }

  else if (screen === 1) {

    if (mouseX > 1139 && mouseY > 574 && mouseX < 1243 && mouseY < 605) {

      screen = 2;

    }

  }

  else if (screen === 2) {

    if (mouseX > 1139 && mouseY > 574 && mouseX < 1243 && mouseY < 605) {

      screen = 3;

    }

  }

  else if (screen === 3) {

    if (mouseX > 1139 && mouseY > 574 && mouseX < 1243 && mouseY < 605) {

      screen = 4;

    }

  }

  else if (screen === 4) {

    if (mouseX > 1139 && mouseY > 574 && mouseX < 1243 && mouseY < 605) {

      screen = 5;

    }

  }

  /* else if(screen === 5){
 
     if(mouseX > 1139 && mouseY > 574 && mouseX < 1243 && mouseY < 605){
 
     screen = 6;
 
     }
 
   }*/

  else if (screen === 5) {

    studentsArr.forEach(stud => {

      if (dist(mouseX, mouseY, stud.posX - 150, stud.posY - 75) < 100) {

        console.log(stud + " clicked");

        stud.calledTeacher = false;
        stud.questionActive = true;

      }

      if (
        mouseX > 459 &&
        mouseY > 236 &&
        mouseX < 743 &&
        mouseY < 495 &&
        stud.questionActive
      ) {
        stud.questionActive = false;
      }

    });

  }


  //////////PREGUNTAS////////
  // x,y esquina superior izquierda &&  x,y esquina inferior derecha

  //pregunta 1 (A)
  //pregunta 2 (A)
  //pregunta 3 (C)
  //pregunta 4 (C)
  //pregunta 5 (A)
  //pregunta 6 (A)
  //pregunta 7 (B)
  //pregunta 8 (B)
  //pregunta 9 (B)
  //pregunta 10 (A)
  //pregunta 11 (C)
  //pregunta 12 (C)
  //pregunta 13 (A)



  //respuesta A
  if (mouseX > 432 && mouseY > 285 && mouseX < 499 && mouseY < 307) {

     console.log("HOLAAA");

    //desaparecer el cuadro de pregunta 
    //pintar la siguiente pregunta
    //sumar puntaje correspondiente si es la respuesta correcta

  }

  //respuesta B
  if (mouseX > 527 && mouseY > 285 && mouseX < 594 && mouseY < 307) {

    //desaparecer el cuadro de pregunta
    //pintar la siguiente pregunta
    //sumar puntaje correspondiente si es la respuesta correcta
  }

  //respuesta C
  if (mouseX > 620 && mouseY > 285 && mouseX < 687 && mouseY < 307) {

    //desaparecer el cuadro de pregunta
    //pintar la siguiente pregunta
    //sumar puntaje correspondiente si es la respuesta correcta
  }

  //respuesta D
  if (mouseX > 715 && mouseY > 285 && mouseX < 780 && mouseY < 307) {

    //desaparecer el cuadro de pregunta
    //pintar la siguiente pregunta
    //sumar puntaje correspondiente si es la respuesta correcta
  }




}

function keyPressed() {
  //DEBUG
  if (keyCode === UP_ARROW) {
    student1.posX++;
  }
}