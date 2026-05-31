const fs = require('fs');
let html = fs.readFileSync('result.html', 'utf8');

// Replace the photocard content
const newPhotocardHTML = `
                        <div class="photocard__content">
                            <div class="photocard__tags" style="margin-bottom: 12px;">
                                \${overallPersona.keywords ? overallPersona.keywords.split(' ').map(k => \`<span class="tag-pill" style="background: var(--primary-dim); color: var(--primary); border:none;">\${k}</span>\`).join('') : ''}
                            </div>
                            <h1 class="photocard__title" style="margin-bottom: 16px;">\${overallPersona.name}</h1>
                            <p style="font-size: 1.15rem; font-weight: 800; color: var(--primary); margin-bottom: 24px; word-break: keep-all; line-height: 1.5;">\${overallPersona.comfortingWords || overallPersona.coreIdentity}</p>
                            
                            <div style="background: var(--bg-main); border-radius: 16px; padding: 24px; text-align: left; margin-bottom: 24px; border: 1px solid var(--glass-border);">
                                <h4 style="font-size: 1rem; color: var(--text-main); margin-bottom: 12px;">💡 양육의 본질</h4>
                                <p style="font-size: 0.95rem; color: var(--text-body); line-height: 1.6;">\${overallPersona.desc}</p>
                            </div>

                            <div style="background: rgba(239, 68, 68, 0.05); border-radius: 16px; padding: 24px; text-align: left; border: 1px solid rgba(239, 68, 68, 0.2);">
                                <h4 style="font-size: 1rem; color: #ef4444; margin-bottom: 12px;">⚡ 성장을 위한 뼈때리는 조언</h4>
                                <p style="font-size: 0.95rem; color: var(--text-main); line-height: 1.6; font-weight: 600;">\${overallPersona.harshAdvice || '균형을 잃지 않는 것이 가장 중요합니다.'}</p>
                            </div>
                        </div>
`;

html = html.replace(/<div class="photocard__content">[\s\S]*?<\/div>\s*<\/div>\s*<div class="action-buttons">/, newPhotocardHTML.trim() + '\n                    </div>\n\n                    <div class="action-buttons">');

// Remove drawRadarChart(dimensionTypes) call
html = html.replace('drawRadarChart(dimensionTypes);', '');

fs.writeFileSync('result.html', html);
console.log('result.html photocard updated');
