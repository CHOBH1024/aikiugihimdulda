// Extension of categoryTests object
categoryTests.mindset = [
  // 1-10: Values & Independence
  { q: "부부 사이의 사생활(프라이버시) 존중 범위는 어디까지인가?", opts: [
    { text: "핸드폰, 서랍 등 모든 것을 100% 투명하게 공유해야 한다.", scores: { married_life: 3, intimacy: 2 } },
    { text: "부부라도 각자의 선이 있으며 절대 허락 없이 폰을 봐선 안 된다.", scores: { mindset: 4, condition: 2 } },
    { text: "기본적으로 공유하되, 부끄러운 과거나 일기장 정도만 지켜준다.", scores: { communication: 3, care: 2 } },
    { text: "상대가 원한다면 언제든 보여줄 수 있지만 굳이 먼저 까발리진 않는다.", scores: { romance: 2, condition: 2 } }
  ]},
  { q: "결혼 생활에서 가장 중요한 개인적 성장의 방향은?", opts: [
    { text: "커리어와 사회적 성공을 통해 가정에 경제적 안정을 주는 것", scores: { married_life: 4, mindset: 2 } },
    { text: "끊임없는 취미 활동과 배움을 통해 나만의 자아를 실현하는 것", scores: { mindset: 4, date: 2 } },
    { text: "훌륭한 아빠/엄마, 혹은 아내/남편으로서의 정체성을 완성하는 것", scores: { care: 4, romance: 2 } },
    { text: "배우자와 함께 철학적, 영적으로 깊어지고 성숙해지는 것", scores: { communication: 4, intimacy: 3 } }
  ]},
  { q: "배우자와 나의 종교나 정치적 성향이 완전히 반대라면?", opts: [
    { text: "가정의 평화를 위해 서로 그 주제는 절대 입 밖으로 꺼내지 않는다.", scores: { condition: 4, married_life: 2 } },
    { text: "서로 다름을 쿨하게 인정하고 유쾌한 토론 상대로 생각한다.", scores: { mindset: 4, communication: 3 } },
    { text: "결국에는 나와 같은 가치관을 갖게 되도록 평생 설득할 것이다.", scores: { married_life: 3, intimacy: 1 } },
    { text: "사랑으로 다 극복할 수 있으니 상대가 원하는 대로 어느 정도 맞춰준다.", scores: { care: 4, romance: 2 } }
  ]},
  { q: "배우자의 남사친/여사친(이성 친구)에 대한 당신의 관점은?", opts: [
    { text: "결혼했으면 이성 친구와의 단둘이 만남은 절대 불가하다.", scores: { married_life: 3, condition: 2 } },
    { text: "나에게 미리 말만 해준다면 쿨하게 언제든 오케이한다.", scores: { mindset: 4, communication: 2 } },
    { text: "만나는 건 상관없지만, 묘한 질투심에 삐지거나 투정을 부릴 것 같다.", scores: { romance: 4, care: 2 } },
    { text: "나도 그 친구와 친해져서 다 같이 더블 데이트를 하며 감시(?)한다.", scores: { date: 4, communication: 3 } }
  ]},
  { q: "명절이나 가족 행사에 참석하는 의무감에 대한 생각은?", opts: [
    { text: "결혼의 일부이므로 아무리 힘들어도 기본 도리는 다해야 한다.", scores: { married_life: 4, care: 2 } },
    { text: "형식적인 행사는 과감히 생략하고 부부만의 시간을 우선해야 한다.", scores: { mindset: 4, romance: 3 } },
    { text: "양가 부모님께 용돈을 두둑이 드리는 것으로 참석을 대체한다.", scores: { condition: 3, married_life: 2 } },
    { text: "배우자가 내키지 않아 하면 억지로 끌고 가지 않고 나 혼자 다녀온다.", scores: { care: 4, condition: 3 } }
  ]},
  { q: "배우자가 당신의 패션이나 외모(체중 등)를 지적하며 바꾸길 원한다면?", opts: [
    { text: "사랑하는 사람의 취향에 맞게 기꺼이 노력해서 바꾼다.", scores: { romance: 4, care: 3 } },
    { text: "내 몸과 스타일은 내 자유이므로 터치하지 말라고 선을 긋는다.", scores: { mindset: 4, condition: 2 } },
    { text: "서운해하며 '내가 뚱뚱해져서 싫어졌어?'라고 따진다.", scores: { intimacy: 2, communication: 2 } },
    { text: "이성적으로 판단해 내 건강과 이미지에 도움이 되면 수용한다.", scores: { married_life: 4, communication: 3 } }
  ]},
  { q: "혼자만의 시간(동굴 시간)이 얼마나 필요한가?", opts: [
    { text: "퇴근 후 하루 1~2시간은 무조건 혼자 조용히 있어야 충전된다.", scores: { condition: 4, mindset: 3 } },
    { text: "한 달에 하루 정도는 나홀로 호캉스나 여행을 다녀와야 한다.", scores: { mindset: 4, date: 2 } },
    { text: "잠자는 시간 외에는 늘 배우자와 찰싹 붙어있고 싶다.", scores: { romance: 4, intimacy: 4 } },
    { text: "같은 공간에 있되 각자 핸드폰을 하거나 할 일을 하는 정도면 충분하다.", scores: { care: 3, communication: 2 } }
  ]},
  { q: "새로운 도전을 앞두고 실패에 대한 불안감을 느낄 때?", opts: [
    { text: "배우자에게 약한 모습을 보이기 싫어 혼자 삭히고 해결책을 찾는다.", scores: { mindset: 3, condition: 2 } },
    { text: "배우자 품에 안겨 '나 잘할 수 있을까?'라며 위로와 확신을 구한다.", scores: { care: 3, romance: 4 } },
    { text: "배우자와 함께 밤새도록 리스크를 분석하며 대비책을 세운다.", scores: { married_life: 4, communication: 4 } },
    { text: "'망하면 자기가 먹여 살려~'라며 긍정적으로 생각하고 저지른다.", scores: { communication: 3, date: 2 } }
  ]},
  { q: "결혼 반지를 매일 끼고 다니는 것에 대해?", opts: [
    { text: "부부의 상징이므로 씻을 때도 절대 빼지 않는다.", scores: { romance: 4, married_life: 3 } },
    { text: "일할 때나 손 씻을 때 걸리적거려서 거의 빼고 다닌다.", scores: { condition: 4, mindset: 3 } },
    { text: "외출할 때 패션 아이템처럼 기분에 따라 끼고 나간다.", scores: { date: 3, mindset: 2 } },
    { text: "반지 대신 서로의 이니셜 타투를 새겨서 영원히 간직하고 싶다.", scores: { intimacy: 4, romance: 3 } }
  ]},
  { q: "거짓말에 대한 당신의 기준은?", opts: [
    { text: "선의의 거짓말(White Lie)이라도 부부 사이에선 용납될 수 없다.", scores: { communication: 4, married_life: 3 } },
    { text: "가정을 평화롭게 유지하기 위한 선의의 거짓말은 꼭 필요하다.", scores: { condition: 3, care: 3 } },
    { text: "들키지만 않으면 가끔 배우자의 잔소리를 피하기 위한 꼼수는 괜찮다.", scores: { mindset: 3, married_life: 1 } },
    { text: "서프라이즈 파티를 위한 귀여운 거짓말만 허용된다.", scores: { romance: 4, date: 2 } }
  ]},

  // 11-20: Conflict & Deep Philosophy
  { q: "부부가 의견 충돌 시 '다름'을 받아들이는 태도는?", opts: [
    { text: "우리가 얼마나 다른 환경에서 자랐는지 쿨하게 인정하고 존중한다.", scores: { mindset: 4, communication: 3 } },
    { text: "다르기 때문에 퍼즐처럼 서로의 결핍을 완벽히 채워줄 수 있다고 믿는다.", scores: { care: 4, romance: 3 } },
    { text: "다름이 계속 충돌하면 결국 사랑이 식을까 봐 불안해하며 맞추려 노력한다.", scores: { condition: 3, intimacy: 2 } },
    { text: "논리적인 타협점을 찾아 우리만의 새로운 '부부 규칙'을 창조해 낸다.", scores: { married_life: 4, communication: 4 } }
  ]},
  { q: "결혼 생활에서 가장 피해야 할 최악의 태도는?", opts: [
    { text: "서로에 대한 무관심과 침묵", scores: { communication: 4, intimacy: 3 } },
    { text: "집안일과 경제적 책임을 회피하는 무책임함", scores: { married_life: 4, condition: 3 } },
    { text: "다른 사람(이성)에게 한눈파는 배신행위", scores: { romance: 4, care: 3 } },
    { text: "배우자의 자존감을 깎아내리는 폭언과 무시", scores: { mindset: 4, communication: 3 } }
  ]},
  { q: "SNS(인스타그램 등)에 부부 사진을 올리는 성향은?", opts: [
    { text: "우리의 꽁냥꽁냥한 일상을 자랑하며 '럽스타그램'을 도배한다.", scores: { romance: 4, date: 3 } },
    { text: "기념일이나 좋은 곳에 여행 갔을 때만 가끔 생존 신고용으로 올린다.", scores: { date: 3, married_life: 2 } },
    { text: "사생활 노출이 싫어서 아예 안 올리거나 비공개 계정만 운영한다.", scores: { mindset: 4, condition: 2 } },
    { text: "배우자가 올리고 싶어 하면 협조하지만 내 계정엔 잘 안 올린다.", scores: { care: 3, condition: 2 } }
  ]},
  { q: "친구나 지인들에게 배우자 험담(뒷담화)을 해본 적이 있는가?", opts: [
    { text: "결혼 생활의 스트레스를 풀기 위해 가끔 흉을 본다.", scores: { condition: 2, communication: 1 } },
    { text: "얼굴에 침 뱉기라 생각해서 절대 남 앞에서는 배우자를 욕하지 않는다.", scores: { married_life: 4, mindset: 3 } },
    { text: "불만이 있으면 밖에서 안 하고 당사자에게 1:1로 직접 쏟아낸다.", scores: { communication: 4, care: 2 } },
    { text: "험담은 커녕 '내 남편/아내가 최고'라며 팔불출처럼 자랑만 한다.", scores: { romance: 4, date: 2 } }
  ]},
  { q: "배우자의 취미 생활이 당신이 보기에 너무 돈 낭비(사치) 같다면?", opts: [
    { text: "내버려둔다. 자기가 번 돈 자기가 쓴다는데 터치할 권리 없다.", scores: { mindset: 4, condition: 2 } },
    { text: "생활비 통장에 문제가 없다면 용돈 범위 내에선 눈감아 준다.", scores: { married_life: 4, care: 2 } },
    { text: "이성적으로 가계부를 들이밀며 취미 지출을 줄이도록 협상한다.", scores: { communication: 4, married_life: 3 } },
    { text: "그 취미를 나도 같이 배우면서 함께 즐기고 뽕을 뽑는다.", scores: { date: 4, romance: 3 } }
  ]},
  { q: "배우자가 무언가에 미쳐서 며칠 밤새 게임만 하거나 드라마만 본다면?", opts: [
    { text: "등짝을 때리며 당장 끄라고 잔소리 폭격을 날린다.", scores: { married_life: 3, care: 2 } },
    { text: "과일이나 야식을 가져다주며 '그렇게 재밌어?' 하고 응원해준다.", scores: { care: 4, romance: 2 } },
    { text: "나도 옆에 누워서 같이 밤새워 즐긴다.", scores: { date: 4, intimacy: 3 } },
    { text: "서로 각자 할 일 하는 거니 전혀 신경 쓰지 않고 잔다.", scores: { mindset: 4, condition: 3 } }
  ]},
  { q: "내가 생각하는 '나이 듦(Aging)'의 의미는?", opts: [
    { text: "배우자와 함께 육체적 매력은 줄어들지만 전우애가 깊어지는 훈장", scores: { married_life: 4, care: 3 } },
    { text: "아무리 나이 들어도 배우자 앞에서는 영원한 소년/소녀이고 싶다.", scores: { romance: 4, intimacy: 3 } },
    { text: "건강 관리를 철저히 해서 늙어서도 힙하고 세련된 부부로 남겠다.", scores: { mindset: 4, date: 3 } },
    { text: "자연스러운 섭리이므로 서로 주름진 손을 잡고 편안하게 늙어가고 싶다.", scores: { condition: 4, communication: 3 } }
  ]},
  { q: "부부가 가장 완벽한 팀워크를 발휘할 때는 언제인가?", opts: [
    { text: "대출을 갚거나 내 집 마련 등 금전적 목표를 달성할 때", scores: { married_life: 4, mindset: 3 } },
    { text: "양가 부모님의 압박이나 잔소리를 찰떡같이 방어할 때", scores: { communication: 4, care: 3 } },
    { text: "여행지에서 길을 잃었을 때 한 명은 지도를 찾고 한 명은 운전할 때", scores: { date: 4, mindset: 2 } },
    { text: "아이를 함께 키우며 기저귀를 갈고 우유를 먹이는 육아 전투 중일 때", scores: { care: 4, married_life: 3 } }
  ]},
  { q: "당신이 생각하는 '사랑'이란 감정의 유효기간은?", opts: [
    { text: "호르몬에 의한 열정은 3년이지만, 정과 의리로 평생 간다.", scores: { married_life: 4, care: 3 } },
    { text: "노력하지 않으면 당장 내일이라도 식을 수 있는 깨지기 쉬운 유리", scores: { condition: 3, mindset: 3 } },
    { text: "서로 어떻게 가꾸고 이벤트를 주느냐에 따라 평생 활활 타오를 수 있다.", scores: { romance: 4, intimacy: 4 } },
    { text: "끊임없이 서로의 다름을 이해하고 맞춰가는 끝나지 않는 대화", scores: { communication: 4, mindset: 3 } }
  ]},
  { q: "배우자가 뜬금없이 '나 왜 사랑해?'라고 묻는다면 당신의 대답은?", opts: [
    { text: "'너니까 사랑하지'라며 말없이 꽉 안아준다.", scores: { intimacy: 4, romance: 4 } },
    { text: "'예뻐서/잘생겨서!'라며 능청스럽게 외모 칭찬을 갈긴다.", scores: { date: 3, romance: 3 } },
    { text: "'항상 나를 배려해 주고 내 편이 되어줘서'라고 진심을 전한다.", scores: { care: 4, communication: 4 } },
    { text: "'밥 안 굶길 거 같아서!'라며 장난스럽게 현실적인 농담을 던진다.", scores: { married_life: 3, mindset: 2 } }
  ]},

  // 21-30: Reflection & Life Goals
  { q: "죽기 전 마지막으로 배우자에게 남기고 싶은 유언은?", opts: [
    { text: "'내 인생 최고의 행운은 당신을 만난 거야. 너무 사랑해.'", scores: { romance: 4, intimacy: 4 } },
    { text: "'나 없어도 밥 잘 챙겨 먹고 아프지 말고 건강하게 잘 살아.'", scores: { care: 4, condition: 4 } },
    { text: "'우리 통장 비밀번호는 이거고, 저 주식은 당장 팔아...'", scores: { married_life: 4, mindset: 3 } },
    { text: "'다음 생에도 꼭 나랑 다시 결혼해 줄 거지?'", scores: { romance: 4, communication: 3 } }
  ]},
  { q: "나만의 버킷리스트(죽기 전에 꼭 하고 싶은 일)를 실행할 때?", opts: [
    { text: "배우자와 무조건 함께 이뤄내며 기쁨을 나눈다.", scores: { date: 4, romance: 3 } },
    { text: "배우자의 응원과 지원을 받으며 혼자만의 성취감을 맛본다.", scores: { mindset: 4, communication: 2 } },
    { text: "가정의 현실(돈, 육아) 때문에 계속 뒤로 미루게 된다.", scores: { condition: 3, married_life: 2 } },
    { text: "배우자의 버킷리스트를 이뤄주는 것이 곧 나의 행복이다.", scores: { care: 4, intimacy: 2 } }
  ]},
  { q: "우연히 배우자의 옛 연인(전애인)이 보낸 SNS 메시지를 봤다면?", opts: [
    { text: "질투심에 눈이 멀어 당장 핸드폰을 박살 내고 추궁한다.", scores: { condition: 1, mindset: 1 } },
    { text: "배우자를 믿기 때문에 조용히 덮어두고 어떻게 대처하는지 지켜본다.", scores: { mindset: 4, care: 3 } },
    { text: "바로 캡처해서 배우자에게 보내며 논리적으로 해명을 요구한다.", scores: { communication: 4, married_life: 2 } },
    { text: "내가 대신 답장을 보내서 완벽하게 기선 제압을 해버린다.", scores: { romance: 2, intimacy: 2 } }
  ]},
  { q: "결혼기념일에 배우자가 완전히 잊어버리고 아무 준비를 안 했다면?", opts: [
    { text: "너무 서운해서 엉엉 울어버리거나 하루 종일 말을 안 한다.", scores: { care: 2, condition: 1 } },
    { text: "그럴 줄 알고 내가 완벽한 서프라이즈 선물을 준비해 거울 치료를 시킨다.", scores: { romance: 4, date: 4 } },
    { text: "'오늘 무슨 날인지 몰라?'라며 즉시 따지고 저녁이라도 쏘라고 한다.", scores: { communication: 4, married_life: 3 } },
    { text: "바쁘면 그럴 수 있지 하고 쿨하게 넘기되 주말에 맛있는 걸 사달라 한다.", scores: { mindset: 4, condition: 3 } }
  ]},
  { q: "새로 이사 갈 집을 고를 때 당신이 가장 타협할 수 없는 조건은?", opts: [
    { text: "배우자의 직장과 나의 직장 사이의 공평한 통근 거리", scores: { married_life: 4, care: 3 } },
    { text: "둘이서 홈파티나 와인을 즐길 수 있는 넓은 뷰포인트(테라스 등)", scores: { date: 4, romance: 3 } },
    { text: "서로 방해받지 않고 잘 수 있는 방의 개수나 방음 시설", scores: { condition: 4, mindset: 3 } },
    { text: "학군, 투자 가치 등 철저한 부동산 경제적 가치", scores: { mindset: 4, married_life: 4 } }
  ]},
  { q: "배우자가 당신을 가장 화나게 하는 말버릇은?", opts: [
    { text: "'아 몰라, 네 맘대로 해'라는 식의 회피성 발언", scores: { communication: 4, condition: 2 } },
    { text: "'너는 왜 항상 그래?'라며 내 인격을 일반화시켜 깎아내리는 말", scores: { mindset: 4, care: 2 } },
    { text: "'내가 다 알아서 할게'라며 나를 무시하는 독단적인 태도", scores: { married_life: 4, communication: 3 } },
    { text: "'피곤해, 나중에'라며 나의 애정 표현을 차갑게 쳐내는 말", scores: { intimacy: 4, romance: 4 } }
  ]},
  { q: "스트레스가 극에 달했을 때 부부가 이를 해소하는 방법은?", opts: [
    { text: "매운 닭발에 소주 한잔하며 서로 직장 상사 욕을 신나게 해준다.", scores: { date: 4, communication: 4 } },
    { text: "조용히 불을 끄고 누워 마사지를 해주며 몸의 피로를 풀어준다.", scores: { condition: 4, care: 4 } },
    { text: "모든 걸 잊고 격렬한 스킨십을 하며 호르몬의 쾌감으로 덮어버린다.", scores: { intimacy: 4, romance: 3 } },
    { text: "각자 혼자만의 시간을 가지며 방에 틀어박혀 에너지를 충전한다.", scores: { mindset: 4, condition: 3 } }
  ]},
  { q: "부부 사이에도 선의의 경쟁이 필요하다고 생각하는가?", opts: [
    { text: "부부는 한 배를 탄 깐부인데 왜 경쟁을 하나? 무조건 한 편이다.", scores: { care: 4, married_life: 3 } },
    { text: "재테크나 승진 등 발전적인 자극을 주고받는 라이벌 관계는 좋다.", scores: { mindset: 4, married_life: 4 } },
    { text: "게임이나 내기를 할 때 얄미울 정도로 승부욕을 불태우는 게 재밌다.", scores: { date: 4, communication: 2 } },
    { text: "누가 더 상대를 많이 사랑하나 매일매일 애교 배틀을 한다.", scores: { romance: 4, intimacy: 3 } }
  ]},
  { q: "배우자의 성공적인 모습(예: 대기업 임원 승진)을 보았을 때?", opts: [
    { text: "내가 다 뿌듯하고 온 동네방네 자랑하고 다닌다.", scores: { romance: 4, care: 3 } },
    { text: "멋있어서 존경심이 우러러 나오고 다시 한 번 사랑에 빠진다.", scores: { intimacy: 4, romance: 3 } },
    { text: "축하해주면서도 '이제 내 노후는 편안하겠군'이라며 안도한다.", scores: { married_life: 4, condition: 2 } },
    { text: "나도 지지 않기 위해 자극받아 더 열심히 내 일에 매진한다.", scores: { mindset: 4, communication: 3 } }
  ]},
  { q: "결혼 생활을 한 단어로 정의한다면?", opts: [
    { text: "세상에서 제일 안전한 나의 '피난처'", scores: { condition: 4, care: 4 } },
    { text: "매일매일 새롭고 짜릿한 롤러코스터 같은 '연애의 연장선'", scores: { romance: 4, intimacy: 4 } },
    { text: "서로의 부족함을 메꿔 나가는 거대한 '프로젝트'", scores: { married_life: 4, mindset: 3 } },
    { text: "끊임없이 서로를 탐구하고 조율하는 치열한 '소통의 장'", scores: { communication: 4, mindset: 4 } }
  ]}
];

