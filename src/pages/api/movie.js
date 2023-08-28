import { load } from "cheerio";
import puppeteer from "puppeteer";
// import puppeteer from "puppeteer-core";

const url = "https://samehadaku.world/";
export default async function handler(req, res) {
  const method = req.method;
  if (method === "GET") {
    const browser = await puppeteer.launch({
      headless: false,
      executablePath: "/path/to/edge",
    });
    const page = await browser.newPage();
    await page.goto(url);
    const html = await page.content();
    const $ = load(html);

    const onGoing = [];
    $("div.animeongoing div.owl-item").each((i, el) => {
      const image = $("img", el).attr();
      const title = $("div.title", el).text();
      const type = $("div.type", el).text();
      onGoing.push({ image, title, type });
    });

    const animeTerbaru = [];
    $("div.post-show li[itemscope='itemscope']").each((i, el) => {
      const title = $("h2.entry-title", el).text();
      const episode = $(
        "span:nth-of-type(1) author[itemprop='name']",
        el
      ).text();
      const release = $("span:nth-of-type(3)", el).text();
      animeTerbaru.push({ title, episode, release });
    });

    const completed = [];
    $("div.nontonmovieanime div.owl-item").each((i, el) => {
      const title = $("div.title", el).text();
      const episode = $(".data div.type", el).text();
      completed.push({ title, episode });
    });

    res.status(200).json({
      url: url,
      onGoing: onGoing,
      completedAnime: completed,
      animeTerbaru: animeTerbaru,
    });
  }
}
