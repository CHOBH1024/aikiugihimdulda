const fs = require('fs');

// ============================================================
// 학술 기반 25문항 (표준) + 40문항 (심층) 세트
// 이론 근거:
//   - Baumrind(1966,1971,1991): Authoritative/Authoritarian/Permissive
//   - Bowlby(1969): Attachment Theory → Secure Base / Safe Haven
//   - Gottman(1997): Emotion Coaching (5-step model)
//   - Deci & Ryan(1985,2000): Self-Determination Theory (Autonomy/Competence/Relatedness)
//   - Dweck(2006): Growth vs. Fixed Mindset
//   - Vygotsky: ZPD / Scaffolding
//   - Seligman(2011): PERMA / Learned Optimism
//   - Siegel & Bryson(2012): Connect-then-Redirect ("The Whole-Brain Child")
// ============================================================

const QUESTIONS_25_DATA = [
  // ─────────────────────────────────────────────────────────
  // [정서교감] Emotional Bonding — 5문항 (볼비 애착이론 + 가트맨 감정코칭)
  // ─────────────────────────────────────────────────────────
  {
    dimension: 'emotional',
    theory: 'Bowlby(1969) Secure Base · Gottman Emotion Coaching',
    scenario: '😭 유치원 끝나고 아이가 풀 죽은 표정으로 "친구가 나 싫대" 하며 옵니다.',
    question: '이 순간 가장 먼저 나오는 나의 반응은?',
    options: [
      { text: '말없이 꼭 안아주며 울 때까지 기다린다. 지금은 말보다 온기가 먼저다', scores: [3,0,0,0,2,1,0] },
      { text: '"걔가 왜 그랬을까? 혹시 먼저 뭔가 했어?" 차분하게 상황을 파악한다', scores: [0,0,2,3,0,0,1] },
      { text: '"그런 친구는 필요 없어! 더 좋은 친구 사귀면 돼" 힘차게 격려한다', scores: [0,0,0,0,0,0,3] },
      { text: '"많이 속상했구나. 어떤 일이 있었어?" 감정을 먼저 인정하며 천천히 듣는다', scores: [2,0,1,0,0,3,1] }
    ]
  },
  {
    dimension: 'emotional',
    theory: 'Gottman(1997) Emotion Coaching — Empathy vs. Dismissal',
    scenario: '😡 아이가 처음으로 "엄마/아빠 싫어!! 나빠!!"를 있는 힘껏 외칩니다.',
    question: '이 순간 나는?',
    options: [
      { text: '솔직히 상처받는다. 하지만 "그래도 나는 네가 제일 좋아" 꿀꺽 참는다', scores: [3,0,0,0,2,0,1] },
      { text: '"지금 많이 화난 거구나. 진정되면 얘기하자" 흔들리지 않고 차분히 넘긴다', scores: [0,2,1,0,0,1,0] },
      { text: '"그런 말도 할 수 있어. 화가 많이 났구나" — 감정 자체를 수용해준다', scores: [0,0,1,1,0,3,2] },
      { text: '"왜 그런 말을 했는지 이야기해봐" 이유를 진지하게 파악하려 한다', scores: [0,0,2,3,0,0,1] }
    ]
  },
  {
    dimension: 'emotional',
    theory: 'Siegel & Bryson(2012) Connect-then-Redirect',
    scenario: '📱 아이가 "엄마/아빠는 맨날 폰만 봐, 나랑 안 놀아줘"라고 말합니다.',
    question: '솔직한 나의 반응은?',
    options: [
      { text: '가슴이 뜨끔하다. 즉시 폰을 내려놓고 "미안, 우리 뭐 할까?" 전환한다', scores: [2,0,0,0,3,1,0] },
      { text: '"그럼 오늘부터 함께 놀기 시간을 정해보자" — 구조적 해결책을 만든다', scores: [0,3,0,1,0,0,1] },
      { text: '"그랬구나, 많이 심심했어? 지금 당장 같이 놀자!" 바로 달려간다', scores: [3,0,1,0,2,0,0] },
      { text: '억울하기도 하지만, 아이의 말을 그대로 받아들이고 이후 솔직하게 사과한다', scores: [0,0,0,0,0,2,3] }
    ]
  },
  {
    dimension: 'emotional',
    theory: 'Bowlby(1969) Safe Haven — Parental Sensitivity',
    scenario: '🌙 자려고 누웠는데 아이가 "무서워, 혼자 못 자겠어"를 반복합니다.',
    question: '나의 반응은?',
    options: [
      { text: '"무섭구나. 엄마/아빠가 잠들 때까지 옆에 있어줄게" 안심을 준다', scores: [3,0,0,0,2,1,0] },
      { text: '"밤에는 당연히 자야 해. 이젠 혼자 자는 연습을 해야 해" 단호하게 돌아온다', scores: [0,3,0,0,0,0,1] },
      { text: '"왜 무섭지? 뭐가 보여?" 아이가 무서운 원인을 파악하고 해결해준다', scores: [0,0,2,3,0,0,0] },
      { text: '"괜찮아. 아무것도 없어. 자면 돼" 빠르게 안심시키고 나온다', scores: [0,0,0,0,0,0,3] }
    ]
  },
  {
    dimension: 'emotional',
    theory: 'Gottman(1997) — Emotion Awareness & Labeling',
    scenario: '🎭 특별한 이유 없이 아이가 종일 짜증을 내고 예민하게 굽니다.',
    question: '나는 어떻게 반응하나요?',
    options: [
      { text: '"오늘 뭔가 힘든 일이 있었던 것 같은데, 이야기해줄 수 있어?" 먼저 마음을 열어준다', scores: [2,0,0,1,0,3,1] },
      { text: '"이렇게 짜증 부리면 안 돼. 왜 그러는 거야?" 분명히 선을 긋는다', scores: [0,2,0,0,1,0,1] },
      { text: '거리를 두고 아이가 스스로 진정될 때까지 기다린다', scores: [3,0,1,0,0,0,0] },
      { text: '"우리 같이 기분 좋아질 만한 거 해볼까?" 환경을 바꿔 분위기를 전환한다', scores: [0,0,1,0,0,1,3] }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // [규칙과 훈육] Discipline — 5문항 (바움린드 권위 있는 양육 이론)
  // ─────────────────────────────────────────────────────────
  {
    dimension: 'discipline',
    theory: 'Baumrind(1966) Authoritative vs. Authoritarian vs. Permissive',
    scenario: '🛒 마트에서 장난감을 사달라며 아이가 바닥에 드러눕습니다.',
    question: '나는 어떻게 하나요?',
    options: [
      { text: '"오늘은 장난감 사는 날이 아니야" — 단호하고 차분하게 반복하며 아이를 안고 나온다', scores: [3,0,1,0,0,0,1] },
      { text: '"속상하구나. 그래도 오늘은 안 사. 다음 생일 선물 리스트에 적어두자" — 감정은 수용, 행동은 제한', scores: [1,2,1,1,0,0,0] },
      { text: '주변 시선 때문에 결국 사준다. 상황이 종료되면 집에서 조용히 이야기한다', scores: [0,0,0,2,0,3,0] },
      { text: '"한 가지만 고를 수 있어. 어느 걸로 할래?" — 제한된 선택권을 준다', scores: [0,1,2,1,0,0,2] }
    ]
  },
  {
    dimension: 'discipline',
    theory: 'Baumrind(1991) Demandingness + Responsiveness Balance',
    scenario: '📺 취침 시간인데 "유튜브 10분만 더!"를 이미 네 번째 듣고 있습니다.',
    question: '이 상황 나의 훈육 방식은?',
    options: [
      { text: '말없이 TV를 끈다. 언성 높이지 않는다. 반응하지 않는다', scores: [2,0,0,0,3,0,0] },
      { text: '"10분은 안 돼. 5분 더 주고 그게 마지막이야" — 최후 타협을 제안한다', scores: [0,1,0,1,0,0,2] },
      { text: '"몇 번을 말해야 해!!" 결국 욱한다. 후회하지만 어쩔 수 없다', scores: [0,0,0,0,0,3,0] },
      { text: '규칙을 분명히 한다. 한 번이라도 허용하면 매번 달라붙는다는 걸 안다', scores: [1,3,0,0,1,0,0] }
    ]
  },
  {
    dimension: 'discipline',
    theory: 'Baumrind — Natural Consequences & Logical Consequences',
    scenario: '💸 이번 달 용돈을 받자마자 전부 과자 사는 데 써버렸습니다.',
    question: '나는 어떻게 반응하나요?',
    options: [
      { text: '"그러니까 모아뒀다가 사라고 했잖아" — 결과를 직면하게 하고 추가 지원은 없다', scores: [0,0,0,0,0,0,3] },
      { text: '"괜찮아. 실수로 배우는 게 진짜야. 다음 달엔 어떻게 할지 같이 생각해보자"', scores: [2,0,1,2,0,0,1] },
      { text: '"자, 이제 저축 30%, 쓰기 70% 비율을 정해보자" — 시스템을 가르친다', scores: [0,2,0,0,3,0,0] },
      { text: '"뭘 샀는지 보여줘. 기분은 어때? 다음엔 다르게 해보고 싶어?" — 대화로 풀어간다', scores: [0,0,2,0,0,3,0] }
    ]
  },
  {
    dimension: 'discipline',
    theory: 'Baumrind — Induction (이유 설명) vs. Power Assertion (권력 행사)',
    scenario: '🤬 형제자매가 심하게 싸우다 물건을 집어던졌습니다.',
    question: '나의 첫 번째 행동은?',
    options: [
      { text: '던진 아이를 즉시 분리한다. "물건 던지는 건 절대 안 돼" — 무조건 먼저 분리', scores: [2,0,0,0,3,0,0] },
      { text: '"둘 다 얼마나 억울했으면... 먼저 얘기 들어볼게" — 감정을 먼저 듣는다', scores: [0,0,3,0,0,0,0] },
      { text: '"누가 먼저 시작했어?" 원인을 파악해서 공정하게 해결한다', scores: [0,0,0,2,0,1,2] },
      { text: '"우리 집 규칙 기억하지? 화가 나도 물건을 던지면 안 된다고 했잖아" — 규칙을 상기시킨다', scores: [0,3,0,1,1,0,0] }
    ]
  },
  {
    dimension: 'discipline',
    theory: 'Siegel(2012) "Name it to Tame it" + Baumrind Firm Limits',
    scenario: '😤 아이가 욱해서 내 물건을 일부러 망가뜨렸습니다.',
    question: '나는 어떻게 대응하나요?',
    options: [
      { text: '화를 진정시킨 후, 망가진 물건을 함께 고치거나 용돈으로 변상하도록 한다', scores: [0,3,0,1,1,0,0] },
      { text: '"지금 엄청 화가 났구나" 감정을 인정하되, "그래도 이건 안 돼" 라고 분명히 한다', scores: [1,2,1,0,0,2,0] },
      { text: '화가 치밀지만 참고 일단 자리를 피한다. 나중에 차분할 때 대화한다', scores: [2,0,0,2,0,0,0] },
      { text: '"이 행동은 반드시 결과가 따라야 해" — 즉각적이고 단호한 결과를 적용한다', scores: [0,2,0,0,2,0,1] }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // [자율성 지원] Autonomy Support — 5문항 (SDT: Deci & Ryan)
  // ─────────────────────────────────────────────────────────
  {
    dimension: 'autonomy',
    theory: 'Deci & Ryan(2000) SDT — Autonomy Support vs. Control',
    scenario: '👗 유치원 가야 하는데 아이가 옷을 뒤집어 입고 나왔습니다. 10분 남았습니다.',
    question: '나는?',
    options: [
      { text: '이미 스스로 입었으니 그냥 간다. 창피하지 않다. 스스로 한 게 더 중요하다', scores: [3,0,0,3,0,0,1] },
      { text: '"잠깐, 도와줄게!" 바로 뒤집어 입혀준다. 지각이 더 문제다', scores: [0,2,0,0,0,0,0] },
      { text: '"옷이 뒤집어져 있네? 거울 한번 볼래?" — 스스로 알아채게 유도한다', scores: [0,0,2,0,2,3,0] },
      { text: '"이 옷이랑 저 옷 중에 뭐가 더 좋아?" — 다른 옷으로 관심을 돌린다', scores: [0,0,0,0,3,1,0] }
    ]
  },
  {
    dimension: 'autonomy',
    theory: 'SDT — Intrinsic Motivation · Competence Support',
    scenario: '🏆 "나 혼자 할 거야!"를 외치며 어려운 과제에 혼자 도전합니다. 시간도 없습니다.',
    question: '나의 반응은?',
    options: [
      { text: '조마조마하지만 끝까지 안 끼어든다. 스스로 해결하는 경험이 더 중요하다', scores: [3,0,0,0,0,0,1] },
      { text: '답답해서 결국 "이 부분만 같이 해!" 끼어든다', scores: [0,1,0,3,0,0,0] },
      { text: '"멋진데! 힘들면 말해줘, 엄마/아빠 여기 있어" — 응원하며 안전망을 깔아둔다', scores: [0,0,3,0,0,2,0] },
      { text: '"여기서 막히면 이렇게 해봐" — 힌트를 미리 던지고 관찰한다', scores: [0,0,0,0,3,0,0] }
    ]
  },
  {
    dimension: 'autonomy',
    theory: 'SDT — Psychological Need Satisfaction / Autonomy vs. Relatedness',
    scenario: '🎮 아이가 "나 학원 그만 다니고 싶어"라고 선언했습니다.',
    question: '나의 반응은?',
    options: [
      { text: '왜 그런지 먼저 충분히 듣는다. 이유가 납득되면 그만둘 수도 있다', scores: [0,0,1,2,1,0,1] },
      { text: '"1달만 더 해봐. 그때도 싫으면 그때 얘기하자" — 시간을 준다', scores: [0,2,2,0,0,1,1] },
      { text: '"네가 하기 싫으면 안 해도 돼. 대신 다른 걸 찾아야 해" — 선택권을 준다', scores: [3,0,0,0,0,0,2] },
      { text: '"이건 지금 결정할 문제가 아니야. 꼭 해야 해" — 단호하게 거절한다', scores: [0,3,0,0,0,0,0] }
    ]
  },
  {
    dimension: 'autonomy',
    theory: 'SDT — Volitional vs. Controlled Motivation',
    scenario: '🍽 밥상에서 "이거 싫어, 안 먹을 거야"를 반복합니다.',
    question: '나는 어떻게 하나요?',
    options: [
      { text: '"한 번만 맛봐. 맛을 알아야 좋아하는지 싫어하는지 알 수 있잖아" — 작은 시도를 유도한다', scores: [0,0,2,0,0,3,1] },
      { text: '억지로 먹이는 건 나쁘다. 안 먹으면 안 먹는 거다. 배고프면 먹는다', scores: [3,0,0,0,0,2,0] },
      { text: '"이건 꼭 먹어야 해" — 규칙이라는 걸 분명히 하고 식탁 예절을 지킨다', scores: [0,2,0,0,2,0,0] },
      { text: '"어떻게 요리하면 맛있을 것 같아? 다음에 같이 만들어볼까?" — 관심을 끌어들인다', scores: [0,0,1,0,0,1,3] }
    ]
  },
  {
    dimension: 'autonomy',
    theory: 'SDT Autonomy Support — Minimal Necessary Control',
    scenario: '🔧 아이가 실수로 뭔가 부숴버렸습니다. 스스로 당황해있습니다.',
    question: '나는?',
    options: [
      { text: '"괜찮아, 실수한 거잖아. 같이 고쳐보자" — 문제해결 파트너가 된다', scores: [2,0,1,2,0,2,0] },
      { text: '당연히 혼낸다. 조심하지 않으면 다음에도 반복된다', scores: [0,2,0,0,1,0,1] },
      { text: '"네가 혼자 고쳐볼 수 있을 것 같아?" — 스스로 해결 기회를 준다', scores: [3,0,0,1,0,0,2] },
      { text: '"어떻게 하다 이렇게 됐어?" 경위를 차분하게 파악하고 대처법을 알려준다', scores: [0,0,2,3,0,0,0] }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // [학습과 성장] Cognitive Growth — 5문항 (비고츠키 ZPD + 드웩 성장 마인드셋)
  // ─────────────────────────────────────────────────────────
  {
    dimension: 'growth',
    theory: 'Vygotsky ZPD / Scaffolding — Dweck Growth Mindset',
    scenario: '🦕 "하늘은 왜 파래? 구름은 왜 하얘?" 연달아 질문 폭격이 시작됩니다.',
    question: '나는?',
    options: [
      { text: '"왜 그런 것 같아? 엄마/아빠도 궁금한데 같이 생각해보자!" — 함께 탐구한다', scores: [3,0,0,0,0,0,0] },
      { text: '"네이버 같이 찾아볼까?" — 실제 정보를 즉시 알려준다', scores: [0,0,0,0,3,0,1] },
      { text: '"직접 실험해볼까? 프리즘 사다가 빛 나눠보자!" — 체험으로 연결한다', scores: [0,0,0,0,0,3,0] },
      { text: '"이거랑 관련된 책 있는데! 같이 읽어볼까?" — 책으로 연결한다', scores: [0,0,0,0,0,0,3] }
    ]
  },
  {
    dimension: 'growth',
    theory: 'Dweck(2006) Growth Mindset — Process Praise',
    scenario: '😞 시험 결과가 기대보다 훨씬 낮게 나왔습니다. 아이도 풀이 죽어있습니다.',
    question: '이 순간 가장 먼저 하는 말은?',
    options: [
      { text: '"수고했어. 많이 속상하지?" — 결과보다 감정을 먼저 안아준다', scores: [3,0,0,0,2,1,0] },
      { text: '"어디서 틀렸는지 같이 보자. 다음엔 어떻게 준비할까?" — 분석 후 계획을 세운다', scores: [0,3,0,0,0,0,0] },
      { text: '"괜찮아. 이번 경험이 다음에 도움될 거야" — 긍정적으로 재해석한다', scores: [0,0,3,0,0,0,0] },
      { text: '"어떤 느낌이야? 어떻게 하고 싶어?" — 아이 스스로 생각하게 한다', scores: [0,0,0,2,0,0,3] }
    ]
  },
  {
    dimension: 'growth',
    theory: 'Vygotsky — Scaffolding / Zone of Proximal Development',
    scenario: '📚 숙제를 앞에 두고 "하기 싫어, 모르겠어"를 30분째 반복합니다.',
    question: '나의 접근법은?',
    options: [
      { text: '"지금 하기 싫어? 그럼 놀고 나서 할 시간 정해줄게" — 선택 내 구조를 준다', scores: [0,0,0,0,3,1,0] },
      { text: '"엄마/아빠도 같이 앉아있을게. 한 문제만 같이 해보자" — 함께 시작한다', scores: [0,0,2,0,0,3,0] },
      { text: '"이거 다 하면 게임 30분 해도 돼" — 외적 동기부여를 활용한다', scores: [0,1,0,0,0,0,3] },
      { text: '"모르는 부분만 체크해줘. 엄마/아빠가 힌트 줄게" — 최소한의 비계를 제공한다', scores: [0,0,0,3,0,0,1] }
    ]
  },
  {
    dimension: 'growth',
    theory: 'Dweck — Fixed vs. Growth Mindset Response to Failure',
    scenario: '🧩 레고를 혼자 만들다 실패해서 와장창 무너지자 "나 못해, 바보야"라고 합니다.',
    question: '나는?',
    options: [
      { text: '"바보가 아니야! 네가 최고야!" — 즉각적으로 자존감을 세워준다', scores: [3,0,0,0,2,0,0] },
      { text: '"잠깐, 어디서 무너졌어? 여기서부터 다시 해보자" — 문제를 같이 찾는다', scores: [0,0,0,2,0,3,0] },
      { text: '"처음엔 다 어려워. 몇 번 해보면 돼" — 과정을 격려한다', scores: [0,0,3,0,0,0,0] },
      { text: '"아이고, 힘들었겠다. 잠깐 쉬었다가 다시 해볼래?" — 감정을 먼저 읽어준다', scores: [2,0,1,0,0,2,0] }
    ]
  },
  {
    dimension: 'growth',
    theory: 'Vygotsky Social Learning + Dweck — Challenge vs. Avoidance',
    scenario: '🎨 아이가 "내 그림은 못생겼어, 못 그려"라며 그리기를 포기하려 합니다.',
    question: '나는 어떻게 반응하나요?',
    options: [
      { text: '"그림에는 못생긴 게 없어. 네 느낌이 담긴 게 제일 멋진 거야" — 시각을 바꿔준다', scores: [2,0,2,0,0,1,0] },
      { text: '"여기서 어떤 색을 더 추가하면 어떨까?" — 작은 다음 단계를 제안한다', scores: [0,0,0,2,0,3,0] },
      { text: '"완성하는 게 더 중요해. 조금만 더 해봐" — 끝까지 하도록 격려한다', scores: [0,1,2,0,1,0,0] },
      { text: '"처음엔 다 그래. 많이 그릴수록 실력이 느는 거야" — 성장 과정을 설명한다', scores: [0,0,3,0,0,0,1] }
    ]
  },

  // ─────────────────────────────────────────────────────────
  // [위기 대응] Crisis Resilience — 5문항 (셀리그만 PERMA + 드웩 Grit)
  // ─────────────────────────────────────────────────────────
  {
    dimension: 'resilience',
    theory: 'Seligman(2011) Learned Optimism / PERMA Model',
    scenario: '💥 오늘 나는 한계에 와있습니다. 그런데 아이도 동시에 터지기 시작합니다.',
    question: '이 상황에서 나는?',
    options: [
      { text: '"지금 엄마/아빠도 힘들어. 5분만 시간 줄게" — 솔직하게 말하고 잠깐 분리한다', scores: [0,0,0,0,0,2,1] },
      { text: '힘들어도 아이 앞에서는 최대한 참는다. 아이에게 내 한계를 보이는 건 안 좋다', scores: [3,0,0,0,0,0,1] },
      { text: '"우리 둘 다 지쳤네. 오늘은 같이 쉬자" — 함께 리셋한다', scores: [0,0,3,0,1,0,0] },
      { text: '솔직히 같이 터진다. 후회하지만 인간이라 어쩔 수 없다', scores: [0,0,0,0,0,3,0] }
    ]
  },
  {
    dimension: 'resilience',
    theory: 'Seligman — Active Coping / Siegel Regulation Before Reason',
    scenario: '😢 아이가 학교에서 따돌림을 당하고 있다는 걸 오늘 처음 알게 됐습니다.',
    question: '그날 밤, 나의 행동은?',
    options: [
      { text: '학교에 즉시 연락하고 상황을 파악한다. 감정보다 대응이 먼저다', scores: [2,0,0,1,0,0,0] },
      { text: '아이 방에 가서 그냥 안아준다. 지금은 말보다 온기가 먼저다', scores: [0,0,3,0,0,0,0] },
      { text: '"어떻게 하고 싶어? 같이 방법 찾아보자" — 함께 대응 전략을 세운다', scores: [0,0,0,3,0,1,0] },
      { text: '최근 아이의 변화를 떠올리며 신호를 놓친 게 없었나 자책한다', scores: [0,0,0,0,0,0,3] }
    ]
  },
  {
    dimension: 'resilience',
    theory: 'Gottman — Repair Attempt / Siegel Rupture-and-Repair',
    scenario: '😤 아이에게 욱해서 심하게 혼을 냈습니다. 아이는 울고 있고 나는 후회됩니다.',
    question: '나는 어떻게 수습하나요?',
    options: [
      { text: '바로 아이에게 가서 "미안해. 엄마/아빠가 잘못했어" 솔직하게 사과한다', scores: [0,0,0,0,0,3,0] },
      { text: '냉정하게 돌아보고, 다음엔 같은 실수를 안 할 방법을 생각한다', scores: [2,0,0,2,0,0,0] },
      { text: '"엄마/아빠도 완벽하지 않아. 우리 같이 배워가는 거야" 자연스럽게 넘어간다', scores: [0,0,2,0,2,0,0] },
      { text: '아이 표정을 계속 살핀다. 혹시 마음에 깊은 상처를 받은 건 아닌지 불안하다', scores: [0,0,0,0,0,0,3] }
    ]
  },
  {
    dimension: 'resilience',
    theory: 'Dweck(2006) Grit — Resilience through Process vs. Outcome Praise',
    scenario: '🏫 전학/이사를 앞두고 아이가 "가기 싫어, 새 학교 무서워"를 매일 반복합니다.',
    question: '나의 지원 방식은?',
    options: [
      { text: '새 학교 정보를 조사하고, 적응 계획을 단계별로 세워준다', scores: [2,0,0,2,0,0,0] },
      { text: '"불안한 거 당연해. 엄마/아빠도 처음엔 그랬어" — 감정을 먼저 공감해준다', scores: [0,0,3,0,0,0,0] },
      { text: '새로운 환경의 기대되는 점들을 신나게 얘기해주며 긍정적 기대를 심어준다', scores: [0,1,0,0,3,0,0] },
      { text: '아이의 작은 변화도 놓치지 않으려 매일 세심하게 관찰한다', scores: [0,0,0,0,0,0,3] }
    ]
  },
  {
    dimension: 'resilience',
    theory: 'Seligman PERMA — Positive Emotions / Accomplishment',
    scenario: '🏅 아이가 운동회에서 꼴찌를 했습니다. 속상해서 울고 있습니다.',
    question: '나는 어떻게 반응하나요?',
    options: [
      { text: '"많이 속상하지. 그래도 끝까지 열심히 달렸잖아" — 과정을 먼저 격려한다', scores: [2,0,2,0,0,1,0] },
      { text: '"다음엔 더 잘할 수 있어. 연습하면 돼" — 빠르게 앞을 보게 한다', scores: [0,1,0,0,3,0,0] },
      { text: '그냥 안아주며 충분히 울게 한다. 지금은 위로가 전부다', scores: [3,0,0,0,0,2,0] },
      { text: '"꼴찌도 참가한 게 대단한 거야" — 다른 시각을 제공한다', scores: [0,0,0,0,0,0,3] }
    ]
  }
];

// ============================================================
// 40문항(심층) = 25문항 + 추가 15문항
// 추가 15문항: 각 차원당 3문항씩 더 깊은 상황
// ============================================================
const QUESTIONS_40_EXTRA = [
  // 정서교감 추가 3문항
  {
    dimension: 'emotional',
    theory: 'Bowlby — Maternal Sensitivity / Ainsworth Strange Situation',
    scenario: '🏃 놀이터에서 아이가 넘어져 무릎을 다쳤습니다. 큰 상처는 아닌데 엉엉 웁니다.',
    question: '나는?',
    options: [
      { text: '"괜찮아, 아무것도 아니야. 튼튼하잖아" — 빠르게 안심시킨다', scores: [0,0,0,0,0,0,3] },
      { text: '"많이 아프지? 이리와, 엄마/아빠가 호~ 해줄게" — 충분히 위로해준다', scores: [3,0,0,0,2,1,0] },
      { text: '"많이 놀랬구나. 어디 봐볼까? 다음엔 조심하는 방법을 생각해보자"', scores: [1,0,1,2,0,2,0] },
      { text: '"일어나봐. 다시 뛰어다닐 수 있는지 봐야지" — 빠른 회복을 독려한다', scores: [0,1,0,0,3,0,0] }
    ]
  },
  {
    dimension: 'emotional',
    theory: 'Gottman — Emotion Coaching vs. Laissez-Faire Parenting',
    scenario: '😔 아이가 "나는 왜 이렇게 못하는 걸까, 내가 싫어"라고 말합니다.',
    question: '나의 반응은?',
    options: [
      { text: '"그런 말 하지 마! 너는 잘하는 게 얼마나 많은데" — 즉각적으로 반박한다', scores: [2,0,0,0,1,0,0] },
      { text: '"스스로가 싫다는 게 어떤 느낌인지 더 얘기해줄 수 있어?" — 깊이 들어간다', scores: [0,0,0,2,0,3,0] },
      { text: '"지금 많이 힘들구나. 그 마음 충분히 이해해" — 감정을 있는 그대로 수용한다', scores: [3,0,0,0,0,2,1] },
      { text: '"어떤 부분이 안 된다고 느껴? 같이 연습해볼 수 있을 것 같아?" — 구체적 개선을 찾는다', scores: [0,0,2,2,0,1,0] }
    ]
  },
  {
    dimension: 'emotional',
    theory: 'Winnicott — Holding Environment / Bowlby Secure Base',
    scenario: '🌙 아이가 악몽을 꾸고 새벽 2시에 깨서 울며 부모를 찾습니다.',
    question: '나는?',
    options: [
      { text: '아이 방으로 가서 옆에 누워 잠들 때까지 함께 있는다', scores: [3,0,0,0,2,1,0] },
      { text: '"악몽은 진짜가 아니야. 이제 괜찮아" 안심시키고 다시 재운다', scores: [0,1,0,0,0,0,3] },
      { text: '"무슨 꿈을 꿨어? 이야기해줄 수 있어?" 꿈 내용을 함께 탐색한다', scores: [0,0,0,2,0,2,1] },
      { text: '우리 방으로 데려와 함께 잔다. 내일 방법을 찾으면 된다', scores: [2,0,1,0,1,0,0] }
    ]
  },

  // 규칙과 훈육 추가 3문항
  {
    dimension: 'discipline',
    theory: 'Baumrind — Consistency & Predictability as Core of Authoritative Parenting',
    scenario: '⏰ 약속한 취침 시간에 아이가 자지 않고 계속 이런저런 핑계를 댑니다.',
    question: '나의 대응은?',
    options: [
      { text: '"오늘만 특별히" — 분위기상 일단 허용한다. 내일부터 다시 지키면 된다', scores: [0,0,0,2,0,3,0] },
      { text: '말 없이 불을 끄고 나온다. 규칙은 반복된 행동으로 가르친다', scores: [1,3,0,0,2,0,0] },
      { text: '"자야 할 이유를 이해해야지" 취침의 중요성을 설명한다', scores: [0,1,0,3,0,0,0] },
      { text: '"속상하구나. 그래도 이건 지켜야 해" — 감정은 수용하되 규칙은 유지한다', scores: [1,2,1,0,1,0,0] }
    ]
  },
  {
    dimension: 'discipline',
    theory: 'Baumrind — Inductive Discipline (이유 설명을 통한 내면화)',
    scenario: '🖍 아이가 벽에 낙서를 해놓았습니다.',
    question: '나는?',
    options: [
      { text: '"왜 이러면 안 되는지 알아? 우리 집은 우리 모두가 함께 쓰는 공간이야" 이유를 설명한다', scores: [0,2,0,2,0,0,1] },
      { text: '아이와 함께 지운다. 다음엔 종이에 하자고 한다. 낙서 공간을 따로 만들어준다', scores: [0,0,2,1,0,2,0] },
      { text: '"이건 안 돼!" 단호하게 혼내고 지우게 한다', scores: [0,2,0,0,2,0,0] },
      { text: '창의성 표현이니 큰 전지를 사다 벽에 붙여준다. 그 안에서 자유롭게 하게 한다', scores: [3,0,0,0,0,1,0] }
    ]
  },
  {
    dimension: 'discipline',
    theory: 'Baumrind — Monitoring & Supervision without Intrusiveness',
    scenario: '📱 아이가 약속한 스마트폰 사용 시간을 몰래 초과했다는 걸 알게 됐습니다.',
    question: '나는?',
    options: [
      { text: '알면서도 모른 척한다. 스스로 깨달을 때까지 기다린다', scores: [3,0,0,0,0,1,0] },
      { text: '"약속을 어겼으니 일주일간 폰 금지" — 결과를 즉각 적용한다', scores: [0,3,0,0,1,0,0] },
      { text: '"왜 더 봤는지 얘기해줄 수 있어? 약속을 어기면 어떻게 되는지 같이 생각해보자"', scores: [0,1,1,2,0,0,1] },
      { text: '"우리 약속을 기억하지? 다음엔 지키자. 이번 한 번은 넘어가지만 다음엔 안 돼"', scores: [0,1,0,0,0,2,2] }
    ]
  },

  // 자율성 추가 3문항
  {
    dimension: 'autonomy',
    theory: 'SDT — Supporting Autonomy vs. Excessive Scaffolding',
    scenario: '🎒 아이가 다음 날 학교 준비물을 혼자 챙기다 중요한 걸 빠뜨렸습니다.',
    question: '나는?',
    options: [
      { text: '빠뜨린 걸 말해주고 같이 다시 챙긴다. 다음엔 체크리스트를 만들어준다', scores: [0,1,1,2,0,1,0] },
      { text: '다음날 학교에서 불편을 겪게 내버려둔다. 자연스러운 결과가 최고의 선생이다', scores: [3,0,0,1,0,0,2] },
      { text: '"어, 이거 빠진 것 같은데? 체크해볼래?" — 스스로 발견하게 유도한다', scores: [1,0,2,0,2,3,0] },
      { text: '미리 확인하고 몰래 챙겨준다. 내일 학교에서 당황하는 것보다 낫다', scores: [0,0,0,3,0,0,0] }
    ]
  },
  {
    dimension: 'autonomy',
    theory: 'SDT — Competence Support / Optimal Challenge',
    scenario: '🖌 아이가 만든 작품이 마음에 안 든다며 버리려 합니다.',
    question: '나의 반응은?',
    options: [
      { text: '"어떤 부분이 마음에 안 들어? 고쳐볼 수 있을 것 같아?" — 다음 단계를 제안한다', scores: [0,0,1,2,0,3,0] },
      { text: '"괜찮아, 버리지 마. 엄마/아빠는 이게 너무 좋아" — 즉각 긍정해준다', scores: [3,0,0,0,1,0,0] },
      { text: '아이의 결정을 존중한다. 버리고 싶으면 버릴 수 있다. 그것도 선택이다', scores: [2,0,0,0,0,0,2] },
      { text: '"완성하는 게 중요해. 좋든 싫든 끝까지 마무리하자" — 완성을 격려한다', scores: [0,1,2,0,1,0,0] }
    ]
  },
  {
    dimension: 'autonomy',
    theory: 'SDT Autonomy Support — Providing Rationale',
    scenario: '🛁 목욕이 하기 싫다며 도망 다닙니다. 매일 반복되는 상황입니다.',
    question: '나는?',
    options: [
      { text: '이유를 설명한다. "피부 건강을 위해서야. 네 몸이니까 잘 관리해야 해"', scores: [0,0,0,3,0,0,1] },
      { text: '"목욕하면 뭐 하고 싶어?" 보상 대신 선택을 준다. "물 온도 네가 맞출래?"', scores: [0,0,2,0,0,3,0] },
      { text: '안 하면 안 된다. 오늘 목욕은 반드시 해야 한다. 규칙이다', scores: [0,2,0,0,1,0,0] },
      { text: '목욕 자체를 놀이로 만든다. 장난감 가져와서 같이 들어간다', scores: [0,0,1,0,0,1,3] }
    ]
  },

  // 학습과 성장 추가 3문항
  {
    dimension: 'growth',
    theory: 'Dweck — Praising Effort vs. Praising Ability',
    scenario: '🏆 아이가 100점을 받아 왔습니다.',
    question: '나는 어떻게 칭찬하나요?',
    options: [
      { text: '"역시 우리 애는 머리가 좋아! 천재!" — 능력을 칭찬한다', scores: [2,0,0,0,1,0,0] },
      { text: '"와, 이번에 얼마나 열심히 공부했어? 그게 다 거기서 나온 거야" — 노력을 칭찬한다', scores: [0,0,3,0,0,1,0] },
      { text: '"잘했어. 다음엔 이 과목도 더 잘해보자" — 다음 목표를 제시한다', scores: [0,2,0,0,2,0,0] },
      { text: '"어떤 기분이야? 어떻게 공부했어?" — 아이의 경험을 먼저 묻는다', scores: [0,0,0,2,0,0,3] }
    ]
  },
  {
    dimension: 'growth',
    theory: 'Vygotsky — Social Mediation of Learning',
    scenario: '📖 책 읽는 걸 거부하고 유튜브만 보려고 합니다.',
    question: '나는?',
    options: [
      { text: '억지로 읽히지 않는다. 책에 관심을 가질 환경을 만드는 게 먼저다', scores: [3,0,0,0,0,2,0] },
      { text: '"하루 10분만. 같이 읽자" — 부모가 먼저 모델링한다', scores: [0,0,2,0,0,3,0] },
      { text: '"유튜브 시간 줄이고 책 읽으면 주말에 원하는 거 해줄게"', scores: [0,1,0,0,0,0,3] },
      { text: '"네가 좋아하는 주제 책을 골라봐. 공룡, 마법, 뭐든" — 관심사 책부터 시작한다', scores: [2,0,1,2,0,1,0] }
    ]
  },
  {
    dimension: 'growth',
    theory: 'Dweck — Normalizing Difficulty / Effort Attribution',
    scenario: '🎹 피아노 연습이 어렵다며 포기하겠다고 선언합니다.',
    question: '나는?',
    options: [
      { text: '"그래, 하기 싫으면 안 해도 돼. 원하는 걸 하자" — 선택을 존중한다', scores: [3,0,0,0,0,0,1] },
      { text: '"어려운 건 다 어릴 때는 힘들어. 3개월만 더 해봐" — 지속을 권유한다', scores: [0,1,2,0,1,0,0] },
      { text: '"어떤 부분이 특히 어려워? 그 부분만 연습하자" — 구체적 목표를 잡아준다', scores: [0,0,0,2,0,2,1] },
      { text: '"왜 시작하게 됐는지 기억해? 그때 마음을 다시 생각해봐" — 원점으로 돌아간다', scores: [0,0,1,1,0,0,3] }
    ]
  },

  // 위기 대응 추가 3문항
  {
    dimension: 'resilience',
    theory: 'Seligman — Permanence / Pervasiveness / Personalization (3P Explanatory Style)',
    scenario: '😢 "친구들이 나랑 안 논대. 나는 왜 이렇게 이상한 걸까"라고 합니다.',
    question: '나는?',
    options: [
      { text: '"이상한 게 아니야! 너는 정말 좋은 아이야" — 즉각 반박한다', scores: [2,0,0,0,1,0,0] },
      { text: '"그런 말을 들어서 많이 속상했겠다. 어떤 상황이었어?" — 경위를 먼저 듣는다', scores: [1,0,2,2,0,2,0] },
      { text: '"오늘 그런 일이 있었구나. 그게 항상 그런 건 아니야. 내일은 다를 수 있어"', scores: [0,0,3,0,0,0,1] },
      { text: '"친구들이 왜 그랬는지 이해하고 다가가는 방법을 같이 생각해보자"', scores: [0,0,0,3,0,1,0] }
    ]
  },
  {
    dimension: 'resilience',
    theory: 'Seligman PERMA — Meaning & Accomplishment in Adversity',
    scenario: '🤒 아이가 시험 전날 갑자기 아파서 시험을 못 보게 됐습니다.',
    question: '나의 반응은?',
    options: [
      { text: '"몸이 먼저야. 건강이 회복되면 다 해결돼" — 우선순위를 명확히 한다', scores: [2,0,2,0,1,0,0] },
      { text: '아이가 충분히 쉴 수 있도록 환경을 만들고, 이후 보충 계획을 함께 세운다', scores: [1,1,0,2,0,2,0] },
      { text: '"이런 일도 생길 수 있어. 어떻게 하면 다음에 잘 준비할 수 있을지 생각해보자"', scores: [0,0,3,0,0,0,1] },
      { text: '"많이 힘들겠다. 지금은 그냥 쉬어. 나중에 생각하자" — 당장의 위로에 집중한다', scores: [3,0,0,0,0,1,0] }
    ]
  },
  {
    dimension: 'resilience',
    theory: 'Siegel — Co-regulation → Self-regulation / Parental Emotional Availability',
    scenario: '🧘 아이가 극도로 흥분해서 아무것도 말을 듣지 않는 상태입니다.',
    question: '나는?',
    options: [
      { text: '나도 목소리를 높여 통제하려 한다', scores: [0,0,0,0,0,3,0] },
      { text: '조용한 공간으로 데려가 내 숨부터 가다듬는다. 내가 먼저 차분해야 한다', scores: [0,2,0,0,0,1,0] },
      { text: '"지금 많이 힘들구나" 옆에 앉아 낮은 목소리로 천천히 말한다. 기다린다', scores: [2,0,2,0,0,2,0] },
      { text: '안아준다. 말이 필요 없다. 몸의 온기로 먼저 진정시킨다', scores: [3,0,0,0,1,1,0] }
    ]
  }
];

// data.js에 추가
let dataJs = fs.readFileSync('data.js', 'utf8');

// 기존 QUESTIONS 배열 끝 (];\n) 다음에 삽입
const questionsBlock = `

// ============================================================
// QUESTIONS_25: 학술 기반 표준 진단 (5차원 × 5문항 = 25문항)
// 이론 근거: Baumrind, Bowlby, Gottman, Deci & Ryan, Dweck, Vygotsky, Seligman
// ============================================================
const QUESTIONS_25 = ${JSON.stringify(QUESTIONS_25_DATA, null, 2)};

// ============================================================
// QUESTIONS_40: 심층 진단 (25문항 + 추가 15문항 = 40문항)
// ============================================================
const QUESTIONS_40 = [...QUESTIONS_25, ...${JSON.stringify(QUESTIONS_40_EXTRA, null, 2)}];

`;

// SIMULATIONS 선언 직전에 삽입
dataJs = dataJs.replace(
  '// 상황별 시뮬레이션 데이터 (가장 낮은 점수의 차원 보완용)',
  questionsBlock + '// 상황별 시뮬레이션 데이터 (가장 낮은 점수의 차원 보완용)'
);

fs.writeFileSync('data.js', dataJs);
console.log('✅ data.js에 QUESTIONS_25 + QUESTIONS_40 추가 완료');
console.log(`  - QUESTIONS_25: ${QUESTIONS_25_DATA.length}문항`);
console.log(`  - QUESTIONS_40: ${QUESTIONS_25_DATA.length + QUESTIONS_40_EXTRA.length}문항`);
