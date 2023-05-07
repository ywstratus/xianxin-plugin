import PuppeteerRenderer from "../../../renderers/puppeteer/lib/puppeteer.js";
import puppeteer from "../../../lib/puppeteer/puppeteer.js";

function getRendererCfg() {
  // 临时处理 等待新接口
  return {
    headless: true,
    args: [
      '--disable-gpu',
      '--disable-setuid-sandbox',
      '--no-sandbox',
      '--no-zygote'
    ]
  };
}

export function getPuppeteer() {
  if (!!puppeteer.browserInit) {
    return puppeteer;
  }
  return new PuppeteerRenderer(getRendererCfg());
}