const fs = require('fs');

const chemistryHTML = `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>육아 궁합 진단 | Mirror Inside Parenting</title>
    <link rel="icon" href="/assets/images/icons/favicon.png" type="image/png">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <!-- Pastel Floating Blobs Background -->
    <div class="glow-orb-container">
        <div class="glow-orb glow-orb--1"></div>
        <div class="glow-orb glow-orb--2"></div>
        <div class="glow-orb glow-orb--3"></div>
    </div>

    <!-- Navbar -->
    <nav class="nav scrolled">
        <div class="nav__inner">
            <a href="/index.html" class="nav__logo">🪞 Mirror Inside <span class="nav__logo-sub">Parenting</span></a>
            <ul class="nav__links" id="navLinks">
                <li><a href="/columns.html" class="nav__link">육아 칼럼</a></li>
                <li><a href="/gallery.html" class="nav__link">나의 기록</a></li>
                <li><a href="/chemistry.html" class="nav__link" style="color:var(--primary)">❤️ 육아 궁합 진단</a></li>
                <li><a href="/about.html" class="nav__link">소개</a></li>
                <li><a href="/test.html" class="nav__cta">🪞 나의 육아 스타일 알아보기</a></li>
            </ul>
        </div>
    </nav>

    <main class="container" style="padding-top:120px; padding-bottom:80px; min-height:80vh;">
        <div class="text-center" style="margin-bottom: 48px;">
            <div class="hero__badge" style="display:inline-block; margin-bottom:16px;">부부 육아 케미스트리</div>
            <h1 style="font-size: clamp(2rem, 5vw, 2.8rem); font-weight: 900; color: var(--text-main); margin-bottom: 16px; word-break:keep-all;">
                우리는 과연 환상의 짝꿍일까? 👩‍❤️‍👨
            </h1>
            <p style="font-size: 1.1rem; color: var(--text-body); max-width: 600px; margin: 0 auto; line-height: 1.6; word-break:keep-all;">
                나의 육아 페르소나와 배우자의 페르소나를 선택하여 매칭 점수와 팩트 폭격 갈등/시너지 리포트를 확인하세요.
            </p>
        </div>

        <div class="chemistry-selector">
            <div class="selector-box">
                <h3 class="selector-title">👤 나의 페르소나</h3>
                <select id="myPersona" class="persona-select">
                    <option value="" disabled selected>내 페르소나를 선택하세요</option>
                </select>
                <div id="myPersonaCard" class="preview-card" style="display:none;"></div>
            </div>
            
            <div class="vs-badge">VS</div>
            
            <div class="selector-box">
                <h3 class="selector-title">👤 배우자의 페르소나</h3>
                <select id="partnerPersona" class="persona-select">
                    <option value="" disabled selected>배우자 페르소나를 선택하세요</option>
                </select>
                <div id="partnerPersonaCard" class="preview-card" style="display:none;"></div>
            </div>
        </div>

        <div class="text-center" style="margin: 40px 0 60px;">
            <button id="btnCalculate" class="btn btn--primary btn--large btn--glow" style="width:100%; max-width:400px; font-size:1.2rem; padding:18px;" disabled>
                ❤️ 궁합 결과 보기
            </button>
        </div>

        <div id="chemistryResult" class="chemistry-result" style="display:none;">
            <!-- Rendered by JS -->
        </div>

    </main>

    <!-- Footer -->
    <footer class="footer">
        <p style="font-size: 1.1rem; margin-bottom: 12px;">🪞 Mirror Inside Parenting</p>
        <p style="font-size: 0.85rem; color: var(--text-body); margin-bottom: 16px;">함께 성장하는 육아, 거울 속에서 만나요</p>
        <p>&copy; 2026 Mirror Inside Parenting. All rights reserved.</p>
        <p style="font-size: 0.75rem; margin-top: 8px; color: var(--text-dim);">
            <a href="/terms.html">이용약관</a> · <a href="/privacy.html">개인정보처리방침</a> · <a href="/contact.html">문의하기</a>
        </p>
    </footer>

    <script src="/data.js"></script>
    <script>
        const mySelect = document.getElementById('myPersona');
        const partnerSelect = document.getElementById('partnerPersona');
        const btnCalculate = document.getElementById('btnCalculate');
        const resultContainer = document.getElementById('chemistryResult');

        // Populate Selects
        OVERALL_TITLES.forEach(p => {
            if (p.combo === 'balanced') return; // Skip balanced to keep it simple, or keep it.
            const opt1 = document.createElement('option');
            opt1.value = p.combo;
            opt1.textContent = \`\${p.name}\`;
            mySelect.appendChild(opt1);

            const opt2 = document.createElement('option');
            opt2.value = p.combo;
            opt2.textContent = \`\${p.name}\`;
            partnerSelect.appendChild(opt2);
        });

        // Auto load my results
        const mySavedResult = loadResults();
        if (mySavedResult && mySavedResult.overallPersona && mySavedResult.overallPersona.combo !== 'balanced') {
            mySelect.value = mySavedResult.overallPersona.combo;
            updatePreview('myPersona', mySavedResult.overallPersona.combo);
        }

        mySelect.addEventListener('change', (e) => updatePreview('myPersona', e.target.value));
        partnerSelect.addEventListener('change', (e) => updatePreview('partnerPersona', e.target.value));

        function updatePreview(type, combo) {
            const persona = OVERALL_TITLES.find(t => t.combo === combo);
            if (!persona) return;
            
            const cardId = type === 'myPersona' ? 'myPersonaCard' : 'partnerPersonaCard';
            const card = document.getElementById(cardId);
            
            card.innerHTML = \`
                <div style="font-size:3rem; margin-bottom:12px;">\${persona.image}</div>
                <div style="font-size:1.1rem; font-weight:800; color:var(--text-main); margin-bottom:8px;">\${persona.name}</div>
                <div style="font-size:0.85rem; color:var(--text-dim); line-height:1.4;">\${persona.keywords}</div>
            \`;
            card.style.display = 'block';
            card.classList.add('fade-in');

            if (mySelect.value && partnerSelect.value) {
                btnCalculate.disabled = false;
            }
        }

        btnCalculate.addEventListener('click', () => {
            const chem = calculateChemistry(mySelect.value, partnerSelect.value);
            if(!chem) return;
            
            // Render Result
            const scoreColor = chem.score >= 80 ? '#34d399' : (chem.score >= 60 ? '#fbbf24' : '#ef4444');
            
            resultContainer.innerHTML = \`
                <div class="chem-header" style="text-align:center; margin-bottom:40px;">
                    <div style="font-size:5rem; font-weight:900; color:\${scoreColor}; font-family:'Nunito', sans-serif; line-height:1; margin-bottom:16px;">\${chem.score}<span style="font-size:2.5rem;">%</span></div>
                    <h2 style="font-size:1.8rem; font-weight:900; color:var(--text-main); margin-bottom:12px;">"\${chem.title}"</h2>
                </div>
                
                <div class="chem-grid">
                    <div class="chem-card clash">
                        <h3>🔥 격돌 포인트 (Clash)</h3>
                        <p>\${chem.clash}</p>
                    </div>
                    <div class="chem-card synergy">
                        <h3>🤝 타협 솔루션 (Synergy)</h3>
                        <p>\${chem.synergy}</p>
                    </div>
                </div>
                
                <div style="text-align:center; margin-top:40px;">
                    <button class="btn btn--secondary" onclick="shareKakao()">💬 결과 카톡으로 보내기</button>
                </div>
            \`;
            
            resultContainer.style.display = 'block';
            resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Add animation
            resultContainer.classList.remove('fade-in');
            void resultContainer.offsetWidth; // trigger reflow
            resultContainer.classList.add('fade-in');
        });

        function shareKakao() {
            alert('카카오톡 공유 API가 연동될 예정입니다. 링크 복사 완료!');
        }
    </script>
</body>
</html>`;

