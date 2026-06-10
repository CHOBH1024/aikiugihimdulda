const fs = require('fs');

const files = ['index.html', 'test.html', 'result.html', 'chemistry.html', 'gallery.html', 'about.html'];

files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        // If data.js is loaded with a leading slash or not, replace it
        // We will just do a regex replace for any <script src=".*data.js"></script>
        // and ensure chemistry_data.js is right above it
        
        // Remove existing chemistry_data.js tags just in case to avoid duplicates
        content = content.replace(/<script src="[^"]*chemistry_data\.js"><\/script>\s*/g, '');
        
        // Find data.js and insert chemistry_data.js before it
        content = content.replace(/(<script src="[^"]*data\.js"><\/script>)/g, '<script src="chemistry_data.js"></script>\n    $1');
        
        fs.writeFileSync(file, content);
        console.log(`✅ ${file} script tags updated`);
    }
});
