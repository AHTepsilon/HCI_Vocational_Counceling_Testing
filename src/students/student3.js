class Student3 extends Student{

        constructor(posX, posY){

        super(posX, posY);

        this.sprite = loadImage("./img/student3.png");

        this.question6 = loadImage("./img/question6.png");

        this.question12 = loadImage("./img/question12.png");

        this.question17 = loadImage("./img/question17.png");

        this.question21 = loadImage("./img/question21.png");

        this.question6Called = false;

        this.question12Called = false;

        this.question17Called = false;

        this.question21Called = false;

    }

    paint(){

        imageMode(CENTER);
        image(this.sprite, this.posX, this.posY);

        if(this.question6Called){

            image(this.question6, 608, 330);

        }

        if(this.question12Called){

            image(this.question12, 608, 330);

        }

        if(this.question17Called){

            image(this.question17, 608, 330);

        }

        if(this.question21Called){

            image(this.question21, 608, 330);

        }

    }

}