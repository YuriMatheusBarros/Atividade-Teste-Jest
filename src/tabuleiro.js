let tabuleiro = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
let jogadorAtual = 'X';
let jogoAtivo = true;

function mostrarTabuleiro() {
  console.log('   0   1   2');
  console.log(`0  ${tabuleiro[0][0]} | ${tabuleiro[0][1]} | ${tabuleiro[0][2]}`);
  console.log('  -----------');
  console.log(`1  ${tabuleiro[1][0]} | ${tabuleiro[1][1]} | ${tabuleiro[1][2]}`);
  console.log('  -----------');
  console.log(`2  ${tabuleiro[2][0]} | ${tabuleiro[2][1]} | ${tabuleiro[2][2]}`);
  console.log('');
}

module.exports = { tabuleiro, jogadorAtual, jogoAtivo, mostrarTabuleiro };
