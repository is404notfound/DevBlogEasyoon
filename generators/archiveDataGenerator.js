const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrapeMetaTags(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const meta = await page.evaluate(() => {
        const metaTags = document.getElementsByTagName('meta');
        const meta = {};
        for (let i = 0; i < metaTags.length; i++) {
            const property = metaTags[i].getAttribute('property');
            const content = metaTags[i].getAttribute('content');
            if (property && content) {
                meta[property] = content;
            }
        }
        return meta;
    });

    await browser.close();
    return meta;
}



async function saveMetaDataToJson(urls, outputPath) {
    const metaData = [];
    for (const url of urls) {
        const meta = await scrapeMetaTags(url);
        metaData.push(meta);
    }
    fs.writeFileSync(outputPath, JSON.stringify(metaData, null, 2));
}



console.log('LOG :: Start scraping');
const OUTPUT_PATH = './generators/output/archive-data.json';
const URLS = 
[
    'https://medium.com/javascript-in-plain-english/4-react-tips-to-instantly-improve-your-code-7456e028cfa3#2fce'
    , 'https://medium.com/javascript-in-plain-english/5-essential-tips-to-improve-your-react-application-a17d540c920a'
];


saveMetaDataToJson(URLS, OUTPUT_PATH);
console.log('LOG :: Finish scraping');
