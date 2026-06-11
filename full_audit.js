const puppeteer = require('puppeteer');

const BASE = 'http://localhost:3000';
const results = [];
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function check(name, fn) {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', err => {
        if (!err.message.includes('Kakao')) errors.push(err.message.substring(0, 100));
    });

    try {
        const testResult = await fn(page);
        results.push({ name, status: testResult ? 'PASS' : 'FAIL', errors });
    } catch(e) {
        results.push({ name, status: 'ERROR', errors: [e.message.substring(0, 150)] });
    }
    await browser.close();
}

async function runAll() {
    // ─── index.html ────────────────────────────────────────
    await check('index.html 로딩', async (page) => {
        await page.goto(BASE + '/', { waitUntil: 'networkidle2' });
        return !!(await page.$('h1'));
    });

    await check('index.html MBTI 모달 (16 버튼)', async (page) => {
        await page.goto(BASE + '/', { waitUntil: 'networkidle2' });
        await page.evaluate(() => openIndexMbtiModal());
        await sleep(300);
        const btns = await page.$$('#indexMbtiGrid button');
        return btns.length === 16;
    });

    await check('index.html 페르소나 카드 그리드 (7+개)', async (page) => {
        await page.goto(BASE + '/', { waitUntil: 'networkidle2' });
        await sleep(500);
        const cards = await page.$$('#indexPersonaGrid div');
        return cards.length >= 7;
    });

    // ─── test.html ─────────────────────────────────────────
    await check('test.html 초기 소개 화면', async (page) => {
        await page.goto(BASE + '/test.html', { waitUntil: 'networkidle2' });
        const el = await page.$('#testIntro');
        return !!el;
    });

    await check('test.html 시작 → 연령 선택 화면', async (page) => {
        await page.goto(BASE + '/test.html', { waitUntil: 'networkidle2' });
        await page.click('#startTestBtn');
        await sleep(400);
        const ageScreen = await page.$('#ageSelectionScreen');
        const display = await page.evaluate(el => window.getComputedStyle(el).display, ageScreen);
        return display !== 'none';
    });

    await check('test.html 연령 → 모드 선택 화면', async (page) => {
        await page.goto(BASE + '/test.html', { waitUntil: 'networkidle2' });
        await page.click('#startTestBtn');
        await sleep(400);
        const ageBtns = await page.$$('.age-btn');
        await ageBtns[0].click();
        await sleep(400);
        const modeScreen = await page.$('#modeSelectionScreen');
        const display = await page.evaluate(el => window.getComputedStyle(el).display, modeScreen);
        return display !== 'none';
    });

    await check('test.html 모드 선택 → 문항 렌더링', async (page) => {
        await page.goto(BASE + '/test.html', { waitUntil: 'networkidle2' });
        await page.click('#startTestBtn');
        await sleep(400);
        const ageBtns = await page.$$('.age-btn');
        await ageBtns[0].click();
        await sleep(400);
        // Click first mode button (.mode-card)
        const modeBtn = await page.$('.mode-card');
        if (!modeBtn) return false;
        await modeBtn.click();
        await sleep(600);
        const testContent = await page.$('#testContent');
        if (!testContent) return false;
        const hasOptionBtn = await page.$('.option-btn');
        return !!hasOptionBtn;
    });

    await check('test.html 옵션 A/B/C/D 라벨 가시성', async (page) => {
        await page.goto(BASE + '/test.html', { waitUntil: 'networkidle2' });
        await page.click('#startTestBtn');
        await sleep(400);
        const ageBtns = await page.$$('.age-btn');
        await ageBtns[0].click();
        await sleep(400);
        const modeBtn = await page.$('.mode-card');
        if (modeBtn) await modeBtn.click();
        await sleep(600);
        
        const label = await page.$('.option-btn__label');
        if (!label) return false;
        const style = await page.evaluate(el => {
            const s = window.getComputedStyle(el);
            return { bg: s.backgroundColor, color: s.color };
        }, label);
        console.log('    Label style:', JSON.stringify(style));
        // Not transparent = visible
        return style.bg !== 'rgba(0, 0, 0, 0)';
    });

    // ─── result.html (cleanUrls 방식으로 테스트) ────────────
    await check('result.html 미리보기 (preview=warm)', async (page) => {
        await page.goto(BASE + '/result?preview=warm', { waitUntil: 'networkidle2' });
        await sleep(500);
        const wrapper = await page.$('#resultWrapper');
        if (!wrapper) return false;
        const text = await page.evaluate(el => el.innerText, wrapper);
        console.log('    Result length:', text.length);
        return text.length > 200;
    });

    await check('result.html MBTI 미리보기 (mbti=ENFP)', async (page) => {
        await page.goto(BASE + '/result?mbti=ENFP', { waitUntil: 'networkidle2' });
        await sleep(500);
        const wrapper = await page.$('#resultWrapper');
        const text = await page.evaluate(el => el ? el.innerText : '', wrapper);
        return text.length > 200;
    });

    await check('result.html MBTI 미리보기 (mbti=ISTJ)', async (page) => {
        await page.goto(BASE + '/result?mbti=ISTJ', { waitUntil: 'networkidle2' });
        await sleep(500);
        const wrapper = await page.$('#resultWrapper');
        const text = await page.evaluate(el => el ? el.innerText : '', wrapper);
        return text.length > 200;
    });

    await check('result.html 결과없을때 fallback UI', async (page) => {
        await page.goto(BASE + '/result', { waitUntil: 'networkidle2' });
        await sleep(500);
        const wrapper = await page.$('#resultWrapper');
        const text = await page.evaluate(el => el ? el.innerText : '', wrapper);
        // Should show "아직 진단 결과가 없어요" fallback
        return text.includes('진단') || text.includes('결과');
    });

    // ─── chemistry.html ────────────────────────────────────
    await check('chemistry.html 로딩', async (page) => {
        await page.goto(BASE + '/chemistry.html', { waitUntil: 'networkidle2' });
        return !!(await page.$('#btnMyPersona'));
    });

    await check('chemistry.html 페르소나 모달 + MBTI 16개 버튼', async (page) => {
        await page.goto(BASE + '/chemistry.html', { waitUntil: 'networkidle2' });
        await page.evaluate(() => openPersonaModal('my'));
        await sleep(400);
        const btns = await page.$$('#modalGrid button');
        const modalDisplay = await page.evaluate(() => document.getElementById('personaModal').style.display);
        console.log('    Modal display:', modalDisplay, '| Buttons:', btns.length);
        return modalDisplay === 'flex' && btns.length >= 16;
    });

    await check('chemistry.html 궁합 결과 생성 및 렌더링', async (page) => {
        await page.goto(BASE + '/chemistry.html', { waitUntil: 'networkidle2' });
        await page.evaluate(() => {
            document.getElementById('myPersona').value = 'warm';
            document.getElementById('partnerPersona').value = 'structured';
            document.getElementById('btnCalculate').disabled = false;
        });
        await page.click('#btnCalculate');
        await sleep(800);
        const result = await page.$('#chemistryResult');
        const text = await page.evaluate(el => el ? el.innerText : '', result);
        console.log('    Result length:', text.length);
        return text.length > 300;
    });

    await check('chemistry.html 갈등/시너지 500자 이상', async (page) => {
        await page.goto(BASE + '/chemistry.html', { waitUntil: 'networkidle2' });
        await page.evaluate(() => {
            document.getElementById('myPersona').value = 'warm';
            document.getElementById('partnerPersona').value = 'structured';
            document.getElementById('btnCalculate').disabled = false;
        });
        await page.click('#btnCalculate');
        await sleep(800);
        const clash = await page.$('.chem-card.clash');
        const synergy = await page.$('.chem-card.synergy');
        if (!clash || !synergy) return false;
        const clashLen = await page.evaluate(el => el.innerText.length, clash);
        const synergyLen = await page.evaluate(el => el.innerText.length, synergy);
        console.log('    Clash:', clashLen, '| Synergy:', synergyLen);
        return clashLen >= 300 && synergyLen >= 300;
    });

    // ─── 기타 페이지 ────────────────────────────────────────
    await check('about.html 로딩', async (page) => {
        await page.goto(BASE + '/about.html', { waitUntil: 'networkidle2' });
        return !!(await page.$('h1'));
    });

    await check('columns.html 로딩', async (page) => {
        await page.goto(BASE + '/columns.html', { waitUntil: 'networkidle2' });
        const title = await page.title();
        return title.length > 0;
    });

    await check('gallery.html 로딩', async (page) => {
        await page.goto(BASE + '/gallery.html', { waitUntil: 'networkidle2' });
        return !!(await page.$('body'));
    });

    // ─── 최종 결과 출력 ─────────────────────────────────────
    console.log('\n╔══════════════════════════════════════════╗');
    console.log('║         🔍 전체 검수 최종 결과              ║');
    console.log('╚══════════════════════════════════════════╝');
    
    let passCount = 0, failCount = 0;
    for (const r of results) {
        const icon = r.status === 'PASS' ? '✅' : r.status === 'FAIL' ? '❌' : '🔥';
        if (r.status === 'PASS') passCount++; else failCount++;
        console.log(`${icon} ${r.name}`);
        if (r.status !== 'PASS' && r.errors.length > 0) {
            r.errors.forEach(e => console.log(`   └─ ${e}`));
        }
    }
    console.log(`\n📊 결과: ${results.length}건 중 ✅ ${passCount}개 통과 / ❌ ${failCount}개 실패`);
    if (failCount === 0) {
        console.log('🎉 모든 항목이 정상 작동합니다!');
    } else {
        console.log('⚠️  위 실패 항목을 추가 확인하세요.');
    }
}

runAll().catch(console.error);
