const fs = require('fs');
let html = fs.readFileSync('test.html', 'utf8');

const modeSelectionHTML = `
            <div class="test-intro" id="modeSelectionScreen" style="display:none;">
                <img src="assets/images/icons/emoticon_reading.png" alt="Reading" style="width: 100px; height: 100px; margin-bottom: 20px; animation: float 3s ease-in-out infinite;">
                <h1>어떤 <span class="text-gradient">진단 모드</span>를 원하시나요?</h1>
                <p style="font-size: 1.1rem; color: var(--text-body); margin-bottom: 32px; word-break: keep-all;">
                    시간적 여유에 따라 선택해주세요. 두 모드 모두 정확한 결과를 제공합니다.
                </p>
                
                <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 400px; margin: 0 auto;">
                    <button class="option-btn" onclick="selectMode('lite')">
                        <span class="option-btn__label">⏱️</span>
                        간편 진단 (20문항 / 약 3분)
                    </button>
                    <button class="option-btn" onclick="selectMode('pro')">
                        <span class="option-btn__label">🔬</span>
                        심층 진단 (40문항 / 약 6분)
                    </button>
                </div>
            </div>
`;

html = html.replace('<!-- MBTI Modal -->', modeSelectionHTML + '\n    <!-- MBTI Modal -->');

// Replace selectAge to showModeSelection instead of startTest
html = html.replace('startTest();', 'showModeSelection();');

// Add mode selection logic
const modeLogic = `
        function showModeSelection() {
            document.getElementById('ageSelectionScreen').style.display = 'none';
            document.getElementById('modeSelectionScreen').style.display = 'block';
        }
        
        function selectMode(mode) {
            localStorage.setItem('mirrorInsideTestMode', mode);
            document.getElementById('modeSelectionScreen').style.display = 'none';
            startTest();
        }
`;

html = html.replace('function resumeTest()', modeLogic + '\n        function resumeTest()');

fs.writeFileSync('test.html', html);
console.log('test.html UI updated for mode selection');
