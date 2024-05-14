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


    constructor() {
        super().loadImage('./assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        // this.x = 720 - Math.random() * 200;
        this.x = 2000 - Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.25;

        this.animate();
    }

    animate() {   
        

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 100);
    }


    chickenDead(){
        setInterval(() => {
            this.playAnimation(this.IMAGES_DEAD);     
        }, 1000 / 60);
    }

    
    
}