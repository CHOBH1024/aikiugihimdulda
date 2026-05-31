const fs = require('fs');
let html = fs.readFileSync('test.html', 'utf8');

// Replace startTestBtn onclick
html = html.replace('onclick="startTest()"', 'onclick="showAgeSelection()"');

// Add the Age Selection Screen HTML
const ageSelectionHTML = `
            <div class="test-intro" id="ageSelectionScreen" style="display:none;">
                <img src="assets/images/icons/emoticon_thinking.png" alt="Thinking" style="width: 100px; height: 100px; margin-bottom: 20px; animation: float 3s ease-in-out infinite;">
                <h1>아이의 <span class="text-gradient">연령대</span>를 알려주세요</h1>
                <p style="font-size: 1.1rem; color: var(--text-body); margin-bottom: 32px; word-break: keep-all;">
                    아이의 발달 단계에 꼭 맞는 맞춤형 육아 가이드를 준비해 드릴게요.
                </p>
                
                <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 400px; margin: 0 auto;">
                    <button class="option-btn" onclick="selectAge('infant')">
                        <span class="option-btn__label">👶</span>
                        영아기 (0~12개월)
                    </button>
                    <button class="option-btn" onclick="selectAge('toddler')">
                        <span class="option-btn__label">🍼</span>
                        걸음마기 (1~3세)
                    </button>
                    <button class="option-btn" onclick="selectAge('preschool')">
                        <span class="option-btn__label">🧸</span>
                        유아기 (4~7세)
                    </button>
                    <button class="option-btn" onclick="selectAge('school')">
                        <span class="option-btn__label">🎒</span>
                        학령기 (8세 이상)
                    </button>
                </div>
            </div>
`;

html = html.replace('<!-- MBTI Modal -->', ageSelectionHTML + '\n    <!-- MBTI Modal -->');

// Add JS functions
const jsFunctions = `
        function showAgeSelection() {
            document.getElementById('testIntro').style.display = 'none';
            document.getElementById('ageSelectionScreen').style.display = 'block';
        }
        
        function selectAge(age) {
            localStorage.setItem('mirrorInsideChildAge', age);
            document.getElementById('ageSelectionScreen').style.display = 'none';
            startTest();
        }
`;

html = html.replace('function resumeTest()', jsFunctions + '\n        function resumeTest()');

fs.writeFileSync('test.html', html);
console.log('test.html updated');
