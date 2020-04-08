import puppeteer from 'puppeteer';

import {
  capture,
} from '../../../src';

describe('with the imported capture module', () => {
  it('must be possible: capture a selector', async () => {
    expect.hasAssertions();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.banesconline.com/mantis/Website/Login.aspx');

    const captured = await capture(page, {
      padding: 16,
      path: './test.png',
      selector: 'iframe[id="ctl00_cp_frmAplicacion"]',
    });

    await browser.close();

    expect(captured).not.toBe(null);
  }, 60000);

  it('must be possible: return null if selector not found', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.banesconline.com/mantis/Website/Login.aspx');

    const captured = await capture(page, {
      padding: 16,
      path: './test.png',
      selector: 'test',
    });

    await browser.close();

    expect(captured).toBe(null);
  }, 60000);
});
