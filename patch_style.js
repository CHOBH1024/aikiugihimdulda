const fs = require('fs');

const cssToAdd = `
/* =========================================
   FACT BOMB BLIND UI
   ========================================= */
.fact-bomb-container {
    position: relative;
    background: rgba(239, 68, 68, 0.05);
    border-radius: 16px;
    padding: 0;
    text-align: center;
    border: 1px solid rgba(239, 68, 68, 0.2);
    overflow: hidden;
    margin-bottom: 24px;
}

.fact-bomb-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 245, 245, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition: opacity 0.5s ease, visibility 0.5s ease;
    padding: 24px;
}

.fact-bomb-content {
    padding: 32px 24px;
    filter: blur(8px);
    opacity: 0.4;
    transition: filter 0.8s ease, opacity 0.8s ease;
    text-align: left;
}

.fact-bomb-container.unlocked .fact-bomb-overlay {
    opacity: 0;
    visibility: hidden;
}

.fact-bomb-container.unlocked .fact-bomb-content {
    filter: blur(0);
    opacity: 1;
}

.btn-unlock-fact {
    background: #ef4444;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 30px;
    font-weight: 800;
    font-family: 'Pretendard', sans-serif;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
    transition: transform 0.2s, box-shadow 0.2s;
}

.btn-unlock-fact:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
}

.btn-share-postcard {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
    padding: 10px 20px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.2s;
    width: 100%;
}

.btn-share-postcard:hover {
    background: #ef4444;
    color: white;
}

.shake-anim {
    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
}

@keyframes shake {
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(2px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
  40%, 60% { transform: translate3d(4px, 0, 0); }
}

/* =========================================
   POSTCARD CAPTURE AREA (DARK MODE)
   ========================================= */
.postcard-wrapper {
    position: absolute;
    left: -9999px;
    top: 0;
    width: 1080px;
    height: 1920px; /* 9:16 Ratio */
    background: #0F172A; /* Slate 900 */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px;
    box-sizing: border-box;
    z-index: -100;
    visibility: hidden;
}

.postcard-inner {
    width: 100%;
    background: #1E293B; /* Slate 800 */
    border-radius: 40px;
    padding: 120px 80px;
    box-shadow: 0 40px 100px rgba(0,0,0,0.5);
    border: 1px solid rgba(255,255,255,0.1);
    position: relative;
    display: flex;
    flex-direction: column;
}

.postcard-quote-mark {
    font-family: 'Georgia', serif;
    font-size: 180px;
    color: rgba(239, 68, 68, 0.2);
    position: absolute;
    top: 40px;
    left: 60px;
    line-height: 1;
}

.postcard-text {
    font-size: 46px;
    color: #F8FAFC; /* Slate 50 */
    line-height: 1.6;
    font-weight: 700;
    word-break: keep-all;
    position: relative;
    z-index: 2;
    margin-bottom: 60px;
    text-align: left;
}

.postcard-divider {
    width: 100px;
    height: 6px;
    background: #ef4444;
    border-radius: 3px;
    margin-bottom: 40px;
}

.postcard-author {
    font-size: 32px;
    color: #94A3B8; /* Slate 400 */
    font-weight: 600;
    text-align: left;
}

.postcard-footer {
    margin-top: 120px;
    border-top: 2px solid rgba(255,255,255,0.05);
    padding-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.pc-brand {
    font-size: 34px;
    color: #ef4444;
    font-weight: 900;
    font-family: 'Nunito', sans-serif;
    letter-spacing: -1px;
}

.pc-tags {
    font-size: 28px;
    color: #64748B;
    font-weight: 600;
}

/* =========================================
   NEWSLETTER SUBSCRIPTION FORM (GLASSMORPHISM)
   ========================================= */
.newsletter-section {
    margin: 80px 0 40px;
    padding: 48px 32px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 24px;
    border: 1px solid var(--glass-border);
    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
    text-align: center;
    position: relative;
    overflow: hidden;
}

.newsletter-section::before {
    content: '';
    position: absolute;
    top: -50px;
    left: -50px;
    width: 150px;
    height: 150px;
    background: var(--primary-dim);
    border-radius: 50%;
    filter: blur(40px);
    z-index: 0;
}

.newsletter-content {
    position: relative;
    z-index: 1;
}

.newsletter-badge {
    display: inline-block;
    background: #ef4444;
    color: white;
    padding: 6px 14px;
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 800;
    margin-bottom: 16px;
    letter-spacing: 1px;
}

.newsletter-title {
    font-size: 1.6rem;
    font-weight: 900;
    color: var(--text-main);
    margin-bottom: 12px;
    word-break: keep-all;
}

.newsletter-desc {
    font-size: 1rem;
    color: var(--text-body);
    margin-bottom: 32px;
    line-height: 1.6;
    word-break: keep-all;
}

.newsletter-form {
    display: flex;
    gap: 8px;
    max-width: 400px;
    margin: 0 auto;
}

.newsletter-input {
    flex: 1;
    padding: 16px 20px;
    border-radius: 16px;
    border: 1px solid rgba(0,0,0,0.1);
    background: rgba(255,255,255,0.8);
    font-size: 1rem;
    font-family: 'Pretendard', sans-serif;
    outline: none;
    transition: all 0.2s;
}

.newsletter-input:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 4px var(--primary-dim);
}

.newsletter-btn {
    background: var(--primary);
    color: white;
    border: none;
    padding: 0 24px;
    border-radius: 16px;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
}

.newsletter-btn:hover {
    background: #ff6045;
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(255, 107, 107, 0.3);
}

@media (max-width: 600px) {
    .newsletter-form {
        flex-direction: column;
    }
    .newsletter-btn {
        padding: 16px;
    }
}
`;

fs.appendFileSync('style.css', cssToAdd);
console.log('Appended to style.css');
