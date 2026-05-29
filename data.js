// ============================================================
// Mirror Inside Parenting — Data: Questions + Personas
// 5개 분야 × 7개 유형 = 35 페르소나
// 분야당 6문항 = 총 30문항
// ============================================================

const DIMENSIONS = [
  {
    id: 'emotional',
    name: '정서교감',
    nameEn: 'Emotional Bonding',
    icon: '💛',
    color: '#fbbf24',
    desc: '아이와의 감정적 유대, 공감, 정서적 안정감을 제공하는 능력'
  },
  {
    id: 'discipline',
    name: '규칙과 훈육',
    nameEn: 'Discipline & Boundaries',
    icon: '⚖️',
    color: '#60a5fa',
    desc: '일관된 규칙 설정과 적절한 훈육 방식을 통한 행동 가이드'
  },
  {
    id: 'autonomy',
    name: '자율성 지원',
    nameEn: 'Autonomy Support',
    icon: '🌱',
    color: '#34d399',
    desc: '아이의 독립적 사고와 자기결정력을 길러주는 양육 태도'
  },
  {
    id: 'growth',
    name: '학습과 성장',
    nameEn: 'Cognitive Growth',
    icon: '📚',
    color: '#c084fc',
    desc: '지적 호기심 자극과 학습 환경 조성, 인지 발달 촉진'
  },
  {
    id: 'resilience',
    name: '위기 대응',
    nameEn: 'Crisis Resilience',
    icon: '🛡️',
    color: '#fb7185',
    desc: '갈등, 스트레스, 위기 상황에서의 대처와 회복 지원 능력'
  }
];

// ============================================================
// 각 분야별 7가지 유형 정의
// ============================================================

