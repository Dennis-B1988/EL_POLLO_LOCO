class Bottles extends DrawableObject {
    height = 80;
    width = 80;
    offset = {
        top: 5,
        bottom: 5,
        left: 30,
        right: 30
    };

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }

}