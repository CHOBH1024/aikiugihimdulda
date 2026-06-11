const fs = require('fs');

const file = 'result.html';
let html = fs.readFileSync(file, 'utf8');

const targetStr = '<div class="carousel-card">\n                                <h3>✨ 나의 빛나는 장점</h3>';
const replaceStr = `                            \${overallPersona.dialogueScripts && overallPersona.dialogueScripts[childAge] ? \`
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

if (html.includes(targetStr)) {
    html = html.replace(targetStr, replaceStr);
    fs.writeFileSync(file, html);
    console.log('Carousel injected successfully!');
} else {
    console.log('Target string not found in result.html');
}
