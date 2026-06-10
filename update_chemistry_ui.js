const fs = require('fs');

let html = fs.readFileSync('chemistry.html', 'utf8');

// HTML replacements
const oldSelector = `<div class="chemistry-selector">
            <div class="selector-box">
                <h3 class="selector-title">나의 페르소나</h3>
                <select id="myPersona" class="persona-select">
                    <option value="" disabled selected>내 페르소나 선택</option>
                </select>
                <div id="myPersonaCard" class="preview-card" style="display:none;"></div>
            </div>
            
            <div class="vs-badge">VS</div>
            
            <div class="selector-box">
                <h3 class="selector-title">배우자 페르소나</h3>
                <select id="partnerPersona" class="persona-select">
                    <option value="" disabled selected>배우자 페르소나 선택</option>
                </select>
                <div id="partnerPersonaCard" class="preview-card" style="display:none;"></div>
            </div>
        </div>`;

const newSelector = `
        <div class="chemistry-selector" style="flex-direction: column; align-items: center; gap: 32px;">
            <div style="display: flex; gap: 24px; align-items: stretch; width: 100%; max-width: 600px; justify-content: space-between;">
                <div class="selector-box" style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                    <h3 class="selector-title" style="margin-bottom: 16px;">나의 페르소나</h3>
                    <button class="btn btn--outline" id="btnMyPersona" onclick="openPersonaModal('my')" style="width: 100%; min-height: 60px; font-size: 1.1rem; border-style: dashed; border-width: 2px;">
                        + 탭하여 선택
                    </button>
                    <div id="myPersonaCard" class="preview-card" style="display:none; width: 100%; cursor: pointer;" onclick="openPersonaModal('my')"></div>
                    <input type="hidden" id="myPersona" value="">
                </div>
                
                <div class="vs-badge" style="align-self: center; margin: 0 10px;">VS</div>
                
                <div class="selector-box" style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                    <h3 class="selector-title" style="margin-bottom: 16px;">상대방 페르소나</h3>
                    <button class="btn btn--outline" id="btnPartnerPersona" onclick="openPersonaModal('partner')" style="width: 100%; min-height: 60px; font-size: 1.1rem; border-style: dashed; border-width: 2px;">
                        + 탭하여 선택
                    </button>
                    <div id="partnerPersonaCard" class="preview-card" style="display:none; width: 100%; cursor: pointer;" onclick="openPersonaModal('partner')"></div>
                    <input type="hidden" id="partnerPersona" value="">
                </div>
            </div>
        </div>

        <!-- Persona Modal -->
        <div id="personaModal" style="display:none; position: fixed; inset: 0; background: rgba(15,23,42,0.8); backdrop-filter: blur(8px); z-index: 10000; align-items: center; justify-content: center; padding: 20px;">
            <div style="background: #ffffff; border-radius: 24px; padding: 32px; max-width: 700px; width: 100%; max-height: 85vh; overflow-y: auto; position: relative; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);">
                <button onclick="closePersonaModal()" style="position: absolute; top: 20px; right: 24px; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #64748B;">&times;</button>
                <h2 style="color: #0F172A; text-align: center; margin-bottom: 24px; font-size: 1.5rem;">페르소나 선택하기</h2>
                <div id="modalGrid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 16px;">
                    <!-- Modal items will be injected here -->
                </div>
            </div>
        </div>
`;

// Replace the old HTML block if found. If not, it might be slightly different so we regex
html = html.replace(/<div class="chemistry-selector">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, newSelector);


