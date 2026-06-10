const fs = require('fs');

let html = fs.readFileSync('result.html', 'utf8');

const easterEggHTML = `
    <!-- The Ultimate Tear-Jerker Easter Egg -->
    <div style="text-align:center; margin-top: 100px; padding-bottom: 40px; opacity: 0.3; transition: opacity 0.3s;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.3">
        <button onclick="openTearJerker()" style="background:none; border:none; color:var(--text-dim); font-size:0.85rem; text-decoration:underline; cursor:pointer; font-family:'Pretendard', sans-serif;">
            ...팩트 폭격에 지치고 눈물이 날 것 같다면
        </button>
    </div>

    <!-- Tear-Jerker Modal -->
    <div id="tearJerkerModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(15, 23, 42, 0.95); z-index:99999; flex-direction:column; align-items:center; justify-content:center; opacity:0; transition:opacity 1.5s ease;">
        <div style="max-width: 600px; padding: 40px; text-align:center;">
            <div style="font-size: 3rem; margin-bottom: 24px; animation: float 3s ease-in-out infinite;">🌌</div>
            <h2 style="font-size: 1.6rem; color: #F8FAFC; font-weight: 800; margin-bottom: 32px; line-height:1.5;">
                당신이 이토록 아파하며 육아 칼럼을 뒤적이는 진짜 이유
            </h2>
            <p style="font-size: 1.1rem; color: #94A3B8; line-height: 1.9; margin-bottom: 24px; word-break: keep-all; text-align: left;">
                우리가 그토록 아프게 뼈를 때렸는데도, 당신은 창을 닫지 않고 여기까지 스크롤을 내렸습니다.<br><br>
                왜일까요?<br>
                당신이 부족한 부모라서가 아닙니다. 당신이 <strong>누구보다 아이를 미치도록 사랑하는 부모</strong>이기 때문입니다.<br><br>
                어젯밤, 잠든 아이의 이마를 쓸어넘기며 '오늘 화내서 미안해'라고 속으로 눈물 삼켰던 당신의 그 죄책감은, 당신이 얼마나 훌륭한 부모가 되고 싶어 하는지를 증명하는 가장 눈부신 훈장입니다.<br><br>
                아이에게 완벽한 부모는 필요 없습니다. <strong>오늘 하루 실수했더라도, 내일 다시 안아주려고 노력하는 당신의 그 뒷모습</strong>만으로도 아이의 우주는 이미 완벽하게 따뜻합니다.<br><br>
                고생하셨습니다. 당신은 이미 충분히 좋은 부모입니다.
            </p>
            <button onclick="closeTearJerker()" style="margin-top: 32px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.3); color: #F8FAFC; padding: 12px 32px; border-radius: 30px; font-size: 1rem; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">
                위로받고 돌아가기
            </button>
        </div>
    </div>
    
    <script>
        function openTearJerker() {
            const modal = document.getElementById('tearJerkerModal');
            modal.style.display = 'flex';
            // Trigger reflow
            void modal.offsetWidth;
            modal.style.opacity = '1';
            document.body.style.overflow = 'hidden';
        }
        function closeTearJerker() {
            const modal = document.getElementById('tearJerkerModal');
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 1500);
        }
    </script>
`;

if (!html.includes('id="tearJerkerModal"')) {
    if (html.includes('</main>')) {
        html = html.replace('</main>', easterEggHTML + '\n</main>');
        fs.writeFileSync('result.html', html);
        console.log('Easter egg injected successfully!');
    } else {
        console.log('Could not find </main>');
    }
} else {
    console.log('Easter egg already exists.');
}
