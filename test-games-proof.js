const puppeteer = require('puppeteer-core');
const fs = require('fs');
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

  // Scroll smoothly to tetris arcade frame
  await page.evaluate(() => {
    document.querySelector('.tetris-arcade-frame').scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await delay(300);

  // 2. Test Game 1: Qala Tetris
  const tetrisStartBtn = await page.$('#tetris-start-btn');
  await tetrisStartBtn.click();
  await delay(600);

  // Simulate moves
  await page.keyboard.press('ArrowRight');
  await delay(200);
  await page.keyboard.press('ArrowRight');
  await delay(200);
  await page.keyboard.press('ArrowDown');
  await delay(300);

  // Scroll again to ensure full view
  await page.evaluate(() => {
    document.querySelector('.tetris-arcade-frame').scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await delay(200);

  const tetrisProofPath = path.join(ARTIFACTS_DIR, 'tetris_proof.png');
  const tetrisFrame = await page.$('.tetris-arcade-frame');
  if (tetrisFrame) {
    await tetrisFrame.screenshot({ path: tetrisProofPath });
  }

  await browser.close();
  console.log('✅ Clean screenshot captured!');
})();
