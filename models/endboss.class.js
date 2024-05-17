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
    bossIsDead = false;
    energyBoss = 100;
    lastHitEndboss = 0;
    timepassedEndboss = 0;


    /**
     * Constructor function for initializing the Endboss object with initial images and animations.
     *
     * @return {void} No return value
     */
    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.speed = 50;
        this.animate();
    }
    

    /**
     * Function that animates the endboss behavior based on different conditions.
     *
     * @param None
     * @return None
     */
    animate() {
        let i = 0;
        this.bossDead();
        setInterval(() => {
            this.bossCurrentAnimation(i);
            i++;
            if(world.character.x > 3750 && !this.bossAlerted) {
                this.endbossSounds();
                this.bossAlerted = true;
                i = 0;
            }
            this.stopMoving();
        }, 300);
    }


    /**
     * Executes the current animation for the boss based on the provided index.
     *
     * @param {number} i - The index used to determine the current animation state
     * @return {void} No return value
     */
    bossCurrentAnimation(i){
        if(i < 10) {
            this.playAnimation(this.IMAGES_ALERT);
        } else if(this.isHurtEndboss()){
            this.playAnimation(this.IMAGES_HURT);
            world.audio.playEndbossHurtSound();
        } else if(this.x - world.character.x < 90) {
            this.moveLeft();
            this.playAnimation(this.IMAGES_ATTACK);
        } else if(this.bossAlerted == true && !this.isHurtEndboss() && world.endboss.energyBoss !== 0) {
            this.moveLeft();
            this.playAnimation(this.IMAGES_WALKING);
        }
    }


    /**
     * Sets up a recurring interval to check if the endboss is dead, 
     * plays corresponding animations and sounds, and triggers game win.
     *
     * @param {void} No parameters
     * @return {void} No return value
     */
    bossDead(){
        setInterval(() => {
            if(world.endboss.energyBoss === 0) {
                this.playAnimation(this.IMAGES_DEAD);
                world.gameWon();
                if(this.bossIsDead) return;
                world.audio.playEndbossDeadSound();
                this.bossIsDead = true;
            }
        }, 200);
    }
    

    /**
     * Stops the movement of the endboss if the character is dead.
     *
     * @param {void} No parameters
     * @return {void} No return value
     */
    stopMoving() {
        if(world.character.isDead()) {
            this.speed = 0;
        }
    }


    /**
     * Plays the endboss and endboss alerted sounds.
     *
     * @param None
     * @return None
     */
    endbossSounds() {
        world.audio.playEndbossSound();
        world.audio.playEndbossAlertedSound();
    }
}