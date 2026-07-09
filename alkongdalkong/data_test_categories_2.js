// Extension of categoryTests object
categoryTests.date = [
  // 1-10: Date Planning & Preferences
  { q: "데이트를 준비할 때 당신의 스타일은?", opts: [
    { text: "맛집부터 동선까지 완벽하게 분 단위로 계획한다.", scores: { date: 4, care: 2 } },
    { text: "그날의 기분과 날씨에 따라 즉흥적으로 정한다.", scores: { romance: 4, date: 2 } },
    { text: "배우자가 가고 싶어 하는 곳에 무조건 따른다.", scores: { care: 3, communication: 2 } },
    { text: "준비가 피곤해서 주로 집 근처 단골집을 선호한다.", scores: { condition: 4, married_life: 2 } }
  ]},
  { q: "가장 로맨틱하다고 생각하는 데이트 장소는?", opts: [
    { text: "아무도 없는 한적한 밤바다 산책", scores: { romance: 4, intimacy: 3 } },
    { text: "분위기 좋은 재즈 바나 칵테일 바", scores: { date: 4, romance: 2 } },
    { text: "화려한 야경이 내려다보이는 고급 레스토랑", scores: { date: 3, care: 3 } },
    { text: "둘만의 프라이빗한 풀빌라 숙소", scores: { intimacy: 4, condition: 3 } }
  ]},
  { q: "주말 1박 2일 여행을 간다면 가장 원하는 테마는?", opts: [
    { text: "하루 종일 침대와 스파만 오가는 완벽한 호캉스", scores: { condition: 4, intimacy: 3 } },
    { text: "유명한 맛집과 핫플을 모두 도는 알찬 먹방 투어", scores: { date: 4, communication: 2 } },
    { text: "자연 속에서 불멍을 즐기는 감성 캠핑", scores: { romance: 4, mindset: 2 } },
    { text: "액티비티(서핑, 스키 등)를 즐기는 스포츠 여행", scores: { date: 3, condition: 1 } }
  ]},
  { q: "데이트 비용 결제에 관한 당신의 생각은?", opts: [
    { text: "부부 공용 카드로 깔끔하게 결제한다.", scores: { married_life: 4, mindset: 3 } },
    { text: "그날 기분 좋은 사람이 시원하게 쏜다.", scores: { romance: 3, date: 2 } },
    { text: "가성비를 따져 최대한 할인받고 알뜰하게 쓴다.", scores: { married_life: 4, care: 2 } },
    { text: "분위기를 위해 돈을 아끼지 않고 최고급으로 쓴다.", scores: { romance: 4, date: 3 } }
  ]},
  { q: "기념일(결혼기념일 등)에 가장 받고 싶은 이벤트는?", opts: [
    { text: "서프라이즈 파티와 감동적인 손편지", scores: { romance: 4, communication: 3 } },
    { text: "명품 가방, 시계 등 내가 평소 원했던 고가의 선물", scores: { care: 3, married_life: 3 } },
    { text: "해외 휴양지로 떠나는 둘만의 럭셔리 여행", scores: { date: 4, romance: 3 } },
    { text: "꽃다발과 함께하는 고급 레스토랑에서의 저녁 식사", scores: { date: 3, romance: 2 } }
  ]},
  { q: "영화관 데이트 시 당신의 취향은?", opts: [
    { text: "달달하고 설레는 로맨틱 코미디", scores: { romance: 4, intimacy: 2 } },
    { text: "화려하고 스트레스가 풀리는 액션/블록버스터", scores: { condition: 3, date: 2 } },
    { text: "눈물이 쏙 빠지는 감동적인 슬픈 드라마", scores: { communication: 3, mindset: 2 } },
    { text: "찰싹 달라붙어 핑계 삼아 스킨십할 수 있는 공포 영화", scores: { intimacy: 4, romance: 3 } }
  ]},
  { q: "갑자기 하늘에서 비가 쏟아진다면?", opts: [
    { text: "분위기 좋다며 빗소리를 들을 수 있는 파전집이나 카페로 간다.", scores: { romance: 4, date: 3 } },
    { text: "짜증을 내며 데이트를 취소하고 급히 집으로 돌아간다.", scores: { condition: 2, mindset: 1 } },
    { text: "옷이 젖지 않게 배우자에게 우산을 씌워주며 배려한다.", scores: { care: 4, romance: 2 } },
    { text: "비 맞는 것도 추억이라며 손을 잡고 빗속을 뛰어간다.", scores: { romance: 4, intimacy: 2 } }
  ]},
  { q: "데이트 중 배우자가 피곤해 보인다면?", opts: [
    { text: "예약한 곳이 아까워도 일정을 취소하고 당장 집으로 간다.", scores: { care: 4, condition: 3 } },
    { text: "근처 마사지샵이나 조용한 카페로 일정을 즉석에서 변경한다.", scores: { date: 4, care: 3 } },
    { text: "내가 운전을 대신하거나 짐을 들어주며 조금만 버티자고 격려한다.", scores: { married_life: 3, communication: 2 } },
    { text: "눈치채지 못하고 내 계획대로 계속 끌고 다닌다.", scores: { mindset: 1, date: 1 } }
  ]},
  { q: "연애 시절 자주 가던 장소에 다시 갔을 때 당신의 반응은?", opts: [
    { text: "'우리 그때 이랬지~' 하며 추억에 흠뻑 젖어 감동한다.", scores: { romance: 4, communication: 3 } },
    { text: "그때와 지금 바뀐 풍경이나 가격을 비교하며 현실적인 대화를 한다.", scores: { married_life: 4, mindset: 2 } },
    { text: "그 시절의 열정을 떠올리며 갑자기 딥키스를 시도한다.", scores: { intimacy: 4, romance: 3 } },
    { text: "새로운 핫플이 많은데 왜 굳이 여길 또 오나 속으로 불평한다.", scores: { date: 2, mindset: 1 } }
  ]},
  { q: "데이트 복장에 대한 당신의 철학은?", opts: [
    { text: "불편해도 무조건 예쁘고 멋진, 풀세팅 드레스업", scores: { romance: 4, date: 3 } },
    { text: "트렌디함을 잃지 않는 꾸안꾸(꾸민듯 안꾸민듯) 캐주얼", scores: { date: 3, mindset: 2 } },
    { text: "커플티나 커플 운동화 등 통일감 있는 시밀러룩", scores: { romance: 3, communication: 2 } },
    { text: "무조건 편한 트레이닝복이나 슬리퍼", scores: { condition: 4, married_life: 2 } }
  ]},

  // 11-20: Experiences & Micro-moments
  { q: "길을 걷다 분위기 좋은 모텔/호텔을 발견했을 때?", opts: [
    { text: "눈빛을 교환하며 장난스럽게 '저기 갈까?'라고 묻는다.", scores: { intimacy: 4, romance: 3 } },
    { text: "진짜로 가고 싶지만 부끄러워 말은 못하고 쳐다만 본다.", scores: { care: 2, date: 2 } },
    { text: "'집이 최고지'라며 빠른 걸음으로 집에 가자고 한다.", scores: { married_life: 4, condition: 3 } },
    { text: "즉흥적으로 손을 이끌고 바로 들어가 버린다.", scores: { intimacy: 4, mindset: 2 } }
  ]},
  { q: "놀이공원 데이트에서 가장 선호하는 놀이기구는?", opts: [
    { text: "아찔하고 스릴 넘치는 롤러코스터나 자이로드롭", scores: { date: 4, condition: 2 } },
    { text: "아름다운 경치를 보며 단둘이 얘기할 수 있는 관람차", scores: { romance: 4, communication: 3 } },
    { text: "동심으로 돌아가는 귀여운 회전목마나 범퍼카", scores: { date: 3, romance: 2 } },
    { text: "놀이기구보다는 간식을 먹으며 벤치에서 사람 구경하기", scores: { condition: 4, mindset: 2 } }
  ]},
  { q: "노래방에 갔을 때 당신의 스타일은?", opts: [
    { text: "서로 눈을 맞추며 부르는 달달한 듀엣곡", scores: { romance: 4, communication: 3 } },
    { text: "스트레스 풀리게 탬버린 흔들며 미친 듯이 뛰어노는 댄스곡", scores: { date: 4, condition: 3 } },
    { text: "조명을 낮추고 분위기를 잡는 끈적한 R&B 곡", scores: { intimacy: 4, romance: 2 } },
    { text: "노래 부르기 부끄러워 주로 박수만 치며 호응해 준다.", scores: { care: 3, mindset: 2 } }
  ]},
  { q: "전시회나 미술관 데이트에서 당신의 태도는?", opts: [
    { text: "작품의 의미를 분석하며 심도 깊은 지적 대화를 나눈다.", scores: { mindset: 4, communication: 3 } },
    { text: "작품 감상보다는 예쁜 포토존에서 서로 사진 찍어주기 바쁘다.", scores: { date: 4, romance: 2 } },
    { text: "조용한 분위기를 틈타 손을 깍지 끼고 귓속말을 즐긴다.", scores: { intimacy: 4, romance: 3 } },
    { text: "다리 아프다며 빨리 보고 카페에 가서 쉬자고 한다.", scores: { condition: 3, married_life: 1 } }
  ]},
  { q: "겨울철 스케이트장이나 스키장에 갔다면?", opts: [
    { text: "배우자가 넘어지지 않게 뒤에서 꼭 안아주며 가르쳐준다.", scores: { care: 4, intimacy: 3 } },
    { text: "추우니까 따뜻한 오뎅 국물이나 핫초코를 사서 마신다.", scores: { condition: 4, care: 2 } },
    { text: "누가 더 빠른지 유치하게 내기하며 승부욕을 불태운다.", scores: { date: 4, communication: 2 } },
    { text: "눈싸움을 하며 로맨스 영화의 한 장면처럼 장난친다.", scores: { romance: 4, intimacy: 2 } }
  ]},
  { q: "맛집에서 줄을 서서 1시간 이상 기다려야 한다면?", opts: [
    { text: "기다리는 동안 끝말잇기나 수다를 떨며 지루함을 즐긴다.", scores: { communication: 4, date: 3 } },
    { text: "배고프니까 당장 주변에 줄 없는 다른 식당으로 플랜 B를 가동한다.", scores: { married_life: 4, mindset: 3 } },
    { text: "내가 줄을 서 있을 테니 차나 카페에서 쉬고 있으라고 배려한다.", scores: { care: 4, condition: 3 } },
    { text: "서로 짜증이 나서 싸움으로 번진다.", scores: { condition: 1, communication: 1 } }
  ]},
  { q: "드라이브 중 분위기 좋은 음악이 흘러나올 때?", opts: [
    { text: "신나게 따라 부르며 춤을 춘다.", scores: { date: 4, condition: 2 } },
    { text: "말없이 손을 꽉 잡으며 창밖 풍경에 젖어 든다.", scores: { romance: 4, intimacy: 3 } },
    { text: "노래 가사를 빌려 슬쩍 사랑 고백을 해본다.", scores: { communication: 3, romance: 3 } },
    { text: "운전에 집중해야 하니 음악 볼륨을 살짝 줄인다.", scores: { married_life: 3, mindset: 2 } }
  ]},
  { q: "데이트 중 옛 연인(전여친/전남친)의 향수를 자극하는 물건을 봤을 때?", opts: [
    { text: "쿨하게 그때의 에피소드를 말하며 웃어넘긴다.", scores: { mindset: 4, communication: 2 } },
    { text: "티 내지 않고 모른 척 지나간다.", scores: { care: 3, condition: 2 } },
    { text: "괜히 질투심을 유발하기 위해 '나 옛날에 이거~'하며 깐족거린다.", scores: { communication: 2, romance: 2 } },
    { text: "불쾌해하며 당장 다른 주제로 말을 돌린다.", scores: { mindset: 2, condition: 1 } }
  ]},
  { q: "술집에서 술을 마실 때 선호하는 자리는?", opts: [
    { text: "서로 찰싹 달라붙어 앉을 수 있는 나란한 바(Bar) 자리", scores: { intimacy: 4, romance: 3 } },
    { text: "눈을 깊게 맞추고 대화하기 좋은 마주 보는 룸 자리", scores: { communication: 4, date: 3 } },
    { text: "사람 구경하며 떠들기 좋은 시끌벅적한 오픈 테이블", scores: { date: 3, mindset: 2 } },
    { text: "편하게 늘어질 수 있는 구석진 좌식 테이블", scores: { condition: 4, care: 2 } }
  ]},
  { q: "심야 영화를 보고 나왔는데 비가 오고 차가 끊겼다면?", opts: [
    { text: "가까운 모텔을 찾아 둘만의 뜨거운 밤으로 노선을 변경한다.", scores: { intimacy: 4, romance: 3 } },
    { text: "택시를 부르고 안 올까 봐 불안해하며 계속 앱만 새로고침한다.", scores: { married_life: 3, mindset: 2 } },
    { text: "근처 국밥집이나 포장마차에 들어가 소주 한잔하며 첫차를 기다린다.", scores: { date: 4, condition: 3 } },
    { text: "낭만적이라며 편의점에서 우산을 사서 빗속 산책을 즐긴다.", scores: { romance: 4, date: 2 } }
  ]},

  // 21-30: Special Events & Romance Maintenance
  { q: "집에서 하는 홈(Home) 데이트의 가장 큰 장점은?", opts: [
    { text: "언제든 씻고 편안한 상태로 누워 스킨십할 수 있다는 점", scores: { intimacy: 4, condition: 3 } },
    { text: "화장이나 옷차림에 신경 쓰지 않아도 되는 극강의 편안함", scores: { condition: 4, married_life: 2 } },
    { text: "배달 음식을 시켜놓고 밀린 예능을 보는 소소한 행복", scores: { date: 3, care: 2 } },
    { text: "함께 요리를 만들며 소꿉장난 같은 시간을 보낼 수 있다는 점", scores: { romance: 4, communication: 3 } }
  ]},
  { q: "밸런타인데이나 화이트데이 같은 상술(이벤트)데이에 당신은?", opts: [
    { text: "상술인 건 알지만 예쁜 초콜릿이나 꽃 정도는 꼭 주고받아야 한다.", scores: { romance: 4, date: 3 } },
    { text: "직접 만든 수제 디저트나 정성스러운 선물로 찐사랑을 증명한다.", scores: { care: 4, communication: 3 } },
    { text: "전혀 챙기지 않는다. 차라리 그 돈으로 평소에 맛있는 걸 먹는다.", scores: { married_life: 4, mindset: 3 } },
    { text: "가벼운 뽀뽀와 애교로 돈 들이지 않고 때운다.", scores: { intimacy: 3, romance: 2 } }
  ]},
  { q: "배우자의 생일, 서프라이즈 이벤트를 준비하다 들킬 위기라면?", opts: [
    { text: "당당하게 '어차피 너 줄 거야'라며 쿨하게 줘버린다.", scores: { mindset: 3, communication: 2 } },
    { text: "거짓말로 끝까지 둘러대며 원래 계획한 서프라이즈를 강행한다.", scores: { romance: 4, date: 3 } },
    { text: "들켜서 아쉽다고 징징대며 귀엽게 위로를 받는다.", scores: { communication: 3, care: 2 } },
    { text: "오히려 상대방의 반응을 즐기며 장난스럽게 놀린다.", scores: { date: 3, intimacy: 2 } }
  ]},
  { q: "데이트 중 지나가는 사람과 가벼운 시비(어깨빵 등)가 붙었다면?", opts: [
    { text: "배우자를 등 뒤로 숨기고 앞장서서 논리적으로 따진다.", scores: { care: 4, mindset: 3 } },
    { text: "분위기 망치기 싫어서 일단 죄송하다고 하고 서둘러 자리를 뜬다.", scores: { condition: 3, married_life: 3 } },
    { text: "흥분한 배우자를 진정시키고 달래느라 진땀을 뺀다.", scores: { communication: 4, care: 2 } },
    { text: "욱해서 쌍욕을 하며 데이트 기분을 다 망쳐버린다.", scores: { condition: 1, mindset: 1 } }
  ]},
  { q: "새로운 취미를 함께 시작한다면 어떤 것이 좋은가?", opts: [
    { text: "테니스, 등산 등 땀 흘리며 체력을 기를 수 있는 스포츠", scores: { condition: 4, date: 3 } },
    { text: "와인 테이스팅, 요리 등 미각과 분위기를 즐기는 클래스", scores: { romance: 4, date: 3 } },
    { text: "서로의 몸을 만지고 교감할 수 있는 커플 요가나 스포츠 댄스", scores: { intimacy: 4, romance: 3 } },
    { text: "주식, 재테크 등 미래 자산을 불리기 위한 스터디 모임", scores: { married_life: 4, mindset: 3 } }
  ]},
  { q: "더블 데이트(부부 동반 모임)에 대한 생각은?", opts: [
    { text: "다른 커플과 정보를 공유하고 노는 것이 아주 재밌다.", scores: { communication: 4, date: 3 } },
    { text: "다른 커플과 비교하게 될까 봐 조심스럽고 내키지 않는다.", scores: { mindset: 2, condition: 2 } },
    { text: "무조건 우리 둘이서만 꽁냥꽁냥 노는 것이 백 배는 더 좋다.", scores: { romance: 4, intimacy: 3 } },
    { text: "상대가 원하면 가지만, 솔직히 기가 빨려서 피곤하다.", scores: { condition: 3, care: 2 } }
  ]},
  { q: "데이트를 마치고 각자 일상으로 돌아가는(혹은 출근하는) 아침?", opts: [
    { text: "떨어지기 아쉬워 현관문 앞에서 5분 넘게 껴안고 뽀뽀한다.", scores: { intimacy: 4, romance: 4 } },
    { text: "'돈 많이 벌어와!'라며 장난스럽게 등을 쳐준다.", scores: { communication: 3, date: 2 } },
    { text: "따뜻한 아침밥이나 샌드위치를 쥐여주며 챙겨 보낸다.", scores: { care: 4, married_life: 3 } },
    { text: "서로 바쁘니 쿨하게 '다녀와' 한마디 하고 각자 갈 길 간다.", scores: { mindset: 4, condition: 2 } }
  ]},
  { q: "배우자가 정말 가고 싶어 하는 핫플레이스가 당신 취향에 전혀 안 맞는다면?", opts: [
    { text: "배우자의 웃는 얼굴을 보는 게 좋아서 기꺼이 즐겁게 동행한다.", scores: { care: 4, romance: 3 } },
    { text: "가주긴 하겠지만, 재미없다는 티를 팍팍 내며 툴툴거린다.", scores: { condition: 1, communication: 1 } },
    { text: "내 취향이 아님을 솔직히 말하고 각자 원하는 곳에서 놀다 만나자고 제안한다.", scores: { mindset: 4, communication: 3 } },
    { text: "다음번엔 내가 원하는 곳에 가는 조건으로 거래(Deal)를 한다.", scores: { married_life: 3, date: 3 } }
  ]},
  { q: "커플 사진(셀카 등)을 찍는 것에 대한 당신의 태도는?", opts: [
    { text: "수십 장을 찍어 인생샷을 건질 때까지 배우자를 괴롭힌다.", scores: { date: 3, romance: 2 } },
    { text: "찍히는 건 별로 안 좋아하지만 배우자를 위해 예쁘게 포즈를 취해준다.", scores: { care: 3, communication: 2 } },
    { text: "서로 엽기적인 표정을 지으며 웃긴 사진만 잔뜩 찍는다.", scores: { date: 4, communication: 3 } },
    { text: "사진보다는 눈으로 담는 것이 중요해 풍경이나 뒷모습만 몰래 찍는다.", scores: { mindset: 3, romance: 2 } }
  ]},
  { q: "당신에게 '완벽한 데이트'를 한 문장으로 정의한다면?", opts: [
    { text: "비싼 식당이나 선물 없이도, 서로 눈만 마주치면 웃음이 나는 시간", scores: { romance: 4, communication: 3 } },
    { text: "분위기 좋은 곳에서 진솔한 대화를 나누다 뜨거운 밤으로 이어지는 코스", scores: { intimacy: 4, date: 4 } },
    { text: "철저한 계획대로 움직이며 시간 낭비 없이 알차고 재밌게 논 하루", scores: { married_life: 3, care: 3 } },
    { text: "푹신한 소파에서 좋아하는 영화를 보며 아무 걱정 없이 늘어지는 힐링", scores: { condition: 4, care: 2 } }
  ]}
];

