const fs = require('fs');
let data = fs.readFileSync('data.js', 'utf8');

const calcResultsNew = `
  // 종합 페르소나 결정
  const overallPersona = determineOverallPersona(dimensionTypes);

  // 가장 취약한 차원 도출
  let lowestScore = 999;
  let lowestDimId = 'emotional';
  Object.keys(dimensionTypes).forEach(dimId => {
    if (dimensionTypes[dimId].normalizedScore < lowestScore) {
      lowestScore = dimensionTypes[dimId].normalizedScore;
      lowestDimId = dimId;
    }
  });

  const simulation = SIMULATIONS[lowestDimId];

  // 서브타입 분석 인덱스 도출 (0~3)
  // 40문항 테스트의 경우 answers 배열 길이(40) 전체 합산 결과를 바탕으로 고유한 해시값 도출
  const totalSum = answers.reduce((sum, val) => sum + (val || 0), 0);
  const subtypeIndex = totalSum % 4;

  return {
    dimensionTypes,
    dimensionScores,
    overallPersona,
    lowestDimId,
    simulation,
    subtypeIndex
  };
`;

data = data.replace(/\/\/ 종합 페르소나 결정[\s\S]*?return \{[\s\S]*?\};/, calcResultsNew);
fs.writeFileSync('data.js', data);
console.log('calculateResults updated');
