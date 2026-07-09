const categoryTests = {
  intimacy: [
    // 1-10: Physical Touch & Foreplay
    { q: "상대방의 스킨십 중 가장 기분 좋은 부위는?", opts: [
      { text: "부드러운 입술과 깊은 키스", scores: { romance: 2, intimacy: 3 } },
      { text: "가슴이나 허리를 감싸는 단단한 손길", scores: { care: 2, intimacy: 3 } },
      { text: "귀나 목덜미 주변의 예민한 터치", scores: { communication: 1, intimacy: 3 } },
      { text: "허벅지나 다리를 은근하게 스치는 터치", scores: { mindset: 1, intimacy: 3 } }
    ]},
    { q: "성관계 시 당신이 선호하는 조명은?", opts: [
      { text: "완전한 어둠, 오직 촉각과 청각에만 의존", scores: { condition: 2, intimacy: 2 } },
      { text: "은은한 간접 조명이나 촛불 아래의 무드", scores: { romance: 3, intimacy: 2 } },
      { text: "상대의 표정을 다 볼 수 있는 밝은 조명", scores: { communication: 3, intimacy: 2 } },
      { text: "거울을 통해 서로를 보는 시각적 자극", scores: { mindset: 3, intimacy: 3 } }
    ]},
    { q: "전희(Foreplay)에 걸리는 이상적인 시간은?", opts: [
      { text: "5분 이내, 빠르게 본능에 집중하는 것이 좋다.", scores: { intimacy: 3, mindset: 1 } },
      { text: "10~15분 정도, 적당히 달아오르면 충분하다.", scores: { romance: 2, condition: 2 } },
      { text: "30분 이상, 애무 자체가 메인 이벤트처럼 길어야 한다.", scores: { care: 3, intimacy: 3 } },
      { text: "정해진 시간 없이 그때그때 분위기에 따라 다르다.", scores: { communication: 3, condition: 2 } }
    ]},
    { q: "샤워를 같이 하는 것에 대한 당신의 생각은?", opts: [
      { text: "서로의 몸을 씻겨주며 전희로 이어지는 최고의 이벤트", scores: { intimacy: 4, romance: 2 } },
      { text: "가끔 이벤트성으로는 좋지만 매일은 부끄럽다.", scores: { mindset: 2, romance: 1 } },
      { text: "물 온도도 안 맞고 좁아서 각자 씻는 게 편하다.", scores: { condition: 3, care: 1 } },
      { text: "로맨틱하기보다는 그저 물장난 치며 노는 재미", scores: { date: 3, communication: 2 } }
    ]},
    { q: "배우자가 평소와 전혀 다른 향수를 뿌리고 왔다면?", opts: [
      { text: "향기를 핑계로 목덜미에 코를 박고 깊게 들이마신다.", scores: { intimacy: 4, romance: 2 } },
      { text: "어떤 향수인지 물어보며 칭찬해 준다.", scores: { communication: 3, care: 1 } },
      { text: "평소와 다른 낯선 느낌에 묘한 흥분을 느낀다.", scores: { mindset: 3, intimacy: 2 } },
      { text: "향수는 별로 신경 안 쓴다. 본연의 체취가 가장 좋다.", scores: { condition: 2, romance: 1 } }
    ]},
    { q: "성감대를 찾는 과정에서 당신의 태도는?", opts: [
      { text: "내 몸 어디가 좋은지 직접 손을 끌어다 알려준다.", scores: { communication: 4, intimacy: 3 } },
      { text: "부끄럽지만 신음 소리나 반응으로 간접적으로 표현한다.", scores: { romance: 3, care: 1 } },
      { text: "배우자가 내 몸을 탐구하며 스스로 찾아내길 기다린다.", scores: { mindset: 2, romance: 2 } },
      { text: "내가 먼저 배우자의 몸 구석구석을 애무하며 반응을 살핀다.", scores: { care: 4, intimacy: 3 } }
    ]},
    { q: "아침에 눈을 떴을 때 가장 원하는 스킨십은?", opts: [
      { text: "잠결에 서로의 맨살을 비비며 껴안기", scores: { intimacy: 4, condition: 2 } },
      { text: "이마나 볼에 가볍게 하는 모닝 키스", scores: { romance: 3, care: 2 } },
      { text: "등 뒤에서 빈틈없이 나를 감싸는 백허그", scores: { care: 3, romance: 1 } },
      { text: "잠에서 깨워주는 부드러운 손길과 마사지", scores: { condition: 4, care: 2 } }
    ]},
    { q: "관계 중 가장 흥분되는 청각적 자극은?", opts: [
      { text: "거칠게 내뱉는 숨소리", scores: { intimacy: 3, mindset: 1 } },
      { text: "내 이름을 낮고 끈적하게 부르는 목소리", scores: { romance: 4, communication: 1 } },
      { text: "어디가 어떻게 좋은지 구체적으로 말해주는 것", scores: { communication: 4, intimacy: 2 } },
      { text: "음악 소리에 묻혀 들리는 은밀한 신음", scores: { mindset: 2, condition: 1 } }
    ]},
    { q: "키스의 스타일에 대해 선호하는 것은?", opts: [
      { text: "부드럽고 달콤하게 입술만 닿는 뽀뽀", scores: { romance: 3, care: 2 } },
      { text: "혀가 깊게 오가는 농밀하고 끈적한 딥키스", scores: { intimacy: 4, mindset: 1 } },
      { text: "목이나 귀로 자연스럽게 이어지는 에로틱한 키스", scores: { intimacy: 3, romance: 2 } },
      { text: "장난스럽게 깨물거나 쪽쪽거리는 귀여운 키스", scores: { date: 3, communication: 2 } }
    ]},
    { q: "성관계가 끝난 직후(Aftercare) 가장 원하는 것은?", opts: [
      { text: "말없이 서로를 꽉 껴안고 체온을 느끼기", scores: { care: 4, intimacy: 2 } },
      { text: "오늘 어땠는지 서로 솔직하게 감상 나누기", scores: { communication: 4, mindset: 2 } },
      { text: "함께 샤워를 하거나 물수건으로 서로 닦아주기", scores: { condition: 3, care: 3 } },
      { text: "바로 잠들거나 각자의 시간 가지며 쉬기", scores: { mindset: 3, condition: 3 } }
    ]},
    
    // 11-20: Fantasies, Toys & Exploration
    { q: "새로운 체위나 도구를 시도해보자는 제안에 당신은?", opts: [
      { text: "매우 환영한다. 당장 쇼핑몰을 같이 본다.", scores: { intimacy: 4, romance: 2 } },
      { text: "조금 부끄럽지만 분위기를 위해 기꺼이 동참한다.", scores: { care: 3, condition: 1 } },
      { text: "내가 평소 해보고 싶었던 리스트를 역으로 제안한다.", scores: { communication: 4, mindset: 2 } },
      { text: "아직은 보수적이라 익숙한 방식이 제일 좋다고 거절한다.", scores: { condition: 3, mindset: 1 } }
    ]},
    { q: "둘만의 비밀스러운 롤플레잉(역할극)에 대한 생각은?", opts: [
      { text: "너무 오글거려서 웃음이 터질 것 같아 못하겠다.", scores: { communication: 2, condition: 1 } },
      { text: "모르는 사람인 척 바에서 헌팅하는 역할극은 짜릿할 듯하다.", scores: { romance: 4, date: 2 } },
      { text: "상사-부하 등 권력 관계가 있는 역할극으로 지배욕/복종욕을 즐긴다.", scores: { intimacy: 4, mindset: 3 } },
      { text: "옷차림(교복, 메이드 등)만 살짝 바꿔서 시각적 자극만 준다.", scores: { intimacy: 3, romance: 2 } }
    ]},
    { q: "관계 시 거울이나 카메라를 활용하는 것에 대해?", opts: [
      { text: "절대 불가능하다. 나를 보는 것 자체가 너무 수치스럽다.", scores: { condition: 3, mindset: 1 } },
      { text: "거울에 비친 우리의 모습을 보는 것은 시각적으로 엄청난 자극이다.", scores: { intimacy: 4, mindset: 2 } },
      { text: "둘만의 안전한 폴더에 소장용으로 사진을 남기는 것은 찬성한다.", scores: { communication: 3, romance: 2 } },
      { text: "상대가 원한다면 눈을 가리고 상대만 보게 허락할 수 있다.", scores: { care: 3, intimacy: 2 } }
    ]},
    { q: "배우자 몰래 자위행위를 하는 것에 대한 당신의 생각은?", opts: [
      { text: "자연스러운 생리 현상이니 서로 프라이버시를 존중해야 한다.", scores: { mindset: 4, condition: 2 } },
      { text: "부부인데 왜 혼자 하나? 무조건 같이 해야 한다고 생각한다.", scores: { intimacy: 3, romance: 2 } },
      { text: "서로 어떻게 자위하는지 지켜보거나 도와주는 것을 선호한다.", scores: { intimacy: 4, communication: 3 } },
      { text: "들키면 조금 무안할 것 같아 철저히 몰래 한다.", scores: { care: 2, mindset: 1 } }
    ]},
    { q: "야동이나 성인 콘텐츠를 함께 보는 것은?", opts: [
      { text: "같이 보면서 흥분도를 높이는 훌륭한 전희 도구다.", scores: { intimacy: 3, romance: 2 } },
      { text: "각자 취향이 다르므로 혼자 보는 것이 맞다.", scores: { mindset: 3, condition: 2 } },
      { text: "서로 좋아하는 장르를 추천하며 성적 취향을 탐구하는 기회로 삼는다.", scores: { communication: 4, intimacy: 2 } },
      { text: "현실과 너무 달라 오히려 부부 관계의 몰입을 방해한다고 생각한다.", scores: { care: 2, mindset: 1 } }
    ]},
    { q: "조금 거친 스킨십(가벼운 스팽킹, 머리채 잡기 등 BDSM 성향)에 대해?", opts: [
      { text: "아프고 무서워서 절대 싫다. 무조건 부드러운 게 좋다.", scores: { care: 3, condition: 2 } },
      { text: "상호 합의 하에 가벼운 지배/피지배 플레이는 엄청난 쾌감을 준다.", scores: { intimacy: 4, mindset: 3 } },
      { text: "분위기가 격렬해질 때 자연스럽게 나오는 거친 숨결이나 힘은 좋다.", scores: { romance: 3, intimacy: 2 } },
      { text: "아직 해본 적은 없지만 안전하다면 한 번쯤 경험해보고 싶다.", scores: { communication: 3, date: 1 } }
    ]},
    { q: "성관계 시 속옷의 중요성은?", opts: [
      { text: "어차피 바로 벗을 건데 크게 중요하지 않다.", scores: { condition: 3, mindset: 1 } },
      { text: "평소와 다른 이벤트성 속옷(슬립, 가터벨트)은 분위기를 미치게 한다.", scores: { romance: 4, intimacy: 3 } },
      { text: "벗기기 힘들면 짜증나니 실용적이면서 예쁜 것이 최고다.", scores: { care: 2, condition: 1 } },
      { text: "속옷보다는 맨몸에 상대의 셔츠를 걸치는 등 은근한 노출이 좋다.", scores: { romance: 3, intimacy: 2 } }
    ]},
    { q: "야외나 공공장소에서의 은밀한 스킨십(노출 위험)에 대해?", opts: [
      { text: "들킬지도 모른다는 쫄깃한 스릴이 최고의 자극이다.", scores: { intimacy: 4, date: 3 } },
      { text: "엘리베이터나 비상구에서의 짧고 강렬한 키스 정도가 딱 좋다.", scores: { romance: 4, intimacy: 2 } },
      { text: "절대 안 된다. 무조건 안전하고 프라이빗한 곳이 좋다.", scores: { mindset: 3, condition: 3 } },
      { text: "테이블 밑에서 발을 비비거나 손을 잡는 등 은근한 터치만 즐긴다.", scores: { communication: 2, romance: 2 } }
    ]},
    { q: "체력을 요하는 어려운 체위나 장시간의 관계 후?", opts: [
      { text: "땀에 젖어 녹초가 된 서로의 모습이 너무 섹시하다.", scores: { intimacy: 4, romance: 2 } },
      { text: "다음 날 출근이 걱정되어 적당히 하고 잤으면 한다.", scores: { condition: 4, mindset: 2 } },
      { text: "힘들긴 하지만 상대가 만족했다면 나도 기쁘다.", scores: { care: 4, intimacy: 1 } },
      { text: "서로의 체력을 기르기 위해 같이 헬스장에 등록한다.", scores: { married_life: 4, condition: 1 } }
    ]},
    { q: "배우자에게 나의 은밀한 성적 판타지를 처음 고백할 때 타이밍은?", opts: [
      { text: "술 한잔 마시고 분위기가 무르익었을 때 넌지시 말한다.", scores: { date: 3, romance: 3 } },
      { text: "침대 위에서 귓속말로 야릇하게 속삭인다.", scores: { intimacy: 4, communication: 2 } },
      { text: "평소 진지한 대화를 할 때 '우리 이런 거 해볼까?'라며 이성적으로 묻는다.", scores: { communication: 4, mindset: 2 } },
      { text: "카톡이나 문자로 야한 링크를 보내며 반응을 떠본다.", scores: { romance: 2, condition: 1 } }
    ]},
    
    // 21-30: Frequency, Libido & Real Life Issues
    { q: "부부 사이의 섹스리스(Sexless) 위기가 감지된다면?", opts: [
      { text: "자존심 상하지만 내가 먼저 유혹하고 분위기를 만든다.", scores: { romance: 4, intimacy: 2 } },
      { text: "심각하게 받아들이고 대화 시간을 마련해 이유를 묻는다.", scores: { communication: 4, mindset: 3 } },
      { text: "상대가 피곤해서 그렇다 생각하고 영양제나 보양식을 챙긴다.", scores: { care: 4, condition: 2 } },
      { text: "가족끼리 그러는 거 아니라는 우스갯소리처럼 자연스레 받아들인다.", scores: { mindset: 3, married_life: 2 } }
    ]},
    { q: "배우자는 원하는데 나는 너무 피곤해서 하고 싶지 않을 때?", opts: [
      { text: "단호하게 '오늘은 너무 피곤해, 내일 하자'고 거절한다.", scores: { condition: 4, mindset: 2 } },
      { text: "피곤하지만 상대를 실망시키기 싫어서 억지로라도 맞춰준다.", scores: { care: 4, intimacy: 1 } },
      { text: "키스나 가벼운 애무(손, 입 등)로 상대만이라도 만족시켜 준다.", scores: { intimacy: 3, care: 3 } },
      { text: "애교 있게 안기며 '오늘은 그냥 안고만 자자'며 무마한다.", scores: { romance: 3, communication: 3 } }
    ]},
    { q: "반대로 나는 폭발할 것 같은데 배우자가 피곤하다며 거절한다면?", opts: [
      { text: "내 매력이 떨어졌나 싶어 심하게 상처받고 삐진다.", scores: { condition: 2, care: 1 } },
      { text: "아쉽지만 어쩔 수 없다며 쿨하게 등 돌리고 잔다.", scores: { mindset: 4, condition: 2 } },
      { text: "집요하게 애교와 스킨십을 퍼부으며 기어코 흥분시킨다.", scores: { romance: 4, intimacy: 3 } },
      { text: "스스로 해결하거나 내일의 거사를 위해 푹 쉰다.", scores: { condition: 3, mindset: 1 } }
    ]},
    { q: "배우자의 테크닉이나 스킬에 대해 평가한다면?", opts: [
      { text: "너무 좋아서 매번 정신을 차릴 수 없다.", scores: { intimacy: 4, romance: 2 } },
      { text: "완벽하진 않아도 서로 맞춰가는 과정 자체가 즐겁다.", scores: { communication: 4, care: 2 } },
      { text: "솔직히 불만족스럽지만 상처받을까 봐 말은 못 하고 있다.", scores: { care: 3, condition: 1 } },
      { text: "내가 리드해서 내 입맛대로 가르치고 있는 중이다.", scores: { mindset: 4, intimacy: 2 } }
    ]},
    { q: "오르가즘(절정)을 연기해 본 적이 있는가?", opts: [
      { text: "상대의 기를 살려주기 위해 종종 과장하거나 연기한다.", scores: { care: 4, romance: 2 } },
      { text: "절대 연기하지 않는다. 못 느꼈으면 못 느꼈다고 솔직히 말한다.", scores: { communication: 4, mindset: 3 } },
      { text: "힘들어서 빨리 끝내고 싶을 때 연기한 적이 있다.", scores: { condition: 4, care: 1 } },
      { text: "나의 쾌감이 최우선이기에 연기할 이유가 전혀 없다.", scores: { intimacy: 3, mindset: 2 } }
    ]},
    { q: "여행지에서의 성관계는 평소와 어떻게 다른가?", opts: [
      { text: "낯선 환경이 주는 묘한 긴장감 덕분에 평소보다 훨씬 격렬해진다.", scores: { intimacy: 4, date: 3 } },
      { text: "풍경이 좋은 욕조에서 스파를 즐기며 여유롭고 로맨틱하게 즐긴다.", scores: { romance: 4, condition: 2 } },
      { text: "종일 돌아다녀서 피곤하므로 평소보다 덜 하거나 아예 안 한다.", scores: { condition: 4, married_life: 1 } },
      { text: "여행지라는 핑계로 평소 안 해본 새로운 시도를 맘껏 해본다.", scores: { date: 4, communication: 2 } }
    ]},
    { q: "생리 기간 중 스킨십이나 성적 욕구 해결은?", opts: [
      { text: "위생상 절대 금물이다. 완전히 끝날 때까지 쉰다.", scores: { condition: 4, mindset: 2 } },
      { text: "삽입은 피하되 다른 모든 방식(구강, 손 등)으로 욕구를 해결한다.", scores: { intimacy: 4, communication: 3 } },
      { text: "상관하지 않고 평소처럼 즐긴다 (혹은 샤워실에서 해결).", scores: { intimacy: 3, romance: 1 } },
      { text: "스킨십 대신 따뜻한 찜질과 마사지로 아내를 케어하는 데 집중한다.", scores: { care: 4, condition: 3 } }
    ]},
    { q: "성관계 도중 웃음이 터지거나 민망한 소리(방귀 등)가 났을 때?", opts: [
      { text: "엄청 무안해하며 분위기가 확 깨버린다.", scores: { condition: 2, mindset: 1 } },
      { text: "미친 듯이 같이 웃고 장난치다가 다시 분위기를 잡는다.", scores: { communication: 4, romance: 3 } },
      { text: "못 들은 척, 아무 일도 없었던 척 능청스럽게 계속한다.", scores: { intimacy: 3, mindset: 2 } },
      { text: "상대를 귀엽다며 안아주거나 이마에 뽀뽀해 무안함을 덜어준다.", scores: { care: 4, romance: 2 } }
    ]},
    { q: "임신 중이거나 출산 직후, 부부 관계의 변화에 대해?", opts: [
      { text: "아이에게 안 좋을까 봐 매우 조심스럽고 금욕적으로 변한다.", scores: { care: 3, condition: 3 } },
      { text: "의사의 허락 하에 안전한 체위로 꾸준히 스킨십을 유지한다.", scores: { communication: 4, intimacy: 2 } },
      { text: "아내의 몸의 변화(가슴 등)가 오히려 더 섹시하게 느껴진다.", scores: { intimacy: 4, romance: 2 } },
      { text: "육아의 피로도 때문에 성욕 자체가 뚝 떨어져서 생각이 안 난다.", scores: { condition: 4, married_life: 2 } }
    ]},
    { q: "당신에게 '섹스'란 결혼 생활에서 어떤 의미인가?", opts: [
      { text: "사랑을 확인하는 가장 중요하고 궁극적인 행위", scores: { intimacy: 4, romance: 3 } },
      { text: "신뢰와 유대감을 쌓아가는 깊은 소통의 언어", scores: { communication: 4, mindset: 3 } },
      { text: "일상의 스트레스를 풀고 에너지를 충전하는 놀이", scores: { condition: 3, date: 2 } },
      { text: "부부의 의무이자 종족 번식을 위한 과정 중 하나", scores: { married_life: 4, mindset: 2 } }
    ]}
  ],

  communication: [
    // 1-10: Conflict Resolution & Argument Style
    { q: "부부 싸움의 가장 큰 원인은 보통 무엇인가?", opts: [
      { text: "서로의 말투나 표정 등 사소한 태도 문제", scores: { communication: 2, mindset: 1 } },
      { text: "돈, 양가 부모님, 가사 등 현실적인 가치관 차이", scores: { married_life: 4, mindset: 2 } },
      { text: "연락 문제, 스킨십 부족 등 애정 표현에 대한 서운함", scores: { romance: 4, intimacy: 2 } },
      { text: "피곤함이나 스트레스로 인한 예민함의 충돌", scores: { condition: 4, care: 1 } }
    ]},
    { q: "다툴 때 당신의 주된 방어 기제는?", opts: [
      { text: "목소리가 커지고 내 주장을 논리적으로 쏟아붓는다.", scores: { mindset: 2, communication: 1 } },
      { text: "눈물부터 흘리며 나의 상처받은 감정을 호소한다.", scores: { care: 2, romance: 1 } },
      { text: "대화를 거부하고 방문을 닫거나 자리를 피해버린다.", scores: { condition: 2, mindset: 1 } },
      { text: "상대의 말을 듣는 둥 마는 둥 하며 핸드폰을 본다.", scores: { communication: 1, married_life: 1 } }
    ]},
    { q: "배우자가 화가 나서 소리를 지른다면 당신은?", opts: [
      { text: "나도 지지 않고 같이 소리를 지르며 맞불을 놓는다.", scores: { mindset: 1, condition: 1 } },
      { text: "차분하고 차가운 목소리로 논리적인 반박을 한다.", scores: { communication: 3, mindset: 3 } },
      { text: "상대가 진정할 때까지 아무 말 없이 듣고만 있는다.", scores: { care: 3, condition: 2 } },
      { text: "일단 안아주거나 미안하다고 하며 상황을 무마시킨다.", scores: { romance: 3, care: 3 } }
    ]},
    { q: "싸우다가 과거의 잘못(예전 일)을 끌어오는 편인가?", opts: [
      { text: "절대 아니다. 지금 당장의 문제에만 집중한다.", scores: { communication: 4, mindset: 4 } },
      { text: "비슷한 패턴이 반복되면 논리를 보강하기 위해 끌어온다.", scores: { mindset: 2, married_life: 2 } },
      { text: "감정이 격해지면 나도 모르게 서운했던 옛날 일이 다 튀어나온다.", scores: { care: 1, condition: 1 } },
      { text: "상대가 먼저 과거 얘기를 꺼내면 나도 지지 않고 꺼낸다.", scores: { communication: 1, condition: 1 } }
    ]},
    { q: "화해를 요청하는 가장 좋은 방법은?", opts: [
      { text: "'내가 미안해'라는 명확하고 진심 어린 직접적 사과", scores: { communication: 4, mindset: 3 } },
      { text: "좋아하는 음식이나 작은 선물을 쓱 내미는 귀여운 행동", scores: { care: 4, romance: 2 } },
      { text: "조용히 다가와서 등 뒤에서 백허그를 해주는 스킨십", scores: { intimacy: 4, romance: 3 } },
      { text: "서로 웃음을 터트리게 만드는 실없는 장난", scores: { date: 3, communication: 2 } }
    ]},
    { q: "배우자가 사과할 때 꼭 포함되어야 하는 요소는?", opts: [
      { text: "자신이 무엇을 잘못했는지 구체적으로 인지하는 것", scores: { communication: 4, mindset: 3 } },
      { text: "다시는 그러지 않겠다는 확실한 약속과 재발 방지 대책", scores: { married_life: 4, mindset: 2 } },
      { text: "변명 없이 온전히 내 감정에 공감하고 위로해주는 태도", scores: { care: 4, romance: 2 } },
      { text: "사과와 함께 애정이 담긴 키스나 따뜻한 포옹", scores: { intimacy: 4, romance: 3 } }
    ]},
    { q: "우리가 부부 싸움을 끝내는 시점은 언제인가?", opts: [
      { text: "어느 한쪽이 명백히 잘못을 인정하고 백기 투항할 때", scores: { mindset: 2, married_life: 1 } },
      { text: "대화로 서로의 입장을 100% 이해하고 합의점을 도출했을 때", scores: { communication: 4, mindset: 3 } },
      { text: "둘 다 지쳐서 '그만하자, 밥이나 먹자'며 일상으로 돌아갈 때", scores: { condition: 3, care: 2 } },
      { text: "같이 침대에 누워 스킨십을 하며 자연스럽게 풀릴 때", scores: { intimacy: 4, romance: 3 } }
    ]},
    { q: "서로 크게 다투어 냉전 상태(말 안 함)가 길어지면?", opts: [
      { text: "하루를 넘기지 못하고 내가 먼저 말을 걸어버린다.", scores: { care: 4, romance: 3 } },
      { text: "누가 이기나 보자는 식으로 끝까지 침묵으로 일관한다.", scores: { mindset: 1, condition: 1 } },
      { text: "메신저(카톡)로 장문의 편지를 보내 내 마음을 전달한다.", scores: { communication: 3, mindset: 2 } },
      { text: "각자 친구를 만나거나 취미를 즐기며 머리를 식히고 온다.", scores: { date: 3, condition: 3 } }
    ]},
    { q: "다툴 때 '이혼해', '헤어져' 등의 막말을 해본 적이 있는가?", opts: [
      { text: "절대 없다. 아무리 화나도 선을 넘는 말은 참는다.", scores: { communication: 4, mindset: 4 } },
      { text: "정말 끝내고 싶을 때 한 번 진지하게 말해본 적 있다.", scores: { married_life: 3, mindset: 2 } },
      { text: "너무 화가 나서 홧김에 내뱉은 적이 종종 있다.", scores: { care: 1, condition: 1 } },
      { text: "상대가 먼저 그 단어를 꺼내면 나도 맞받아친다.", scores: { communication: 1, mindset: 1 } }
    ]},
    { q: "화해 후 우리 부부의 패턴은?", opts: [
      { text: "비 온 뒤에 땅이 굳듯 평소보다 훨씬 더 끈적하고 애틋해진다.", scores: { intimacy: 4, romance: 4 } },
      { text: "이성적인 피드백 시간을 가지며 규칙을 정한다.", scores: { communication: 4, married_life: 3 } },
      { text: "다투느라 소모한 체력을 회복하기 위해 폭식하거나 푹 잔다.", scores: { condition: 4, care: 2 } },
      { text: "어색함을 풀기 위해 외식이나 야외 데이트를 나간다.", scores: { date: 4, romance: 2 } }
    ]},

    // 11-20: Daily Conversations & Expressing Love
    { q: "하루 일과를 마치고 만나면 대화의 주제는?", opts: [
      { text: "오늘 회사나 밖에서 있었던 일들을 시시콜콜 다 보고한다.", scores: { communication: 4, care: 3 } },
      { text: "저녁 메뉴, 주말 계획 등 실질적인 일정 위주로 말한다.", scores: { married_life: 4, date: 3 } },
      { text: "서로 보고 싶었다며 애정 표현과 장난을 친다.", scores: { romance: 4, intimacy: 3 } },
      { text: "피곤해서 말수를 아끼고 각자 조용히 쉰다.", scores: { condition: 4, mindset: 2 } }
    ]},
    { q: "배우자에게 비밀을 얼마나 털어놓는 편인가?", opts: [
      { text: "내 부끄러운 과거, 은행 잔고 등 100% 모든 것을 투명하게 공유한다.", scores: { communication: 4, married_life: 3 } },
      { text: "불필요한 걱정을 끼칠 것 같은 이야기는 알아서 걸러서 한다.", scores: { care: 4, mindset: 2 } },
      { text: "부부라도 완벽히 독립된 자아라 생각하며 개인 프라이버시는 철저히 지킨다.", scores: { mindset: 4, condition: 2 } },
      { text: "배우자가 묻는 것에만 정직하게 대답한다.", scores: { communication: 2, condition: 2 } }
    ]},
    { q: "배우자가 내 말에 공감해주길 바랄 때 기대하는 리액션은?", opts: [
      { text: "눈을 맞추며 '정말 속상했겠다'라고 감정에 깊이 동조해주는 것", scores: { care: 4, romance: 3 } },
      { text: "묵묵히 이야기를 들어주며 내 편을 들어 욕해주는 것", scores: { communication: 3, care: 3 } },
      { text: "말없이 꽉 안아주거나 손을 잡아주는 따뜻한 스킨십", scores: { intimacy: 4, condition: 2 } },
      { text: "정확한 상황 판단 후 객관적이고 현실적인 조언을 해주는 것", scores: { mindset: 4, married_life: 3 } }
    ]},
    { q: "배우자에게 사랑한다는 말을 가장 자주 하는 순간은?", opts: [
      { text: "아침에 일어날 때나 출근하기 전 입맞춤과 함께", scores: { romance: 4, intimacy: 3 } },
      { text: "맛있는 요리를 해주거나 나를 챙겨주는 것에 감동받았을 때", scores: { care: 4, married_life: 2 } },
      { text: "침대 위에서 깊은 관계를 나누는 가장 은밀한 순간", scores: { intimacy: 4, romance: 2 } },
      { text: "특별한 이유 없이 문득 상대가 예뻐(멋져) 보일 때", scores: { date: 3, communication: 4 } }
    ]},
    { q: "서로 부르는 애칭(호칭)에 대하여?", opts: [
      { text: "'여보, 당신' 같은 정석적인 부부 호칭을 쓴다.", scores: { married_life: 3, mindset: 2 } },
      { text: "'오빠, 자기야' 등 연애 때 쓰던 호칭을 그대로 쓴다.", scores: { romance: 4, date: 2 } },
      { text: "우리 둘만 아는 유치하고 귀여운 특별한 애칭이 있다.", scores: { intimacy: 3, communication: 3 } },
      { text: "'야, 누구누구야' 하며 친구처럼 편하게 부른다.", scores: { date: 2, communication: 2 } }
    ]},
    { q: "메신저(카톡) 연락의 빈도와 스타일은?", opts: [
      { text: "시간이 날 때마다 시시콜콜한 농담과 짤방을 보내며 쉴 새 없이 떠든다.", scores: { communication: 4, date: 3 } },
      { text: "업무 시간에는 중요한 용건만 간단히 보내고 방해하지 않는다.", scores: { mindset: 4, condition: 3 } },
      { text: "뜬금없이 '보고 싶어', '사랑해' 등 로맨틱한 이모티콘을 보낸다.", scores: { romance: 4, intimacy: 2 } },
      { text: "점심시간이나 퇴근 시간에 맞춰 안부 전화나 영통을 짧게 한다.", scores: { care: 3, married_life: 2 } }
    ]},
    { q: "배우자가 당신의 단점이나 실수를 지적한다면?", opts: [
      { text: "인정하기 싫어서 핑계를 대거나 오히려 화를 낸다.", scores: { communication: 1, mindset: 1 } },
      { text: "기분은 나쁘지만 이성적으로 판단해 맞는 말이면 수용한다.", scores: { mindset: 4, married_life: 3 } },
      { text: "상처받아서 하루 종일 시무룩해져 있는다.", scores: { care: 1, condition: 1 } },
      { text: "애교를 부리며 '한 번만 봐주세요~' 하고 넉살 좋게 넘긴다.", scores: { romance: 4, communication: 2 } }
    ]},
    { q: "대화 중 가치관이 팽팽하게 맞서 결론이 안 날 때?", opts: [
      { text: "어느 한쪽이 설득될 때까지 밤새도록 토론한다.", scores: { communication: 3, married_life: 2 } },
      { text: "서로 다름을 쿨하게 인정하고 그 주제는 덮어둔다.", scores: { mindset: 4, condition: 3 } },
      { text: "관계가 상하는 것이 싫어서 그냥 내가 져주고 만다.", scores: { care: 3, condition: 1 } },
      { text: "전문가나 객관적인 자료를 찾아보고 이성적으로 결판을 낸다.", scores: { married_life: 4, mindset: 3 } }
    ]},
    { q: "배우자가 무언가에 실패하거나 크게 좌절했을 때 당신의 위로 방식은?", opts: [
      { text: "'다 잘 될 거야'라며 긍정적인 말로 끊임없이 응원해준다.", scores: { communication: 4, romance: 2 } },
      { text: "말없이 안아주고 토닥이며 마음껏 울 수 있게 어깨를 내어준다.", scores: { care: 4, intimacy: 3 } },
      { text: "맛있는 음식과 선물을 준비해 기분 전환을 시켜준다.", scores: { date: 4, care: 2 } },
      { text: "실패를 만회할 수 있도록 해결책을 찾아주고 이성적인 플랜을 세워준다.", scores: { married_life: 4, mindset: 3 } }
    ]},
    { q: "나를 향한 배우자의 잔소리에 대한 생각은?", opts: [
      { text: "나를 사랑하고 챙겨주기 때문이라고 긍정적으로 생각한다.", scores: { care: 4, romance: 2 } },
      { text: "듣기 싫고 스트레스 받아서 잔소리할 일을 아예 안 만든다.", scores: { condition: 3, mindset: 2 } },
      { text: "잔소리할 때마다 뽀뽀로 입을 막아버리며 장난친다.", scores: { intimacy: 4, romance: 3 } },
      { text: "논리적으로 내 행동의 타당성을 설명하며 잔소리를 차단한다.", scores: { communication: 2, mindset: 3 } }
    ]},
    
    // 21-30: In-laws, Money & Long-term Goals
    { q: "양가 부모님(시댁, 처가) 문제로 의견 충돌이 생길 때?", opts: [
      { text: "내 부모님 일은 내가 알아서 컷하고 배우자를 무조건 보호한다.", scores: { care: 4, married_life: 4 } },
      { text: "부부의 서운함을 숨기지 않고 털어놓으며 명확한 선(Boundary)을 정한다.", scores: { communication: 4, mindset: 3 } },
      { text: "한 귀로 듣고 한 귀로 흘리며 웬만하면 좋은 게 좋은 거라 맞춰준다.", scores: { condition: 2, care: 2 } },
      { text: "그날은 밖에서 데이트하며 기분 전환을 하고 부모님 얘기는 금지한다.", scores: { date: 3, romance: 2 } }
    ]},
    { q: "큰 돈을 써야 하는 결정을 할 때 (자동차 구매, 주식 투자 등)?", opts: [
      { text: "서로 완벽하게 엑셀을 켜놓고 가성비와 미래 가치를 철저히 분석한다.", scores: { married_life: 4, mindset: 3 } },
      { text: "평소 경제관념이 더 좋은 사람의 결정을 100% 믿고 따른다.", scores: { care: 3, condition: 2 } },
      { text: "그것이 우리 부부에게 얼마나 큰 낭만과 행복을 줄지만 생각한다.", scores: { romance: 4, date: 3 } },
      { text: "돈 문제로 싸우기 싫으니 각자 비자금 안에서 알아서 해결한다.", scores: { mindset: 2, condition: 2 } }
    ]},
    { q: "배우자의 술버릇이나 특정 습관이 거슬릴 때?", opts: [
      { text: "진지하게 정색하고 각서나 규칙을 정해 강제한다.", scores: { married_life: 3, mindset: 2 } },
      { text: "술 깬 다음 날 부드럽게 타일러 미안함을 유발한다.", scores: { communication: 4, care: 3 } },
      { text: "잔소리하기 지쳐서 그냥 그러려니 포기하고 둔다.", scores: { condition: 2, mindset: 1 } },
      { text: "나도 똑같은 행동을 해서 거울 치료를 시켜버린다.", scores: { communication: 1, date: 1 } }
    ]},
    { q: "집안일 분담에 불만이 생겨 대화가 필요할 때?", opts: [
      { text: "가사노동 리스트를 적어 공평하게 재분배하자고 제안한다.", scores: { married_life: 4, communication: 3 } },
      { text: "'나 너무 힘들어, 한 번만 도와주라'고 애교 있게 부탁한다.", scores: { romance: 3, care: 3 } },
      { text: "말하기 귀찮아서 그냥 내가 조금 무리해서 묵묵히 다 해버린다.", scores: { care: 2, condition: 1 } },
      { text: "돈을 써서 가전제품(식기세척기, 로봇청소기)을 사거나 가사 도우미를 부른다.", scores: { mindset: 4, condition: 3 } }
    ]},
    { q: "미래 자녀 교육관에 대해 대화할 때?", opts: [
      { text: "무조건 학벌보다는 사랑 듬뿍 받고 행복하게 크는 게 최고다.", scores: { romance: 3, care: 4 } },
      { text: "부부의 삶이 1순위이고 자녀는 2순위라는 독립적인 철학을 나눈다.", scores: { mindset: 4, intimacy: 3 } },
      { text: "전문 서적과 다큐멘터리를 보며 훌륭하게 키울 계획을 토론한다.", scores: { communication: 3, married_life: 4 } },
      { text: "자녀 문제보다 당장 우리 부부의 노후 자금과 건강부터 챙긴다.", scores: { condition: 3, married_life: 3 } }
    ]},
    { q: "명절 연휴, 우리 부부가 가장 원하는 휴식 방식은?", opts: [
      { text: "양가 방문은 최소화하고 비행기를 타고 해외로 로맨틱한 도피를 간다.", scores: { date: 4, romance: 4 } },
      { text: "집 밖으로 한 발짝도 나가지 않고 잠옷 차림으로 넷플릭스 정주행.", scores: { condition: 4, intimacy: 2 } },
      { text: "의무를 다하기 위해 부모님 댁에 방문 후, 저녁엔 우리끼리 한잔하며 회포를 푼다.", scores: { married_life: 4, communication: 3 } },
      { text: "친척들과 윷놀이를 하거나 다 같이 북적이며 즐겁게 보낸다.", scores: { communication: 3, date: 2 } }
    ]},
    { q: "나이가 60대가 되었을 때 우리 부부의 모습을 상상한다면?", opts: [
      { text: "여전히 길에서 손을 꼭 잡고 다니는 잉꼬부부", scores: { romance: 4, intimacy: 3 } },
      { text: "서로 눈빛만 봐도 척척 맞는 완벽한 노부부", scores: { communication: 4, married_life: 3 } },
      { text: "각자의 취미 활동(등산, 골프)을 존중하며 여유롭게 사는 삶", scores: { mindset: 4, condition: 3 } },
      { text: "자식들 다 키워놓고 전원주택에서 개를 키우며 안락하게 쉬는 삶", scores: { care: 3, condition: 4 } }
    ]},
    { q: "배우자 몰래 산 비싼 물건(게임기, 명품 등)을 들켰다면?", opts: [
      { text: "당당하게 내 비자금으로 샀다고 이성적으로 방어한다.", scores: { mindset: 3, married_life: 1 } },
      { text: "무릎 꿇고 폭풍 애교를 부리며 한 번만 봐달라고 빈다.", scores: { romance: 4, care: 2 } },
      { text: "배우자의 몫으로 더 비싼 선물을 사주며 입을 막는다.", scores: { date: 3, communication: 3 } },
      { text: "실수였다며 당장 중고나라에 팔겠다고 싹싹 빈다.", scores: { married_life: 3, condition: 1 } }
    ]},
    { q: "우리 부부가 가장 진지해지는 대화 주제는?", opts: [
      { text: "내 집 마련, 대출 상환, 승진 등 철저히 현실적인 목표", scores: { married_life: 4, mindset: 3 } },
      { text: "서로의 건강 검진 결과나 최근 겪고 있는 육체적 피로도", scores: { condition: 4, care: 4 } },
      { text: "최근 부부 관계(성생활)의 만족도와 새로운 시도에 대한 고민", scores: { intimacy: 4, communication: 3 } },
      { text: "인생의 가치관, 종교, 정치 등 깊이 있는 철학적 사유", scores: { mindset: 4, communication: 4 } }
    ]},
    { q: "배우자에게 하고 싶은 가장 완벽한 감사의 표현은?", opts: [
      { text: "'당신은 내 인생 최고의 선물이야'라는 진심 어린 칭찬", scores: { communication: 4, romance: 4 } },
      { text: "통장 잔고를 보여주며 '이거 당신 마음대로 써'라고 하는 서프라이즈", scores: { married_life: 4, care: 3 } },
      { text: "최고급 스파가 포함된 럭셔리 호캉스 패키지 예약", scores: { date: 4, condition: 3 } },
      { text: "정성을 다해 차린 따뜻한 밥상과 뭉친 어깨를 주물러주는 마사지", scores: { care: 4, condition: 4 } }
    ]}
  ],

  date: [
    // Will be generated in next prompt, initializing with empty for now.
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
    ]}
  ]
};

// Fill remaining categories with placeholders to expand later.
categoryTests.married_life = [];
categoryTests.mindset = [];
categoryTests.condition = [];
categoryTests.future_child = [];
categoryTests.love_methods = [];
