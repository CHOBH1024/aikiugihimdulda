const fs = require('fs');
let html = fs.readFileSync('result.html', 'utf8');

const deepAnalysisJS = `
            // Check for Deep Analysis Mode
            const testMode = localStorage.getItem('mirrorInsideTestMode') || 'lite';
            const deepAnalysisSection = document.getElementById('deepAnalysisSection');
            
            if (testMode === 'pro' && savedResults && savedResults.subtypeIndex !== undefined) {
                const subtype = overallPersona.subtypes[savedResults.subtypeIndex];
                
                document.getElementById('deepAnalysisTitle').textContent = subtype.name;
                document.getElementById('deepAnalysisDesc').textContent = subtype.analysis;
                deepAnalysisSection.style.display = 'block';
                
                // Add lock animation effect
                setTimeout(() => {
                    document.getElementById('deepAnalysisLock').style.display = 'none';
                    document.getElementById('deepAnalysisContent').style.display = 'block';
                    document.getElementById('deepAnalysisContent').classList.add('fade-in');
                }, 1000);
            } else {
                deepAnalysisSection.style.display = 'none';
            }
`;

// Insert the UI block inside result.html
const deepAnalysisHTML = `
            <!-- Deep Analysis Section -->
            <div id="deepAnalysisSection" style="display:none; margin: 32px 0;">
                <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: var(--text-main);">
                    <i class="fas fa-microscope" style="color: var(--primary);"></i> 40문항 심층 분석 결과
                </h3>
                <div style="background: var(--bg-card); border-radius: 16px; padding: 24px; border: 1px solid var(--glass-border); position: relative; overflow: hidden;">
                    <div id="deepAnalysisLock" style="position: absolute; inset: 0; background: rgba(30, 41, 59, 0.9); display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 10;">
                        <i class="fas fa-lock-open" style="font-size: 2rem; color: var(--accent); margin-bottom: 12px; animation: pulse 1.5s infinite;"></i>
                        <p style="color: #fff; font-weight: 600;">답변 패턴 분석 중...</p>
                    </div>
                    <div id="deepAnalysisContent" style="display: none;">
                        <span style="display: inline-block; background: var(--primary-dim); color: var(--primary); padding: 4px 10px; border-radius: 8px; font-weight: 700; font-size: 0.85rem; margin-bottom: 8px;">세부 유형</span>
                        <h4 id="deepAnalysisTitle" style="font-size: 1.25rem; color: var(--text-main); margin-bottom: 16px;"></h4>
                        <p id="deepAnalysisDesc" style="font-size: 1rem; color: var(--text-body); line-height: 1.6; word-break: keep-all;"></p>
                    </div>
                </div>
            </div>
`;

// Insert DeepAnalysis HTML before the dimension cards (디테일한 육아 역량)
html = html.replace(/<div class="dimension-grid">/, deepAnalysisHTML + '\n            <div class="dimension-grid">');

// Insert DeepAnalysis JS logic in window.onload
html = html.replace(/document\.getElementById\('overallName'\)\.textContent = overallPersona\.name;/, `document.getElementById('overallName').textContent = overallPersona.name;\n` + deepAnalysisJS);


// KAKAO SHARE LOGIC
const kakaoShareCode = `
        function shareKakao() {
            const url = 'https://aikiugihimdulda.vercel.app';
            const resultUrl = window.location.href;
            const text = \`🪞 Mirror Inside Parenting\\n\\n나의 육아 페르소나 진단 결과가 나왔어요!\\n\\n👉 나의 결과 보기:\\n\${resultUrl}\\n\\n👉 직접 테스트해보기:\\n\${url}\`;

            if (navigator.share) {
                navigator.share({
                    title: 'Mirror Inside 육아 진단',
                    text: text
                }).catch(console.error);
            } else {
                navigator.clipboard.writeText(text).then(() => {
                    alert('결과 링크와 내용이 클립보드에 복사되었습니다!\\n카카오톡 대화창에 붙여넣기 하여 공유해보세요.');
                });
            }
        }
`;

html = html.replace(/function shareKakao\(\) \{[\s\S]*?Kakao\.Share\.sendDefault\(\{[\s\S]*?\}\);[\s\S]*?\}/, kakaoShareCode.trim());
html = html.replace(/<button class="btn btn--outline" onclick="shareKakao\(\)">[\s\S]*?<\/button>/, `<button class="btn btn--outline" onclick="shareKakao()">
                            <i class="fas fa-comment"></i> 카톡 공유하기
                        </button>`);

// Also add a gentle instruction under the share buttons to encourage image saving
const saveImageHint = `
                        <p style="text-align: center; font-size: 0.85rem; color: var(--text-dim); margin-top: 12px;">
                            💡 '인스타 스토리 공유' 버튼을 누르면 이미지가 저장됩니다.
                        </p>
`;
html = html.replace(/<div class="action-buttons">[\s\S]*?<\/div>/, (match) => match + '\n' + saveImageHint);

fs.writeFileSync('result.html', html);
console.log('result.html updated with deep analysis UI and kakao share logic');
