// script.js
const cells = document.querySelectorAll('.cell');
const board = document.getElementById('board');
const result = document.getElementById('result');
const restartButton = document.getElementById('restart');

let currentPlayer = 'X';
let gameIsOver = false;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

function handleClick(e) {
    if (gameIsOver || e.target.textContent !== '') return;

    e.target.textContent = currentPlayer;
    if (checkWin()) {
        result.textContent = `${currentPlayer} venceu!`;
        gameIsOver = true;
    } else if (checkDraw()) {
        result.textContent = 'Empate!';
        gameIsOver = true;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].textContent === currentPlayer;
        });
    });
}

function checkDraw() {
    return [...cells].every(cell => cell.textContent !== '');
}

restartButton.addEventListener('click', () => {
    gameIsOver = false;
    currentPlayer = 'X';
    result.textContent = '';
    cells.forEach(cell => (cell.textContent = ''));
});
