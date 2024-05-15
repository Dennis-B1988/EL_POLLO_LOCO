class DrawableObject {
    x;
    y;
    height;
    width;
    img;
    imageCache = [];


    constructor() {
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
        if(this instanceof ThrowableObject) {
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


    drawActualFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof SmallChicken || this instanceof Endboss || this instanceof Bottles || this instanceof Coins || this instanceof ThrowableObject) {
            ctx.beginPath();
            ctx.lineWidth = "1";
            ctx.strokeStyle = "red";
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, 
                     this.width - this.offset.left - this.offset.right, 
                     this.height - this.offset.top - this.offset.bottom);
            ctx.stroke();
        }
    }
}