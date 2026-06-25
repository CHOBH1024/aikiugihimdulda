// ============================================================
// 참사랑 거울 육아 (가정연합 편) — 부부 육아 궁합 번역 가이드
// 부모가 대용량 chemistry_data.js를 로드한 뒤, 이 스크립트가 해당 맵을
// 가정연합 편으로 실시간으로 로컬라이즈합니다.
// ============================================================

if (typeof CHEMISTRY_MAP !== 'undefined') {
  const translations = [
    [/육아/g, '참사랑 양육'],
    [/가치관/g, '신앙적 가치관'],
    [/규칙/g, '천법과 말씀 규범'],
    [/원칙/g, '천법적 원칙'],
    [/훈육/g, '심정적 훈육'],
    [/아이/g, '축복자녀'],
    [/자녀/g, '축복자녀'],
    [/가족/g, '참가정'],
    [/가정/g, '참가정'],
    [/수용형/g, '빛나는 온기형'],
    [/규칙형/g, '신뢰의 설계자형'],
    [/자유형/g, '자유로운 탐험가형'],
    [/통찰형/g, '지혜로운 등대형'],
    [/안정형/g, '참사랑과 말씀 균형형'],
    [/공감형/g, '마음을 읽는 거울형'],
    [/창의형/g, '창의적 놀이터형'],
    [/회복형/g, '회복탄력의 봄형']
  ];

  for (const key in CHEMISTRY_MAP) {
    let item = CHEMISTRY_MAP[key];
    for (const field of ['title', 'summary', 'clash', 'synergy']) {
      if (item[field]) {
        let text = item[field];
        for (const [regex, replacement] of translations) {
          text = text.replace(regex, replacement);
        }
        item[field] = text;
      }
    }
  }
}

// Inject Unificationist specific conflicts (e.g. Academics vs Worship)
if (typeof CHEMISTRY_MAP !== 'undefined') {
  if (CHEMISTRY_MAP['structured-warm']) {
    CHEMISTRY_MAP['structured-warm'].clash += `
    <br><p>🚨 <strong>현실적인 신앙 vs 학업 갈등</strong><br>
    일요일 아침, 신뢰의 설계자 부모는 주일 대예배와 성화학생 활동 참석을 단호한 천법이자 도리로 생각하여 고집하는 반면, 빛나는 온기의 부모는 자녀의 시험 기간 학업 스트레스와 피로를 염려해 "이번 주만 학원 자습을 가거나 쉬게 해주자"며 타협하려 합니다. 이로 인해 부부 사이에 '신앙 관리 소홀' vs '자녀에 대한 집착'이라는 엇박자 훈육 갈등이 깊어집니다.</p>`;
  }
  if (CHEMISTRY_MAP['free-structured']) {
    CHEMISTRY_MAP['free-structured'].clash += `
    <br><p>🚨 <strong>현실적인 신앙 vs 학업 갈등</strong><br>
    자녀의 학업 성적과 일요일 학원 스케줄이 주일예배 및 성화 수련회와 겹칠 때 극심한 갈등이 발생합니다. 신뢰의 설계자 부모는 신앙의 기둥을 지키기 위해 예배를 양보할 수 없다고 주장하지만, 자유로운 탐험가 부모는 자녀의 진로와 학업 성취도 또한 하늘이 주신 개성완성의 과정이므로 자녀의 자율적 선택에 맡겨야 한다고 대립합니다.</p>`;
  }
  if (CHEMISTRY_MAP['structured-structured']) {
    CHEMISTRY_MAP['structured-structured'].clash += `
    <br><p>🚨 <strong>동일 유형의 율법주의적 사각지대</strong><br>
    두 부모 모두 원칙과 규율(예배, 훈독)을 강력하게 밀어붙이다 보니, 자녀가 사춘기 방황의 끝에 "나 이제 참부모님 사진 방에서 떼어내고 싶어, 왜 우리 집은 세상 친구들처럼 풍요롭게 살지 못하고 섭리 정성만 드려?"라며 울분을 터뜨릴 때, 가슴으로 안아주기보다 탕감 노정의 역사와 설교로만 누르려 하여 자녀의 마음 문을 완전히 닫게 만들 수 있습니다.</p>`;
  }
}
