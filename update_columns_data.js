const fs = require('fs');
let data = fs.readFileSync('data.js', 'utf8');

const columnMappings = {
  warm: [
    { url: '/columns/separation-anxiety.html', title: '분리불안 극복의 열쇠: 따뜻함 속에 숨겨진 단호함', tags: '#애착 #분리불안 #안정감' },
    { url: '/columns/parent-burnout.html', title: '다 퍼주는 부모를 위한 번아웃 탈출 가이드', tags: '#번아웃 #자기돌봄 #경계선' },
    { url: '/columns/praise-vs-encouragement.html', title: '무조건적인 칭찬의 함정: 칭찬과 격려의 차이', tags: '#칭찬 #자존감 #결과vs과정' }
  ],
  structured: [
    { url: '/columns/discipline-boundaries.html', title: '흔들리지 않는 훈육: 단호함과 유연함의 황금비율', tags: '#훈육 #규칙 #일관성' },
    { url: '/columns/digital-media.html', title: '디지털 미디어 노출, 통제만이 정답일까?', tags: '#미디어교육 #규칙설정 #자기통제' },
    { url: '/columns/sibling-rivalry.html', title: '형제자매 갈등: 심판이 아닌 중재자가 되는 법', tags: '#형제갈등 #공평함 #사회성' }
  ],
  free: [
    { url: '/columns/autonomy-support.html', title: '스스로 자라는 아이들: 방임과 자율 존중의 차이', tags: '#자율성 #선택권 #독립성' },
    { url: '/columns/crisis-resilience.html', title: '넘어져도 괜찮아: 회복탄력성을 키워주는 부모의 한마디', tags: '#회복탄력성 #실패용인 #도전' },
    { url: '/columns/cognitive-growth.html', title: '놀이가 밥이다: 일상 속 숨겨진 인지 성장 모멘트', tags: '#인지발달 #놀이학습 #호기심' }
  ],
  wise: [
    { url: '/columns/cognitive-growth.html', title: '영재는 태어나는가, 길러지는가? 학습 마인드셋의 비밀', tags: '#메타인지 #성장마인드셋 #학습' },
    { url: '/columns/praise-vs-encouragement.html', title: '평가하는 칭찬 대신, 내면을 단단하게 만드는 격려', tags: '#내적동기 #격려 #자아존중감' },
    { url: '/columns/scientific-foundation.html', title: 'Mirror Inside 진단 도구의 과학적·학술적 근거', tags: '#진단근거 #발달심리학 #학술적배경' }
  ],
  balanced: [
    { url: '/columns/discipline-boundaries.html', title: '따뜻하면서도 단호한 "권위 있는 부모"의 비밀', tags: '#바움린드이론 #감정코칭 #행동통제' },
    { url: '/columns/emotional-bonding.html', title: '안정 애착을 형성하는 하루 15분의 기적', tags: '#정서교감 #안정애착 #상호작용' },
    { url: '/columns/parent-burnout.html', title: '완벽한 부모 강박에서 벗어나기: 굿 이너프 마더', tags: '#완벽주의 #번아웃 #자기수용' }
  ],
  empathetic: [
    { url: '/columns/emotional-bonding.html', title: '아이의 감정 폭풍우 속에서 부모의 멘탈 지키기', tags: '#감정조절 #공감 #심리적거리' },
    { url: '/columns/separation-anxiety.html', title: '엄마 껌딱지 아이, 건강하게 독립시키는 애착 수업', tags: '#애착형성 #독립심 #불안감소' },
    { url: '/columns/sibling-rivalry.html', title: '첫째의 상실감과 둘째의 질투, 어떻게 공감해줄까?', tags: '#형제갈등 #감정수용 #정서적지지' }
  ],
  creative: [
    { url: '/columns/cognitive-growth.html', title: '틀을 깨는 아이로 키우는 부모의 창의적 스캐폴딩', tags: '#창의력 #스캐폴딩 #비고츠키' },
    { url: '/columns/digital-media.html', title: '유튜브와 스마트폰, 독창적인 창작 도구로 활용하기', tags: '#디지털리터러시 #콘텐츠창작 #미디어' },
    { url: '/columns/autonomy-support.html', title: '엉뚱한 상상력과 엉망진창 방 구석이 의미하는 것', tags: '#호기심 #자기표현 #자율존중' }
  ],
  resilient: [
    { url: '/columns/crisis-resilience.html', title: '실패를 두려워하지 않는 아이들의 공통점', tags: '#회복탄력성 #실패의재해석 #마음근력' },
    { url: '/columns/praise-vs-encouragement.html', title: '결과를 칭찬받은 아이 vs 노력을 인정받은 아이', tags: '#과정중심 #성취감 #그릿' },
    { url: '/columns/parent-burnout.html', title: '부모가 먼저 보여주는 회복의 기술', tags: '#감정회복 #롤모델 #스트레스관리' }
  ]
};

for (const key of Object.keys(columnMappings)) {
  const colsStr = JSON.stringify(columnMappings[key], null, 4);
  const regex = new RegExp(`(combo:\\s*'${key}'[\\s\\S]*?subtypes:\\s*\\[[\\s\\S]*?\\])`);
  
  data = data.replace(regex, (match, p1) => {
    return p1 + `,\n    recommendedColumns: ${colsStr}`;
  });
}

fs.writeFileSync('data.js', data);
console.log('recommendedColumns appended to data.js');
