class World {

    character = new Character();
    enemies = [new Chicken(), new Chicken(), new Chicken()];
    clouds = [new Cloud(), new Cloud(), new Cloud()];
    backgroundObjects = [
        new BackgroundObject('./assets/img/5_background/layers/air.png', 0),
        new BackgroundObject('./assets/img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('./assets/img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('./assets/img/5_background/layers/1_first_layer/1.png', 0)
    ];
    canvas;
    ctx;

    constructor(canvas) {
        // this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw () {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.clouds);
        

        requestAnimationFrame(this.draw.bind(this));
    }

    addObjectsToMap(objects) {
        objects.forEach((o) => {
            this.addToMap(o);
        });
    }

    addToMap(mo){
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}