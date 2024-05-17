class Damage extends MovableObject {
    
    /**
     * Sets up a recurring interval to check collisions with normal, small, and endboss chickens.
     *
     * @param None
     * @return None
     */
    collition() {
        setInterval(() => {
            this.checkCollisionsNormalChicken();
            this.checkCollisionsSmallChicken();
            this.checkCollisionsEndboss();
            this.collitionDamageToEndboss();
        }, 100);
    }


    /**
     * Sets up a recurring interval to check damage collisions with enemies.
     *
     * @param None
     * @return None
     */
    collitionDamageToEnemy() {
        setInterval(() => {
            this.checkDamageToEnemyCollisions();
        }, 25);
    }


    /**
     * Loops through normal chickens in the level, checks collision with character, 
     * and performs actions accordingly.
     *
     * @param None
     * @return None
     */
    checkCollisionsNormalChicken() {
        world.level.normalChicken.forEach((enemy) => {
            if(world.character.isColliding(enemy) && world.character.y > 200 && !enemy.isDead()) {
                world.character.isHitNormalChicken();
                world.statusBar.setPercentage(world.character.energy);
            }
        })       
    }


    /**
     * Loops through small chickens in the level, checks collision with character, 
     * and performs actions accordingly.
     *
     * @param None
     * @return None
     */
    checkCollisionsSmallChicken() {
        world.level.smallChicken.forEach((enemy) => {
            if(world.character.isColliding(enemy) && world.character.y > 200 && !enemy.isDead()) {
                world.character.isHitSmallChicken();
                world.statusBar.setPercentage(world.character.energy);
            }
        })       
    }


    /**
     * Loops through endboss enemies in the level, checks collision with character, 
     * and performs actions accordingly.
     *
     * @param None
     * @return None
     */
    checkCollisionsEndboss() {
        world.level.endboss.forEach((enemy) => {
            if(world.character.isColliding(enemy)) {
                world.character.isHitEndboss();
                world.statusBar.setPercentage(world.character.energy);
                world.character.characterHitByEndboss();
            }
        })       
    }


    /**
     * A function that checks collision with enemies and performs appropriate actions.
     *
     * @param None
     * @return None
     */
    checkDamageToEnemyCollisions() {
        this.bottleHitsGround();
        this.killNormalChicken();
        this.killSmallChicken();
        
    }


    /**
     * A function that handles bottles hitting the ground, triggers sound effects, 
     * and removes the bottle from the throwable objects array if it hits the ground.
     *
     * @param None
     * @return None
     */
    bottleHitsGround() {
        world.throwableObjects.forEach((bottle, index) => {
            if(bottle.y >= 420) {
                world.audio.playBottleShatterSound();
                bottle.y += 0;
                bottle.speedY = 0;
                setTimeout(() => {
                    world.throwableObjects.splice(index, 1);
                    world.audio.sound_bottle_break.pause();
                    world.audio.sound_bottle_break.currentTime = 0;
                }, 100) 
            }
        })
    }


    /**
     * Loops through normal chickens in the level, checks collision with character, 
     * and performs actions accordingly.
     *
     * @param None
     * @return None
     */
    killNormalChicken(){
        world.level.normalChicken.forEach((enemy, enemyIndex) => {
            if(world.character.isColliding(enemy) && world.character.y < 200 && world.character.speedY < 0) {
                this.normalChickenDead(enemy, enemyIndex);
            }world
            if(world.throwableObjects.length > 0) {
                this.bottleNormalChicken(enemy);
            }
        })
    }


    /**
     * Executes specific actions when the bottle hits a normal chicken,
     * including playing sounds, handling collision, and removing the bottle.
     *
     * @param {Object} enemy - The normal chicken enemy object
     * @param {number} enemyIndex - Index of the normal chicken in the array
     * @return {undefined}
     */
    bottleNormalChicken(enemy, enemyIndex){
        world.throwableObjects.forEach((bottle, bottleIndex) => {
            if(bottle.isColliding(enemy)) {
                world.audio.playBottleShatterSound();
                this.normalChickenDead(enemy, enemyIndex);
                world.throwableObjects.splice(bottleIndex, 1);
                setTimeout(() => {
                    world.audio.sound_bottle_break.pause();
                    world.audio.sound_bottle_break.currentTime = 0;
                }, 1000);
            }
        });
    }


    /**
     * Handles the actions to be executed when a normal chicken enemy dies,
     * including updating energy, playing hit sound, and removing the chicken after a delay.
     *
     * @param {Object} enemy - The normal chicken enemy that died
     * @return {undefined}
     */
    normalChickenDead(enemy) {
        enemy.energy = 0;
        world.audio.playNormalEnemyHitSound();
        setTimeout(() => {
            world.level.normalChicken = world.level.normalChicken.filter(chicken => chicken.id !== enemy.id);
        }, 500);
    }


    /**
     * Loops through small chickens in the level, checks collision with character, 
     * and performs actions accordingly.
     *
     * @param None
     * @return None
     */
    killSmallChicken(){
        world.level.smallChicken.forEach((enemy, enemyIndex) => {
            if(world.character.isColliding(enemy) && world.character.y < 220 && world.character.speedY < 0) {
                this.smallChickenDead(enemy, enemyIndex)
            }
            if(world.throwableObjects.length > 0) {
                this.bottleSmallChicken(enemy, enemyIndex);
            }
        })
    }
    
    
    /**
     * Executes specific actions when the bottle hits a small chicken, 
     * including playing sounds, handling collision, and removing the bottle.
     *
     * @param {Object} enemy - The small chicken enemy object
     * @param {number} enemyIndex - Index of the small chicken in the array
     * @return {undefined}
     */
    bottleSmallChicken(enemy, enemyIndex){
        world.throwableObjects.forEach((bottle, bottleIndex) => {
            if(bottle.isColliding(enemy)) {
                world.audio.playBottleShatterSound();
                this.smallChickenDead(enemy, enemyIndex);
                world.throwableObjects.splice(bottleIndex, 1);
                setTimeout(() => {
                    world.audio.sound_bottle_break.pause();
                    world.audio.sound_bottle_break.currentTime = 0;
                }, 1000);   
            } 
        });
    }


    /**
     * Handles the actions to be executed when a small chicken enemy dies,
     * including updating energy, playing hit sound, and removing the chicken after a delay.
     *
     * @param {Object} enemy - The small chicken enemy that died
     * @return {undefined}
     */
    smallChickenDead(enemy) {
        enemy.energy = 0;
        world.audio.playNormalEnemyHitSound();
        setTimeout(() => {
            world.level.smallChicken = world.level.smallChicken.filter(chicken => chicken.id !== enemy.id);
        }, 500);
    }


    /**
     * Loops through the endboss enemies in the level and initiates bottleEndboss action 
     * if there are throwableObjects available.
     *
     * @param None
     * @return None
     */
    collitionDamageToEndboss() {
        setInterval(() => {
            this.killEndboss();
        }, 25);
    }
    
    /**
     * Loops through the endboss enemies in the level and calls the bottleEndboss function
     * if there are throwableObjects available.
     *
     * @param None
     * @return None
     */

    killEndboss(){
        world.level.endboss.forEach((enemy) => {
            if(world.throwableObjects.length > 0) {
                this.bottleEndboss(enemy);
            }
        })
    }


    /**
     * Loops through throwable objects, checks collision with the endboss, 
     * triggers actions such as playing sounds and updating boss percentage, 
     * and removes the bottle if a collision occurs.
     *
     * @param {Object} enemy - The endboss enemy object
     * @return {undefined}
     */
    bottleEndboss(enemy){
        world.throwableObjects.forEach((bottle, bottleIndex) => {
            if(bottle.isColliding(enemy)) {
                world.audio.playBottleShatterSound();
                this.hittingEndbossWithBottle();
                world.statusBarEndboss.bossPercentage(world.endboss.energyBoss);
                world.throwableObjects.splice(bottleIndex, 1); 
                setTimeout(() => {
                    world.audio.sound_bottle_break.pause();
                    world.audio.sound_bottle_break.currentTime = 0; 
                }, 1000);
            }
        });
    }
}