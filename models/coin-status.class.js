class CoinStatus extends DrawableObject {
    IMAGE_COIN = ['./assets/img/7_statusbars/3_icons/icon_coin.png'];
    coins = 0;

    constructor() {
        super();
        this.loadImage(this.IMAGE_COIN);
        this.x = 20;
        this.y = 100;
        this.height = 50;
        this.width = 50;
        
    }
}