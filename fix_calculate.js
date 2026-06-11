const fs = require('fs');

// data.js: calculateResults 함수 수정
let code = fs.readFileSync('data.js', 'utf8');

// 1. 함수 시그니처 및 내부 QUESTIONS 참조 교체
code = code.replace(
  'function calculateResults(answers) {',
  'function calculateResults(answers, questions) {\n  // questions 미전달 시 기본값: QUESTIONS_25\n  if (!questions) {\n    questions = (typeof QUESTIONS_25 !== \'undefined\') ? QUESTIONS_25 : QUESTIONS;\n  }\n'
);

// 2. QUESTIONS[qIndex] → questions[qIndex]
code = code.replace(
  '    const question = QUESTIONS[qIndex];\n    const scores = question.options[answerIndex].scores;',
  '    const question = questions[qIndex];\n    if (!question) return;\n    const scores = question.options[answerIndex] ? question.options[answerIndex].scores : [0,0,0,0,0,0,0];'
);

// 3. 정규화 점수 고정 상한(12) → 동적 계산
code = code.replace(
  '      // 정규화 점수 (0~100)\r\n      normalizedScore: Math.round((maxScore / 12) * 100) // 최대 가능 점수 = 3 * 4 = 12',
  '      // 정규화 점수 (0~100) — 차원별 문항 수에 따라 상한 동적 계산\n      normalizedScore: (() => {\n        const dimQCount = Math.max(questions.filter(q => q.dimension === dim.id).length, 1);\n        const maxPossible = dimQCount * 3;\n        return Math.min(100, Math.round((maxScore / maxPossible) * 100));\n      })()'
);

// 4. test.html: calculateResults(answers) → calculateResults(answers, activeQuestions)
let html = fs.readFileSync('test.html', 'utf8');
html = html.replace(
  'const results = calculateResults(answers);',
  'const results = calculateResults(answers, activeQuestions);'
);

fs.writeFileSync('data.js', code);
fs.writeFileSync('test.html', html);

// 검증
const updatedCode = fs.readFileSync('data.js', 'utf8');
console.log('calculateResults 시그니처 수정:', updatedCode.includes('function calculateResults(answers, questions)'));
console.log('questions[qIndex] 사용:', updatedCode.includes('questions[qIndex]'));
console.log('동적 normalizedScore:', updatedCode.includes('dimQCount * 3'));

const updatedHtml = fs.readFileSync('test.html', 'utf8');
console.log('test.html activeQuestions 전달:', updatedHtml.includes('calculateResults(answers, activeQuestions)'));
