class World {

    character = new Character();
    level = level_1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    bottleStatus = new BottleStatus();
    // bottlesAmount = 0;
    coinStatus = new CoinStatus(20, 100);
    throwableObjects = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }


    setWorld() {
        this.character.world = this;

    }


    run() {
        setInterval(() => {
            // this.checkCollisions();
            this.removeBottlesFromMap();
            this.removeCoinsFromMap();
            this.checkThrowableObjects(); 
        }, 200);
    }


    // checkCollisions() {
    //     this.level.enemies.forEach((enemy) => {
    //         if(this.character.isColliding(enemy)) {
    //             this.character.hit();
    //             this.statusBar.setPercentage(this.character.energy);
    //         }
    //     })       
    // }


    checkThrowableObjects() {
        if(this.bottleStatus.bottlesAmount > 0) {
            if(this.keyboard.THROW) {
                let bottle = new ThrowableObject(this.character.x, this.character.y);
                this.throwableObjects.push(bottle);
                this.bottleStatus.bottlesAmount--;
            }
        }
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
        this.addToMap(this.bottleStatus);
        this.addToMap(this.coinStatus);
        this.ctx.translate(this.camera_x, 0);
        
        this.addToMap(this.character);
        // this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        
        this.ctx.translate(-this.camera_x, 0);
        

        requestAnimationFrame(this.draw.bind(this));
    }


    addObjectsToMap(objects) {    
        objects.forEach((o) => {
            this.addToMap(o);
        });
    }


    addBottlesToMap(bottles) {
        bottles.forEach((b, index) => {
            this.addToMap(b, index);
        });
    }


    removeBottlesFromMap() {
        if(this.bottleStatus.bottlesAmount < 4) {
            this.level.bottlePickUp.forEach((bottle) => {
                if(this.character.isColliding(bottle)) {
                    this.level.bottlePickUp.splice(bottle, 1);
                    this.bottleStatus.bottlesAmount++;
                }
            }) 
        }
    }


    addCoinsToMap(coins) {
        coins.forEach((c, index) => {
            this.addToMap(c, index);
        });
    }


    removeCoinsFromMap() {
        this.level.coinPickUp.forEach((coin) => {
            if(this.character.isColliding(coin)) {
                this.level.coinPickUp.splice(coin, 1);
                this.coinStatus.coinsAmount++;
            }
        }) 
    }

    
    addToMap(mo){
        if(mo.otherDirection){
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

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