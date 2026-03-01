const fs = require('fs');
let code = fs.readFileSync('main.js', 'utf8');

// Fix string backticks
code = code.split('\\\\`').join('`');

// Fix string interpolation dollar signs
code = code.split('\\\\$').join('$');

// Fix malformed svg tags (spaces added by mistake somewhere)
code = code.replace(/< svg/g, '<svg');
code = code.replace(/<\\/svg > /g, '</svg > ');

fs.writeFileSync('main.js', code);
console.log('Fixed syntax errors in main.js');
