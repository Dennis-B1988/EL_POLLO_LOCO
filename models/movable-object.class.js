class MovableObject {
    x;
    y;
    height;
    width;
    img;
    imageCache = [];
    currentImage = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            // this.imageCache.push(img);
            this.imageCache[path] = img;
        });
    }
    
    moveRight(){
        
        console.log('Moving Right');
    }

    moveLeft() {
        console.log('Moving Left');
    }
}