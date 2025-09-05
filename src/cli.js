// src/cli.js

const { checkPassword } = require('./index.js');
const args = process.argv.slice(2);

if (args.length > 0) {
  const password = args[0];
  const results = checkPassword(password);
  console.log(`Password: "${password}"`);
  console.log(`Strength: ${results.strength} (${results.score}/5)`);
  results.feedback.forEach(msg => console.log(msg));
} else {
  console.log('Usage: av-password-strength-checker <password>');
}
