// script.js

const grid = document.querySelector('.grid');
const nextPieceDisplay = document.querySelector('.next-piece');
const scoreDisplay = document.querySelector('.score');
const levelDisplay = document.querySelector('.level');

const width = 10;
const height = 18;
const blocks = [
    [1,1,1,1,0],
    [1,1,1,1,0],
    [0,1,0,0,1],
    [1,0,0,0,1],
    [0,1,1,0,0],
    [1,1,0,0,0],
    [0,0,1,1,0]
];

let currentPosition = 4;
let currentRotation = 0;
let currentPiece = 0;
let nextRandom = 0;
let timerId;
let score = 0;
let level = 1;

// The Tetrominoes
const theTetrominoes = [
    [
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [0,1,0,0],
        [1,1,1,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [1,0,0,0],
        [1,1,1,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [1,1,1,0],
        [0,1,0,0],
        [0,1,0,0],
        [0,0,0,0]
    ],
    [
        [0,1,1,1],
        [0,1,0,0],
        [0,1,0,0],
        [0,0,0,0]
    ],
    [
        [1,1,1],
        [1,0,0],
        [1,0,0]
    ]
];

// Display the Tetrominoes in the next piece area
function displayNextPiece() {
    nextPieceDisplay.innerHTML = '';
    const nextTetromino = theTetrominoes[nextRandom];
    nextTetromino.forEach((row, y) => {
        row.forEach((value, x) => {
            const cell = document.createElement('div');
            cell.classList.add('block');
            cell.style.backgroundColor = value ? '#000' : '#eee';
            cell.style.width = '24px';
            cell.style.height = '24px';
            nextPieceDisplay.appendChild(cell);
        });
    });
}

// The function that starts the game
function startGame() {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    } else {
        displayNextPiece();
        draw();
        timerId = setInterval(moveDown, 1000);
        nextRandom = Math.floor(Math.random() * theTetrominoes.length);
        displayNextPiece();
    }
}

// Function that makes the Tetrominoes move down
function moveDown() {
    currentPosition += width;
    draw();
    freeze();
    checkForGameOver();
    showScore();
    showLevel();
}

// Freeze function
function freeze() {
    if (currentPosition + currentRotation * width + width * height >= width * height) {
        currentRotation = 0;
        currentPosition = currentPosition - width * height;
        draw();
        addBlockToGrid();
        checkForGameOver();
        getNewPiece();
    }
}

// Show Score
function showScore() {
    scoreDisplay.innerHTML = `Score: ${score}`;
}

// Show Level
function showLevel() {
    levelDisplay.innerHTML = `Level: ${level}`;
}

// Add a block to the grid
function addBlockTo