const PERSONA_TYPES = {
  emotional: [
    {
      id: 'e1', name: '따뜻한 햇살형',
      desc: '넘치는 애정과 밝은 에너지로 아이를 감싸는 부모입니다. 스킨십과 칭찬이 자연스럽고, 아이는 항상 사랑받고 있다는 확신 속에서 자랍니다.',
      strengths: ['무조건적 애정 표현', '긍정적 분위기 조성', '높은 스킨십'],
      tip: '때로는 아이의 부정적 감정도 있는 그대로 수용해주세요. 항상 밝아야 한다는 압박은 아이에게 부담이 될 수 있습니다.'
    },
    {
      id: 'e2', name: '고요한 달빛형',
      desc: '조용하지만 깊은 존재감으로 아이에게 안정감을 주는 부모입니다. 말보다 행동으로, 큰 목소리보다 따뜻한 눈빛으로 사랑을 전달합니다.',
      strengths: ['차분한 안정감', '깊은 관찰력', '일관된 정서적 지지'],
      tip: '가끔은 감정을 말로 직접 표현해보세요. 아이가 당신의 마음을 더 쉽게 읽을 수 있게 됩니다.'
    },
    {
      id: 'e3', name: '깊은 바다형',
      desc: '감정의 깊이를 이해하고 공감하는 능력이 뛰어난 부모입니다. 아이의 미세한 감정 변화까지 포착하고 그 의미를 함께 탐색합니다.',
      strengths: ['탁월한 공감력', '감정 코칭 능력', '심리적 통찰'],
      tip: '아이의 감정에 너무 깊이 몰입하지 않도록 자신만의 감정 경계를 유지하는 연습이 필요합니다.'
    },
    {
      id: 'e4', name: '맑은 거울형',
      desc: '아이의 감정을 정확히 비춰주고 인정하는 부모입니다. "네가 화가 났구나", "속상했겠다"와 같은 감정 명명을 자연스럽게 사용합니다.',
      strengths: ['감정 반영 능력', '정서 어휘 확장', '감정 인식 교육'],
      tip: '반영만 하지 말고, 때로는 당신의 솔직한 감정도 함께 나눠보세요. 상호적 감정 교류가 유대를 깊게 합니다.'
    },
    {
      id: 'e5', name: '포근한 담요형',
      desc: '신체적 접촉과 물리적 안전감을 통해 사랑을 전달하는 부모입니다. 안아주기, 토닥여주기, 함께 누워있기 등 몸으로 감정을 소통합니다.',
      strengths: ['신체적 위로', '안전한 공간 제공', '비언어적 소통'],
      tip: '아이가 자라며 신체 접촉을 거부할 수 있는 시기가 옵니다. 그때를 위해 언어적 애정 표현도 함께 발달시켜보세요.'
    },
    {
      id: 'e6', name: '자유로운 바람형',
      desc: '감정 표현의 자유를 최대한 존중하는 부모입니다. 울어도, 화내도, 즐거워해도 아이의 모든 감정을 있는 그대로 허용합니다.',
      strengths: ['감정 자유 존중', '비판단적 태도', '정서적 독립 지원'],
      tip: '자유로운 표현 속에서도 감정 조절 기술을 가르치는 것이 중요합니다. 자유와 조절의 균형을 찾아보세요.'
    },
    {
      id: 'e7', name: '밝은 무지개형',
      desc: '다양한 감정 표현 방식을 골고루 활용하는 부모입니다. 상황에 따라 유머, 진지함, 장난, 진심을 적절히 오가며 풍부한 정서 경험을 선사합니다.',
      strengths: ['다양한 표현 방식', '상황별 유연성', '정서 다양성'],
      tip: '일관성도 아이에게 중요합니다. 다양함 속에서도 핵심 메시지는 하나로 통일해보세요.'
    }
  ],

  discipline: [
    {
      id: 'd1', name: '단단한 등대형',
      desc: '흔들림 없는 원칙으로 아이에게 명확한 방향을 제시하는 부모입니다. 규칙은 확고하지만 그 안에서 아이는 예측 가능한 안정감을 느낍니다.',
      strengths: ['일관된 원칙', '예측 가능한 환경', '명확한 경계'],
      tip: '규칙의 이유를 아이 눈높이에서 설명해주세요. "왜"를 이해한 아이가 더 자발적으로 따릅니다.'
    },
    {
      id: 'd2', name: '유연한 대나무형',
      desc: '상황과 맥락에 따라 규칙을 유연하게 조율하는 부모입니다. 핵심 원칙은 지키되, 예외를 인정하고 아이의 상태를 고려합니다.',
      strengths: ['상황적 유연성', '맥락 이해', '적응적 양육'],
      tip: '예외가 너무 잦으면 아이가 규칙 자체를 가볍게 여길 수 있습니다. 비협상 영역을 2~3개 명확히 해두세요.'
    },
    {
      id: 'd3', name: '명확한 나침반형',
      desc: '규칙마다 명확한 이유와 기준을 설명하는 부모입니다. "안 돼"로 끝나지 않고 "왜 안 되는지"를 항상 함께 전달합니다.',
      strengths: ['논리적 설명', '도덕적 추론 교육', '비판적 사고 촉진'],
      tip: '모든 것을 설명하려다 보면 의사결정이 느려질 수 있습니다. 때로는 간결한 지시도 필요합니다.'
    },
    {
      id: 'd4', name: '부드러운 울타리형',
      desc: '부드럽지만 확실한 경계를 설정하는 부모입니다. 다정한 말투로 규칙을 전달하되, 경계는 분명하게 유지합니다.',
      strengths: ['따뜻한 훈육', '관계 유지형 규칙', '정서적 안전 속 규율'],
      tip: '부드러움이 때로 "좀 더 밀면 되겠다"는 신호로 읽힐 수 있습니다. 필요시 단호한 톤도 연습해보세요.'
    },
    {
      id: 'd5', name: '일관된 시계형',
      desc: '루틴과 일정 중심으로 생활 구조를 만드는 부모입니다. 예측 가능한 하루의 흐름이 아이에게 심리적 안정감을 제공합니다.',
      strengths: ['체계적 루틴', '시간 관리 교육', '구조화된 환경'],
      tip: '계획에 없는 즉흥적인 즐거움도 아이에게 중요한 경험입니다. 일주일에 한 번은 자유 시간을 만들어보세요.'
    },
    {
      id: 'd6', name: '너그러운 강물형',
      desc: '큰 틀의 방향만 잡아주고 세부적 행동은 관대하게 수용하는 부모입니다. 작은 실수에 대해 너그럽고, 큰 원칙만 지키면 됩니다.',
      strengths: ['관대한 포용', '낮은 갈등 빈도', '자율적 분위기'],
      tip: '핵심 규칙 3가지를 정해두고, 그것만큼은 일관되게 지켜보세요. 모든 것이 유연하면 아이가 기준점을 찾기 어렵습니다.'
    },
    {
      id: 'd7', name: '현명한 저울형',
      desc: '상과 벌의 균형을 정교하게 맞추는 부모입니다. 좋은 행동에는 적절한 인정을, 부적절한 행동에는 합리적인 결과를 연결합니다.',
      strengths: ['공정한 균형', '결과 학습 교육', '행동-결과 연결'],
      tip: '외적 보상에 너무 의존하지 않도록 주의하세요. 내적 동기를 키워주는 칭찬 방식을 연구해보세요.'
    }
  ],

  autonomy: [
    {
      id: 'a1', name: '열린 하늘형',
      desc: '최대한의 자유를 부여하고 멀리서 지켜보는 부모입니다. 아이의 선택을 존중하며, 스스로 배워가는 과정을 신뢰합니다.',
      strengths: ['최대 자유 부여', '신뢰 기반 양육', '독립심 촉진'],
      tip: '아이의 발달 단계에 맞는 자유의 범위를 설정하세요. 아직 판단력이 미숙한 영역에서는 가이드가 필요합니다.'
    },
    {
      id: 'a2', name: '든든한 뿌리형',
      desc: '안전한 기반을 마련해주고 그 위에서 자유롭게 탐험하도록 지원하는 부모입니다. "언제든 돌아올 수 있는 안전 기지"를 제공합니다.',
      strengths: ['안전 기지 제공', '탐험 지원', '안정감과 자율의 균형'],
      tip: '아이가 도움을 요청하기 전에 먼저 개입하고 싶은 충동을 참아보세요. 기다림이 아이의 성장을 만듭니다.'
    },
    {
      id: 'a3', name: '용기의 날개형',
      desc: '도전과 모험을 적극적으로 응원하는 부모입니다. 새로운 시도를 두려워하는 아이에게 용기를 불어넣고 가능성을 믿어줍니다.',
      strengths: ['도전 응원', '성장 마인드셋', '용기 부여'],
      tip: '아이마다 모험에 대한 역치가 다릅니다. 아이의 기질을 존중하면서 점진적으로 도전 범위를 넓혀가세요.'
    },
    {
      id: 'a4', name: '기다리는 정원사형',
      desc: '인내심 있게 아이의 속도에 맞추는 부모입니다. 빠른 결과를 재촉하지 않고, 각자의 성장 시계를 존중합니다.',
      strengths: ['인내심', '개별 속도 존중', '과정 중심 양육'],
      tip: '기다림이 무관심으로 읽히지 않도록, 과정 중 작은 성취에 대한 관심과 격려를 표현해주세요.'
    },
    {
      id: 'a5', name: '탐험의 지도형',
      desc: '여러 선택지를 제시하되 최종 결정은 아이에게 맡기는 부모입니다. "이것도 있고 저것도 있는데, 뭘 해볼까?" 식의 가이드를 제공합니다.',
      strengths: ['선택지 제공', '의사결정 교육', '구조화된 자율'],
      tip: '선택지가 너무 많으면 아이가 오히려 선택에 어려움을 느낍니다. 2~3개로 범위를 좁혀주세요.'
    },
    {
      id: 'a6', name: '격려의 샘물형',
      desc: '끊임없는 긍정적 피드백으로 아이의 자신감을 키우는 부모입니다. 작은 시도에도 진심 어린 격려를 보내 자기효능감을 높여줍니다.',
      strengths: ['긍정적 피드백', '자기효능감 강화', '동기부여'],
      tip: '칭찬은 결과보다 과정과 노력에 초점을 맞추세요. "잘했어"보다 "끝까지 해보려는 네가 멋져"가 효과적입니다.'
    },
    {
      id: 'a7', name: '자유의 돛단배형',
      desc: '실패를 통한 학습을 깊이 신뢰하는 부모입니다. 넘어져도 스스로 일어나는 경험이 최고의 교육이라 믿으며, 과보호를 경계합니다.',
      strengths: ['실패 허용', '회복력 교육', '과보호 경계'],
      tip: '안전과 관련된 상황에서는 개입이 필수입니다. 실패를 허용하되, 위험과 실패의 경계를 잘 판단해주세요.'
    }
  ],

  growth: [
    {
      id: 'g1', name: '호기심 발화형',
      desc: '질문을 던지고 탐구심을 자극하는 부모입니다. 답을 알려주기보다 "왜 그런 걸까?", "어떻게 하면 알 수 있을까?"로 사고를 확장시킵니다.',
      strengths: ['질문 기반 교육', '탐구심 촉진', '사고력 확장'],
      tip: '아이가 답을 찾지 못해 좌절할 때는 적절한 힌트를 제공해주세요. 좌절이 반복되면 호기심 자체가 꺼질 수 있습니다.'
    },
    {
      id: 'g2', name: '체계적 설계형',
      desc: '단계별 학습 계획을 세우고 체계적으로 성장을 관리하는 부모입니다. 발달 단계에 맞는 목표와 활동을 설계합니다.',
      strengths: ['체계적 계획', '단계별 목표', '발달 모니터링'],
      tip: '계획에 아이의 흥미와 의견을 반영해주세요. 부모의 설계가 아이의 자발적 동기를 압도하지 않도록 주의합니다.'
    },
    {
      id: 'g3', name: '창의적 놀이형',
      desc: '놀이를 통한 자연스러운 학습을 유도하는 부모입니다. 일상의 모든 순간을 재미있는 배움의 기회로 전환하는 능력이 뛰어납니다.',
      strengths: ['놀이 기반 학습', '창의적 환경', '자발적 동기 유발'],
      tip: '체계적인 학습이 필요한 영역(읽기, 수학 등)에서는 놀이만으로 한계가 있을 수 있습니다. 적절히 병행해보세요.'
    },
    {
      id: 'g4', name: '탐구의 현미경형',
      desc: '깊이 있는 관찰과 분석을 가르치는 부모입니다. 하나의 주제를 깊이 파고들어 탐구하는 경험을 중시합니다.',
      strengths: ['심층 탐구', '집중력 교육', '분석적 사고'],
      tip: '아이마다 관심 분야와 집중 가능 시간이 다릅니다. 깊이와 넓이의 균형을 맞춰보세요.'
    },
    {
      id: 'g5', name: '이야기 직조형',
      desc: '스토리텔링으로 세상을 설명하고 배움을 이끄는 부모입니다. 복잡한 개념도 이야기로 풀어내어 아이의 이해와 기억을 돕습니다.',
      strengths: ['스토리텔링', '비유적 설명', '언어 발달 촉진'],
      tip: '이야기에 아이가 직접 참여하는 기회를 만들어보세요. 듣는 것에서 만드는 것으로 확장하면 더 효과적입니다.'
    },
    {
      id: 'g6', name: '실험의 연금술형',
      desc: '직접 경험하고 실험하는 것을 중시하는 부모입니다. 교과서보다 실제 체험, 이론보다 실습을 통해 배우는 환경을 조성합니다.',
      strengths: ['체험 학습', '실험 정신', '문제해결 능력'],
      tip: '체험 후 반드시 "어떤 걸 느꼈어?", "다음엔 뭘 해볼까?"와 같은 성찰 대화를 나눠보세요. 경험이 학습으로 연결됩니다.'
    },
    {
      id: 'g7', name: '지혜의 도서관형',
      desc: '풍부한 지식 환경과 독서 습관을 만들어주는 부모입니다. 책, 다큐멘터리, 박물관 등 다양한 지적 자원에 대한 접근성을 높여줍니다.',
      strengths: ['지식 환경 조성', '독서 습관', '지적 자원 제공'],
      tip: '지식을 받아들이는 것만큼 자기 생각을 표현하는 훈련도 중요합니다. 독후 대화나 생각 일기를 함께 해보세요.'
    }
  ],

  resilience: [
    {
      id: 'r1', name: '침착한 방패형',
      desc: '위기 상황에서 냉정하게 아이를 보호하는 부모입니다. 감정에 휩쓸리지 않고 상황을 객관적으로 판단하여 최선의 대응을 합니다.',
      strengths: ['냉정한 판단', '위기 관리', '심리적 방패'],
      tip: '차분함이 때로 아이에게 "별거 아냐"라는 메시지로 읽힐 수 있습니다. 아이의 감정은 먼저 인정해준 후 해결에 나서세요.'
    },
    {
      id: 'r2', name: '유머의 완충형',
      desc: '유머와 긍정적 리프레이밍으로 긴장을 풀어주는 부모입니다. 무거운 상황도 웃음으로 환기하여 아이의 불안을 낮춥니다.',
      strengths: ['유머 활용', '긴장 완화', '긍정적 전환'],
      tip: '아이가 정말 심각한 감정을 느끼고 있을 때 유머가 감정을 가볍게 취급하는 것처럼 느껴질 수 있습니다. 타이밍을 잘 살피세요.'
    },
    {
      id: 'r3', name: '공감의 포옹형',
      desc: '함께 울고 함께 이겨내는 부모입니다. 위기 순간 가장 먼저 아이의 감정에 공감하고, 정서적 동반자가 되어줍니다.',
      strengths: ['깊은 공감', '정서적 동행', '유대 강화'],
      tip: '아이의 감정에 너무 동화되면 부모도 함께 무너질 수 있습니다. 공감하되, 든든한 어른의 역할도 유지해주세요.'
    },
    {
      id: 'r4', name: '전략적 체스형',
      desc: '문제를 분석하고 단계적 해결책을 찾는 부모입니다. 감정보다 해결에 초점을 맞추며, 아이에게 문제해결 프로세스를 가르칩니다.',
      strengths: ['문제 분석', '해결 중심', '전략적 사고 교육'],
      tip: '해결에 앞서 아이의 감정을 먼저 들어주세요. 감정이 수용된 후에야 아이는 해결책을 받아들일 준비가 됩니다.'
    },
    {
      id: 'r5', name: '회복의 봄날형',
      desc: '힘든 시기를 지나면 다시 봄이 온다는 희망을 심어주는 부모입니다. 아이의 회복탄력성을 믿고 키워주는 긍정적 양육을 합니다.',
      strengths: ['회복탄력성 교육', '희망 전달', '장기적 관점'],
      tip: '당장의 고통을 최소화하려는 것도 중요합니다. 미래의 희망과 현재의 위로를 함께 전달해주세요.'
    },
    {
      id: 'r6', name: '소통의 다리형',
      desc: '대화를 통해 갈등을 풀어가는 부모입니다. 아이와 열린 소통을 유지하며, 의견 차이를 대화로 해결하는 모델을 보여줍니다.',
      strengths: ['갈등 해결 대화', '열린 소통', '협상 교육'],
      tip: '어린 아이는 아직 대화로 모든 것을 해결하기 어렵습니다. 발달 단계에 맞는 소통 방식을 선택해주세요.'
    },
    {
      id: 'r7', name: '직관의 센서형',
      desc: '아이의 미세한 변화를 조기에 감지하고 예방적으로 대응하는 부모입니다. 문제가 커지기 전에 신호를 포착하는 날카로운 직관이 있습니다.',
      strengths: ['조기 감지', '예방적 대응', '세밀한 관찰'],
      tip: '모든 신호에 반응하면 과민 양육이 될 수 있습니다. 진짜 중요한 신호와 자연스러운 성장 과정의 변화를 구분하는 눈을 기르세요.'
    }
  ]
};

