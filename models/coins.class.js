class Coins extends DrawableObject{
    height = 100;
    width = 100;
    offset = {
        top: 30,
        bottom: 30,
        left: 30,
        right: 30
    };

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}