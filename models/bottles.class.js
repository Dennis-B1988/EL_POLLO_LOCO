class Bottles extends DrawableObject {
    height = 60;
    width = 60;
    offset = {
        top: 5,
        bottom: 5,
        left: 20,
        right: 20
    };
    

    /**
     * Constructor function for creating a Bottles object with the specified image path, x-coordinate, and y-coordinate.
     *
     * @param {string} imagePath - The path to the image of the Bottles object.
     * @param {number} x - The x-coordinate position of the Bottles object.
     * @param {number} y - The y-coordinate position of the Bottles object.
     */
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }

}