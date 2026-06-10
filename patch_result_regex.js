const fs = require('fs');

let html = fs.readFileSync('result.html', 'utf8');

const regex = /<div style="background: rgba\(239, 68, 68, 0\.05\);[^>]*>[\s\S]*?<h4[^>]*>⚡ 성장을 위한 뼈때리는 조언<\/h4>[\s\S]*?<\/div>/;

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

if(regex.test(html)) {
    html = html.replace(regex, harshAdviceNew);
    fs.writeFileSync('result.html', html);
    console.log("Success replacing harshAdvice via regex");
} else {
    console.log("Not found with regex");
}
