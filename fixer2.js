const fs = require('fs');
let html = fs.readFileSync('result.html', 'utf8');

const shareKakaoTarget = `        function shareKakao() {
            const url = 'https://aikiugihimdulda.vercel.app';
            const resultUrl = window.location.href;
            const text = \`🪞 Mirror Inside Parenting\\n\\n나의 육아 페르소나 진단 결과가 나왔어요!\\n\\n👉 나의 결과 보기:\\n\${resultUrl}\\n\\n👉 직접 테스트해보기:\\n\${url}\`;

            if (navigator.share) {
                navigator.share({
                    title: 'Mirror Inside 육아 진단',
                    text: text
                }).catch(console.error);
            } else {
                navigator.clipboard.writeText(text).then(() => {
                    alert('결과 링크와 내용이 클립보드에 복사되었습니다!\\n카카오톡 대화창에 붙여넣기 하여 공유해보세요.');
                }).catch(() => {
                    alert('클립보드 복사에 실패했습니다. 브라우저의 URL을 직접 복사해 주세요.');
                });
            }
        }`;
        
const shareKakaoReplacement = `        function shareKakao() {
            const url = 'https://aikiugihimdulda.vercel.app';
            const resultUrl = window.location.href;
            const personaName = results && results.overallPersona ? results.overallPersona.name : '';
            const text = \`🪞 Mirror Inside Parenting\${personaName ? \`\\n\\n✨ 나의 육아 페르소나: \${personaName}\` : ''}\\n\\n나는 어떤 유형의 부모일까요? 3분 진단으로 알아보세요!\\n👉 \${url}/test.html\`;

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
        }`;

html = html.replace(shareKakaoTarget, shareKakaoReplacement);

const copyResultTarget = `            navigator.clipboard.writeText(text).then(() => {
                alert('결과 링크가 복사되었습니다!');
            });
        }`;

const copyResultReplacement = `            copyAndToast(text);
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
                toast.style.cssText = \`
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
                \`;
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
        }`;

html = html.replace(copyResultTarget, copyResultReplacement);

html = html.replace('el.style.zIndex = \'9999\';', 'el.style.zIndex = \'9999\';\n            el.style.visibility = \'visible\';');
html = html.replace('const canvas = await html2canvas(el, { scale: 2, backgroundColor: \'#FFF5F5\' });', 'await document.fonts.ready;\n                await new Promise(r => setTimeout(r, 250));\n                const canvas = await html2canvas(el, { scale: 2, backgroundColor: \'#FFF5F5\', useCORS: true, logging: false });');
html = html.replace('el.style.zIndex = \'-100\';', 'el.style.zIndex = \'-100\';\n                el.style.visibility = \'hidden\';');

html = html.replace('const canvas = await html2canvas(el, { scale: 3, backgroundColor: \'#0F172A\', useCORS: true });', 'await document.fonts.ready;\n                await new Promise(r => setTimeout(r, 250));\n                const canvas = await html2canvas(el, { scale: 3, backgroundColor: \'#0F172A\', useCORS: true, logging: false });');

html = html.replace('...팩트 폭격에 지치고 눈물이 날 것 같다면', '...양육 고민으로 마음이 지친다면');
html = html.replace('당신이 이토록 아파하며 육아 칼럼을 뒤적이는 진짜 이유', '양육의 무게를 묵묵히 견디는 당신에게');

const originalText = `우리가 그토록 아프게 뼈를 때렸는데도, 당신은 창을 닫지 않고 여기까지 스크롤을 내렸습니다.<br><br>
                왜일까요?<br>
                당신이 부족한 부모라서가 아닙니다. 당신이 <strong>누구보다 아이를 미치도록 사랑하는 부모</strong>이기 때문입니다.<br><br>
                어젯밤, 잠든 아이의 이마를 쓸어넘기며 '오늘 화내서 미안해'라고 속으로 눈물 삼켰던 당신의 그 죄책감은, 당신이 얼마나 훌륭한 부모가 되고 싶어 하는지를 증명하는 가장 눈부신 훈장입니다.<br><br>
                아이에게 완벽한 부모는 필요 없습니다. <strong>오늘 하루 실수했더라도, 내일 다시 안아주려고 노력하는 당신의 그 뒷모습</strong>만으로도 아이의 우주는 이미 완벽하게 따뜻합니다.<br><br>
                고생하셨습니다. 당신은 이미 충분히 좋은 부모입니다.`;

const replaceText = `누구도 완벽한 정답을 알려주지 않는 육아의 여정에서, 끊임없이 고민하며 여기까지 글을 읽어오셨습니다.<br><br>
                부족함을 느끼는 것은 당신이 부족한 부모이기 때문이 아닙니다. 아이에게 더 건강한 환경을 제공하고자 깊이 고민하는 주체적인 양육자이기 때문입니다.<br><br>
                완벽한 부모가 아니어도 괜찮습니다. 고민하고 조율해 나가는 과정 자체가 아이에게 가장 훌륭한 환경이자 든든한 울타리입니다.<br><br>
                오늘의 크고 작은 고민들이 모여 더 단단한 부모와 아이의 관계를 만들어갈 것입니다. 당신의 수고와 노력을 진심으로 응원합니다.`;

html = html.replace(originalText, replaceText);
html = html.replace('위로받고 돌아가기', '닫기');

fs.writeFileSync('result.html', html);
console.log('Fixed everything without Syntax Error!');
