const URLS = 
[
    'https://medium.com/javascript-in-plain-english/4-react-tips-to-instantly-improve-your-code-7456e028cfa3#2fce'
    , 'https://medium.com/javascript-in-plain-english/5-essential-tips-to-improve-your-react-application-a17d540c920a'
    , 'https://medium.com/@khushi1399gupta/10-expert-performance-tips-every-senior-js-react-developer-should-know-a786fc13f5c7'
    , 'https://medium.com/@erennaktas/how-should-class-naming-be-in-html-clean-code-8703425a1c3e'
    , 'https://youtu.be/Ino03JPppU4'
    , 'https://oliveyoung.tech/blog/2023-06-09/nextjs-image-optimization/'
    , 'https://junheedot.tistory.com/entry/Next-Image-load-super-slow'
    , 'https://medium.com/@dpericich/how-to-bypass-useeffect-on-your-first-page-render-c31b7ba112a7'
    , 'https://peter-coding.tistory.com/287'
    , 'https://wormwlrm.github.io/2023/12/03/Weirdest-bug-I-solved.html'
    , 'https://youtu.be/dLPgQRbVquo?si=Fy6cmyUPIKZ0hgnb'
    , 'https://usingu.co.kr/frontend/javascript/dom-node-nodelist-element-htmlelement-htmlcollection/'
    , 'https://ux.stackexchange.com/questions/90336/whats-the-difference-between-a-modal-popup-popover-and-lightbox'
    , 'https://youtu.be/95YLHDzsg8A?si=Es3sWI61_16-e2fU'
    , 'https://youtu.be/7BHs1BzA4fs?si=YUbtDplCi3i5TljA'
    , 'https://www.typescriptlang.org/tsconfig#moduleResolution'
    , 'https://www.itworld.co.kr/tags/22353/%EC%A0%95%EB%A6%AC%ED%95%B4%EA%B3%A0/325527'
    , 'https://studiomeal.com/archives/197'
    , 'https://www.reddit.com/r/javascript/comments/83gpwm/how_important_is_being_an_expert_in_css_to/'
    , 'https://medium.com/@adarshrai3011/53-javascript-frontend-interview-questions-e6013116eaa0'
    , 'https://blog.dramancompany.com/2021/11/%eb%93%9c%eb%9d%bc%eb%a7%88%ec%95%a4%ec%bb%b4%ed%8d%bc%eb%8b%88%ec%97%90%ec%84%9c-pull-request-%ed%8e%b8%eb%a6%ac%ed%95%98%ea%b2%8c-%ec%82%ac%ec%9a%a9%ed%95%98%eb%8a%94-%eb%b2%95/'
    , 'https://blog.dramancompany.com/2020/12/%eb%a6%ac%eb%a9%a4%eb%b2%84-%ec%84%9c%eb%b2%84-%ec%9b%b9-%ed%8c%80%ec%9d%80-%ec%96%b4%eb%96%bb%ea%b2%8c-%ec%9d%bc%ec%9d%84-%ed%95%98%eb%8a%94%ea%b0%80/'
    , 'https://toss.tech/article/react-native-2024'
];
const OUTPUT_PATH = './generators/output/archive-data.json';
const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrapeMetaTags(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const meta = await page.evaluate(() => {
        const metaTags = document.getElementsByTagName('meta');
        const meta = {
            note: ''
        };
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
saveMetaDataToJson(URLS, OUTPUT_PATH);
console.log('LOG :: Finish scraping');
