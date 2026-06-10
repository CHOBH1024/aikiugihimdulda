const fs = require('fs');

const files = [
    'index.html', 'test.html', 'gallery.html', 'about.html', 
    'contact.html', 'terms.html', 'privacy.html', 'columns.html', 
    'result.html', 'build_blog.js'
];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if already injected
    if (content.includes('href="/chemistry.html"')) {
        console.log(`Skipped ${file} (already injected)`);
        return;
    }

    const navLinkOld = `<li><a href="/about.html" class="nav__link">소개</a></li>`;
    const navLinkNew = `<li><a href="/chemistry.html" class="nav__link">❤️ 육아 궁합 진단</a></li>
                <li><a href="/about.html" class="nav__link">소개</a></li>`;

    if (content.includes(navLinkOld)) {
        content = content.replace(new RegExp(navLinkOld, 'g'), navLinkNew);
        fs.writeFileSync(file, content);
        console.log(`Updated nav in ${file}`);
    } else {
        console.log(`Could not find nav element in ${file}`);
    }
});
