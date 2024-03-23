canvas = document.getElementById("canvas");
ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 


class Game{
    constructor(){
        this.background = new Background();
        this.player = new Player();
        this.wolf = new Wolf();
        this.ticksPerFrame = 5;
        this.lastUpdateTime = 0; 
        this.frameDuration = 1000/24;
        this.frameCount = 0;
    }

    checkCollision(){
        if (this.wolf.position.x < this.player.position.x + 75 + this.player.size.width - 150 &&
            this.wolf.position.x + this.wolf.size.width - 128 > this.player.position.x + 75   &&
            this.player.position.y + 150 > this.wolf.position.y + this.wolf.size.height){
                return true;
            }
            return false;
    }

    endGame(){
        if (this.checkCollision()){
            this.player.dead = true;
            this.background.velocity = 0;
            this.player.velocity.y = 0;
        }
    }

    update(currentTime){

        if (!this.lastUpdateTime){
            this.lastUpdateTime = currentTime;
        }
        var deltaTime = currentTime - this.lastUpdateTime;
        if (deltaTime > this.frameDuration){
            if (this.player.frame < this.player.numberOfFrames - 1){
                this.player.frame++;
            }else{
                this.player.frame = 0;
            }

            if (this.wolf.frame < this.wolf.numberOfFrames - 1){
                this.wolf.frame++;
            }else{
                this.wolf.frame = 0;
            }

            this.lastUpdateTime = currentTime;
        }

        if (keys.w.pressed == true && this.player.dead == false){
            if (this.player.velocity.y === 0){
                if (deltaTime > this.frameDuration){
                    if (this.player.frame < this.player.numberOfFramesJump - 1){
                        this.player.frame++;
                    }else{
                        this.player.frame = 0;
                    }
                    this.lastUpdateTime = currentTime;
                }
                this.player.velocity.y = -20;
            }
        }

        if (this.player.dead == true){
           if (deltaTime > this.frameDuration){
                    if (this.player.frame < this.player.numberOfFramesDead){
                        this.player.frame++;
                    }else{
                        this.player.frame = this.player.numberOfFramesDead - 1;
                    }
                    this.lastUpdateTime = currentTime;
                }
        }

        //Reseta
        if (keys.space.pressed == true && this.player.dead == true){
            this.player.dead = false;
            this.background.velocity = 10;
            this.wolf.position.x = canvas.width - 250;
            this.wolf.velocity.x = 10;
            this.frame = 0; 
        }
        console.log(this.player.dead);
        
        if (this.player.dead == false && this.frameCount % 100 == 0){
            this.wolf.velocity.x += 1;
        }

        this.background.update();
        this.player.update();
        this.wolf.update();
        this.endGame();
        this.frameCount++;
    }
    
    
    draw(){
        this.background.draw();
        this.player.draw();
        this.wolf.draw();
    }
}


var game = new Game();

function animate(currentTime){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    game.update(currentTime);
    game.draw();
    requestAnimationFrame(animate);
} animate();


