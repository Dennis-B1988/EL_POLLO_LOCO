class StatusBarEndboss extends DrawableObject {
    IMAGES = [
        './assets/img/7_statusbars/2_statusbar_endboss/orange/orange0.png',
        './assets/img/7_statusbars/2_statusbar_endboss/orange/orange20.png',
        './assets/img/7_statusbars/2_statusbar_endboss/blue/blue40.png',
        './assets/img/7_statusbars/2_statusbar_endboss/blue/blue60.png',   
        './assets/img/7_statusbars/2_statusbar_endboss/green/green80.png',
        './assets/img/7_statusbars/2_statusbar_endboss/green/green100.png'
    ];
    percentage = 100;
    bossTriggered = false;


    /**
     * Constructor function for initializing the StatusBarEndboss object.
     *
     * @return {void} No return value
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.bossPercentage(100);
        this.x = 400;
        this.y = 8.5;
        this.width = 300;
        this.height = 70;
    }


    /**
     * Updates the boss percentage and sets the corresponding image for the boss status bar.
     *
     * @param {number} percentage - The new boss percentage value.
     * @return {void} No return value
     */
    bossPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveBossImageIndex()];
        this.img = this.imageCache[path];
    }


    /**
     * Determines the index of the boss image based on the current boss percentage.
     *
     * @param {void} No parameters
     * @return {number} The index of the boss image.
     */
    resolveBossImageIndex() {
        if(this.percentage === 100) {
            return 5;
        } else if(this.percentage >= 80) {
            return 4;
        } else if(this.percentage >= 60) {
            return 3;
        } else if(this.percentage >= 40) {
            return 2;
        } else if(this.percentage >= 20) {
            return 1;
        } else {
            return 0;
        }
    }
}