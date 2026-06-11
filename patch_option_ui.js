const fs = require('fs');

let html = fs.readFileSync('test.html', 'utf8');

// Replace .option-btn CSS
const oldCSS = `        .option-btn {
            width: 100%;
            text-align: left;
            padding: 24px 28px;
            background: rgba(30, 41, 59, 0.4);
            border: 2px solid transparent;
            border-radius: var(--radius-lg);
            color: var(--text-body);
            font-size: 1.05rem;
            font-weight: 500;
            line-height: 1.6;
            word-break: keep-all;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            cursor: pointer;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .option-btn::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(52, 211, 153, 0.15), rgba(251, 113, 133, 0.05));
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .option-btn:hover {
            border-color: rgba(52, 211, 153, 0.5);
            color: var(--text-main);
            transform: translateY(-4px) scale(1.01);
            box-shadow: 0 12px 24px rgba(0,0,0,0.2), var(--shadow-glow);
            background: rgba(30, 41, 59, 0.8);
        }`;

const newCSS = `        .option-btn {
            width: 100%;
            text-align: left;
            padding: 24px 28px;
            background: #FFFFFF;
            border: 2px solid #E2E8F0;
            border-radius: var(--radius-lg);
            color: #1E293B;
            font-size: 1.05rem;
            font-weight: 600;
            line-height: 1.6;
            word-break: keep-all;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            cursor: pointer;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }

        .option-btn::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(52, 211, 153, 0.1), rgba(52, 211, 153, 0.02));
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .option-btn:hover {
            border-color: var(--primary);
            color: #0F172A;
            transform: translateY(-4px) scale(1.01);
            box-shadow: 0 12px 24px rgba(52,211,153,0.15);
            background: rgba(52, 211, 153, 0.06);
        }`;

html = html.replace(oldCSS, newCSS);

// Also replace selected state
const oldSelectedCSS = `        .option-btn.selected {
            border-color: var(--primary);
            background: var(--primary-dim);
            color: var(--text-main);
            box-shadow: var(--shadow-glow);
        }`;

const newSelectedCSS = `        .option-btn.selected {
            border-color: var(--primary);
            background: rgba(52, 211, 153, 0.1);
            color: #0F172A;
            box-shadow: 0 0 0 4px rgba(52,211,153,0.15);
        }`;

html = html.replace(oldSelectedCSS, newSelectedCSS);

fs.writeFileSync('test.html', html);
console.log('✅ test.html option-btn 스타일 수정 완료');
