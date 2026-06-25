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
