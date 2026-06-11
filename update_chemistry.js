const fs = require('fs');

let dataJs = fs.readFileSync('data.js', 'utf8');

const newCalculateChemistry = `function calculateChemistry(comboA, comboB) {
  const pA = OVERALL_TITLES.find(t => t.combo === comboA);
  const pB = OVERALL_TITLES.find(t => t.combo === comboB);
  
  if (!pA || !pB) return null;

  const key = [comboA, comboB].sort().join('-');
  let result = { score: 60, title: "서로 다른 두 우주", clash: "육아관 차이로 인한 갈등", synergy: "서로의 부족함을 채워줄 수 있습니다." };

  // CHEMISTRY_MAP이 로드되어 있으면 사용
  if (typeof CHEMISTRY_MAP !== 'undefined' && CHEMISTRY_MAP[key]) {
    result = CHEMISTRY_MAP[key];
  } else {
    // Fallback logic
    if (comboA === comboB) {
      result.score = 70;
      result.title = "거울을 보는 듯한 동지";
      result.clash = "단점이 같아서 무너질 때 브레이크가 없습니다.";
      result.synergy = "말하지 않아도 서로를 100% 이해합니다.";
    }
  }

  // Add random variance (-4 to +4) for realism
  const finalScore = result.score + Math.floor(Math.random() * 9) - 4;

  return { 
    personaA: pA, 
    personaB: pB, 
    score: finalScore, 
    title: result.title, 
    clash: result.clash, 
    synergy: result.synergy 
  };
}`;

const startStr = "function calculateChemistry(comboA, comboB) {";
const startIndex = dataJs.indexOf(startStr);
if (startIndex !== -1) {
  dataJs = dataJs.substring(0, startIndex) + newCalculateChemistry + '\n';
  fs.writeFileSync('data.js', dataJs);
  console.log('✅ data.js calculateChemistry 업데이트 완료');
} else {
  console.log('❌ calculateChemistry 함수를 찾지 못했습니다.');
}

const htmlFiles = ['index.html', 'test.html', 'result.html', 'chemistry.html', 'gallery.html', 'about.html'];
for (const file of htmlFiles) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes('chemistry_data.js')) {
      content = content.replace('<script src="data.js"></script>', '<script src="chemistry_data.js"></script>\\n    <script src="data.js"></script>');
      fs.writeFileSync(file, content);
      console.log('✅ ' + file + ' 에 chemistry_data.js 추가 완료');
    }
  }
}
