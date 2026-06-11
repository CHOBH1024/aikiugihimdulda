const fs = require('fs');

// ===== 1. test.html 수정 =====
let html = fs.readFileSync('test.html', 'utf8');

// 1-a. CSS 추가 (age-btn, mode-card 스타일)
const newCSS = `
        /* ===== Age Selection Buttons ===== */
        .age-btn {
            display: flex;
            align-items: center;
            gap: 16px;
            width: 100%;
            padding: 18px 24px;
            background: #FFFFFF;
            border: 2px solid #E2E8F0;
            border-radius: 16px;
            cursor: pointer;
            transition: all 0.25s ease;
            color: #1E293B;
            text-align: left;
            box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        .age-btn:hover {
            border-color: var(--primary);
            background: rgba(52, 211, 153, 0.06);
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(52,211,153,0.18);
            color: #0F172A;
        }
        .age-btn__emoji { font-size: 2rem; flex-shrink: 0; }
        .age-btn__label { flex: 1; display: flex; flex-direction: column; gap: 2px; }
        .age-btn__label strong { font-size: 1.05rem; font-weight: 800; color: #1E293B; }
        .age-btn__label small { font-size: 0.85rem; color: #64748B; font-weight: 500; }
        .age-btn__arrow { color: #94A3B8; font-size: 0.85rem; }
        .age-btn:hover .age-btn__arrow { color: var(--primary); }

        /* ===== Mode Cards ===== */
        .mode-card {
            display: flex;
            flex-direction: column;
            gap: 12px;
            width: 100%;
            padding: 24px;
            background: rgba(255,255,255,0.06);
            border: 2px solid var(--glass-border);
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            color: var(--text-main);
            text-align: left;
        }
        .mode-card:hover {
            border-color: var(--primary);
            background: rgba(52,211,153,0.08);
            transform: translateY(-3px);
            box-shadow: 0 12px 32px rgba(52,211,153,0.15);
        }
        .mode-card--pro { border-color: rgba(192,132,252,0.3); }
        .mode-card--pro:hover { border-color: #c084fc; background: rgba(192,132,252,0.06); }
        .mode-card__header { display: flex; align-items: center; gap: 14px; }
        .mode-card__icon { font-size: 2rem; }
        .mode-card__title { font-size: 1.1rem; font-weight: 800; color: var(--text-main); }
        .mode-card__meta { font-size: 0.85rem; color: var(--primary); font-weight: 700; margin-top: 2px; }
        .mode-card--pro .mode-card__meta { color: #c084fc; }
        .mode-card__badge {
            margin-left: auto;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 800;
            background: rgba(52,211,153,0.15);
            color: var(--primary);
            border: 1px solid rgba(52,211,153,0.3);
        }
        .mode-card__badge--pro {
            background: rgba(192,132,252,0.15);
            color: #c084fc;
            border-color: rgba(192,132,252,0.3);
        }
        .mode-card__desc { font-size: 0.9rem; color: var(--text-body); line-height: 1.6; word-break: keep-all; margin: 0; }
`;

// </style> 직전에 CSS 삽입
html = html.replace('    </style>', newCSS + '\n    </style>');

// 1-b. 연령대 선택 버튼 교체
html = html.replace(
    /<div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 400px; margin: 0 auto;">\s*<button class="option-btn" onclick="selectAge\('infant'\)">\s*<span class="option-btn__label">👶<\/span>\s*영아기 \(0~12개월\)\s*<\/button>\s*<button class="option-btn" onclick="selectAge\('toddler'\)">\s*<span class="option-btn__label">🍼<\/span>\s*걸음마기 \(1~3세\)\s*<\/button>\s*<button class="option-btn" onclick="selectAge\('preschool'\)">\s*<span class="option-btn__label">🧸<\/span>\s*유아기 \(4~7세\)\s*<\/button>\s*<button class="option-btn" onclick="selectAge\('school'\)">\s*<span class="option-btn__label">🎒<\/span>\s*학령기 \(8세 이상\)\s*<\/button>\s*<\/div>/,
    `<div style="display: flex; flex-direction: column; gap: 14px; width: 100%; max-width: 420px; margin: 0 auto;">
                    <button class="age-btn" onclick="selectAge('infant')">
                        <span class="age-btn__emoji">👶</span>
                        <span class="age-btn__label">
                            <strong>영아기</strong>
                            <small>0 ~ 12개월</small>
                        </span>
                        <i class="fas fa-chevron-right age-btn__arrow"></i>
                    </button>
                    <button class="age-btn" onclick="selectAge('toddler')">
                        <span class="age-btn__emoji">🍼</span>
                        <span class="age-btn__label">
                            <strong>걸음마기</strong>
                            <small>1 ~ 3세</small>
                        </span>
                        <i class="fas fa-chevron-right age-btn__arrow"></i>
                    </button>
                    <button class="age-btn" onclick="selectAge('preschool')">
                        <span class="age-btn__emoji">🧸</span>
                        <span class="age-btn__label">
                            <strong>유아기</strong>
                            <small>4 ~ 7세</small>
                        </span>
                        <i class="fas fa-chevron-right age-btn__arrow"></i>
                    </button>
                    <button class="age-btn" onclick="selectAge('school')">
                        <span class="age-btn__emoji">🎒</span>
                        <span class="age-btn__label">
                            <strong>학령기</strong>
                            <small>8세 이상</small>
                        </span>
                        <i class="fas fa-chevron-right age-btn__arrow"></i>
                    </button>
                </div>`
);

