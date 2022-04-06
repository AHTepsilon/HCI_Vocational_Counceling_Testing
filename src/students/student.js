class Student{

    constructor(posX, posY, calledTeacher){

        this.posX = posX;
        this.posY = posY;

        this.calledTeacher = calledTeacher;

        this.intervalId;

    }

    paint(){
        fill(0);
        circle(this.posX, this.posY, 20);
    }

    callTeacher(){

        this.calledTeacher = true;

        this.intervalId = window.setInterval((e) => {

            if(this.calledTeacher){
                fill(0);
                rect(this.posX - 150, this.posY - 75, 150, 50);
            }


        }, 3000);


    }

    showQuestion(){

            fill(0);
            rect(this.posX - 150, this.posY - 75, 150, 50);

        /*rect(307, 52, 680, 350);*/
    }

    stopCallingTeacher(){
        
        clearInterval(this.intervalId);

    }

}