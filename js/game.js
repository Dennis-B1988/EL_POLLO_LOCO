let canvas;
let world;

function init(){
    canvas = document.getElementById("canvas");
    world = new World(canvas);
    // ctx = canvas.getContext("2d");
    
    console.log('My Character is', world.character);
    // ctx.drawImage(character, 0, 0, 100, 100);
}

// let draw = () => {
//         ctx.drawImage(character, 0, 0, 100, 100);
//     };