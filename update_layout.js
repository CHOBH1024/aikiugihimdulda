const fs = require('fs');

// 1. Update style.css
let css = fs.readFileSync('style.css', 'utf8');

const layoutCSS = `
/* --- Result Page Split Layout --- */
.result-layout {
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.result-layout__left {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.result-layout__right {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

@media (min-width: 600px) and (max-width: 899px) {
    /* Tablet layout: still single column, but wider and centered */
    #resultWrapper {
        max-width: 720px;
        margin: 100px auto 40px;
    }
    .photocard { padding: 48px; border-radius: 30px; }
}

@media (min-width: 900px) {
    #resultWrapper {
        max-width: 1100px;
        margin: 120px auto 40px;
    }
    .result-layout {
        display: grid;
        grid-template-columns: 420px 1fr;
        gap: 40px;
        align-items: start;
    }
    .result-layout__left {
        position: sticky;
        top: 100px;
    }
    .photocard-container { margin: 0; }
}

@media (min-width: 1200px) {
    #resultWrapper {
        max-width: 1300px;
    }
    .result-layout {
        grid-template-columns: 480px 1fr;
        gap: 60px;
    }
    .photocard__image { width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 50%; }
}
`;
if (!css.includes('.result-layout {')) {
    css += '\n' + layoutCSS;
    fs.writeFileSync('style.css', css);
}


// 2. Update result.html renderResults function
let html = fs.readFileSync('result.html', 'utf8');

// I will replace the wrapper.innerHTML assignment inside renderResults
const oldRenderRegex = /wrapper\.innerHTML = `[\s\S]*?`;/m;

