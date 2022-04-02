class player{

    constructor(posX, posY){

        this.posX = posX;
        this.posY = posY;
    }

    paint(){
        fill(255);
        circle(this.posX, this.posY, 20);
    }

    movement(dirX, dirY){
        if(dirX == 1){
            posX += 1;
        }

        else if(dirX == -1){
            posX -= 1;
        }

        if(dirY == 1){
            posY += 1;
        }

        else if(dirY == -1){
            posY -= 1;
        }
    }

}