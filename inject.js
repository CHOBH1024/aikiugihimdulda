const fs = require('fs');
let html = fs.readFileSync('result.html', 'utf8');
html = html.replace('renderResults(results);', 'try { renderResults(results); console.log("RENDER SUCCESS"); } catch(e) { console.error("RENDER ERROR:", e.stack); }');
fs.writeFileSync('result.html', html);
console.log('Injected try-catch');
