class Character extends MovableObject {
    x = 100;
    y = 240;
    height = 200;
    width = 100;
    speed = 10;
    currentTime = new Date().getTime();
    lastIdleTime = new Date().getTime();
    timeDifference = 0;
    IMAGES_IDLE = [
        './assets/img/2_character_pepe/1_idle/idle/I-8.png',
        './assets/img/2_character_pepe/1_idle/idle/I-9.png',
        './assets/img/2_character_pepe/1_idle/idle/I-10.png'
    ];
    IMAGES_WALKING = [
        './assets/img/2_character_pepe/2_walk/W-21.png',
        './assets/img/2_character_pepe/2_walk/W-22.png',
        './assets/img/2_character_pepe/2_walk/W-23.png',
        './assets/img/2_character_pepe/2_walk/W-24.png',
        './assets/img/2_character_pepe/2_walk/W-25.png',
        './assets/img/2_character_pepe/2_walk/W-26.png',
    ];
    IMAGES_JUMPING = [
        './assets/img/2_character_pepe/3_jump/J-31.png',
        './assets/img/2_character_pepe/3_jump/J-32.png',
        './assets/img/2_character_pepe/3_jump/J-33.png',
        './assets/img/2_character_pepe/3_jump/J-34.png',
        './assets/img/2_character_pepe/3_jump/J-35.png',
        './assets/img/2_character_pepe/3_jump/J-36.png',
        './assets/img/2_character_pepe/3_jump/J-37.png',
        './assets/img/2_character_pepe/3_jump/J-38.png',
        './assets/img/2_character_pepe/3_jump/J-39.png',
    ];
    IMAGES_HURT = [
        './assets/img/2_character_pepe/4_hurt/H-41.png',
        './assets/img/2_character_pepe/4_hurt/H-42.png',
        './assets/img/2_character_pepe/4_hurt/H-43.png',
    ]
    IMAGES_DEAD = [
        './assets/img/2_character_pepe/5_dead/D-51.png',
        './assets/img/2_character_pepe/5_dead/D-52.png',
        './assets/img/2_character_pepe/5_dead/D-53.png',
        './assets/img/2_character_pepe/5_dead/D-54.png',
        './assets/img/2_character_pepe/5_dead/D-55.png',
        './assets/img/2_character_pepe/5_dead/D-56.png',
        './assets/img/2_character_pepe/5_dead/D-57.png',
    ];
    IMAGES_SLEEPING = [
        './assets/img/2_character_pepe/1_idle/long_idle/I-11.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-12.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-13.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-14.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-15.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-16.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-17.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-18.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-19.png',
        './assets/img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];
    world;
    offset = {
        top: 80,
        bottom: 5,
        left: 20,
        right: 20
    };
    sleeping = false;


    /**
     * Constructor function for initializing a character object.
     *
     * @return {void} No return value
     */
    constructor() {
        super().loadImage('./assets/img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_SLEEPING);
        this.applyGravity();
        this.animate();
    }


    /**
     * Function that animates the character's movement and camera position.
     *
     * @return {void} No return value
     */
    animate() {    
        setInterval(() => { 
            this.characterMovement();
            this.world.camera_x = -this.x + 100;
            this.checkCurrentTime();
            this.checkTimeSince();
        }, 1000 / 60);
 
        this.sleepOrIdle();
        this.deadHurtMove();   
    }


    /**
     * Executes actions based on character's state, such as playing sounds and animations.
     *
     */
    deadHurtMove(){
        setInterval(() => {
            if(this.isDead()) {
                this.world.audio.playDeadSound();
                this.playAnimation(this.IMAGES_DEAD);
                this.world.gameLost();
            } else if (this.isHurt()) {
                this.world.audio.playHurtSound();
                this.playAnimation(this.IMAGES_HURT);
            } else {
                this.characterJumpOrWalk();
            }
        }, 100);
    }


    /**
     * Function that handles character's sleep or idle state based on time difference and character's actions.
     *
     * @return {void} No return value
     */
    sleepOrIdle(){
        setInterval(() => {
            if(this.timeDifference > 15000) {
                this.world.audio.playSnoringSound();
                this.playAnimation(this.IMAGES_SLEEPING);
                this.sleeping = true;
            } else if(!this.isAboveGround() && !this.world.keyboard.RIGHT && !this.world.keyboard.LEFT) {
                this.characterIdle();
            }
        }, 1000 / 1);
    }


    /**
     * Function that handles the character's sleeping animation.
     *
     * @return {void} No return value
     */
    characterSleeping(){
        setInterval(() => {
            this.playAnimation(this.IMAGES_SLEEPING);
        }, 1000 / 5);
    }


    /**
     * Handles the character's movement by pausing walking sound and triggering specific movement actions.
     *
     * @param None
     * @return None
     */
    characterMovement(){
        this.world.audio.walking_sound.pause();
        this.characterMovementRight(); 
        this.characterMovementLeft();
        this.characterMovementJump();
    }


    /**
     * Moves the character to the right if the right arrow key is pressed and character is not dead.
     *
     * @return {void} No return value
     */
    characterMovementRight(){
        if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x && !this.isDead()) {
            this.moveRight();
            this.world.audio.playWalkingSound();
        } 
    }


    /**
     * Moves the character to the left if the left arrow key is pressed and character is not dead.
     *
     * @param None
     * @return {void} No return value
     */
    characterMovementLeft(){
        if(this.world.keyboard.LEFT && this.x > 0 && !this.isDead()) {
            this.moveLeft();
            this.world.audio.playWalkingSound();
            this.otherDirection = true;
        }
    }


    /**
     * Handles the character's jump movement based on keyboard input and character state.
     *
     * @param None
     * @return None
     */
    characterMovementJump(){
        if(this.world.keyboard.UP && !this.isAboveGround() && !this.isDead() || this.world.keyboard.SPACE && !this.isAboveGround() && !this.isDead()) {
            this.jump();
        } 
    }

    
    /**
     * Handles the character's jumping or walking movement based on character state and keyboard input.
     *
     * @param None
     * @return None
     */
    characterJumpOrWalk(){
        if(this.isAboveGround()) {
            this.world.audio.playJumpingSound();
            this.playAnimation(this.IMAGES_JUMPING);
            this.lastIdleTime = new Date().getTime();
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_WALKING);
            this.lastIdleTime = new Date().getTime();
        }  
    }


    /**
     * Handles character being hit by the end boss if the boss has energy and the character is not dead.
     *
     * @param None
     * @return None
     */
    characterHitByEndboss(){
        if(this.world.movableObject.energyBoss > 0 && !this.isDead()) {
            this.knockback();
        }
    }


    /**
     * Function that handles the character's idle state when not above ground and no directional keys are pressed.
     *
     * @param None
     * @return None
     */
    characterIdle(){
        if(!this.isAboveGround() && !this.world.keyboard.RIGHT && !this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_IDLE);
        }
    }


    /**
     * Sets the current time based on the system time.
     *
     * @param None
     * @return Number The current time in milliseconds.
     */
    checkCurrentTime(){
        this.currentTime = new Date().getTime();
        return this.currentTime;
    }


    /**
     * Calculates the time difference between the current time and the last idle time.
     *
     * @param None
     * @return {boolean} Indicates if the time difference is greater than 15000
     */
    checkTimeSince(){
        this.timeDifference = this.currentTime - this.lastIdleTime;
        return this.timeDifference > 15000;
    } 
}