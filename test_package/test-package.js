// test-package.js

// Import the checkPassword function from your published package
const { checkPassword } = require('av-password-strength-checker');

// Test passwords array
const passwords = [
  '',
  '123',
  'password',
  'Password1',
  'My$ecureP@ss123'
];

// Run tests
passwords.forEach(pwd => {
  const result = checkPassword(pwd);
  console.log(`Password: "${pwd}"`);
  console.log(`Strength: ${result.strength} (${result.score}/5)`);
  console.log('Feedback:');
  result.feedback.forEach(msg => console.log(` - ${msg}`));
  console.log('-------------------------\n');
});
