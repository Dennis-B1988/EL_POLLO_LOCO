class World {

    character = new Character();
    level = level_1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    bottleStatus = new BottleStatus();
    bottlePickUp = new Bottle();
    coinStatus = new CoinStatus();
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
        if(this.keyboard.SPACE) {
            let bottle = new ThrowableObject(this.character.x, this.character.y);
            this.throwableObjects.push(bottle);
        }
    }
    

    draw () {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.addObjectsToMap(this.level.clouds);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.bottleStatus);
        this.addToMap(this.coinStatus);
        this.ctx.translate(this.camera_x, 0);
        
        this.addToMap(this.bottlePickUp);
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