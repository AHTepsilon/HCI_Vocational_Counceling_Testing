class Question17 extends Question {

    constructor(posX, posY) {

        super(posX, posY);

        this.card = loadImage("./img/question17.png");

    }

    paint() {

        imageMode(CENTER);
        image(this.card, this.posX, this.posY);

    }

}