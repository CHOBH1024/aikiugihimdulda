const fs = require('fs');

const file = 'result.html';
let html = fs.readFileSync(file, 'utf8');

// 1. Inject Letter Generator Button in action-buttons
// Find the downloadImage button and insert our button before copyResult
const actionButtonsTarget = /<button class="btn btn--secondary btn--large" onclick="copyResult\(\)">/;
const actionButtonsReplace = `<button class="btn btn--large" onclick="openLetterModal()" style="background: var(--text-main); color: #fff; margin-bottom: 12px;"><i class="fas fa-envelope-open-text"></i> 배우자에게 보내는 편지 만들기</button>\n                            <button class="btn btn--secondary btn--large" onclick="copyResult()">`;

if (html.match(actionButtonsTarget) && !html.includes('openLetterModal()')) {
    html = html.replace(actionButtonsTarget, actionButtonsReplace);
}

// 2. Inject Carousel Cards
// Find the '나의 빛나는 장점' card and insert before it
const carouselTarget = /<div class="carousel-card">\s*<h3>✨ 나의 빛나는 장점<\/h3>/;

const carouselReplace = `                            \${overallPersona.dialogueScripts && overallPersona.dialogueScripts[childAge] ? \`
                            <div class="carousel-card" style="border-color: #3b82f6; background: rgba(59, 130, 246, 0.05);">
                                <h3>🗣️ \${ageMap[childAge]} 맞춤 대화 스크립트</h3>
                                <p style="font-size: 0.95rem; color: var(--text-body); margin-bottom: 12px;">오늘 당장 아이에게 이렇게 말해보세요!</p>
                                <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:12px;">
                                    \${overallPersona.dialogueScripts[childAge].map(script => \`
                                        <li style="background: #fff; padding: 16px; border-radius: 12px; border: 1px solid var(--glass-border); box-shadow: var(--shadow-soft); position: relative; padding-left: 40px;">
                                            <span style="position:absolute; left:16px; top:16px; color:#3b82f6;"><i class="fas fa-quote-left"></i></span>
                                            <span style="font-weight: 700; color: var(--text-main); line-height: 1.5; font-size: 1.05rem;">\${script}</span>
                                        </li>
                                    \`).join('')}
                                </ul>
                            </div>
                            \` : ''}

                            \${overallPersona.testimonials ? \`
                            <div class="carousel-card" style="background: var(--bg-card);">
                                <h3>💬 같은 유형 부모들의 공감 한마디</h3>
                                <div class="testimonial-slider" style="position:relative; margin-top:16px;">
                                    <div id="testimonialContent" style="font-size: 1.05rem; font-weight: 600; color: var(--text-main); line-height: 1.6; word-break: keep-all; font-style: italic; min-height: 80px; display:flex; align-items:center; justify-content:center; text-align:center; transition: opacity 0.2s;">
                                        "\${overallPersona.testimonials[0]}"
                                    </div>
                                    <div style="text-align:right; margin-top:12px;">
                                        <button onclick="nextTestimonial('\${overallPersona.combo}')" style="background:var(--bg-main); border:1px solid var(--glass-border); border-radius:20px; padding:6px 16px; font-size:0.85rem; color:var(--text-body); cursor:pointer; font-weight:700; transition:all 0.2s;">다음 공감 보기 <i class="fas fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                            \` : ''}

                            <div class="carousel-card">
                                <h3>✨ 나의 빛나는 장점</h3>`;

if (html.match(carouselTarget) && !html.includes('맞춤 대화 스크립트')) {
    html = html.replace(carouselTarget, carouselReplace);
}

// 3. Inject Letter Modal and JS functions at the end of body
const scriptTarget = /function showToast\(message\) \{/;

const scriptReplace = `        // Testimonials logic
        let currentTestimonialIndex = 0;
        window.nextTestimonial = function(combo) {
            const persona = OVERALL_TITLES.find(p => p.combo === combo);
            if (!persona || !persona.testimonials) return;
            currentTestimonialIndex = (currentTestimonialIndex + 1) % persona.testimonials.length;
            const content = document.getElementById('testimonialContent');
            content.style.opacity = 0;
            setTimeout(() => {
                content.innerHTML = '"' + persona.testimonials[currentTestimonialIndex] + '"';
                content.style.opacity = 1;
            }, 200);
        };

        // Letter Generator Logic
        window.openLetterModal = function() {
            if (!results || !results.overallPersona || !results.overallPersona.letterTemplate) return;
            const letter = results.overallPersona.letterTemplate;
            document.getElementById('letterTextArea').value = letter;
            document.getElementById('letterModal').style.display = 'flex';
        };
        window.closeLetterModal = function() {
            document.getElementById('letterModal').style.display = 'none';
        };
        window.copyLetter = function() {
            const text = document.getElementById('letterTextArea').value;
            navigator.clipboard.writeText(text).then(() => {
                showToast('편지가 복사되었습니다! 카톡에 붙여넣기 해보세요.');
                closeLetterModal();
            });
        };

        function showToast(message) {`;

if (html.match(scriptTarget) && !html.includes('openLetterModal')) {
    html = html.replace(scriptTarget, scriptReplace);
}

const modalHtml = `
    <!-- Letter Generator Modal -->
    <div id="letterModal" style="display:none; position:fixed; inset:0; background:rgba(15,23,42,0.8); z-index:9999; align-items:center; justify-content:center; backdrop-filter:blur(4px); padding:24px;">
        <div style="background:var(--bg-card); width:100%; max-width:400px; border-radius:24px; padding:24px; box-shadow:var(--shadow-card); position:relative; border:1px solid var(--glass-border); animation: fadeInUp 0.3s ease;">
            <button onclick="closeLetterModal()" style="position:absolute; top:16px; right:16px; background:none; border:none; font-size:1.5rem; cursor:pointer; color:var(--text-dim);">&times;</button>
            <h3 style="font-size:1.3rem; font-weight:800; color:var(--text-main); margin-bottom:8px; text-align:center;">💌 배우자에게 보내는 편지</h3>
            <p style="text-align:center; color:var(--text-body); font-size:0.9rem; margin-bottom:20px;">내용을 자유롭게 수정한 뒤 복사해서 전달해보세요!</p>
            <textarea id="letterTextArea" style="width:100%; height:220px; padding:16px; border-radius:12px; border:2px solid var(--glass-border); font-family:inherit; font-size:0.95rem; color:var(--text-main); line-height:1.6; resize:none; background:var(--bg-main); margin-bottom:20px; outline:none; transition:all 0.2s;" onfocus="this.style.borderColor='var(--primary)'" onblur="this.style.borderColor='var(--glass-border)'"></textarea>
            <button class="btn btn--primary btn--large" style="width:100%;" onclick="copyLetter()"><i class="fas fa-copy"></i> 복사하기</button>
        </div>
    </div>
`;

if (!html.includes('letterModal')) {
    html = html.replace('</body>', modalHtml + '\n</body>');
}

fs.writeFileSync(file, html);
console.log('Patched result.html with robust regex approach!');
