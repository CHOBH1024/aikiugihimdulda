const puppeteer = require('puppeteer');

async function debugResult() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    page.on('console', msg => {
        if (msg.type() === 'error') console.log('CONSOLE ERROR:', msg.text().substring(0, 100));
    });
    page.on('pageerror', err => console.log('PAGE ERROR:', err.message.substring(0, 150)));

    console.log('=== result.html 검수 ===');
    await page.goto('http://localhost:3000/result.html?preview=warm', { waitUntil: 'networkidle2', timeout: 15000 });
    
    // Wait extra time for JS
    await new Promise(r => setTimeout(r, 1000));
    
    const info = await page.evaluate(() => {
        const wrapper = document.getElementById('resultWrapper');
        const noData = document.getElementById('noDataSection');
        const noDataVisible = noData && noData.style.display !== 'none';
        return {
            wrapperText: wrapper ? wrapper.innerText.substring(0, 300) : 'NO WRAPPER',
            wrapperHTML: wrapper ? wrapper.innerHTML.substring(0, 500) : 'NO WRAPPER',
            noDataVisible: noDataVisible,
            resultsVar: typeof results !== 'undefined' ? JSON.stringify(results).substring(0, 200) : 'UNDEFINED',
        };
    });
    
    console.log('Wrapper text (300):', info.wrapperText);
    console.log('No data visible:', info.noDataVisible);
    console.log('results var:', info.resultsVar);
    await page.close();

    console.log('\n=== test.html 연령 선택 검수 ===');
    const page2 = await browser.newPage();
    page2.on('pageerror', err => console.log('PAGE ERROR:', err.message.substring(0, 100)));
    
    await page2.goto('http://localhost:3000/test.html', { waitUntil: 'networkidle2' });
    await page2.click('#startTestBtn');
    await new Promise(r => setTimeout(r, 600));
    
    const ageInfo = await page2.evaluate(() => {
        const ageScreen = document.getElementById('ageSelectionScreen');
        const ageBtns = document.querySelectorAll('.age-btn');
        const results = [];
        ageBtns.forEach((btn, i) => {
            const r = btn.getBoundingClientRect();
            results.push({ 
                i, 
                visible: r.width > 0 && r.height > 0, 
                x: Math.round(r.x), 
                y: Math.round(r.y),
                text: btn.innerText.substring(0, 20).replace(/\n/g, ' ')
            });
        });
        return {
            ageScreenDisplay: ageScreen ? ageScreen.style.display : 'no element',
            buttons: results
        };
    });
    
    console.log('Age screen display:', ageInfo.ageScreenDisplay);
    console.log('Age buttons:');
    ageInfo.buttons.forEach(b => console.log('  ', JSON.stringify(b)));
    
    // Try clicking visible button
    if (ageInfo.buttons.length > 0 && ageInfo.buttons[0].visible) {
        const btns = await page2.$$('.age-btn');
        await btns[0].click();
        await new Promise(r => setTimeout(r, 600));
        
        const afterClick = await page2.evaluate(() => {
            const testContent = document.getElementById('testContent');
            const modeScreen = document.getElementById('modeSelectionScreen');
            return {
                modeVisible: modeScreen ? modeScreen.style.display !== 'none' : false,
                testContentHTML: testContent ? testContent.innerHTML.substring(0, 200) : 'no element'
            };
        });
        console.log('\nAfter age click:');
        console.log('  Mode screen visible:', afterClick.modeVisible);
        console.log('  Test content:', afterClick.testContentHTML.substring(0, 100));
    }
    
    await browser.close();
}

debugResult().catch(console.error);
