class Timer{

    constructor(timerValue, timerValueMinutes){

        this.timerValue = timerValue;
        this.timerValueMinutes = timerValueMinutes;

    }

    timer(){
        textSize(30);
        textAlign(CENTER);

        if(this.timerValue >= 10)
        {
            text(this.timerValueMinutes + ":" + this.timerValue, 145, 660);
        }
        if(this.timerValue < 10)
        {
            text(this.timerValueMinutes + ":0" + this.timerValue, 145, 660);
        }
        if(this.timerValue < 0)
        {
            this.timerValue = 59;
            this.timerValueMinutes -= 1;
        }

    }

}