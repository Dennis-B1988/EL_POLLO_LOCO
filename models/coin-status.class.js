class CoinStatus extends DrawableObject {
    IMAGE_COIN = ['./assets/img/7_statusbars/3_icons/icon_coin.png'];
    coinsAmount = 0;

    
    /**
     * Constructor function for initializing a CoinStatus object with the specified coordinates.
     *
     * @param {number} x - The x-coordinate position of the CoinStatus object.
     * @param {number} y - The y-coordinate position of the CoinStatus object.
     * @return {void} No return value
     */
    constructor(x, y) {
        super().loadImage(this.IMAGE_COIN);
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 50;
    }  
}