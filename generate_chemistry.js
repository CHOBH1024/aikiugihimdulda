const fs = require('fs');

const PERSONAS = [
  'warm',       // 따뜻한/감성형
  'structured', // 구조/체계형
  'free',       // 자유/자율형
  'wise',       // 지혜/통찰형
  'balanced',   // 안정형
  'empathetic', // 공감형
  'creative',   // 창의형
  'resilient'   // 회복/탄력형
];

// Names for titles
const names = {
  warm: "포근한 수용",
  structured: "단단한 규칙",
  free: "방목형 자유",
  wise: "깊은 통찰",
  balanced: "흔들림 없는 안정",
  empathetic: "섬세한 공감",
  creative: "엉뚱발랄 창의",
  resilient: "강철 멘탈 회복"
};

const getBaseScore = (a, b) => {
  if (a === b) return 70;
  
  // High synergy pairs (Complementary)
  const highPairs = [
    ['structured', 'warm'], ['structured', 'empathetic'],
    ['free', 'wise'], ['creative', 'structured'],
    ['resilient', 'empathetic'], ['balanced', 'free'],
    ['wise', 'warm']
  ];
  
  // Low synergy pairs (Clashing)
  const lowPairs = [
    ['structured', 'free'], ['structured', 'creative'],
    ['warm', 'free'], ['wise', 'empathetic'] // sometimes too much thinking vs too much feeling
  ];

  for (let pair of highPairs) {
    if ((pair[0] === a && pair[1] === b) || (pair[0] === b && pair[1] === a)) return 85;
  }
  for (let pair of lowPairs) {
    if ((pair[0] === a && pair[1] === b) || (pair[0] === b && pair[1] === a)) return 45;
  }
  
  // Balanced interactions
  if (a === 'balanced' || b === 'balanced') return 75;
  
  return 60; // Default
};

// Generate 36 pairs
const CHEMISTRY_MAP = {};

for (let i = 0; i < PERSONAS.length; i++) {
  for (let j = i; j < PERSONAS.length; j++) {
    const a = PERSONAS[i];
    const b = PERSONAS[j];
    
    // Create key sorting alphabetically
    const key = [a, b].sort().join('-');
    const score = getBaseScore(a, b);
    
    let title = "";
    let clash = "";
    let synergy = "";

    if (a === b) {
      title = `거울을 보는 듯한 동지 (${names[a]})`;
      clash = `둘 다 육아 가치관이 너무 똑같아서, 한 명이 무너지거나 약점이 노출될 때 이를 보완해줄 사람이 없습니다. 특히 ${names[a]}의 단점이 극대화될 때 브레이크가 없습니다.`;
      synergy = `서로의 양육 방식을 설명하지 않아도 100% 이해합니다. '맞아, 나도 그렇게 생각해'라는 위로가 육아 퇴근 후 최고의 안식처가 됩니다.`;
    } else {
      title = `${names[a]}과(와) ${names[b]}의 만남`;
      
      // Dynamic text based on clash logic
      if (score >= 80) {
        title = `환상의 짝꿍: ${names[a]} × ${names[b]}`;
        clash = `육아 방식이 다르다 보니 서로가 '너무 풀어준다'거나 '너무 빡빡하다'고 오해할 때 갈등이 생깁니다. 아이가 한쪽 부모에게만 유리한 상황을 만들려고 할 때 선을 명확히 해야 합니다.`;
        synergy = `내가 가지지 못한 능력을 상대방이 채워주는 최고의 굿캅 배드캅(Good Cop, Bad Cop) 조합입니다. 아이는 입체적이고 균형 잡힌 정서를 배울 수 있습니다.`;
      } else if (score <= 50) {
        title = `물과 기름의 대환장 파티: ${names[a]} × ${names[b]}`;
        clash = `육아의 A to Z까지 사사건건 부딪힙니다. 한쪽은 상대방을 '생각 없이 애 망치는 사람'으로 보고, 상대방은 '애 숨통 조이는 독재자'로 보며 소통이 단절되기 쉽습니다.`;
        synergy = `서로 '틀린 게 아니라 다르다'는 걸 진심으로 인정할 때, 아이에게 극단적으로 치우치지 않는 유일한 환기구가 될 수 있습니다.`;
      } else {
        title = `서로의 빈틈을 채우는 퍼즐: ${names[a]} × ${names[b]}`;
        clash = `상대방의 양육 방식을 온전히 이해하지 못하고 '왜 저렇게 예민하게(혹은 둔하게) 반응하지?'라고 속으로 비판하며 아이 앞에서 의견 충돌을 보일 수 있습니다.`;
        synergy = `나의 한계점에서 상대방이 자연스럽게 배턴을 이어받습니다. 역할을 명확히 분담하면 가장 다채로운 환경을 아이에게 제공할 수 있습니다.`;
      }
    }
    
    // Add specific flavor for some notable combos
    if (key === 'structured-warm' || key === 'empathetic-structured') {
      clash = `통제형이 단호하게 아이를 훈육할 때, 수용형이 '애 기죽게 왜 그래'라며 끼어드는 순간 가정의 평화는 끝납니다. 아이는 수용형 부모 뒤에 숨게 됩니다.`;
    } else if (key === 'free-structured') {
      clash = `구조형은 자유형을 '방관자'로 여기며 모든 육아의 짐을 혼자 진다고 억울해하고, 자유형은 구조형을 '아이의 숨통을 조이는 사람'으로 비난하며 갈등이 깊어집니다.`;
      synergy = `구조형의 꽉 막힌 완벽주의를 자유형이 환기시켜주고, 자유형의 방임을 구조형의 울타리가 잡아주는 기적의 균형이 일어날 잠재력이 있습니다.`;
    } else if (key === 'free-warm' || key === 'empathetic-free') {
      title = "아이들에겐 천국, 집안 꼴은 카오스";
      clash = `두 사람 다 단호하게 '안 돼!'라고 선을 긋는 악역을 맡기 싫어합니다. 아이는 집에서 왕처럼 군림하며 생활 습관이 엉망이 되기 쉽습니다.`;
      synergy = `아이의 정서 지능과 창의력이 폭발적으로 자라나는 가장 자유롭고 긍정적인 가정입니다. 아이의 말에 귀 기울여주는 웃음소리가 끊이지 않습니다.`;
    }

    CHEMISTRY_MAP[key] = { score, title, clash, synergy };
  }
}

const fileContent = `// ============================================================
// 육아 궁합 매핑 데이터 (36 고유 조합)
// ============================================================

const CHEMISTRY_MAP = ${JSON.stringify(CHEMISTRY_MAP, null, 2)};
`;

fs.writeFileSync('chemistry_data.js', fileContent);
console.log('✅ chemistry_data.js 생성 완료. 조합 수:', Object.keys(CHEMISTRY_MAP).length);
