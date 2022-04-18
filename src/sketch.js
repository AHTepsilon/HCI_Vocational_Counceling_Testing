let NameCarrera = "Licenciatura en Idiomas"; // poner el nombre de la carrera;

let path = ""; //crear la variable path, se deja vacia, Se añade al lado de cada ruta de las imagenes o fuentes;

//nunito = app.loadFont(path+'fonts/nunito-bold.ttf'); //ejemplo

let app = this; // crear la variable de la siguiente forma y agregarla a cada metodos
//app.loadFont //ejemplo

let actividad; // crear la variable actividad

//metodos a añadir

//actividad.addResult([{id:NameCarrera, value:puntaje}]); // guarda el puntaje total de la interaccion en la app
//actividad.addState("parametro", value); // guarda variables extras que deseen analizar para la interaccion
//actividad.addState("pantalla1", pantalla1Time); // ejemplo
//actividad.finish() // se pone donde acaba la interaccion, esta salta directamente a la pantalla siguiente, para que tengan en cuenta por si tienen una pantalla final que deseen que se muestre durante cierto tiempo

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

let questionCounter; //contador de pregunta

let score;

let q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22;

let q1C, q2C, q3C, q4C, q5C, q6C, q7C, q8C, q9C, q10C, q11C, q12C, q13C, q14C, q15C, q16C, q17C, q18C, q19C, q20C, q21C, q22C; //booleanos para definir si la pregunta es :) o :(

let questionBooleanArr;

function preload() {

  screenPic1 = loadImage(path + "./img/screen1.png");
  screenPic2 = loadImage(path + "./img/screen2.png");
  screenPic3 = loadImage(path + "./img/screen3.png");
  screenPic4 = loadImage(path + "./img/screen4.png");
  screenPic5 = loadImage(path + "./img/screen5.png");
  //screenPic6 = loadImage("./img/screen6.png");


  //preguntas pics

  q1 = loadImage(path + "./img/question1.png");
  q2 = loadImage(path + "./img/question2.png");
  q3 = loadImage(path + "./img/question3.png");
  q4 = loadImage(path + "./img/question4.png");
  q5 = loadImage(path + "./img/question5.png");
  q6 = loadImage(path + "./img/question6.png");
  q7 = loadImage(path + "./img/question7.png");
  q8 = loadImage(path + "./img/question8.png");
  q9 = loadImage(path + "./img/question9.png");
  q10 = loadImage(path + "./img/question10.png");
  q11 = loadImage(path + "./img/question11.png");
  q12 = loadImage(path + "./img/question12.png");
  q13 = loadImage(path + "./img/question13.png");
  q14 = loadImage(path + "./img/question14.png");
  q15 = loadImage(path + "./img/question15.png");
  q16 = loadImage(path + "./img/question16.png");
  q17 = loadImage(path + "./img/question17.png");
  q18 = loadImage(path + "./img/question18.png");
  q19 = loadImage(path + "./img/question19.png");
  q20 = loadImage(path + "./img/question20.png");
  q21 = loadImage(path + "./img/question21.png");
  q22 = loadImage(path + "./img/question22.png");
 

  bg = loadImage("./img/bg.png");
  desk = loadImage("./img/desk.png");
}

function setup() {
  gameCanvas = createCanvas(1280, 720);

  gameCanvas.parent("gameContainer");

  phaseNum = 0;
  screen = 0;
  questionCounter = 0;
  score = 0;

  student1 = new Student1(258, 174);
  student2 = new Student2(202, 351);
  student3 = new Student3(144, 502);
  student4 = new Student4(975, 215);
  student5 = new Student5(1052, 351);
  student6 = new Student6(1132, 531);

  studentsArr = [student1, student2, student3, student4, student5, student6];

  questionBooleanArr = [q1C, q2C, q3C, q4C, q5C, q6C, q7C, q8C, q9C, q10C, q11C, q12C, q13C, q14C, q15C, q16C, q17C, q18C, q19C, q20C, q21C, q22C];

  questionBooleanArr.forEach(quest =>{

    quest = false;

  });

  console.log(studentsArr);

  timerValue = 0;
  timerValueMinutes = 3;

  app.setInterval(timeIt, 1000);

  //if(screen === 6){
  /*timeout = setInterval((ev) => {
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
*/
  //}

  if(screen == 5){
  
  }

}

