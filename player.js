

class Player{
    constructor(){
        this.position = {x: 100, y: canvas.height - 150};
        this.velocity = {x: 0, y: 0};
        this.size = {width: 228, height: 196};
        this.imgZombieRun = document.getElementById("playerRun");
        this.imgZombieJump = document.getElementById("playerJump");
        this.imgZombieDead = document.getElementById("playerDead");
        this.numberOfFrames = 6;
        this.numberOfFramesJump = 8;
        this.numberOfFramesDead = 5;
        this.frame = 0;
        this.dead = false;
        //this.color_test = "blue";
    }

    update(){
        
        this.position.y += this.velocity.y;
        
        if (this.position.y >= canvas.height - 150){
            this.velocity.y = 0;
        }else{
            this.velocity.y += GRAVITY;
        }
    }

    draw(){

        if (Math.abs(this.velocity.y) > 0){

            /* Help me to see the collision.
            ctx.beginPath();
            ctx.fillStyle = this.color_test;
            ctx.rect(this.position.x + 75, this.position.y - 150, 
            this.size.width - 150, this.size.height);
            ctx.fill();
            ctx.closePath();
            */


            ctx.drawImage(this.imgZombieJump, 
            this.frame * 768/8, 0, 
            768/8, 96, 
            this.position.x, this.position.y - 150, 
            this.size.width, this.size.height
            );

        
        }else if (this.dead == true){
                ctx.drawImage(this.imgZombieDead, 
                this.frame * 480/5, 0, 
                480/5, 96, 
                this.position.x, this.position.y - 150, 
                this.size.width, this.size.height
                );
        }else{

            /* Help me to see the collision.
            ctx.beginPath();
            ctx.fillStyle = this.color_test;
            ctx.rect(this.position.x + 75, this.position.y - 150, 
                this.size.width - 150, this.size.height);
            ctx.fill();
            ctx.closePath();
            */

            ctx.drawImage(this.imgZombieRun, 
            this.frame * 672/7, 0, 
            672/7, 96, 
            this.position.x, this.position.y - 150, 
            this.size.width, this.size.height
            );
        }
        
       
    }
}