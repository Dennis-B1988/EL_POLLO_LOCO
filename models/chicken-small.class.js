class SmallChicken extends MovableObject {
    y = 375;
    height = 60;
    width = 60;
    IMAGES_WALKING = [
        './assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        './assets/img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        './assets/img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];
    IMAGES_DEAD = [
        './assets/img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];
    offset = {
        top: 5,
        bottom: 5,
        left: 7,
        right: 7
    };


    constructor(x) {
        super().loadImage('./assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x;
        this.speed = 0.15 + Math.random() * 0.25;

        this.animate();
    }

    animate() { 
        setInterval(() => {
            if(this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            }
        }, 300);

        setInterval(() => {
            if(!this.isDead()) {
                // this.moveLeft();
            this.playAnimation(this.IMAGES_WALKING);
            }
        }, 100);
    }

}