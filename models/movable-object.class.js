class MovableObject extends DrawableObject {
    speed = 0.15;
    currentImage = 0;
    otherDirection = false;
    speedY = 0;
    acceleration = 2;
    energy = 100;
    lastHit = 0;
    timepassed = 0;


    /**
     * Applies gravity to the object by decrementing the y position based on speed and acceleration.
     *
     * @param {void} No parameters
     * @return {void} No return value
     */
    applyGravity() {
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            }
        }, 1000 / 60);
    }


    /**
     * Checks if the object is above the ground based on its y position.
     *
     * @param {void} No parameters
     * @return {boolean} true if above ground, false if not
     */
    isAboveGround() {
        if(this instanceof ThrowableObject) {
            return this.y < 500;
        }
        return this.y < 230;
    }


    /**
     * Moves the object to the right based on its speed and updates the direction.
     *
     * @param {void} No parameters
     * @return {void} No return value
     */
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;      
    }

    
    /**
     * Moves the object to the left by decrementing the x position based on the speed property.
     *
     * @param {void} No parameters
     * @return {void} No return value
     */
    moveLeft() {
        this.x -= this.speed;    
    }


    /**
     * Sets the vertical speed of the object to 25.
     *
     * @param {void} No parameters
     * @return {void} No return value
     */
    jump() { 
        this.speedY = 25;
    }


    /**
     * Handles the knockback effect on the object based on the character's x-coordinate.
     *
     * @param {void} No parameters
     * @return {void} No return value
     */
    knockback() {
        if(world.character.x > 1500) {
            this.x -= 250;
        } else {
            this.x -= 150;
        }
    }

    
    /**
     * Plays animation based on the provided images array.
     *
     * @param {array} images - Array of image paths for the animation
     * @return {void} No return value
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    /**
     * Checks if this object is colliding with another movable object.
     *
     * @param {Object} mo - The other movable object to check collision with
     * @return {boolean} true if colliding, false otherwise
     */
    isColliding (mo) {
        return  (this.x + this.width - this.offset.right >= mo.x + mo.offset.left &&
                this.y + this.height - this.offset.bottom >= mo.y + mo.offset.top &&
                this.x + this.offset.left < mo.x + mo.width - this.offset.right && 
                this.y + this.offset.top < mo.y + mo.height - this.offset.bottom);
    }


    /**
     * Checks if this object is hit by a normal chicken and updates energy accordingly.
     *
     * @param {void} No parameters
     * @return {void} No return value
     */
    isHitNormalChicken() {
        if(this.timepassed > 1) {
            this.energy -= 20;
            if(this.energy <= 0) {
                this.energy = 0;
                this.isDead();
            } else {
                this.lastHit = new Date().getTime();
            }
        }
    }


    /**
     * Handles the case when the object hits a small chicken. Decreases energy by 10 if time passed is greater than 1.
     *
     * @param {void} No parameters
     * @return {void} No return value
     */
    isHitSmallChicken() {
        if(this.timepassed > 1) {
            this.energy -= 10;
            if(this.energy <= 0) {
                this.energy = 0;
                this.isDead();
            } else {
                this.lastHit = new Date().getTime();
            }
        }
    }


    /**
     * Checks if this object hits the end boss by decrementing energy and updating last hit time.
     *
     * @param {void} No parameters
     * @return {void} No return value
     */
    isHitEndboss() {
        if(this.timepassed > 1 && world.endboss.energyBoss > 0) {
            this.energy -= 33.34;
            if(this.energy <= 0) {
                this.energy = 0;
                this.isDead();
            } else {
                this.lastHit = new Date().getTime();
            }
        }
    }


    /**
     * Calculates the time passed since the last hit and checks if it's less than 1 second.
     *
     * @param {void} No parameters
     * @return {boolean} true if time passed is less than 1 second, false otherwise
     */
    isHurt() {
        this.timepassed = new Date().getTime() - this.lastHit;
        this.timepassed = this.timepassed / 1000;
        return this.timepassed < 1;
    }


    /**
     * Decreases the end boss energy by 10 points and updates the last hit time if the boss is still alive.
     *
     * @param {void} No parameters
     * @return {void} No return value
     */
    hittingEndbossWithBottle(){
        world.endboss.energyBoss -= 10;
        if(world.endboss.energyBoss <= 0) {
            world.endboss.energyBoss = 0;
            this.isDeadBoss();
        } else {
            world.endboss.lastHitEndboss = new Date().getTime();
        }
    }

    
    /**
     * Calculates the time passed since the end boss was last hit and checks if it's less than 0.5 seconds.
     *
     * @param {void} No parameters
     * @return {boolean} true if time passed is less than 0.5 seconds, false otherwise
     */
    isHurtEndboss() {
        const currentTime = new Date().getTime();
        const timepassedEndboss = (currentTime - world.endboss.lastHitEndboss) / 1000;
        return timepassedEndboss < 0.5;
    }

    
    /**
     * Checks if the object is dead based on its energy level.
     *
     * @param {void} No parameters
     * @return {boolean} true if the object is dead, false otherwise
     */
    isDead() {
        return this.energy == 0;
    }


    /**
     * Checks if the boss is dead by comparing the energyBoss property with 0.
     *
     * @param {void} No parameters
     * @return {boolean} true if boss is dead, false otherwise
     */
    isDeadBoss() {
        return this.energyBoss == 0;
    }
}