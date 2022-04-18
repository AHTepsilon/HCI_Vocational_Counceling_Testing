class Student2 extends Student{

    constructor(posX, posY){

        super(posX, posY);

        this.sprite = loadImage("./img/student2.png");

        this.question2 = loadImage("./img/question2.png");

        this.question7 = loadImage("./img/question7.png");

        this.question10 = loadImage("./img/question10.png");

        this.question22 = loadImage("./img/question22.png");

        this.question2Called = false;

        this.question7Called = false;

        this.question10Called = false;

        this.question22Called = false;

    }

    paint(){

        imageMode(CENTER);
        image(this.sprite, this.posX, this.posY);

        if(this.question2Called){

            image(this.question2, 608, 330);

        }

        if(this.question7Called){

            image(this.question7, 608, 330);

        }

        if(this.question10Called){

            image(this.question10, 608, 330);

        }

        if(this.question22Called){

            image(this.question22, 608, 330);

        }

    }

}