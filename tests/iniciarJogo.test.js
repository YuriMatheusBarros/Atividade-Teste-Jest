const { iniciarJogo } = require('../src/script');

test('iniciarJogo deve exibir mensagens iniciais', () => {
  console.log = jest.fn(); // Espionando o console.log
  iniciarJogo();
  expect(console.log).toHaveBeenCalledWith('Bem-vindo ao Jogo da Velha!');
});
