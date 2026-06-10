const fs = require('fs');
let data = fs.readFileSync('data.js', 'utf8');

const updates = {
  warm: {
    harshAdvice: `부모의 '착한 마음'이 때론 아이의 '통제 수단'으로 전락할 수 있음을 직시하세요. 아이가 눈물을 무기 삼아 상황을 조작할 때마다 무조건적으로 수용하는 것은 공감이 아니라 '방조'입니다. 울음에 흔들려 일관성을 잃는 순간, 아이는 '나의 슬픔이 타인을 조종할 수 있다'는 왜곡된 권력 구조를 학습하게 됩니다. 따뜻함과 만만함을 구분하십시오.`,
    factBomb: `공감과 호구는 한 끗 차이. 아이 감정 쓰레기통 자처하다가 부모 멘탈부터 붕괴됨.`,
    deepReflection: {
      question: `내가 아이의 눈물 앞에서 룰을 번복하는 진짜 이유는 아이를 사랑해서인가, 아니면 내가 '나쁜 부모'가 되는 죄책감을 견디지 못해서인가?`,
      meaning: `대상관계이론(Object Relations Theory)에 따르면, 부모가 자신의 결핍이나 불안을 아이에게 투사할 때 과잉 공감이 발생합니다. 아이의 감정과 부모의 감정을 철저히 분리(Differentiation of Self)하는 훈련이 필요합니다.`
    }
  },
  structured: {
    harshAdvice: `규칙은 아이를 보호하기 위한 울타리이지, 부모 자신의 불안을 통제하기 위한 족쇄가 아닙니다. 계획대로 되지 않는 아이의 행동에 '욱'하는 진짜 이유는, 통제력을 상실할 때 느끼는 당신의 근원적인 두려움 때문입니다. 삶은 결코 계획표대로 흘러가지 않습니다. 아이의 숨 막히는 완벽주의는 당신의 억눌린 불안이 대물림된 결과일 수 있습니다.`,
    factBomb: `머리로는 오은영 박사인데 현실에서는 통제광. 아이는 규칙이 아니라 부모 눈치를 보고 있음.`,
    deepReflection: {
      question: `내가 세운 원칙이 지켜지지 않았을 때 폭발하는 분노의 이면에는, '내 뜻대로 통제되지 않는 상황'에 대한 부모 자신의 무력감이 숨어있지 않은가?`,
      meaning: `자기심리학(Self Psychology)적 관점에서, 아이를 부모의 통제 하에 두려는 욕구는 부모의 '자기대상(Self-object)'으로 아이를 취급하는 행위일 수 있습니다. 통제를 내려놓고 예측 불가능성을 수용하는 인지행동적 유연성(Cognitive Flexibility)이 절실합니다.`
    }
  },
  free: {
    harshAdvice: `자율성이라는 명목 하에 훈육의 책임을 회피하고 있지 않습니까? 사회적 규범과 기본 루틴(수면, 식사 등)을 가르치는 것은 부모의 가장 힘들지만 필수적인 의무입니다. 아이에게 끊임없이 '네 마음대로 해'라고 방임하는 것은, 사실 부모가 단호하게 갈등을 마주하고 개입할 에너지가 없음을 포장하는 '우아한 게으름'일 수 있습니다.`,
    factBomb: `자율과 방임을 구분 못 함. 사회화 훈련은 남이 대신해주지 않음. 훗날 무례한 어른으로 자라게 하는 지름길.`,
    deepReflection: {
      question: `내가 '아이를 존중한다'며 한계 설정을 미루는 행동은, 실상 훈육 과정에서 수반되는 피곤한 갈등을 피하고 싶은 부모의 도피 기제 아닌가?`,
      meaning: `바움린드(Baumrind)의 양육 이론에 의하면, 요구성(Demandingness)이 결여된 허용적 양육은 아동의 충동 조절 장애와 사회성 결핍을 초래합니다. 자유는 견고한 '안전 기지(Secure Base)'와 구조(Structure) 안에서만 건강하게 발현됨을 명심하십시오.`
    }
  },
  wise: {
    harshAdvice: `아이는 알고리즘이나 프로젝트가 아닙니다. 아이가 정서적으로 무너져 내릴 때, 논리적인 원인 분석과 차가운 해결책 제시는 가슴에 비수를 꽂는 행위입니다. 지식의 양이 정서적 연결을 대체할 수는 없습니다. '왜 울어?'라고 묻는 대신 입을 닫고 그냥 안아주는, 바보 같지만 가장 인간적인 뇌(변연계)의 작용을 아이에게 허락하십시오.`,
    factBomb: `애가 슬퍼서 우는데 원인 분석표 꺼내는 피도 눈물도 없는 T형 팩력배. 정서 지능 발달 가로막는 주범.`,
    deepReflection: {
      question: `나는 왜 통제 불가능한 아이의 '감정'을 마주할 때, 자꾸만 '이성적 지식'이라는 방패 뒤로 숨으려 하는가?`,
      meaning: `방어기제로서의 주지화(Intellectualization)를 점검해야 합니다. 감정적 고통을 직면하기 두려워 논리와 지식으로 회피하는 부모의 태도는, 아동의 정서 처리(Emotion Processing) 능력을 심각하게 박탈합니다. 정서 우선 접근(Emotion-Focused Approach)이 시급합니다.`
    }
  },
  balanced: {
    harshAdvice: `모든 상황에서 공감과 단호함의 완벽한 50대 50을 맞추려는 '정답 부모 강박'이 당신과 아이를 질식시키고 있습니다. 부모의 잦은 번아웃은 아이에게 '나 때문에 부모가 지친다'는 깊은 죄책감을 심어줍니다. 완벽하게 균형 잡힌 기계보다, 가끔은 폭발하고 진심으로 미안해하는 흠결 있는 인간이 아이의 뇌 발달에 훨씬 건강한 자극을 줍니다.`,
    factBomb: `육아 책 100권 읽고 실천하려다 멘탈 갈려나가는 완벽주의자. 부모가 번아웃 오면 그게 최악의 불균형.`,
    deepReflection: {
      question: `내가 이토록 완벽한 육아 밸런스에 집착하는 것은, 아이의 행복을 위해서인가 아니면 '실패한 부모'로 평가받고 싶지 않은 나의 인정욕구 때문인가?`,
      meaning: `도널드 위니콧(Donald Winnicott)의 '충분히 좋은 엄마(Good Enough Mother)' 개념을 상기하십시오. 100% 완벽한 조율은 오히려 아이가 좌절을 견디는 능력을 앗아갑니다. 부모의 최적의 좌절(Optimal Frustration) 제공이 아동의 독립적 자아 형성을 돕습니다.`
    }
  },
  empathetic: {
    harshAdvice: `공감 능력은 축복이지만, 아이와 심리적 탯줄을 끊어내지 못한 채 감정적으로 융합(Fusion)되는 것은 비극입니다. 아이의 고통을 부모가 대신 앓아주려 할 때, 아이는 스스로 상처를 딛고 일어날 회복의 기회를 강탈당합니다. 부모의 불안한 눈빛은 아이에게 '세상은 너무 무서운 곳'이라는 치명적인 무의식적 각본(Life Script)을 주입합니다.`,
    factBomb: `애가 긁힌 상처에 엄마가 대성통곡하는 과잉 동기화. 아이가 자기 스스로 이겨낼 기회를 뺏어버리는 감정 도둑.`,
    deepReflection: {
      question: `아이의 좌절이나 고통을 지켜볼 때 내 안에서 걷잡을 수 없이 치솟는 불안감은, 아이의 것인가 아니면 치유되지 않은 내면아이(Inner Child)의 것인가?`,
      meaning: `보웬(Bowen)의 가족체계이론에서 말하는 자아분화(Differentiation of Self) 수준을 점검해야 합니다. 부모가 아동과 정서적으로 미분화되어 있을 경우, 아동은 부모의 정서적 쓰레기통 역할을 하게 되며 병리적 불안을 물려받게 됩니다.`
    }
  },
  creative: {
    harshAdvice: `놀이와 재미가 삶의 전부는 아닙니다. 지루함을 견디고 하기 싫은 일을 참아내는 '지연 만족(Delayed Gratification)' 능력을 가르치지 않는다면, 당신은 아이를 도파민 중독자로 만들고 있는 것입니다. 훈육의 순간에도 웃고 넘어가는 유약한 태도는, 아이가 사회의 차가운 룰과 위계질서를 배울 기회를 파괴합니다.`,
    factBomb: `재밌는 건 잘하지만 쓴소리는 죽어도 못하는 피터팬 부모. 아이는 어른을 원하지 놀이동무를 원하는 게 아님.`,
    deepReflection: {
      question: `나는 왜 지루하고 고통스러운 구조화 훈련이나 단호한 훈육을 하는 '악역'을 맡는 것을 이토록 견디지 못하는가?`,
      meaning: `정신분석학적으로 부모 스스로가 권위(Authority)에 대한 무의식적 거부감이나 성인 역할에 대한 저항(Peter Pan Syndrome)을 가지고 있을 가능성이 큽니다. 프로이트가 강조한 초자아(Superego)의 형성을 위해 건강한 좌절과 사회적 규칙의 내면화 과정이 절대적으로 필요합니다.`
    }
  },
  resilient: {
    harshAdvice: `당신의 강철 멘탈을 아이에게 강요하지 마십시오. 아이가 바닥에 쓰러져 울고 있을 때, 곧바로 '일어나, 별거 아니야'라고 해결책을 강요하는 것은 폭력입니다. 상실과 고통을 충분히 애도(Mourning)하고 슬퍼할 시간을 주지 않는 섣부른 긍정은, 아이의 마음에 시한폭탄 같은 억압된 우울을 차곡차곡 쌓아 올립니다.`,
    factBomb: `본인 멘탈 강하다고 아이 감정 묵살하는 무공감 불도저. '슬퍼할 시간' 안 주면 훗날 감정 마비된 어른으로 자람.`,
    deepReflection: {
      question: `나는 왜 아이가 나약한 모습을 보이며 무너져 내릴 때, 그것을 가만히 견디지 못하고 즉각적으로 해결책을 들이밀며 통제하려 드는가?`,
      meaning: `정서 중심 치료(EFT) 관점에서, 부정적 감정을 '해결해야 할 문제'로만 인식하는 감정 회피적(Emotion Dismissing) 양육 태도입니다. 슬픔과 절망을 머물도록 허락하는 '안전한 홀딩(Holding Environment)'이 부재하면, 진정한 의미의 회복탄력성은 싹트지 못합니다.`
    }
  }
};

