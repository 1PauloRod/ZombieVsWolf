

class Wolf{
    constructor(){
        this.position = {x: canvas.width - 250, y: canvas.height - 328};
        this.velocity = {x: 10, y: 0};
        this.size = {width: 228, height: 228};
        this.imgWolfRun = document.getElementById("RunAttackImg");
        this.frame = 0;
        this.numberOfFrames = 7;
    }

    update(){
        this.position.x -= this.velocity.x;
        if (this.position.x < -100){
            this.position.x = canvas.width + 100;
        }
    }


    draw(){

        
        ctx.drawImage(this.imgWolfRun, 
        this.frame * 896/7, 0, 
        896/7, 128, 
        this.position.x, this.position.y, 
        this.size.width, this.size.height);
        
        /* Help me to see the collision.
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.rect(this.position.x, this.position.y + 100, 
        this.size.width - 128, this.size.height - 100);
        ctx.fill();
        ctx.closePath();
        */
    }
}