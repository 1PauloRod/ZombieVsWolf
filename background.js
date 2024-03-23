


class Background{
    constructor(){
        this.x = 0;
        this.velocity = 10;
        this.image = new Image();
        this.image.src = '/img/background.png';
    }


    update(){
        
        if (this.x < -canvas.width){
            this.x = 0;
        }

        this.x -= this.velocity;
        
    }

    draw(){
        ctx.drawImage(this.image, this.x, 0, canvas.width, canvas.height);
        ctx.drawImage(this.image, this.x + canvas.width, 0, canvas.width, canvas.height);
    }
}