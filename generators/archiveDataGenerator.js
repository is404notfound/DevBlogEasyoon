const URLS = [
  'https://medium.com/javascript-in-plain-english/4-react-tips-to-instantly-improve-your-code-7456e028cfa3#2fce',
  'https://medium.com/javascript-in-plain-english/5-essential-tips-to-improve-your-react-application-a17d540c920a',
  'https://medium.com/@khushi1399gupta/10-expert-performance-tips-every-senior-js-react-developer-should-know-a786fc13f5c7',
  'https://medium.com/@erennaktas/how-should-class-naming-be-in-html-clean-code-8703425a1c3e',
  'https://youtu.be/Ino03JPppU4',
  'https://oliveyoung.tech/blog/2023-06-09/nextjs-image-optimization/',
  'https://junheedot.tistory.com/entry/Next-Image-load-super-slow',
  'https://medium.com/@dpericich/how-to-bypass-useeffect-on-your-first-page-render-c31b7ba112a7',
  'https://peter-coding.tistory.com/287',
  'https://wormwlrm.github.io/2023/12/03/Weirdest-bug-I-solved.html',
  'https://youtu.be/dLPgQRbVquo?si=Fy6cmyUPIKZ0hgnb',
  'https://usingu.co.kr/frontend/javascript/dom-node-nodelist-element-htmlelement-htmlcollection/',
  'https://ux.stackexchange.com/questions/90336/whats-the-difference-between-a-modal-popup-popover-and-lightbox',
  'https://youtu.be/7BHs1BzA4fs?si=YUbtDplCi3i5TljA',
  'https://www.reddit.com/r/javascript/comments/83gpwm/how_important_is_being_an_expert_in_css_to/',
  'https://blog.dramancompany.com/2021/11/%eb%93%9c%eb%9d%bc%eb%a7%88%ec%95%a4%ec%bb%b4%ed%8d%bc%eb%8b%88%ec%97%90%ec%84%9c-pull-request-%ed%8e%b8%eb%a6%ac%ed%95%98%ea%b2%8c-%ec%82%ac%ec%9a%a9%ed%95%98%eb%8a%94-%eb%b2%95/',
  'https://toss.tech/article/react-native-2024',
  'https://velog.io/@nookcoder2/NextJS-window-is-not-defined',
  'https://dev-russel.tistory.com/97',
  'https://ui.toast.com/posts/ko_20210526',
  'https://velog.io/@dlehddnr99/NextJS-%EB%B2%84%EC%A0%84-%EB%B3%84-%EC%B0%A8%EC%9D%B4%EC%A0%90-13-%EC%9D%B4%EC%A0%84-13-14',
  'https://tech.kakaobank.com/posts/2411-solid-truth-or-myths-for-developers/',
  'https://medium.com/@all.technology.stories/9ae18ef06ab2',
  'https://youtu.be/JyzVn3iBbHc?si=f4MRcMU0fQpJSp8h',
  'https://thanhle.blog/blog/frontend-performance-pattern-en',
  'https://www.angularminds.com/blog/tips-and-tricks-for-debugging-react-applications',
  'https://www.angularminds.com/blog/react-server-components',
  'https://www.angularminds.com/blog/protected-routes-in-react-router-authentication-and-authorization',
  'https://www.angularminds.com/blog/whats-new-in-react-v19',
  'https://github.com/naver/fe-news/blob/master/issues/2025-03.md?utm_source=substack&utm_medium=email',
]
const OUTPUT_PATH = './generators/output/archive-data.json'
const puppeteer = require('puppeteer')
const fs = require('fs')

async function scrapeMetaTags(url) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  const page = await browser.newPage()
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 90000 })

    const meta = await page.evaluate(() => {
      const metaTags = document.getElementsByTagName('meta')
      const meta = { note: '' }
      for (let i = 0; i < metaTags.length; i++) {
        const property = metaTags[i].getAttribute('property')
        const content = metaTags[i].getAttribute('content')
        if (property && content) {
          meta[property] = content
        }
      }
      return meta
    })
    return meta
  } catch (error) {
    console.error(`Error scraping ${url}:`, error)
    return { error: `Failed to load ${url}` }
  } finally {
    await browser.close()
  }
}

async function saveMetaDataToJson(urls, outputPath) {
  const metaData = []
  for (const url of urls) {
    const meta = await scrapeMetaTags(url)
    console.log('LOG :: Finish scraping:' + url)
    metaData.push(meta)
  }
  console.log('LOG :: Make json file')
  fs.writeFileSync(outputPath, JSON.stringify(metaData, null, 2))
  console.log('LOG :: Job Finish')
}

console.log('LOG :: Start scraping job')
saveMetaDataToJson(URLS, OUTPUT_PATH)
