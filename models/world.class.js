class World {

    character = new Character();
    normalEnemy = new Chicken();
    level = level_1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    statusBarEndboss = new StatusBarEndboss();
    bottleStatus = new BottleStatus();
    coinStatus = new CoinStatus(20, 100);
    throwableObjects = [];
    lastThrowTime = 0;
    timeBetweenThrows = new Date().getTime();
    indexOfBottle = 0;
    movableObject = new MovableObject();
    bottleThrow = new ThrowableObject();

    background_sound = new Audio('./assets/audio/background/music.mp3');
    walking_sound = new Audio('./assets/audio/character/walk.wav');
    hit_sound = new Audio('./assets/audio/character/hit.mp3');
    jump_sound = new Audio('./assets/audio/character/jump.mp3');
    dead_sound = new Audio('./assets/audio/character/death.mp3');
    snoring_sound = new Audio('./assets/audio/character/snoring.mp3');
    sound_bottle_break = new Audio('./assets/audio/bottle/bottle-break.mp3');
    
    


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.collition();
        this.collitionDamageToEnemy();
        this.collect();
        this.ctx.font = '48px Zabras';
        this.ctx.fillStyle = '#9A3E00';
        
    }



    draw () {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.addObjectsToMap(this.level.clouds);
        this.addBottlesToMap(this.level.bottlePickUp);
        this.addCoinsToMap(this.level.coinPickUp);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarEndboss);
        this.addToMap(this.bottleStatus);
        this.addToMap(this.coinStatus);

        this.maximumBottles();

        this.coinsCurrentAmount();
        this.ctx.translate(this.camera_x, 0);
        
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.normalChicken);
        this.addObjectsToMap(this.level.smallChicken);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.throwableObjects);
        
        this.ctx.translate(-this.camera_x, 0);
        

        requestAnimationFrame(this.draw.bind(this));
    }


    setWorld() {
        this.character.world = this;
    }


    stopSounds() {
        soundOn = false;
        this.background_sound.pause(),
        this.walking_sound.pause(),
        this.jump_sound.pause(),
        this.hit_sound.pause(),
        this.dead_sound.pause(),
        this.snoring_sound.pause()
    }


    resumeSounds() {
        soundOn = true;
        this.background_sound.play()
    }


    backgroundSounds() {
        this.background_sound.pause()
    }


    characterSounds(){
        this.walking_sound.pause(),
        this.jump_sound.pause(),
        this.hit_sound.pause(),
        this.dead_sound.pause(),
        this.snoring_sound.pause()
    }


    enemySounds(){

    }


    backgroundMusic(){
        this.background_sound.play();
        this.background_sound.loop = true;
        this.background_sound.volume = 0.2;
    }


    run() {
        setInterval(() => {
            this.checkThrowableObjects(); 
        }, 100);
    }


    collition() {
        setInterval(() => {
            this.checkCollisionsNormalChicken();
            this.checkCollisionsSmallChicken();
            this.checkCollisionsEndboss();
        }, 100);
    }


    collitionDamageToEnemy() {
        setInterval(() => {
            this.checkDamageToEnemyCollisions();
        }, 25);
    }


    collect() {
        setInterval(() => {
            this.removeBottlesFromMap();
            this.removeCoinsFromMap();
        }, 50);
    }


    checkCollisionsNormalChicken() {
        this.level.normalChicken.forEach((enemy) => {
            if(this.character.isColliding(enemy) && this.character.y > 200 && !enemy.isDead()) {
                this.character.isHitNormalChicken();
                this.statusBar.setPercentage(this.character.energy);
            }
        })       
    }


    checkCollisionsSmallChicken() {
        this.level.smallChicken.forEach((enemy) => {
            if(this.character.isColliding(enemy) && this.character.y > 200 && !enemy.isDead()) {
                this.character.isHitSmallChicken();
                this.statusBar.setPercentage(this.character.energy);
            }
        })       
    }


    checkCollisionsEndboss() {
        this.level.endboss.forEach((enemy) => {
            if(this.character.isColliding(enemy)) {
                this.character.isHitEndboss();
                this.statusBar.setPercentage(this.character.energy);
                this.character.characterHitByEndboss();
            }
        })       
    }


    checkDamageToEnemyCollisions() {
        this.bottleHitsGround();
        this.killNormalChicken();
        this.killSmallChicken();
        this.killEndboss();
    }


    bottleHitsGround() {
        this.throwableObjects.forEach((bottle, index) => {
            if(bottle.y >= 420) {
                console.log('bottle hits ground');
                this.sound_bottle_break.play();
                bottle.y += 0;
                bottle.speedY = 0;
                setTimeout(() => {
                    this.throwableObjects.splice(index, 1);
                    this.sound_bottle_break.pause();
                    this.sound_bottle_break.currentTime = 0;
                }, 100)
                
            }
        })
    }


    killNormalChicken(){
        this.level.normalChicken.forEach((enemy, enemyIndex) => {
            if(this.character.isColliding(enemy) && this.character.y < 200) {
                this.normalChickenDead(enemy, enemyIndex);
            }
            if(this.throwableObjects.length > 0) {
                this.bottleNormalChicken(enemy);
            }
        })
    }


    bottleNormalChicken(enemy, enemyIndex){
        this.throwableObjects.forEach((bottle, bottleIndex) => {
            if(bottle.isColliding(enemy)) {
                this.sound_bottle_break.play();
                this.normalChickenDead(enemy, enemyIndex);
                this.throwableObjects.splice(bottleIndex, 1);
                setTimeout(() => {
                    this.sound_bottle_break.pause();
                    this.sound_bottle_break.currentTime = 0;
                }, 1000);
            }
        });
    }


    normalChickenDead(enemy, enemyIndex) {
        enemy.energy = 0;
        setTimeout(() => {
            this.level.normalChicken.splice(enemyIndex, 1);
        }, 500);
    }


    killSmallChicken(){
        this.level.smallChicken.forEach((enemy, enemyIndex) => {
            if(this.character.isColliding(enemy) && this.character.y < 220) {
                this.smallChickenDead(enemy, enemyIndex)
            }
            if(this.throwableObjects.length > 0) {
                this.bottleSmallChicken(enemy, enemyIndex);
            }
        })
    }
    
    
    bottleSmallChicken(enemy, enemyIndex){
        this.throwableObjects.forEach((bottle, bottleIndex) => {
            if(bottle.isColliding(enemy)) {
                this.sound_bottle_break.play();
                this.smallChickenDead(enemy, enemyIndex);
                this.throwableObjects.splice(bottleIndex, 1);
                setTimeout(() => {
                    this.sound_bottle_break.pause();
                    this.sound_bottle_break.currentTime = 0;
                }, 1000);
                
                
            } 
        });
    }


    smallChickenDead(enemy, enemyIndex) {
        enemy.energy = 0;
        setTimeout(() => {
            this.level.smallChicken.splice(enemyIndex, 1);
        }, 500);
    }


    killEndboss(){
        this.level.endboss.forEach((enemy) => {
            if(this.throwableObjects.length > 0) {
                this.bottleEndboss(enemy);
            }
        })
    }


    bottleEndboss(enemy){
        this.throwableObjects.forEach((bottle, bottleIndex) => {
            if(bottle.isColliding(enemy)) {
                this.sound_bottle_break.play();
                this.throwableObjects.splice(bottleIndex, 1); 
                this.movableObject.hittingEndbossWithBottle();
                this.statusBarEndboss.bossPercentage(this.movableObject.energyBoss);
                setTimeout(() => {
                    this.sound_bottle_break.pause();
                    this.sound_bottle_break.currentTime = 0; 
                }, 1000);
            }
        });
    }


    checkThrowableObjects() {
        if(this.keyboard.THROW){
            if(this.lastThrow() && this.bottleStatus.bottlesAmount > 0) {
                let bottle = new ThrowableObject(this.character.x, this.character.y);
                this.indexOfBottle++;
                this.throwableObjects.push(bottle);
                this.bottleStatus.bottlesAmount--;
                this.lastThrowTime = new Date().getTime();
            } 
        }    
    }


    lastThrow(){
        this.timeBetweenThrows = new Date().getTime() - this.lastThrowTime;
        this.timeBetweenThrows = this.timeBetweenThrows / 1000;
        return this.timeBetweenThrows > 1;
    }


    addObjectsToMap(objects) {    
        objects.forEach((o, index) => {
            this.addToMap(o, index);
        });
    }


    addBottlesToMap(bottles) {
        bottles.forEach((b, index) => {
            this.addToMap(b, index);
        });
    }


    removeBottlesFromMap() {
        this.level.bottlePickUp.forEach((bottle, index) => {
           if(this.character.isColliding(bottle) && this.bottleStatus.bottlesAmount < 10) {
               this.level.bottlePickUp.splice(index, 1);
               this.bottleStatus.bottlesAmount++; 
           }
        }) 
    }


    maximumBottles() {
        if(this.bottleStatus.bottlesAmount === 10) {
            this.ctx.fillStyle = 'red';
            this.ctx.fillText(this.bottleStatus.bottlesAmount, 65, 103);
        } else {
            this.ctx.fillStyle = '#9A3E00';
            this.ctx.fillText(this.bottleStatus.bottlesAmount, 65, 103);
        }
    }


    addCoinsToMap(coins) {
        coins.forEach((c, index) => {
            this.addToMap(c, index);
        });
    }


    removeCoinsFromMap() {
        this.level.coinPickUp.forEach((coin, index) => {
            if(this.character.isColliding(coin)) {
                this.level.coinPickUp.splice(index, 1);
                this.coinStatus.coinsAmount++;
            }
        }) 
    }


    coinsCurrentAmount() {
        this.ctx.fillStyle = '#9A3E00';
        this.ctx.fillText(this.coinStatus.coinsAmount, 65, 143);
    }


    showCoinsAmount(coinsAmount, x, y) {
        this.coinsAmount = coinsAmount;
        this.x = x;
        this.y = y;
    }

    
    addToMap(mo){
        if(mo.otherDirection){
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        if(mo.otherDirection){
            this.flipImageBack(mo);
        }
    }


    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    flipImageBack(mo) {
        this.ctx.restore();
        mo.x = mo.x * -1;
    }


    gameWon(){
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
            this.backgroundSounds();
        }, 3000);
    }
    

    gameLost(){
        document.querySelector('.game-lost').classList.remove('none');
        setTimeout(() => {
            clearAllIntervals();
            this.backgroundSounds();
        }, 3000);
    }
}