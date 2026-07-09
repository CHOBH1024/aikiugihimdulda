// Extension of categoryTests object
categoryTests.future_child = [
  // 1-10: Planning & Vision
  { q: "자녀 계획(출산)에 대한 우리 부부의 현재 입장은?", opts: [
    { text: "우리 둘만으로 충분히 행복하므로 딩크(DINK)를 선호한다.", scores: { mindset: 4, romance: 3 } },
    { text: "아직은 부부만의 신혼을 더 즐기고 나중에 천천히 생각하고 싶다.", scores: { date: 4, intimacy: 3 } },
    { text: "경제적 조건과 주거 환경이 완벽히 준비되었을 때 낳고 싶다.", scores: { married_life: 4, mindset: 3 } },
    { text: "하늘이 허락하는 대로 최대한 빨리 예쁜 아기를 갖고 싶다.", scores: { care: 4, condition: 3 } }
  ]},
  { q: "미래의 아이가 누구를 닮았으면 좋겠는가?", opts: [
    { text: "내 똑똑한 머리와 배우자의 예쁜 외모 등 장점만 쏙 빼닮았으면!", scores: { date: 3, romance: 2 } },
    { text: "무조건 100% 배우자를 똑 닮은 미니미를 보고 싶다.", scores: { romance: 4, intimacy: 3 } },
    { text: "누굴 닮든 건강하고 바르게만 자라주면 소원이 없다.", scores: { care: 4, condition: 4 } },
    { text: "외모보다는 우리의 유머 감각과 낙천적인 성격을 닮길 바란다.", scores: { communication: 4, mindset: 3 } }
  ]},
  { q: "임신 중 부부 관계(성생활)에 대한 당신의 생각은?", opts: [
    { text: "혹시라도 아기에게 안 좋을까 봐 매우 조심스럽거나 피하게 될 것 같다.", scores: { care: 4, condition: 3 } },
    { text: "안정기에는 의사 허락 하에 부드럽고 달콤하게 즐길 수 있다.", scores: { communication: 4, intimacy: 3 } },
    { text: "체형이 변한 배우자의 모습이 낯설지만 숭고하고 아름답게 느껴질 것이다.", scores: { romance: 4, mindset: 3 } },
    { text: "임신 중 분비되는 호르몬 덕분에 오히려 더 야릇하고 색다른 자극이 될 수 있다.", scores: { intimacy: 4, romance: 3 } }
  ]},
  { q: "태어날 아이의 성별에 대한 희망은?", opts: [
    { text: "배우자를 닮은 예쁘고 애교 많은 딸바보가 되고 싶다.", scores: { romance: 4, date: 2 } },
    { text: "나와 듬직하게 목욕탕을 가고 공놀이를 할 수 있는 아들이 좋다.", scores: { communication: 3, date: 2 } },
    { text: "성별은 전혀 상관없다. 건강하게만 태어나 주면 된다.", scores: { care: 4, mindset: 4 } },
    { text: "아들 하나, 딸 하나 낳아서 시끌벅적하고 화목한 가정을 꾸리고 싶다.", scores: { married_life: 4, condition: 3 } }
  ]},
  { q: "아이를 키울 때 가장 중요하게 생각하는 교육 가치관은?", opts: [
    { text: "명문대에 보내기 위한 철저하고 엘리트적인 조기 교육과 지원", scores: { married_life: 4, mindset: 3 } },
    { text: "예의범절과 도덕성을 갖춘 바른 인성 교육", scores: { care: 4, communication: 3 } },
    { text: "다치면서 배우는 자연 속 체험과 자유롭고 창의적인 놀이", scores: { date: 4, romance: 3 } },
    { text: "아이의 선택을 무조건 존중해 주는 방목형 자율 교육", scores: { mindset: 4, condition: 3 } }
  ]},
  { q: "육아(독박 육아 등)로 인해 부부 싸움이 발생할 경우?", opts: [
    { text: "싸움이 커지기 전에 가사 도우미나 베이비시터를 고용해 돈으로 해결한다.", scores: { married_life: 4, condition: 3 } },
    { text: "아이 앞에서는 절대 싸우지 않고 애들 재운 뒤 조용히 대화로 푼다.", scores: { communication: 4, mindset: 4 } },
    { text: "피곤해서 그런 거니 배우자를 하루 온전히 쉬게 해주고 내가 육아를 전담한다.", scores: { care: 4, condition: 4 } },
    { text: "울면서 내 고충을 토로하고 상대의 미안함을 이끌어낸다.", scores: { romance: 2, condition: 1 } }
  ]},
  { q: "육아 휴직에 대한 우리 부부의 계획은?", opts: [
    { text: "당연히 엄마가 주양육자가 되어 1년 이상 길게 쉬는 것이 맞다.", scores: { care: 3, married_life: 2 } },
    { text: "엄마, 아빠가 반반씩 눈치 안 보고 똑같이 육아 휴직을 써서 공동 육아를 한다.", scores: { mindset: 4, communication: 4 } },
    { text: "경제적 타격을 최소화하기 위해 연봉이 낮은 쪽이 쉬는 것이 합리적이다.", scores: { married_life: 4, mindset: 3 } },
    { text: "양가 부모님께 용돈을 듬뿍 드리고 도움을 요청하며 우리는 일을 계속한다.", scores: { condition: 4, date: 2 } }
  ]},
  { q: "아이가 태어난 후, 주말의 일상은 어떻게 바뀔까?", opts: [
    { text: "키즈카페나 놀이공원을 다니며 아이 위주의 체력전이 시작된다.", scores: { care: 4, date: 3 } },
    { text: "피곤해서 주말엔 무조건 온 가족이 배달 음식 시키고 낮잠만 잘 것 같다.", scores: { condition: 4, married_life: 2 } },
    { text: "아이를 친정에 잠시 맡기고 어떻게든 둘만의 데이트 시간을 사수한다.", scores: { romance: 4, intimacy: 3 } },
    { text: "아이는 아이대로 놀게 두고 우리는 거실에서 밀린 예능이나 볼 것이다.", scores: { mindset: 3, condition: 3 } }
  ]},
  { q: "아이가 배우자에게 심하게 버릇없이 굴거나 화를 낼 때?", opts: [
    { text: "어디서 감히 내 배우자에게 화를 내냐며 무섭게 아이를 혼낸다.", scores: { romance: 4, care: 3 } },
    { text: "이성적으로 아이의 잘못을 짚어주고 훈육의 시간을 가진다.", scores: { mindset: 4, communication: 3 } },
    { text: "아직 애니까 그럴 수 있다며 배우자에게 참으라고 달랜다.", scores: { condition: 2, married_life: 2 } },
    { text: "아이의 입장에서 억울한 감정을 먼저 공감해주고 중재한다.", scores: { communication: 4, care: 3 } }
  ]},
  { q: "아이가 잠든 밤, 부부만의 육아 퇴근(육퇴) 후 시간은?", opts: [
    { text: "무조건 야식을 시켜놓고 맥주 한잔하며 오늘 겪은 육아 스트레스를 푼다.", scores: { date: 4, communication: 4 } },
    { text: "아이 깰까 봐 숨죽이며 조심스럽게 둘만의 은밀한 스킨십을 즐긴다.", scores: { intimacy: 4, romance: 4 } },
    { text: "서로 고생했다며 어깨를 주물러주다 피곤함에 기절하듯 같이 곯아떨어진다.", scores: { condition: 4, care: 4 } },
    { text: "각자 밀린 핸드폰을 하거나 취미 생활을 하며 개인 충전의 시간을 갖는다.", scores: { mindset: 4, married_life: 3 } }
  ]},

  // 11-20: Sacrifices & Realities of Parenting
  { q: "자녀의 조기 유학 문제, 배우자가 기러기 생활(떨어져 지냄)을 요구한다면?", opts: [
    { text: "부부는 무조건 같이 살아야 한다. 아이 교육 때문에 떨어지는 건 반대다.", scores: { romance: 4, intimacy: 4 } },
    { text: "아이의 미래를 위해 기꺼이 감수하고 경제적 백업을 자처한다.", scores: { married_life: 4, care: 3 } },
    { text: "방학마다 무조건 만나러 가는 조건으로 이성적으로 합의한다.", scores: { mindset: 4, communication: 3 } },
    { text: "혼자만의 자유를 만끽할 생각에 속으로는 내심 쾌재를 부른다.", scores: { condition: 4, date: 2 } }
  ]},
  { q: "아이가 크면서 배우자의 애정과 관심이 아이에게만 100% 쏠린다면?", opts: [
    { text: "내심 심하게 질투하고 소외감을 느끼며 우울해질 것 같다.", scores: { romance: 4, intimacy: 3 } },
    { text: "나도 아이에게 푹 빠져서 부부 둘 다 지독한 자식 바보가 된다.", scores: { care: 4, married_life: 3 } },
    { text: "'여보 나도 좀 예뻐해 줘~'라며 칭얼대고 애교로 시선을 돌린다.", scores: { communication: 4, date: 3 } },
    { text: "오히려 나한테 잔소리 안 해서 편하다며 각자의 역할에 충실한다.", scores: { mindset: 4, condition: 3 } }
  ]},
  { q: "산후 우울증으로 배우자가 힘들어한다면 당신의 대처법은?", opts: [
    { text: "모든 핑계를 대고 휴직하거나 일찍 퇴근해서 절대적으로 육아를 돕는다.", scores: { care: 4, married_life: 4 } },
    { text: "비싸더라도 전문 산후도우미나 상담 센터를 예약해 전문가의 도움을 받는다.", scores: { mindset: 4, condition: 3 } },
    { text: "주말마다 배우자에게 자유 부인/남편 시간을 주어 외출하게 해준다.", scores: { date: 4, condition: 4 } },
    { text: "밤마다 꼭 끌어안고 당신이 얼마나 훌륭한 사람인지 진심을 다해 위로한다.", scores: { communication: 4, romance: 4 } }
  ]},
  { q: "아이의 성교육 문제, 언제 어떻게 가르칠 것인가?", opts: [
    { text: "유치원 때부터 아주 솔직하고 학술적인 명칭으로 피임까지 정확히 가르친다.", scores: { mindset: 4, communication: 4 } },
    { text: "어차피 학교에서 다 배울 텐데 민망하니 굳이 부부가 나서지 않는다.", scores: { condition: 2, married_life: 2 } },
    { text: "엄마는 딸, 아빠는 아들을 맡아 동성끼리 은밀하게 상담해 준다.", scores: { care: 3, married_life: 3 } },
    { text: "부부의 스킨십이나 애정 표현을 숨기지 않고 보여주어 사랑을 자연스레 배우게 한다.", scores: { intimacy: 4, romance: 4 } }
  ]},
  { q: "아이가 사춘기가 되어 방문을 닫고 부모를 거부할 때?", opts: [
    { text: "강제로 문을 열거나 화를 내며 부모의 권위로 억누른다.", scores: { married_life: 1, condition: 1 } },
    { text: "그럴 나이라며 쿨하게 냅두고 우리 부부끼리의 데이트를 즐긴다.", scores: { mindset: 4, date: 4 } },
    { text: "상처받아서 배우자 품에서 몰래 눈물을 훔친다.", scores: { romance: 3, care: 2 } },
    { text: "아이가 좋아하는 간식을 문 앞에 두고 묵묵히 기다려주는 끈기를 발휘한다.", scores: { care: 4, communication: 3 } }
  ]},
  { q: "아이가 '동생을 낳아주세요'라고 조른다면?", opts: [
    { text: "아이가 외로운 것 같아 무리해서라도 둘째 계획을 진지하게 세운다.", scores: { care: 4, married_life: 3 } },
    { text: "경제적/체력적 상황표를 아이에게 보여주며 논리적으로 거절한다.", scores: { mindset: 4, communication: 3 } },
    { text: "'엄마 아빠가 밤에 얼마나 바쁜지 알아?'라며 농담으로 넘긴다.", scores: { intimacy: 3, romance: 3 } },
    { text: "반려견(강아지나 고양이)을 입양해서 동생을 대신하게 한다.", scores: { date: 3, condition: 3 } }
  ]},
  { q: "부부가 사랑을 나누는(성관계) 도중 아이가 깬다면?", opts: [
    { text: "소스라치게 놀라 바로 중단하고 아이를 달래러 달려간다.", scores: { care: 4, condition: 3 } },
    { text: "이불을 덮어쓰거나 숨소리를 죽이고 끝까지 거사를 치른다.", scores: { intimacy: 4, romance: 3 } },
    { text: "서로 눈을 마주치며 민망함에 빵 터져서 웃어버린다.", scores: { communication: 4, date: 3 } },
    { text: "어차피 못 멈추니 문을 잠가놓은 상태라면 그냥 하던 것에 집중한다.", scores: { mindset: 3, intimacy: 2 } }
  ]},
  { q: "아이가 심하게 아파서 응급실에 가야 하는 긴박한 상황?", opts: [
    { text: "너무 놀라 울고 멘붕이 오지만 배우자가 하자는 대로 따른다.", scores: { romance: 2, condition: 1 } },
    { text: "침착하게 119를 부르고 응급실 동선을 파악하며 진두지휘한다.", scores: { mindset: 4, married_life: 4 } },
    { text: "아이를 품에 안고 괜찮다며 끊임없이 기도하고 토닥인다.", scores: { care: 4, communication: 3 } },
    { text: "내가 운전대를 잡고 신호위반을 불사하며 짐승처럼 질주한다.", scores: { date: 2, married_life: 2 } }
  ]},
  { q: "결혼 생활에서 육아의 의미는 당신에게 무엇인가?", opts: [
    { text: "나를 버리고 희생해야 하는 끝없는 고행이자 인내의 시간", scores: { condition: 3, married_life: 2 } },
    { text: "배우자와 나를 반반씩 섞은 기적을 키워나가는 위대한 사랑의 결실", scores: { romance: 4, intimacy: 4 } },
    { text: "미성숙한 내가 부모가 되며 인간으로서 한 단계 성장하는 수련장", scores: { mindset: 4, care: 4 } },
    { text: "아이와 함께 놀고 여행하며 인생을 2회차로 즐기는 신나는 모험", scores: { date: 4, communication: 4 } }
  ]},
  { q: "아이가 자라서 어떤 부부로 기억해 주길 바라는가?", opts: [
    { text: "엄마 아빠처럼 서로 사랑하고 아끼며 살고 싶다는 롤모델", scores: { romance: 4, intimacy: 4 } },
    { text: "친구처럼 장난치고 대화가 끊이지 않던 유쾌하고 재밌는 부부", scores: { communication: 4, date: 4 } },
    { text: "한 번도 싸우지 않고 언제나 다정하고 예의 바르던 완벽한 부부", scores: { care: 4, mindset: 3 } },
    { text: "경제적으로나 심리적으로나 늘 든든하고 기댈 수 있었던 산 같은 부모", scores: { married_life: 4, condition: 4 } }
  ]},

  // 21-30: Identity as Parents
  { q: "아이를 위한 교육비를 마련하느라 우리 부부의 여가 비용을 줄여야 한다면?", opts: [
    { text: "자식 교육이 최우선이므로 당연히 우리 부부의 씀씀이를 대폭 줄인다.", scores: { care: 4, married_life: 4 } },
    { text: "아이 교육도 중요하지만, 우리 부부의 행복과 취미 생활도 포기할 수 없다.", scores: { mindset: 4, date: 3 } },
    { text: "줄이긴 하겠지만 가끔씩은 몰래 우리끼리 비싼 걸 사 먹고 데이트한다.", scores: { romance: 3, communication: 3 } },
    { text: "맞벌이를 더 열심히 하거나 투잡을 뛰어서라도 두 마리 토끼를 다 잡는다.", scores: { condition: 4, married_life: 3 } }
  ]},
  { q: "배우자가 육아 우울증으로 부부 관계(성생활)를 지속적으로 피한다면?", opts: [
    { text: "상처받고 서운해하며 나도 모르게 짜증과 화를 내게 된다.", scores: { condition: 2, mindset: 1 } },
    { text: "이성적인 대화를 통해 원인을 파악하고 분위기 전환을 위한 상담을 제안한다.", scores: { communication: 4, mindset: 4 } },
    { text: "육아의 짐을 덜어주기 위해 집안일을 도맡아 하고, 마사지로 육체적 피로를 풀어준다.", scores: { care: 4, condition: 4 } },
    { text: "성적인 부담을 주지 않고 그저 옆에서 꼭 껴안고 자며 신뢰와 안정감을 준다.", scores: { intimacy: 3, romance: 4 } }
  ]},
  { q: "아이가 잠든 후, 단 둘이 영화 한 편을 볼 수 있는 기회가 생겼다. 장르는?", opts: [
    { text: "그동안 육아로 지친 몸과 마음을 달래줄 잔잔하고 감동적인 드라마", scores: { condition: 4, care: 3 } },
    { text: "스트레스를 날려버릴 화끈하고 통쾌한 액션이나 좀비물", scores: { date: 4, mindset: 3 } },
    { text: "잊고 있던 서로의 세포를 깨워줄 아찔하고 관능적인 19금 성인 영화", scores: { intimacy: 4, romance: 4 } },
    { text: "영화를 보다가 10분 만에 서로 어깨에 기대어 피곤함에 기절해 버린다.", scores: { married_life: 3, condition: 4 } }
  ]},
  { q: "배우자의 육아 방식(훈육 등)에 동의하지 않을 때?", opts: [
    { text: "아이 앞이라도 바로 지적하고 내 방식이 맞다고 강력하게 주장한다.", scores: { mindset: 2, communication: 1 } },
    { text: "일단 배우자의 권위를 세워주고 아이가 없는 곳에서 진지하게 조율한다.", scores: { married_life: 4, communication: 4 } },
    { text: "배우자에게 맡겼으면 끝까지 참견하지 않고 묵묵히 지원만 한다.", scores: { care: 3, condition: 3 } },
    { text: "서로 화가 나서 싸우다가 결국 아이가 눈치를 보며 중재하게 된다.", scores: { condition: 1, romance: 1 } }
  ]},
  { q: "아이가 독립하고 텅 빈 집(빈 둥지 증후군)에 둘만 남았을 때 첫 계획은?", opts: [
    { text: "집 안 구석구석을 둘만의 성인용 플레이룸이나 취미방으로 완전히 개조한다.", scores: { intimacy: 4, date: 4 } },
    { text: "아이 키우느라 못 갔던 세계 여행을 계획하며 제2의 로맨틱 신혼을 즐긴다.", scores: { romance: 4, date: 4 } },
    { text: "적적함을 달래줄 귀여운 강아지나 고양이를 입양해서 새 생기를 불어넣는다.", scores: { care: 4, communication: 3 } },
    { text: "각자의 노후 자산을 점검하고 시골 전원주택 등 평화로운 여생을 세팅한다.", scores: { married_life: 4, mindset: 4 } }
  ]},
  { q: "부모가 되면서 포기해야만 했던 '나의 가장 소중한 것'은?", opts: [
    { text: "아침 늦게까지 맘 편히 잘 수 있었던 꿀 같은 수면과 체력", scores: { condition: 4, care: 3 } },
    { text: "내 월급을 오롯이 나만을 위해 꾸미고 쇼핑할 수 있었던 재정적 여유", scores: { mindset: 3, married_life: 3 } },
    { text: "배우자와 단둘이 시선 신경 안 쓰고 훌쩍 떠날 수 있었던 짜릿한 데이트", scores: { romance: 4, date: 4 } },
    { text: "조용히 차 한잔하며 사색에 잠길 수 있었던 나만의 온전한 고독", scores: { communication: 3, mindset: 4 } }
  ]},
  { q: "명절에 아이를 친척들에게 맡기고 단 3시간의 꿀 같은 자유가 생겼다면?", opts: [
    { text: "가까운 모텔 대실이라도 해서 폭풍 같은 둘만의 스킨십을 즐긴다.", scores: { intimacy: 4, romance: 4 } },
    { text: "예쁜 카페에 가서 밀린 수다를 떨며 연애 시절 기분을 낸다.", scores: { communication: 4, date: 4 } },
    { text: "찜질방이나 마사지 샵에 가서 서로의 피로를 푸는 데 집중한다.", scores: { condition: 4, care: 4 } },
    { text: "시간 아까우니 마트에서 필요한 생필품이나 장을 후딱 보고 온다.", scores: { married_life: 4, mindset: 2 } }
  ]},
  { q: "아이가 우연히 부부의 성관계(혹은 애정행각)를 목격했다면?", opts: [
    { text: "엄청난 수치심과 죄책감에 빠져 당분간 스킨십을 전면 중단한다.", scores: { condition: 2, care: 2 } },
    { text: "자연스럽게 '엄마 아빠가 서로 너무 사랑해서 안아주는 거야'라고 설명한다.", scores: { communication: 4, mindset: 4 } },
    { text: "당황해서 아무 말도 못 하고 얼굴만 빨개져 쫓아낸다.", scores: { romance: 2, condition: 1 } },
    { text: "아이가 트라우마를 안 갖도록 나중에 과학적인 성교육 동화책을 사서 읽어준다.", scores: { married_life: 4, care: 3 } }
  ]},
  { q: "육아 동지로서 배우자에게 주고 싶은 상표(칭호)는?", opts: [
    { text: "멘탈이 무너지지 않게 꽉 잡아주는 든든한 '정신적 지주 상'", scores: { mindset: 4, communication: 4 } },
    { text: "기저귀 갈기와 놀아주기의 신, '슈퍼 엄빠(육아 달인) 상'", scores: { care: 4, married_life: 4 } },
    { text: "힘들 때마다 웃겨주고 기분 풀어주는 '최고의 엔돌핀 메이커 상'", scores: { date: 4, romance: 4 } },
    { text: "아이 엄마/아빠 이전에 여전히 나를 떨리게 하는 '치명적 연인 상'", scores: { intimacy: 4, romance: 4 } }
  ]},
  { q: "아이가 '엄마랑 아빠 중에 누가 더 좋아?'라고 묻는다면?", opts: [
    { text: "당연히 '너보다 엄마(아빠)가 더 좋아!'라고 배우자 편을 든다.", scores: { romance: 4, intimacy: 3 } },
    { text: "'우리 강아지(아이)가 세상에서 제일 좋지~'라며 뽀뽀를 퍼붓는다.", scores: { care: 4, condition: 2 } },
    { text: "'엄마 아빠는 한 몸이라 똑같이 사랑해'라며 외교적인 정답을 내놓는다.", scores: { communication: 4, mindset: 3 } },
    { text: "장난스럽게 '음... 아빠가 돈 많이 벌어오니까 아빠!'라며 유머로 넘긴다.", scores: { date: 3, married_life: 3 } }
  ]}
];

