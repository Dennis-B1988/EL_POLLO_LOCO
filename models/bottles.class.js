class Bottles extends DrawableObject {
    height = 60;
    width = 60;
    offset = {
        top: 5,
        bottom: 5,
        left: 20,
        right: 20
    };

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }

}