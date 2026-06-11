const puppeteer = require('puppeteer');

(async () => {
    console.log('Starting puppeteer...');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
    page.on('pageerror', err => console.log('BROWSER ERROR:', err.toString()));
    page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));

    console.log('Navigating to result.html...');
    await page.goto('http://localhost:3000/result.html?preview=warm', { waitUntil: 'networkidle0' });
    
    console.log('Checking result contents...');
    const html = await page.evaluate(() => document.body.innerHTML);
    if (html.includes('아직 진단 결과가 없어요')) {
        console.log('FAILED: Result shows no data.');
    } else {
        console.log('SUCCESS: Result seems to have rendered.');
    }

    await browser.close();
})();
