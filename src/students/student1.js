class Student1 extends Student {

    constructor(posX, posY) {

        super(posX, posY);

        this.sprite = loadImage("./img/student1.png");

        this.question1 = loadImage("./img/question1.png");

        this.question4 = loadImage("./img/question4.png");

        this.question15 = loadImage("./img/question15.png");

        this.question20 = loadImage("./img/question20.png");

        this.question1Called = false;

        this.question4Called = false;

        this.question15Called = false;

        this.question20Called = false;

    }

    paint() {

        imageMode(CENTER);
        image(this.sprite, this.posX, this.posY);

        if(this.question1Called){

            image(this.question1, 608, 330);

        }

        if(this.question4Called){

            image(this.question4, 608, 330);

        }

        if(this.question15Called){

            image(this.question15, 608, 330);

        }

        if(this.question20Called){

            image(this.question20, 608, 330);

        }

    }

}