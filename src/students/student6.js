class Student6 extends Student{

    constructor(posX, posY){

        super(posX, posY);

        this.sprite = loadImage("./img/student6.png");

    }

    paint(){

        imageMode(CENTER);
        image(this.sprite, this.posX, this.posY);

    }

}