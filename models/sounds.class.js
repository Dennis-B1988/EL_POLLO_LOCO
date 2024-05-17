class Sounds {
    background_sound = new Audio('./assets/audio/background/music.mp3');
    walking_sound = new Audio('./assets/audio/character/walk.wav');
    hit_sound = new Audio('./assets/audio/character/hit.mp3');
    jump_sound = new Audio('./assets/audio/character/jump.mp3');
    dead_sound = new Audio('./assets/audio/character/death.mp3');
    snoring_sound = new Audio('./assets/audio/character/snoring.mp3');
    sound_bottle_break = new Audio('./assets/audio/bottle/bottle-break.mp3');
    enemy_hit_sound = new Audio('./assets/audio/enemies/chicken-hit.mp3');
    endboss_sound = new Audio('./assets/audio/enemies/boss-music.mp3');
    endboss_alerted_sound = new Audio('./assets/audio/enemies/endboss-alerted.mp3');
    endboss_hurt = new Audio('./assets/audio/enemies/endboss-hurt.mp3');
    endboss_dead = new Audio('./assets/audio/enemies/endboss-dead.mp3');
    characterDead = false;


    constructor() {
    }


    stopSounds() {
        soundOn = false;
        this.backgroundSounds();
        this.characterSounds();
        this.sound_bottle_break.pause();
        this.enemySounds();
    }


    resumeSounds() {
        soundOn = true;
        this.background_sound.play();
    }


    backgroundSounds() {
        this.background_sound.pause();
        this.endboss_sound.pause();
    }


    characterSounds(){
        this.walking_sound.pause();
        this.jump_sound.pause();
        this.hit_sound.pause();
        this.dead_sound.pause();
        this.snoring_sound.pause();
    }


    enemySounds(){
        this.enemy_hit_sound.pause();
        this.endboss_sound.pause();
        this.endboss_alerted_sound.pause();
        this.endboss_hurt.pause();
        this.endboss_dead.pause();
    }


    backgroundMusic(){
        this.background_sound.play();
        this.background_sound.loop = true;
        this.background_sound.volume = 0.2;
    }


    playWalkingSound(){
        if(soundOn && !world.character.isAboveGround()) {
            this.walking_sound.play();
            this.snoring_sound.pause();
        }
    }


    playJumpingSound(){
        if(soundOn){
            this.jump_sound.play();
            this.snoring_sound.pause();
        }
    }


    playSnoringSound(){
        if(soundOn){
            this.snoring_sound.play();
        }
    }


    playHurtSound(){
        if(soundOn){
            this.hit_sound.play();
            this.snoring_sound.pause();
        }
    }


    playDeadSound(){
        if(soundOn && this.characterDead == false){
            this.dead_sound.play();
            this.snoring_sound.pause();
            this.characterDead = true;
        }
    }

    
    playNormalEnemyHitSound(){
        if(soundOn){
            this.enemy_hit_sound.play();
        }
    }


    playBottleShatterSound(){
        if(soundOn){
            this.sound_bottle_break.play();
        }
    }


    playEndbossSound(){
        if(soundOn){
            this.background_sound.pause();
            this.endboss_sound.play();
            this.endboss_sound.loop = true;
            this.endboss_sound.volume = 0.2;
        }
    }


    playEndbossAlertedSound(){
        if(soundOn){
            this.endboss_alerted_sound.play();
        }
    }


    playEndbossHurtSound(){
        if(soundOn){
            this.endboss_hurt.play();
        }
    }


    playEndbossDeadSound(){
        if(soundOn){
            this.endboss_dead.play();
        }
    }
}