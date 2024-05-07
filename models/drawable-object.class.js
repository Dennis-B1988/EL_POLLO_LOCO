class DrawableObject {
    x;
    y;
    height;
    width;
    img;
    imageCache = [];

    constructor() {
        // this.imageCache = {};
    }


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    draw(ctx) {
        try {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch(e) {
            console.warn('Error in draw', e);
            console.log('Could  not load Image, ', this.img.src);
        }
    }


    drawFrame(ctx) {
        if(this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
}