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
        // this.ctx.fillText(this.bottleStatus.bottlesAmount, 65, 103);
        this.maximumBottles();
        // this.ctx.fillText(this.coinStatus.coinsAmount, 65, 143);
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
        this.level.normalChicken.forEach((enemy, index) => {
            if(this.character.isColliding(enemy) && this.character.y > 200) {
                console.log('Character is colliding with normal chicken ' + index);
                this.character.isHitNormalChicken();
                this.statusBar.setPercentage(this.character.energy);
            }
        })       
    }


    checkCollisionsSmallChicken() {
        this.level.smallChicken.forEach((enemy, index) => {
            if(this.character.isColliding(enemy) && this.character.y > 200) {
                console.log('Character is colliding with small chicken ' + index);
                this.character.isHitSmallChicken();
                this.statusBar.setPercentage(this.character.energy);
            }
        })       
    }


    checkCollisionsEndboss() {
        this.level.endboss.forEach((enemy, index) => {
            if(this.character.isColliding(enemy)) {
                console.log('Character is colliding with endboss ' + index);
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
            if(bottle.y === 512) {
                this.throwableObjects.splice(index, 1);
            }
        })
    }


    killNormalChicken(){
        this.level.normalChicken.forEach((enemy, enemyIndex) => {
            if(this.character.isColliding(enemy) && this.character.y < 200) {
                console.log('Character ' + this.character.y + ' is colliding with normal chicken ' + enemy.y);
                this.level.normalChicken.splice(enemyIndex, 1);
            }
            if(this.throwableObjects.length > 0) {
                this.normalEnemy.chickenDead();
                setTimeout(() => {
                    this.level.normalChicken.splice(enemyIndex, 1);
                }, 2000);
            }
            
        })
    }


    bottleNormalChicken(enemy, enemyIndex){
        this.throwableObjects.forEach((bottle, bottleIndex) => {
            if(bottle.isColliding(enemy)) {
                console.log('Bottle ' + bottleIndex + ' is colliding with normal chicken ' + enemyIndex);
                this.throwableObjects.splice(bottleIndex, 1);
            }
        });
    }


    killSmallChicken(){
        this.level.smallChicken.forEach((enemy, enemyIndex) => {
            if(this.character.isColliding(enemy) && this.character.y < 200) {
                console.log('Character ' + this.character.y + ' is colliding with small chicken ' + enemy.y);
                // this.character.y -= 100;
                this.level.smallChicken.splice(enemyIndex, 1);
            }
            if(this.throwableObjects.length > 0) {
                this.bottleSmallChicken(enemy, enemyIndex);
            }
        })
    }
    
    
    bottleSmallChicken(enemy, enemyIndex){
        this.throwableObjects.forEach((bottle, bottleIndex) => {
            if(bottle.isColliding(enemy)) {
                console.log('Bottle ' + bottleIndex + ' is colliding with normal chicken ' + enemyIndex);
                this.level.smallChicken.splice(enemyIndex, 1);
                this.throwableObjects.splice(bottleIndex, 1);
            } 
        });
    }


    killEndboss(){
        this.level.endboss.forEach((enemy, endbossIndex) => {
            if(this.throwableObjects.length > 0) {
                this.bottleEndboss(enemy, endbossIndex);
            }
        })
    }


    bottleEndboss(enemy, endbossIndex){
        this.throwableObjects.forEach((bottle, bottleIndex) => {
            if(bottle.isColliding(enemy)) {
                console.log('Bottle ' + bottleIndex + ' is colliding with endboss ' + endbossIndex);
                this.throwableObjects.splice(bottleIndex, 1);
                this.movableObject.hittingEndbossWithBottle();
                this.statusBarEndboss.bossPercentage(this.movableObject.energyBoss);
                // if(this.movableObject.energyBoss === 0){
                //     this.level.endboss.splice(endbossIndex, 1);
                // }
            }
        });
    }


    checkThrowableObjects() {
        if(this.keyboard.THROW){
            // this.lastThrow();
            if(this.lastThrow() && this.bottleStatus.bottlesAmount > 0) {
                let bottle = new ThrowableObject(this.character.x, this.character.y);
                this.indexOfBottle++;
                this.throwableObjects.push(bottle);
                this.bottleStatus.bottlesAmount--;
                this.lastThrowTime = new Date().getTime();
                // this.lastThrow();
            } 
        }
        
    }


    lastThrow(){
        this.timeBetweenThrows = new Date().getTime() - this.lastThrowTime;
        this.timeBetweenThrows = this.timeBetweenThrows / 1000;
        return this.timeBetweenThrows > 0.5;
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
           if(this.character.isColliding(bottle) && this.bottleStatus.bottlesAmount < 5) {
               console.log('Character is colliding with bottle ' + index);
               this.level.bottlePickUp.splice(index, 1);
               this.bottleStatus.bottlesAmount++; 
           }
        }) 
    }


    maximumBottles() {
        if(this.bottleStatus.bottlesAmount === 5) {
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
        // mo.drawFrame(this.ctx);
        mo.drawActualFrame(this.ctx)

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

}