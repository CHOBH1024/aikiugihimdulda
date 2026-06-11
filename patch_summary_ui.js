const fs = require('fs');

// 1. Update data.js
let dataJs = fs.readFileSync('data.js', 'utf8');
if (!dataJs.includes('summary: result.summary,')) {
    dataJs = dataJs.replace(
        'title: result.title, \n    clash: result.clash,', 
        'title: result.title, \n    summary: result.summary, \n    clash: result.clash,'
    );
    // If replace didn't work because of \r\n, try regex
    dataJs = dataJs.replace(/title: result\.title,[\s\r\n]+clash: result\.clash,/g, 'title: result.title,\n    summary: result.summary || "",\n    clash: result.clash,');
    fs.writeFileSync('data.js', dataJs);
    console.log('✅ data.js 업데이트 완료');
}

// 2. Update chemistry.html
let chemHtml = fs.readFileSync('chemistry.html', 'utf8');

const summaryHTML = `
                <div class="chem-summary" style="background: rgba(15,23,42,0.6); padding: 20px; border-radius: 12px; margin-bottom: 24px; border: 1px solid rgba(255,255,255,0.1);">
                    <h3 style="margin-top: 0; color: var(--primary); font-size: 1.2rem; margin-bottom: 10px;">💡 한 줄 요약</h3>
                    <p style="margin-bottom: 0; font-size: 1.1rem; line-height: 1.6; color: #f1f5f9;">\${chem.summary || "서로의 다름을 인정하고 역할을 분담하면 최고의 시너지를 낼 수 있습니다."}</p>
                </div>
                
                <div class="chem-grid">`;

if (!chemHtml.includes('<div class="chem-summary"')) {
    chemHtml = chemHtml.replace('<div class="chem-grid">', summaryHTML);
    fs.writeFileSync('chemistry.html', chemHtml);
    console.log('✅ chemistry.html 요약 렌더링 업데이트 완료');
}
