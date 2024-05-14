class MovableObject extends DrawableObject {
    speed = 0.15;
    currentImage = 0;
    otherDirection = false;
    speedY = 0;
    acceleration = 2;
    energy = 100;
    energyBoss = 100;
    lastHit = 0;
    timepassed = 0;
    

    applyGravity() {
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            }
        }, 1000 / 60);
    }


    isAboveGround() {
        if(this instanceof ThrowableObject) {
            return this.y < 500;
        }
        return this.y < 230;
    }


    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;      
    }

    
    moveLeft() {
        this.x -= this.speed;    
    }


    jump() { 
        this.speedY = 25;
    }


    knockback() {
        this.x -= 250;
    }


    // isNearEndboss() {
    //     return this.character.x;
    // }

    
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    isColliding (mo) {
        return  (this.x + this.width - this.offset.right >= mo.x + mo.offset.left &&
                this.y + this.height - this.offset.bottom >= mo.y + mo.offset.top &&
                this.x + this.offset.left < mo.x + mo.width - this.offset.right && 
                this.y + this.offset.top < mo.y + mo.height - this.offset.bottom);
    }


    isHitNormalChicken() {
        if(this.timepassed > 1.5) {
            this.energy -= 20;
            if(this.energy <= 0) {
                this.energy = 0;
                this.isDead();
            } else {
                this.lastHit = new Date().getTime();
            }
        }
    }


    isHitSmallChicken() {
        if(this.timepassed > 1.5) {
            this.energy -= 10;
            if(this.energy <= 0) {
                this.energy = 0;
                this.isDead();
            } else {
                this.lastHit = new Date().getTime();
            }
        }
    }


    isHitEndboss() {
        if(this.timepassed > 1.5 && world.movableObject.energyBoss > 0) {
            this.energy -= 33.34;
            if(this.energy <= 0) {
                this.energy = 0;
                this.isDead();
            } else {
                this.lastHit = new Date().getTime();
            }
        }
    }


    hittingEndbossWithBottle(){
        this.energyBoss -= 20;
        if(this.energyBoss <= 0) {
            this.energyBoss = 0;
            this.isDeadBoss();
        }
        return this.energyBoss
    }



    // isHurt() {
    //     let timepassed = new Date().getTime() - this.lastHit;
    //     timepassed = timepassed / 1000;
    //     return timepassed < 1.5;
    // }
    
    isHurt() {
        this.timepassed = new Date().getTime() - this.lastHit;
        this.timepassed = this.timepassed / 1000;
        return this.timepassed < 1.5;
    }

    isHurtEndboss() {
        return this.timepassed > 0.4 && world.movableObject.energyBoss > 0;
    }


    // isHurtBoss() {
        
    // }
    

    isDead() {
        return this.energy == 0;
        // this.characterIsDead = true;
    }


    isDeadBoss() {
        return this.energyBoss == 0;
    }

}