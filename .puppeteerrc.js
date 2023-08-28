import { join } from "path";

const cacheDirectory = join(process.cwd(), ".cache", "puppeteer");

/**
 * @type {import("puppeteer").LaunchOptions}
 */
export const puppeteerConfig = {
  // Changes the cache location for Puppeteer.
  userDataDir: cacheDirectory,
};
