const { tabuleiro, jogadorAtual, jogoAtivo, mostrarTabuleiro } = require('./tabuleiro');
const { verificarVencedor, verificarEmpate } = require('./verificacoes');

function fazerJogada(linha, coluna) {
  if (!Array.isArray(tabuleiro) || tabuleiro.length !== 3 || !tabuleiro.every(row => Array.isArray(row) && row.length === 3)) {
    throw new Error("Tabuleiro inválido: deve ser uma matriz 3x3.");
  }

  if (linha < 0 || linha > 2 || coluna < 0 || coluna > 2 || tabuleiro[linha][coluna] !== ' ') {
    console.log("Posição inválida! Use valores entre 0 e 2.");
    return;
  }

  tabuleiro[linha][coluna] = jogadorAtual;
  console.log(`\nJogador ${jogadorAtual} jogou na posição (${linha}, ${coluna})`);
  
  if (verificarVencedor(tabuleiro)) {
    console.log(`Jogador ${jogadorAtual} venceu!`);
    return;
  }

  jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X'; 
}

module.exports = { fazerJogada };
