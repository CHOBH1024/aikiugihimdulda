const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// 1. Footer HTML 정의
const footerHTML = `
    <!-- Footer -->
    <footer class="footer">
        <p style="font-size: 1.1rem; margin-bottom: 12px;">🪞 Mirror Inside Parenting</p>
        <p style="font-size: 0.85rem; color: var(--text-body); margin-bottom: 16px;">함께 성장하는 육아, 거울 속에서 만나요</p>
        <p>&copy; 2026 Mirror Inside Parenting. All rights reserved.</p>
        <p style="font-size: 0.75rem; margin-top: 8px; color: var(--text-dim);">
            <a href="/terms.html">이용약관</a> · <a href="/privacy.html">개인정보처리방침</a> · <a href="/contact.html">문의하기</a>
        </p>
    </footer>
`;

// Pastel Floating Blobs Background HTML
const glowOrbsHTML = `
    <!-- Pastel Floating Blobs -->
    <div class="glow-orb-container">
        <div class="glow-orb glow-orb--1"></div>
        <div class="glow-orb glow-orb--2"></div>
        <div class="glow-orb glow-orb--3"></div>
    </div>
`;

// 2. 메인 페이지들 푸터 및 백그라운드 오브 자동 주입
const filesToUpdate = ['index.html', 'test.html', 'gallery.html', 'about.html', 'contact.html', 'terms.html', 'privacy.html', 'columns.html'];
filesToUpdate.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // Normalize assets & stylesheets to root-relative absolute paths
    content = content.replace(/href="style\.css"/g, 'href="/style.css"');
    content = content.replace(/href="assets\/images\/icons\/favicon\.png"/g, 'href="/assets/images/icons/favicon.png"');
    content = content.replace(/src="assets\/images\/icons\/reading\.png"/g, 'src="/assets/images/icons/reading.png"');
    content = content.replace(/src="assets\/images\/icons\/hello\.png"/g, 'src="/assets/images/icons/hello.png"');
    
    // Normalize menu & footer navigation links to root-relative absolute paths
    content = content.replace(/href="index\.html"/g, 'href="/index.html"');
    content = content.replace(/href="gallery\.html"/g, 'href="/gallery.html"');
    content = content.replace(/href="columns\.html"/g, 'href="/columns.html"');
    content = content.replace(/href="test\.html"/g, 'href="/test.html"');
    content = content.replace(/href="about\.html"/g, 'href="/about.html"');
    content = content.replace(/href="contact\.html"/g, 'href="/contact.html"');
    content = content.replace(/href="terms\.html"/g, 'href="/terms.html"');
    content = content.replace(/href="privacy\.html"/g, 'href="/privacy.html"');
    
    // Remove existing footers and orbs to avoid duplicates
    content = content.replace(/<!-- Footer -->[\s\S]*?<\/footer>/g, '');
    content = content.replace(/<footer class="footer">[\s\S]*?<\/footer>/g, '');
    content = content.replace(/<!-- Drifting Glow Orbs Background -->[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>/g, '');
    content = content.replace(/<!-- Pastel Floating Blobs -->[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>/g, '');
    
    const pageFooter = footerHTML.replace(/\.\.\//g, '');
    const pageOrbs = glowOrbsHTML.replace(/\.\.\//g, '');
    
    // Inject Orbs right after <body>
    if (content.includes('<body>')) {
        content = content.replace('<body>', `<body>\n${pageOrbs}`);
    }
    
    // Inject Footer right before </body>
    if (content.includes('</body>')) {
        content = content.replace('</body>', `${pageFooter}\n</body>`);
        fs.writeFileSync(file, content);
        console.log(`Updated footer and orbs for ${file}`);
    }
});

// 3. 고품질 블로그 상세글 HTML 템플릿
const template = `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{TITLE}} | Mirror Inside Parenting</title>
    <link rel="icon" href="/assets/images/icons/favicon.png" type="image/png">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="/style.css">
    <style>
        .article-wrap { padding-top: 120px; padding-bottom: 80px; max-width: 800px; margin: 0 auto; padding-left: 24px; padding-right: 24px; }
        .article-header { text-align: center; margin-bottom: 48px; }
        .article-category { font-size: 0.9rem; font-weight: 700; color: var(--primary); text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 16px; display: block; }
        .article-title { font-size: clamp(2rem, 5vw, 2.8rem); font-weight: 900; line-height: 1.35; margin-bottom: 24px; word-break: keep-all; color: var(--text-main); }
        .article-meta { font-size: 0.9rem; color: var(--text-dim); display: flex; justify-content: center; gap: 16px; align-items: center; }
        .article-hero-img { 
            width: 100%; 
            height: 280px; 
            border-radius: var(--radius-xl); 
            background: {{GRADIENT}}; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            font-size: 5rem; 
            margin-bottom: 60px; 
            box-shadow: var(--shadow-card);
            border: 1px solid var(--glass-border);
        }
        .article-content { font-size: 1.08rem; line-height: 1.9; color: var(--text-body); word-break: keep-all; text-align: justify; }
        .article-content h2 { font-size: 1.6rem; color: var(--text-main); margin: 56px 0 24px; font-weight: 800; border-bottom: 1px solid var(--glass-border); padding-bottom: 12px; }
        .article-content h3 { font-size: 1.25rem; color: var(--primary); margin: 36px 0 16px; font-weight: 700; }
        .article-content p { margin-bottom: 24px; }
        .article-content ul, .article-content ol { padding-left: 24px; margin-bottom: 28px; }
        .article-content li { margin-bottom: 12px; line-height: 1.7; }
        .article-content strong { color: var(--text-main); font-weight: 700; }
        .article-content blockquote { 
            border-left: 4px solid var(--primary); 
            padding: 24px; 
            font-style: italic; 
            color: var(--text-dim); 
            margin: 36px 0; 
            background: var(--bg-section); 
            border-radius: 0 var(--radius-md) var(--radius-md) 0;
        }
        .article-content table {
            width: 100%;
            border-collapse: collapse;
            margin: 32px 0;
            background: var(--bg-card);
            border-radius: var(--radius-md);
            overflow: hidden;
            border: 1px solid var(--glass-border);
        }
        .article-content th, .article-content td {
            padding: 14px 18px;
            text-align: left;
            border-bottom: 1px solid var(--glass-border);
            font-size: 0.95rem;
        }
        .article-content th {
            background: var(--primary-dim);
            font-weight: 700;
            color: var(--primary);
        }
        .article-content tr:last-child td {
            border-bottom: none;
        }
        .cta-banner { 
            margin-top: 60px; 
            padding: 36px; 
            background: linear-gradient(135deg, #FFF0E8 0%, #FFF5F5 50%, #F0E8FF 100%); 
            border: 1px solid var(--glass-border); 
            border-radius: var(--radius-lg); 
            text-align: center; 
            box-shadow: var(--shadow-card);
        }
        .cta-banner h3 { margin-bottom: 16px; color: var(--text-main); font-weight: 800; font-size: 1.4rem; }
        .cta-banner p { margin-bottom: 24px; font-size: 1rem; color: var(--text-body); }
    </style>
</head>
<body>
    <!-- Scroll Progress Indicator -->
    <div id="scrollIndicator" style="position:fixed; top:0; left:0; height:4px; width:0%; background:linear-gradient(90deg, var(--primary), var(--secondary)); z-index:9999; transition:width 0.15s ease;"></div>

    <!-- Drifting Glow Orbs Background -->
    <div class="glow-orb-container">
        <div class="glow-orb glow-orb--1"></div>
        <div class="glow-orb glow-orb--2"></div>
        <div class="glow-orb glow-orb--3"></div>
    </div>

    <!-- Navbar -->
    <nav class="nav scrolled">
        <div class="nav__inner">
            <a href="/index.html" class="nav__logo">
                🪞 Mirror Inside <span class="nav__logo-sub">Parenting</span>
            </a>
            <ul class="nav__links">
                <li><a href="/columns.html" class="nav__link" style="color:var(--primary)">육아 칼럼</a></li>
                <li><a href="/gallery.html" class="nav__link">나의 기록</a></li>
                <li><a href="/about.html" class="nav__link">소개</a></li>
                <li><a href="/test.html" class="nav__cta">🪞 나의 육아 스타일 알아보기</a></li>
            </ul>
        </div>
    </nav>

    <main class="article-wrap container">
        <header class="article-header">
            <span class="article-category">{{CATEGORY}}</span>
            <h1 class="article-title">{{TITLE}}</h1>
            <div class="article-meta">
                <span><i class="far fa-calendar-alt"></i> 2026.05.29</span>
                <span><i class="far fa-clock"></i> {{READ_TIME}}</span>
            </div>
        </header>

        <div class="article-hero-img">{{ICON}}</div>

        <article class="article-content">
            {{CONTENT}}
        </article>

        <!-- Instagram-style Reaction Dock -->
        <div class="reaction-dock" style="margin-top: 60px; display: flex; flex-direction: column; align-items: center; gap: 16px; padding: 28px; background: var(--bg-card); border: 1px solid var(--glass-border); border-radius: var(--radius-md); box-shadow: var(--shadow-card); text-align:center;">
            <h4 style="font-size:1.1rem; font-weight:800; color:var(--text-main); margin:0;">이 칼럼이 도움이 되셨나요? 공감을 남겨보세요!</h4>
            <p style="font-size:0.85rem; color:var(--text-dim); margin:-8px 0 8px;">실시간 이모지 공감 터치 시 화려한 폭죽 효과가 펑 터집니다 💫</p>
            <div style="display:flex; gap:16px; flex-wrap:wrap; justify-content:center;">
                <button class="reaction-btn" data-emoji="❤️" style="font-size:1.6rem; padding:10px 20px; border-radius:30px; border:1px solid var(--glass-border); background:rgba(255,255,255,0.03); transition:all 0.2s; position:relative; overflow:visible; display:inline-flex; align-items:center;">
                    ❤️ <span class="react-count" style="font-size:0.9rem; color:var(--text-dim); margin-left:6px; font-weight:700;">0</span>
                </button>
                <button class="reaction-btn" data-emoji="👍" style="font-size:1.6rem; padding:10px 20px; border-radius:30px; border:1px solid var(--glass-border); background:rgba(255,255,255,0.03); transition:all 0.2s; position:relative; overflow:visible; display:inline-flex; align-items:center;">
                    👍 <span class="react-count" style="font-size:0.9rem; color:var(--text-dim); margin-left:6px; font-weight:700;">0</span>
                </button>
                <button class="reaction-btn" data-emoji="💡" style="font-size:1.6rem; padding:10px 20px; border-radius:30px; border:1px solid var(--glass-border); background:rgba(255,255,255,0.03); transition:all 0.2s; position:relative; overflow:visible; display:inline-flex; align-items:center;">
                    💡 <span class="react-count" style="font-size:0.9rem; color:var(--text-dim); margin-left:6px; font-weight:700;">0</span>
                </button>
                <button class="reaction-btn" data-emoji="🥺" style="font-size:1.6rem; padding:10px 20px; border-radius:30px; border:1px solid var(--glass-border); background:rgba(255,255,255,0.03); transition:all 0.2s; position:relative; overflow:visible; display:inline-flex; align-items:center;">
                    🥺 <span class="react-count" style="font-size:0.9rem; color:var(--text-dim); margin-left:6px; font-weight:700;">0</span>
                </button>
                <button class="reaction-btn" data-emoji="😮" style="font-size:1.6rem; padding:10px 20px; border-radius:30px; border:1px solid var(--glass-border); background:rgba(255,255,255,0.03); transition:all 0.2s; position:relative; overflow:visible; display:inline-flex; align-items:center;">
                    😮 <span class="react-count" style="font-size:0.9rem; color:var(--text-dim); margin-left:6px; font-weight:700;">0</span>
                </button>
            </div>
        </div>
        
        <div class="cta-banner">
            <h3>나는 어떤 육아 스타일일까? 🪞</h3>
            <p>3분이면 충분해요! 나만의 육아 페르소나를 발견하고 맞춤 솔루션을 확인해보세요 ✨</p>
            <a href="/test.html" class="btn btn--primary btn--large btn--glow" style="display:inline-flex; align-items:center; gap:8px;">🪞 나의 육아 스타일 알아보기</a>
        </div>

        <div style="margin-top: 60px; text-align:center;">
            <a href="/columns.html" class="btn btn--outline" style="padding: 12px 30px;"><i class="fas fa-arrow-left"></i> 목록으로 돌아가기</a>
        </div>
    </main>

    ${footerHTML}

    <!-- High-Performance Script Blocks -->
    <script>
        // 1. Google-Style Scroll Progress Bar logic
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
            document.getElementById('scrollIndicator').style.width = scrolled + '%';
        });

        // 2. Instagram-Style Reaction & Particle Burst logic
        document.addEventListener('DOMContentLoaded', () => {
            const pageId = window.location.pathname.split('/').pop() || 'index.html';
            const reactionBtns = document.querySelectorAll('.reaction-btn');
            
            reactionBtns.forEach(btn => {
                const emoji = btn.getAttribute('data-emoji');
                const countSpan = btn.querySelector('.react-count');
                const storageKey = 'reaction_' + pageId + '_' + emoji;
                const userReactedKey = 'reacted_' + pageId + '_' + emoji;
                
                // Set reasonable default mock counts + storage lookup
                let count = parseInt(localStorage.getItem(storageKey));
                if (isNaN(count)) {
                    count = Math.floor(Math.random() * 45) + 8;
                    localStorage.setItem(storageKey, count);
                }
                countSpan.textContent = count;
                
                if (localStorage.getItem(userReactedKey)) {
                    btn.style.borderColor = 'var(--primary)';
                    btn.style.background = 'rgba(52, 211, 153, 0.08)';
                }
                
                btn.addEventListener('click', () => {
                    if (localStorage.getItem(userReactedKey)) {
                        count--;
                        localStorage.setItem(storageKey, count);
                        countSpan.textContent = count;
                        localStorage.removeItem(userReactedKey);
                        btn.style.borderColor = 'var(--glass-border)';
                        btn.style.background = 'rgba(255,255,255,0.03)';
                    } else {
                        count++;
                        localStorage.setItem(storageKey, count);
                        countSpan.textContent = count;
                        localStorage.setItem(userReactedKey, 'true');
                        btn.style.borderColor = 'var(--primary)';
                        btn.style.background = 'rgba(52, 211, 153, 0.08)';
                        
                        // Spawn 15 colorful physics emoji particles
                        for(let i=0; i<15; i++) {
                            createParticle(btn, emoji);
                        }
                    }
                });
            });
            
            function createParticle(parentBtn, emoji) {
                const p = document.createElement('span');
                p.textContent = emoji;
                p.style.position = 'absolute';
                p.style.pointerEvents = 'none';
                p.style.fontSize = '1.3rem';
                p.style.zIndex = '999';
                
                const rect = parentBtn.getBoundingClientRect();
                const startX = rect.left + rect.width / 2 + window.scrollX;
                const startY = rect.top + rect.height / 2 + window.scrollY;
                
                document.body.appendChild(p);
                
                const angle = Math.random() * Math.PI * 2;
                const speed = 4 + Math.random() * 7;
                const vx = Math.cos(angle) * speed;
                const vy = Math.sin(angle) * speed - 3; // strong upward force
                
                let posX = startX;
                let posY = startY;
                let opacity = 1.0;
                let scale = 1.0;
                
                function frame() {
                    posX += vx;
                    posY += vy;
                    opacity -= 0.02;
                    scale -= 0.015;
                    
                    p.style.left = posX + 'px';
                    p.style.top = posY + 'px';
                    p.style.opacity = opacity;
                    p.style.transform = 'scale(' + scale + ')';
                    
                    if (opacity > 0) {
                        requestAnimationFrame(frame);
                    } else {
                        p.remove();
                    }
                }
                requestAnimationFrame(frame);
            }
        });
    </script>
</body>
</html>`;

// 4. 초정밀 메타데이터 맵
const METADATA_MAPPING = {
  // 5 Dimensions
  'emotional-bonding.md': {
    category: '5대 양육차원',
    icon: '💛',
    gradient: 'radial-gradient(circle, #fbbf24 0%, #d97706 100%)',
    readTime: '7 min read',
    excerpt: '마트 바닥에 드러누워 울고불고 떼쓰는 아이. 훈육을 해야 할지, 공감을 먼저 해줘야 할지 막막하셨나요? 흔히 겪는 이 딜레마를 \'정서 교감\'의 측면에서 명쾌하게 풀어드립니다.'
  },
  'discipline-boundaries.md': {
    category: '5대 양육차원',
    icon: '⚖️',
    gradient: 'radial-gradient(circle, #60a5fa 0%, #2563eb 100%)',
    readTime: '8 min read',
    excerpt: '\'안 돼!\'라는 말을 하면서도 마음 한구석이 불편한 부모님들을 위해. 아이에게 상처를 주지 않으면서도 가정 내 건강한 경계선(Boundary)을 설정하는 방법을 단계별로 소개합니다.'
  },
  'autonomy-support.md': {
    category: '5대 양육차원',
    icon: '🌱',
    gradient: 'radial-gradient(circle, #34d399 0%, #059669 100%)',
    readTime: '8 min read',
    excerpt: '매번 부모가 대신 해주는 것에 익숙해진 아이. 어디서부터 어떻게 자율성을 주어야 안전할까요? 마이크로 매니징을 멈추고 아이 스스로 결정하고 책임지도록 돕는 3가지 스텝을 알아봅니다.'
  },
  'cognitive-growth.md': {
    category: '5대 양육차원',
    icon: '📚',
    gradient: 'radial-gradient(circle, #c084fc 0%, #9333ea 100%)',
    readTime: '9 min read',
    excerpt: '유튜브 쇼츠와 틱톡에 빠진 아이들. 짧고 자극적인 콘텐츠 속에서 아이의 사고력과 문해력을 지켜내기 위해, 일상생활 속에서 부모가 무심코 던질 수 있는 \'열린 질문\'의 마법에 대해 이야기합니다.'
  },
  'crisis-resilience.md': {
    category: '5대 양육차원',
    icon: '🛡️',
    gradient: 'radial-gradient(circle, #fb7185 0%, #e11d48 100%)',
    readTime: '8 min read',
    excerpt: '작은 블록 쌓기 실패에도 크게 좌절하는 아이. 실패를 성장의 발판으로 여기는 아이와 도전을 피하는 아이의 차이는 어디서 올까요? 위기 순간에 부모가 건네야 할 회복탄력성 강화 대화법을 제안합니다.'
  },
  // 5 New Topics
  'digital-media.md': {
    category: '현대 육아 고민',
    icon: '📱',
    gradient: 'linear-gradient(135deg, #334155 0%, #0f172a 100%)',
    readTime: '8 min read',
    excerpt: '스마트폰을 손에서 놓지 못하는 아이와 매일 전쟁을 벌이고 계신가요? 뇌과학과 자기결정성 이론을 기반으로, 억압적 금지가 아닌 자기 조율 능력을 기르는 3단계 미디어 양육법을 제시합니다.'
  },
  'sibling-rivalry.md': {
    category: '현대 육아 고민',
    icon: '🧑‍🤝‍🧑',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
    readTime: '9 min read',
    excerpt: '맨날 티격태격 다투고 머리싸움을 벌이는 아이들. 판사처럼 잘잘못을 가리는 훈육은 오히려 갈등을 악화시킵니다. 편들지 않고 형제 갈등을 성장의 기회로 만드는 아들러 심리학 기반 중재 솔루션을 알아봅니다.'
  },
  'praise-vs-encouragement.md': {
    category: '현대 육아 고민',
    icon: '🎯',
    gradient: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
    readTime: '8 min read',
    excerpt: '머리가 좋다는 칭찬이 오히려 아이의 도전을 가로막는다는 놀라운 학술 연구. 똑똑함을 칭찬하여 고정 마인드셋을 만드는 칭찬의 부작용을 극복하고, 과정을 격려하는 올바른 성장 마인드셋 육아법을 제안합니다.'
  },
  'separation-anxiety.md': {
    category: '현대 육아 고민',
    icon: '🎒',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
    readTime: '8 min read',
    excerpt: '아침마다 어린이집 현관문에서 울며 매달리는 아이 때문에 마음 찢어지던 부모님을 위해. 존 볼비의 애착 이론에 근거하여 이별을 신뢰의 약속으로 바꾸는 3단계 실전 등원 처방전을 제공합니다.'
  },
  'parent-burnout.md': {
    category: '현대 육아 고민',
    icon: '☕',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)',
    readTime: '9 min read',
    excerpt: '아이을 사랑하지만 육아가 너무 힘들어 밤마다 죄책감의 눈물을 흘리는 부모님들을 위한 힐링 에세이. 크리스틴 네프의 자기자비(Self-Compassion) 이론을 통해 번아웃을 예방하고 주양육자의 마음을 돌보는 방법을 배워봅니다.'
  },
  // Basic Posts
  'site_introduction.md': {
    category: '플랫폼 안내',
    icon: '📢',
    gradient: 'linear-gradient(135deg, #4b5563 0%, #1f2937 100%)',
    readTime: '4 min read',
    excerpt: 'Mirror Inside Parenting 프로젝트의 시작과 비전. 5대 양육 차원 자가진단을 통해 부모로서 스스로의 마음 거울을 들여다보고 성장해 나가는 따뜻한 여정을 소개합니다.'
  },
  'dimensions_guide.md': {
    category: '플랫폼 안내',
    icon: '🏛️',
    gradient: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
    readTime: '5 min read',
    excerpt: '아이를 키우는 5가지 핵심 양육 기둥인 정서교감, 규칙과 훈육, 자율성 지원, 학습과 성장, 위기 대응의 발달 심리학적 원리와 각각의 핵심 밸런스를 정리해 드립니다.'
  },
  'persona_deepdive.md': {
    category: '플랫폼 안내',
    icon: '🧬',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
    readTime: '12 min read',
    excerpt: '8대 종합 육아 페르소나 각각의 성향적 강약점과 심화 대처법을 한눈에 볼 수 있도록 총정리하여 제공하는 스페셜 딥다이브 리포트입니다.'
  },
  // Personas
  '01_warm.md': {
    category: '부모 페르소나',
    icon: '💛',
    gradient: 'radial-gradient(circle, #fbbf24 0%, #d97706 100%)',
    readTime: '6 min read',
    excerpt: '[빛나는 온기의 부모] 아이의 감정에 깊이 공감하고 정서적 안식처를 마련해 주는 온정형 양육자의 학술 분석 및 맞춤 언어 지침 리포트입니다.'
  },
  '02_structured.md': {
    category: '부모 페르소나',
    icon: '📐',
    gradient: 'radial-gradient(circle, #60a5fa 0%, #2563eb 100%)',
    readTime: '6 min read',
    excerpt: '[신뢰의 설계자 부모] 체계와 일관된 원칙을 통해 예측 가능한 안정적 루틴을 선물해 주는 규칙형 양육자의 학술 분석 및 맞춤 언어 지침 리포트입니다.'
  },
  '03_free.md': {
    category: '부모 페르소나',
    icon: '🌱',
    gradient: 'radial-gradient(circle, #34d399 0%, #059669 100%)',
    readTime: '6 min read',
    excerpt: '[자유로운 탐험가 부모] 아이의 주도권과 내재적 동기를 전폭적으로 지원하고 탐색 기회를 열어주는 자율형 양육자의 학술 분석 및 맞춤 언어 지침 리포트입니다.'
  },
  '04_wise.md': {
    category: '부모 페르소나',
    icon: '📚',
    gradient: 'radial-gradient(circle, #c084fc 0%, #9333ea 100%)',
    readTime: '6 min read',
    excerpt: '[지혜로운 등대 부모] 객관적인 통찰과 정교한 비계(Scaffolding) 설계를 통해 아이의 인지 발달을 가이드하는 이성형 양육자의 학술 분석 및 맞춤 언어 지침 리포트입니다.'
  },
  '05_balanced.md': {
    category: '부모 페르소나',
    icon: '⚖️',
    gradient: 'radial-gradient(circle, #0d9488 0%, #0f766e 100%)',
    readTime: '7 min read',
    excerpt: '[균형의 마에스트로 부모] 공감과 훈육, 자유와 한계의 조화를 영리하게 실천하는 가장 이상적인 민주형 양육자의 학술 분석 및 맞춤 언어 지침 리포트입니다.'
  },
  '06_empathetic.md': {
    category: '부모 페르소나',
    icon: '🪞',
    gradient: 'radial-gradient(circle, #a855f7 0%, #7e22ce 100%)',
    readTime: '6 min read',
    excerpt: '[마음을 읽는 거울 부모] 정서적 미러링과 감정 명명을 통해 아이의 정서 조절을 돕는 감정 코칭형 양육자의 학술 분석 및 맞춤 언어 지침 리포트입니다.'
  },
  '07_creative.md': {
    category: '부모 페르소나',
    icon: '🎨',
    gradient: 'radial-gradient(circle, #f43f5e 0%, #be123c 100%)',
    readTime: '6 min read',
    excerpt: '[창의적 놀이터 부모] 다채로운 놀이와 상상력을 통해 지루한 일상을 배움으로 변환시키는 촉진자형 양육자의 학술 분석 및 맞춤 언어 지침 리포트입니다.'
  },
  '08_resilient.md': {
    category: '부모 페르소나',
    icon: '🛡️',
    gradient: 'radial-gradient(circle, #fb7185 0%, #e11d48 100%)',
    readTime: '7 min read',
    excerpt: '[회복탄력의 봄 부모] 시련과 실패를 배움과 마인드셋 도약으로 견인하는 낙관주의형 양육자의 학술 분석 및 맞춤 언어 지침 리포트입니다.'
  }
};

// 5. 블로그 생성 프로세스
const blogDirs = ['blog_posts', 'blog_posts/personas'];
const allPosts = [];

if (!fs.existsSync('columns')) {
    fs.mkdirSync('columns');
}

blogDirs.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
    
    files.forEach(file => {
        const mdContent = fs.readFileSync(path.join(dir, file), 'utf8');
        const htmlContent = marked.parse(mdContent);
        
        const titleMatch = mdContent.match(/^#\s+(.*)/m);
        const title = titleMatch ? titleMatch[1] : '육아 칼럼';
        
        const meta = METADATA_MAPPING[file] || {
            category: '육아 칼럼',
            icon: '📚',
            gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            readTime: '6 min read',
            excerpt: title
        };
        
        const finalHtml = template
            .replace(/{{TITLE}}/g, title)
            .replace(/{{CATEGORY}}/g, meta.category)
            .replace(/{{ICON}}/g, meta.icon)
            .replace(/{{GRADIENT}}/g, meta.gradient)
            .replace(/{{READ_TIME}}/g, meta.readTime)
            .replace(/{{CONTENT}}/g, htmlContent);
            
        const outFileName = file.replace('.md', '.html');
        fs.writeFileSync(path.join('columns', outFileName), finalHtml);
        
        allPosts.push({
            title,
            url: `columns/${outFileName}`,
            category: meta.category,
            icon: meta.icon,
            gradient: meta.gradient,
            readTime: meta.readTime,
            excerpt: meta.excerpt
        });
        console.log(`Generated HTML for ${file}`);
    });
});

