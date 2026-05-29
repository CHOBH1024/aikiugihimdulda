const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// 1. Add Footer to main files
const filesToUpdate = ['index.html', 'test.html', 'gallery.html', 'about.html', 'contact.html', 'terms.html', 'privacy.html', 'columns.html'];

const footerHTML = `
    <!-- Footer -->
    <footer class="footer">
        <p>&copy; 2026 Mirror Inside Parenting. All rights reserved.</p>
        <p class="mt-1" style="font-size:0.9rem; margin-top:12px;">
            <a href="index.html">홈</a> · <a href="gallery.html">기록/갤러리</a> · <a href="columns.html">육아 인사이트</a> · <a href="about.html">기술 소개</a> · <a href="test.html">진단 시작</a>
        </p>
        <p class="mt-1" style="font-size:0.8rem; margin-top:8px; color:var(--text-dim);">
            <a href="terms.html">이용약관</a> · <a href="privacy.html">개인정보처리방침</a> · <a href="contact.html">문의하기</a>
        </p>
    </footer>
`;

// Helper: inject footer before </body> if it doesn't exist
filesToUpdate.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove existing footer to avoid duplicates
    content = content.replace(/<!-- Footer -->[\s\S]*?<\/footer>/, '');
    
    if (content.includes('</body>')) {
        content = content.replace('</body>', `${footerHTML}\n</body>`);
        fs.writeFileSync(file, content);
        console.log(`Updated footer for ${file}`);
    }
});

// 2. Build Blog HTMLs from Markdown
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
        .post-container { max-width: 800px; margin: 120px auto 60px; padding: 0 24px; }
        .post-content h1 { font-size: 2.2rem; color: var(--primary); margin-bottom: 24px; line-height:1.3; }
        .post-content h2 { font-size: 1.5rem; color: var(--text-main); margin-top: 40px; margin-bottom: 16px; border-bottom: 1px solid var(--glass-border); padding-bottom: 8px;}
        .post-content h3 { font-size: 1.2rem; color: var(--secondary); margin-top: 24px; margin-bottom: 12px; }
        .post-content p { font-size: 1.05rem; line-height: 1.7; color: var(--text-body); margin-bottom: 20px; word-break: keep-all; }
        .post-content ul { margin-left: 20px; margin-bottom: 20px; }
        .post-content li { margin-bottom: 8px; line-height: 1.6; color: var(--text-body); }
        .post-content strong { color: var(--text-main); }
    </style>
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar" id="mainNav">
        <a href="../index.html" class="logo">
            <i class="fas fa-mirror"></i> <span>Mirror Inside</span>
        </a>
        <div class="nav-links" id="navLinks">
            <a href="../columns.html">육아 칼럼</a>
            <a href="../test.html" class="btn btn--primary" style="padding: 8px 20px; margin-left: 10px;">진단하기</a>
        </div>
    </nav>

    <main class="post-container">
        <article class="post-content">
            {{CONTENT}}
        </article>
        
        <div style="margin-top: 60px; text-align:center;">
            <a href="../columns.html" class="btn btn--outline">목록으로 돌아가기</a>
        </div>
    </main>

    ${footerHTML.replace(/href="/g, 'href="../')}
    
    <!-- Mobile Bottom Navigation -->
    <nav class="bottom-nav">
        <div class="bottom-nav__inner">
            <a href="../index.html" class="bottom-nav__item">
                <i class="fas fa-home"></i>
                <span>홈</span>
            </a>
            <a href="../test.html" class="bottom-nav__item">
                <i class="fas fa-clipboard-check"></i>
                <span>진단</span>
            </a>
            <a href="../columns.html" class="bottom-nav__item">
                <i class="fas fa-book-open"></i>
                <span>칼럼</span>
            </a>
            <a href="../gallery.html" class="bottom-nav__item">
                <i class="fas fa-images"></i>
                <span>기록</span>
            </a>
        </div>
    </nav>
</body>
</html>`;

const blogDirs = ['blog_posts', 'blog_posts/personas'];
const allPosts = [];

blogDirs.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
    
    files.forEach(file => {
        const mdContent = fs.readFileSync(path.join(dir, file), 'utf8');
        const htmlContent = marked.parse(mdContent);
        
        // Extract title from first h1
        const titleMatch = mdContent.match(/^#\s+(.*)/m);
        const title = titleMatch ? titleMatch[1] : '육아 칼럼';
        
        const finalHtml = template
            .replace('{{TITLE}}', title)
            .replace('{{CONTENT}}', htmlContent);
            
        const outFileName = file.replace('.md', '.html');
        fs.writeFileSync(path.join('columns', outFileName), finalHtml);
        
        allPosts.push({
            title,
            url: `columns/${outFileName}`,
            icon: dir.includes('personas') ? '🧑‍🤝‍🧑' : '📚'
        });
        console.log(`Generated ${outFileName}`);
    });
});

// 3. Update columns.html to list all posts
if (fs.existsSync('columns.html')) {
    let colHtml = fs.readFileSync('columns.html', 'utf8');
    
    const linksHtml = allPosts.map(post => `
        <a href="${post.url}" class="article-card">
            <div class="article-card__img">${post.icon}</div>
            <div class="article-card__content">
                <div class="article-card__category">Column</div>
                <h3 class="article-card__title">${post.title}</h3>
                <span style="color:var(--primary); font-size:0.9rem; font-weight:700;">읽어보기 <i class="fas fa-arrow-right"></i></span>
            </div>
        </a>
    `).join('\n');
    
    // Find the article-grid and replace its contents
    colHtml = colHtml.replace(/<div class="article-grid">[\s\S]*?<\/section>/, `<div class="article-grid">\n${linksHtml}\n</div>\n</div>\n</section>`);
    
    fs.writeFileSync('columns.html', colHtml);
    console.log('Updated columns.html with new posts');
}
