

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