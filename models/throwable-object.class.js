class ThrowableObject extends MovableObject {
    IMAGES_THROWING = [
        './assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        './assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        './assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        './assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];
    offset = {
        top: 10,
        bottom: 10,
        left: 30,
        right: 30
    };

    constructor(x, y) {
        super().loadImage('./assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.x = x;
        this.y = y;
        this.height = 75;
        this.width = 75;
        this.throw();
        // this.loadImages(this.IMAGES_THROWING);
    }


    throw(){
            this.speedY = 0;
            this.applyGravity();
            setInterval(() => {
                this.x += 35;
            }, 25)
            // world.character.lastIdleTime = new Date().getTime();
        } 


    
    
}