function draw() {

  app.imageMode(CORNER);
  app.background(255);
  //console.log(mouseX + ", " + mouseY);
  //console.log(frameCount);
  console.log(questionCounter + ", " + score + ", " + q1C);
  console.log(score);

  if (screen === 0) {

    app.image(screenPic1, 0, 0);

  }

  else if (screen === 1) {

    app.image(screenPic2, 0, 0);

  }

  else if (screen === 2) {

    app.image(screenPic3, 0, 0);

  }

  else if (screen === 3) {

    app.image(screenPic4, 0, 0);

  }

  else if (screen === 4) {

    app.image(screenPic5, 0, 0);

  }

  /* else if(screen === 5){
 
     image(screenPic6, 0, 0);
 
   }*/

  else if (screen === 5) {

    app.image(bg, 0, 0);


    studentsArr.forEach((stud) => {

      stud.paint();
      stud.callTeacher();

      if (stud.questionActive) {
        stud.showProblem();
      }

    });

    if(timerValueMinutes == 2){

      if(timerValue == 56){ //pregunta 1

        student1.calledTeacher = true;

      }

      if(timerValue == 46){ //pregunta 2

        student2.calledTeacher = true;

      }

      if(timerValue == 38){ //pregunta 3

        student4.calledTeacher = true;

      }

      if(timerValue == 30){ //pregunta 4

        student1.calledTeacher = true;

      }

      if(timerValue == 22){ //pregunta 5

        student5.calledTeacher = true;

      }

      if(timerValue == 15){ //pregunta 6

        student3.calledTeacher = true;

      }

      if(timerValue == 5){ //pregunta 7

        student2.calledTeacher = true;

      }

    }

    else if(timerValueMinutes == 1){ 

      if(timerValue == 58){ //pregunta 8

        student5.calledTeacher = true;

      }

      if(timerValue == 50){ //pregunta 9

        student6.calledTeacher = true;

      }

      if(timerValue == 40){ //pregunta 10

        student2.calledTeacher = true;

      }

      if(timerValue == 31){ //pregunta 11

        student4.calledTeacher = true;

      }

      if(timerValue == 25){ //pregunta 12

        student3.calledTeacher = true;

      }

      if(timerValue == 16){ //pregunta 13

        student6.calledTeacher = true;

      }

      if(timerValue == 10){ //pregunta 14

        student4.calledTeacher = true;

      }

      if(timerValue == 1){ //pregunta 15

        student1.calledTeacher = true;

      }

    }

    else if(timerValueMinutes == 0){ 

      if(timerValue == 56){ //pregunta 16

        student5.calledTeacher = true;

      }

      if(timerValue == 49){ //pregunta 17

        student3.calledTeacher = true;

      }

      if(timerValue == 38){ //pregunta 18

        student4.calledTeacher = true;

      }

      if(timerValue == 30){ //pregunta 19

        student6.calledTeacher = true;

      }

      if(timerValue == 24){ //pregunta 20

        student1.calledTeacher = true;

      }

      if(timerValue == 18){ //pregunta 21
      
        student3.calledTeacher = true;
      
      }

      if(timerValue == 10){ //pregunta 22

        student2.calledTeacher = true;

      }

    }


    imageMode(CORNER);
    image(desk, 5, 531);

    whatQuestion();
    addScore();

    timer();
    endGame();

    changePhase();

  }


}

function whatQuestion(){

  studentsArr.forEach(stud => {

    if(stud.calledTeacher){

        if(questionCounter == 1){

          q1C = true;

        }

      }

    });

}

function addScore(){
  
  /*questionBooleanArr.forEach(quest =>{

    if(quest){

      score += 100;
      
    }

  });*/

  if(q1C){

    score += 1;

  }

  if(q2C){

    score += 1;

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

        timerValue--;

      }

      if (
        mouseX > 459 &&
        mouseY > 236 &&
        mouseX < 743 &&
        mouseY < 495 &&
        stud.questionActive
      ) {
        stud.questionActive = false;

        timerValue++;
        questionCounter++;
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