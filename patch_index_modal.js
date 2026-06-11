const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const targetHtml = `            <div class="preview-box__row" style="margin-bottom: 20px;">
                <select id="mbtiSelect">
                    <option value="" disabled selected>MBTI로 내 유형 바로 찾기</option>
                    <option value="INTJ">INTJ</option>
                    <option value="INTP">INTP</option>
                    <option value="ENTJ">ENTJ</option>
                    <option value="ENTP">ENTP</option>
                    <option value="INFJ">INFJ</option>
                    <option value="INFP">INFP</option>
                    <option value="ENFJ">ENFJ</option>
                    <option value="ENFP">ENFP</option>
                    <option value="ISTJ">ISTJ</option>
                    <option value="ISFJ">ISFJ</option>
                    <option value="ESTJ">ESTJ</option>
                    <option value="ESFJ">ESFJ</option>
                    <option value="ISTP">ISTP</option>
                    <option value="ISFP">ISFP</option>
                    <option value="ESTP">ESTP</option>
                    <option value="ESFP">ESFP</option>
                </select>
                <button class="btn btn--primary" onclick="previewMBTI()" style="padding: 12px 20px;">보기</button>
            </div>`;

const replaceHtml = `            <div style="margin-bottom: 20px;">
                <button class="btn btn--primary" onclick="openIndexMbtiModal()" style="width:100%;">🤔 내 MBTI로 바로 결과 보기</button>
            </div>`;

html = html.replace(targetHtml, replaceHtml);

const modalHtml = `
    <!-- MBTI Modal for Index -->
    <div id="indexMbtiModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); z-index:9999; align-items:center; justify-content:center; backdrop-filter:blur(4px);">
        <div style="background:#fff; width:90%; max-width:400px; border-radius:24px; padding:24px; max-height:80vh; overflow-y:auto; box-shadow:0 20px 40px rgba(0,0,0,0.2); position:relative;">
            <button onclick="closeIndexMbtiModal()" style="position:absolute; top:16px; right:16px; background:none; border:none; font-size:1.5rem; cursor:pointer; color:#94A3B8;">✕</button>
            <h3 style="font-size:1.2rem; font-weight:800; margin-bottom:20px; color:#1E293B; text-align:center;">나의 MBTI 선택</h3>
            <div id="indexMbtiGrid" style="display:grid; grid-template-columns:repeat(4, 1fr); gap:8px;">
                <!-- Buttons injected via JS -->
            </div>
        </div>
    </div>
`;

html = html.replace('</body>', modalHtml + '\n</body>');

const scriptTarget = `            function previewMBTI() {
                const mbti = document.getElementById('mbtiSelect').value;
                if(mbti) {
                    window.location.href = 'result.html?mbti=' + mbti;
                } else {
                    alert('MBTI를 선택해주세요 😊');
                }
            }`;

const scriptReplace = `            const mbtiList = ['INTJ','INTP','ENTJ','ENTP','INFJ','INFP','ENFJ','ENFP','ISTJ','ISFJ','ESTJ','ESFJ','ISTP','ISFP','ESTP','ESFP'];
            
            function openIndexMbtiModal() {
                const grid = document.getElementById('indexMbtiGrid');
                grid.innerHTML = '';
                mbtiList.forEach(m => {
                    const btn = document.createElement('button');
                    btn.textContent = m;
                    btn.style.cssText = 'padding:12px 4px; border:2px solid #E2E8F0; border-radius:12px; background:#F8FAFC; color:#1E293B; font-weight:700; cursor:pointer; transition:all 0.2s; font-size:0.95rem;';
                    btn.onmouseover = () => { btn.style.borderColor='var(--primary)'; btn.style.background='rgba(52,211,153,0.05)'; };
                    btn.onmouseout = () => { btn.style.borderColor='#E2E8F0'; btn.style.background='#F8FAFC'; };
                    btn.onclick = () => { window.location.href = 'result.html?mbti=' + m; };
                    grid.appendChild(btn);
                });
                document.getElementById('indexMbtiModal').style.display = 'flex';
            }
            function closeIndexMbtiModal() {
                document.getElementById('indexMbtiModal').style.display = 'none';
            }`;

html = html.replace(scriptTarget, scriptReplace);

fs.writeFileSync('index.html', html);
console.log('Fixed index.html!');
