const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const url = "https://www.goodreads.com/quotes";

puppeteer
  .launch()
  .then(browser => browser.newPage())
  .then(page => {
    return page.goto(url).then(() => page.content());
  })
  .then(html => {
    //    console.log(html);
    const $ = cheerio.load(html);
    const quote = [];
    $(".quotes > .quote > .quoteDetails > .quoteText").each(function(
      i,
      element
    ) {
      quote.push({
        quote: $(element).text()
      });
    });
    console.log(quote);
  })
  .catch(console.error);
