const { reiniciarJogo } = require('../src/script');

describe('Testes da função reiniciarJogo', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {}); // Mock do console.log
  });

  afterEach(() => {
    console.log.mockRestore(); // Restaurar o console.log após cada teste
  });

  test('reiniciarJogo deve resetar o tabuleiro', () => {
    reiniciarJogo();
    expect(console.log).toHaveBeenCalledWith("\nJogo reiniciado! Jogador X começa.");
  });
});