// 1-c. 모드 선택 카드 교체
html = html.replace(
    /<div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 400px; margin: 0 auto;">\s*<button class="option-btn" onclick="selectMode\('lite'\)">\s*<span class="option-btn__label">⏱️<\/span>\s*간편 진단 \(20문항 \/ 약 3분\)\s*<\/button>\s*<button class="option-btn" onclick="selectMode\('pro'\)">\s*<span class="option-btn__label">🔬<\/span>\s*심층 진단 \(20문항 심층분석 \/ 약 5분\)\s*<\/button>\s*<\/div>/,
    `<div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 440px; margin: 0 auto;">
                    <button class="mode-card" onclick="selectMode('lite')">
                        <div class="mode-card__header">
                            <span class="mode-card__icon">⏱️</span>
                            <div>
                                <div class="mode-card__title">표준 진단</div>
                                <div class="mode-card__meta">25문항 · 약 5분</div>
                            </div>
                            <span class="mode-card__badge">추천</span>
                        </div>
                        <p class="mode-card__desc">바움린드·볼비 이론 기반 핵심 5개 차원, 각 5문항으로 균형 잡힌 결과를 제공합니다.</p>
                    </button>
                    <button class="mode-card mode-card--pro" onclick="selectMode('pro')">
                        <div class="mode-card__header">
                            <span class="mode-card__icon">🔬</span>
                            <div>
                                <div class="mode-card__title">심층 진단</div>
                                <div class="mode-card__meta">40문항 · 약 10분</div>
                            </div>
                            <span class="mode-card__badge mode-card__badge--pro">정밀</span>
                        </div>
                        <p class="mode-card__desc">SDT·가트맨·드웩 이론을 추가 반영한 심층 문항으로 서브타입까지 정밀 분석합니다.</p>
                    </button>
                </div>`
);

// 1-d. selectMode 함수 수정: 모드에 따라 문항 세트 선택
html = html.replace(
    /function selectMode\(mode\) \{[\s\S]*?localStorage\.setItem\('mirrorInsideTestMode', mode\);[\s\S]*?document\.getElementById\('modeSelectionScreen'\)\.style\.display = 'none';[\s\S]*?activeQuestions = QUESTIONS;[\s\S]*?startTest\(\);[\s\S]*?\}/,
    `function selectMode(mode) {
            localStorage.setItem('mirrorInsideTestMode', mode);
            document.getElementById('modeSelectionScreen').style.display = 'none';
            if (mode === 'pro') {
                activeQuestions = QUESTIONS_40;
            } else {
                activeQuestions = QUESTIONS_25;
            }
            startTest();
        }`
);

// 1-e. resumeTest, startFresh도 모드 기반으로 수정
html = html.replace(
    /function resumeTest\(\) \{[\s\S]*?if \(saved\) \{[\s\S]*?answers = saved\.answers;[\s\S]*?currentIndex = saved\.currentIndex;[\s\S]*?\}[\s\S]*?activeQuestions = QUESTIONS;[\s\S]*?startTest\(\);[\s\S]*?\}/,
    `function resumeTest() {
            const saved = loadProgress();
            if (saved) {
                answers = saved.answers;
                currentIndex = saved.currentIndex;
            }
            const mode = localStorage.getItem('mirrorInsideTestMode');
            activeQuestions = (mode === 'pro') ? QUESTIONS_40 : QUESTIONS_25;
            startTest();
        }`
);

html = html.replace(
    /function startFresh\(\) \{[\s\S]*?clearProgress\(\);[\s\S]*?answers = \[\];[\s\S]*?currentIndex = 0;[\s\S]*?activeQuestions = QUESTIONS;[\s\S]*?startTest\(\);[\s\S]*?\}/,
    `function startFresh() {
            clearProgress();
            answers = [];
            currentIndex = 0;
            const mode = localStorage.getItem('mirrorInsideTestMode');
            activeQuestions = (mode === 'pro') ? QUESTIONS_40 : QUESTIONS_25;
            startTest();
        }`
);

// 1-f. 인트로 문항 수 텍스트 수정
html = html.replace('20가지 리얼한 상황으로', '25~40가지 실제 육아 시나리오로');
html = html.replace(/\<i class="fas fa-list-check"\><\/i\> 20문항/, '<i class="fas fa-list-check"></i> 25 / 40문항');
html = html.replace(/약 3~5분/, '약 5~10분');

fs.writeFileSync('test.html', html);
console.log('✅ test.html 수정 완료');
