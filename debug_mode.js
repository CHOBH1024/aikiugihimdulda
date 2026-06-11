const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    
    await page.goto('http://localhost:3000/test.html', { waitUntil: 'networkidle2' });
    await page.click('#startTestBtn');
    await sleep(500);
    
    const ageBtns = await page.$$('.age-btn');
    console.log('Age buttons found:', ageBtns.length);
    await ageBtns[0].click();
    await sleep(500);
    
    // Inspect the mode selection screen
    const modeScreenHTML = await page.evaluate(() => {
        const s = document.getElementById('modeSelectionScreen');
        if (!s) return 'NO ELEMENT';
        // Find all buttons inside
        const btns = s.querySelectorAll('button');
        const info = [];
        btns.forEach(btn => {
            info.push({
                tag: btn.tagName,
                class: btn.className,
                id: btn.id,
                text: btn.innerText.substring(0, 40),
                onclick: btn.getAttribute('onclick')
            });
        });
        return JSON.stringify(info, null, 2);
    });
    console.log('Mode screen buttons:', modeScreenHTML);
    
    // Also check all clickable elements
    const allClickable = await page.evaluate(() => {
        const s = document.getElementById('modeSelectionScreen');
        if (!s) return 'NO ELEMENT';
        const all = s.querySelectorAll('[onclick], button, a');
        const info = [];
        all.forEach(el => {
            const r = el.getBoundingClientRect();
            info.push({
                tag: el.tagName,
                class: el.className.substring(0, 40),
                visible: r.width > 0 && r.height > 0,
                text: el.innerText.substring(0, 30).replace(/\n/g, ' ')
            });
        });
        return JSON.stringify(info, null, 2);
    });
    console.log('All clickable in mode screen:', allClickable);
    
    await browser.close();
})().catch(console.error);
