class Student{

    constructor(posX, posY){

        this.posX = posX;
        this.posY = posY;

        this.calledTeacher = false;
        this.questionActive = false;

        this.questionMark = loadImage("./img/question.png");
        this.questionField = loadImage("./img/questionField.png");

        this.intervalId;

    }

    paint(){

    }

    callTeacher(){

        if(this.calledTeacher){

            imageMode(CENTER);
            image(this.questionMark, this.posX - 100, this.posY - 75);

        }

    }

    showQuestion(){

            fill(0);
            rect(this.posX - 150, this.posY - 75, 150, 50);

        /*rect(307, 52, 680, 350);*/
    }

    showProblem(){

        //fill(0);
        //rect(348, 52, 550, 350);

        imageMode(CENTER);
        image(this.questionField, 608, 367);

    }

    stopCallingTeacher(){
        
        clearInterval(this.intervalId);

    }

}