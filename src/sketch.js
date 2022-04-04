let student1;

let bg;

let newTimer;

function preload(){
  
  bg = loadImage('./img/DEBUG_background.png');

}

function setup() {
  createCanvas(1280, 720);

  student1 = new Student1(161, 77);
  student2 = new Student2(161, 360);
  student3 = new Student3(1147, 77);
  student4 = new Student4(1147, 360);

  newTimer = new Timer(0, 3);
  setInterval(timeIt() , 1000);
}

function draw() {
  //console.log(mouseX + ", " + mouseY);

  background(255);
  image(bg, 0, 0);

  student1.paint();
  student2.paint();
  student3.paint();
  student4.paint();

  newTimer.timer();

  endGame();

}

function timeIt()
{
    newTimer.timerValue -= 1
}

function endGame(){
  
  if(newTimer.timerValue == 0 && newTimer.timerValueMinutes == 0){

    alert("Juego terminado");

  }

}

function mousePressed() {
  console.log("Click");

    student1.callTeacher();
    student2.callTeacher();
    student3.callTeacher();
    student4.callTeacher();

    if(dist(mouseX, mouseY, student1.posX - 75, student1.posY - 35) < 30){

      console.log("student 1 clicked");

      student1.stopCallingTeacher();

    }

    if(dist(mouseX, mouseY, student2.posX - 75, student2.posY - 35) < 30){

      console.log("student 2 clicked");

    }
    
    if(dist(mouseX, mouseY, student3.posX - 75, student3.posY - 35) < 30){

      console.log("student 3 clicked");

    }

    if(dist(mouseX, mouseY, student4.posX - 75, student4.posY - 35) < 30){

      console.log("student 4 clicked");

    }
}

function keyPressed() {

  //DEBUG
  if(keyCode === UP_ARROW){ 
    student1.posX++;
  }

}