// 심리학 이론(스턴버그 사랑의 삼각형, 가트먼 관계 이론, 성인 애착 이론)에 기반한 40문항 척도 검사
// 측정 지표 (5가지): 
// 1. intimacy (친밀감 - 스턴버그)
// 2. passion (열정 - 스턴버그)
// 3. commitment (헌신 - 스턴버그)
// 4. communication (존중과 소통 - 가트먼의 4독소 방어)
// 5. attachment (애착 안정성 - 성인 애착 이론 불안/회피 역채점)

const comprehensiveTest = [
  // --- 친밀감 (Intimacy) ---
  { id: 1, trait: 'intimacy', reverse: false, q: "나는 배우자에게 나의 가장 부끄럽고 비밀스러운 생각까지 편안하게 털어놓을 수 있다." },
  { id: 2, trait: 'intimacy', reverse: false, q: "우리는 서로의 기분이나 감정 상태를 말하지 않아도 눈빛만으로 잘 알아챈다." },
  { id: 3, trait: 'intimacy', reverse: true,  q: "가끔은 배우자보다 친한 친구나 지인에게 내 속마음을 이야기하는 것이 더 편하다." },
  { id: 4, trait: 'intimacy', reverse: false, q: "나의 배우자는 나의 단점이나 실수에도 불구하고 나를 온전히 수용해 준다." },
  { id: 5, trait: 'intimacy', reverse: false, q: "우리는 일상적인 대화 외에도 인생의 가치관이나 꿈에 대해 깊이 있는 대화를 자주 나눈다." },
  { id: 6, trait: 'intimacy', reverse: true,  q: "배우자와 함께 있을 때에도 종종 채워지지 않는 정서적인 외로움을 느낀다." },
  { id: 7, trait: 'intimacy', reverse: false, q: "힘들거나 지칠 때 세상에서 가장 먼저 위로받고 싶은 사람은 바로 나의 배우자다." },
  { id: 8, trait: 'intimacy', reverse: false, q: "우리 부부는 정서적으로 매우 단단하게 연결되어 있어 그 누구도 우리 사이를 갈라놓을 수 없다." },

  // --- 열정 (Passion) ---
  { id: 9, trait: 'passion', reverse: false, q: "배우자와 스킨십(키스, 포옹 등)을 할 때 여전히 짜릿한 설렘과 흥분을 느낀다." },
  { id: 10, trait: 'passion', reverse: false, q: "바쁜 일상 속에서도 틈만 나면 배우자와 육체적으로 접촉하고 싶다." },
  { id: 11, trait: 'passion', reverse: true,  q: "성관계는 의무적이거나 귀찮은 일과처럼 느껴질 때가 많다." },
  { id: 12, trait: 'passion', reverse: false, q: "배우자가 깔끔하게 꾸미고 나갈 때면 새삼스럽게 성적 매력을 크게 느낀다." },
  { id: 13, trait: 'passion', reverse: false, q: "우리는 침대 위에서 서로의 욕구를 부끄러움 없이 솔직하고 적극적으로 표현한다." },
  { id: 14, trait: 'passion', reverse: true,  q: "연애 초반과 비교했을 때, 배우자를 향한 가슴 뛰는 감정은 거의 사라졌다." },
  { id: 15, trait: 'passion', reverse: false, q: "배우자의 냄새, 목소리, 작은 몸짓 하나하나가 나를 강렬하게 끌어당긴다." },
  { id: 16, trait: 'passion', reverse: false, q: "새로운 성적 판타지나 색다른 데이트를 기획하며 부부 관계에 지속적으로 활력을 불어넣는다." },

  // --- 헌신 (Commitment) ---
  { id: 17, trait: 'commitment', reverse: false, q: "어떤 큰 시련이 닥치더라도 우리는 결코 이혼하거나 헤어지지 않을 것이라 확신한다." },
  { id: 18, trait: 'commitment', reverse: false, q: "나는 내 개인의 이익이나 편안함보다 '우리 부부의 행복'을 최우선으로 생각한다." },
  { id: 19, trait: 'commitment', reverse: true,  q: "배우자가 큰 병에 걸리거나 파산한다면 내가 끝까지 곁을 지킬 수 있을지 두렵다." },
  { id: 20, trait: 'commitment', reverse: false, q: "우리는 노후 계획, 자녀 양육 등 10년, 20년 뒤의 미래를 끊임없이 함께 논의한다." },
  { id: 21, trait: 'commitment', reverse: false, q: "배우자의 가족(시댁/처가) 문제가 발생해도 나는 방관하지 않고 적극적으로 개입하여 돕는다." },
  { id: 22, trait: 'commitment', reverse: true,  q: "가끔은 이 결혼을 하지 않았더라면 내 삶이 더 자유롭고 성공적이었을 거라 후회한다." },
  { id: 23, trait: 'commitment', reverse: false, q: "우리는 재정(돈)을 완벽하게 공유하거나, 투명하게 논의하며 가계라는 공동의 배를 조종한다." },
  { id: 24, trait: 'commitment', reverse: false, q: "배우자가 나를 필요로 할 때, 나의 중요한 일정을 취소해서라도 기꺼이 달려갈 수 있다." },

  // --- 소통 및 존중 (Communication - Gottman) ---
  { id: 25, trait: 'communication', reverse: true,  q: "배우자와 다툴 때 나는 종종 '당신은 항상 그런 식이야'라며 상대의 성격이나 인신을 공격한다. (비난)" },
  { id: 26, trait: 'communication', reverse: true,  q: "배우자가 불만을 제기하면 내 잘못을 인정하기보다 변명하거나 오히려 상대를 역공격한다. (방어)" },
  { id: 27, trait: 'communication', reverse: true,  q: "다툼 중 배우자의 말이나 행동이 우스꽝스럽거나 한심하게 느껴져 비웃은 적이 있다. (경멸)" },
  { id: 28, trait: 'communication', reverse: true,  q: "감정이 격해지면 나는 입을 닫아버리고 방에 들어가 버리거나 대화를 전면 거부한다. (담쌓기)" },
  { id: 29, trait: 'communication', reverse: false, q: "배우자가 나에게 화를 낼 때에도 그 이면에 숨겨진 슬픔이나 서운함을 먼저 보려고 노력한다." },
  { id: 30, trait: 'communication', reverse: false, q: "우리는 논쟁이 아무리 치열해져도 절대로 선을 넘는 폭언이나 욕설을 하지 않는 규칙이 있다." },
  { id: 31, trait: 'communication', reverse: false, q: "싸우고 난 뒤, 자존심을 세우지 않고 상대의 기분을 풀어주기 위한 먼저 다가가는 화해의 제스처를 취한다." },
  { id: 32, trait: 'communication', reverse: false, q: "배우자가 일상적인 이야기나 시시콜콜한 농담을 던질 때, 하던 일을 멈추고 온전히 반응해 준다. (Turning Toward)" },

  // --- 애착 안정성 (Attachment Stability) ---
  { id: 33, trait: 'attachment', reverse: true,  q: "배우자가 연락이 조금만 안 되어도 날 사랑하지 않거나 바람을 피우는 것은 아닐까 심하게 불안해진다. (불안형)" },
  { id: 34, trait: 'attachment', reverse: true,  q: "상대방이 나에게 지나치게 의지하거나 심리적으로 다가오면 답답함을 느끼고 거리를 두고 싶어진다. (회피형)" },
  { id: 35, trait: 'attachment', reverse: false, q: "배우자가 잠시 혼자만의 시간을 가지겠다고 해도 나는 전혀 서운하거나 버림받는 기분이 들지 않는다." },
  { id: 36, trait: 'attachment', reverse: true,  q: "나는 배우자가 나를 떠날지도 모른다는 막연한 두려움 때문에 늘 상대방의 눈치를 본다." },
  { id: 37, trait: 'attachment', reverse: true,  q: "나는 내 힘든 감정을 배우자에게 위로받기보다는 혼자서 삭히고 해결하는 것이 훨씬 편하다." },
  { id: 38, trait: 'attachment', reverse: false, q: "우리는 각자의 독립적인 취미와 인간관계를 유지하면서도, 부부로서의 강한 소속감을 잃지 않는다." },
  { id: 39, trait: 'attachment', reverse: false, q: "배우자에게 나의 약점이나 실패를 고백할 때, 나를 무시할 것이라는 두려움이 전혀 없다." },
  { id: 40, trait: 'attachment', reverse: true,  q: "배우자의 칭찬이나 사랑 표현을 들으면 순수하게 기쁘기보다 '진심일까?' 하고 의심하는 경향이 있다." }
];

// Likert Scale Options (1 to 5)
const likertOptions = [
  { text: "전혀 아니다", value: 1 },
  { text: "그렇지 않다", value: 2 },
  { text: "보통이다", value: 3 },
  { text: "그렇다", value: 4 },
  { text: "매우 그렇다", value: 5 }
];
