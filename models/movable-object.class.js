class MovableObject {
    x;
    y;
    height;
    width;
    img;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    
    moveRight(){
        
        console.log('Moving Right');
    }

    moveLeft() {
        console.log('Moving Left');
    }
}