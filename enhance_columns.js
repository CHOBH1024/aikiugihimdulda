const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'columns');
if (!fs.existsSync(dir)) {
    console.error("Columns directory not found.");
    process.exit(1);
}

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const additionalCSS = [
    ".tldr-box { background: linear-gradient(135deg, rgba(52,211,153,0.1), rgba(16,185,129,0.05)); border-left: 4px solid var(--primary); padding: 24px; border-radius: 0 var(--radius-md) var(--radius-md) 0; margin-bottom: 40px; position: relative; }",
    ".tldr-box::before { content: '💡 TL;DR 핵심 요약'; display: block; font-weight: 800; color: var(--primary); margin-bottom: 12px; font-size: 1.1rem; }",
    ".tldr-box p { margin-bottom: 0 !important; }",
    ".action-checkbox-wrapper { margin: 20px 0; padding: 16px 20px; background: var(--bg-card); border: 2px solid var(--glass-border); border-radius: var(--radius-md); display: flex; align-items: flex-start; gap: 12px; cursor: pointer; transition: all 0.3s; box-shadow: var(--shadow-soft); }",
    ".action-checkbox-wrapper:hover { border-color: var(--primary); transform: translateY(-2px); box-shadow: 0 4px 12px rgba(52,211,153,0.15); }",
    ".action-checkbox-wrapper.checked { background: rgba(52,211,153,0.05); border-color: var(--primary); }",
    ".action-checkbox-wrapper.checked .action-text { text-decoration: line-through; color: var(--text-dim); }",
    ".action-checkbox { appearance: none; width: 24px; height: 24px; border: 2px solid var(--text-dim); border-radius: 6px; margin-top: 2px; cursor: pointer; position: relative; transition: all 0.2s; flex-shrink: 0; }",
    ".action-checkbox:checked { background-color: var(--primary); border-color: var(--primary); }",
    ".action-checkbox:checked::after { content: '✔'; color: white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 14px; font-weight: bold; }",
    ".action-text { font-size: 1.05rem; line-height: 1.6; color: var(--text-main); transition: color 0.3s; }",
    ".toc-container { position: fixed; bottom: 30px; right: 30px; z-index: 1000; display: flex; flex-direction: column; align-items: flex-end; }",
    ".toc-toggle { width: 56px; height: 56px; border-radius: 50%; background: var(--primary); color: white; border: none; box-shadow: 0 4px 16px rgba(52,211,153,0.4); cursor: pointer; font-size: 1.5rem; display: flex; align-items: center; justify-content: center; transition: all 0.3s; }",
    ".toc-toggle:hover { transform: scale(1.1); }",
    ".toc-panel { background: var(--bg-card); border: 1px solid var(--glass-border); border-radius: var(--radius-md); padding: 20px; width: 280px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); margin-bottom: 16px; display: none; flex-direction: column; gap: 10px; opacity: 0; transform: translateY(20px); transition: all 0.3s; max-height: 60vh; overflow-y: auto; }",
    ".toc-panel.active { display: flex; opacity: 1; transform: translateY(0); }",
    ".toc-link { color: var(--text-body); text-decoration: none; font-size: 0.95rem; transition: color 0.2s; padding-left: 8px; border-left: 2px solid transparent; line-height: 1.4; }",
    ".toc-link:hover, .toc-link.active { color: var(--primary); border-left-color: var(--primary); font-weight: 700; }",
    ".toc-link.h3 { padding-left: 20px; font-size: 0.85rem; }",
    ".expert-profile { margin-top: 60px; padding: 32px; background: var(--bg-section); border-radius: var(--radius-lg); display: flex; align-items: center; gap: 24px; }",
    ".expert-avatar { width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, #A8E6CF, #88D8B0); display: flex; align-items: center; justify-content: center; font-size: 2.5rem; flex-shrink: 0; }",
    ".expert-info h4 { margin: 0 0 8px 0; font-size: 1.2rem; color: var(--text-main); font-weight: 800; }",
    ".expert-info p { margin: 0; font-size: 0.95rem; color: var(--text-body); line-height: 1.6; }",
    "@media (max-width: 768px) { .toc-container { bottom: 80px; right: 20px; } .expert-profile { flex-direction: column; text-align: center; } }"
].join('\\n');

