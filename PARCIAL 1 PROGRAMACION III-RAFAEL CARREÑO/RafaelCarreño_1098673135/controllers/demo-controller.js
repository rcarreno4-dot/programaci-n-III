const board = document.querySelector('#game-board');
const target = document.querySelector('#target');
const startButton = document.querySelector('#start-button');
const scoreElement = document.querySelector('#score');
const timeElement = document.querySelector('#time');
const message = document.querySelector('#game-message');
const status = document.querySelector('#game-status');

let score = 0;
let timeLeft = 20;
let timerId;
let gameRunning = false;

function moveTarget() {
    const padding = 24;
    const maxX = board.clientWidth - target.offsetWidth - padding;
    const maxY = board.clientHeight - target.offsetHeight - padding;
    target.style.left = `${padding + Math.random() * Math.max(maxX - padding, 0)}px`;
    target.style.top = `${padding + Math.random() * Math.max(maxY - padding, 0)}px`;
}

function finishGame() {
    gameRunning = false;
    clearInterval(timerId);
    target.classList.remove('is-visible');
    message.textContent = `Tiempo terminado. Lograste ${score} puntos.`;
    message.classList.add('is-visible');
    startButton.textContent = 'Jugar de nuevo →';
    status.textContent = 'Partida finalizada';
}

function startGame() {
    score = 0;
    timeLeft = 20;
    gameRunning = true;
    scoreElement.textContent = score;
    timeElement.textContent = timeLeft;
    message.classList.remove('is-visible');
    target.classList.add('is-visible');
    startButton.textContent = 'Reiniciar partida →';
    status.textContent = '¡Encuentra el pulso!';
    moveTarget();
    clearInterval(timerId);
    timerId = setInterval(() => {
        timeLeft -= 1;
        timeElement.textContent = timeLeft;
        if (timeLeft <= 0) finishGame();
    }, 1000);
}

target.addEventListener('click', () => {
    if (!gameRunning) return;
    score += 1;
    scoreElement.textContent = score;
    moveTarget();
});

startButton.addEventListener('click', startGame);
window.addEventListener('resize', () => { if (gameRunning) moveTarget(); });
