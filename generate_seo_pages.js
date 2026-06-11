const fs = require('fs');
const path = require('path');

// Extract MBTI_MAPPING from data.js
const dataContent = fs.readFileSync('data.js', 'utf8');
const mappingMatch = dataContent.match(/const MBTI_MAPPING = (\{[\s\S]*?\});/);
let MBTI_MAPPING = {};
if (mappingMatch) {
    // using eval to parse the JS object string
    eval(`MBTI_MAPPING = ${mappingMatch[1]}`);
}

const combosMatch = dataContent.match(/const OVERALL_TITLES = (\[[\s\S]*?\]);/);
let OVERALL_TITLES = [];
if (combosMatch) {
    const rawArr = combosMatch[1];
    // A quick hack to parse OVERALL_TITLES since it's just objects, but eval might fail if there are undefined variables.
    // Let's just create a mock mapping of combos to Persona names.
}

// Map of persona combo to name and description
const personas = {
    'warm': { name: '빛나는 온기의 부모', desc: '깊은 애정과 정서적 유대를 기반으로 아이의 내면을 따뜻하게 비추는 양육자입니다.', img: '/assets/images/personas/animal_warm.png' },
    'structured': { name: '단단한 규칙의 부모', desc: '일관된 원칙과 구조화된 환경 속에서 아이가 바른 길로 성장하도록 이끄는 양육자입니다.', img: '/assets/images/personas/animal_structured.png' },
    'free': { name: '바람 같은 자유의 부모', desc: '규칙에 얽매이지 않고 아이의 자율성과 있는 그대로의 모습을 존중하는 양육자입니다.', img: '/assets/images/personas/animal_free.png' },
    'wise': { name: '지혜로운 나침반 부모', desc: '아이 스스로 생각하고 탐구할 수 있도록 지적 호기심을 자극하고 돕는 양육자입니다.', img: '/assets/images/personas/animal_wise.png' },
    'balanced': { name: '중심 잡힌 저울 부모', desc: '따뜻한 사랑과 단호한 훈육 사이에서 유연하게 균형을 맞추는 조화로운 양육자입니다.', img: '/assets/images/personas/animal_balanced.png' },
    'empathetic': { name: '마음을 읽는 다정한 부모', desc: '아이의 감정선을 예민하게 감지하고 어떤 마음이든 포근하게 안아주는 양육자입니다.', img: '/assets/images/personas/animal_empathetic.png' },
    'creative': { name: '반짝이는 상상 부모', desc: '틀에 박히지 않은 유쾌한 아이디어로 아이와 즐거운 놀이 세계를 만드는 양육자입니다.', img: '/assets/images/personas/animal_creative.png' },
    'resilient': { name: '단단한 회복탄력성 부모', desc: '아이가 시련을 마주해도 스스로 딛고 일어설 수 있도록 내면의 힘을 길러주는 양육자입니다.', img: '/assets/images/personas/animal_resilient.png' }
};

const outputDir = path.join(__dirname, 'mbti');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

const template = (title, desc, img, mbtiOrCombo, isMbti) => `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | Mirror Inside 육아 진단</title>
    <meta name="description" content="${desc}">
    <meta property="og:title" content="${title} | Mirror Inside 육아 진단">
    <meta property="og:description" content="${desc}">
    <meta property="og:image" content="https://aikiugihimdulda.vercel.app${img}">
    <meta property="og:url" content="https://aikiugihimdulda.vercel.app/mbti/${mbtiOrCombo}.html">
    <meta property="og:type" content="website">
    <link rel="icon" href="/assets/images/icons/favicon.png" type="image/png">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css">
    <link rel="stylesheet" href="/style.css">
    <script>
        // Store this so when result.html opens, it forces loading this result
        if ('${isMbti}' === 'true') {
            window.location.href = '/result.html?mbti=${mbtiOrCombo}';
        } else {
            window.location.href = '/result.html?preview=${mbtiOrCombo}';
        }
    </script>
</head>
<body style="background: var(--bg-main); display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0;">
    <div style="text-align: center;">
        <div class="loading-dots"><span></span><span></span><span></span></div>
        <p style="margin-top:20px; font-weight:700; color:var(--text-main);">결과를 불러오는 중입니다...</p>
    </div>
</body>
</html>`;

// 1. Generate 16 MBTI pages
for (const [mbti, combo] of Object.entries(MBTI_MAPPING)) {
    const persona = personas[combo] || personas['balanced'];
    const title = `나의 육아 유형은 ${mbti}? (${persona.name})`;
    const html = template(title, persona.desc, persona.img, mbti.toLowerCase(), 'true');
    fs.writeFileSync(path.join(outputDir, `${mbti.toLowerCase()}.html`), html);
}

// 2. Generate 8 Persona Combo pages
for (const [combo, persona] of Object.entries(personas)) {
    const title = `나의 육아 페르소나: ${persona.name}`;
    const html = template(title, persona.desc, persona.img, combo, 'false');
    fs.writeFileSync(path.join(outputDir, `${combo}.html`), html);
}

console.log('Successfully generated 16 MBTI and 8 Persona SEO pages!');
