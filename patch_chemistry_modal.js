const fs = require('fs');
let html = fs.readFileSync('chemistry.html', 'utf8');

const targetHtml = `            // Add MBTI selector at the top of the grid
            const mbtiDiv = document.createElement('div');
            mbtiDiv.style.gridColumn = '1 / -1';
            mbtiDiv.style.marginBottom = '12px';
            mbtiDiv.innerHTML = \`
                <select id="modalMbtiSelect" onchange="selectByMBTI(this.value)" style="width:100%; padding:12px; border-radius:12px; border:2px solid var(--glass-border); font-size:1rem;">
                    <option value="" disabled selected>🤔 내 MBTI로 바로 선택하기</option>
                    \${Object.keys(MBTI_MAP).map(m => \`<option value="\${m}">\${m}</option>\`).join('')}
                </select>
            \`;
            grid.appendChild(mbtiDiv);`;

const replaceHtml = `            // Add MBTI Grid at the top
            const mbtiContainer = document.createElement('div');
            mbtiContainer.style.gridColumn = '1 / -1';
            mbtiContainer.style.marginBottom = '24px';
            
            const mbtiTitle = document.createElement('h4');
            mbtiTitle.textContent = '🤔 MBTI로 빠르게 찾기';
            mbtiTitle.style.cssText = 'font-size:1rem; color:#475569; margin-bottom:12px; font-weight:700; text-align:center;';
            mbtiContainer.appendChild(mbtiTitle);
            
            const mbtiGrid = document.createElement('div');
            mbtiGrid.style.cssText = 'display:grid; grid-template-columns:repeat(4, 1fr); gap:8px;';
            Object.keys(MBTI_MAP).forEach(m => {
                const btn = document.createElement('button');
                btn.textContent = m;
                btn.style.cssText = 'padding:10px 4px; border:2px solid #E2E8F0; border-radius:10px; background:#F8FAFC; color:#1E293B; font-weight:700; cursor:pointer; transition:all 0.2s; font-size:0.9rem;';
                btn.onmouseover = () => { btn.style.borderColor='var(--primary)'; btn.style.background='rgba(52,211,153,0.05)'; };
                btn.onmouseout = () => { btn.style.borderColor='#E2E8F0'; btn.style.background='#F8FAFC'; };
                btn.onclick = () => selectByMBTI(m);
                mbtiGrid.appendChild(btn);
            });
            mbtiContainer.appendChild(mbtiGrid);
            
            const hr = document.createElement('div');
            hr.style.cssText = 'height:1px; background:#E2E8F0; margin: 20px 0;';
            mbtiContainer.appendChild(hr);
            
            const pTitle = document.createElement('h4');
            pTitle.textContent = '✨ 육아 페르소나로 찾기';
            pTitle.style.cssText = 'font-size:1rem; color:#475569; margin-bottom:12px; font-weight:700; text-align:center;';
            mbtiContainer.appendChild(pTitle);
            
            grid.appendChild(mbtiContainer);`;

html = html.replace(targetHtml, replaceHtml);

fs.writeFileSync('chemistry.html', html);
console.log('Fixed chemistry.html modal dropdown!');
