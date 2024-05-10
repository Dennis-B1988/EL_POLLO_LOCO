class Level {
    normalChicken;
    smallChicken;
    endboss;
    clouds;
    backgroundObjects;
    bottlePickUp;
    coinPickUp;
    level_end_x = 4300;


    constructor(normalChicken, smallChicken, endboss, clouds, backgroundObjects, bottlePickUp, coinPickUp) {
        this.normalChicken = normalChicken;
        this.smallChicken = smallChicken;
        this.endboss = endboss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottlePickUp = bottlePickUp;
        this.coinPickUp = coinPickUp;
    }
}