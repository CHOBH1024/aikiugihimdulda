
        let results = null;
        let noticeBanner = '';
        const params = new URLSearchParams(window.location.search);

        if (params.has('mbti')) {
            const mbti = params.get('mbti').toUpperCase();
            const combo = MBTI_MAPPING[mbti] || 'balanced';
            results = generateMockResult(combo);
            noticeBanner = `<div class="notice-banner notice-banner--mbti">본 결과는 <strong>${mbti}</strong> 성향을 바탕으로 예측한 가상 결과입니다. 정확한 결과는 정식 테스트로 확인하세요!</div>`;
        } else if (params.has('preview')) {
            const combo = params.get('preview');
            results = generateMockResult(combo);
            noticeBanner = `<div class="notice-banner notice-banner--preview">현재 <strong>미리보기 모드</strong>입니다 👀 나의 진짜 육아 페르소나가 궁금하다면 진단해보세요!</div>`;
        } else {
            results = loadResults();
        }

        if (!results) {
            document.getElementById('resultWrapper').innerHTML = `
                <div class="no-result">
                    <h2>아직 진단 결과가 없어요 🥺</h2>
                    <p>나의 육아 스타일을 먼저 확인해볼까요?</p>
                    <a href="test.html" class="btn btn--primary btn--large">🪞 진단 시작하기</a>
                </div>
            `;
        } else {
            try { renderResults(results); console.log("RENDER SUCCESS"); } catch(e) { console.error("RENDER ERROR:", e.stack); }
        }

        function renderResults(results) {
            const { overallPersona, dimensionTypes } = results;
            const wrapper = document.getElementById('resultWrapper');
            const childAge = localStorage.getItem('mirrorInsideChildAge') || 'toddler';
            const ageMap = { infant: '영아기 (0~12개월)', toddler: '걸음마기 (1~3세)', preschool: '유아기 (4~7세)', school: '학령기 (8세 이상)' };

            // Set up capture area
            document.getElementById('capImg').src = overallPersona.image;
            document.getElementById('capTags').innerHTML = overallPersona.keywords.split(' ').map(k => `<span style="background: rgba(255,107,107,0.1); padding: 8px 24px; border-radius: 30px;">${k}</span>`).join('');
            document.getElementById('capTitle').innerHTML = overallPersona.name.replace(' ', '<br>');
            document.getElementById('capDesc').textContent = overallPersona.comfortingWords;

            let dimsHTML = '';
            DIMENSIONS.forEach(dim => {
                const typeData = dimensionTypes[dim.id].type;
                dimsHTML += `
                    <div class="dim-card">
                        <div class="dim-card__icon">${dim.icon}</div>
                        <div class="dim-card__info">
                            <div class="dim-card__title">${dim.name}</div>
                            <div class="dim-card__type">${typeData.name}</div>
                        </div>
                    </div>
                `;
            });

            let deepAnalysisHTML = '';
            const testMode = localStorage.getItem('mirrorInsideTestMode') || 'lite';
            if (testMode === 'pro' && results.subtypeIndex !== undefined) {
                const subtype = overallPersona.subtypes[results.subtypeIndex];
                deepAnalysisHTML = `
                `;
            }

            let recColsHTML = '';
            if (overallPersona.recommendedColumns) {
                recColsHTML = `
                <div style="margin-top: 48px; margin-bottom: 32px;">
                    <h3 style="font-size: 1.3rem; margin-bottom: 20px; color: var(--text-main); border-bottom: 2px solid var(--glass-border); padding-bottom: 12px;">
                        📚 ${overallPersona.name.split(' ')[0]} 부모님을 위한 맞춤 추천 칼럼
                    </h3>
                    <div style="display: flex; flex-direction: column; gap: 16px;">`;
                overallPersona.recommendedColumns.forEach(col => {
                    recColsHTML += `
                        <a href="${col.url}" style="display: block; background: var(--bg-card); padding: 20px; border-radius: 16px; border: 1px solid var(--glass-border); text-decoration: none; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='var(--shadow-card-hover)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
                            <div style="font-size: 0.85rem; color: var(--primary); font-weight: 700; margin-bottom: 8px;">${col.tags}</div>
                            <h4 style="font-size: 1.1rem; color: var(--text-main); font-weight: 800; line-height: 1.4;">${col.title}</h4>
                        </a>`;
                });
                recColsHTML += `</div></div>`;
            }

            wrapper.innerHTML = `
                ${noticeBanner}
                
                <div class="result-layout">
                    <div class="result-layout__left">
                        <div class="photocard-container" style="margin-bottom:0;">
                            <div class="photocard" id="photocard">
                                <div class="photocard__image-area">
                                    <img src="${overallPersona.imageUrl}" alt="${overallPersona.name}" class="photocard__image">
                                    <div class="photocard__rarity">✨ ${overallPersona.rarity}</div>
                                </div>
                                <div class="photocard__content">
                                    <div class="photocard__tags" style="margin-bottom: 12px;">
                                        ${overallPersona.keywords ? overallPersona.keywords.split(' ').map(k => `<span class="tag-pill" style="background: var(--primary-dim); color: var(--primary); border:none;">${k}</span>`).join('') : ''}
                                    </div>
                                    <h1 class="photocard__title" style="margin-bottom: 16px;">${overallPersona.name}</h1>
                                    <p style="font-size: 1.15rem; font-weight: 800; color: var(--primary); margin-bottom: 24px; word-break: keep-all; line-height: 1.5;">${overallPersona.comfortingWords || overallPersona.coreIdentity}</p>
                                    
                                    <div style="background: var(--bg-main); border-radius: 16px; padding: 24px; text-align: left; margin-bottom: 24px; border: 1px solid var(--glass-border);">
                                        <h4 style="font-size: 1rem; color: var(--text-main); margin-bottom: 12px;">💡 양육의 본질</h4>
                                        <p style="font-size: 0.95rem; color: var(--text-body); line-height: 1.6;">${overallPersona.desc}</p>
                                    </div>

                                    <div class="fact-bomb-container" id="factBombContainer">
                                        <div class="fact-bomb-overlay" id="factBombOverlay">
                                            <i class="fas fa-bomb" style="font-size:2.5rem; color:#ef4444; margin-bottom:12px; filter: drop-shadow(0 4px 10px rgba(239,68,68,0.4));"></i>
                                            <h4 style="font-size: 1.2rem; font-weight: 800; color: #ef4444; margin-bottom: 8px; letter-spacing: -0.5px;">🚨 객관적 진단</h4>
                                            <p style="font-size: 0.9rem; color: var(--text-body); margin-bottom: 20px; word-break: keep-all; line-height: 1.4;">양육 방식의 사각지대를 분석한 결과입니다.<br>객관적인 피드백을 확인하려면 해제하세요.</p>
                                            <button class="btn-unlock-fact" onclick="unlockFactBomb()">🔓 분석 결과 확인하기</button>
                                        </div>
                                        <div class="fact-bomb-content" id="factBombContent">
                                            <h4 style="font-size: 1.1rem; color: #ef4444; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;"><i class="fas fa-bolt"></i> 성장을 위한 객관적 분석</h4>
                                            <p style="font-size: 0.95rem; color: var(--text-main); line-height: 1.6; font-weight: 600; margin-bottom: 24px; word-break: keep-all;">${overallPersona.harshAdvice || '균형을 잃지 않는 것이 가장 중요합니다.'}</p>
                                            <button class="btn-share-postcard" onclick="downloadPostcard()"><i class="fas fa-camera-retro"></i> 이 분석을 엽서로 저장하기</button>
                                        </div>
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
                        ${deepAnalysisHTML}

                        <div class="carousel-section" style="margin-top:0;">
                            ${overallPersona.ageAdvice && overallPersona.ageAdvice[childAge] ? `
                            <div class="carousel-card" style="border-color: var(--primary); background: rgba(52, 211, 153, 0.05);">
                                <h3>👶 ${ageMap[childAge]} 맞춤 육아 가이드</h3>
                                <p style="font-size: 1rem; color: var(--text-main); font-weight: 700; line-height: 1.6; word-break: keep-all;">
                                    ${overallPersona.ageAdvice[childAge]}
                                </p>
                            </div>
                            ` : ''}

                            <div class="carousel-card">
                                <h3>✨ 나의 빛나는 장점</h3>
                                <ul>${overallPersona.strengths.map(s => `<li>${s}</li>`).join('')}</ul>
                            </div>
                            <div class="carousel-card">
                                <h3>🥺 육아하며 느끼는 아쉬움</h3>
                                <ul>${overallPersona.weaknesses.map(s => `<li>${s}</li>`).join('')}</ul>
                            </div>
                            
                            ${overallPersona.deepReflection ? `
                            <div class="carousel-card" style="background: var(--glass-strong);">
                                <h3 style="color: #F59E0B;">🪞 나를 깊게 이해하기</h3>
                                <p style="font-size:1.05rem; font-weight:800; color:var(--text-main); margin-bottom:12px; font-style:italic;">
                                    "${overallPersona.deepReflection.question}"
                                </p>
                                <p style="font-size:0.95rem; color:var(--text-body); line-height:1.6;">
                                    ${overallPersona.deepReflection.meaning}
                                </p>
                            </div>
                            ` : ''}

                            <div class="carousel-card">
                                <h3>💡 사각지대 보완 팁</h3>
                                <p style="font-size:0.95rem; color:var(--text-body); line-height:1.6;">
                                    <strong style="color:#ef4444;">❌ 무의식적인 반응:</strong><br>${results.simulation.wrong}<br><br>
                                    <strong style="color:var(--primary);">✅ 추천하는 솔루션:</strong><br>${results.simulation.correct}
                                </p>
                            </div>
                            
                            <div style="margin-top: 32px;">
                                <h3 style="font-size: 1.1rem; margin-bottom: 16px; color: var(--text-main); font-weight: 800; text-align:center;">5가지 상세 육아 차원</h3>
                                ${dimsHTML}
                            </div>
                            
                            <div style="margin-top: 32px; text-align: center;">
                                <a href="/columns/persona_deepdive.html" class="btn btn--primary" style="width: 100%;">📚 내 페르소나 심층 칼럼 읽기</a>
                            </div>
                        </div>

                        ${recColsHTML}
                    </div>
                </div>
            `;

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

            
        }

        function drawRadarChart(dimensionTypes) {
            const canvas = document.getElementById('radarCanvas');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            const dpr = window.devicePixelRatio || 1;
            
            const rect = canvas.parentElement.getBoundingClientRect();
            const size = Math.min(rect.width, 300);
            
            canvas.width = size * dpr;
            canvas.height = size * dpr;
            canvas.style.width = size + 'px';
            canvas.style.height = size + 'px';
            ctx.scale(dpr, dpr);

            const cx = size / 2;
            const cy = size / 2 + 10;
            const maxR = size / 2 - 40;
            const n = 5;
            const angles = [];
            for (let i = 0; i < n; i++) {
                angles.push((Math.PI * 2 * i / n) - Math.PI / 2);
            }

            const dataValues = DIMENSIONS.map(d => dimensionTypes[d.id].normalizedScore);
            const labels = DIMENSIONS.map(d => d.name);

            // Draw Grid
            for (let ring = 1; ring <= 4; ring++) {
                const r = (maxR / 4) * ring;
                ctx.beginPath();
                for (let i = 0; i < n; i++) {
                    const x = cx + r * Math.cos(angles[i]);
                    const y = cy + r * Math.sin(angles[i]);
                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.closePath();
                ctx.strokeStyle = 'rgba(0,0,0,0.05)';
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            // Draw Axes & Labels
            for (let i = 0; i < n; i++) {
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(cx + maxR * Math.cos(angles[i]), cy + maxR * Math.sin(angles[i]));
                ctx.strokeStyle = 'rgba(0,0,0,0.05)';
                ctx.stroke();

                const lr = maxR + 20;
                const x = cx + lr * Math.cos(angles[i]);
                const y = cy + lr * Math.sin(angles[i]);
                ctx.font = '700 12px Pretendard';
                ctx.fillStyle = 'rgba(0,0,0,0.5)';
                ctx.textAlign = 'center';
                ctx.fillText(labels[i], x, y + 4);
            }

            // Draw Data
            ctx.beginPath();
            dataValues.forEach((v, i) => {
                const r = maxR * v;
                const x = cx + r * Math.cos(angles[i]);
                const y = cy + r * Math.sin(angles[i]);
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            });
            ctx.closePath();
            
            const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR);
            grad.addColorStop(0, 'rgba(255, 107, 107, 0.25)');
            grad.addColorStop(1, 'rgba(255, 218, 193, 0.15)');
            ctx.fillStyle = grad;
            ctx.fill();
            
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
                        ${deepAnalysisHTML}

                        <div class="carousel-section" style="margin-top:0;">
                            ${overallPersona.ageAdvice && overallPersona.ageAdvice[childAge] ? `
                            <div class="carousel-card" style="border-color: var(--primary); background: rgba(52, 211, 153, 0.05);">
                                <h3>👶 ${ageMap[childAge]} 맞춤 육아 가이드</h3>
                                <p style="font-size: 1rem; color: var(--text-main); font-weight: 700; line-height: 1.6; word-break: keep-all;">
                                    ${overallPersona.ageAdvice[childAge]}
                                </p>
                            </div>
                            ` : ''}

                            <div class="carousel-card">
                                <h3>✨ 나의 빛나는 장점</h3>
                                <ul>${overallPersona.strengths.map(s => `<li>${s}</li>`).join('')}</ul>
                            </div>
                            <div class="carousel-card">
                                <h3>🥺 육아하며 느끼는 아쉬움</h3>
                                <ul>${overallPersona.weaknesses.map(s => `<li>${s}</li>`).join('')}</ul>
                            </div>
                            
                            ${overallPersona.deepReflection ? `
                            <div class="carousel-card" style="background: var(--glass-strong);">
                                <h3 style="color: #F59E0B;">🪞 나를 깊게 이해하기</h3>
                                <p style="font-size:1.05rem; font-weight:800; color:var(--text-main); margin-bottom:12px; font-style:italic;">
                                    "${overallPersona.deepReflection.question}"
                                </p>
                                <p style="font-size:0.95rem; color:var(--text-body); line-height:1.6;">
                                    ${overallPersona.deepReflection.meaning}
                                </p>
                            </div>
                            ` : ''}

                            <div class="carousel-card">
                                <h3>💡 사각지대 보완 팁</h3>
                                <p style="font-size:0.95rem; color:var(--text-body); line-height:1.6;">
                                    <strong style="color:#ef4444;">❌ 무의식적인 반응:</strong><br>${results.simulation.wrong}<br><br>
                                    <strong style="color:var(--primary);">✅ 추천하는 솔루션:</strong><br>${results.simulation.correct}
                                </p>
                            </div>
                            
                            <div style="margin-top: 32px;">
                                <h3 style="font-size: 1.1rem; margin-bottom: 16px; color: var(--text-main); font-weight: 800; text-align:center;">5가지 상세 육아 차원</h3>
                                ${dimsHTML}
                            </div>
                            
                            <div style="margin-top: 32px; text-align: center;">
                                <a href="/columns/persona_deepdive.html" class="btn btn--primary" style="width: 100%;">📚 내 페르소나 심층 칼럼 읽기</a>
                            </div>
                        </div>

                        ${recColsHTML}
                    </div>
                </div>
            `;

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

            
        }

        function drawRadarChart(dimensionTypes) {
            const canvas = document.getElementById('radarCanvas');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            const dpr = window.devicePixelRatio || 1;
            
            const rect = canvas.parentElement.getBoundingClientRect();
            const size = Math.min(rect.width, 300);
            
            canvas.width = size * dpr;
            canvas.height = size * dpr;
            canvas.style.width = size + 'px';
            canvas.style.height = size + 'px';
            ctx.scale(dpr, dpr);

            const cx = size / 2;
            const cy = size / 2 + 10;
            const maxR = size / 2 - 40;
            const n = 5;
            const angles = [];
            for (let i = 0; i < n; i++) {
                angles.push((Math.PI * 2 * i / n) - Math.PI / 2);
            }

            const dataValues = DIMENSIONS.map(d => dimensionTypes[d.id].normalizedScore);
            const labels = DIMENSIONS.map(d => d.name);

            // Draw Grid
            for (let ring = 1; ring <= 4; ring++) {
                const r = (maxR / 4) * ring;
                ctx.beginPath();
                for (let i = 0; i < n; i++) {
                    const x = cx + r * Math.cos(angles[i]);
                    const y = cy + r * Math.sin(angles[i]);
                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.closePath();
                ctx.strokeStyle = 'rgba(0,0,0,0.05)';
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            // Draw Axes & Labels
            for (let i = 0; i < n; i++) {
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(cx + maxR * Math.cos(angles[i]), cy + maxR * Math.sin(angles[i]));
                ctx.strokeStyle = 'rgba(0,0,0,0.05)';
                ctx.stroke();

                const lr = maxR + 20;
                const x = cx + lr * Math.cos(angles[i]);
                const y = cy + lr * Math.sin(angles[i]);
                ctx.font = '700 12px Pretendard';
                ctx.fillStyle = 'rgba(0,0,0,0.5)';
                ctx.textAlign = 'center';
                ctx.fillText(labels[i], x, y + 4);
            }

            // Draw Data
            ctx.beginPath();
            dataValues.forEach((v, i) => {
                const r = maxR * v;
                const x = cx + r * Math.cos(angles[i]);
                const y = cy + r * Math.sin(angles[i]);
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            });
            ctx.closePath();
            
            const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR);
            grad.addColorStop(0, 'rgba(255, 107, 107, 0.25)');
            grad.addColorStop(1, 'rgba(255, 218, 193, 0.15)');
            ctx.fillStyle = grad;
            ctx.fill();
            
            ctx.strokeStyle = '#FF6B6B';
            ctx.lineWidth = 2.5;
            ctx.stroke();

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
        }

        async function downloadImage() {
            const btn = document.querySelector('.btn-insta');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 이미지 생성 중...';
            
            const el = document.getElementById('captureArea');
            el.style.left = '0';
            el.style.top = '0';
            el.style.zIndex = '9999';
            el.style.visibility = 'visible';
            
            try {
                await document.fonts.ready;
                await new Promise(r => setTimeout(r, 250));
                const canvas = await html2canvas(el, { 
                    scale: 2, 
                    backgroundColor: '#FFF5F5',
                    useCORS: true,
                    logging: false
                });
                const link = document.createElement('a');
                link.download = `mirror_inside_result.png`;
                link.href = canvas.toDataURL('image/png');
                link.click();
                btn.innerHTML = '<i class="fas fa-check"></i> 저장 완료! 인스타에 올려보세요';
            } catch (e) {
                console.error(e);
                alert('이미지 저장에 실패했습니다.');
                btn.innerHTML = originalText;
            } finally {
                el.style.left = '-9999px';
                el.style.zIndex = '-100';
                el.style.visibility = 'hidden';
                setTimeout(() => { if (btn.innerHTML.includes('완료')) btn.innerHTML = originalText; }, 3000);
            }
        }

        
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
                await document.fonts.ready;
                await new Promise(r => setTimeout(r, 250));
                const canvas = await html2canvas(el, { 
                    scale: 3, 
                    backgroundColor: '#0F172A', 
                    useCORS: true,
                    logging: false
                });
                const link = document.createElement('a');
                link.download = `mirror_inside_fact_bomb.png`;
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

        function shareKakao() {
            const url = 'https://aikiugihimdulda.vercel.app';
            const resultUrl = window.location.href;
            const personaName = results && results.overallPersona ? results.overallPersona.name : '';
            const text = `🪞 Mirror Inside Parenting${personaName ? `\n\n✨ 나의 육아 페르소나: ${personaName}` : ''}\n\n나는 어떤 유형의 부모일까요? 3분 진단으로 알아보세요!\n👉 ${url}/test.html`;

            if (navigator.share) {
                navigator.share({
                    title: 'Mirror Inside 육아 진단',
                    text: text,
                    url: url
                }).catch(err => {
                    if (err.name !== 'AbortError') copyAndToast(text);
                });
            } else {
                copyAndToast(text);
            }
        }

        function copyResult() {
            if (!results) return;
            let text = `🪞 Mirror Inside Parenting 진단 결과\n\n`;
            text += `✨ 나의 육아 페르소나: ${results.overallPersona.name}\n`;
            text += `${results.overallPersona.desc}\n\n`;
            text += `🔗 나도 알아보기: ${window.location.origin}/test.html`;
            copyAndToast(text);
        }

        function copyAndToast(text) {
            navigator.clipboard.writeText(text).then(() => {
                showShareToast('✅ 클립보드에 복사되었습니다! 카카오톡 채팅창에 붙여넣기하세요 🙌');
            }).catch(() => {
                showShareToast('❌ 복사 실패. 브라우저 URL을 직접 복사해주세요.');
            });
        }

        function showShareToast(message) {
            let toast = document.getElementById('shareToastResult');
            if (!toast) {
                toast = document.createElement('div');
                toast.id = 'shareToastResult';
                toast.style.cssText = `
                    position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%) translateY(20px);
                    background: rgba(15,23,42,0.96); color: #F8FAFC;
                    padding: 14px 28px; border-radius: 30px;
                    font-size: 0.95rem; font-weight: 600;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.5);
                    z-index: 99999; opacity: 0;
                    transition: opacity 0.3s ease, transform 0.3s ease;
                    border: 1px solid rgba(52,211,153,0.4);
                    backdrop-filter: blur(12px);
                    white-space: nowrap; max-width: 90vw;
                `;
                document.body.appendChild(toast);
            }
            toast.textContent = message;
            toast.style.opacity = '1';
            toast.style.transform = 'translateX(-50%) translateY(0)';
            clearTimeout(toast._timer);
            toast._timer = setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(-50%) translateY(20px)';
            }, 3000);
        }
    