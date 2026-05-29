const fs = require('fs');

let content = fs.readFileSync('data.js', 'utf8');

const additions = {
    warm: {
        hashtags: "['#공감요정', '#애착형성끝판왕', '#거절이젤힘들어']",
        factBomb: "'공감해주다 내 속이 타들어가는 호구형 부모가 될 수 있음'",
        bestMatch: "'structured'",
        worstMatch: "'free'"
    },
    structured: {
        hashtags: "['#인간스케줄러', '#규칙이생명', '#플랜B는없다']",
        factBomb: "'머리로는 오은영 박사님인데 현실에서는 자꾸 욱하는 스타일'",
        bestMatch: "'free'",
        worstMatch: "'creative'"
    },
    free: {
        hashtags: "['#육아는방목', '#경험이제일', '#루틴그게뭔데']",
        factBomb: "'자유를 빙자한 방목일 수 있음. 팩트는 내가 귀찮은 거임'",
        bestMatch: "'structured'",
        worstMatch: "'balanced'"
    },
    wise: {
        hashtags: "['#정보통', '#교육철학확고', '#설교모드발동']",
        factBomb: "'애 우는데 왜 우냐고 원인 분석하다가 애 더 울리는 이과형 부모'",
        bestMatch: "'empathetic'",
        worstMatch: "'resilient'"
    },
    empathetic: {
        hashtags: "['#눈물샘자극', '#우리아이최고', '#감정쓰레기통주의']",
        factBomb: "'아이가 울면 같이 울어버려서 결국 아무것도 해결 안 됨'",
        bestMatch: "'wise'",
        worstMatch: "'structured'"
    },
    creative: {
        hashtags: "['#놀이천재', '#텐션저세상', '#체력방전주의']",
        factBomb: "'애랑 놀아주는 건지 내가 노는 건지 구분이 안 가는 철부지형'",
        bestMatch: "'balanced'",
        worstMatch: "'structured'"
    },
    resilient: {
        hashtags: "['#멘탈갑', '#오뚝이인생', '#징징대지마']",
        factBomb: "'본인 멘탈이 너무 강해서 애가 징징대는 걸 절대 이해 못 함'",
        bestMatch: "'warm'",
        worstMatch: "'wise'"
    },
    balanced: {
        hashtags: "['#육아마스터', '#중도의길', '#완벽주의의피곤함']",
        factBomb: "'다 잘하려고 강박 갖다가 번아웃 와서 다크서클 턱밑까지 내려옴'",
        bestMatch: "'creative'",
        worstMatch: "'free'"
    }
};

for (const [key, traits] of Object.entries(additions)) {
    // Find the combo line
    const comboLine = `combo: '${key}'`;
    const startIndex = content.indexOf(comboLine);
    if (startIndex !== -1) {
        // Find the end of the anxieties array for this persona
        const anxietyStr = 'anxieties: [';
        let anxietiesIndex = content.indexOf(anxietyStr, startIndex);
        
        // Find the closing bracket and comma
        let endIndex = content.indexOf('],', anxietiesIndex);
        if (endIndex !== -1) {
            const splitPoint = endIndex + 2;
            const insertStr = `
    hashtags: ${traits.hashtags},
    factBomb: ${traits.factBomb},
    bestMatch: ${traits.bestMatch},
    worstMatch: ${traits.worstMatch},`;
            content = content.slice(0, splitPoint) + insertStr + content.slice(splitPoint);
        }
    }
}

fs.writeFileSync('data.js', content, 'utf8');
console.log('Successfully injected viral traits into data.js');
