class ThrowableObject extends MovableObject {
    IMAGES_THROWING = [
        './assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        './assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        './assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        './assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ]
    constructor(x, y) {
        super().loadImage('./assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 100;
        this.throw();
        // this.loadImages(this.IMAGES_THROWING);
    }


    throw(){
        this.speedY = 0;
        this.applyGravity();
        setInterval(() => {
            this.x += 35;
        }, 25)
    }


    // animate() {
    //     setInterval(() => {
    //         if(this.world.keyboard.SPACE) {
    //             this.playAnimation(this.IMAGES_THROWING);
    //         }
    //     }, 1000 / 60);

    //     setInterval(() => {
    //         this.playAnimation(this.IMAGES_THROWING);
    //     }, 100);
    // }

    
}