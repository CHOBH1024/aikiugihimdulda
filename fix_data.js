const fs = require('fs');
let data = fs.readFileSync('data.js', 'utf8');

// Replace all occurrences of "} \n academicBacking" with "},\n academicBacking"
data = data.replace(/}\s*academicBacking:/g, '},\n    academicBacking:');

fs.writeFileSync('data.js', data);
console.log('Fixed missing comma in data.js');
