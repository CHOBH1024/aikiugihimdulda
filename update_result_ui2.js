const fs = require('fs');
let html = fs.readFileSync('result.html', 'utf8');

// 1. Update #captureArea CSS
const captureAreaCSS = `
        /* Off-screen capture area */
        #captureArea {
            position: absolute;
            left: -9999px;
            top: 0;
            width: 1080px;
            height: 1920px; /* 9:16 Story Ratio */
            background: #FFF5F5;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 80px;
            box-sizing: border-box;
            z-index: -100;
        }

        .capture-card {
            background: #fff;
            width: 100%;
            border-radius: 60px;
            overflow: hidden;
            box-shadow: 0 40px 100px rgba(255, 107, 107, 0.15);
            border: 4px solid #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .capture-img { width: 70%; aspect-ratio: 1/1; object-fit: cover; border-radius: 50%; margin-top: 60px; border: 12px solid #FFF5F5; }
        .capture-body { padding: 50px 60px 80px; text-align: center; width: 100%; }
        .capture-tags { font-size: 32px; color: #FF6B6B; font-weight: 800; margin-bottom: 24px; letter-spacing: 1px; display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
        .capture-title { font-size: 80px; color: #2D3748; font-weight: 900; margin-bottom: 30px; line-height: 1.2; word-break: keep-all; }
        .capture-desc { font-size: 38px; color: #4A5568; line-height: 1.6; word-break: keep-all; padding: 0 40px; }
        
        .capture-footer { margin-top: 60px; text-align: center; font-size: 34px; color: #FF6B6B; font-weight: 800; font-family: 'Nunito', sans-serif; display: flex; align-items: center; gap: 16px; }
        .capture-footer-icon { font-size: 44px; }
`;
html = html.replace(/\/\* Off-screen capture area \*\/[\s\S]*?\.capture-footer \{[\s\S]*?\}/, captureAreaCSS.trim());


// 2. Update #captureArea HTML
const captureAreaHTML = `
    <!-- Hidden Capture Area -->
    <div id="captureArea">
        <div class="capture-card">
            <img id="capImg" src="" class="capture-img">
            <div class="capture-body">
                <div class="capture-tags" id="capTags"></div>
                <div class="capture-title" id="capTitle"></div>
                <div class="capture-desc" id="capDesc"></div>
            </div>
        </div>
        <div class="capture-footer"><span class="capture-footer-icon">🪞</span> Mirror Inside Parenting</div>
    </div>
`;
html = html.replace(/<!-- Hidden Capture Area -->[\s\S]*?<\/div>\s*<\/div>/, captureAreaHTML.trim());


// 3. Update captureArea JS Logic
const captureJS = `
            document.getElementById('capImg').src = overallPersona.image;
            document.getElementById('capTags').innerHTML = overallPersona.keywords.split(' ').map(k => \`<span style="background: rgba(255,107,107,0.1); padding: 8px 24px; border-radius: 30px;">\${k}</span>\`).join('');
            document.getElementById('capTitle').innerHTML = overallPersona.name.replace(' ', '<br>');
            document.getElementById('capDesc').textContent = overallPersona.comfortingWords;
`;
html = html.replace(/document\.getElementById\('capImg'\)\.src = overallPersona\.image;[\s\S]*?document\.getElementById\('capDesc'\)\.textContent = overallPersona\.desc;/, captureJS.trim());


// 4. Update Recommended Columns HTML (append to the end of resultWrapper)
const recColumnsJS = `
            // Recommended Columns Rendering
            if (overallPersona.recommendedColumns) {
                const recContainer = document.createElement('div');
                recContainer.style.marginTop = '48px';
                recContainer.style.marginBottom = '32px';
                
                let colsHtml = \`
                    <h3 style="font-size: 1.3rem; margin-bottom: 20px; color: var(--text-main); border-bottom: 2px solid var(--glass-border); padding-bottom: 12px;">
                        📚 \${overallPersona.name.split(' ')[0]} 부모님을 위한 맞춤 추천 칼럼
                    </h3>
                    <div style="display: flex; flex-direction: column; gap: 16px;">
                \`;
                
                overallPersona.recommendedColumns.forEach(col => {
                    colsHtml += \`
                        <a href="\${col.url}" style="display: block; background: var(--bg-card); padding: 20px; border-radius: 16px; border: 1px solid var(--glass-border); text-decoration: none; transition: all 0.2s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='var(--shadow-card-hover)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
                            <div style="font-size: 0.85rem; color: var(--primary); font-weight: 700; margin-bottom: 8px;">\${col.tags}</div>
                            <h4 style="font-size: 1.1rem; color: var(--text-main); font-weight: 800; line-height: 1.4;">\${col.title}</h4>
                        </a>
                    \`;
                });
                
                colsHtml += \`</div>\`;
                recContainer.innerHTML = colsHtml;
                document.getElementById('resultWrapper').appendChild(recContainer);
            }
`;
html = html.replace(/document\.getElementById\('resultWrapper'\)\.innerHTML = htmlContent;/, `document.getElementById('resultWrapper').innerHTML = htmlContent;\n` + recColumnsJS);

fs.writeFileSync('result.html', html);
console.log('result.html updated for instagram capture and recommended columns');