// JS replacements
const oldJs = `        const mySelect = document.getElementById('myPersona');
        const partnerSelect = document.getElementById('partnerPersona');
        const btnCalculate = document.getElementById('btnCalculate');
        const resultContainer = document.getElementById('chemistryResult');

        // Populate Selects
        OVERALL_TITLES.forEach(p => {
            if (p.combo === 'balanced') return; // Skip balanced to keep it simple, or keep it.
            const opt1 = document.createElement('option');
            opt1.value = p.combo;
            opt1.textContent = \`\${p.name}\`;
            mySelect.appendChild(opt1);

            const opt2 = document.createElement('option');
            opt2.value = p.combo;
            opt2.textContent = \`\${p.name}\`;
            partnerSelect.appendChild(opt2);
        });

        // Auto load my results
        const mySavedResult = loadResults();
        if (mySavedResult && mySavedResult.overallPersona && mySavedResult.overallPersona.combo !== 'balanced') {
            mySelect.value = mySavedResult.overallPersona.combo;
            updatePreview('myPersona', mySavedResult.overallPersona.combo);
        }

        mySelect.addEventListener('change', (e) => updatePreview('myPersona', e.target.value));
        partnerSelect.addEventListener('change', (e) => updatePreview('partnerPersona', e.target.value));

        function updatePreview(type, combo) {
            const persona = OVERALL_TITLES.find(t => t.combo === combo);
            if (!persona) return;
            
            const cardId = type === 'myPersona' ? 'myPersonaCard' : 'partnerPersonaCard';
            const card = document.getElementById(cardId);
            
            card.innerHTML = \`
                <img src="\${persona.imageUrl}" alt="\${persona.name}" style="width: 80px; height: 80px; object-fit: contain; margin-bottom: 12px;">
                <h4 style="margin:0; font-size:1.1rem; color:var(--text-main);">\${persona.name}</h4>
            \`;
            card.style.display = 'block';
            card.classList.add('fade-in');

            if (mySelect.value && partnerSelect.value) {
                btnCalculate.disabled = false;
            }
        }`;

const newJs = `        const mySelect = document.getElementById('myPersona'); // Actually an input hidden now
        const partnerSelect = document.getElementById('partnerPersona');
        const btnCalculate = document.getElementById('btnCalculate');
        const resultContainer = document.getElementById('chemistryResult');
        
        let currentSelectingTarget = null; // 'my' or 'partner'

        function openPersonaModal(target) {
            currentSelectingTarget = target;
            const modal = document.getElementById('personaModal');
            const grid = document.getElementById('modalGrid');
            grid.innerHTML = '';
            
            OVERALL_TITLES.forEach(p => {
                if(p.combo === 'balanced') return; // optional
                const div = document.createElement('div');
                div.style.cssText = 'background: #F8FAFC; border: 2px solid transparent; border-radius: 16px; padding: 16px; text-align: center; cursor: pointer; transition: all 0.2s;';
                div.onmouseover = () => { div.style.borderColor = 'var(--primary)'; div.style.background = 'rgba(52, 211, 153, 0.05)'; };
                div.onmouseout = () => { div.style.borderColor = 'transparent'; div.style.background = '#F8FAFC'; };
                div.onclick = () => selectPersona(p.combo);
                
                div.innerHTML = \`
                    <img src="\${p.imageUrl}" alt="\${p.name}" style="width: 70px; height: 70px; object-fit: contain; margin-bottom: 12px;">
                    <h4 style="margin:0; font-size:1rem; color:#1E293B; word-break: keep-all;">\${p.name}</h4>
                \`;
                grid.appendChild(div);
            });
            
            modal.style.display = 'flex';
        }

        function closePersonaModal() {
            document.getElementById('personaModal').style.display = 'none';
        }

        function selectPersona(combo) {
            const inputId = currentSelectingTarget === 'my' ? 'myPersona' : 'partnerPersona';
            const btnId = currentSelectingTarget === 'my' ? 'btnMyPersona' : 'btnPartnerPersona';
            const cardId = currentSelectingTarget === 'my' ? 'myPersonaCard' : 'partnerPersonaCard';
            
            document.getElementById(inputId).value = combo;
            document.getElementById(btnId).style.display = 'none';
            
            const persona = OVERALL_TITLES.find(t => t.combo === combo);
            const card = document.getElementById(cardId);
            card.innerHTML = \`
                <img src="\${persona.imageUrl}" alt="\${persona.name}" style="width: 80px; height: 80px; object-fit: contain; margin-bottom: 12px;">
                <h4 style="margin:0; font-size:1.1rem; color:var(--text-main);">\${persona.name}</h4>
                <div style="font-size:0.85rem; color:var(--primary); margin-top:8px;">클립하여 변경</div>
            \`;
            card.style.display = 'block';
            card.classList.add('fade-in');
            
            closePersonaModal();

            if (document.getElementById('myPersona').value && document.getElementById('partnerPersona').value) {
                btnCalculate.disabled = false;
            }
        }

        // Auto load my results
        const mySavedResult = loadResults();
        if (mySavedResult && mySavedResult.overallPersona && mySavedResult.overallPersona.combo !== 'balanced') {
            currentSelectingTarget = 'my';
            selectPersona(mySavedResult.overallPersona.combo);
        }`;

// Replace JS
html = html.replace(oldJs, newJs);

fs.writeFileSync('chemistry.html', html);
console.log('✅ chemistry.html 모달 선택 UI 적용 완료');
