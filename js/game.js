let canvas;
let world;
let keyboard = new Keyboard();

function init(){
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);
    
    console.log('My Character is', world.character);

}


document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowLeft') {
        keyboard.LEFT = true;
    } else if (event.key === 'ArrowRight') {
        keyboard.RIGHT = true;
    } else if (event.key === 'ArrowUp') {
        keyboard.UP = true;
    } else if (event.key === 'ArrowDown') {
        keyboard.DOWN = true;
    } else if (event.key === 'Space') {
        keyboard.SPACE = true;
    }
})


document.addEventListener('keyup', (event) => {
    if(event.key === 'ArrowLeft') {
        keyboard.LEFT = false;
    } else if (event.key === 'ArrowRight') {    
        keyboard.RIGHT = false;
    } else if (event.key === 'ArrowUp') {
        keyboard.UP = false;
    } else if (event.key === 'ArrowDown') {
        keyboard.DOWN = false;
    } else if (event.key === 'Space') {
        keyboard.SPACE = false;
    }
})