const { fazerJogada, reiniciarJogo } = require('../src/script');

describe('Testes da função fazerJogada', () => {
  let tabuleiro;

  beforeEach(() => {
    tabuleiro = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ]; // Certifica que o tabuleiro começa vazio

    jest.spyOn(console, 'log').mockImplementation(() => {}); // Evita poluição do terminal
    reiniciarJogo(); // Garante um estado inicial válido
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test('fazerJogada deve permitir uma jogada válida', () => {
    fazerJogada(0, 0);
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining("X"));
  });

  test('fazerJogada deve exibir mensagem de erro ao passar posição inválida', () => {
    fazerJogada(5, 5); // Fora do intervalo 0-2
    expect(console.log).toHaveBeenCalledWith("Posição inválida! Use valores entre 0 e 2.");
  });
});
