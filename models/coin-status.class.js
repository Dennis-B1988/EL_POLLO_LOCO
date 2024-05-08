class CoinStatus extends DrawableObject {
    IMAGE_COIN = ['./assets/img/7_statusbars/3_icons/icon_coin.png'];
    coinsAmount = 0;

    constructor(x, y) {
        super().loadImage(this.IMAGE_COIN);
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 50;
        
    }

    
}