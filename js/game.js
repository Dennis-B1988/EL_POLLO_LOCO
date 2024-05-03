let canvas;
let world;
let keyboard = new Keyboard();

function init(){
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);
    
    console.log('My Character is', world.character);

}


document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowLeft' || event.key === 'a') {
        keyboard.LEFT = true;
    } else if (event.key === 'ArrowRight' || event.key === 'd') {
        keyboard.RIGHT = true;
    } else if (event.key === 'ArrowUp' || event.key === 'w') {
        keyboard.UP = true;
    } else if (event.key === ' ') {
        keyboard.SPACE = true;
    }
})


document.addEventListener('keyup', (event) => {
    if(event.key === 'ArrowLeft' || event.key === 'a') {
        keyboard.LEFT = false;
    } else if (event.key === 'ArrowRight' || event.key === 'd') { 
        keyboard.RIGHT = false;
    } else if (event.key === 'ArrowUp' || event.key === 'w') {
        keyboard.UP = false;
    } else if (event.key === ' ') {
        keyboard.SPACE = false;
    }
})