class ThrowableObject extends MovableObject {
    IMAGES_THROWING = [
        './assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        './assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        './assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        './assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];
    IMAGES_SPLASH = [
        './assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        './assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        './assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        './assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        './assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        './assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];
    offset = {
        top: 5,
        bottom: 5,
        left: 20,
        right: 20
    };


    /**
     * Constructor function for creating a ThrowableObject at a specified position.
     *
     * @param {number} x - The x-coordinate position of the object.
     * @param {number} y - The y-coordinate position of the object.
     * @return {void} No return value
     */
    constructor(x, y) {
        super().loadImage(this.IMAGES_THROWING[0]);
        this.loadImages(this.IMAGES_THROWING);
        this.loadImages(this.IMAGES_SPLASH);
        this.x = x;
        this.y = y;
        this.height = 75;
        this.width = 75;
        this.throw();
        this.animate();
    }


    /**
     * Executes animations based on the object's position.
     *
     * @param {void} No parameters
     * @return {void} No return value
     */
    animate() {
        setInterval(() => { 
            if(this.y >= 420) {
                this.playAnimation(this.IMAGES_SPLASH);
            } else {
                this.playAnimation(this.IMAGES_THROWING);
            }
        }, 1000 / 60);
    }


    /**
     * Set the initial speed, apply gravity, and move the object based on its position.
     *
     * @return {void} No return value
     */
    throw(){
        this.speedY = 0;
        this.applyGravity();
        setInterval(() => {
            if(this.y < 420){
                this.x += 35;
            } else {
                this.x += 0;
                this.y += 0;
            }
        }, 25)
    } 
}