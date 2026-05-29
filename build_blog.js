const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// 1. Footer HTML 정의
const footerHTML = `
    <!-- Footer -->
    <footer class="footer">
        <p>&copy; 2026 Mirror Inside Parenting. All rights reserved.</p>
        <p class="mt-1" style="font-size:0.9rem; margin-top:12px;">
            <a href="../index.html">홈</a> · <a href="../gallery.html">기록/갤러리</a> · <a href="../columns.html">육아 인사이트</a> · <a href="../about.html">기술 소개</a> · <a href="../test.html">진단 시작</a>
        </p>
        <p class="mt-1" style="font-size:0.8rem; margin-top:8px; color:var(--text-dim);">
            <a href="../terms.html">이용약관</a> · <a href="../privacy.html">개인정보처리방침</a> · <a href="../contact.html">문의하기</a>
        </p>
    </footer>
`;

// 2. 메인 페이지들 푸터 자동 주입
const filesToUpdate = ['index.html', 'test.html', 'gallery.html', 'about.html', 'contact.html', 'terms.html', 'privacy.html', 'columns.html'];
filesToUpdate.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/<!-- Footer -->[\s\S]*?<\/footer>/, '');
    
    const pageFooter = footerHTML.replace(/\.\.\//g, '');
    if (content.includes('</body>')) {
        content = content.replace('</body>', `${pageFooter}\n</body>`);
        fs.writeFileSync(file, content);
        console.log(`Updated footer for ${file}`);
    }
});

