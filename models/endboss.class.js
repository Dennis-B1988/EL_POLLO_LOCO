class Endboss extends MovableObject {
    y = -20
    height = 500
    width = 250
    IMAGES_WALKING = [
        './assets/img/4_enemie_boss_chicken/1_walk/G1.png',
        './assets/img/4_enemie_boss_chicken/1_walk/G2.png',
        './assets/img/4_enemie_boss_chicken/1_walk/G3.png',
        './assets/img/4_enemie_boss_chicken/1_walk/G4.png'
    ];
    IMAGES_DEAD = [
        './assets/img/4_enemie_boss_chicken/5_dead/G24.png',
        './assets/img/4_enemie_boss_chicken/5_dead/G25.png',
        './assets/img/4_enemie_boss_chicken/5_dead/G26.png'
    ];
    offset = {
        top: 0,
        bottom: 0,
        left: 30,
        right: 0
    };

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        // this.x = 700;
        this.x = 2500;
        this.animate();
    }

    animate() {
        // setInterval(() => {
        //     this.playAnimation(this.IMAGES_WALKING);
        // }, 100);
    

    setInterval(() => {
            if(this.energyBoss === 0) {
                this.playAnimation(this.IMAGES_DEAD);
            }  else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 100);
    }

}