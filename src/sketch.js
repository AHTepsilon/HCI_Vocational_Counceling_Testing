let student1;

function setup() {
  createCanvas(1280, 720);

  student1 = new Student(250, 250);
  student2 = new Student(450, 450);
  student3 = new Student(600, 250);
  student4 = new Student(850, 450);
}

function draw() {
  background(0);

  student1.paint();
  student1.callTeacher();

  student2.paint();
  student2.callTeacher();

  student3.paint();
  student3.callTeacher();

  student4.paint();
  student4.callTeacher();

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