const jsLogic = [
    "document.addEventListener('DOMContentLoaded', () => {",
    "    const article = document.querySelector('.article-content');",
    "    if (!article) return;",
    "    const headings = Array.from(article.querySelectorAll('h2, h3'));",
    "    if (headings.length > 0) {",
    "        const tocContainer = document.createElement('div');",
    "        tocContainer.className = 'toc-container';",
    "        const tocPanel = document.createElement('div');",
    "        tocPanel.className = 'toc-panel';",
    "        let tocHTML = '<h4 style=\"margin:0 0 12px 0;font-weight:800;border-bottom:1px solid var(--glass-border);padding-bottom:12px;\">📑 목차</h4>';",
    "        headings.forEach((heading, index) => {",
    "            const id = 'heading-' + index;",
    "            heading.id = id;",
    "            const levelClass = heading.tagName.toLowerCase() === 'h3' ? 'h3' : 'h2';",
    "            tocHTML += '<a href=\"#' + id + '\" class=\"toc-link ' + levelClass + '\">' + heading.textContent + '</a>';",
    "        });",
    "        tocPanel.innerHTML = tocHTML;",
    "        const tocToggle = document.createElement('button');",
    "        tocToggle.className = 'toc-toggle';",
    "        tocToggle.innerHTML = '<i class=\"fas fa-list-ul\"></i>';",
    "        tocToggle.onclick = () => { tocPanel.classList.toggle('active'); };",
    "        tocContainer.appendChild(tocPanel);",
    "        tocContainer.appendChild(tocToggle);",
    "        document.body.appendChild(tocContainer);",
    "        const tocLinks = tocPanel.querySelectorAll('.toc-link');",
    "        window.addEventListener('scroll', () => {",
    "            let current = '';",
    "            headings.forEach(h => { if (window.scrollY >= h.offsetTop - 150) current = h.getAttribute('id'); });",
    "            tocLinks.forEach(link => {",
    "                link.classList.remove('active');",
    "                if (link.getAttribute('href') === '#' + current) link.classList.add('active');",
    "            });",
    "        });",
    "    }",
    "    const pageId = window.location.pathname.split('/').pop().replace('.html', '') || 'col';",
    "    const checkboxes = document.querySelectorAll('.action-checkbox');",
    "    checkboxes.forEach((cb, i) => {",
    "        const key = 'action_' + pageId + '_' + i;",
    "        if (localStorage.getItem(key) === 'true') {",
    "            cb.checked = true;",
    "            cb.parentElement.classList.add('checked');",
    "        }",
    "        cb.addEventListener('change', (e) => {",
    "            localStorage.setItem(key, e.target.checked);",
    "            if (e.target.checked) {",
    "                e.target.parentElement.classList.add('checked');",
    "                if (typeof confetti !== 'undefined') {",
    "                    const rect = e.target.getBoundingClientRect();",
    "                    confetti({ particleCount: 40, spread: 40, origin: { x: (rect.left + rect.width / 2) / window.innerWidth, y: (rect.top + rect.height / 2) / window.innerHeight }, colors: ['#34d399', '#fbbf24'] });",
    "                }",
    "            } else {",
    "                e.target.parentElement.classList.remove('checked');",
    "            }",
    "        });",
    "    });",
    "});"
].join('\\n');

const expertProfileHTML = [
    '<div class="expert-profile">',
    '    <div class="expert-avatar">🧑‍🏫</div>',
    '    <div class="expert-info">',
    '        <h4>Mirror Inside 아동심리 연구팀</h4>',
    '        <p>수만 건의 육아 상담 데이터를 바탕으로, 발달 심리학적 이론을 부모님들의 현실 육아에 바로 적용할 수 있는 실천적 솔루션으로 변환하여 연구합니다.</p>',
    '    </div>',
    '</div>'
].join('\\n');

let count = 0;
files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    if (content.includes('tldr-box') || content.includes('action-checkbox')) {
        console.log('Skipping ' + file);
        return;
    }

    content = content.replace('</style>', additionalCSS + '\\n    </style>');

    const quoteRegex = /<blockquote[^>]*>([\s\S]*?💡[\s\S]*?)<\/blockquote>/;
    const match = content.match(quoteRegex);
    if (match) {
        let text = match[1].replace(/<\/?p>/g, '').replace(/<\/?strong>/g, '').replace('💡 객관적 진단 (Objective Analysis)', '').trim();
        content = content.replace(quoteRegex, '\\n<div class="tldr-box"><p>' + text + '</p></div>\\n');
    } else {
        const pRegex = /<h1[^>]*>[^<]*<\/h1>\s*<p>([\s\S]*?)<\/p>/;
        const pMatch = content.match(pRegex);
        if (pMatch) {
            content = content.replace(pRegex, (m, p1) => {
                return m.replace('<p>' + p1 + '</p>', '\\n<div class="tldr-box"><p>' + p1 + '</p></div>\\n');
            });
        }
    }

    const actionBlockRegex = /<blockquote[^>]*>[\s\S]*?<p[^>]*>[\s\S]*?\[실천\]([\s\S]*?)<\/p>[\s\S]*?<\/blockquote>/g;
    content = content.replace(actionBlockRegex, (m, after) => {
        let cleanText = after.replace(/<\/?strong>/g, '').replace(/<br\s*\/?>/g, ' ').trim();
        return '\\n        <label class="action-checkbox-wrapper">\\n            <input type="checkbox" class="action-checkbox">\\n            <div class="action-text">\\n                <strong style="color:var(--primary);">실천 과제:</strong> ' + cleanText + '\\n            </div>\\n        </label>';
    });

    const actionPRegex = /<p[^>]*>[\s\S]*?\[실천\]([\s\S]*?)<\/p>/g;
    content = content.replace(actionPRegex, (m, after) => {
        let cleanText = after.replace(/<\/?strong>/g, '').replace(/<br\s*\/?>/g, ' ').trim();
        return '\\n        <label class="action-checkbox-wrapper">\\n            <input type="checkbox" class="action-checkbox">\\n            <div class="action-text">\\n                <strong style="color:var(--primary);">실천 과제:</strong> ' + cleanText + '\\n            </div>\\n        </label>';
    });

    content = content.replace('</article>', expertProfileHTML + '\\n        </article>');
    content = content.replace('</body>', '<script>\\n' + jsLogic + '\\n</script>\\n</body>');

    fs.writeFileSync(path.join(dir, file), content, 'utf8');
    console.log('Enhanced ' + file);
    count++;
});
console.log('Finished ' + count);
