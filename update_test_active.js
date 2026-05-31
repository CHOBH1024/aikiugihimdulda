const fs = require('fs');
let html = fs.readFileSync('test.html', 'utf8');

const updatedTestLogic = `
        // === State ===
        let currentIndex = 0;
        let answers = [];
        let isAnimating = false;
        let activeQuestions = [];

        // === Check for saved progress ===
        const saved = loadProgress();
        if (saved && saved.answers && saved.answers.length > 0 && saved.answers.length < 40) {
            document.getElementById('resumeNotice').style.display = 'block';
        }

        // === Modal Controls ===
`;

html = html.replace(/\/\/ === State ===[\s\S]*?\/\/ === Modal Controls ===/, updatedTestLogic.trim() + '\n        // === Modal Controls ===');

const updatedStartTest = `
        function startTest() {
            const mode = localStorage.getItem('mirrorInsideTestMode') || 'lite';
            activeQuestions = [];
            
            // Filter QUESTIONS based on mode
            const dims = ['emotional', 'discipline', 'autonomy', 'growth', 'resilience'];
            const qsPerDim = mode === 'lite' ? 4 : 8; // 20 vs 40 questions

            dims.forEach(dim => {
                const dimQs = QUESTIONS.filter(q => q.dimension === dim);
                activeQuestions = activeQuestions.concat(dimQs.slice(0, qsPerDim));
            });

            document.getElementById('topInfo').style.display = 'block';
            document.getElementById('topProgress').style.display = 'block';
            renderQuestion(currentIndex);
        }

        function renderQuestion(index) {
            if (index >= activeQuestions.length) {
                showCompletion();
                return;
            }

            const q = activeQuestions[index];
            const dim = DIMENSIONS.find(d => d.id === q.dimension);
            const qNumInDim = activeQuestions.filter((qq, i) => qq.dimension === q.dimension && i <= index).length;
            const totalInDim = activeQuestions.filter(qq => qq.dimension === q.dimension).length;

            // Update top bar
            document.getElementById('prevBtn').style.display = index > 0 ? 'block' : 'none';
            document.getElementById('topDimension').textContent = \`\${dim.icon} \${dim.name}\`;
            document.getElementById('topCount').textContent = \`\${index + 1} / \${activeQuestions.length}\`;
            document.getElementById('progressFill').style.width = \`\${((index) / activeQuestions.length) * 100}%\`;
`;

html = html.replace(/function startTest\(\) \{[\s\S]*?getElementById\('progressFill'\)\.style\.width = .*?;\n/, updatedStartTest.trim() + '\n');

// Also update `QUESTIONS.length` usages, but only inside renderQuestion and topCount which we just did, wait, `QUESTIONS.length` is also in `showCompletion()` where it does score calculations!
// Actually we need to search for `QUESTIONS.length` and replace it cautiously, or just define a function.
// Let's replace remaining `QUESTIONS.length` with `activeQuestions.length`
html = html.replace(/QUESTIONS\.length/g, 'activeQuestions.length');
// BUT wait, `totalInDim = QUESTIONS.filter...` was already in the original, now replaced.
// Wait, `showCompletion()` has:
// `const totalInDim = QUESTIONS.filter(q => q.dimension === dim.id).length;`
// We need that to use activeQuestions too. The global replace did that.

fs.writeFileSync('test.html', html);
console.log('test.html updated for activeQuestions');
