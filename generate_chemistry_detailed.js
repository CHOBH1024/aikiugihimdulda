const fs = require('fs');

const PERSONAS = [
  'warm', 'structured', 'free', 'wise', 'balanced', 'empathetic', 'creative', 'resilient'
];

const names = {
  warm: "포근한 수용형",
  structured: "단단한 규칙형",
  free: "방목형 자유형",
  wise: "깊은 통찰형",
  balanced: "흔들림 없는 안정형",
  empathetic: "섬세한 공감형",
  creative: "엉뚱발랄 창의형",
  resilient: "강철 멘탈 회복형"
};

const getBaseScore = (a, b) => {
  if (a === b) return 70;
  const highPairs = [
    ['warm', 'structured'], ['warm', 'wise'], ['free', 'wise'],
    ['empathetic', 'structured'], ['creative', 'structured']
  ];
  for (let p of highPairs) {
    if ((p[0] === a && p[1] === b) || (p[0] === b && p[1] === a)) return 85;
  }
  const lowPairs = [
    ['warm', 'free'], ['structured', 'free']
  ];
  for (let p of lowPairs) {
    if ((p[0] === a && p[1] === b) || (p[0] === b && p[1] === a)) return 45;
  }
  if (a === 'balanced' || b === 'balanced') return 75;
  return 60;
};

