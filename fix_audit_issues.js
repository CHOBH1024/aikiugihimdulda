const fs = require('fs');
const path = require('path');

const DIR = __dirname;

// 1. result.html 브라우저 URL 교체 로직 주입 (공유 링크 버그 픽스)
const resultHtmlPath = path.join(DIR, 'result.html');
let resultHtml = fs.readFileSync(resultHtmlPath, 'utf8');

if (!resultHtml.includes("window.history.replaceState(")) {
    resultHtml = resultHtml.replace(
        `} else {\n            results = loadResults();\n        }`,
        `} else {\n            results = loadResults();\n            if (results && results.overallPersona) {\n                window.history.replaceState(null, '', '/mbti/' + results.overallPersona.combo + '.html');\n            }\n        }`
    );
    fs.writeFileSync(resultHtmlPath, resultHtml, 'utf8');
    console.log('Fixed result.html sharing URL logic.');
}

// 2. 주요 페이지 og 메타 태그 일괄 추가 및 빈 줄 제거
const filesToProcess = [
    'index.html', 'test.html', 'columns.html', 'gallery.html', 'chemistry.html', 'result.html', 'about.html'
];

const OG_TAGS = `
    <meta property="og:title" content="Mirror Inside Parenting — 나의 육아 스타일, 거울 속에서 만나보세요 🪞">
    <meta property="og:description" content="3분이면 충분해요. 당신만의 육아 페르소나를 발견하고, 아이와 더 가까워지는 방법을 알아보세요.">
    <meta property="og:image" content="https://aikiugihimdulda.vercel.app/assets/images/icons/hello.png">
    <meta property="og:url" content="https://aikiugihimdulda.vercel.app/">
    <meta property="og:type" content="website">
`;

filesToProcess.forEach(file => {
    const p = path.join(DIR, file);
    if (!fs.existsSync(p)) return;
    
    let content = fs.readFileSync(p, 'utf8');
    
    // Remove empty line chunks (3 or more newlines)
    content = content.replace(/\n\s*\n\s*\n+/g, '\n\n');
    
    // Add OG tags if not present (mbti pages already have them, we skip those, and we check if already added)
    if (!content.includes('og:image')) {
        // Find </head> or <link rel="stylesheet"
        if (content.includes('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/')) {
            content = content.replace(
                /<link rel="stylesheet" href="https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/font-awesome\//,
                `${OG_TAGS.trim()}\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/`
            );
        } else {
            content = content.replace('</head>', `${OG_TAGS.trim()}\n</head>`);
        }
    }
    
    fs.writeFileSync(p, content, 'utf8');
    console.log(`Processed ${file} (added OG tags & cleaned empty lines)`);
});

console.log('All audit issues fixed!');
