const { mostrarTabuleiro } = require('../src/script');

test('mostrarTabuleiro deve exibir o tabuleiro', () => {
  console.log = jest.fn();
  mostrarTabuleiro();
  expect(console.log).toHaveBeenCalled();
});