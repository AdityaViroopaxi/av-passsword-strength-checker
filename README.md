# av-password-strength-checker

A lightweight password strength checker for Node.js projects.

This package enables the evaluation of password strength based on multiple criteria. It provides precise feedback for users to create strong passwords. The tool can be used as a Node.js module or a command-line utility.

---

## 1. Features

- Evaluates password length, lowercase, uppercase, numeric, and special character criteria  
- Provides feedback on missing requirements for strengthening passwords  
- CLI tool for command-line password checking  
- Easy integration as a Node.js module  
- No external runtime dependencies apart from dev/testing  
- Includes automated tests with Jest  

---

## 2. Technology Stack

- Language: JavaScript (Node.js)  
- CLI: Built-in `readline` and `process` modules  
- Testing: Jest  

---

## 3. Installation

Install with npm:

```bash
npm install av-password-strength-checker
```

For global CLI usage:

```bash
npm install -g av-password-strength-checker
```

---

## 4. Usage

### 4.1 As a Node.js Library

```javascript
const { checkPassword } = require('av-password-strength-checker');

const result = checkPassword('MyPassword123!');
console.log(`Strength: ${result.strength}`);
console.log('Feedback:');
result.feedback.forEach(msg => console.log(`- ${msg}`));
```

### 4.2 As a CLI Tool (after global installation)

```bash
password-strength-checker YourPassword123!
```

**Sample Output:**

```
Password: "YourPassword123!"
Strength: GOOD (4/5)
✓ Good length
✓ Has lowercase
✓ Has uppercase
✓ Has numbers
✗ Add special characters
```

---

## 5. Password Strength Logic

**Criteria:**
- Length: Minimum 8 characters  
- Lowercase: At least one lowercase letter `[a-z]`  
- Uppercase: At least one uppercase letter `[A-Z]`  
- Numbers: At least one numeric digit `[0-9]`  
- Special Characters: At least one symbol (e.g., `!@#$%^&*()`)  

**Strength Mapping:**

| Score | Strength |
|-------|-----------|
| 0–2   | WEAK      |
| 3     | OKAY      |
| 4     | GOOD      |
| 5     | STRONG    |

Feedback messages indicate criteria met and what is missing.

---

## 6. File Structure

```
src/index.js       # Core logic for password strength evaluation
src/cli.js         # Command-line interface (CLI)
test/index.test.js # Jest-based automated tests for code reliability
package.json       # Project metadata, configuration, dependencies
README.txt         # Project documentation
```

---

## 7. Security Considerations

- Evaluates password complexity and diversity.  
- Does not check against breached password databases.  
- Should be used alongside additional security measures such as hashing, rate limiting, and breach checks.  

---
