class Coins extends DrawableObject{
    height = 100;
    width = 100;
    offset = {
        top: 30,
        bottom: 30,
        left: 30,
        right: 30
    };
    

    /**
     * Constructor function for creating a Coins object with the specified image path, x-coordinate, and y-coordinate.
     *
     * @param {string} imagePath - The path to the image of the Coins object.
     * @param {number} x - The x-coordinate position of the Coins object.
     * @param {number} y - The y-coordinate position of the Coins object.
     */
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}