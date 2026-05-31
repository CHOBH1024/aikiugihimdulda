const fs = require('fs');

// 1. result.html: Fix src="" and Kakao Fallback
let resultHtml = fs.readFileSync('result.html', 'utf8');
resultHtml = resultHtml.replace('<img id="capImg" src="" class="capture-img">', '<img id="capImg" class="capture-img">');
resultHtml = resultHtml.replace(
  "alert('결과 링크와 내용이 클립보드에 복사되었습니다!\\n카카오톡 대화창에 붙여넣기 하여 공유해보세요.');",
  "alert('결과 링크와 내용이 클립보드에 복사되었습니다!\\n카카오톡 대화창에 붙여넣기 하여 공유해보세요.');\n                }).catch(() => {\n                    alert('클립보드 복사에 실패했습니다. 브라우저의 URL을 직접 복사해 주세요.');"
);
fs.writeFileSync('result.html', resultHtml);

// 2. style.css: Fix overflow and captureArea isolation
let styleCss = fs.readFileSync('style.css', 'utf8');
styleCss = styleCss.replace('overflow-x: hidden;', 'overflow-x: hidden;\n  width: 100vw;'); // Ensure strict no-scroll
// Update captureArea if it exists in style.css (wait, captureArea CSS is inline in result.html)
fs.writeFileSync('style.css', styleCss);

// Let's fix captureArea in result.html
resultHtml = resultHtml.replace('z-index: -100;', 'z-index: -100;\n            pointer-events: none;\n            visibility: hidden;');
fs.writeFileSync('result.html', resultHtml);

// 3. data.js: Better Hash and try-catch for localStorage
let dataJs = fs.readFileSync('data.js', 'utf8');

const hashFix = `const totalSum = answers.reduce((sum, val, idx) => sum + (val || 0) * (idx + 1), 0);`;
dataJs = dataJs.replace('const totalSum = answers.reduce((sum, val) => sum + (val || 0), 0);', hashFix);

const saveLoadFix = `
function saveResults(results) {
  try {
    localStorage.setItem('mirrorInsideResults', JSON.stringify(results));
    localStorage.setItem('mirrorInsideTimestamp', new Date().toISOString());
  } catch (e) { console.error('LocalStorage save failed', e); }

  let history = [];
  try {
    const historyData = localStorage.getItem('mirrorInsideHistory');
    if (historyData) history = JSON.parse(historyData);
  } catch (e) { console.error('History load failed', e); }

  history.push({
    date: new Date().toISOString(),
    results: results
  });

  try {
    localStorage.setItem('mirrorInsideHistory', JSON.stringify(history));
  } catch (e) { console.error('History save failed', e); }
}

function loadResults() {
  try {
    const data = localStorage.getItem('mirrorInsideResults');
    if (data) return JSON.parse(data);
  } catch (e) { console.error('LocalStorage load failed', e); }
  return null;
}
`;

dataJs = dataJs.replace(/function saveResults\(results\) \{[\s\S]*?return null;\n\}/, saveLoadFix.trim());
fs.writeFileSync('data.js', dataJs);

console.log('All Dev Fixes applied successfully');
