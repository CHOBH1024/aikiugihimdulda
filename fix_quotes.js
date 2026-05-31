const fs = require('fs');
let data = fs.readFileSync('data.js', 'utf8');

data = data.replace(/'이해'가 '통제'보다/g, `"이해"가 "통제"보다`);
data = data.replace(/'이건 네 감정이고 저건 내 감정'이라는/g, `"이건 네 감정이고 저건 내 감정"이라는`);

fs.writeFileSync('data.js', data);
console.log('Fixed quotes');
