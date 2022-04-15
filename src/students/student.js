class Student{

    constructor(posX, posY){

        this.posX = posX;
        this.posY = posY;

        this.calledTeacher = false;
        this.questionActive = false;

        this.questionMark = loadImage("./img/question.png");
        this.questionField = loadImage("./img/questionField.png");

        this.questionOne = loadImage("./img/question1.png");
        this.questionTwo = loadImage("./img/question2.png");
        this.questionThree = loadImage("./img/question3.png");
        this.questionFour = loadImage("./img/question4.png");
        this.questionFive = loadImage("./img/question5.png");
        this.questionSix = loadImage("./img/question6.png");
        this.questionSeven = loadImage("./img/question7.png");
        this.questionEight = loadImage("./img/question8.png");
        this.questionNine = loadImage("./img/question9.png");
        this.questionTen = loadImage("./img/question10.png");
        this.questionEleven = loadImage("./img/question11.png");
        this.questionTwelve = loadImage("./img/question12.png");
        this.questionThirteen = loadImage("./img/question13.png");

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
        image(this.questionOne, 608, 330);

    }

    stopCallingTeacher(){
        
        clearInterval(this.intervalId);

    }

}