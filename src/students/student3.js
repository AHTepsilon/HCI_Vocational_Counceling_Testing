class Student3 extends Student{

        constructor(posX, posY){

        super(posX, posY);

        this.sprite = loadImage("./img/student3.png");

    }

    paint(){

        imageMode(CENTER);
        image(this.sprite, this.posX, this.posY);

    }

}