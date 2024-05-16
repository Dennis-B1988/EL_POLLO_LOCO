class Endboss extends MovableObject {
    y = -20
    x = 4300;
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
    IMAGES_HURT = [
        './assets/img/4_enemie_boss_chicken/4_hurt/G21.png',
        './assets/img/4_enemie_boss_chicken/4_hurt/G22.png',
        './assets/img/4_enemie_boss_chicken/4_hurt/G23.png'
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
        this.loadImages(this.IMAGES_HURT);
        this.speed = 20;
        this.animate();
    }

    animate() {
        let i = 0;

        setInterval(() => {
            if(world.movableObject.energyBoss === 0) {
                this.playAnimation(this.IMAGES_DEAD);
                document.querySelector('.game-won').classList.remove('none');
                if(world.coinStatus.coinsAmount === 35){
                    document.querySelector('.won').classList.add('none');
                    document.querySelector('.won-all-coins').classList.remove('none');
                } else {
                    document.querySelector('.won').classList.remove('none');
                    document.querySelector('.won-all-coins').classList.add('none');
                }
                setTimeout(() => {
                    clearAllIntervals();
                }, 3000);
            }
        }, 200);


        setInterval(() => {
            if(i < 10) {
                this.playAnimation(this.IMAGES_ALERT);
            } else if(this.isHurtEndboss()){
                this.playAnimation(this.IMAGES_HURT);
            } else if(this.x - world.character.x < 99) {
                this.playAnimation(this.IMAGES_ATTACK);
            } else if(this.bossAlerted == true && !this.isHurtEndboss() && world.movableObject.energyBoss !== 0) {
                // this.moveLeft();
                this.playAnimation(this.IMAGES_WALKING);
            }
            i++;
            if(world.character.x > 3750 && !this.bossAlerted) {
                this.bossAlerted = true;
                i = 0;
            }
        }, 300);
    

    
    }
    


}