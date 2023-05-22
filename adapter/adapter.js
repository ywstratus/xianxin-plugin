import fs from 'node:fs'
import yaml from 'yaml'
import PuppeteerRenderer from "../../../renderers/puppeteer/lib/puppeteer.js";
import puppeteer from "../../../lib/puppeteer/puppeteer.js";

let yunzaiEdition = null;
let rendererCfg = null;

function getTempDefaultRendererCfg() {
  return {
    headless: 'new',
    args: [
      '--disable-gpu',
      '--disable-setuid-sandbox',
      '--no-sandbox',
      '--no-zygote'
    ]
  };
}

function getMiaoYunzaiRendererCfg() {
  if (!rendererCfg) {
    let configFile = './renderers/puppeteer/config.yaml';
    if (fs.existsSync(configFile)) {
      try {
        rendererCfg = yaml.parse(fs.readFileSync(configFile, 'utf8'));
      } catch (e) {
        rendererCfg = getTempDefaultRendererCfg();
      }
    } else {
      rendererCfg = getTempDefaultRendererCfg();
    }
  }
  return rendererCfg;
}

function getPm2Cfg() {
  const configFile = './config/pm2/pm2.json';
  if (fs.existsSync(configFile)) {
    let pmcfg = fs.readFileSync(configFile);
    pmcfg = JSON.parse(pmcfg);
    return pmcfg;
  }
  return null;
}

function getStaticEditionTag() {
  const pmcfg = getPm2Cfg();
  if (pmcfg) {
    return pmcfg.apps[0].name;
  }
  return 'Yunzai-Bot';
}

function getYunzaiEdition() {
  if (!yunzaiEdition) {
    yunzaiEdition = getStaticEditionTag();
  }
  return yunzaiEdition;
}

export function getPuppeteer() {
  if (getYunzaiEdition() == 'Miao-Yunzai') {
    return new PuppeteerRenderer(getMiaoYunzaiRendererCfg());
  }
  return puppeteer;
}