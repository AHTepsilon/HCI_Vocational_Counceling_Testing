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

        //TODO: find out how to do the interval for teacher calling

        let randomTimeInterval = Math.floor(Math.random() * (20 - 10 + 1) + 10);

        setTimeout(student1.callTeacher, randomTimeInterval * 1000);
    }

}