class Character extends MovableObject {

    x = 100;
    y = 120;
    height = 200;
    width = 100;

    constructor() {
        super().loadImage('./assets/img/2_character_pepe/2_walk/W-21.png');
    }

    jump(){
        console.log('Jumping');
    }
}