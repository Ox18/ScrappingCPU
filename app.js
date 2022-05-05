const puppeteer = require("puppeteer");
const fs = require("fs");

async function app(url, controller, filename) {
	const browser = await puppeteer.launch({
		headless: false,
	});
	const page = await browser.newPage();
	await page.goto(url);

	const data = await page.evaluate(controller);

	fs.writeFileSync(filename + ".json", JSON.stringify(data, null, 2));

	await browser.close();
}

module.exports = app;
