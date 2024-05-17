class Chicken extends MovableObject {
    y = 355;
    height = 75;
    width = 75;
    IMAGES_WALKING = [
        './assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];
    IMAGES_DEAD = [
        './assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    };


    /**
     * Constructor function for initializing a Chicken object with the specified id and x-coordinate.
     *
     * @param {number} id - The unique identifier of the chicken.
     * @param {number} x - The x-coordinate position of the chicken.
     * @return {void} No return value
     */
    constructor(id, x) {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.id = id;
        this.x = x;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }


    /**
     * Function that handles the animations of the chicken object based on its life state.
     *
     * @param None
     * @return None
     */
    animate() {
        setInterval(() => {
            if(this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            }
        }, 300);

        setInterval(() => {
            this.walking();
        }, 100);
    }


    /**
     * Function that handles the walking behavior of the chicken object when it's not dead.
     *
     * @param None
     * @return None
     */
    walking(){
        if(!this.isDead()) {
            this.moveLeft();
            this.playAnimation(this.IMAGES_WALKING);
        }
    }
}