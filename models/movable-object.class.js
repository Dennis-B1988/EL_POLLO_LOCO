class MovableObject {
    x;
    y;
    speed = 0.15;
    height;
    width;
    img;
    imageCache = [];
    currentImage = 0;
    otherDirection = false;
    speedY = 0;
    acceleration = 1.5;
    energy = 5;
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
        return this.y < 230;
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    drawFrame(ctx) {
        if(this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
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
        this.energy -= 1;
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