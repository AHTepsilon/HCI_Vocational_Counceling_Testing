class Student{

    constructor(posX, posY){

        this.posX = posX;
        this.posY = posY;

    }

    paint(){
        fill(255);
        circle(this.posX, this.posY, 20);
    }

    callTeacher(){
        fill(255);
        rect(this.posX-100, this.posY-50, 90, 40);
    }

}