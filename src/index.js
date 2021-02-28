// const puppeteer = require("puppeteer");
// require("dotenv/config");

// function delay(time) {
//     return new Promise(function(resolve) { 
//         setTimeout(resolve, time)
//     });
//  }

// (async () => {
//     const users = ["luanclash", "cerolzera", "nobru", "weedzao", "brunoplayhard", "belgamateus", "umadanii"]

//     const browser = await puppeteer.launch({
//         headless: false,
//     });
//     const page = await browser.newPage();
//     await page.goto("https://instagram.com/gb0012", {timeout: 0});
//     await page.setDefaultNavigationTimeout(0); 
    
//     await page.waitForSelector("div.RR-M-.h5uC0")
//     await page.click("div.RR-M-.h5uC0");

//     await page.waitForSelector("#loginForm > div.Igw0E.IwRSH.eGOV_._4EzTm.kEKum > div:nth-child(5) > button > span.KPnG0");
//     await page.click("#loginForm > div.Igw0E.IwRSH.eGOV_._4EzTm.kEKum > div:nth-child(5) > button > span.KPnG0");


//     await page.waitForSelector("#loginbutton");
//     await page.type("#email", process.env.FACE_USER);
//     await page.type("#pass", process.env.FACE_PASS);
//     await page.click("#loginbutton");

//     await page.waitForSelector("#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > div.Igw0E.IwRSH.eGOV_._4EzTm.NUiEW > div > div > button");
//     await page.click("#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > div.Igw0E.IwRSH.eGOV_._4EzTm.NUiEW > div > div > button");
    
//     const stotyCounter = await page.evaluate(() => {
//         const nStorys = document.querySelectorAll("#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > header > div > div._7zQEa > div");
//         return nStorys.length;
//     });

//     await page.evaluate(() => {
//         const f = document.querySelector('#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > div.yI_Tx.MNN6b > div > div');
//         const h = document.querySelector('#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > header');

//         f.style = 'display: none';
//         h.style = 'display: none';
//     })

//     for (let i = 0; i < stotyCounter; i++) {
//         await page.waitForSelector("#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > div._53rSq > div > div > img");
//         const story = await page.$("#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > div._53rSq > div > div > img");
//         await delay(5000);
//         await story.screenshot({path: 'getText.png'});
    
//         if(i < stotyCounter-1){
//             await page.waitForSelector("#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > button.FhutL > div");
//             await page.click('#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > button.FhutL > div');     
//         }
//     }

//     // users.map()

//     // await browser.close();
// })();


const ocrSpace = require('ocr-space-api-wrapper');

async function extractText(filePath) {
    try {
        const res2 = await ocrSpace(filePath, { apiKey: '3703cd4af488957', lang: 'por', OCREngine: 2 });
        console.log(res2)
      } catch (error) {
        console.log(error)
      }
}

extractText('./getText.png')