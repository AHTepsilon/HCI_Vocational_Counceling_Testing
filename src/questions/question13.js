class Question13 extends Question {

    constructor(posX, posY) {

        super(posX, posY);

        this.card = loadImage("./img/question13.png");

    }

    paint() {

        imageMode(CENTER);
        image(this.card, this.posX, this.posY);

    }

}