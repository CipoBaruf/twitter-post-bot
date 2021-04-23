const puppeteer = require("puppeteer");

let page = null;
let browser = null;


browser = puppeteer.launch({ headless: false })
.then( async (browser) => {
	page = await browser.newPage();
	page.setViewport({
		width: 1540,
		height: 1080 ,
		isMobile: false,
	  });
	page.goto("https://twitter.com/")
	await page.waitFor('input[name="session[username_or_email]"]');
	await page.type('input[name="session[username_or_email]"]', "chamuyobot@gmail.com", {
        delay: 5,
      });
	await page.type('input[name="session[password]"]', "258792asd", {
      delay: 5,
    });
	await page.click('div[data-testid="LoginForm_Login_Button"]');
	// await page.click('div[data-text="true"]');
	// await page.type('div[data-testid="tweetTextarea_0"]"]', "asddddd", {
    //     delay: 5,
    //   });
	// for(let i = 0; i<=5 ; i++){

	// }
})
.catch((error) => {
    console.log(error)
})
