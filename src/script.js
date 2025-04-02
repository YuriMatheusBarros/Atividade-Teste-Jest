// Jogo da Velha para Iniciantes

/*
 * Variáveis globais
 * - tabuleiro: matriz 3x3 que representa o jogo
 * - jogadorAtual: 'X' ou 'O'
 * - jogoAtivo: controla se o jogo está em andamento
 */
let tabuleiro = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];
let jogadorAtual = 'X';
let jogoAtivo = true;

// Função principal que inicia o jogo
function iniciarJogo() {
  console.log('Bem-vindo ao Jogo da Velha!');
  console.log('Jogador X começa. Para jogar, use fazerJogada(linha, coluna)');
  console.log('Exemplo: fazerJogada(0, 0) - primeiro quadrado\n');
  
  mostrarTabuleiro();
}

// Mostra o tabuleiro no console
function mostrarTabuleiro() {
  console.log('   0   1   2');
  console.log(`0  ${tabuleiro[0][0]} | ${tabuleiro[0][1]} | ${tabuleiro[0][2]}`);
  console.log('  -----------');
  console.log(`1  ${tabuleiro[1][0]} | ${tabuleiro[1][1]} | ${tabuleiro[1][2]}`);
  console.log('  -----------');
  console.log(`2  ${tabuleiro[2][0]} | ${tabuleiro[2][1]} | ${tabuleiro[2][2]}`);
  console.log('');
}

// Faz uma jogada no tabuleiro
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


function verificarEmpate(tabuleiro) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (tabuleiro[i][j] === ' ') {
        return false;
      }
    }
  }
  return true;
}
// Função para reiniciar o jogo
function reiniciarJogo() {
  tabuleiro = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
  jogadorAtual = 'X';
  jogoAtivo = true;
  console.log('\nJogo reiniciado! Jogador X começa.');
  mostrarTabuleiro();
}

// Inicia o jogo
iniciarJogo();

module.exports = { iniciarJogo, mostrarTabuleiro, fazerJogada, verificarVencedor, verificarEmpate, reiniciarJogo };