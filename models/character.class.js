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


    deadHurtMove(){
        setInterval(() => {
            if(this.isDead()) {
                this.playDeadSound();
                this.playAnimation(this.IMAGES_DEAD);
                this.world.gameLost();
            } else if (this.isHurt()) {
                this.playHurtSound();
                this.playAnimation(this.IMAGES_HURT);
            } else {
                this.characterJumpOrWalk();
            }
        }, 100);
    }


    sleepOrIdle(){
        setInterval(() => {
            if(this.timeDifference > 15000) {
                this.playSnoringSound();
                this.playAnimation(this.IMAGES_SLEEPING);
                this.sleeping = true;
            } else if(!this.isAboveGround() && !this.world.keyboard.RIGHT && !this.world.keyboard.LEFT) {
                this.characterIdle();
            }
        }, 1000 / 1);
    }


    characterSleeping(){
        setInterval(() => {
            this.playAnimation(this.IMAGES_SLEEPING);
        }, 1000 / 5);
    }


    characterMovement(){
        this.world.walking_sound.pause();
        this.characterMovementRight(); 
        this.characterMovementLeft();
        this.characterMovementJump();
    }



    characterMovementRight(){
        if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x && !this.isDead()) {
            this.moveRight();
            this.playWalkingSound();
        } 
    }


    characterMovementLeft(){
        if(this.world.keyboard.LEFT && this.x > 0 && !this.isDead()) {
            this.moveLeft();
            this.playWalkingSound();
            this.otherDirection = true;
        }
    }


    characterMovementJump(){
        if(this.world.keyboard.UP && !this.isAboveGround() && !this.isDead() || this.world.keyboard.SPACE && !this.isAboveGround() && !this.isDead()) {
            this.jump();
        } 
    }

    
    characterJumpOrWalk(){
        if(this.isAboveGround()) {
            this.playJumpingSound();
            this.playAnimation(this.IMAGES_JUMPING);
            this.lastIdleTime = new Date().getTime();
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_WALKING);
            this.lastIdleTime = new Date().getTime();
        }  
    }


    characterHitByEndboss(){
        if(this.world.movableObject.energyBoss > 0 && !this.isDead()) {
            this.knockback();
        }
    }


    characterIdle(){
        if(!this.isAboveGround() && !this.world.keyboard.RIGHT && !this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_IDLE);
        }
    }


    checkCurrentTime(){
        this.currentTime = new Date().getTime();
        return this.currentTime;
    }


    checkTimeSince(){
        this.timeDifference = this.currentTime - this.lastIdleTime;
        return this.timeDifference > 15000;
    }


    playWalkingSound(){
        if(this.world.soundOn && !this.isAboveGround()) {
            this.world.walking_sound.play();
            this.world.snoring_sound.pause();
        }
    }


    playJumpingSound(){
        if(this.world.soundOn){
            this.world.jump_sound.play();
            this.world.snoring_sound.pause();
        }
    }


    playSnoringSound(){
        if(this.world.soundOn){
            this.world.snoring_sound.play();
        }
    }


    playHurtSound(){
        if(this.world.soundOn){
            this.world.hit_sound.play();
            this.world.snoring_sound.pause();
        }
    }


    playDeadSound(){
        if(this.world.soundOn){
            this.world.dead_sound.play();
            this.world.snoring_sound.pause();
        }
    }
}