class Student{

    constructor(posX, posY){

        this.posX = posX;
        this.posY = posY;

        this.calledTeacher = false;

        this.intervalId;

    }

    paint(){
        fill(0);
        circle(this.posX, this.posY, 20);
    }

    callTeacher(){

        if(this.calledTeacher){

            fill(0);
            rect(this.posX - 150, this.posY - 75, 150, 50);
        }

    }

    showQuestion(){

            fill(0);
            rect(this.posX - 150, this.posY - 75, 150, 50);

        /*rect(307, 52, 680, 350);*/
    }

    stopCallingTeacher(){
        
        clearInterval(this.intervalId);

    }

}