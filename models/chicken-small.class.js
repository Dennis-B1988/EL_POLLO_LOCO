class SmallChicken extends MovableObject {
    y = 375;
    height = 60;
    width = 60;
    IMAGES_WALKING = [
        './assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        './assets/img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        './assets/img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];
    offset = {
        top: 5,
        bottom: 5,
        left: 7,
        right: 7
    };


    constructor() {
        super().loadImage('./assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);

        // this.x = 720 - Math.random() * 200;
        this.x = 500 - Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.25;

        this.animate();
    }

    animate() {   
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 100);
    }

}