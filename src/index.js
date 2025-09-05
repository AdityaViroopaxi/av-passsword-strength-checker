// src/index.js

function checkPassword(password) {
  let score = 0;
  let feedback = [];

  if (password.length >= 8) {
    score++;
    feedback.push("✓ Good length");
  } else {
    feedback.push("✗ Too short (need 8+ chars)");
  }
  if (/[a-z]/.test(password)) {
    score++;
    feedback.push("✓ Has lowercase");
  } else {
    feedback.push("✗ Add lowercase letters");
  }
  if (/[A-Z]/.test(password)) {
    score++;
    feedback.push("✓ Has uppercase");
  } else {
    feedback.push("✗ Add uppercase letters");
  }
  if (/\d/.test(password)) {
    score++;
    feedback.push("✓ Has numbers");
  } else {
    feedback.push("✗ Add numbers");
  }
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    score++;
    feedback.push("✓ Has special chars");
  } else {
    feedback.push("✗ Add special characters");
  }

  let strength = "";
  if (score <= 2) strength = "WEAK";
  else if (score <= 3) strength = "OKAY";
  else if (score <= 4) strength = "GOOD";
  else strength = "STRONG";

  return { score, strength, feedback };
}

module.exports = { checkPassword };