// ============================================================
// 질문 데이터 — 분야별 6문항, 총 30문항
// 각 답변은 7가지 유형에 대한 가중치 점수를 가짐
// scores 배열 순서: [type1, type2, type3, type4, type5, type6, type7]
// ============================================================

const QUESTIONS = [
  // ──────────────────────────────────────────
  // 1. 정서교감 (Emotional Bonding) — 4문항
  // ──────────────────────────────────────────
  {
    dimension: 'emotional',
    scenario: '😭 유치원 끝나고 아이가 풀 죽은 표정으로 "친구가 나 싫대" 하며 옵니다.',
    question: '지금 이 순간, 가장 먼저 나오는 나의 반응은?',
    options: [
      { text: '😭 아이보다 내 눈물이 먼저 날 것 같다. 일단 꽉 안아준다', scores: [3,0,0,0,3,0,1] },
      { text: '🤔 "걔가 왜 그랬을까? 혹시 네가 뭔가 했어?" 차분하게 상황 파악부터 한다', scores: [0,0,3,3,0,0,1] },
      { text: '💪 "그런 친구는 필요 없어! 더 좋은 친구 사귀면 돼!" 힘차게 격려한다', scores: [0,0,0,0,0,0,3] },
      { text: '🫂 아무 말 없이 옆에 앉아 등을 토닥이며 스스로 털어놓을 때까지 기다린다', scores: [0,3,1,0,2,0,0] }
    ]
  },
  {
    dimension: 'emotional',
    scenario: '😡 아이가 처음으로 "엄마/아빠 싫어!! 나빠!!"를 있는 힘껏 외칩니다.',
    question: '이 순간 나는?',
    options: [
      { text: '😤 솔직히 좀 상처받는다. 하지만 "그래도 나는 네가 제일 좋아" 꿀꺽 참는다', scores: [3,0,0,0,2,0,1] },
      { text: '🧊 흔들리지 않고 "지금 많이 화난 거구나. 진정되면 얘기하자" 차분하게 넘긴다', scores: [0,3,1,0,0,1,0] },
      { text: '😟 아이가 그 말을 한 이유를 진지하게 파악하고 싶다. 내가 잘못한 게 있나 돌아본다', scores: [0,0,2,3,0,0,1] },
      { text: '🌊 "그런 말도 할 수 있어. 화가 많이 났구나" 감정 자체를 수용해준다', scores: [0,0,1,1,0,3,2] }
    ]
  },
  {
    dimension: 'emotional',
    scenario: '😴 자려고 누웠는데 아이가 또 "물 줘..."를 5번째 외칩니다. 지금 밤 11시입니다.',
    question: '이 상황에서 나는?',
    options: [
      { text: '🥹 짜증나지만 꾹 참고 갖다준다. 안 주면 마음이 더 불편하다', scores: [3,0,0,0,3,0,0] },
      { text: '😤 "이제 진짜 마지막이야!" 단호하게 못 박고 준다. 다음엔 절대 안 줄 거다', scores: [0,3,0,1,0,0,0] },
      { text: '🤷 "침대 옆에 물 떠다 두면 되잖아" 근본적인 해결책을 가르쳐 준다', scores: [0,0,3,0,0,0,2] },
      { text: '🙅 "이제 진짜 안 된다. 자는 시간이야." 불을 끄고 나온다', scores: [0,1,0,0,0,0,3] }
    ]
  },
  {
    dimension: 'emotional',
    scenario: '📱 아이가 갑자기 "엄마/아빠는 맨날 폰만 봐, 나랑 안 놀아줘"라고 말합니다.',
    question: '솔직한 나의 반응은?',
    options: [
      { text: '😔 가슴이 뜨끔하다. 폰을 내려놓고 "미안, 우리 뭐 할까?" 바로 전환한다', scores: [2,0,0,0,3,1,0] },
      { text: '📋 "그럼 오늘부터 우리 같이 놀기 시간 정하자!" 규칙을 만든다', scores: [0,3,0,1,0,0,1] },
      { text: '🙄 솔직히 잠깐 억울하다. "엄마/아빠도 일이 있잖아" 설명하지만 이후 반성한다', scores: [0,0,0,0,0,2,3] },
      { text: '🤗 "그랬구나, 많이 심심했어? 지금 당장 같이 놀자!" 바로 책을 덮고 달려간다', scores: [3,0,1,0,2,0,0] }
    ]
  },

  // ──────────────────────────────────────────
  // 2. 규칙과 훈육 (Discipline) — 4문항
  // ──────────────────────────────────────────
  {
    dimension: 'discipline',
    scenario: '🛒 마트에서 장난감 사달라며 아이가 바닥에 드러눕습니다. 주변 시선이 집중됩니다.',
    question: '나는 어떻게 하나요?',
    options: [
      { text: '🙅 흔들리지 않는다. "오늘은 장난감 사는 날 아니야." 아이를 안고 나온다', scores: [3,0,1,0,0,0,1] },
      { text: '😩 일단 조용한 곳으로 끌고 가서 달래본다. 사줄 수도 있다', scores: [0,1,0,2,0,0,0] },
      { text: '🗓 "이번 생일 선물로 사줄게. 대신 지금은 일어나야 해." 협상한다', scores: [0,0,2,1,0,0,2] },
      { text: '😅 내 마음속으로는 이미 사주기로 했다. 일단 형식상 "안 된다"고 한다', scores: [0,0,0,0,0,3,0] }
    ]
  },
  {
    dimension: 'discipline',
    scenario: '🍽 밥상 앞에 앉아서 30분째 한 숟가락도 안 먹고 딴짓만 합니다.',
    question: '나의 대응은?',
    options: [
      { text: '⏰ "10분 안에 다 못 먹으면 오늘 저녁 없어." 타이머를 켠다', scores: [2,0,0,0,3,0,0] },
      { text: '🍿 먹기 싫으면 안 먹어도 된다. 억지로 먹이는 건 더 나쁘다고 생각한다', scores: [3,0,0,0,0,2,0] },
      { text: '😅 유튜브라도 보여주면서 숟가락으로 넣어준다. 일단 먹여야 한다', scores: [0,0,0,3,0,0,0] },
      { text: '🍽 "한 숟가락만 먹으면 일어나도 돼." 타협점을 찾는다', scores: [0,2,1,1,0,0,0] }
    ]
  },
  {
    dimension: 'discipline',
    scenario: '📺 취침 30분 전인데 "유튜브 10분만 더!" 를 이미 4번째 듣고 있습니다.',
    question: '이 상황, 나의 훈육 방식은?',
    options: [
      { text: '🔌 말 없이 TV를 끈다. 언성 높이지 않는다. 반응 안 한다', scores: [3,0,0,0,3,0,0] },
      { text: '🤝 "10분은 안 돼. 5분 줄게, 대신 다음엔 없어." 마지막 협상을 한다', scores: [0,2,0,1,0,0,1] },
      { text: '😤 "몇 번을 말해야 해!!" 결국 욱한다. 후회하지만 어쩔 수 없다', scores: [0,0,0,0,0,3,0] },
      { text: '😤 엄격하게 규칙을 지킨다. 이걸 허용하면 아이가 더 달라붙는다는 걸 안다', scores: [1,3,0,0,1,0,0] }
    ]
  },
  {
    dimension: 'discipline',
    scenario: '🤬 형제/자매가 심하게 싸우다 결국 물건을 집어던졌습니다.',
    question: '나의 첫 번째 행동은?',
    options: [
      { text: '🚨 던진 아이를 즉시 분리한다. 물건 던지는 건 무조건 안 된다', scores: [3,0,0,0,2,0,0] },
      { text: '🎭 "이런, 물건이 날아다니네! 오늘의 올림픽 선수 등장!" 웃음으로 환기한다', scores: [0,3,0,0,0,0,0] },
      { text: '😢 "둘 다 얼마나 억울했으면..." 먼저 감정을 들어준다', scores: [0,0,3,0,0,0,0] },
      { text: '👨‍⚖️ "누가 먼저 시작했어?" 원인을 파악해서 공정하게 해결한다', scores: [0,0,0,2,0,1,2] }
    ]
  },

  // ──────────────────────────────────────────
  // 3. 자율성 지원 (Autonomy) — 4문항
  // ──────────────────────────────────────────
  {
    dimension: 'autonomy',
    scenario: '👗 유치원 가야 하는데 아이가 옷을 뒤집어 입고 나왔습니다. 10분 남았습니다.',
    question: '나는?',
    options: [
      { text: '✂️ 이미 뒤집어서 입었으면 그냥 간다. 스스로 입은 게 대견하다', scores: [3,0,0,3,0,0,1] },
      { text: '🔄 "잠깐, 도와줄게!" 바로 뒤집어 입혀준다. 지각이 더 문제다', scores: [0,2,0,0,0,0,0] },
      { text: '🪞 "오늘 옷 뒤집어 입었네? 한번 거울 볼까?" 스스로 알아채게 유도한다', scores: [0,0,2,0,2,3,0] },
      { text: '🤔 "이 옷이랑 저 옷 중에 뭐가 더 좋아?" 다른 옷으로 관심을 돌린다', scores: [0,0,0,0,3,1,0] }
    ]
  },
  {
    dimension: 'autonomy',
    scenario: '🏆 "나 혼자 할 거야!"를 외치며 절대 하기 어려운 과제에 도전합니다. 시간도 없습니다.',
    question: '나의 반응은?',
    options: [
      { text: '😬 지켜보면서 조마조마하다. 하지만 끝까지 안 끼어든다', scores: [3,0,0,0,0,0,1] },
      { text: '🆘 답답해서 결국 "이 부분만 같이 해!" 하고 끼어든다', scores: [0,1,0,3,0,0,0] },
      { text: '📣 "멋진데! 힘들면 말해~ 엄마/아빠 여기 있어!" 응원하며 안전망을 깔아둔다', scores: [0,0,3,0,0,2,0] },
      { text: '🗺️ "여기서 막히면 이렇게 해봐." 힌트를 미리 던져두고 관찰한다', scores: [0,0,0,0,3,0,0] }
    ]
  },
  {
    dimension: 'autonomy',
    scenario: '💸 이번 달 용돈을 받자마자 전부 과자 사는 데 써버렸습니다.',
    question: '나는 어떻게 반응하나요?',
    options: [
      { text: '😌 그래도 괜찮다. 실수로 배우는 게 진짜다. 다음 달에 다시 시작하면 된다', scores: [3,0,0,2,0,0,1] },
      { text: '📊 "자, 이제부터 저축 30%, 쓰기 70% 비율을 정해보자." 시스템을 가르친다', scores: [0,2,0,0,3,0,0] },
      { text: '😑 "그러니까 모아뒀다가 사고 싶은 거 사라고 했잖아." 결과를 직면하게 한다', scores: [0,0,0,0,0,0,3] },
      { text: '👏 "뭘 샀는지 보여줘! 다음엔 어떻게 쓸지 같이 생각해볼까?" 대화로 풀어간다', scores: [0,0,2,0,0,3,0] }
    ]
  },
  {
    dimension: 'autonomy',
    scenario: '🎮 본인이 직접 "나 학원 그만 다니고 싶어"라고 선언했습니다.',
    question: '나의 반응은?',
    options: [
      { text: '🤝 왜 그런지 먼저 충분히 듣는다. 이유가 납득되면 그만둘 수도 있다', scores: [0,0,1,2,1,0,1] },
      { text: '📅 "1달만 더 해봐. 그때도 싫으면 그때 얘기하자." 시간을 준다', scores: [0,2,2,0,0,1,1] },
      { text: '🧑‍⚖️ "네가 하기 싫으면 안 해도 돼. 그 대신 다른 걸 찾아야 해." 선택권을 준다', scores: [3,0,0,0,0,0,2] },
      { text: '❌ "이건 네가 결정할 문제가 아니야. 지금은 꼭 해야 하는 시기야." 단호하게 거절한다', scores: [0,3,0,0,0,0,0] }
    ]
  },

  // ──────────────────────────────────────────
  // 4. 학습과 성장 (Growth) — 4문항
  // ──────────────────────────────────────────
  {
    dimension: 'growth',
    scenario: '🦕 "하늘은 왜 파래? 구름은 왜 하얘? 비는 왜 차가워?" 연달아 질문 폭격이 시작됩니다.',
    question: '나는?',
    options: [
      { text: '🤔 "왜 그런 것 같아? 엄마/아빠도 궁금한데 같이 생각해보자!" 같이 탐구한다', scores: [3,0,0,0,0,0,0] },
      { text: '📱 "네이버 같이 찾아볼까?" 바로 검색하며 실제 정보를 알려준다', scores: [0,0,0,0,3,0,1] },
      { text: '🧪 "직접 실험해볼까? 프리즘 사다가 빛 나눠보자!" 체험으로 연결한다', scores: [0,0,0,0,0,3,0] },
      { text: '📚 "이거랑 관련된 책 있는데! 같이 읽어볼까?" 책으로 연결한다', scores: [0,0,0,0,0,0,3] }
    ]
  },
  {
    dimension: 'growth',
    scenario: '📚 숙제를 앞에 두고 "하기 싫어, 몰라, 안 할 거야"를 30분째 반복합니다.',
    question: '나의 접근법은?',
    options: [
      { text: '📋 "지금 하기 싫어? 그럼 놀고 나서 할 시간 정해줄게." 타임을 준다', scores: [0,0,0,0,3,1,0] },
      { text: '🤷 하기 싫으면 안 해도 된다고 생각한다. 결국 해야 할 때 하게 된다', scores: [3,0,0,0,0,0,2] },
      { text: '🏃 "엄마/아빠도 같이 앉아있을게. 한 문제만 풀어봐." 옆에서 함께한다', scores: [0,0,2,0,0,3,0] },
      { text: '🎯 "이거 다 하면 게임 30분 해도 돼." 동기부여를 준다', scores: [0,2,0,0,0,0,3] }
    ]
  },
  {
    dimension: 'growth',
    scenario: '🧩 같은 퍼즐만 1시간째 반복하고 있습니다. 다른 건 절대 안 하겠다고 합니다.',
    question: '나의 반응은?',
    options: [
      { text: '🔍 "어떤 부분이 제일 재미있어?" 몰입하는 이유를 먼저 파악한다', scores: [1,0,0,3,0,0,0] },
      { text: '📐 퍼즐 그림과 관련된 책을 슬쩍 옆에 가져다 놓는다. 자연스럽게 확장시킨다', scores: [0,3,1,0,0,0,0] },
      { text: '🎮 "퍼즐 다했으면 퍼즐 나라 이야기 만들어보자!" 놀이로 연결한다', scores: [0,0,3,0,0,1,0] },
      { text: '⏱ 그냥 둔다. 아이가 몰입하고 있으면 방해하지 않는 게 맞다', scores: [3,0,0,2,0,0,1] }
    ]
  },
  {
    dimension: 'growth',
    scenario: '😞 시험 결과가 기대보다 훨씬 낮게 나왔습니다. 아이도 풀이 죽어있습니다.',
    question: '이 순간, 내가 가장 먼저 하는 말은?',
    options: [
      { text: '🫂 "수고했어. 많이 속상하지?" 결과보다 아이의 감정을 먼저 안아준다', scores: [3,0,0,0,2,1,0] },
      { text: '📊 "어디서 틀렸는지 같이 보자. 다음엔 어떻게 준비할까?" 분석 후 계획을 세운다', scores: [0,3,0,0,0,0,0] },
      { text: '😌 "괜찮아. 이번 경험이 다음에 도움될 거야." 긍정적으로 마무리한다', scores: [0,0,3,0,0,0,0] },
      { text: '💭 "어떤 느낌이야? 어떻게 하고 싶어?" 아이 스스로 생각하게 한다', scores: [0,0,0,2,0,0,3] }
    ]
  },

  // ──────────────────────────────────────────
  // 5. 위기 대응 (Resilience) — 4문항
  // ──────────────────────────────────────────
  {
    dimension: 'resilience',
    scenario: '💥 오늘 나는 한계에 와있습니다. 그런데 아이도 동시에 터지기 시작합니다.',
    question: '이 상황에서 나는?',
    options: [
      { text: '😤 솔직히 같이 터진다. 후회하지만 인간인지라 어쩔 수 없다', scores: [0,0,0,0,0,3,0] },
      { text: '🥴 "지금 엄마/아빠도 힘들어. 5분만 시간 줄게." 솔직하게 말하고 잠깐 분리한다', scores: [0,0,0,0,0,0,0] },
      { text: '🧘 힘들어도 아이 앞에서는 최대한 참는다. 아이에게 내 한계를 보이는 건 안 좋다', scores: [3,0,0,0,0,0,1] },
      { text: '🤝 "우리 둘 다 지쳤네. 오늘은 그냥 같이 유튜브 보면서 쉬자." 함께 리셋한다', scores: [0,0,3,0,1,0,0] }
    ]
  },
  {
    dimension: 'resilience',
    scenario: '😢 아이가 학교에서 따돌림을 당하고 있다는 걸 오늘 처음 알게 됐습니다.',
    question: '그날 밤, 나의 행동은?',
    options: [
      { text: '📞 감정적이 되기 전에 학교에 바로 연락하고 상황 파악부터 한다', scores: [3,0,0,1,0,0,0] },
      { text: '🫂 아이 방에 가서 그냥 안아준다. 지금은 말보다 온기가 먼저다', scores: [0,0,3,0,0,0,0] },
      { text: '🗺️ "어떻게 하고 싶어? 같이 방법 찾아보자." 아이와 함께 대응 전략을 세운다', scores: [0,0,0,3,0,1,0] },
      { text: '📔 최근 아이의 변화를 떠올려보며 신호를 놓친 게 없었나 자책한다', scores: [0,0,0,0,0,0,3] }
    ]
  },
  {
    dimension: 'resilience',
    scenario: '😤 아이에게 욱해서 심하게 혼을 냈습니다. 아이는 울고 있고, 나는 후회합니다.',
    question: '나는 어떻게 수습하나요?',
    options: [
      { text: '🙇 바로 아이에게 가서 "미안해. 엄마/아빠가 잘못했어."하고 솔직하게 사과한다', scores: [0,0,0,0,0,3,0] },
      { text: '🔍 냉정하게 돌아보고, 다음엔 같은 실수를 하지 않을 방법을 생각한다', scores: [3,0,0,2,0,0,0] },
      { text: '🤷 "엄마/아빠도 완벽하지 않아. 우리 같이 배워가는 거야." 자연스럽게 넘어간다', scores: [0,0,2,0,2,0,0] },
      { text: '👁️ 아이 표정과 반응을 계속 살핀다. 혹시 마음에 상처를 받은 건 아닌지 불안하다', scores: [0,0,0,0,0,0,3] }
    ]
  },
  {
    dimension: 'resilience',
    scenario: '🏫 전학/이사를 앞두고 아이가 "가기 싫어, 새 학교 무서워"를 매일 반복합니다.',
    question: '나의 지원 방식은?',
    options: [
      { text: '📋 새 학교 정보를 미리 조사하고, 적응 계획을 단계별로 세워준다', scores: [3,0,0,2,0,0,0] },
      { text: '💖 "불안한 거 당연해. 엄마/아빠도 처음엔 그랬어." 감정을 먼저 공감해준다', scores: [0,0,3,0,0,0,0] },
      { text: '✨ 새로운 환경의 기대되는 점들을 신나게 얘기해주며 긍정적인 기대를 심어준다', scores: [0,1,0,0,3,0,0] },
      { text: '🔍 아이의 작은 변화도 놓치지 않으려 매일 세심하게 관찰한다', scores: [0,0,0,0,0,0,3] }
    ]
  }
];