// Generates extremely detailed text >500 chars with summary box
function generateDetailedText(a, b, score, key) {
  let clash = '';
  let synergy = '';
  let title = '';
  let summary = '';

  const nameA = names[a];
  const nameB = names[b];

  if (score >= 80) {
    title = `환상의 짝꿍: ${nameA} × ${nameB}`;
    summary = `두 분의 양육 성향은 서로의 빈틈을 완벽하게 채워주는 <strong>가장 이상적인 상호 보완 관계</strong>입니다. 아이에게 다양한 시각과 안전한 울타리를 동시에 제공할 수 있습니다.`;
    
    clash = `<div class="summary-box" style="background: rgba(239, 68, 68, 0.05); border-left: 4px solid #ef4444; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
        <strong style="color: #ef4444; font-size: 1.1rem;">⚡ 핵심 요약</strong><br>
        가장 이상적인 조합이지만, 바로 그 완벽한 '다름' 때문에 육아 현장에서는 서로의 방식이 틀렸다고 오해하고 비판할 위험성이 가장 높습니다.
    </div>
    <p>가장 이상적인 상호보완적 관계이지만, <strong>바로 그 점 때문에 부부 사이의 은근한 신경전이 발생합니다.</strong> 서로가 가진 육아의 무기가 너무나도 다르기 때문에, 상대방이 아이를 다루는 방식을 볼 때마다 답답함과 불안감을 느낄 수 있습니다.</p>
    <br>
    <p>💣 <strong>갈등이 점화되는 순간</strong><br>
    예를 들어 아이가 공공장소에서 크게 떼를 쓰고 울 때, 한 명은 원칙과 한계 설정을 강조하며 단호하게 대처하려 하고, 다른 한 명은 아이의 다친 감정을 먼저 다독이고 공감해주려 합니다. 이 과정에서 아이 앞에서 두 분의 의견 충돌이 적나라하게 드러나며 서로를 '냉혈한'이나 '응석받이 메이커'로 오해할 수 있습니다. 육아의 방향성은 같지만 속도와 방법론이 달라서 생기는 필연적인 마찰입니다.</p>
    <br>
    <p>⚠️ <strong>아이에게 미치는 치명적 영향</strong><br>
    영악한 아이는 무의식적으로 두 분의 이러한 성향 차이를 파악하고 자신에게 유리한 상황을 만들어줄 부모 뒤로 숨는 '편 가르기'를 시도할 수 있습니다. 이런 상황이 반복되면 부부 중 한 명은 항상 훈육을 전담하는 악역(Bad Cop)을 도맡게 되어 육아에 대한 피로감, 외로움, 그리고 상대방에 대한 서운함이 극도로 쌓이게 됩니다. 부부 사이의 소통 단절이 가장 경계해야 할 적입니다.</p>
    `;

    synergy = `<div class="summary-box" style="background: rgba(52, 211, 153, 0.05); border-left: 4px solid #10b981; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
        <strong style="color: #10b981; font-size: 1.1rem;">🤝 핵심 요약</strong><br>
        서로의 방식이 '다름'을 인정하는 순간, 아이는 따뜻한 정서적 지지와 단단한 현실의 규율을 모두 배우는 최고의 환경에서 자라게 됩니다.
    </div>
    <p>그럼에도 불구하고 두 분의 조합은 <strong>아이에게 완벽에 가까운 입체적이고 다채로운 환경</strong>을 제공합니다. 내가 가지지 못한 능력을 상대방이 너무나도 훌륭하게 갖추고 있기 때문에, 퍼즐 조각이 맞춰지듯 빈틈없는 육아가 가능합니다.</p>
    <br>
    <p>🛡️ <strong>최강의 밸런스: 창과 방패</strong><br>
    한 사람의 따뜻한 수용력과 다른 한 사람의 단호한 규율이 만납니다. 아이는 차가운 현실을 살아가는 흔들림 없는 규칙을 배우면서도, 동시에 따뜻한 인간관계를 맺는 풍부한 감성을 가슴 깊이 흡수합니다. 내가 미처 챙기지 못하고 놓쳐버린 육아의 빈틈이나 사각지대를, 상대방이 등 뒤에서 묵묵하고 자연스럽게 채워주고 있는 매우 감사한 상황입니다.</p>
    <br>
    <p>💡 <strong>이렇게 실천해보세요 (솔루션)</strong><br>
    두 분이 서로의 방식이 '틀린 것'이 아니라 '필요하게 다른 것'임을 진심으로 인정하는 것이 시너지의 핵심입니다. <strong>절대로 아이 앞에서 상대방의 훈육 방식을 깎아내리거나 간섭하지 마세요.</strong> 뒤에서 조용히 지지하고 존중하는 태도를 보여주기만 한다면, 아이는 부모라는 가장 완벽하고 튼튼한 방패이자 세상을 헤쳐 나갈 날카로운 창을 모두 갖게 되는 엄청난 행운을 누리게 됩니다.</p>
    `;

  } else if (score <= 50) {
    title = `대환장 파티: ${nameA} × ${nameB}`;
    summary = `양육의 가치관과 목적지가 극단적으로 다릅니다. 이로 인해 사사건건 충돌할 수 있지만, 타협점만 찾는다면 아이에게 최고의 다양성을 선물할 수 있습니다.`;
    
    clash = `<div class="summary-box" style="background: rgba(239, 68, 68, 0.05); border-left: 4px solid #ef4444; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
        <strong style="color: #ef4444; font-size: 1.1rem;">⚡ 핵심 요약</strong><br>
        아이를 키우는 근본적인 목적지와 그곳으로 향하는 지도 자체가 완전히 다릅니다. 모든 상황에서 의견이 충돌하며 부부 관계에 금이 갈 수 있습니다.
    </div>
    <p>두 분은 <strong>아이를 키우는 방식에 있어 좁혀지지 않는 평행선</strong>을 달리고 있습니다. 수면 교육부터 시작해서 식사 예절, 미디어 노출 시간, 친구 관계 개입 정도, 그리고 결정적인 훈육 방식까지 육아의 A to Z에 걸쳐 사사건건 날카롭게 부딪힙니다.</p>
    <br>
    <p>💣 <strong>갈등이 점화되는 순간</strong><br>
    아이가 밥을 먹지 않고 돌아다닐 때 한쪽은 "아이가 배고프면 자연스럽게 먹을 테니 억지로 먹이지 마라, 스트레스가 더 나쁘다"고 주장하고, 다른 한쪽은 "식탁 예절과 규율은 어릴 때부터 칼같이 지켜야 한다"며 대립합니다. 이 과정에서 한쪽은 상대방을 '생각 없이 아이를 망치는 방관자'로 여기고, 다른 한쪽은 '아이의 숨통을 조이는 숨막히는 독재자'로 비난하며 감정의 골이 깊어집니다.</p>
    <br>
    <p>⚠️ <strong>아이에게 미치는 치명적 영향</strong><br>
    가장 큰 피해자는 아이입니다. 아이는 도대체 어떤 부모의 말을 들어야 맞는지 혼란스러워하며, 상황마다 부모의 눈치만 극도로 살피는 불안한 아이로 자랄 위험이 큽니다. 무엇보다 부부 사이의 끝없는 육아관 충돌이 아이에 대한 건설적인 걱정을 넘어서서, 서로에 대한 인신공격이나 깊은 불신으로 번질 수 있는 가장 위험한 상태입니다.</p>
    `;

    synergy = `<div class="summary-box" style="background: rgba(52, 211, 153, 0.05); border-left: 4px solid #10b981; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
        <strong style="color: #10b981; font-size: 1.1rem;">🤝 핵심 요약</strong><br>
        서로의 차이를 인정하고 명확하게 역할을 분리하면, 부모의 극단적인 성향 차이가 오히려 아이에게 '가장 다채로운 세상을 보여주는 환기구'가 됩니다.
    </div>
    <p>아이러니하게도 두 사람의 이러한 극단적인 차이는, <strong>서로가 감정을 배제하고 완벽하게 타협점을 찾기만 한다면</strong> 아이에게 숨통을 트여주는 최고의 환기구가 되어줄 수 있는 놀라운 잠재력을 가지고 있습니다.</p>
    <br>
    <p>🛡️ <strong>서로의 치명적 단점을 막아주는 방패</strong><br>
    한 사람의 방식이 필연적으로 가질 수밖에 없는 치명적인 약점(예: 지나친 통제로 인한 아이의 억압, 혹은 지나친 방임으로 인한 사회성 부족)을 다른 한 사람이 완벽하게 제어하고 중화시켜 줄 수 있기 때문입니다. 아이는 부모의 이러한 다름을 통해, 세상에는 한 가지 정답만 있는 것이 아니라 다양한 방식의 삶과 유연한 해결책이 존재한다는 진리를 집 안에서부터 자연스럽게 피부로 배웁니다.</p>
    <br>
    <p>💡 <strong>이렇게 실천해보세요 (솔루션)</strong><br>
    이를 현실화하기 위해서는 절대로 아이 앞에서 상대방의 육아 방식을 비난하거나 간섭하지 않는다는 무거운 철칙을 세워야 합니다. 학습과 훈육의 뼈대는 A가 담당하고, 놀이와 정서적 지지는 B가 담당하는 식으로 <strong>육아의 영역을 칼같이 명확하게 분담</strong>하세요. 철저하게 분리된 영역 안에서는 상대방의 방식에 100% 자율성을 부여하는 쿨한 마인드가 반드시 필요합니다.</p>
    `;

  } else if (a === b) {
    title = `거울을 보는 듯한 동지: ${nameA}`;
    summary = `양육 가치관이 100% 일치하여 마찰이 없는 든든한 동지입니다. 하지만 부모가 모두 같은 약점을 가지고 있어 위기 상황에서 브레이크가 고장날 수 있습니다.`;
    
    clash = `<div class="summary-box" style="background: rgba(239, 68, 68, 0.05); border-left: 4px solid #ef4444; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
        <strong style="color: #ef4444; font-size: 1.1rem;">⚡ 핵심 요약</strong><br>
        가치관이 일치한다는 것은 큰 축복이지만, 두 사람이 동일한 치명적 단점을 공유하기 때문에 아이의 문제 행동이 한 방향으로 극단적으로 치우칠 수 있습니다.
    </div>
    <p>두 분 모두 동일한 양육의 최우선 가치를 삼고 있습니다. 부부간의 가치관이 이토록 완벽하게 일치한다는 것은 매우 큰 축복이고 갈등을 줄여주지만, 육아라는 차가운 현실 앞에서는 <strong>매우 거대한 치명적인 사각지대</strong>를 만들어내기도 합니다.</p>
    <br>
    <p>💣 <strong>갈등이 점화되는 순간</strong><br>
    특히 두 분이 공통으로 가지고 있는 단점이 발생했을 때, 이를 객관적으로 제어하고 브레이크를 걸어줄 사람이 가정 내에 단 한 명도 없다는 것이 가장 큰 문제입니다. 예를 들어, 아이에게 엄격한 훈육이 반드시 필요한 상황이거나 부모의 유연한 지도가 절실할 때, 두 분 모두 본인들의 굳어진 성향대로만 대응하다 보니 아이의 문제 행동이 무기력하게 방치되거나 혹은 숨막히게 억압되는 극단적인 결과를 낳을 수 있습니다.</p>
    <br>
    <p>⚠️ <strong>아이에게 미치는 치명적 영향</strong><br>
    아이는 다양한 각도에서 입체적으로 세상을 배우기보다는, 두 분이 만들어놓은 매우 강력하지만 단일하고 좁은 프레임 안에서만 세상을 인지하게 될 위험이 존재합니다. 또한 부부 중 한 명이 체력이나 멘탈 고갈로 지쳐 쓰러졌을 때, 다른 한 명 역시 동일한 외부적 이유로 함께 번아웃에 빠져 있을 확률이 매우 높아 가정 전체의 위기 대처 능력과 회복 탄력성이 현저하게 떨어집니다.</p>
    `;

    synergy = `<div class="summary-box" style="background: rgba(52, 211, 153, 0.05); border-left: 4px solid #10b981; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
        <strong style="color: #10b981; font-size: 1.1rem;">🤝 핵심 요약</strong><br>
        눈빛만 봐도 서로를 이해하는 최고의 전우입니다. 부모의 일관된 태도는 아이에게 혼란을 주지 않으며, 특정 분야에서 아이의 재능을 압도적으로 발달시킵니다.
    </div>
    <p>치명적인 단점에도 불구하고 <strong>두 분의 굳건한 결속력은 타의 추종을 불허합니다.</strong> 육아 퇴근 후 소파에 앉아 "오늘 아이가 이래서 너무 힘들었어"라고 말할 때, 상대방에게 내 방식과 감정의 정당성을 구구절절 설명하며 설득할 필요가 전혀 없습니다.</p>
    <br>
    <p>🛡️ <strong>가장 든든한 전우이자 버팀목</strong><br>
    서로 눈빛만 봐도 상대의 고충을 100% 이해하고 깊이 공감합니다. 아이 입장에서도 엄마 아빠의 양육 태도가 언제나 일관되고 한 목소리를 내기 때문에, 양육 환경에 대해 혼란스러워하지 않고 강한 예측 가능성과 심리적 안정감을 느낍니다. 부모가 제공하는 특정 가치(예: 풍부한 정서, 혹은 확고한 규율)가 집안의 굳건한 문화로 자리 잡게 됩니다.</p>
    <br>
    <p>💡 <strong>이렇게 실천해보세요 (솔루션)</strong><br>
    서로가 서로의 거울이 되어 긍정적인 면을 극대화하며 즐겁게 육아하세요. 다만, 사각지대를 방지하기 위해 <strong>의식적으로 평소 부부의 성향과 반대되는 방식(예: 너무 수용적이라면 하루 날 잡아 단호하게, 너무 엄격하다면 하루는 무장해제하고 놀기)을 아이와 함께 연습해보는 시간</strong>을 주기적으로 가지는 것이 아이의 균형 잡힌 발달에 필수적입니다.</p>
    `;
  } else {
    title = `서로의 빈틈을 채우는 퍼즐: ${nameA} × ${nameB}`;
    summary = `서로의 다름이 때로는 '왜 저럴까?' 하는 불안감을 유발하지만, 톱니바퀴처럼 서로의 빈틈을 메워주며 건강한 릴레이 육아를 가능하게 합니다.`;
    
    clash = `<div class="summary-box" style="background: rgba(239, 68, 68, 0.05); border-left: 4px solid #ef4444; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
        <strong style="color: #ef4444; font-size: 1.1rem;">⚡ 핵심 요약</strong><br>
        상대방의 방식을 온전히 이해하지 못하고 불안감을 느껴 본인이 섣불리 개입하려고 할 때, 아이 앞에서 미묘한 엇박자가 발생할 수 있습니다.
    </div>
    <p>두 분은 서로의 다름을 이성적으로는 어느 정도 인정하면서도, 내심 상대방의 양육 방식에 대한 불안감과 의구심을 완전히 거두지 못하고 있습니다.</p>
    <br>
    <p>💣 <strong>갈등이 점화되는 순간</strong><br>
    상대방이 아이를 대하는 태도를 볼 때마다 "왜 저렇게 예민하게(혹은 왜 저렇게 무심하게) 반응하지?"라고 속으로 답답함을 느끼며, 결국 내가 나서서 이 상황을 수습하고 바로잡아야 한다는 강박적인 의무감을 느끼곤 합니다. 평소에는 무난하고 조용하게 흘러가지만, 아이가 크게 아프거나 유치원/학교에서 교우 관계 문제가 발생하는 등 예기치 못한 극심한 스트레스 상황이 닥쳤을 때 각자의 숨겨진 본성이 튀어나오며 크게 대립할 가능성이 있습니다.</p>
    <br>
    <p>⚠️ <strong>아이에게 미치는 치명적 영향</strong><br>
    아이 입장에서는 결정적인 순간에 엄마 아빠의 톤앤매너가 미묘하게 엇박자를 내며 흔들린다는 것을 본능적으로 감지합니다. 이로 인해 자신이 곤란한 상황을 피하거나 원하는 바를 얻어내기 위해 누구에게 먼저 다가가야 할지 치밀하게 눈치를 살피고 계산하는 아이로 자랄 수 있는 미세한 균열이 생길 수 있습니다.</p>
    `;

    synergy = `<div class="summary-box" style="background: rgba(52, 211, 153, 0.05); border-left: 4px solid #10b981; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
        <strong style="color: #10b981; font-size: 1.1rem;">🤝 핵심 요약</strong><br>
        두 사람의 성향 차이를 상호 보완의 기회로 삼아 큰 틀의 원칙만 합의한다면, 아이에게 안정감과 유연성을 동시에 주는 지치지 않는 육아가 가능합니다.
    </div>
    <p>하지만 긴 안목으로 보았을 때 일상적인 상황에서 두 분은 <strong>마치 톱니바퀴처럼 서로의 부족한 점을 훌륭하게 상쇄해 주고 있는 아름다운 관계</strong>입니다. 한 사람의 성향이 아이의 단단한 뼈대와 기둥을 만들어 준다면, 다른 한 사람의 성향은 아이의 살결을 부드럽게 채우고 감싸주는 필수적인 역할을 하고 있습니다.</p>
    <br>
    <p>🛡️ <strong>지치지 않는 완벽한 릴레이 육아</strong><br>
    무엇보다 가장 큰 장점은 육아의 피로도를 분산시킬 수 있다는 것입니다. 한 명이 체력적으로나 정신적으로 완전히 번아웃에 빠져 바닥을 칠 때, 나와 완전히 다른 시각과 성향을 가진 상대방이 아이에게 새로운 형태의 자극과 휴식을 제공하며 자연스럽고 부드럽게 배턴을 이어받아 위기를 넘길 수 있습니다.</p>
    <br>
    <p>💡 <strong>이렇게 실천해보세요 (솔루션)</strong><br>
    두 분이 서로가 아이에게 제공하는 각기 다른 종류의 가치들을 진심으로 인정하는 것이 시작입니다. 매달 한 번씩 가벼운 '육아 회의'를 통해 세세한 방법론은 각자에게 맡기되, 큰 틀에서의 절대적인 방향성(예: 수면 시간 지키기, 스마트폰 사용 원칙, 절대 하면 안 되는 말 등)만 단단하게 합의해 둔다면, 잔인한 육아 마라톤에서 훨씬 매끄럽고 지치지 않는 릴레이 육아가 가능해집니다.</p>
    `;
  }

  return { title, summary, clash, synergy };
}

const combinations = {};
for (let i = 0; i < PERSONAS.length; i++) {
  for (let j = i; j < PERSONAS.length; j++) {
    const a = PERSONAS[i];
    const b = PERSONAS[j];
    const key = [a, b].sort().join('-');
    const score = getBaseScore(a, b);
    const textData = generateDetailedText(a, b, score, key);
    
    // Variance
    let finalScore = score;
    if(a !== b) finalScore = score + Math.floor(Math.random() * 9) - 4; // -4 to +4

    combinations[key] = {
      score: finalScore,
      title: textData.title,
      summary: textData.summary,
      clash: textData.clash,
      synergy: textData.synergy
    };
  }
}

const fileContent = `// ============================================================
// 육아 궁합 매핑 데이터 (36 고유 조합 - 심층 상세 분석)
// ============================================================

const CHEMISTRY_MAP = ${JSON.stringify(combinations, null, 2)};
`;

fs.writeFileSync('chemistry_data.js', fileContent, 'utf8');
console.log('chemistry_data.js successfully generated with expanded texts!');
