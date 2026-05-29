const fs = require('fs');
const path = require('path');

const rootFiles = [
    'index.html', 'test.html', 'result.html', 'gallery.html', 
    'columns.html', 'about.html', 'contact.html', 'privacy.html', 'terms.html'
];

const bottomNavHtml = `
    <!-- Mobile Bottom Navigation -->
    <nav class="bottom-nav">
        <div class="bottom-nav__inner">
            <a href="index.html" class="bottom-nav__item">
                <i class="fas fa-home"></i>
                <span>홈</span>
            </a>
            <a href="test.html" class="bottom-nav__item">
                <i class="fas fa-clipboard-check"></i>
                <span>진단</span>
            </a>
            <a href="columns.html" class="bottom-nav__item">
                <i class="fas fa-book-open"></i>
                <span>칼럼</span>
            </a>
            <a href="gallery.html" class="bottom-nav__item">
                <i class="fas fa-images"></i>
                <span>기록</span>
            </a>
        </div>
    </nav>
`;

rootFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf-8');

    // 1. Add Favicon if not exists
    if (!content.includes('<link rel="icon"')) {
        content = content.replace(
            '<meta charset="UTF-8">',
            '<meta charset="UTF-8">\n    <link rel="icon" href="assets/images/icons/favicon.png" type="image/png">'
        );
    }

    // 2. Add Bottom Nav before </body> if not exists
    if (!content.includes('bottom-nav')) {
        content = content.replace('</body>', `${bottomNavHtml}\n</body>`);
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${file}`);
});

console.log('HTML files updated successfully.');