fs.writeFileSync('chemistry.html', chemistryHTML);
console.log('Created chemistry.html');

const chemistryCSS = `
/* =========================================
   CHEMISTRY UI STYLES
   ========================================= */
.chemistry-selector {
    display: flex;
    gap: 24px;
    align-items: stretch;
    justify-content: center;
    max-width: 900px;
    margin: 0 auto;
    position: relative;
}

@media (max-width: 768px) {
    .chemistry-selector {
        flex-direction: column;
    }
}

.selector-box {
    flex: 1;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    padding: 32px 24px;
    box-shadow: var(--shadow-card);
    text-align: center;
    transition: transform 0.3s;
}

.selector-box:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-card-hover);
}

.selector-title {
    font-size: 1.2rem;
    font-weight: 800;
    color: var(--text-main);
    margin-bottom: 24px;
}

.persona-select {
    width: 100%;
    padding: 16px;
    border-radius: 12px;
    border: 1px solid var(--glass-border);
    font-size: 1rem;
    font-family: 'Pretendard', sans-serif;
    outline: none;
    background: white;
    margin-bottom: 24px;
    cursor: pointer;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
}

.preview-card {
    background: var(--bg-main);
    padding: 24px;
    border-radius: 16px;
    border: 1px solid var(--glass-border);
    min-height: 180px;
}

.vs-badge {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    background: var(--primary);
    color: white;
    font-weight: 900;
    font-size: 1.5rem;
    font-family: 'Nunito', sans-serif;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 20px rgba(255, 107, 107, 0.4);
    z-index: 10;
    border: 4px solid var(--bg-main);
}

@media (max-width: 768px) {
    .vs-badge {
        position: relative;
        top: 0;
        left: 0;
        transform: none;
        margin: -10px auto;
    }
}

.chemistry-result {
    max-width: 900px;
    margin: 0 auto;
    background: var(--bg-card);
    border-radius: 32px;
    padding: 60px 40px;
    box-shadow: var(--shadow-strong);
    border: 1px solid var(--glass-border);
}

.chem-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
}

@media (max-width: 768px) {
    .chem-grid {
        grid-template-columns: 1fr;
    }
}

.chem-card {
    padding: 32px;
    border-radius: 20px;
    border: 1px solid var(--glass-border);
}

.chem-card.clash {
    background: rgba(239, 68, 68, 0.03);
    border-color: rgba(239, 68, 68, 0.2);
}

.chem-card.clash h3 {
    color: #ef4444;
}

.chem-card.synergy {
    background: rgba(52, 211, 153, 0.03);
    border-color: rgba(52, 211, 153, 0.2);
}

.chem-card.synergy h3 {
    color: #10b981;
}

.chem-card h3 {
    font-size: 1.2rem;
    font-weight: 800;
    margin-bottom: 16px;
}

.chem-card p {
    font-size: 1rem;
    color: var(--text-main);
    line-height: 1.6;
    word-break: keep-all;
}
`;

fs.appendFileSync('style.css', chemistryCSS);
console.log('Appended chemistry styles to style.css');
