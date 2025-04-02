// tests/verificarVencedor.test.js
const { verificarVencedor } = require('../src/script');

test('verificarVencedor deve detectar vitória em linha', () => {
  let tabuleiro = [['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' ']];
  expect(verificarVencedor(tabuleiro)).toBe(true);
});