categoryTests.married_life = [
  // 1-10: Finance & Chores
  { q: "결혼 생활 중 가장 스트레스를 받는 요인은 무엇인가?", opts: [
    { text: "끝이 없는 집안일(청소, 빨래, 설거지)의 굴레", scores: { condition: 3, married_life: 2 } },
    { text: "대출, 생활비, 자녀 양육비 등 팍팍한 경제적 문제", scores: { mindset: 3, married_life: 4 } },
    { text: "시댁, 처가 등 양가 부모님의 과도한 간섭이나 행사", scores: { mindset: 2, communication: 3 } },
    { text: "연애 시절의 달콤함이 사라지고 건조해진 부부 관계", scores: { romance: 4, intimacy: 4 } }
  ]},
  { q: "가사 도우미를 부르거나 비싼 식기세척기를 사는 것에 대한 생각은?", opts: [
    { text: "우리의 체력과 시간을 아낄 수 있다면 무조건 돈을 쓰는 게 낫다.", scores: { condition: 4, mindset: 3 } },
    { text: "돈이 아깝다. 조금 피곤해도 우리가 직접 나누어 하는 것이 낫다.", scores: { married_life: 4, care: 2 } },
    { text: "배우자가 너무 힘들어하면 내가 비용을 부담해서라도 해주고 싶다.", scores: { care: 4, romance: 2 } },
    { text: "돈으로 해결하기보다 서로 사랑하는 마음으로 즐겁게 집안일을 해야 한다.", scores: { communication: 3, intimacy: 1 } }
  ]},
  { q: "명절 연휴에 시댁/처가에 가는 문제로 다툼이 생긴다면?", opts: [
    { text: "철저하게 5:5로 시간을 분배하고 공평의 원칙을 내세운다.", scores: { married_life: 4, mindset: 2 } },
    { text: "배우자의 부모님 댁에 먼저 가자고 배려하며 점수를 딴다.", scores: { care: 4, communication: 3 } },
    { text: "이번 명절은 양가 다 안 가고 우리 둘이서만 쉬자고 파격 제안을 한다.", scores: { condition: 4, romance: 3 } },
    { text: "전통과 예의를 중시하여 상대방이 내 부모님께 맞추길 바란다.", scores: { mindset: 1, communication: 1 } }
  ]},
  { q: "비자금(개인 몰래 모은 돈)에 대한 당신의 입장은?", opts: [
    { text: "부부 사이에 비밀은 없어야 한다. 비자금은 100% 불법이다.", scores: { married_life: 4, communication: 3 } },
    { text: "서프라이즈 선물이나 숨 쉴 틈을 위해 소액의 비자금은 필수다.", scores: { romance: 3, mindset: 3 } },
    { text: "경제권이 없는 사람이 비참해지지 않으려면 무조건 있어야 한다.", scores: { condition: 3, mindset: 2 } },
    { text: "나는 없지만, 배우자가 비자금을 모았다면 귀엽게 봐줄 수 있다.", scores: { care: 4, mindset: 3 } }
  ]},
  { q: "로또 1등에 당첨되었다면 가장 먼저 배우자에게 할 말은?", opts: [
    { text: "'당장 사표 내! 우리 이제 평생 여행이나 다니며 살자!'", scores: { romance: 4, date: 4 } },
    { text: "'우리 빚 다 갚고 펜트하우스로 이사 가자!'", scores: { married_life: 4, care: 3 } },
    { text: "'이거 당신 다 가져, 그동안 고생했어.'", scores: { care: 4, intimacy: 2 } },
    { text: "당분간 말하지 않고 혼자 자산 포트폴리오를 은밀하게 짠다.", scores: { mindset: 3, condition: 1 } }
  ]},
  { q: "주말 대청소를 할 때 당신의 포지션은?", opts: [
    { text: "음악을 크게 틀고 진두지휘하며 빡세게 쓸고 닦는 반장", scores: { married_life: 4, condition: 2 } },
    { text: "배우자가 시키는 것만 굼벵이처럼 천천히 하는 보조", scores: { condition: 2, mindset: 1 } },
    { text: "배우자가 청소할 때 졸졸 따라다니며 안마해주고 방해하는 빌런", scores: { romance: 3, intimacy: 3 } },
    { text: "배우자 몰래 맛있는 간식이나 커피를 사오는 센스쟁이 보급관", scores: { care: 4, date: 3 } }
  ]},
  { q: "집안의 물건을 정리하거나 버리는 스타일에 대해?", opts: [
    { text: "조금만 안 써도 가차 없이 버리는 미니멀리스트", scores: { mindset: 3, condition: 3 } },
    { text: "언젠가 다 쓸 데가 있다며 절대 못 버리게 하는 맥시멀리스트", scores: { married_life: 2, care: 1 } },
    { text: "내 물건은 안 버리면서 상대방 물건만 버리라고 잔소리하는 내로남불", scores: { communication: 1, condition: 1 } },
    { text: "배우자와 상의하여 당근마켓에 팔아 용돈을 버는 실속파", scores: { married_life: 4, communication: 4 } }
  ]},
  { q: "배우자가 매일 늦게 퇴근하고 주말에도 출근한다면?", opts: [
    { text: "건강이 걱정되어 보양식을 챙기고 퇴근 시간에 맞춰 마중 나간다.", scores: { care: 4, condition: 3 } },
    { text: "나와 보내는 시간이 부족해 서운하다며 투정을 부린다.", scores: { romance: 4, intimacy: 3 } },
    { text: "돈 많이 벌어온다며 기뻐하고 나는 나대로 자유 시간을 만끽한다.", scores: { mindset: 4, married_life: 2 } },
    { text: "워라밸이 무너진 것에 대해 진지하게 이직이나 퇴사를 권유한다.", scores: { communication: 4, mindset: 3 } }
  ]},
  { q: "결혼 생활에서 '돈'의 가치는 어느 정도인가?", opts: [
    { text: "행복의 99%. 가난이 문으로 들어오면 사랑은 창문으로 도망간다.", scores: { married_life: 4, mindset: 3 } },
    { text: "안정감을 주는 도구일 뿐, 서로를 아끼는 마음이 훨씬 중요하다.", scores: { romance: 4, care: 4 } },
    { text: "많으면 좋지만, 부족하면 둘이서 함께 라면만 먹어도 즐겁다.", scores: { condition: 3, intimacy: 3 } },
    { text: "자녀 교육과 노후를 위해 평생 철저하게 아끼고 굴려야 하는 족쇄.", scores: { married_life: 3, condition: 1 } }
  ]},
  { q: "냉장고에 마지막 남은 비싼 디저트(아이스크림 등)를 봤다면?", opts: [
    { text: "배우자가 좋아하니까 꾹 참고 양보한다.", scores: { care: 4, romance: 3 } },
    { text: "일단 내가 반만 먹고 예쁘게 다시 넣어둔다.", scores: { mindset: 3, communication: 2 } },
    { text: "내가 다 먹어버리고 시치미를 뚝 뗀다.", scores: { condition: 2, mindset: 1 } },
    { text: "배우자를 불러서 숟가락 두 개로 서로 먹여주며 같이 먹는다.", scores: { intimacy: 4, date: 3 } }
  ]},

  // 11-20: Habits, Sleep & Space
  { q: "수면 습관이나 코골이로 인해 각방을 쓰는 것에 대해?", opts: [
    { text: "부부는 무조건 살을 부대끼고 자야 한다. 각방은 이혼의 지름길이다.", scores: { intimacy: 4, romance: 3 } },
    { text: "수면의 질이 가장 중요하므로 쿨하게 각방을 선호한다.", scores: { condition: 4, mindset: 4 } },
    { text: "평일엔 각방을 쓰고, 주말엔 합방을 하는 합리적인 대안을 찾는다.", scores: { communication: 4, married_life: 3 } },
    { text: "코고는 배우자를 위해 귀마개를 사거나 내가 수면제를 먹으며 참는다.", scores: { care: 3, condition: 1 } }
  ]},
  { q: "치약 짜는 방법, 변기 뚜껑 등 아주 사소한 생활 습관 차이?", opts: [
    { text: "매번 끝까지 지적해서 내 방식대로 고쳐놓는다.", scores: { mindset: 2, communication: 1 } },
    { text: "그냥 포기하고 내가 배우자 몫까지 정리하며 해탈한다.", scores: { care: 3, condition: 2 } },
    { text: "각자 전용 치약을 쓰고, 화장실을 분리하는 등 시스템으로 해결한다.", scores: { married_life: 4, mindset: 4 } },
    { text: "'또 안 내렸네~'라며 엉덩이를 찰싹 때리는 장난으로 승화시킨다.", scores: { romance: 4, intimacy: 3 } }
  ]},
  { q: "아침 식사에 대한 당신의 철학은?", opts: [
    { text: "배우자가 출근 전 빈속으로 가지 않게 어떻게든 밥을 차려준다.", scores: { care: 4, married_life: 3 } },
    { text: "아침잠이 훨씬 중요하므로 밥 대신 서로 5분 더 안고 잔다.", scores: { condition: 4, intimacy: 3 } },
    { text: "먼저 일어난 사람이 빵이나 시리얼을 간단히 준비해서 침대로 가져다준다.", scores: { romance: 4, date: 3 } },
    { text: "아침은 각자 알아서 챙겨 먹거나 회사 가서 먹는 것이 룰이다.", scores: { mindset: 4, married_life: 2 } }
  ]},
  { q: "휴일에 늦잠을 자는 배우자를 깨우는 당신만의 방법은?", opts: [
    { text: "커튼을 확 젖히고 청소기를 돌리며 무력으로 기상시킨다.", scores: { married_life: 2, condition: 1 } },
    { text: "볼에 뽀뽀 세례를 퍼붓고 껴안으며 귀찮게 해서 깨운다.", scores: { intimacy: 4, romance: 4 } },
    { text: "침대 머리맡에 갓 내린 커피와 베이컨 냄새를 풍긴다.", scores: { care: 4, date: 3 } },
    { text: "주말인데 푹 쉬라며 오후 2시까지 절대 안 깨우고 둔다.", scores: { condition: 4, mindset: 3 } }
  ]},
  { q: "인테리어를 할 때 가장 힘을 주고 싶은 공간은?", opts: [
    { text: "우아하고 포근한 침구와 은은한 조명이 있는 로맨틱 침실", scores: { intimacy: 4, romance: 4 } },
    { text: "손님을 초대하고 같이 영화를 볼 수 있는 쾌적한 거실", scores: { date: 3, communication: 3 } },
    { text: "나만의 장난감이나 게임기를 꽉 채운 벙커(서재) 방", scores: { mindset: 4, condition: 3 } },
    { text: "실용적이고 요리하기 편한 동선의 넓고 깨끗한 주방", scores: { married_life: 4, care: 3 } }
  ]},
  { q: "배우자가 집안일을 한 후 결과가 마음에 안 들 때 (설거지에 고춧가루 등)?", opts: [
    { text: "당장 불러서 다시 하라고 엄격하게 가르친다.", scores: { mindset: 1, communication: 1 } },
    { text: "해준 게 어디냐며 칭찬해 주고 몰래 내가 다시 씻는다.", scores: { care: 4, romance: 2 } },
    { text: "농담처럼 '자기야 여기 고춧가루가 안녕? 하네'라며 부드럽게 넘긴다.", scores: { communication: 4, date: 2 } },
    { text: "다시는 배우자에게 그 집안일을 시키지 않고 내가 전담한다.", scores: { condition: 2, married_life: 2 } }
  ]},
  { q: "부부의 스마트폰 비밀번호 공유에 대해?", opts: [
    { text: "부부 사이에 폰은 공공재다. 지문 등록까지 다 해둔다.", scores: { married_life: 3, intimacy: 2 } },
    { text: "비밀번호는 알지만 서로 예의상 절대 열어보지 않는다.", scores: { mindset: 4, communication: 3 } },
    { text: "비밀번호를 절대 공유하지 않으며 각자의 사생활을 존중한다.", scores: { condition: 3, mindset: 4 } },
    { text: "상대가 내 폰을 보면 부끄러운 카톡이 있을까 봐 굳이 안 알린다.", scores: { care: 2, condition: 1 } }
  ]},
  { q: "배우자가 당신을 위해 요리했지만 맛이 최악일 때?", opts: [
    { text: "거짓말로 너무 맛있다며 꾸역꾸역 다 먹어 치운다.", scores: { care: 4, romance: 3 } },
    { text: "솔직하게 '이건 도저히 못 먹겠다, 라면 끓이자'라고 말한다.", scores: { mindset: 3, communication: 2 } },
    { text: "조미료나 케첩을 몰래 팍팍 넣어서 어떻게든 심폐소생술을 한다.", scores: { married_life: 4, care: 2 } },
    { text: "'정성은 100점, 맛은 10점!'이라며 장난치고 같이 배달을 시킨다.", scores: { communication: 4, date: 3 } }
  ]},
  { q: "반려동물을 키우는 문제로 의견이 갈린다면?", opts: [
    { text: "생명을 책임지는 일이니 한 명이라도 반대하면 절대 키우지 않는다.", scores: { married_life: 4, mindset: 4 } },
    { text: "내가 모든 똥 치우기와 산책을 책임지겠다고 각서를 쓰고 데려온다.", scores: { care: 3, romance: 2 } },
    { text: "귀여운 강아지/고양이 사진을 매일 보내며 끈질기게 세뇌시킨다.", scores: { communication: 3, date: 2 } },
    { text: "일단 무작정 집에 데려와서 상대방이 정들게 만들어 버린다.", scores: { mindset: 1, condition: 1 } }
  ]},
  { q: "방귀나 트림 등 생리 현상을 트는 것에 대해?", opts: [
    { text: "결혼식 날부터 시원하게 트고 서로의 방귀 냄새를 평가한다.", scores: { communication: 4, date: 3 } },
    { text: "평생 트지 않고 끝까지 신비감과 섹시함을 유지하고 싶다.", scores: { romance: 4, intimacy: 4 } },
    { text: "자연스럽게 트이게 두지만 굳이 상대 코앞에서 하지는 않는다.", scores: { mindset: 3, married_life: 3 } },
    { text: "나는 조심하는데 상대방이 트면 정떨어져서 화가 난다.", scores: { condition: 2, care: 1 } }
  ]},

  // 21-30: Hardships & Deep Values
  { q: "배우자가 다니던 직장을 그만두고 사업을 하겠다고 선언한다면?", opts: [
    { text: "당신의 능력을 믿는다며 통장 잔고를 털어 전폭 지지해준다.", scores: { care: 4, romance: 3 } },
    { text: "사업 계획서와 수익 구조를 요구하며 깐깐한 투자자 모드로 심사한다.", scores: { married_life: 4, mindset: 4 } },
    { text: "절대 안 된다고 펑펑 울며 말리고 안정적인 직장에 다니라고 애원한다.", scores: { condition: 3, care: 2 } },
    { text: "당장 실패했을 때 플랜 B가 있는지 점검하고 합의점을 찾는다.", scores: { communication: 4, married_life: 3 } }
  ]},
  { q: "결혼 생활 중 가장 두려운 상상은?", opts: [
    { text: "어느 한쪽이 불치병에 걸려 경제적, 육체적으로 무너지는 것", scores: { care: 4, condition: 4 } },
    { text: "배우자가 바람을 피워 나에 대한 신뢰와 사랑을 배신하는 것", scores: { intimacy: 4, romance: 4 } },
    { text: "서로에게 아무런 감정도 대화도 남지 않은 쇼윈도 부부가 되는 것", scores: { communication: 4, mindset: 3 } },
    { text: "대출 이자와 빚에 허덕이며 가난에 찌들어 사는 것", scores: { married_life: 4, condition: 3 } }
  ]},
  { q: "시어머니(장모님)가 사전 연락 없이 비밀번호를 누르고 반찬을 가져오셨다면?", opts: [
    { text: "기분은 나쁘지만 고생하셨다며 감사히 받고 다음부터 연락을 부탁드린다.", scores: { care: 3, married_life: 3 } },
    { text: "비밀번호를 즉시 당장 바꿔버리고 배우자에게 화를 낸다.", scores: { mindset: 3, condition: 2 } },
    { text: "배우자를 통해 부모님께 강력하게 항의하고 현관문 출입을 통제한다.", scores: { communication: 4, married_life: 4 } },
    { text: "속옷 차림으로 맞이하여 부모님이 민망해서 다음부터 안 오시게 한다.", scores: { intimacy: 3, date: 2 } }
  ]},
  { q: "우울증 등 배우자가 깊은 심리적 수렁에 빠졌을 때?", opts: [
    { text: "함께 심리 상담이나 정신과를 다니며 과학적이고 적극적으로 치료한다.", scores: { mindset: 4, married_life: 4 } },
    { text: "아무것도 강요하지 않고 그저 매일 곁에서 묵묵히 손을 잡아준다.", scores: { care: 4, condition: 4 } },
    { text: "매주 바다를 보러 가거나 기분 전환을 위한 억지 이벤트라도 한다.", scores: { date: 4, romance: 3 } },
    { text: "나까지 우울해져서 지치고 결국 짜증을 내게 될 것 같아 두렵다.", scores: { condition: 2, communication: 1 } }
  ]},
  { q: "자녀가 커서 독립한 후 노년의 부부에게 가장 필요한 것은?", opts: [
    { text: "손잡고 세계 여행을 다닐 수 있는 건강한 신체와 로맨스", scores: { romance: 4, date: 4 } },
    { text: "돈 걱정 없이 안락하게 쉴 수 있는 완벽한 연금과 집", scores: { married_life: 4, condition: 3 } },
    { text: "하루 종일 붙어 있어도 끊이지 않는 대화와 공통의 취미", scores: { communication: 4, mindset: 4 } },
    { text: "서로의 기저귀를 갈아줘도 수치스럽지 않은 깊은 헌신과 전우애", scores: { care: 4, intimacy: 3 } }
  ]},
  { q: "부부 모임에서 배우자가 당신의 치부(실수)를 농담 삼아 폭로한다면?", opts: [
    { text: "같이 박장대소하며 내 치부를 더 부풀려 유머로 승화시킨다.", scores: { date: 4, communication: 4 } },
    { text: "테이블 밑으로 발을 꾹 밟으며 눈빛으로 닥치라고 레이저를 쏜다.", scores: { intimacy: 2, married_life: 2 } },
    { text: "집에 돌아가는 차 안에서 서운했다고 정색하며 진지하게 화를 낸다.", scores: { mindset: 3, communication: 3 } },
    { text: "나도 배우자의 가장 부끄러운 치부를 꺼내 맞불 폭로전을 펼친다.", scores: { romance: 1, condition: 1 } }
  ]},
  { q: "만약 시간을 돌려 결혼 전으로 돌아간다면?", opts: [
    { text: "1초의 망설임도 없이 똑같은 사람과 다시 뜨겁게 연애하고 결혼한다.", scores: { romance: 4, intimacy: 4 } },
    { text: "비혼주의로 살며 나만의 화려하고 완벽한 싱글 라이프를 즐긴다.", scores: { mindset: 3, condition: 3 } },
    { text: "결혼은 하되, 지금 겪은 시행착오를 바탕으로 더 지혜롭게 이끈다.", scores: { married_life: 4, communication: 4 } },
    { text: "배우자와 다른 매력을 가진 새로운 사람들과 원 없이 만나본다.", scores: { date: 3, romance: 2 } }
  ]},
  { q: "결혼 생활을 유지하게 하는 가장 큰 원동력은?", opts: [
    { text: "침대 위에서의 짜릿함과 스킨십이 주는 본능적인 이끌림", scores: { intimacy: 4, romance: 3 } },
    { text: "대화가 잘 통하고 가치관이 일치하는 정신적 교감", scores: { communication: 4, mindset: 4 } },
    { text: "우리가 함께 쌓아온 재산, 집, 그리고 자식이라는 결과물", scores: { married_life: 4, care: 3 } },
    { text: "나를 무조건적으로 챙겨주고 배려해 주는 따뜻한 헌신", scores: { care: 4, condition: 4 } }
  ]},
  { q: "당신이 배우자를 부르는 가장 진심 어린 내면의 호칭은?", opts: [
    { text: "영원히 나를 여자/남자로 만들어주는 치명적인 연인", scores: { romance: 4, intimacy: 4 } },
    { text: "어떤 비밀도 나눌 수 있는 세상에 단 하나뿐인 베프(절친)", scores: { communication: 4, date: 4 } },
    { text: "험난한 세상을 함께 헤쳐 나가는 가장 든든한 전우", scores: { married_life: 4, care: 4 } },
    { text: "내가 어떤 모습이든 조건 없이 품어주는 안식처이자 부모 같은 존재", scores: { condition: 4, mindset: 3 } }
  ]},
  { q: "마지막으로, 당신은 지금 이 결혼 생활에 행복하십니까?", opts: [
    { text: "네, 당신을 만나 내 인생은 완벽해졌습니다.", scores: { romance: 4, care: 4 } },
    { text: "물론이죠, 우리의 몸과 마음은 언제나 하나니까요.", scores: { intimacy: 4, communication: 4 } },
    { text: "당연하죠, 우린 완벽한 원팀(One-Team)이거든요.", scores: { married_life: 4, mindset: 4 } },
    { text: "그럼요, 당신 품에서 쉴 때가 세상에서 제일 평화로워요.", scores: { condition: 4, care: 3 } }
  ]}
];
