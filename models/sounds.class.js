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


    /**
     * Stops all sounds, pauses the bottle break sound, and manages enemy sounds.
     *
     * @param None
     * @return None
     */
    stopSounds() {
        soundOn = false;
        this.backgroundSounds();
        this.characterSounds();
        this.sound_bottle_break.pause();
        this.enemySounds();
    }


    /**
     * Resumes playing the background sound.
     *
     */
    resumeSounds() {
        soundOn = true;
        this.background_sound.play();
    }


    /**
     * Pauses the background sound and the endboss sound.
     *
     * @param None
     * @return None
     */
    backgroundSounds() {
        this.background_sound.pause();
        this.endboss_sound.pause();
    }


    /**
     * Pauses all character sounds including walking, jumping, hitting, death, and snoring sounds.
     *
     * @param None
     * @return None
     */
    characterSounds(){
        this.walking_sound.pause();
        this.jump_sound.pause();
        this.hit_sound.pause();
        this.dead_sound.pause();
        this.snoring_sound.pause();
    }


    /**
     * Pauses all enemy-related sounds including enemy_hit, endboss, endboss_alerted, endboss_hurt, and endboss_dead sounds.
     *
     * @param None
     * @return None
     */
    enemySounds(){
        this.enemy_hit_sound.pause();
        this.endboss_sound.pause();
        this.endboss_alerted_sound.pause();
        this.endboss_hurt.pause();
        this.endboss_dead.pause();
    }


    /**
     * Plays the background music, sets it to loop, and adjusts the volume.
     *
     */
    backgroundMusic(){
        if(soundOn){
            this.background_sound.play();
            this.background_sound.loop = true;
            this.background_sound.volume = 0.4;
        }
    }


    /**
     * Plays the walking sound if sound is on and the character is not above ground.
     *
     * @param None
     * @return None
     */
    playWalkingSound(){
        if(soundOn && !world.character.isAboveGround()) {
            this.walking_sound.play();
            this.snoring_sound.pause();
        }
    }


    /**
     * Plays the jumping sound if sound is on, and pauses the snoring sound.
     *
     * @param None
     * @return None
     */
    playJumpingSound(){
        if(soundOn){
            this.jump_sound.play();
            this.snoring_sound.pause();
        }
    }


    /**
     * Plays the snoring sound if sound is on.
     *
     * @param None
     * @return None
     */
    playSnoringSound(){
        if(soundOn){
            this.snoring_sound.play();
        }
    }


    /**
     * Plays the hurt sound if sound is on and pauses the snoring sound.
     *
     * @param None
     * @return None
     */
    playHurtSound(){
        if(soundOn){
            this.hit_sound.play();
            this.snoring_sound.pause();
        }
    }


    /**
     * Plays the dead sound if sound is on and the character is not dead. Pauses the snoring sound and sets characterDead to true.
     *
     * @param None
     * @return None
     */
    playDeadSound(){
        if(soundOn && this.characterDead == false){
            this.dead_sound.play();
            this.snoring_sound.pause();
            this.characterDead = true;
        }
    }

    
    /**
     * Plays the normal enemy hit sound if sound is on.
     *
     * @param None
     * @return None
     */
    playNormalEnemyHitSound(){
        if(soundOn){
            this.enemy_hit_sound.play();
        }
    }


    /**
     * Plays the bottle shatter sound if sound is on.
     *
     * @param None
     * @return None
     */
    playBottleShatterSound(){
        if(soundOn){
            this.sound_bottle_break.play();
        }
    }


    /**
     * Plays the endboss sound if sound is on. Pauses the background sound, plays the endboss sound, sets it to loop, and adjusts the volume.
     *
     * @param None
     * @return None
     */
    playEndbossSound(){
        if(soundOn){
            this.background_sound.pause();
            this.endboss_sound.play();
            this.endboss_sound.loop = true;
            this.endboss_sound.volume = 0.4;
        }
    }


    /**
     * Plays the endboss alerted sound if sound is on.
     *
     * @param None
     * @return None
     */
    playEndbossAlertedSound(){
        if(soundOn){
            this.endboss_alerted_sound.play();
        }
    }


    /**
     * Plays the endboss hurt sound if sound is on.
     *
     * @param None
     * @return None
     */
    playEndbossHurtSound(){
        if(soundOn){
            this.endboss_hurt.play();
        }
    }


    /**
     * Plays the endboss dead sound if sound is on.
     *
     * @param None
     * @return None
     */
    playEndbossDeadSound(){
        if(soundOn){
            this.endboss_dead.play();
        }
    }
}