const fs = require('fs');
let html = fs.readFileSync('chemistry.html', 'utf8');
html = html.replace('<p>${chem.clash}</p>', '<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-body);\">${chem.clash}</div>');
html = html.replace('<p>${chem.synergy}</p>', '<div style=\"font-size: 1.05rem; line-height: 1.7; color: var(--text-body);\">${chem.synergy}</div>');
fs.writeFileSync('chemistry.html', html);
console.log('✅ chemistry.html <p> 태그 -> <div> 태그로 변경 완료');
