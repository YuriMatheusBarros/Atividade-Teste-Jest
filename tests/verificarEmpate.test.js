// tests/verificarEmpate.test.js
const { verificarEmpate } = require('../src/script');

test('verificarEmpate deve detectar empate', () => {
  let tabuleiro = [['X', 'O', 'X'], ['O', 'X', 'O'], ['O', 'X', 'O']];
  expect(verificarEmpate(tabuleiro)).toBe(true);
});
