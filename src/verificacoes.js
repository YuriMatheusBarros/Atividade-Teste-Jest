const { tabuleiro } = require('./tabuleiro');

function verificarVencedor(tabuleiro) {
  if (!Array.isArray(tabuleiro) || tabuleiro.length !== 3 || !tabuleiro.every(row => Array.isArray(row) && row.length === 3)) {
    throw new Error("Tabuleiro inválido: deve ser uma matriz 3x3.");
  }

  // Verifica linhas
  for (let i = 0; i < 3; i++) {
    if (tabuleiro[i][0] !== ' ' && tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2]) {
      return true;
    }
  }

  // Verifica colunas
  for (let j = 0; j < 3; j++) {
    if (tabuleiro[0][j] !== ' ' && tabuleiro[0][j] === tabuleiro[1][j] && tabuleiro[1][j] === tabuleiro[2][j]) {
      return true;
    }
  }

  // Verifica diagonal principal
  if (tabuleiro[0][0] !== ' ' && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2]) {
    return true;
  }

  // Verifica diagonal secundária
  if (tabuleiro[0][2] !== ' ' && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0]) {
    return true;
  }

  return false;
}

function verificarEmpate() {
  return tabuleiro.every(row => row.every(cell => cell !== ' '));
}

module.exports = { verificarVencedor, verificarEmpate };
