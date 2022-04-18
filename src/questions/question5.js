class Question5 extends Question {

    constructor(posX, posY) {

        super(posX, posY);

        this.card = loadImage("./img/question5.png");

    }

    paint() {

        imageMode(CENTER);
        image(this.card, this.posX, this.posY);

    }

}