let student1;

function setup() {
  createCanvas(1280, 720);

  student1 = new Student(250, 250);
}

function draw() {
  background(0);

  student1.paint();
  student1.callTeacher();
}

function mousePressed() {
  console.log("Click");
}

function keyPressed() {

  //DEBUG
  if(keyCode === UP_ARROW){ 
    student1.posX++;
  }

}