categoryTests.condition = [
  // 1-10: Health & Care
  { q: "배우자가 심한 감기 몸살에 걸려 누워있다면 당신은?", opts: [
    { text: "당장 약과 전복죽을 사 와서 이마에 물수건을 올려준다.", scores: { care: 4, condition: 4 } },
    { text: "옮으면 안 되니까 약만 사주고 다른 방에 격리시킨다.", scores: { mindset: 3, married_life: 2 } },
    { text: "아프지 말라며 옆에 꼭 붙어 껴안고 같이 잔다.", scores: { romance: 4, intimacy: 3 } },
    { text: "병원 예약부터 식단, 휴식 플랜까지 매니저처럼 체계적으로 관리한다.", scores: { communication: 3, married_life: 3 } }
  ]},
  { q: "반대로 내가 아파서 끙끙 앓을 때 배우자에게 바라는 것은?", opts: [
    { text: "말없이 안아주고 내 머리를 쓰다듬어 주는 따뜻한 위로", scores: { romance: 4, intimacy: 3 } },
    { text: "밀린 집안일과 육아를 완벽하게 대신해 주어 걱정 없이 쉬게 해주는 것", scores: { condition: 4, married_life: 4 } },
    { text: "내가 좋아하는 과일이나 음식을 사서 대령해 주는 정성", scores: { care: 4, date: 2 } },
    { text: "혼자 조용히 잘 수 있도록 말 걸지 않고 내버려 두는 것", scores: { mindset: 4, condition: 3 } }
  ]},
  { q: "배우자가 최근 살이 찌고 배가 나왔다며 시무룩해 한다면?", opts: [
    { text: "'난 곰돌이 같아서 더 푹신하고 좋아~'라며 배를 만지며 안심시킨다.", scores: { romance: 4, intimacy: 4 } },
    { text: "'그럼 우리 오늘부터 같이 헬스장 다닐까?'라며 즉각적인 플랜을 세운다.", scores: { married_life: 4, communication: 3 } },
    { text: "다이어트에 좋은 샐러드 도시락을 매일 아침 싸준다.", scores: { care: 4, condition: 3 } },
    { text: "솔직히 건강이 걱정되니 야식을 줄이라고 단호하게 잔소리한다.", scores: { mindset: 3, married_life: 2 } }
  ]},
  { q: "생리통이나 장염 등으로 배우자가 화장실을 들락거리며 고통받을 때?", opts: [
    { text: "민망하지 않게 일부러 음악을 크게 틀어주고 따뜻한 차를 끓여둔다.", scores: { care: 4, communication: 4 } },
    { text: "냄새난다고 장난치며 유쾌하게 분위기를 풀어준다.", scores: { date: 3, romance: 2 } },
    { text: "어차피 내가 해줄 수 있는 게 없으니 혼자 누워서 폰만 본다.", scores: { condition: 2, mindset: 1 } },
    { text: "배를 문질러 주거나 핫팩을 데워주며 곁을 지킨다.", scores: { intimacy: 4, care: 3 } }
  ]},
  { q: "영양제나 비타민을 챙겨 먹는 부부의 모습은?", opts: [
    { text: "내가 매일 아침 두 사람 몫을 종류별로 까서 입에 넣어준다.", scores: { care: 4, married_life: 3 } },
    { text: "각자 알아서 자기 몸에 맞는 걸 사서 챙겨 먹는다.", scores: { mindset: 4, condition: 3 } },
    { text: "효과가 좋다는 해외 영양제를 밤새 검색해서 대량 직구한다.", scores: { married_life: 4, communication: 2 } },
    { text: "서로 먹여주면서 뽀뽀를 하는 등 영양제 먹는 시간도 이벤트를 만든다.", scores: { romance: 4, intimacy: 3 } }
  ]},
  { q: "배우자가 만성 피로에 시달려 주말 내내 12시간 넘게 잔다면?", opts: [
    { text: "이해가 안 된다며 당장 깨워서 날씨 좋은데 데이트 가자고 조른다.", scores: { date: 4, romance: 2 } },
    { text: "코골이 소리를 자장가 삼아 나도 옆에 찰싹 붙어서 하루 종일 잔다.", scores: { intimacy: 3, condition: 4 } },
    { text: "햇빛이 안 들게 커튼을 다 치고 조용히 나가서 나만의 시간을 보낸다.", scores: { mindset: 4, care: 3 } },
    { text: "일어나면 바로 먹을 수 있게 한 상 부러지게 밥을 차려놓는다.", scores: { care: 4, married_life: 3 } }
  ]},
  { q: "스트레스성 탈모나 피부 트러블이 생긴 배우자에게?", opts: [
    { text: "비싼 탈모 샴푸나 피부과 회원권을 끊어주는 확실한 플렉스(Flex).", scores: { married_life: 4, care: 3 } },
    { text: "'자기 대머리 돼도 나한텐 최고 섹시해!'라며 무한 긍정 에너지를 준다.", scores: { romance: 4, intimacy: 3 } },
    { text: "스트레스 원인을 파악하고 직장 상사를 같이 욕해주며 심리 치료를 해준다.", scores: { communication: 4, date: 2 } },
    { text: "같이 머리에 좋은 검은콩을 볶아 먹으며 유난을 떤다.", scores: { date: 3, care: 2 } }
  ]},
  { q: "건강 검진 결과, 배우자에게 가벼운 성인병(고지혈증 등)이 발견되었다면?", opts: [
    { text: "당장 오늘부터 치킨, 맥주 금지령을 내리고 엄격한 식단 통제에 들어간다.", scores: { married_life: 4, mindset: 3 } },
    { text: "나도 의리로 건강 식단을 같이 먹어주며 고통을 분담한다.", scores: { care: 4, romance: 3 } },
    { text: "'죽기 전까지 먹고 싶은 거 다 먹고 즐기자'라며 쿨하게 하던 대로 산다.", scores: { date: 3, condition: 2 } },
    { text: "매일 저녁 같이 공원을 1시간씩 손잡고 걷는 운동 데이트를 시작한다.", scores: { date: 4, intimacy: 3 } }
  ]},
  { q: "술 취해서 몸을 가누지 못하는 배우자가 귀가했을 때?", opts: [
    { text: "일단 등짝을 세게 때리고 잔소리 폭격을 쏟아낸다.", scores: { communication: 2, mindset: 2 } },
    { text: "더럽다고 옷만 벗겨서 거실 바닥에 방치해 둔다.", scores: { condition: 2, care: 1 } },
    { text: "술 냄새가 나도 귀엽다며 세수까지 직접 다 시켜주고 재운다.", scores: { care: 4, romance: 3 } },
    { text: "다음 날 아침 시원한 해장국을 끓여놓고 진지하게 주량 조절을 약속받는다.", scores: { communication: 4, married_life: 4 } }
  ]},
  { q: "신체적인 나이 듦(주름, 새치 등)을 서로 발견했을 때?", opts: [
    { text: "새치를 뽑아주며 서로의 늙어가는 모습을 놀리고 낄낄거린다.", scores: { date: 4, communication: 3 } },
    { text: "'주름이 생겨도 당신이 세상에서 제일 예뻐'라며 로맨틱하게 키스한다.", scores: { romance: 4, intimacy: 4 } },
    { text: "슬퍼하며 비싼 안티에이징 화장품 세트를 서프라이즈로 사다 준다.", scores: { care: 4, married_life: 3 } },
    { text: "우리가 함께 살아온 세월의 훈장이라며 쿨하게 받아들이고 염색을 미룬다.", scores: { mindset: 4, condition: 3 } }
  ]},

  // 11-20: Mental Health & Relaxation
  { q: "직장 상사에게 엄청나게 깨지고 와서 배우자가 멘탈이 나갔을 때?", opts: [
    { text: "같이 쌍욕을 해주며 그 상사를 저주하는 굿판(?)을 벌인다.", scores: { communication: 4, date: 3 } },
    { text: "아무 말 없이 좋아하는 치맥을 세팅하고 안아준다.", scores: { care: 4, condition: 3 } },
    { text: "당장 사표 내라고 소리치며 내가 먹여 살리겠다고 호기를 부린다.", scores: { romance: 4, married_life: 3 } },
    { text: "상황을 객관적으로 분석해서 상사의 의도와 대처법을 컨설팅해 준다.", scores: { mindset: 4, communication: 3 } }
  ]},
  { q: "배우자가 '나 우울증인가 봐'라고 멍하게 말할 때 첫 반응은?", opts: [
    { text: "'네가 왜 우울해, 내가 이렇게 잘해주는데!'라며 서운해한다.", scores: { romance: 2, condition: 1 } },
    { text: "심각하게 받아들이고 내일 당장 유명한 정신과를 같이 가자고 예약한다.", scores: { married_life: 4, care: 3 } },
    { text: "하던 일을 모두 멈추고 무릎을 맞댄 채 '어떤 점이 널 힘들게 해?'라고 깊이 묻는다.", scores: { communication: 4, mindset: 4 } },
    { text: "일단 바람 좀 쐬자며 차에 태워서 밤바다나 뷰 좋은 카페로 데려간다.", scores: { date: 4, care: 3 } }
  ]},
  { q: "집에서 휴식할 때 우리 부부가 에너지를 채우는 가장 완벽한 포즈는?", opts: [
    { text: "소파에 나란히 앉아 허벅지에 다리를 올리고 TV 보기", scores: { intimacy: 3, condition: 4 } },
    { text: "침대에 서로 완전히 포개져서 맨살을 맞대고 숨소리 듣기", scores: { intimacy: 4, romance: 4 } },
    { text: "각자 거실 양끝 1인용 안락의자에 떨어져 앉아 책 읽거나 폰 하기", scores: { mindset: 4, condition: 3 } },
    { text: "한 명은 요리하고 한 명은 식탁에 앉아 재잘거리며 대화하기", scores: { communication: 4, date: 3 } }
  ]},
  { q: "마사지를 해달라고 부탁했을 때 서로의 반응은?", opts: [
    { text: "아프다고 할 때까지 악착같이 세게 주무르며 장난을 친다.", scores: { date: 4, romance: 2 } },
    { text: "정성껏 어깨를 주물러주다 자연스럽게 야릇한 터치로 분위기를 바꾼다.", scores: { intimacy: 4, romance: 4 } },
    { text: "피로가 풀리도록 유튜브에서 배운 전문 타이 마사지 기술을 시전한다.", scores: { care: 4, condition: 4 } },
    { text: "'나도 피곤해, 안마의자나 써'라며 쿨하게 거절한다.", scores: { mindset: 3, condition: 2 } }
  ]},
  { q: "반려식물이나 디퓨저(향기) 등 집안의 힐링 요소를 꾸밀 때?", opts: [
    { text: "배우자가 좋아하는 꽃과 향으로 집안을 가득 채워 기분 전환을 돕는다.", scores: { care: 4, romance: 3 } },
    { text: "심신 안정에 좋다는 피톤치드 편백나무나 숲 향기를 과학적으로 분석해 배치한다.", scores: { mindset: 3, married_life: 3 } },
    { text: "은은하고 매혹적인 일랑일랑이나 머스크 향을 켜두어 밤의 무드를 유도한다.", scores: { intimacy: 4, romance: 3 } },
    { text: "이런 데 돈 쓰는 게 아까워 다이소 디퓨저나 환기로 끝낸다.", scores: { condition: 3, care: 1 } }
  ]},
  { q: "배우자가 불안해서 불면증에 시달릴 때 당신은?", opts: [
    { text: "잠들 때까지 등이나 배를 부드럽게 토닥거리며 자장가를 불러준다.", scores: { care: 4, romance: 3 } },
    { text: "불면증엔 몸을 피곤하게 하는 게 최고라며 끈적한 스킨십을 유도한다.", scores: { intimacy: 4, romance: 3 } },
    { text: "따뜻한 우유나 캐모마일 티를 끓여오고 수면 유도 음악을 튼다.", scores: { condition: 4, care: 4 } },
    { text: "난 내일 출근해야 하니 귀마개를 꽂고 먼저 자버린다.", scores: { mindset: 3, married_life: 2 } }
  ]},
  { q: "다툼 후 화를 식히기 위한 감정적 쿨다운(Cool-down) 방식은?", opts: [
    { text: "미친 듯이 방 청소나 설거지를 하며 몸을 움직여 화를 푼다.", scores: { married_life: 3, condition: 3 } },
    { text: "차를 몰고 나가서 좋아하는 음악을 빵빵하게 틀고 드라이브를 한다.", scores: { date: 3, mindset: 3 } },
    { text: "서로 10분간 침묵의 포옹을 하며 맥박이 진정될 때까지 기다린다.", scores: { intimacy: 4, communication: 4 } },
    { text: "달달한 아이스크림이나 디저트를 시켜 먹으며 당을 보충한다.", scores: { care: 3, condition: 4 } }
  ]},
  { q: "일상에서 벗어나 가장 완벽한 힐링(치유) 여행의 형태는?", opts: [
    { text: "외부와 단절된 숲속 독채 펜션에서 새소리를 들으며 아무것도 안 하기", scores: { condition: 4, mindset: 3 } },
    { text: "해변가 썬베드에 누워 칵테일을 마시며 서로 오일 발라주기", scores: { intimacy: 4, romance: 4 } },
    { text: "전통 한옥이나 템플스테이에 가서 마음 수련과 명상을 해보기", scores: { communication: 3, mindset: 4 } },
    { text: "돈 걱정 없이 5성급 호텔 라운지에서 사육 당하듯 먹고 자기", scores: { married_life: 4, care: 3 } }
  ]},
  { q: "스마트폰 디톡스(주말 하루 폰 끄기)를 제안한다면 당신의 반응은?", opts: [
    { text: "적극 찬성! 방해받지 않고 온종일 서로의 눈만 보고 대화할 기회다.", scores: { communication: 4, romance: 3 } },
    { text: "폰 대신 같이 요리하고 보드게임을 하며 신나게 논다.", scores: { date: 4, intimacy: 2 } },
    { text: "하루 종일 멍때리거나 책만 보며 진짜 완벽한 뇌 휴식을 취한다.", scores: { condition: 4, mindset: 4 } },
    { text: "불안해서 1시간도 못 버티고 비상 연락 핑계를 대며 켜버린다.", scores: { married_life: 2, condition: 1 } }
  ]},
  { q: "부부가 서로의 '마음 건강'을 점검하는 방식은?", opts: [
    { text: "주말 저녁 와인 한잔을 기울이며 '이번 주 힘들었던 점'을 브리핑한다.", scores: { communication: 4, date: 3 } },
    { text: "정기적으로 커플 심리 검사나 칭찬 릴레이 같은 이벤트를 한다.", scores: { mindset: 4, married_life: 3 } },
    { text: "침대에서 맨살을 비비며 귓속말로 오늘 느꼈던 감정들을 속삭인다.", scores: { intimacy: 4, romance: 4 } },
    { text: "말하지 않아도 표정만 보고 '힘들었지?' 라며 안아주는 텔레파시", scores: { care: 4, condition: 4 } }
  ]},

  // 21-30: Personal Space & Burnout
  { q: "집에 돌아왔을 때 가장 듣고 싶은 인삿말은?", opts: [
    { text: "'우리 강아지(애칭) 왔어~?' 하며 꽉 껴안고 키스해 주는 것", scores: { romance: 4, intimacy: 4 } },
    { text: "'오늘 하루 진짜 고생 많았어, 밥 먹자'라는 따뜻한 한마디", scores: { care: 4, condition: 4 } },
    { text: "'오늘 김부장이 또 괴롭혔어? 내가 욕해줄게!'라는 든든한 공감", scores: { communication: 4, married_life: 3 } },
    { text: "아무 말 없이 씩 웃어주며 각자의 휴식 공간을 존중해 주는 것", scores: { mindset: 4, condition: 3 } }
  ]},
  { q: "번아웃(무기력증)이 심하게 온 배우자를 위해 당신이 할 수 있는 일은?", opts: [
    { text: "회사를 당장 그만두라며 내가 당분간 벌겠다고 든든한 방패가 되어준다.", scores: { care: 4, married_life: 4 } },
    { text: "어떠한 집안일이나 의무도 지우지 않고 백수처럼 살도록 방치(?)해 준다.", scores: { condition: 4, mindset: 4 } },
    { text: "매주 주말 강제로 예쁜 카페나 바다로 데려가서 광합성을 시킨다.", scores: { date: 4, romance: 3 } },
    { text: "밤마다 눈물 콧물 다 빼며 딥톡을 통해 마음속 응어리를 터트려준다.", scores: { communication: 4, intimacy: 3 } }
  ]},
  { q: "서로 다이어트나 금연 등 힘든 결심을 했을 때?", opts: [
    { text: "실패하면 10만 원! 이라며 독하게 내기를 걸고 감독관이 된다.", scores: { date: 4, married_life: 3 } },
    { text: "나도 같이 동참하며 '우리 함께 이겨내자'고 전우애를 다진다.", scores: { communication: 4, care: 3 } },
    { text: "밤에 몰래 라면 냄새를 풍기거나 담배를 권하며 유혹하는 악마가 된다.", scores: { romance: 2, condition: 2 } },
    { text: "스트레스받지 말라며 결심이 흔들릴 때 '그냥 포기해, 지금도 예뻐'라며 꼬드긴다.", scores: { romance: 3, care: 2 } }
  ]},
  { q: "집안 공기가 답답하고 권태로운 기분이 들 때?", opts: [
    { text: "당장 가구 배치를 싹 바꾸고 침구류를 로맨틱한 색으로 교체한다.", scores: { married_life: 4, romance: 3 } },
    { text: "환기를 싹 시키고 경쾌한 재즈나 보사노바 음악을 빵빵하게 튼다.", scores: { condition: 4, date: 3 } },
    { text: "평소 안 입던 파격적인 슬립이나 속옷을 입고 소파에 누워있는다.", scores: { intimacy: 4, romance: 4 } },
    { text: "진지하게 '우리 요즘 대화가 부족한 거 같아'라며 거실로 소환한다.", scores: { communication: 4, mindset: 3 } }
  ]},
  { q: "휴일 오후 3시, 계획 없이 거실에 널브러져 있을 때?", opts: [
    { text: "서로 배 위에 다리를 얹고 스마트폰으로 배달 앱을 뒤적인다.", scores: { condition: 4, date: 2 } },
    { text: "갑자기 삘(Feel) 받아서 낮술을 까거나 대낮부터 스킨십을 시작한다.", scores: { intimacy: 4, romance: 4 } },
    { text: "이러면 안 된다며 당장 씻고 근처 공원이라도 걷자고 끌고 나간다.", scores: { married_life: 3, date: 3 } },
    { text: "각자 밀린 책을 읽거나 밀린 취미 생활을 하며 평화로운 정적을 즐긴다.", scores: { mindset: 4, condition: 3 } }
  ]},
  { q: "배우자의 생리적 리듬(배변, 방귀, 트림)을 대하는 태도는?", opts: [
    { text: "화장실 앞에서 노크하며 '냄새나~' 하고 장난치며 낄낄댄다.", scores: { date: 3, communication: 3 } },
    { text: "완벽하게 방음과 탈취를 해달라며 진지하게 매너를 요구한다.", scores: { mindset: 3, married_life: 3 } },
    { text: "건강의 척도라 생각하고 배변 상태나 소화 상태를 진지하게 묻고 걱정한다.", scores: { care: 4, condition: 4 } },
    { text: "난 한 번도 방귀를 튼 적이 없어 끝까지 우아함을 유지하려 노력한다.", scores: { romance: 4, intimacy: 2 } }
  ]},
  { q: "추운 겨울밤, 보일러 고장으로 방이 냉골일 때?", opts: [
    { text: "짜증 내며 수리 기사를 부르라고 화내고 혼자 패딩을 껴입는다.", scores: { condition: 1, mindset: 1 } },
    { text: "체온을 나누자며 전기장판 하나에 살을 맞대고 꼭 껴안고 잔다.", scores: { intimacy: 4, romance: 4 } },
    { text: "캠핑 감성이라며 거실에 텐트를 치고 코코아를 타 먹는다.", scores: { date: 4, romance: 3 } },
    { text: "감기 걸릴까 봐 핫팩과 이불을 모두 배우자에게 덮어주고 챙긴다.", scores: { care: 4, condition: 3 } }
  ]},
  { q: "부부가 체력적으로 한계에 도달했을 때(이사, 대청소 등)?", opts: [
    { text: "땀범벅이 된 모습이 섹시하다며 갑자기 뽀뽀를 갈긴다.", scores: { intimacy: 4, romance: 3 } },
    { text: "'아이고 삭신이야' 하면서 서로 안마를 해주고 약을 발라준다.", scores: { care: 4, condition: 4 } },
    { text: "고생했으니 오늘 저녁은 최고급 한우를 쏘겠다며 분위기를 띄운다.", scores: { date: 4, married_life: 3 } },
    { text: "완벽하게 임무를 완수한 우리의 팀워크를 칭찬하며 하이파이브를 한다.", scores: { communication: 4, married_life: 4 } }
  ]},
  { q: "명상이나 요가 등 마음 챙김 훈련을 제안한다면?", opts: [
    { text: "같이 커플 요가를 하면서 서로의 몸을 만지고 장난치기 바쁘다.", scores: { intimacy: 3, date: 3 } },
    { text: "정말 진지하게 불을 끄고 명상 음악을 틀어 서로의 호흡에 집중한다.", scores: { mindset: 4, condition: 4 } },
    { text: "그거 할 시간에 10분이라도 더 자는 게 최고라며 쿨쿨 잔다.", scores: { condition: 3, married_life: 2 } },
    { text: "명상 후 우리의 심리 상태에 대해 깊이 있는 피드백 대화를 나눈다.", scores: { communication: 4, mindset: 3 } }
  ]},
  { q: "나에게 있어 배우자라는 존재가 주는 가장 완벽한 '컨디션(상태)'은?", opts: [
    { text: "그 어떤 외부 자극보다 강렬하게 나의 심장을 뛰게 하는 아드레날린", scores: { romance: 4, intimacy: 4 } },
    { text: "하루 종일 받은 스트레스와 상처를 눈 녹듯 사라지게 하는 진통제", scores: { care: 4, condition: 4 } },
    { text: "험난한 세상을 함께 헤쳐 나갈 수 있다는 확신을 주는 단단한 갑옷", scores: { married_life: 4, mindset: 4 } },
    { text: "말하지 않아도 내 생각의 주파수를 100% 맞춰주는 완벽한 라디오", scores: { communication: 4, date: 3 } }
  ]}
];
