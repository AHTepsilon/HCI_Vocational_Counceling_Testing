class Question1 extends Question {

    constructor(posX, posY) {

        super(posX, posY);

        this.card = loadImage("./img/question1.png");

    }

    paint() {

        if(Student1.calledTeacher){

            imageMode(CENTER);
            image(this.card, this.posX, this.posY);

        }

    }

}