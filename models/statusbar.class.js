class StatusBar extends DrawableObject {
    IMAGES = [
        './assets/img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
        './assets/img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
        './assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        './assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        './assets/img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        './assets/img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png'
    ];
    percentage = 100;


    /**
     * Constructor function for initializing the StatusBar object.
     *
     * @return {void} No return value
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(100);
        this.x = 10;
        this.y = 0;
        this.width = 300;
        this.height = 70;
    }


    /**
     * Sets the percentage value, calculates the image path based on the resolved index, and updates the image cache accordingly.
     *
     * @param {number} percentage - The new percentage value to be set.
     * @return {void} No return value
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    /**
     * Determines the index based on the current percentage value.
     * 
     * @param {void} No parameters
     * @return {number} The index of the image based on the percentage.
     */
    resolveImageIndex() {
        if(this.percentage === 100) {
            return 5;
        } else if(this.percentage >= 80) {
            return 4;
        } else if(this.percentage >= 60) {
            return 3;
        } else if(this.percentage >= 40) {
            return 2;
        } else if(this.percentage >= 1) {
            return 1;
        } else {
            return 0;
        }
    }

}