// 상황별 시뮬레이션 데이터 (가장 낮은 점수의 차원 보완용)
const SIMULATIONS = {
  emotional: {
    title: '아이가 갑자기 마트에서 "나 이거 안 사면 안 갈 거야!" 라며 드러누울 때',
    wrong: '이론적으로 안 되는 이유를 설명하거나 무시하고 지나갑니다.',
    correct: '먼저 아이의 눈높이로 몸을 낮추고, "정말 갖고 싶구나. 속상한 마음은 알아"라며 감정을 먼저 100% 읽어주세요. 해결은 그 다음입니다.'
  },
  discipline: {
    title: '아이가 밤 10시가 넘었는데도 안 자고 계속 칭얼거릴 때',
    wrong: '아이의 감정에 휘말려 계속 달래주거나, 결국 화를 내며 강제로 재웁니다.',
    correct: '감정은 공감하되 규칙은 단호하게 지키세요. "졸려서 힘들지? 그래도 자야 할 시간이야" 하고 불을 끄고 일관된 환경을 유지하세요.'
  },
  autonomy: {
    title: '아이가 신발 끈을 묶다 마음대로 안 되어 짜증을 낼 때',
    wrong: '답답한 마음에 "엄마/아빠가 해줄게" 하고 바로 묶어버립니다.',
    correct: '아이의 손을 잡아주며 "어렵네, 어디가 안 되는지 같이 볼까?" 하고 아주 작은 힌트만 제공하여 스스로 완성할 수 있게 기다려주세요.'
  },
  growth: {
    title: '아이가 똑같은 퍼즐만 계속 맞추며 다른 놀이는 안 하려 할 때',
    wrong: '"이제 다른 것도 해봐" 라며 퍼즐을 치우고 새로운 것을 강요합니다.',
    correct: '아이가 몰두하는 퍼즐의 난이도를 조금 높여주거나, 퍼즐의 그림과 관련된 책을 읽어주어 관심사를 점진적으로 확장시켜주세요.'
  },
  resilience: {
    title: '아이가 친구와 다투고 와서 "나 이제 걔랑 안 놀아!" 라며 울 때',
    wrong: '"네가 먼저 양보했어야지" 하거나 "그래 놀지 마" 라며 극단적으로 반응합니다.',
    correct: '"많이 속상했구나" 위로한 뒤, 진정되면 "어떻게 말했으면 더 좋았을까?" 라며 스스로 대안을 생각하게 하여 회복 근력을 키워주세요.'
  }
};

