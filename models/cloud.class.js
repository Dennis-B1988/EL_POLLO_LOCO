class Cloud extends MovableObject {
    width = 500;
    height = 250;

    constructor() {
        super().loadImage('./assets/img/5_background/layers/4_clouds/1.png');
        this.x = Math.random() * 10000;
        this.y = Math.random() * 80;
        // this.width = 200 + Math.random() * 300;
        // this.height = 150 + Math.random() * 50;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.x -= 0.15;    
        }, 1000 / 60);
    }
}