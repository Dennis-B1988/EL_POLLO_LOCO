let canvas;
let world;
let keyboard = new Keyboard();

function init(){
    clearAllIntervals();
    document.querySelector('.game-won').classList.add('none');
    document.querySelector('.game-lost').classList.add('none');
    initLevel();
    startGame();
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
    } else if (event.key === 'd') {
        keyboard.THROW = true;
    } else if (event.key === ' ') {
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
    }    else if (event.key === 'd') {
        keyboard.THROW = false;
    } else if (event.key === ' ') {
        keyboard.SPACE = false;
    }
})


document.addEventListener('touchstart', (event) => {
    const touchedElement = event.target.closest('button');
    if (!touchedElement) return;
    const buttonId = touchedElement.id;

    if (buttonId === 'left') {
        keyboard.LEFT = true;
    } else if (buttonId === 'right') {
        keyboard.RIGHT = true;
    } else if (buttonId === 'throw') {
        keyboard.THROW = true;
    } else if (buttonId === 'jump') {
        keyboard.SPACE = true;
    }
})


document.addEventListener('touchend', (event) => {
    const touchedElement = event.target.closest('button');
    if (!touchedElement) return;
    const buttonId = touchedElement.id;

    if (buttonId === 'left') {
        keyboard.LEFT = false;
    } else if (buttonId === 'right') {
        keyboard.RIGHT = false;
    } else if (buttonId === 'throw') {
        keyboard.THROW = false;
    } else if (buttonId === 'jump') {
        keyboard.SPACE = false;
    }
})


document.addEventListener('mousedown', (event) => {
    const touchedElement = event.target.closest('button');
    if (!touchedElement) return;
    const buttonId = touchedElement.id;

    if (buttonId === 'left') {
        keyboard.LEFT = true;
    } else if (buttonId === 'right') {
        keyboard.RIGHT = true;
    } else if (buttonId === 'throw') {
        keyboard.THROW = true;
    } else if (buttonId === 'jump') {
        keyboard.SPACE = true;
    }
})


document.addEventListener('mouseup', (event) => {
    const touchedElement = event.target.closest('button');
    if (!touchedElement) return;
    const buttonId = touchedElement.id;

    if (buttonId === 'left') {
        keyboard.LEFT = false;
    } else if (buttonId === 'right') {
        keyboard.RIGHT = false;
    } else if (buttonId === 'throw') {
        keyboard.THROW = false;
    } else if (buttonId === 'jump') {
        keyboard.SPACE = false;
    }
})


function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
}


function restartGame() {
    document.querySelector('.start-screen').style.display = 'flex';
    document.querySelector('.game-content').style.display = 'none';
}