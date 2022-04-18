class Student4 extends Student{

    constructor(posX, posY){

        super(posX, posY);

        this.sprite = loadImage("./img/student4.png");

        this.madSprite = loadImage("./img/student4mad.png");
        
        this.question3 = loadImage("./img/question3.png");

        this.question11 = loadImage("./img/question11.png");

        this.question14 = loadImage("./img/question14.png");

        this.question18 = loadImage("./img/question18.png");

        this.question3Called = false;

        this.question11Called = false;

        this.question14Called = false;

        this.question18Called = false;

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

        if(this.question3Called){

            image(this.question3, 608, 330);

        }

        if(this.question11Called){

            image(this.question11, 608, 330);

        }

        if(this.question14Called){

            image(this.question14, 608, 330);

        }

        if(this.question18Called){

            image(this.question18, 608, 330);

        }

    }

}