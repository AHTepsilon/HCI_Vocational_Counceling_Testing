class Student{

    constructor(posX, posY){

        this.posX = posX;
        this.posY = posY;

    }

    paint(){
        fill(0);
        circle(this.posX, this.posY, 20);
    }

    callTeacher(){

        fill(0);

        rect(307, 52, 680, 350);

    }

}