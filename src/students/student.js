class Student{

    constructor(posX, posY){

        this.posX = posX;
        this.posY = posY;

        this.calledTeacher = false;

    }

    paint(){
        fill(0);
        circle(this.posX, this.posY, 20);
    }

    callTeacher(zX, zY){

        let result = false;
        if(dist(zX, zY, this.posX - 150, this.posY - 75) < 40){
            return true;
        }

        return result;

    }

    showQuestion(){

            //fill(0);
           // rect(this.posX - 150, this.posY - 75, 150, 50);

        /*rect(307, 52, 680, 350);*/
    }

    stopCallingTeacher(){
        
        clearInterval(this.intervalId);

    }
}