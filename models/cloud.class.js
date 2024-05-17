class Cloud extends MovableObject {
    width = 500;
    height = 250;
    

    /**
     * Constructor function for creating a Cloud object with a random x and y position.
     *
     */
    constructor() {
        super().loadImage('./assets/img/5_background/layers/4_clouds/1.png');
        this.x = Math.random() * 10000;
        this.y = Math.random() * 80;
        this.animate();
    }

    
    /**
     * Set up an interval to animate the cloud's movement by changing its x-coordinate.
     *
     * @return {void} No return value
     */
    animate() {
        setInterval(() => {
            this.x -= 0.15;    
        }, 1000 / 60);
    }
}