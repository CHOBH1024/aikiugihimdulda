const fs = require('fs');
const path = require('path');

// Replacements: [pattern, replacement] pairs
const replacements = [
    // Title & section headings
    [/피 튀기는 링 위에서/g, '딜레마 속에서'],
    [/뼈 때리는 실전 대화법/g, '효과적인 실전 대화법'],
    [/뼈 때리는 직관적 감정/g, '효과적인 감정'],
    [/뼈 때리는 훈육/g, '효과적인 훈육'],
    [/뼈 때리는 인지 성장/g, '핵심 인지 성장'],
    [/뼈 때리는 등원/g, '효과적인 등원'],
    [/뼈 때리는 격려/g, '효과적인 격려'],
    [/뼈 때리는 '방관'/g, "효과적인 '중재'"],
    [/뼈 때리는 지침/g, '실전 행동 지침'],
    [/뼈 때리는 행동/g, '핵심 행동'],
    [/뼈 때리는 집중력/g, '집중력'],
    [/뼈 때리는 진짜/g, '실용적인 진짜'],
    [/뼈 때리는/g, '핵심'],  // catch-all for any remaining
    
    // Aggressive intros/conclusions
    [/돌직구 결론/g, '핵심 결론'],
    [/스스로에게 던지는 돌직구 질문/g, '스스로를 점검하는 질문'],
    [/돌직구/g, '솔직한'],
    
    // Aggressive metaphors
    [/칼춤을 추십시오/g, '단호하게 대응하십시오'],
    [/맘충\/나쁜 부모/g, '형편없는 부모'],
    [/맘충/g, '부족한 부모'],
    [/영혼 없이 앵무새처럼/g, '형식적으로'],
    [/영혼 없이/g, '무심코'],
    [/앵무새처럼/g, '기계적으로'],
    [/폭력적인 통제로 입을 틀어막지 마십시오/g, '강제적인 통제로 감정을 억누르지 마십시오'],
    [/뒤의 모든 대화법은 쓰레기입니다/g, '이후의 대화법은 효과를 발휘하기 어렵습니다'],
    [/쓰레기입니다/g, '효과적이지 않습니다'],
    [/발악할 때/g, '크게 울부짖을 때'],
    [/발악하나요/g, '더 크게 울부짖나요'],
    [/발악/g, '강렬한 감정 표현'],
    [/피가 거꾸로 솟는/g, '감정이 격해지는'],
    [/고발합니다/g, '분석합니다'],
    [/폭로합니다/g, '살펴봅니다'],
    [/폭로/g, '분석'],
    [/"살려주세요"/g, '"도와주세요"'],
    [/'살려주세요'/g, "'도와주세요'"],
];

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    for (const [pattern, replacement] of replacements) {
        const newContent = content.replace(pattern, replacement);
        if (newContent !== content) {
            modified = true;
            content = newContent;
        }
    }
    
    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed: ${filePath}`);
    } else {
        console.log(`⏭️  No changes: ${filePath}`);
    }
}

function processDirectory(dir) {
    const entries = fs.readdirSync(dir);
    for (const entry of entries) {
        const fullPath = path.join(dir, entry);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (entry.endsWith('.md')) {
            processFile(fullPath);
        }
    }
}

console.log('🔧 Fixing aggressive language in blog posts...\n');
processDirectory('blog_posts');
console.log('\n✨ Done! All blog post files have been processed.');
