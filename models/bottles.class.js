class Bottles extends DrawableObject {
    height = 80;
    width = 80;

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }

}