const fs = require('fs');

['chemistry.html', 'result.html'].forEach(file => {
    let html = fs.readFileSync(file, 'utf8');
    html = html.replace(/<script src="\/data\.js"><\/script>/g, '<script src="data.js"></script>');
    fs.writeFileSync(file, html);
    console.log('Fixed', file);
});
