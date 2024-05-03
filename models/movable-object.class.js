class MovableObject extends DrawableObject {
    speed = 0.15;
    currentImage = 0;
    otherDirection = false;
    speedY = 0;
    acceleration = 1.5;
    energy = 100;
    characterIsDead = false;
    lastHit = 0;


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
            return this.y < 350;
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

    
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    isColliding (mo) {
        // return  (this.x + this.width) >= mo.y && this.x <= (mo.X + mo.width) && 
        //         (this.y + this.offsetY + this.height) >= mo.y &&
        //         (this.y + this.offsetY) <= (mo.y + mo.height) && 
        //         mo.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

        return this.x + this.width >= mo.x &&
                this.y + this.height >= mo.y &&
                this.x <= mo.x &&
                this.y <= mo.y + mo.height;
    }


    hit() {
        this.energy -= 20;
        if(this.energy <= 0) {
            this.energy = 0;
            this.isDead();
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1.5;
    }


    isDead() {
        return this.energy == 0;
        // this.characterIsDead = true;
    }

}