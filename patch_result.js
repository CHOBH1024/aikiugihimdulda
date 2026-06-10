const fs = require('fs');

let html = fs.readFileSync('result.html', 'utf8');

// Replace the harshAdvice block with the interactive Fact Bomb Container
const harshAdviceOld = `<div style="background: rgba(239, 68, 68, 0.05); border-radius: 16px; padding: 24px; text-align: left; border: 1px solid rgba(239, 68, 68, 0.2);">
                                        <h4 style="font-size: 1rem; color: #ef4444; margin-bottom: 12px;">⚡ 성장을 위한 뼈때리는 조언</h4>
                                        <p style="font-size: 0.95rem; color: var(--text-main); line-height: 1.6; font-weight: 600;">\${overallPersona.harshAdvice || '균형을 잃지 않는 것이 가장 중요합니다.'}</p>
                                    </div>`;

const harshAdviceNew = `<div class="fact-bomb-container" id="factBombContainer">
                                        <div class="fact-bomb-overlay" id="factBombOverlay">
                                            <i class="fas fa-bomb" style="font-size:2.5rem; color:#ef4444; margin-bottom:12px; filter: drop-shadow(0 4px 10px rgba(239,68,68,0.4));"></i>
                                            <h4 style="font-size: 1.2rem; font-weight: 800; color: #ef4444; margin-bottom: 8px; letter-spacing: -0.5px;">🚨 열람 주의</h4>
                                            <p style="font-size: 0.9rem; color: var(--text-body); margin-bottom: 20px; word-break: keep-all; line-height: 1.4;">이 조언은 매우 직설적입니다.<br>뼈 맞을 각오가 되셨다면 해제하세요.</p>
                                            <button class="btn-unlock-fact" onclick="unlockFactBomb()">🔓 잠금 해제하기</button>
                                        </div>
                                        <div class="fact-bomb-content" id="factBombContent">
                                            <h4 style="font-size: 1.1rem; color: #ef4444; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;"><i class="fas fa-bolt"></i> 성장을 위한 뼈 때리는 조언</h4>
                                            <p style="font-size: 0.95rem; color: var(--text-main); line-height: 1.6; font-weight: 600; margin-bottom: 24px; word-break: keep-all;">\${overallPersona.harshAdvice || '균형을 잃지 않는 것이 가장 중요합니다.'}</p>
                                            <button class="btn-share-postcard" onclick="downloadPostcard()"><i class="fas fa-camera-retro"></i> 이 조언을 엽서로 저장하기</button>
                                        </div>
                                    </div>`;

if(html.includes(harshAdviceOld)) {
    html = html.replace(harshAdviceOld, harshAdviceNew);
} else {
    console.log("Could not find harshAdvice block to replace.");
}

// Inject Postcard Area HTML
const postcardHTML = `
    <!-- Hidden Postcard Capture Area -->
    <div id="postcardArea" class="postcard-wrapper">
        <div class="postcard-inner">
            <div class="postcard-quote-mark">"</div>
            <div class="postcard-text" id="pcText"></div>
            <div class="postcard-divider"></div>
            <div class="postcard-author" id="pcAuthor"></div>
            <div class="postcard-footer">
                <div class="pc-brand">🪞 Mirror Inside Parenting</div>
            </div>
        </div>
    </div>
`;

if(!html.includes('id="postcardArea"')) {
    html = html.replace('<!-- Hidden Capture Area -->', postcardHTML + '\n    <!-- Hidden Capture Area -->');
}

// Inject Postcard data binding in renderResults
const postcardDataBind = `
            // Postcard Data Binding
            document.getElementById('pcText').innerHTML = (overallPersona.factBomb || overallPersona.harshAdvice || '').replace(/\\n/g, '<br>');
            document.getElementById('pcAuthor').textContent = \`- \${overallPersona.name} -\`;
`;
if(!html.includes('pcText')) {
    html = html.replace('// Set up capture area', postcardDataBind + '\n            // Set up capture area');
}

// Inject JS functions
const jsFunctions = `
        function unlockFactBomb() {
            const container = document.getElementById('factBombContainer');
            
            // Screen Shake Effect
            container.classList.add('shake-anim');
            
            setTimeout(() => {
                container.classList.remove('shake-anim');
                container.classList.add('unlocked');
            }, 600);
        }

        async function downloadPostcard() {
            const btn = document.querySelector('.btn-share-postcard');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 엽서 굽는 중...';
            
            const el = document.getElementById('postcardArea');
            el.style.left = '0';
            el.style.top = '0';
            el.style.zIndex = '9999';
            el.style.visibility = 'visible';
            
            try {
                // Wait briefly for DOM to settle
                await new Promise(r => setTimeout(r, 100));
                const canvas = await html2canvas(el, { scale: 3, backgroundColor: '#0F172A', useCORS: true });
                const link = document.createElement('a');
                link.download = \`mirror_inside_fact_bomb.png\`;
                link.href = canvas.toDataURL('image/png', 1.0);
                link.click();
                btn.innerHTML = '<i class="fas fa-check"></i> 저장 완료!';
            } catch (e) {
                console.error(e);
                alert('엽서 저장에 실패했습니다.');
                btn.innerHTML = originalText;
            } finally {
                el.style.left = '-9999px';
                el.style.zIndex = '-100';
                el.style.visibility = 'hidden';
                setTimeout(() => { if (btn.innerHTML.includes('완료')) btn.innerHTML = originalText; }, 3000);
            }
        }
`;

if(!html.includes('function unlockFactBomb()')) {
    html = html.replace('function shareKakao()', jsFunctions + '\n        function shareKakao()');
}

fs.writeFileSync('result.html', html);
console.log('result.html updated successfully.');
