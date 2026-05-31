const fs = require('fs');
let html = fs.readFileSync('columns.html', 'utf8');

const newLink = `
            <a href="columns/scientific-foundation.html" class="column-card">
                <div class="column-card__tag">#진단근거 #발달심리학 #학술적배경</div>
                <h2 class="column-card__title">Mirror Inside 진단 도구의 과학적·학술적 근거</h2>
                <p class="column-card__desc">단순한 심리테스트가 아닙니다. 다이애나 바움린드, 존 가트맨 등 세계적 심리학자들의 이론에 기반한 진단 도구의 설계 비밀을 공개합니다.</p>
                <div class="column-card__footer">
                    <span class="column-card__date">2026.05.31</span>
                    <span class="column-card__read">읽기 5분</span>
                </div>
            </a>
`;

html = html.replace('<div class="column-grid">', '<div class="column-grid">\n' + newLink);

fs.writeFileSync('columns.html', html);
console.log('columns.html updated');
