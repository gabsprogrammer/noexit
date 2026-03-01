const fs = require('fs');
let code = fs.readFileSync('main.js', 'utf8');

// Replace \` with `
code = code.replace(/\\`/g, '`');

// Replace \${ with ${
code = code.replace(/\\\${/g, '${');

fs.writeFileSync('main.js', code);
console.log('Fixed syntax errors in main.js again!');
