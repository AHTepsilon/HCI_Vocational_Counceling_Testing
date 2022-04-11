class Student1 extends Student{

    constructor(posX, posY){

        super(posX, posY);

        this.sprite = loadImage("./img/student1.png");

    }

    paint(){

        imageMode(CENTER);
        image(this.sprite, this.posX, this.posY);

    }
    
}