// Define the new HTML layout string
const newRenderString = `
            let deepAnalysisHTML = '';
            const testMode = localStorage.getItem('mirrorInsideTestMode') || 'lite';
            if (testMode === 'pro' && results.subtypeIndex !== undefined) {
                const subtype = overallPersona.subtypes[results.subtypeIndex];
                deepAnalysisHTML = \`
                <!-- Deep Analysis Section -->
                <div id="deepAnalysisSection" style="margin-bottom: 24px;">
                    <h3 style="font-size: 1.3rem; margin-bottom: 16px; color: var(--text-main);">
                        <i class="fas fa-microscope" style="color: var(--primary);"></i> 40문항 심층 분석 결과
                    </h3>
                    <div style="background: var(--bg-card); border-radius: 16px; padding: 24px; border: 1px solid var(--glass-border); position: relative; overflow: hidden;">
                        <div id="deepAnalysisLock" style="position: absolute; inset: 0; background: rgba(30, 41, 59, 0.9); display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 10;">
                            <i class="fas fa-lock-open" style="font-size: 2rem; color: var(--accent); margin-bottom: 12px; animation: pulse 1.5s infinite;"></i>
                            <p style="color: #fff; font-weight: 600;">답변 패턴 분석 완료</p>
                        </div>
                        <div id="deepAnalysisContent" style="display: none;">
                            <span style="display: inline-block; background: var(--primary-dim); color: var(--primary); padding: 4px 10px; border-radius: 8px; font-weight: 700; font-size: 0.85rem; margin-bottom: 8px;">세부 유형</span>
                            <h4 style="font-size: 1.25rem; color: var(--text-main); margin-bottom: 16px;">\${subtype.name}</h4>
                            <p style="font-size: 1rem; color: var(--text-body); line-height: 1.6; word-break: keep-all;">\${subtype.analysis}</p>
                        </div>
                    </div>
                </div>\`;
            }

            let recColsHTML = '';
            if (overallPersona.recommendedColumns) {
                recColsHTML = \`
                <div style="margin-top: 48px; margin-bottom: 32px;">
                    <h3 style="font-size: 1.3rem; margin-bottom: 20px; color: var(--text-main); border-bottom: 2px solid var(--glass-border); padding-bottom: 12px;">
                        📚 \${overallPersona.name.split(' ')[0]} 부모님을 위한 맞춤 추천 칼럼
                    </h3>
                    <div style="display: flex; flex-direction: column; gap: 16px;">\`;
                overallPersona.recommendedColumns.forEach(col => {
                    recColsHTML += \`
                        <a href="\${col.url}" style="display: block; background: var(--bg-card); padding: 20px; border-radius: 16px; border: 1px solid var(--glass-border); text-decoration: none; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='var(--shadow-card-hover)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
                            <div style="font-size: 0.85rem; color: var(--primary); font-weight: 700; margin-bottom: 8px;">\${col.tags}</div>
                            <h4 style="font-size: 1.1rem; color: var(--text-main); font-weight: 800; line-height: 1.4;">\${col.title}</h4>
                        </a>\`;
                });
                recColsHTML += \`</div></div>\`;
            }

            wrapper.innerHTML = \`
                \${noticeBanner}
                
                <div class="result-layout">
                    <div class="result-layout__left">
                        <div class="photocard-container" style="margin-bottom:0;">
                            <div class="photocard" id="photocard">
                                <div class="photocard__image-area">
                                    <img src="\${overallPersona.imageUrl}" alt="\${overallPersona.name}" class="photocard__image">
                                    <div class="photocard__rarity">✨ \${overallPersona.rarity}</div>
                                </div>
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
                            </div>
                        </div>

                        <div class="action-buttons">
                            <button class="btn btn--large btn-insta" onclick="downloadImage()"><i class="fab fa-instagram"></i> 인스타 스토리에 공유하기 (이미지 저장)</button>
                            <button class="btn btn--large btn-kakao" onclick="shareKakao()"><i class="fas fa-comment"></i> 카카오톡으로 결과 보내기</button>
                            <button class="btn btn--secondary btn--large" onclick="copyResult()"><i class="fas fa-link"></i> 링크 복사하기</button>
                        </div>
                        <p style="text-align: center; font-size: 0.85rem; color: var(--text-dim); margin-top: 4px;">
                            💡 '인스타 스토리 공유' 버튼을 누르면 이미지가 저장됩니다.
                        </p>
                    </div>

                    <div class="result-layout__right">
                        \${deepAnalysisHTML}

                        <div class="carousel-section" style="margin-top:0;">
                            \${overallPersona.ageAdvice && overallPersona.ageAdvice[childAge] ? \`
                            <div class="carousel-card" style="border-color: var(--primary); background: rgba(52, 211, 153, 0.05);">
                                <h3>👶 \${ageMap[childAge]} 맞춤 육아 가이드</h3>
                                <p style="font-size: 1rem; color: var(--text-main); font-weight: 700; line-height: 1.6; word-break: keep-all;">
                                    \${overallPersona.ageAdvice[childAge]}
                                </p>
                            </div>
                            \` : ''}

                            <div class="carousel-card">
                                <h3>✨ 나의 빛나는 장점</h3>
                                <ul>\${overallPersona.strengths.map(s => \`<li>\${s}</li>\`).join('')}</ul>
                            </div>
                            <div class="carousel-card">
                                <h3>🥺 육아하며 느끼는 아쉬움</h3>
                                <ul>\${overallPersona.weaknesses.map(s => \`<li>\${s}</li>\`).join('')}</ul>
                            </div>
                            
                            \${overallPersona.deepReflection ? \`
                            <div class="carousel-card" style="background: var(--glass-strong);">
                                <h3 style="color: #F59E0B;">🪞 나를 깊게 이해하기</h3>
                                <p style="font-size:1.05rem; font-weight:800; color:var(--text-main); margin-bottom:12px; font-style:italic;">
                                    "\${overallPersona.deepReflection.question}"
                                </p>
                                <p style="font-size:0.95rem; color:var(--text-body); line-height:1.6;">
                                    \${overallPersona.deepReflection.meaning}
                                </p>
                            </div>
                            \` : ''}

                            <div class="carousel-card">
                                <h3>💡 사각지대 보완 팁</h3>
                                <p style="font-size:0.95rem; color:var(--text-body); line-height:1.6;">
                                    <strong style="color:#ef4444;">❌ 무의식적인 반응:</strong><br>\${results.simulation.wrong}<br><br>
                                    <strong style="color:var(--primary);">✅ 추천하는 솔루션:</strong><br>\${results.simulation.correct}
                                </p>
                            </div>
                            
                            <div style="margin-top: 32px;">
                                <h3 style="font-size: 1.1rem; margin-bottom: 16px; color: var(--text-main); font-weight: 800; text-align:center;">5가지 상세 육아 차원</h3>
                                \${dimsHTML}
                            </div>
                            
                            <div style="margin-top: 32px; text-align: center;">
                                <a href="/columns/persona_deepdive.html" class="btn btn--primary" style="width: 100%;">📚 내 페르소나 심층 칼럼 읽기</a>
                            </div>
                        </div>

                        \${recColsHTML}
                    </div>
                </div>
            \`;

            // trigger lock animation if needed
            if (testMode === 'pro' && results.subtypeIndex !== undefined) {
                setTimeout(() => {
                    const lock = document.getElementById('deepAnalysisLock');
                    const content = document.getElementById('deepAnalysisContent');
                    if(lock && content) {
                        lock.style.display = 'none';
                        content.style.display = 'block';
                        content.classList.add('fade-in');
                    }
                }, 1000);
            }
`;

html = html.replace(oldRenderRegex, newRenderString.trim());

// We also need to strip out the old deep analysis replace hacks at the end of the file, if any are there.
// Actually, they were inside a `<script>` injected by a previous node script. Let's clean up any lingering script blocks for "Deep Analysis Section" or "Recommended Columns" that were previously inserted via update_result_final.js.
html = html.replace(/\/\/ Check for Deep Analysis Mode[\s\S]*?deepAnalysisSection\.style\.display = 'none';\n            \}/, '');
html = html.replace(/\/\/ Recommended Columns Rendering[\s\S]*?appendChild\(recContainer\);\n            \}/, '');
html = html.replace(/<!-- Deep Analysis Section -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, '');

fs.writeFileSync('result.html', html);
console.log('Result page layout successfully updated to 2-column grid!');