// 6. columns.html 동적 업데이트 & 실시간 검색 & 카테고리 탭 주입
if (fs.existsSync('columns.html')) {
    let colHtml = fs.readFileSync('columns.html', 'utf8');
    
    const linksHtml = allPosts.map(post => `
        <a href="${post.url}" class="article-card" data-category="${post.category}">
            <div class="article-card__img" style="background: ${post.gradient};">${post.icon}</div>
            <div class="article-card__content">
                <div class="article-card__category">${post.category}</div>
                <h2 class="article-card__title">${post.title}</h2>
                <p class="article-card__excerpt">${post.excerpt}</p>
                <div class="article-card__meta">
                    <span>${post.readTime}</span>
                    <span class="read-more">읽어보기 <i class="fas fa-arrow-right"></i></span>
                </div>
            </div>
        </a>
    `).join('\n');
    
    colHtml = colHtml.replace(/<div class="article-grid">[\s\S]*?<!-- AdSense Space/, `<div class="article-grid">\n${linksHtml}\n</div>\n</div>\n\n    <!-- AdSense Space`);
    
    // Inject Microsoft & Google High-Speed Search Box and Category Filter Tabs
    const searchAndTabsHTML = `
        <!-- Microsoft & Google High-Speed Search Bar -->
        <div class="search-bar-container" style="max-width:550px; margin:0 auto 36px; position:relative; z-index:10; padding:0 12px;">
            <input type="text" id="columnSearch" placeholder="어떤 육아 고민이 있으신가요? 키워드로 즉시 검색..." style="width:100%; padding:16px 20px 16px 52px; border-radius:30px; border:1px solid var(--glass-border); background:var(--glass); color:var(--text-main); font-size:1.05rem; outline:none; transition:all 0.3s; box-shadow:var(--shadow-card);">
            <i class="fas fa-search" style="position:absolute; left:28px; top:19px; color:var(--primary); font-size:1.2rem;"></i>
        </div>

        <!-- Category Filter Tabs -->
        <div class="category-tabs" style="display:flex; justify-content:center; gap:12px; margin-bottom:48px; flex-wrap:wrap; position:relative; z-index:10; padding:0 12px;">
            <button class="tab-btn active" data-filter="all" style="padding:10px 24px; border-radius:30px; border:1px solid var(--glass-border); background:var(--glass); color:var(--text-main); font-weight:700; cursor:pointer; transition:all 0.3s; font-size:0.95rem;">전체</button>
            <button class="tab-btn" data-filter="5대 양육차원" style="padding:10px 24px; border-radius:30px; border:1px solid var(--glass-border); background:var(--glass); color:var(--text-dim); font-weight:700; cursor:pointer; transition:all 0.3s; font-size:0.95rem;">5대 양육차원</button>
            <button class="tab-btn" data-filter="부모 페르소나" style="padding:10px 24px; border-radius:30px; border:1px solid var(--glass-border); background:var(--glass); color:var(--text-dim); font-weight:700; cursor:pointer; transition:all 0.3s; font-size:0.95rem;">부모 페르소나</button>
            <button class="tab-btn" data-filter="현대 육아 고민" style="padding:10px 24px; border-radius:30px; border:1px solid var(--glass-border); background:var(--glass); color:var(--text-dim); font-weight:700; cursor:pointer; transition:all 0.3s; font-size:0.95rem;">현대 육아 고민</button>
            <button class="tab-btn" data-filter="플랫폼 안내" style="padding:10px 24px; border-radius:30px; border:1px solid var(--glass-border); background:var(--glass); color:var(--text-dim); font-weight:700; cursor:pointer; transition:all 0.3s; font-size:0.95rem;">안내 & 가이드</button>
        </div>
    `;
    
    // Clean old tab markup
    colHtml = colHtml.replace(/<!-- Category Filter Tabs -->[\s\S]*?<\/div>/g, '');
    colHtml = colHtml.replace(/<!-- Microsoft & Google High-Speed Search Bar -->[\s\S]*?<\/div>/g, '');
    
    colHtml = colHtml.replace('<div class="article-grid">', `${searchAndTabsHTML}\n<div class="article-grid">`);
    
    // Inject Tab transitions and search focus glow styling
    const styles = `
    <style>
        .tab-btn:hover { border-color: var(--primary); color: var(--text-main); transform: translateY(-2px); box-shadow: 0 4px 12px rgba(52, 211, 153, 0.15); }
        .tab-btn.active { background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%) !important; color: #ffffff !important; border-color: transparent !important; box-shadow: var(--shadow-glow); }
        #columnSearch:focus { border-color: var(--primary); box-shadow: 0 0 20px rgba(52, 211, 153, 0.25); }
        .article-card { transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1); }
        .article-card.hidden { opacity: 0; transform: scale(0.92) translateY(15px); pointer-events: none; position: absolute; width: 0; height: 0; padding: 0; border: none; margin: 0; overflow: hidden; }
    </style>
    `;
    
    if (!colHtml.includes('#columnSearch:focus')) {
        colHtml = colHtml.replace('</head>', `${styles}\n</head>`);
    }

    // Inject combined live filter/search JS logic
    const filterJS = `
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const tabs = document.querySelectorAll('.tab-btn');
            const cards = document.querySelectorAll('.article-card');
            const searchInput = document.getElementById('columnSearch');
            
            let activeFilter = 'all';
            let searchQuery = '';
            
            function filterColumns() {
                cards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    const title = card.querySelector('.article-card__title').textContent.toLowerCase();
                    const excerpt = card.querySelector('.article-card__excerpt').textContent.toLowerCase();
                    
                    const matchesCategory = (activeFilter === 'all' || category === activeFilter);
                    const matchesSearch = (title.includes(searchQuery) || excerpt.includes(searchQuery));
                    
                    if (matchesCategory && matchesSearch) {
                        card.classList.remove('hidden');
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1) translateY(0)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.92) translateY(15px)';
                        setTimeout(() => {
                            card.classList.add('hidden');
                            card.style.display = 'none';
                        }, 250);
                    }
                });
            }
            
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    tabs.forEach(t => {
                        t.classList.remove('active');
                        t.style.color = 'var(--text-dim)';
                    });
                    tab.classList.add('active');
                    tab.style.color = '#ffffff';
                    
                    activeFilter = tab.getAttribute('data-filter');
                    filterColumns();
                });
            });
            
            searchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value.toLowerCase().trim();
                filterColumns();
            });
        });
    </script>
    `;
    
    // Clear old filter script
    colHtml = colHtml.replace(/<script>[\s\S]*?const tabs = document\.querySelectorAll\('\.tab-btn'\)[\s\S]*?<\/script>/, '');
    
    if (colHtml.includes('</body>')) {
        colHtml = colHtml.replace('</body>', `${filterJS}\n</body>`);
    }
    
    fs.writeFileSync('columns.html', colHtml);
    console.log('Successfully updated columns.html with dynamic Search & category filters!');
}
