class Level {
    normalChicken;
    smallChicken;
    endboss;
    clouds;
    backgroundObjects;
    bottlePickUp;
    coinPickUp;
    level_end_x = 4300;


    /**
     * Constructor for the Level class.
     *
     * @param {type} normalChicken - description of normalChicken
     * @param {type} smallChicken - description of smallChicken
     * @param {type} endboss - description of endboss
     * @param {type} clouds - description of clouds
     * @param {type} backgroundObjects - description of backgroundObjects
     * @param {type} bottlePickUp - description of bottlePickUp
     * @param {type} coinPickUp - description of coinPickUp
     * @return {type} description of return value
     */
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