// 3. 고품질 블로그 상세글 HTML 템플릿
const template = `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{TITLE}} | Mirror Inside Parenting</title>
    <link rel="icon" href="../assets/images/icons/favicon.png" type="image/png">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../style.css">
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
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            border: 1px solid var(--glass-border);
            text-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }
        .article-content { font-size: 1.08rem; line-height: 1.9; color: var(--text-body); word-break: keep-all; text-align: justify; }
        .article-content h2 { font-size: 1.6rem; color: var(--text-main); margin: 56px 0 24px; font-weight: 800; border-bottom: 1px solid var(--glass-border); padding-bottom: 12px; }
        .article-content h3 { font-size: 1.25rem; color: var(--secondary); margin: 36px 0 16px; font-weight: 700; }
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
            background: rgba(255,255,255,0.02); 
            border-radius: 0 var(--radius-md) var(--radius-md) 0; 
            box-shadow: inset 2px 0 10px rgba(0,0,0,0.1);
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
            border-bottom: 1px solid rgba(255,255,255,0.05);
            font-size: 0.95rem;
        }
        .article-content th {
            background: rgba(255,255,255,0.05);
            font-weight: 700;
            color: var(--primary);
        }
        .article-content tr:last-child td {
            border-bottom: none;
        }
        .cta-banner { 
            margin-top: 80px; 
            padding: 40px; 
            background: var(--glass); 
            border: 1px solid var(--primary); 
            border-radius: var(--radius-lg); 
            text-align: center; 
            box-shadow: var(--shadow-glow);
        }
        .cta-banner h3 { margin-bottom: 16px; color: var(--text-main); font-weight: 800; font-size: 1.4rem; }
        .cta-banner p { margin-bottom: 24px; font-size: 1rem; color: var(--text-body); }
    </style>
</head>
<body>
    <!-- Navbar -->
    <nav class="nav scrolled">
        <div class="nav__inner">
            <a href="../index.html" class="nav__logo">
                Mirror Inside <span class="nav__logo-sub">Parenting</span>
            </a>
            <ul class="nav__links">
                <li><a href="../index.html" class="nav__link">홈</a></li>
                <li><a href="../gallery.html" class="nav__link">갤러리</a></li>
                <li><a href="../columns.html" class="nav__link active">칼럼</a></li>
                <li><a href="../test.html" class="nav__cta"><i class="fas fa-play"></i> 진단 시작</a></li>
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
        
        <div class="cta-banner">
            <h3>나는 어떤 육아 스타일일까?</h3>
            <p>단 3분 만에 나의 육아 유전자와 종합 페르소나를 측정하고, 오은영 박사님 부럽지 않은 맞춤 솔루션을 확인해보세요.</p>
            <a href="../test.html" class="btn btn--primary btn--large btn--glow" style="display:inline-flex; align-items:center; gap:8px;"><i class="fas fa-play"></i> 무료 양육 DNA 진단 시작하기</a>
        </div>

        <div style="margin-top: 60px; text-align:center;">
            <a href="../columns.html" class="btn btn--outline" style="padding: 12px 30px;"><i class="fas fa-arrow-left"></i> 목록으로 돌아가기</a>
        </div>
    </main>

    ${footerHTML}
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
    excerpt: '아이를 사랑하지만 육아가 너무 힘들어 밤마다 죄책감의 눈물을 흘리는 부모님들을 위한 힐링 에세이. 크리스틴 네프의 자기자비(Self-Compassion) 이론을 통해 번아웃을 예방하고 주양육자의 마음을 돌보는 방법을 배워봅니다.'
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

// Ensure columns/ directory exists
if (!fs.existsSync('columns')) {
    fs.mkdirSync('columns');
}

blogDirs.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
    
    files.forEach(file => {
        const mdContent = fs.readFileSync(path.join(dir, file), 'utf8');
        const htmlContent = marked.parse(mdContent);
        
        // Extract title from H1
        const titleMatch = mdContent.match(/^#\s+(.*)/m);
        const title = titleMatch ? titleMatch[1] : '육아 칼럼';
        
        // Map high-fidelity metadata
        const meta = METADATA_MAPPING[file] || {
            category: '육아 칼럼',
            icon: '📚',
            gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            readTime: '6 min read',
            excerpt: title
        };
        
        // Build individual post HTML
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

// 6. columns.html 동적 업데이트 & 필터링 탭 주입
if (fs.existsSync('columns.html')) {
    let colHtml = fs.readFileSync('columns.html', 'utf8');
    
    // Generate static cards with category tags for sorting
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
    
    // Replace the article-grid with all 18 posts
    colHtml = colHtml.replace(/<div class="article-grid">[\s\S]*?<\/section>/, `<div class="article-grid">\n${linksHtml}\n</div>\n</div>\n</section>`);
    
    // Inject Category Filter Tabs HTML (Tabs interface) before article-grid
    const filterTabsHTML = `
        <!-- Category Filter Tabs -->
        <div class="category-tabs" style="display:flex; justify-content:center; gap:12px; margin-bottom:48px; flex-wrap:wrap; position:relative; z-index:10;">
            <button class="tab-btn active" data-filter="all" style="padding:10px 24px; border-radius:30px; border:1px solid var(--glass-border); background:var(--glass); color:var(--text-main); font-weight:700; cursor:pointer; transition:all 0.3s; font-size:0.95rem;">전체</button>
            <button class="tab-btn" data-filter="5대 양육차원" style="padding:10px 24px; border-radius:30px; border:1px solid var(--glass-border); background:var(--glass); color:var(--text-dim); font-weight:700; cursor:pointer; transition:all 0.3s; font-size:0.95rem;">5대 양육차원</button>
            <button class="tab-btn" data-filter="부모 페르소나" style="padding:10px 24px; border-radius:30px; border:1px solid var(--glass-border); background:var(--glass); color:var(--text-dim); font-weight:700; cursor:pointer; transition:all 0.3s; font-size:0.95rem;">부모 페르소나</button>
            <button class="tab-btn" data-filter="현대 육아 고민" style="padding:10px 24px; border-radius:30px; border:1px solid var(--glass-border); background:var(--glass); color:var(--text-dim); font-weight:700; cursor:pointer; transition:all 0.3s; font-size:0.95rem;">현대 육아 고민</button>
            <button class="tab-btn" data-filter="플랫폼 안내" style="padding:10px 24px; border-radius:30px; border:1px solid var(--glass-border); background:var(--glass); color:var(--text-dim); font-weight:700; cursor:pointer; transition:all 0.3s; font-size:0.95rem;">안내 & 가이드</button>
        </div>
    `;
    
    // Put Filter Tabs in if they are not already there
    if (!colHtml.includes('class="category-tabs"')) {
        colHtml = colHtml.replace('<div class="article-grid">', `${filterTabsHTML}\n<div class="article-grid">`);
    }
    
    // Inject CSS styles for active tabs and card animation transitions if they don't exist
    const styleBlock = `
    <style>
        .tab-btn:hover { border-color: var(--primary); color: var(--text-main); transform: translateY(-2px); box-shadow: 0 4px 12px rgba(52, 211, 153, 0.15); }
        .tab-btn.active { background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%) !important; color: #ffffff !important; border-color: transparent !important; box-shadow: var(--shadow-glow); }
        .article-card { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
        .article-card.hidden { opacity: 0; transform: scale(0.9) translateY(20px); pointer-events: none; position: absolute; width: 0; height: 0; padding: 0; border: none; margin: 0; overflow: hidden; }
    </style>
    `;
    if (!colHtml.includes('.tab-btn.active')) {
        colHtml = colHtml.replace('</head>', `${styleBlock}\n</head>`);
    }

    // Inject active JS code for dynamic filtering before </body>
    const filterJS = `
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const tabs = document.querySelectorAll('.tab-btn');
            const cards = document.querySelectorAll('.article-card');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Update active tab styling
                    tabs.forEach(t => {
                        t.classList.remove('active');
                        t.style.color = 'var(--text-dim)';
                    });
                    tab.classList.add('active');
                    tab.style.color = '#ffffff';
                    
                    const filter = tab.getAttribute('data-filter');
                    
                    // Filter cards with animations
                    cards.forEach(card => {
                        const category = card.getAttribute('data-category');
                        if (filter === 'all' || category === filter) {
                            card.classList.remove('hidden');
                            card.style.display = 'flex';
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'scale(1) translateY(0)';
                            }, 50);
                        } else {
                            card.style.opacity = '0';
                            card.style.transform = 'scale(0.9) translateY(20px)';
                            setTimeout(() => {
                                card.classList.add('hidden');
                                card.style.display = 'none';
                            }, 300);
                        }
                    });
                });
            });
        });
    </script>
    `;
    
    // Remove existing scripts if we've written them to avoid duplications
    colHtml = colHtml.replace(/<script>[\s\S]*?const tabs = document\.querySelectorAll\('\.tab-btn'\)[\s\S]*?<\/script>/, '');
    
    if (colHtml.includes('</body>')) {
        colHtml = colHtml.replace('</body>', `${filterJS}\n</body>`);
    }
    
    fs.writeFileSync('columns.html', colHtml);
    console.log('Successfully compiled 18 posts and updated columns.html with premium filtering and animations!');
}
