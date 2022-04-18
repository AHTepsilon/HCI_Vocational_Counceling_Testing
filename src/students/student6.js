class Student6 extends Student{

    constructor(posX, posY){

        super(posX, posY);

        this.sprite = loadImage("./img/student6.png");

        this.question9 = loadImage("./img/question9.png");

        this.question13 = loadImage("./img/question13.png");

        this.question19 = loadImage("./img/question19.png");

        this.question9Called = false;

        this.question13Called = false;

        this.question19Called = false;

    }

    paint(){

        imageMode(CENTER);
        image(this.sprite, this.posX, this.posY);

        if(this.question9Called){

            image(this.question9, 608, 330);

        }

        if(this.question13Called){

            image(this.question13, 608, 330);

        }

        if(this.question19Called){

            image(this.question19, 608, 330);

        }

    }

}