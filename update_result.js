const fs = require('fs');
let html = fs.readFileSync('result.html', 'utf8');

const updatedRenderLogic = `
        function renderResults(results) {
            const { overallPersona, dimensionTypes } = results;
            const wrapper = document.getElementById('resultWrapper');
            const childAge = localStorage.getItem('mirrorInsideChildAge') || 'toddler';
            const ageMap = { infant: '영아기 (0~12개월)', toddler: '걸음마기 (1~3세)', preschool: '유아기 (4~7세)', school: '학령기 (8세 이상)' };

            // Set up capture area
            document.getElementById('capImg').src = overallPersona.imageUrl;
            document.getElementById('capRarity').innerText = overallPersona.rarity;
            document.getElementById('capTitle').innerText = overallPersona.name;
            document.getElementById('capDesc').innerText = overallPersona.desc;

            let dimsHTML = '';
            DIMENSIONS.forEach(dim => {
                const typeData = dimensionTypes[dim.id].type;
                dimsHTML += \`
                    <div class="dim-card">
                        <div class="dim-card__icon">\${dim.icon}</div>
                        <div class="dim-card__info">
                            <div class="dim-card__title">\${dim.name}</div>
                            <div class="dim-card__type">\${typeData.name}</div>
                        </div>
                    </div>
                \`;
            });

            wrapper.innerHTML = \`
                \${noticeBanner}
                
                <div class="photocard-container">
                    <div class="photocard" id="photocard">
                        <div class="photocard__image-area">
                            <img src="\${overallPersona.imageUrl}" alt="\${overallPersona.name}" class="photocard__image">
                            <div class="photocard__rarity">✨ \${overallPersona.rarity}</div>
                        </div>
                        <div class="photocard__content">
                            <h1 class="photocard__title">\${overallPersona.name}</h1>
                            <p style="font-size: 1.1rem; font-weight: 800; color: var(--primary); margin-bottom: 8px; word-break: keep-all;">\${overallPersona.coreIdentity || '아이의 거울이 되는 따뜻한 부모'}</p>
                            <p class="photocard__desc">\${overallPersona.desc}</p>
                            
                            <div class="photocard__tags">
                                <span class="tag-pill">#\${overallPersona.name.split(' ')[0]}</span>
                                <span class="tag-pill">#거울육아</span>
                            </div>

                            <div class="photocard__radar">
                                <canvas id="radarCanvas"></canvas>
                            </div>
                        </div>
                    </div>

                    <div class="action-buttons">
                        <button class="btn btn--large btn-insta" onclick="downloadImage()"><i class="fab fa-instagram"></i> 인스타 스토리에 공유하기 (이미지 저장)</button>
                        <button class="btn btn--large btn-kakao" onclick="shareKakao()"><i class="fas fa-comment"></i> 카카오톡으로 결과 보내기</button>
                        <button class="btn btn--secondary btn--large" onclick="copyResult()"><i class="fas fa-link"></i> 링크 복사하기</button>
                    </div>
                </div>

                <div class="carousel-section">
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
            \`;

            drawRadarChart(dimensionTypes);
        }
`;

html = html.replace(/function renderResults\(results\) \{[\s\S]*?drawRadarChart\(dimensionTypes\);\n        \}/, updatedRenderLogic.trim());

// Update drawRadarChart to add numeric values
let radarLogic = `
            // Draw Dots
            dataValues.forEach((v, i) => {
                const r = maxR * v;
                const x = cx + r * Math.cos(angles[i]);
                const y = cy + r * Math.sin(angles[i]);
                
                ctx.beginPath();
                ctx.arc(x, y, 9, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 107, 107, 0.2)';
                ctx.fill();

                ctx.beginPath();
                ctx.arc(x, y, 4, 0, Math.PI * 2);
                ctx.fillStyle = '#FF6B6B';
                ctx.fill();

                // Draw Value
                ctx.font = '800 11px Outfit';
                ctx.fillStyle = '#FF6B6B';
                ctx.textAlign = 'center';
                const textYOffset = y < cy ? -12 : 20;
                ctx.fillText(Math.round(v * 100) + '%', x, y + textYOffset);
            });
`;

html = html.replace(/\/\/ Draw Dots[\s\S]*?ctx\.fill\(\);\n            \}\);/, radarLogic.trim());

fs.writeFileSync('result.html', html);
console.log('result.html updated');
