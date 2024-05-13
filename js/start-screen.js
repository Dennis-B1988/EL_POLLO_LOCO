

function startGame() {
    document.querySelector('.start-screen').style.display = 'none';
    document.querySelector('.start-title').style.display = 'none';
    document.querySelector('.game-content').style.display = 'flex';
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
    if (sound.src.includes('sound.png')) {
        sound.src = './assets/img/9_intro_outro_screens/start/sound-mute.png';
    } else {
        sound.src = './assets/img/9_intro_outro_screens/start/sound.png';
    }
}