let matchCount = 0;

data = data.replace(/harshAdvice\s*:\s*[\`'].*?[\`'](?=\s*,\s*combo\s*:\s*'([^']+)')/gs, (match, comboStr) => {
    if (updates[comboStr]) {
        matchCount++;
        return `harshAdvice: \`${updates[comboStr].harshAdvice}\``;
    }
    return match;
});

data = data.replace(/combo\s*:\s*'([^']+)'((?:(?!combo\s*:).)*?factBomb\s*:\s*)[\`'].*?[\`']/gs, (match, comboStr, before) => {
    if (updates[comboStr]) {
        matchCount++;
        return `combo: '${comboStr}'${before}\`${updates[comboStr].factBomb}\``;
    }
    return match;
});

data = data.replace(/combo\s*:\s*'([^']+)'((?:(?!combo\s*:).)*?deepReflection\s*:\s*\{\s*question\s*:\s*)[\`'].*?[\`'](\s*,\s*meaning\s*:\s*)[\`'].*?[\`']/gs, (match, comboStr, beforeQ, mid) => {
    if (updates[comboStr]) {
        matchCount++;
        return `combo: '${comboStr}'${beforeQ}\`${updates[comboStr].deepReflection.question}\`${mid}\`${updates[comboStr].deepReflection.meaning}\``;
    }
    return match;
});

fs.writeFileSync('data.js', data);
console.log('Update completed. Replaced blocks:', matchCount);
