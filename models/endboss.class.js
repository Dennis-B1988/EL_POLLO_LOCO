class Endboss extends MovableObject {
    y = -20
    x = 2500;
    height = 500
    width = 250
    characterNearEndboss;
    IMAGES_ALERT = [
        './assets/img/4_enemie_boss_chicken/2_alert/G5.png',
        './assets/img/4_enemie_boss_chicken/2_alert/G6.png',
        './assets/img/4_enemie_boss_chicken/2_alert/G7.png',
        './assets/img/4_enemie_boss_chicken/2_alert/G8.png',
        './assets/img/4_enemie_boss_chicken/2_alert/G9.png',
        './assets/img/4_enemie_boss_chicken/2_alert/G10.png',
        './assets/img/4_enemie_boss_chicken/2_alert/G11.png',
        './assets/img/4_enemie_boss_chicken/2_alert/G12.png',
    ];
    IMAGES_WALKING = [
        './assets/img/4_enemie_boss_chicken/1_walk/G1.png',
        './assets/img/4_enemie_boss_chicken/1_walk/G2.png',
        './assets/img/4_enemie_boss_chicken/1_walk/G3.png',
        './assets/img/4_enemie_boss_chicken/1_walk/G4.png'
    ];
    IMAGES_ATTACK = [
        './assets/img/4_enemie_boss_chicken/3_attack/G13.png',
        './assets/img/4_enemie_boss_chicken/3_attack/G14.png',
        './assets/img/4_enemie_boss_chicken/3_attack/G15.png',
        './assets/img/4_enemie_boss_chicken/3_attack/G16.png',
        './assets/img/4_enemie_boss_chicken/3_attack/G17.png',
        './assets/img/4_enemie_boss_chicken/3_attack/G18.png',
        './assets/img/4_enemie_boss_chicken/3_attack/G19.png',
        './assets/img/4_enemie_boss_chicken/3_attack/G20.png'
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
    bossAlerted = false;

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.characterNearEndboss = this.x - world.character.x;
            // if(!this.bossAlerted && this.characterNearEndboss < 150) {
            //     this.bossAlerted = true;
            // }
        }, 10);
        

        setInterval(() => {
            if(!this.bossAlerted && this.characterNearEndboss < 150) {
                this.playAnimation(this.IMAGES_ALERT);
            }
        }, 1000 / 1);


        setInterval(() => {
            if(world.movableObject.energyBoss === 0) {
                this.playAnimation(this.IMAGES_DEAD);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    

        setInterval(() => {
            if(world.movableObject.energyBoss === 0) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if(!this.bossAlerted && this.characterNearEndboss < 150) {
                
                setTimeout(() => {
                    this.nearEndboss();
                this.bossAlerted = true;
                }, 2000);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 300);
    
    }
    


    // nearEndboss() {
    //     setInterval(() => {
    //         this.playAnimation(this.IMAGES_ALERT);
    //     }, 2000);
    //     clearInterval(this.nearEndboss());
    // }

}