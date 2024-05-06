class Bottle extends DrawableObject {
    IMAGE_BOTTLE = './assets/img/6_salsa_bottle/salsa_bottle.png';

    constructor() {
        super();
        this.loadImage(this.IMAGE_BOTTLE);
        this.x = 400;
        this.y = 200;
        this.height = 80;
        this.width = 80;
    }

}