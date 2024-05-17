/**
 * Hides the start screen and displays the game content.
 *
 */
function startGame() {
    document.querySelector('.start-screen').style.display = 'none';
    document.querySelector('.game-content').style.display = 'flex';
}


/**
 * Function to end the game by hiding game result elements and displaying the start screen.
 *
 */
function endGame() {
    document.querySelector('.game-won').classList.add('none');
    document.querySelector('.game-lost').classList.add('none');
    document.querySelector('.game-content').style.display = 'none';
    document.querySelector('.start-screen').style.display = 'flex';
}


/**
 * Shows the legal notice by hiding the start screen and displaying the legal notice screen.
 *
 */
function legalNotice() {
    document.querySelector('.start-screen').style.display = 'none';
    document.querySelector('.legal-notice').style.display = 'flex';
}


/**
 * Hides the legal notice and displays the start screen.
 */
function goBackLegalNotice() {
    document.querySelector('.legal-notice').style.display = 'none';
    document.querySelector('.start-screen').style.display = 'flex';
}


/**
 * Toggles the visibility of the start screen and controls.
 *
 */
function toggleControls() {
    document.querySelector('.start-screen').style.display = 'none';
    document.querySelector('.controls').style.display = 'flex';
}


/**
 * Hides the controls and displays the start screen.
 *
 */
function goBackControls() {
    document.querySelector('.controls').style.display = 'none';
    document.querySelector('.start-screen').style.display = 'flex';
}