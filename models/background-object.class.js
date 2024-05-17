class BackgroundObject extends MovableObject {

    width = 720;
    height = 480;

    
    /**
     * Constructor function for creating a BackgroundObject with the specified image path and x-coordinate.
     *
     * @param {string} imagePath - The path to the image of the object.
     * @param {number} x - The x-coordinate position of the object.
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
    }
}