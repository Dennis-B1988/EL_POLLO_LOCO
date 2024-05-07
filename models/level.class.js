class Level {
    enemies;
    endboss;
    clouds;
    backgroundObjects;
    bottlePickUp;
    coinPickUp;
    level_end_x = 4300;


    constructor(enemies, clouds, backgroundObjects, bottlePickUp, coinPickUp) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottlePickUp = bottlePickUp;
        this.coinPickUp = coinPickUp;
    }
}