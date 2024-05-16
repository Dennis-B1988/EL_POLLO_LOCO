let canvas;
let world;
let keyboard = new Keyboard();
let soundOn = true;

/**
 * Initializes the game by clearing intervals, setting initial game-won and game-lost elements to hidden, 
 * initializing the level, starting the game, and creating a new World object.
 *
 */
function init(){
    clearAllIntervals();
    document.querySelector('.game-won').classList.add('none');
    document.querySelector('.game-lost').classList.add('none');
    initLevel();
    startGame();
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard); 
    world.backgroundMusic();
}


/**
 * Handles keydown events by setting the corresponding keyboard property to true
 * when the user presses the corresponding key.
 *
 * @param {KeyboardEvent} event - The keydown event
 */
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


/**
 * Handles keyup events by setting the corresponding keyboard property to false
 * when the user releases the corresponding key.
 *
 * @param {KeyboardEvent} event - The keyup event
 */
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


/**
 * Handles touchstart events by setting the corresponding keyboard property to true
 * when the user touches a button element.
 *
 * @param {TouchEvent} event - The touchstart event
 */
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


/**
 * Handles touchend events by setting the corresponding keyboard property to false
 * when the user lifts their finger from a button element.
 *
 * @param {TouchEvent} event - The touchend event
 */
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


/**
 * Handles mousedown events by setting the corresponding keyboard property to true
 * when the user presses a button element.
 *
 * @param {MouseEvent} event - The mousedown event
 */
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


/**
 * Handles mouseup events by setting the corresponding keyboard property to false
 * when the user releases a button element.
 *
 * @param {MouseEvent} event - The mouseup event
 */
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


/**
 * Clears all intervals up to 9999.
 *
 */
function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
}


/**
 * Restarts the game by displaying the start screen and hiding the game content.
 *
 */
function restartGame() {
    document.querySelector('.start-screen').style.display = 'flex';
    document.querySelector('.game-content').style.display = 'none';
}


/**
 * Toggles the sound on the title screen based on the current state. If the sound is currently on, 
 * it mutes the sound, otherwise, it turns the sound on.
 *
 */
function toggleSoundTitleScreen() {
    let sound = document.querySelector('.sound img');
    let soundInGame = document.querySelector('.toggle-sound-game img');
    if (sound.src.includes('sound.png') || soundInGame.src.includes('sound.png')) {
        soundOn = false;
        sound.src = './assets/img/9_intro_outro_screens/start/sound-mute.png';
        soundInGame.src = './assets/img/9_intro_outro_screens/start/sound-mute.png';
    } else {
        soundOn = true;
        sound.src = './assets/img/9_intro_outro_screens/start/sound.png';
        soundInGame.src = './assets/img/9_intro_outro_screens/start/sound.png';
    }
}


/**
 * Toggles the sound on and off based on the current state. If the sound is currently on, 
 * it mutes the sound, otherwise, it turns the sound on.
 * 
 */
function toggleSoundInGame() {
    let sound = document.querySelector('.sound img');
    let soundInGame = document.querySelector('.toggle-sound-game img');
    if (sound.src.includes('sound.png') || soundInGame.src.includes('sound.png')) {
        world.stopSounds();
        sound.src = './assets/img/9_intro_outro_screens/start/sound-mute.png';
        soundInGame.src = './assets/img/9_intro_outro_screens/start/sound-mute.png';
    } else {
        world.resumeSounds();
        sound.src = './assets/img/9_intro_outro_screens/start/sound.png';
        soundInGame.src = './assets/img/9_intro_outro_screens/start/sound.png';
    }
}