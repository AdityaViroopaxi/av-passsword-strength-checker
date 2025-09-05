// test/index.test.js

const { checkPassword } = require('../src/index.js');

test('detects weak password', () => {
  expect(checkPassword('123').strength).toBe('WEAK');
});

test('detects strong password', () => {
  expect(checkPassword('Str0ng!Pass').strength).toBe('STRONG');
});