// ============================================================
// 채점 & 분석 함수
// ============================================================

function calculateResults(answers) {
  const dimensionScores = {};
  const dimensionTypes = {};

  DIMENSIONS.forEach(dim => {
    dimensionScores[dim.id] = [0, 0, 0, 0, 0, 0, 0];
  });

  // 각 답변의 점수를 해당 차원에 누적
  answers.forEach((answerIndex, qIndex) => {
    const question = QUESTIONS[qIndex];
    const scores = question.options[answerIndex].scores;
    const dim = question.dimension;
    for (let i = 0; i < 7; i++) {
      dimensionScores[dim][i] += scores[i];
    }
  });

  // 각 차원별 최고 점수 유형 결정
  DIMENSIONS.forEach(dim => {
    const scores = dimensionScores[dim.id];
    let maxIdx = 0;
    let maxScore = scores[0];
    for (let i = 1; i < 7; i++) {
      if (scores[i] > maxScore) {
        maxScore = scores[i];
        maxIdx = i;
      }
    }
    dimensionTypes[dim.id] = {
      typeIndex: maxIdx,
      type: PERSONA_TYPES[dim.id][maxIdx],
      scores: scores,
      maxScore: maxScore,
      // 정규화 점수 (0~100)
      normalizedScore: Math.round((maxScore / 12) * 100) // 최대 가능 점수 = 3 * 4 = 12
    };
  });

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

  return {
    dimensionTypes,
    dimensionScores,
    overallPersona,
    lowestDimId,
    simulation
  };
}

