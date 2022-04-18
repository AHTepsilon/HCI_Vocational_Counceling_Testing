class Question22 extends Question {

    constructor(posX, posY) {

        super(posX, posY);

        this.card = loadImage("./img/question22.png");

    }

    paint() {

        imageMode(CENTER);
        image(this.card, this.posX, this.posY);

    }

}