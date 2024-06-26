const canvas = document.getElementById('jogo');
const ctx = canvas.getContext('2d');

const TAMANHO_CELULA = 10;
let celulasX = canvas.width / TAMANHO_CELULA;
let celulasY = canvas.height / TAMANHO_CELULA;

let cobra = [{ x: 10, y: 10 }];
let direcao = 'direita';
let comidaX;
let comidaY;
let pontuacao = 0;

function desenharCobra() {
    ctx.fillStyle = '#000';
    for (let i = 0; i < cobra.length; i++) {
        ctx.fillRect(cobra[i].x * TAMANHO_CELULA, cobra[i].y * TAMANHO_CELULA, TAMANHO_CELULA, TAMANHO_CELULA);
    }
}

function desenharComida() {
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(comidaX * TAMANHO_CELULA, comidaY * TAMANHO_CELULA, TAMANHO_CELULA, TAMANHO_CELULA);
}

function atualizar() {
    let cabeca = { x: cobra[0].x, y: cobra[0].y };

    switch (direcao) {
        case 'cima':
            cabeca.y--;
            break;
        case 'baixo':
            cabeca.y++;
            break;
        case 'esquerda':
            cabeca.x--;
            break;
        case 'direita':
            cabeca.x++;
            break;
    }

    if (cabeca.x < 0 || cabeca.x >= celulasX || cabeca.y < 0 || cabeca.y >= celulasY) {
        gameOver();
        return;
    }

    for (let i = 1; i < cobra.length; i++) {
        if (cabeca.x === cobra[i].x && cabeca.y === cobra[i].y) {
            gameOver();
            return;
        }
    }

    cobra.unshift(cabeca);

    if (cabeca.x === comidaX && cabeca.y === comidaY) {
        pontuacao++;
        document.getElementById('pontuacao').innerHTML = pontuacao;
        gerarComida();
    } else {
        cobra.pop();
    }
}

function gerarComida() {
    comidaX = Math.floor(Math.random() * celulasX);
    comidaY = Math.floor(Math.random() * celulasY);
}

function gameOver() {
    clearInterval(jogoIntervalo);
    alert('Game Over! Pontuação final: ' + pontuacao);
}

function iniciarJogo() {
    // Definir intervalo de tempo para atualizar o jogo
    jogoIntervalo = setInterval(atualizar, 100);

    // Gerar comida inicial
    gerarComida();

    // Adicionar evento de teclado para controlar a cobra
    document.addEventListener('keydown', function(evento) {
        switch (evento.key) {
            case 'ArrowUp':
                direcao = 'cima';
                break;
            case 'ArrowDown':
                direcao = 'baixo';
                break;
            case 'ArrowLeft':
                direcao = 'esquerda';
                break;
            case 'ArrowRight':
                direcao = 'direita';
                break;
        }
    });
}