function determineOverallPersona(dimensionTypes) {
  // 각 차원의 유형 인덱스 기반으로 종합 성향 판단
  const eIdx = dimensionTypes.emotional.typeIndex;
  const dIdx = dimensionTypes.discipline.typeIndex;
  const aIdx = dimensionTypes.autonomy.typeIndex;
  const gIdx = dimensionTypes.growth.typeIndex;
  const rIdx = dimensionTypes.resilience.typeIndex;

  // 감성/따뜻함 계열 (emotional 0,4 + resilience 2)
  const warmScore = (eIdx <= 1 || eIdx === 4 ? 2 : 0) + (rIdx === 2 ? 2 : 0);
  // 구조/체계 계열 (discipline 0,4 + growth 1)
  const structuredScore = (dIdx === 0 || dIdx === 4 ? 2 : 0) + (gIdx === 1 ? 2 : 0);
  // 자유/자율 계열 (autonomy 0,6 + discipline 5)
  const freeScore = (aIdx === 0 || aIdx === 6 ? 2 : 0) + (dIdx === 5 ? 2 : 0);
  // 지혜/통찰 계열 (emotional 2,3 + resilience 6)
  const wiseScore = (eIdx === 2 || eIdx === 3 ? 2 : 0) + (rIdx === 6 ? 2 : 0);
  // 공감 계열 (emotional 2,3 + resilience 2,5)
  const empatheticScore = (eIdx >= 2 && eIdx <= 3 ? 2 : 0) + (rIdx === 2 || rIdx === 5 ? 2 : 0);
  // 창의 계열 (growth 2,5 + autonomy 2)
  const creativeScore = (gIdx === 2 || gIdx === 5 ? 2 : 0) + (aIdx === 2 ? 2 : 0);
  // 회복 계열 (resilience 4 + autonomy 6)
  const resilientScore = (rIdx === 4 ? 2 : 0) + (aIdx === 6 ? 2 : 0);

  const combos = [
    { key: 'warm', score: warmScore },
    { key: 'structured', score: structuredScore },
    { key: 'free', score: freeScore },
    { key: 'wise', score: wiseScore },
    { key: 'empathetic', score: empatheticScore },
    { key: 'creative', score: creativeScore },
    { key: 'resilient', score: resilientScore }
  ];

  combos.sort((a, b) => b.score - a.score);

  // 가장 높은 combo 찾기, 동점일 경우 balanced
  if (combos[0].score === combos[1].score) {
    return OVERALL_TITLES.find(t => t.combo === 'balanced');
  }

  return OVERALL_TITLES.find(t => t.combo === combos[0].key) || OVERALL_TITLES.find(t => t.combo === 'balanced');
}

