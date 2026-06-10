const fs = require('fs');

const chemistryLogic = `
// ============================================================
// 육아 궁합 (Parenting Chemistry) 매칭 알고리즘
// ============================================================

function calculateChemistry(comboA, comboB) {
  const pA = OVERALL_TITLES.find(t => t.combo === comboA);
  const pB = OVERALL_TITLES.find(t => t.combo === comboB);
  
  if (!pA || !pB) return null;

  const getGroup = (combo) => {
    if (['structured', 'wise'].includes(combo)) return 'Control';
    if (['warm', 'empathetic'].includes(combo)) return 'Acceptance';
    if (['free', 'creative'].includes(combo)) return 'Freedom';
    return 'Balance';
  };

  const gA = getGroup(comboA);
  const gB = getGroup(comboB);

  let score = 50;
  let title = "";
  let clash = "";
  let synergy = "";

  if (comboA === comboB) {
    score = 70;
    title = "거울을 보는 듯한 동지 (혹은 쌍방 멘붕)";
    clash = "둘 다 육아 가치관이 너무 똑같아서, 한 명이 무너지면 다른 한 명도 덩달아 무너집니다. 한쪽이 감정적으로 폭발했을 때 브레이크를 걸어줄 사람이 집에 아무도 없습니다.";
    synergy = "서로의 육아 방식을 설명하지 않아도 100% 이해합니다. '맞아, 나도 그렇게 생각해'라는 위로가 육아 퇴근 후 최고의 안식처가 됩니다.";
  } 
  else if ((gA === 'Control' && gB === 'Acceptance') || (gA === 'Acceptance' && gB === 'Control')) {
    score = 85;
    title = "환상의 짝꿍 (단, 선을 안 넘을 때만)";
    clash = "엄마(아빠)가 애를 혼내고 있는데, 아빠(엄마)가 '애 기죽게 왜 그래'라며 끼어드는 순간 가정의 평화는 끝납니다. 아이는 수용형 부모 뒤에 숨어서 통제형 부모를 악역으로 만듭니다.";
    synergy = "통제형이 단호하게 규칙의 울타리를 세워주고, 수용형이 아이의 다친 마음을 부드럽게 쓰다듬어주는 '최고의 굿캅 배드캅(Good Cop, Bad Cop)' 조합입니다.";
  }
  else if ((gA === 'Control' && gB === 'Freedom') || (gA === 'Freedom' && gB === 'Control')) {
    score = 40;
    title = "물과 기름의 대환장 파티";
    clash = "통제형은 자유형을 '생각 없이 애 망치는 사람'으로 보고, 자유형은 통제형을 '애 숨통 조이는 독재자'로 봅니다. 육아의 A to Z까지 사사건건 부딪히며 아이 눈치만 보게 만듭니다.";
    synergy = "통제형의 꽉 막힌 완벽주의를 자유형이 환기시켜주고, 자유형의 방임을 통제형이 잡아줄 수 있습니다. 서로 '틀린 게 아니라 다르다'는 걸 진심으로 인정할 때만 가능합니다.";
  }
  else if ((gA === 'Acceptance' && gB === 'Freedom') || (gA === 'Freedom' && gB === 'Acceptance')) {
    score = 60;
    title = "아이들에겐 천국, 집안 꼴은 카오스";
    clash = "두 사람 다 단호하게 '안 돼!'라고 선을 긋는 악역을 맡기 싫어합니다. 아이는 집에서 왕처럼 군림하며, 생활 습관(수면, 식사)은 엉망이 되기 쉽습니다.";
    synergy = "아이의 정서 지능과 창의력이 폭발적으로 자라나는 가장 자유롭고 행복한 가정입니다. 아이의 말에 귀 기울여주는 웃음소리가 끊이지 않습니다.";
  }
  else if (gA === 'Balance' || gB === 'Balance') {
    score = 75;
    title = "극단을 잡아주는 든든한 닻";
    clash = "안정형 부모의 무던한 태도가, 때로는 감정이 격해진 상대방에게 '너 혼자만 심각하냐, 왜 이렇게 무심해?'라는 오해와 서운함을 불러일으킬 수 있습니다.";
    synergy = "상대방이 완벽주의 강박이나 번아웃에 빠질 뻔할 때, 안정형 부모가 현실적이고 차분한 해결책을 제시하며 가정을 지탱합니다.";
  }
  else {
    score = 65;
    title = "서로의 빈틈을 채우는 퍼즐";
    clash = "상대방의 양육 방식을 온전히 이해하지 못하고 '왜 저렇게 예민하게(혹은 둔하게) 반응하지?'라고 속으로 비판하며 소통이 단절되기 쉽습니다.";
    synergy = "내가 못하는 것을 상대방이 자연스럽게 해냅니다. 서로의 차이를 인정하고 역할을 명확히 분담하면 가장 다채로운 환경을 제공할 수 있습니다.";
  }

  score = score + Math.floor(Math.random() * 9) - 4; // -4 ~ +4

  return { personaA: pA, personaB: pB, score, title, clash, synergy };
}
`;

fs.appendFileSync('data.js', chemistryLogic);
console.log('Appended chemistry logic to data.js');
