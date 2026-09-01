const puppeteer = require('puppeteer-core');
const path = require('path');

const ARTIFACTS_DIR = '/Users/muslim/.gemini/antigravity/brain/8a4ed2eb-de2f-47f6-a438-a56e12120d24';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=430,932']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 430, height: 932, isMobile: true, hasTouch: true });

  const targetUrl = 'https://arabic-qala-learn.pages.dev';
  await page.goto(targetUrl, { waitUntil: 'networkidle2' });

  // 1. Switch to Games Tab
  await page.click('.bottom-nav-item[data-tab="games"]');
  await delay(600);

  // 2. Start Tetris
  const tetrisStartBtn = await page.$('#tetris-start-btn');
  await tetrisStartBtn.click();
  await delay(600);

  // Move right and drop
  await page.keyboard.press('ArrowRight');
  await delay(200);
  await page.keyboard.press('ArrowDown');
  await delay(300);

  // Take Full Viewport Screenshot of the phone screen
  const fullProofPath = path.join(ARTIFACTS_DIR, 'tetris_mobile_screen.png');
  await page.screenshot({ path: fullProofPath });

  await browser.close();
  console.log('✅ Full Mobile Viewport Screenshot captured!');
})();