// 결과를 LocalStorage에 저장/로드
function saveResults(results) {
  // 기존 방식 호환
  localStorage.setItem('mirrorInsideResults', JSON.stringify(results));
  
  const timestamp = new Date().toISOString();
  localStorage.setItem('mirrorInsideTimestamp', timestamp);

  // 히스토리 배열에 누적 저장
  let history = [];
  try {
    const historyData = localStorage.getItem('mirrorInsideHistory');
    if (historyData) history = JSON.parse(historyData);
  } catch (e) {}

  results.id = timestamp;
  results.date = new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  
  history.unshift(results); // 최신 결과가 맨 앞에 오도록
  localStorage.setItem('mirrorInsideHistory', JSON.stringify(history));
}

function loadResults() {
  const data = localStorage.getItem('mirrorInsideResults');
  return data ? JSON.parse(data) : null;
}

function loadHistory() {
  const data = localStorage.getItem('mirrorInsideHistory');
  return data ? JSON.parse(data) : [];
}

function saveProgress(answers, currentIndex) {
  localStorage.setItem('mirrorInsideProgress', JSON.stringify({ answers, currentIndex }));
}

function loadProgress() {
  const data = localStorage.getItem('mirrorInsideProgress');
  return data ? JSON.parse(data) : null;
}

