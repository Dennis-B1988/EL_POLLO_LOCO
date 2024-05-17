class DrawableObject {
    x;
    y;
    height;
    width;
    img;
    imageCache = [];


    /**
     * Loads an image from the specified path.
     *
     * @param {string} path - The path to the image to load.
     * @return {void} No return value
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
     * Loads multiple images into the imageCache based on the provided array of paths.
     *
     * @param {Array} arr - An array of image paths to load.
     * @return {void} No return value
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    /**
     * Draws an image on the canvas context at the specified coordinates.
     *
     * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
     * @return {void} No return value
     */
    draw(ctx) {
        try {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch(e) {
            console.warn('Error in draw', e);
            console.log('Could  not load Image, ', this.img.src);
        }
    }


    /**
     * Draws the actual frame on the canvas context based on the type of object.
     *
     * @param {CanvasRenderingContext2D} ctx - The canvas context to draw on.
     * @return {void} No return value
     */
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