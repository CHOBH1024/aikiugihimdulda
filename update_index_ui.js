const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const oldPreview = `<div class="preview-box">
            <p class="preview-box__title">미리 결과를 구경해볼 수도 있어요 👀</p>
            
            <div class="preview-box__row">
                <select id="mbtiSelect">
                    <option value="" disabled selected>MBTI로 결과 찾기</option>
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
            </div>
            
            <div class="preview-box__row">
                <select id="personaSelect">
                    <option value="" disabled selected>육아 유형 직접 선택</option>
                    <option value="warm">🌸 포근한 봄바람형</option>
                    <option value="structured">🏗️ 든든한 설계자형</option>
                    <option value="free">🦋 자유로운 탐험가형</option>
                    <option value="wise">🦉 지혜로운 등대형</option>
                    <option value="balanced">⚖️ 균형의 달인형</option>
                    <option value="empathetic">🪞 마음을 읽는 거울형</option>
                    <option value="creative">🎨 창의적 놀이터형</option>
                    <option value="resilient">🌱 회복탄력의 봄형</option>
                </select>
                <button class="btn btn--primary" onclick="previewPersona()" style="padding: 12px 20px;">보기</button>
            </div>
        </div>

        <script>
            function previewMBTI() {
                const mbti = document.getElementById('mbtiSelect').value;
                if(mbti) {
                    window.location.href = 'result.html?mbti=' + mbti;
                } else {
                    alert('MBTI를 선택해주세요 😊');
                }
            }
            function previewPersona() {
                const persona = document.getElementById('personaSelect').value;
                if(persona) {
                    window.location.href = 'result.html?preview=' + persona;
                } else {
                    alert('유형을 선택해주세요 😊');
                }
            }
        </script>`;

const newPreview = `
        <div class="preview-box" style="max-width: 500px; padding: 24px; text-align: center;">
            <p class="preview-box__title" style="margin-bottom: 20px;">미리 8가지 유형의 결과를 구경해볼 수 있어요 👀</p>
            <div id="indexPersonaGrid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
                <!-- Cards injected via JS -->
            </div>
        </div>

        <script>
            document.addEventListener("DOMContentLoaded", () => {
                const grid = document.getElementById('indexPersonaGrid');
                if (typeof OVERALL_TITLES !== 'undefined') {
                    OVERALL_TITLES.forEach(p => {
                        if (p.combo === 'balanced') return; // Skip balanced to keep 8 grid perfectly symmetrical
                        const btn = document.createElement('div');
                        btn.style.cssText = 'background: #F8FAFC; border: 2px solid transparent; border-radius: 12px; padding: 12px 8px; cursor: pointer; transition: all 0.2s; display: flex; flex-direction: column; align-items: center; justify-content: center;';
                        btn.onmouseover = () => { btn.style.borderColor = 'var(--primary)'; btn.style.transform = 'translateY(-2px)'; btn.style.boxShadow = '0 4px 12px rgba(52,211,153,0.15)'; };
                        btn.onmouseout = () => { btn.style.borderColor = 'transparent'; btn.style.transform = 'translateY(0)'; btn.style.boxShadow = 'none'; };
                        btn.onclick = () => window.location.href = 'result.html?preview=' + p.combo;
                        
                        btn.innerHTML = \`
                            <img src="\${p.imageUrl}" alt="\${p.name}" style="width: 40px; height: 40px; object-fit: contain; margin-bottom: 8px;">
                            <span style="font-size: 0.8rem; font-weight: 700; color: #1E293B; line-height: 1.2; word-break: keep-all;">\${p.name}</span>
                        \`;
                        grid.appendChild(btn);
                    });
                }
            });
        </script>
`;

if (html.includes('<div class="preview-box">')) {
    const regex = /<div class="preview-box">[\s\S]*?<\/script>/;
    html = html.replace(regex, newPreview);
    fs.writeFileSync('index.html', html);
    console.log('✅ index.html 드롭다운 제거 및 그리드 카드 도입 완료');
} else {
    console.log('⚠️ index.html에서 preview-box를 찾지 못했습니다.');
}
