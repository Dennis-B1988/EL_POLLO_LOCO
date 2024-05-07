class BottleStatus extends DrawableObject {
    IMAGE_BOTTLE = ['./assets/img/6_salsa_bottle/salsa_bottle.png'];
    bottlesAmount = 0;

    constructor() {
        super();
        this.loadImage(this.IMAGE_BOTTLE);
        this.x = 20;
        this.y = 60;
        this.height = 50;
        this.width = 50;
        
    }

    bottlesAmount(){
        

    }
}