const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch({args: ['--no-sandbox']});
//   const page = await browser.newPage();
//   await page.goto('https://google.com');
//   await page.screenshot({path: 'example.png'});

//   await browser.close();
// })();

var url = 'https://www.chromestatus.com/features'
var url = 'http://samples.gwtproject.org/samples/Showcase/Showcase.html#!CwTree'

puppeteer.launch({ args: ['--no-sandbox'] }).then(async browser => {
    const page = await browser.newPage();
    await page.setJavaScriptEnabled(false)
    const response = await page.goto(url, {
        waitLoad: true, 
        waitNetworkIdle: true, // defaults to false
        waitUntil : "networkidle0"
      });    
    console.log(await response.text());
    browser.close();
});

// https://github.com/segmentio/daydream