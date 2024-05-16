

function startGame() {
    document.querySelector('.start-screen').style.display = 'none';
    document.querySelector('.game-content').style.display = 'flex';
}

function endGame() {
    document.querySelector('.game-won').classList.add('none');
    document.querySelector('.game-lost').classList.add('none');
    document.querySelector('.game-content').style.display = 'none';
    document.querySelector('.start-screen').style.display = 'flex';
}


function legalNotice() {
    document.querySelector('.start-screen').style.display = 'none';
    document.querySelector('.legal-notice').style.display = 'flex';
}


function goBackLegalNotice() {
    document.querySelector('.legal-notice').style.display = 'none';
    document.querySelector('.start-screen').style.display = 'flex';
}


function toggleControls() {
    document.querySelector('.start-screen').style.display = 'none';
    document.querySelector('.controls').style.display = 'flex';
}


function goBackControls() {
    document.querySelector('.controls').style.display = 'none';
    document.querySelector('.start-screen').style.display = 'flex';
}


function toggleSound() {
    let sound = document.querySelector('.sound img');
    let soundInGame = document.querySelector('.toggle-sound-game img');
    if (sound.src.includes('sound.png') || soundInGame.src.includes('sound.png')) {
        world.stopSounds();
        sound.src = './assets/img/9_intro_outro_screens/start/sound-mute.png';
        soundInGame.src = './assets/img/9_intro_outro_screens/start/sound-mute.png';
    } else {
        world.soundOn = true;
        sound.src = './assets/img/9_intro_outro_screens/start/sound.png';
        soundInGame.src = './assets/img/9_intro_outro_screens/start/sound.png';
    }
}


// function toggleSoundInGame() {
//     let sound = document.querySelector('.toggle-sound-game img');
//     if (sound.src.includes('sound.png')) {
//         sound.src = './assets/img/9_intro_outro_screens/start/sound-mute.png';
//     } else {
//         sound.src = './assets/img/9_intro_outro_screens/start/sound.png';
//     }
// }