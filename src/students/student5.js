class Student5 extends Student{

    constructor(posX, posY){

        super(posX, posY);

        this.sprite = loadImage("./img/student5.png");

        this.madSprite = loadImage("./img/student5mad.png");

        this.question5 = loadImage("./img/question5.png");

        this.question8 = loadImage("./img/question8.png");

        this.question16 = loadImage("./img/question16.png");

        this.question5Called = false;

        this.question8Called = false;

        this.question16Called = false;

        this.isMad = false;

    }

    paint(){

        imageMode(CENTER);
                
        if(!this.isMad){
            image(this.sprite, this.posX, this.posY);
        }
        else{
            image(this.madSprite, this.posX, this.posY);
        }

        if(this.question5Called){

            image(this.question5, 608, 330);

        }

        if(this.question8Called){

            image(this.question8, 608, 330);

        }

        if(this.question16Called){

            image(this.question16, 608, 330);

        }

    }

}