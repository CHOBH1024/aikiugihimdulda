const fs = require('fs');
let html = fs.readFileSync('result.html', 'utf8');

const shareKakaoStart = html.indexOf('function shareKakao() {');
const endScript = html.indexOf('</script>', shareKakaoStart);

if (shareKakaoStart !== -1 && endScript !== -1) {
    const before = html.substring(0, shareKakaoStart);
    const after = html.substring(endScript);
    
    const newFns = `function shareKakao() {
            const baseUrl = 'https://aikiugihimdulda.vercel.app';
            let shareUrl = baseUrl;
            if (results && results.overallPersona) {
                shareUrl = \`\${baseUrl}/mbti/\${results.overallPersona.combo}.html\`;
            }

            if (navigator.share) {
                navigator.share({
                    title: 'Mirror Inside 육아 진단',
                    text: \`🪞 Mirror Inside Parenting\\n\\n나의 육아 페르소나 진단 결과가 나왔어요!\\n\\n👉 나의 결과 보기:\\n\${shareUrl}\`,
                    url: shareUrl
                }).catch(console.error);
            } else {
                navigator.clipboard.writeText(\`🪞 Mirror Inside Parenting\\n\\n나의 육아 페르소나 진단 결과가 나왔어요!\\n\\n👉 나의 결과 보기:\\n\${shareUrl}\`).then(() => {
                    alert('결과 링크와 내용이 클립보드에 복사되었습니다!\\n카카오톡 대화창에 붙여넣기 하여 공유해보세요.');
                }).catch(() => {
                    alert('클립보드 복사에 실패했습니다. 브라우저의 URL을 직접 복사해 주세요.');
                });
            }
        }

        function copyResult() {
            if (!results) return;
            const baseUrl = 'https://aikiugihimdulda.vercel.app';
            const shareUrl = \`\${baseUrl}/mbti/\${results.overallPersona.combo}.html\`;

            let text = \`🪞 Mirror Inside Parenting 진단 결과\\n\\n\`;
            text += \`✨ 나의 육아 페르소나: \${results.overallPersona.name}\\n\`;
            text += \`\${results.overallPersona.desc}\\n\\n\`;
            text += \`🔗 결과 상세 보기: \${shareUrl}\\n\`;
            text += \`👉 나도 알아보기: \${baseUrl}/test.html\`;

            navigator.clipboard.writeText(text).then(() => {
                alert('결과 링크가 복사되었습니다!');
            });
        }
    `;
    
    fs.writeFileSync('result.html', before + newFns + after);
    console.log('Share logic patched.');
} else {
    console.log('Could not find shareKakao function.');
}