categoryTests.love_methods = [
  // 1-10: Acts of Service & Gifts
  { q: "사랑을 표현하는 방식 중 당신이 가장 감동받는 행동(5가지 사랑의 언어)은?", opts: [
    { text: "칭찬, 인정, '사랑해'라는 따뜻한 인정의 말 (Words of Affirmation)", scores: { communication: 4, romance: 3 } },
    { text: "깜짝 선물, 꽃, 편지 등 정성이 담긴 선물 (Receiving Gifts)", scores: { date: 4, care: 3 } },
    { text: "설거지, 쓰레기 버리기 등 나를 도와주는 헌신적 행동 (Acts of Service)", scores: { married_life: 4, condition: 4 } },
    { text: "손잡기, 키스, 뜨거운 포옹 등 육체적인 스킨십 (Physical Touch)", scores: { intimacy: 4, romance: 4 } }
  ]},
  { q: "반대로 당신이 배우자에게 사랑을 줄 때 가장 자주 사용하는 방식은?", opts: [
    { text: "눈만 마주쳐도 쓰다듬고 뽀뽀하며 몸으로 애정을 쏟아붓는다.", scores: { intimacy: 4, romance: 3 } },
    { text: "아침마다 비타민을 챙겨주고, 배우자의 피로를 풀어줄 안마를 해준다.", scores: { care: 4, condition: 4 } },
    { text: "수시로 예쁜 카페나 데이트 코스를 알아보고 맛있는 걸 사 멕인다.", scores: { date: 4, communication: 3 } },
    { text: "말투 하나하나 다정하게 공감해 주고 칭찬을 아끼지 않는다.", scores: { communication: 4, mindset: 3 } }
  ]},
  { q: "배우자의 생일 선물로 100만 원의 예산이 있다면 어떻게 쓸 것인가?", opts: [
    { text: "최고급 오마카세와 명품 지갑 등 한 방에 임팩트 있게 쓴다.", scores: { date: 4, romance: 3 } },
    { text: "예쁜 속옷, 고급 향수, 호텔 예약 등 은밀하고 야릇한 밤을 세팅한다.", scores: { intimacy: 4, romance: 4 } },
    { text: "평소 필요하다고 했던 실용적인 가전제품이나 건강검진 패키지를 예약한다.", scores: { married_life: 4, care: 4 } },
    { text: "현금 100만 원이 든 봉투에 감동적인 편지를 써서 실리를 챙긴다.", scores: { mindset: 4, condition: 3 } }
  ]},
  { q: "일상적인 출퇴근 길, 애정을 확인하는 방법은?", opts: [
    { text: "출근 전 현관문 딥키스와 퇴근 후 격렬한 포옹은 절대 룰이다.", scores: { intimacy: 4, romance: 4 } },
    { text: "출퇴근 시간에 맞춰 '조심해서 가', '오늘 고생했어' 문자를 잊지 않는다.", scores: { communication: 4, care: 3 } },
    { text: "피곤할 테니 굳이 귀찮게 연락 안 하고 저녁에 만나서 맛있는 걸 해준다.", scores: { condition: 4, mindset: 3 } },
    { text: "깜짝 놀라게 회사 앞으로 데리러 가서 서프라이즈 퇴근 데이트를 즐긴다.", scores: { date: 4, romance: 3 } }
  ]},
  { q: "배우자가 무심결에 흘린 '나 이거 먹고 싶다'라는 말을 들었다면?", opts: [
    { text: "당장 배달 앱을 켜거나 몰래 퇴근길에 포장해서 깜짝 선물로 안긴다.", scores: { care: 4, romance: 3 } },
    { text: "'주말에 거기로 데이트하러 가자'며 맛집 투어 계획을 세운다.", scores: { date: 4, communication: 3 } },
    { text: "기억해뒀다가 며칠 뒤 유튜브를 보고 내가 직접 요리해서 서빙한다.", scores: { married_life: 4, care: 4 } },
    { text: "'다음에 가자~' 하고 한 귀로 듣고 한 귀로 흘려버린다.", scores: { condition: 2, mindset: 1 } }
  ]},
  { q: "부부가 사랑을 유지하기 위해 가장 조심해야 할 '말투'는?", opts: [
    { text: "가르치려 드는 훈계조나 상대를 무시하는 듯한 뉘앙스", scores: { mindset: 4, communication: 4 } },
    { text: "습관적인 짜증과 한숨, 피곤함을 무기로 상대의 기운을 빼는 것", scores: { condition: 4, care: 3 } },
    { text: "가족끼리 왜 이러냐며 스킨십을 밀어내고 매몰차게 구는 것", scores: { intimacy: 4, romance: 4 } },
    { text: "다른 집 남편/아내와 비교하며 경제적 무능을 꼬집는 뼈아픈 말", scores: { married_life: 4, mindset: 3 } }
  ]},
  { q: "결혼기념일 10주년, 부부의 가장 이상적인 리마인드 이벤트는?", opts: [
    { text: "처음 만났던 장소나 신혼여행지를 다시 찾아가는 감성 여행", scores: { romance: 4, date: 4 } },
    { text: "바디 프로필을 찍거나 리마인드 웨딩 화보로 서로의 매력을 재확인", scores: { intimacy: 4, romance: 3 } },
    { text: "친지들을 모아놓고 맛있는 식사를 대접하며 그동안의 팀워크를 자축", scores: { married_life: 4, communication: 3 } },
    { text: "둘이서 조용히 최고급 스파 호텔에 박혀서 온몸의 피로를 녹이는 휴식", scores: { condition: 4, care: 4 } }
  ]},
  { q: "서로 사랑의 배터리가 방전되었다고 느껴질 때(권태기) 충전법은?", opts: [
    { text: "새로운 성적 판타지를 시도하거나 야릇한 속옷 이벤트로 불꽃을 살린다.", scores: { intimacy: 4, romance: 4 } },
    { text: "솔직하게 대화의 테이블을 열고 서운했던 점들을 눈물로 풀어낸다.", scores: { communication: 4, mindset: 4 } },
    { text: "억지로 뭘 하려 하지 않고, 각자 여행을 다녀오는 등 개인 시간을 갖는다.", scores: { condition: 4, mindset: 3 } },
    { text: "옛날 연애 시절 사진이나 편지를 꺼내보며 그때의 떨림을 추억한다.", scores: { romance: 4, date: 3 } }
  ]},
  { q: "배우자의 치명적인 매력(나를 사랑에 빠지게 한 무기)은 보통 무엇인가?", opts: [
    { text: "시선을 사로잡는 섹시한 외모와 완벽한 신체 비율", scores: { intimacy: 4, romance: 3 } },
    { text: "개그 코드가 100% 일치해서 숨넘어가게 웃겨주는 유머 감각", scores: { date: 4, communication: 4 } },
    { text: "내가 징징대도 바다처럼 다 받아주는 어른스럽고 성숙한 인성", scores: { care: 4, mindset: 4 } },
    { text: "돈 관리부터 꼼꼼한 플랜까지 배울 점이 많은 든든한 생활력", scores: { married_life: 4, condition: 3 } }
  ]},
  { q: "당신이 배우자에게 해줄 수 있는 가장 큰 희생적 사랑은?", opts: [
    { text: "내 장기라도 기꺼이 내어줄 수 있는 목숨 같은 절대적 헌신", scores: { care: 4, condition: 4 } },
    { text: "배우자의 꿈을 위해 나의 커리어를 포기하고 외조/내조를 하는 것", scores: { married_life: 4, mindset: 4 } },
    { text: "배우자의 치명적인 실수나 큰 빚을 내가 껴안고 용서해 주는 것", scores: { communication: 4, mindset: 3 } },
    { text: "평생 다른 이성에게 절대 눈길 한 번 주지 않는 지독한 순애보", scores: { romance: 4, intimacy: 4 } }
  ]},

  // 11-20: Expressive Language & Understanding
  { q: "애정 표현 빈도에 대한 부부간의 이견이 있다면?", opts: [
    { text: "사랑은 표현해야 아는 법! 무뚝뚝한 배우자를 매일 귀찮게 괴롭혀 뜯어낸다.", scores: { romance: 4, communication: 3 } },
    { text: "스킨십 없는 사랑은 죽은 거라며 억지로라도 밤마다 유혹한다.", scores: { intimacy: 4, romance: 3 } },
    { text: "사람마다 방식이 다르다며 굳이 강요하지 않고 나만의 방식으로 사랑을 준다.", scores: { mindset: 4, condition: 3 } },
    { text: "말이 없어도 밥 차려주고 챙겨주는 행동이 다 사랑이라며 듬직하게 믿는다.", scores: { care: 4, married_life: 4 } }
  ]},
  { q: "배우자가 당신을 가장 사랑스럽다고 느낄 때는 언제일까?", opts: [
    { text: "샤워 후 젖은 머리로 묘한 눈빛을 보낼 때", scores: { intimacy: 4, romance: 4 } },
    { text: "맛있게 밥을 와구와구 먹으며 해맑게 웃을 때", scores: { date: 4, condition: 3 } },
    { text: "다리 주물러주며 고생했다고 따뜻하게 공감해 줄 때", scores: { care: 4, communication: 4 } },
    { text: "집안 살림이나 재테크를 야무지게 해내고 똑순이/똑돌이처럼 굴 때", scores: { married_life: 4, mindset: 3 } }
  ]},
  { q: "당신이 화가 났을 때, 배우자가 사랑으로 풀어주는 가장 좋은 방법은?", opts: [
    { text: "아무 말 없이 꽉 안아주고 입술을 박아(?) 버리는 박력", scores: { intimacy: 4, romance: 4 } },
    { text: "'얼마면 돼?'라며 장난스럽게 용돈이나 카드를 쥐여주는 유머", scores: { date: 4, married_life: 3 } },
    { text: "내가 좋아하는 달달한 디저트나 커피를 몰래 배달시켜 주는 센스", scores: { care: 4, condition: 4 } },
    { text: "진지하게 무릎을 꿇고 눈을 맞추며 왜 화났는지 공감하며 들어주는 대화", scores: { communication: 4, mindset: 4 } }
  ]},
  { q: "만약 배우자가 다른 이성에게 친절하게 대하는 모습을 본다면?", opts: [
    { text: "집에 가서 질투심을 폭발시키며 미친 듯이 캐묻고 화를 낸다.", scores: { romance: 2, condition: 1 } },
    { text: "쿨하게 사회생활의 일부라 생각하고 전혀 개의치 않는다.", scores: { mindset: 4, married_life: 3 } },
    { text: "질투는 나지만 내색하지 않고 침대 위에서 더 자극적으로 매력을 어필한다.", scores: { intimacy: 4, romance: 3 } },
    { text: "그 사람 앞에서는 웃어주지만 나중에 둘만 있을 때 '아까 걔 누구야?'라며 넌지시 경고한다.", scores: { communication: 4, care: 2 } }
  ]},
  { q: "사랑을 글로 표현하는 것(편지, 메시지)에 대하여?", opts: [
    { text: "생일이나 기념일마다 장문의 감동적인 손편지를 꼭 쓴다.", scores: { communication: 4, romance: 4 } },
    { text: "오글거려서 글보다는 행동(선물, 돈)이나 몸으로 보여준다.", scores: { married_life: 3, care: 3 } },
    { text: "포스트잇에 '사랑해, 밥 챙겨 먹어' 같은 소소한 메모를 자주 남긴다.", scores: { care: 4, date: 3 } },
    { text: "메신저로 섹슈얼한 밈이나 농담을 보내며 끊임없이 자극을 준다.", scores: { intimacy: 4, date: 3 } }
  ]},
  { q: "퇴근 후 배우자와 마주앉아 술잔을 기울일 때 최고의 안주는?", opts: [
    { text: "오늘 회사 빌런들 뒷담화와 인간관계 스트레스 토로", scores: { communication: 4, date: 3 } },
    { text: "우리가 앞으로 돈 모아서 이사 갈 아파트나 노후 계획", scores: { married_life: 4, mindset: 3 } },
    { text: "야릇한 미소와 은근한 스킨십을 주고받는 시각적 안주", scores: { intimacy: 4, romance: 4 } },
    { text: "특별한 대화 없이 재미있는 예능이나 영화 한 편 시청", scores: { condition: 4, care: 3 } }
  ]},
  { q: "결혼 후 '사랑'이라는 단어 대신 가장 많이 쓰는 말은?", opts: [
    { text: "의리! 우리는 세상을 함께 등지는 영원한 깐부다.", scores: { married_life: 4, care: 3 } },
    { text: "전우애! 육아와 대출이라는 적군을 무찌르는 동지다.", scores: { condition: 4, mindset: 3 } },
    { text: "여전히 사랑! 아무리 늙어도 당신은 내 영원한 애인이다.", scores: { romance: 4, intimacy: 4 } },
    { text: "믿음! 말하지 않아도 서로의 전부를 꿰뚫어 보는 소울메이트다.", scores: { communication: 4, mindset: 4 } }
  ]},
  { q: "배우자의 생리적 콤플렉스(발냄새, 코골이 등)를 대하는 사랑의 자세는?", opts: [
    { text: "그것마저 너무 귀엽다며 오히려 냄새를 맡고 뽀뽀해 준다.", scores: { romance: 4, date: 3 } },
    { text: "정떨어지지 않게 확실한 치료나 관리를 받도록 과학적으로 돕는다.", scores: { mindset: 4, married_life: 3 } },
    { text: "따뜻한 물에 직접 발을 씻겨주거나 코골이 방지 기구를 사서 끼워준다.", scores: { care: 4, condition: 4 } },
    { text: "그런 걸로 정떨어지면 진짜 사랑이 아니라며 쿨하게 수용하고 넘어간다.", scores: { communication: 3, mindset: 3 } }
  ]},
  { q: "당신의 배우자는 당신을 위해 어떤 요리를 가장 잘 해주는가?", opts: [
    { text: "화려하고 예쁘게 플레이팅 된 파스타나 스테이크 (로맨틱)", scores: { romance: 4, date: 4 } },
    { text: "아플 때 끓여주는 정성 가득한 전복죽이나 삼계탕 (힐링)", scores: { care: 4, condition: 4 } },
    { text: "밤에 씻고 나왔을 때 뚝딱 차려주는 매콤달달한 술안주 (섹시/소통)", scores: { intimacy: 4, communication: 3 } },
    { text: "매일 아침 굶지 말라고 챙겨주는 영양 만점 샌드위치나 김밥 (생활력)", scores: { married_life: 4, care: 3 } }
  ]},
  { q: "사랑을 나누기 전, 나만의 필살 애교나 신호는 무엇인가?", opts: [
    { text: "옷을 갈아입는 척하며 은근슬쩍 속옷 차림으로 배회한다.", scores: { intimacy: 4, romance: 4 } },
    { text: "눈웃음을 살살 치며 등 뒤에서 찰싹 달라붙어 안긴다.", scores: { romance: 4, care: 3 } },
    { text: "대놓고 '오늘 밤에 바빠?'라며 도발적이고 당돌하게 묻는다.", scores: { communication: 4, date: 3 } },
    { text: "은은한 마사지를 해주겠다며 눕혀놓고 자연스럽게 진도를 뺀다.", scores: { condition: 4, intimacy: 3 } }
  ]},

  // 21-30: Commitment & Legacy
  { q: "부부가 사랑의 서약(혼인 서약서)을 갱신한다면 꼭 넣고 싶은 조항은?", opts: [
    { text: "아무리 싸워도 각방 쓰지 않고 한 이불 덮고 자기", scores: { intimacy: 4, romance: 4 } },
    { text: "비자금 만들지 않고 경제 상황 투명하게 100% 공유하기", scores: { married_life: 4, mindset: 4 } },
    { text: "하루 30분 무조건 핸드폰 끄고 온전히 둘이서만 대화하기", scores: { communication: 4, date: 3 } },
    { text: "아프면 미련하게 참지 말고 배우자에게 말해서 케어받기", scores: { care: 4, condition: 4 } }
  ]},
  { q: "우리 부부의 사랑이 100도씨로 끓어오르는 최고의 온도는?", opts: [
    { text: "서로 땀범벅이 되어 숨소리를 거칠게 내뿜는 침대 위", scores: { intimacy: 4, romance: 4 } },
    { text: "마주 보고 앉아 소주 한잔 기울이며 눈빛으로 대화하는 식탁", scores: { communication: 4, date: 4 } },
    { text: "여행지에서 낯선 풍경을 바라보며 두 손을 꽉 잡고 있는 순간", scores: { date: 4, romance: 3 } },
    { text: "힘든 하루를 마치고 집에 돌아와 말없이 안겨 있는 포근한 품", scores: { care: 4, condition: 4 } }
  ]},
  { q: "당신이 배우자에게 가장 듣고 싶은 최고의 극찬은?", opts: [
    { text: "'넌 진짜 침대 위에서 우주 최강이야, 미치겠어.'", scores: { intimacy: 4, romance: 3 } },
    { text: "'당신 없었으면 내 인생은 진짜 어두웠을 거야. 고마워.'", scores: { care: 4, condition: 4 } },
    { text: "'우린 진짜 소울메이트야. 어쩜 이렇게 말이 잘 통할까?'", scores: { communication: 4, mindset: 4 } },
    { text: "'당신 덕분에 우리 집안이 이렇게 잘 굴러가. 진짜 존경해.'", scores: { married_life: 4, mindset: 3 } }
  ]},
  { q: "만약 배우자가 타임머신을 타고 미래로 가버려서 영영 못 본다면?", opts: [
    { text: "상실감에 폐인이 되어 매일 밤 술로 지새울 것 같다.", scores: { condition: 2, care: 2 } },
    { text: "배우자가 남긴 발자취를 추억하며 그 사람이 자랑스러워할 모습으로 꿋꿋이 산다.", scores: { mindset: 4, married_life: 4 } },
    { text: "나도 타임머신을 어떻게든 개발해서 우주 끝까지 쫓아가서 찾아낸다.", scores: { romance: 4, date: 3 } },
    { text: "가슴 한편에 묻고 슬프지만 새로운 사람을 만나 남은 삶을 행복하게 살려 노력한다.", scores: { communication: 3, condition: 3 } }
  ]},
  { q: "부부가 사랑을 위해 돈을 써야 할 때 가장 아깝지 않은 항목은?", opts: [
    { text: "몸에 바르는 최고급 오일, 향수, 예쁜 속옷 등 시청각적 자극 요들", scores: { intimacy: 4, romance: 4 } },
    { text: "일상을 탈출해 새로운 추억을 만들어주는 해외여행 티켓", scores: { date: 4, romance: 3 } },
    { text: "서로의 건강을 지켜주는 홍삼, 영양제, 프리미엄 건강 검진", scores: { care: 4, condition: 4 } },
    { text: "안락한 쉼터가 되어주는 푹신한 소파와 최고급 매트리스 침구", scores: { condition: 4, married_life: 4 } }
  ]},
  { q: "어느 날 아침, 배우자가 기억 상실증에 걸려 나를 잊어버렸다면?", opts: [
    { text: "우리가 얼마나 뜨겁게 사랑했는지 사진과 영상을 보여주며 오열한다.", scores: { romance: 4, date: 3 } },
    { text: "다시 처음부터 매력을 어필해서 꼬시면 된다. 두 번째 첫사랑을 시작한다.", scores: { intimacy: 4, communication: 4 } },
    { text: "기억을 잃었어도 내가 옆에서 극진히 간호하며 본능적인 익숙함을 심어준다.", scores: { care: 4, condition: 4 } },
    { text: "전문 의학의 힘을 빌려 이성적이고 체계적인 재활 플랜을 짠다.", scores: { mindset: 4, married_life: 4 } }
  ]},
  { q: "사랑의 권태기가 찾아왔을 때 이를 극복하는 당신만의 비장의 카드는?", opts: [
    { text: "배우자가 질투할 만한 새로운 스타일 변신(다이어트, 헤어 등)으로 긴장감을 준다.", scores: { romance: 4, date: 3 } },
    { text: "평소 절대 안 하던 파격적인 성적 판타지나 코스프레를 시도해 본다.", scores: { intimacy: 4, mindset: 3 } },
    { text: "둘이서 훌쩍 낯선 도시로 며칠간 배낭여행을 떠나 전우애를 다시 다진다.", scores: { communication: 4, date: 4 } },
    { text: "오히려 아무것도 억지로 하지 않고, 혼자만의 동굴 시간을 주어 서로의 빈자리를 느끼게 한다.", scores: { condition: 4, mindset: 4 } }
  ]},
  { q: "배우자의 사랑이 가장 크게 느껴지는 사소한 일상의 순간은?", opts: [
    { text: "내가 밥 먹을 때 생선 가시를 발라주거나 맛있는 부위를 양보할 때", scores: { care: 4, condition: 3 } },
    { text: "길을 걷다 자연스럽게 차도 쪽으로 자리를 바꾸며 내 어깨를 감쌀 때", scores: { romance: 4, intimacy: 3 } },
    { text: "내가 하는 실없는 농담이나 유머에 빵 터져서 박장대소해 줄 때", scores: { communication: 4, date: 3 } },
    { text: "가계부를 쓰거나 집안일을 묵묵히 완벽하게 끝내놓고 쉴 때", scores: { married_life: 4, mindset: 3 } }
  ]},
  { q: "우리 부부가 그리는 궁극적인 '완벽한 사랑'의 결말은?", opts: [
    { text: "죽는 그날까지 단 하루도 떨어지지 않고 서로를 탐닉하는 뜨거운 로맨스", scores: { intimacy: 4, romance: 4 } },
    { text: "어떠한 비밀도 없이 투명하게 모든 것을 공유한 완벽한 영혼의 결합", scores: { communication: 4, mindset: 4 } },
    { text: "자식농사 잘 짓고 재산 넉넉히 불려서 아무 걱정 없이 노후를 즐기는 평화", scores: { married_life: 4, condition: 4 } },
    { text: "서로 아플 때 곁을 지키며 기저귀를 갈아줘도 수치스럽지 않은 절대적 헌신", scores: { care: 4, condition: 4 } }
  ]},
  { q: "마지막 문항: 당신은 오늘 밤, 배우자에게 어떻게 사랑을 전할 계획인가요?", opts: [
    { text: "'오늘 밤 각오해'라는 은밀한 눈빛과 함께 옷을 벗는다.", scores: { intimacy: 4, romance: 4 } },
    { text: "'오늘 하루도 고생 많았어'라며 어깨를 주물러주고 푹 재운다.", scores: { care: 4, condition: 4 } },
    { text: "좋아하는 와인과 치즈를 꺼내놓고 밤이 깊도록 속 깊은 대화를 나눈다.", scores: { communication: 4, date: 4 } },
    { text: "'내일 우리 대출 이자 갚는 날이야!'라며 현실적인 유머로 웃고 끌어안는다.", scores: { married_life: 4, mindset: 3 } }
  ]}
];
