// script.js

const grid = document.querySelector('.grid');
const nextPieceDisplay = document.querySelector('.next-piece');
const scoreDisplay = document.querySelector('.score');
const levelDisplay = document.querySelector('.level');

const width = 10;
const height = 18;
const blocks = [
    [0,1,1,1,0],
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
        [1,1,
