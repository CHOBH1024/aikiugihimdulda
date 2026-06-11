const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const target = 'document.addEventListener("DOMContentLoaded", () => {';
const replacement = `document.addEventListener("DOMContentLoaded", () => {
                // Check local storage for recent results
                const recentResults = localStorage.getItem('mirrorInsideResults');
                if (recentResults) {
                    try {
                        const parsed = JSON.parse(recentResults);
                        if (parsed && parsed.overallPersona) {
                            const heroActions = document.querySelector('.hero__actions');
                            const recentBtn = document.createElement('a');
                            recentBtn.href = '/result.html';
                            recentBtn.className = 'btn btn--secondary btn--large';
                            recentBtn.innerHTML = '🌟 최근 진단 결과 이어보기';
                            recentBtn.style.background = '#fbbf24';
                            recentBtn.style.color = '#fff';
                            recentBtn.style.borderColor = '#f59e0b';
                            recentBtn.style.animation = 'pulse 2s infinite';
                            
                            // Insert at the top of heroActions
                            heroActions.insertBefore(recentBtn, heroActions.firstChild);
                        }
                    } catch(e) {}
                }
`;

html = html.replace(target, replacement);

// Also need to update the MBTI and Preview logic to use SEO pages since SPA was adopted?
html = html.replace(/window\.location\.href = 'result\.html\?mbti=' \+ m/g, "window.location.href = '/mbti/' + m.toLowerCase() + '.html'");
html = html.replace(/window\.location\.href = 'result\.html\?preview=' \+ p\.combo/g, "window.location.href = '/mbti/' + p.combo + '.html'");

fs.writeFileSync('index.html', html);
console.log('index.html updated!');
