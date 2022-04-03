let student1;

let bg;

function preload(){
  
  bg = loadImage('./img/DEBUG_background.png');

}

function setup() {
  createCanvas(1280, 720);

  image(bg, 0, 0);

  student1 = new Student1(161, 77);
  student2 = new Student2(161, 360);
  student3 = new Student3(1147, 77);
  student4 = new Student4(1147, 360);
}

function draw() {
  console.log(mouseX + ", " + mouseY);

  student1.paint();
  student2.paint();
  student3.paint();
  student4.paint();

}

function mousePressed() {
  console.log("Click");

  student1.callTeacher();
  student2.callTeacher();
  student3.callTeacher();
  student4.callTeacher();
}

function keyPressed() {

  //DEBUG
  if(keyCode === UP_ARROW){ 
    student1.posX++;
  }

}