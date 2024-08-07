const cells = document.querySelectorAll('.cell');
const result = document.querySelector('.result');
let currentPlayer = 'X';

// Função para verificar se um jogador venceu
function checkWin() {
    // ... lógica para verificar todas as combinações vencedoras ...
}

// Função para alternar entre os jogadores
function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Adicionar um event listener para cada célula
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.textContent === '') {
            cell.textContent = currentPlayer;
            if (checkWin()) {
                result.textContent = `${currentPlayer} venceu!`;
            } else {
                switchPlayer();
            }
        }
    });
});