function clearProgress() {
  localStorage.removeItem('mirrorInsideProgress');
}

// ============================================================
// MBTI 기반 매핑 및 갤러리/미리보기용 가상 데이터 생성
// ============================================================

const MBTI_MAPPING = {
  'ENFJ': 'warm', 'ESFJ': 'warm', 'ISFJ': 'warm',
  'ESTJ': 'structured', 'ISTJ': 'structured',
  'ENFP': 'free', 'ESFP': 'free', 'ESTP': 'free',
  'INTJ': 'wise', 'INTP': 'wise', 'ENTJ': 'wise',
  'ISFP': 'empathetic', 'INFJ': 'empathetic',
  'INFP': 'creative', 'ENTP': 'creative',
  'ISTP': 'resilient'
};

function generateMockResult(combo) {
  const overallPersona = OVERALL_TITLES.find(t => t.combo === combo) || OVERALL_TITLES.find(t => t.combo === 'balanced');
  
  const dimensionTypes = {};
  const dimensionScores = {};
  
  // 콤보별 특징을 살린 차원별 대표 타입 매핑
  const comboTraits = {
    'warm': { emotional: 0, discipline: 3, autonomy: 3, growth: 3, resilience: 2 },
    'structured': { emotional: 3, discipline: 0, autonomy: 4, growth: 1, resilience: 3 },
    'free': { emotional: 4, discipline: 5, autonomy: 0, growth: 4, resilience: 3 },
    'wise': { emotional: 2, discipline: 3, autonomy: 3, growth: 3, resilience: 6 },
    'balanced': { emotional: 1, discipline: 1, autonomy: 1, growth: 1, resilience: 1 },
    'empathetic': { emotional: 3, discipline: 4, autonomy: 3, growth: 3, resilience: 5 },
    'creative': { emotional: 4, discipline: 3, autonomy: 2, growth: 2, resilience: 3 },
    'resilient': { emotional: 3, discipline: 3, autonomy: 6, growth: 4, resilience: 4 }
  };
  
  const traits = comboTraits[combo] || comboTraits['balanced'];

  DIMENSIONS.forEach(dim => {
    const tIdx = traits[dim.id] || 0;
    dimensionScores[dim.id] = [5, 5, 5, 5, 5, 5, 5];
    dimensionScores[dim.id][tIdx] = 15;
    
    dimensionTypes[dim.id] = {
      typeIndex: tIdx,
      type: PERSONA_TYPES[dim.id][tIdx],
      scores: dimensionScores[dim.id],
      maxScore: 15,
      normalizedScore: Math.floor(85 - (Math.random() * 15)) // 70~85
    };
  });
  
  return {
    dimensionTypes,
    dimensionScores,
    overallPersona,
    lowestDimId: 'emotional',
    simulation: SIMULATIONS['emotional'],
    isMock: true
  };
}
