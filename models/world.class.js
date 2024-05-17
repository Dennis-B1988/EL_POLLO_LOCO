class World {
    character = new Character();
    normalEnemy = new Chicken();
    endboss = new Endboss();
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
    audio = new Sounds();
    damage = new Damage();
    
    
    /**
     * Constructor function for initializing the World object with the canvas and keyboard.
     *
     * @param {Canvas} canvas - The canvas element to render the world on.
     * @param {Keyboard} keyboard - The keyboard input for controlling the world.
     * @return {void} No return value
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.damage.collition();
        this.damage.collitionDamageToEnemy();
        this.collect();
        this.ctx.font = '48px Zabras';
        this.ctx.fillStyle = '#9A3E00';   
        // this.movableObject = new MovableObject();
    }


    /**
     * Draws the game elements on the canvas, clears the canvas, draws background and items,
     * status bars, characters, and translates the context. Uses requestAnimationFrame for smooth rendering.
     *
     * @return {void} No return value
     */
    draw () {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.drawBackgroundAndItems();
        this.drawStatusBars();
        this.drawCharacters();
        this.addObjectsToMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x, 0);
        requestAnimationFrame(this.draw.bind(this));
    }


    /**
     * Draws the background and items on the canvas by translating the context and adding various objects.
     */
    drawBackgroundAndItems(){
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addBottlesToMap(this.level.bottlePickUp);
        this.addCoinsToMap(this.level.coinPickUp);
    }


    /**
     * Draws the status bars on the canvas by translating the context and adding various status elements.
     */
    drawStatusBars(){
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarEndboss);
        this.addToMap(this.bottleStatus);
        this.addToMap(this.coinStatus);
        this.maximumBottles();
        this.coinsCurrentAmount();
        this.ctx.translate(this.camera_x, 0);
    }


    /**
     * Draws the characters on the canvas by adding them to the map.
     *
     */
    drawCharacters(){
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.normalChicken);
        this.addObjectsToMap(this.level.smallChicken);
        this.addObjectsToMap(this.level.endboss);
    }


    /**
     * Sets the world property of the character to the current instance of the world.
     *
     * @param None
     * @return None
     */
    setWorld() {
        this.character.world = this;
    }


    /**
     * Sets up a recurring interval to call the checkThrowableObjects method every 100 milliseconds.
     *
     * @param None
     * @return None
     */
    run() {
        setInterval(() => {
            this.checkThrowableObjects(); 
        }, 100);
    }


    /**
     * Sets up a recurring interval to collect items by removing bottles and coins from the map.
     *
     * @param None
     * @return None
     */
    collect() {
        setInterval(() => {
            this.removeBottlesFromMap();
            this.removeCoinsFromMap();
        }, 50);
    }


    /**
     * Checks if the THROW key is pressed, the last throw happened, and there are available bottles.
     *
     * @param None
     * @return None
     */
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


    /**
     * Calculates the time difference between the current time and the last throw time,
     * and checks if the time difference is greater than 1 second.
     *
     * @param None
     * @return {boolean} Indicates if the time difference is greater than 1 second
     */
    lastThrow(){
        this.timeBetweenThrows = new Date().getTime() - this.lastThrowTime;
        this.timeBetweenThrows = this.timeBetweenThrows / 1000;
        return this.timeBetweenThrows > 1;
    }


    /**
     * Adds objects to the map by iterating through the objects array and calling addToMap for each object.
     *
     * @param {Array} objects - The array of objects to add to the map
     * @return {void} No return value
     */
    addObjectsToMap(objects) {    
        objects.forEach((o, index) => {
            this.addToMap(o, index);
        });
    }


    /**
     * Adds bottles to the map by iterating through the bottles array and calling addToMap for each bottle.
     *
     * @param {Array} bottles - The array of bottles to add to the map
     * @return {void} No return value
     */
    addBottlesToMap(bottles) {
        bottles.forEach((b, index) => {
            this.addToMap(b, index);
        });
    }


    /**
     * Removes bottles from the map if character collides with a bottle and the total bottle count is less than 10.
     *
     * @param None
     * @return None
     */
    removeBottlesFromMap() {
        this.level.bottlePickUp.forEach((bottle, index) => {
           if(this.character.isColliding(bottle) && this.bottleStatus.bottlesAmount < 10) {
               this.level.bottlePickUp.splice(index, 1);
               this.bottleStatus.bottlesAmount++; 
           }
        }) 
    }


    /**
     * Updates the canvas based on the bottleStatus.bottlesAmount value. 
     * If the amount is 10, it sets the fill style to 'red' and displays the amount at position (65, 103), 
     * otherwise sets the fill style to '#9A3E00' and displays the amount at the same position.
     *
     * @param None
     * @return None
     */
    maximumBottles() {
        if(this.bottleStatus.bottlesAmount === 10) {
            this.ctx.fillStyle = 'red';
            this.ctx.fillText(this.bottleStatus.bottlesAmount, 65, 103);
        } else {
            this.ctx.fillStyle = '#9A3E00';
            this.ctx.fillText(this.bottleStatus.bottlesAmount, 65, 103);
        }
    }


    /**
     * Adds coins to the map by iterating through the coins array and calling addToMap for each coin.
     *
     * @param {Array} coins - The array of coins to add to the map
     * @return {void} No return value
     */
    addCoinsToMap(coins) {
        coins.forEach((c, index) => {
            this.addToMap(c, index);
        });
    }


    /**
     * Loops through the coins on the map, checks collision with the character,
     * and removes the coin if there is a collision. Also increments the coin count.
     *
     * @param None
     * @return None
     */
    removeCoinsFromMap() {
        this.level.coinPickUp.forEach((coin, index) => {
            if(this.character.isColliding(coin)) {
                this.level.coinPickUp.splice(index, 1);
                this.coinStatus.coinsAmount++;
            }
        }) 
    }


    /**
     * Updates the current amount of coins displayed on the canvas.
     *
     * @param None
     * @return None
     */
    coinsCurrentAmount() {
        this.ctx.fillStyle = '#9A3E00';
        this.ctx.fillText(this.coinStatus.coinsAmount, 65, 143);
    }


    /**
     * Adds the object to the map, flips the image if needed, draws the object on the canvas, and flips the image back if necessary.
     *
     * @param {object} mo - The object to add to the map
     * @return {void} No return value
     */
    addToMap(mo){
        if(mo.otherDirection){
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        if(mo.otherDirection){
            this.flipImageBack(mo);
        }
    }


    /**
     * Saves the canvas state, translates the context, scales the image, and updates the x-coordinate of the object.
     *
     * @param {object} mo - The object to flip the image for
     * @return {void} No return value
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    /**
     * Restores the canvas context and flips the x-coordinate of the object.
     *
     * @param {object} mo - The object to flip the x-coordinate
     * @return {void} No return value
     */
    flipImageBack(mo) {
        this.ctx.restore();
        mo.x = mo.x * -1;
    }


    /**
     * A function that handles the game won logic by updating the game-won elements and playing background sounds after a delay.
     *
     * @param {type} paramName - description of parameter
     * @return {type} description of return value
     */
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
            this.audio.backgroundSounds();
        }, 3000);
    }
    

    /**
     * A function that handles the game lost logic by updating the game-lost elements and playing background sounds after a delay.
     *
     * @param {type} paramName - description of parameter
     * @return {type} description of return value
     */
    gameLost(){
        document.querySelector('.game-lost').classList.remove('none');
        setTimeout(() => {
            clearAllIntervals();
            this.audio.backgroundSounds();
        }, 3000);
    }
}