const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://www.devmytech.com');
    await page.screenshot({ path: 'screenshots/devmy-home.png' });

    await page.goto('https://www.devmytech.com/billing');
    await page.screenshot({ path: 'screenshots/devmy-billing.png' });

    await page.goto('https://www.devmytech.com/billing/login');
    await page.screenshot({ path: 'screenshots/devmy-billing-login.png' });


    await browser.close();
};

run();
