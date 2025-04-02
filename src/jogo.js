const { tabuleiro, jogadorAtual, jogoAtivo, mostrarTabuleiro } = require('./tabuleiro');

function iniciarJogo() {
  console.log('Bem-vindo ao Jogo da Velha!');
  console.log('Jogador X começa. Para jogar, use fazerJogada(linha, coluna)');
  console.log('Exemplo: fazerJogada(0, 0) - primeiro quadrado\n');
  mostrarTabuleiro();
}

function reiniciarJogo() {
  tabuleiro.forEach((row, i) => tabuleiro[i] = [' ', ' ', ' ']);
  jogadorAtual = 'X';
  jogoAtivo = true;
  console.log('\nJogo reiniciado! Jogador X começa.');
  mostrarTabuleiro();
}

module.exports = { iniciarJogo, reiniciarJogo };
