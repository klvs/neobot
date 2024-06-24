import { test, expect, Page, BrowserContext } from '@playwright/test';
const MAX_WAIT = 3000;
const MIN_WAIT = 750;

const authFile = '.auth/user.json'

const getRandomNumber = (min, max) => {
  if (min > max) {
      [min, max] = [max, min]; 
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// sleep for default time unless optional max / min are passed
const randSleep = (page: Page, optionalMin?: number, optionalMax?: number) => {
  return page.waitForTimeout(
    getRandomNumber(optionalMin || MIN_WAIT, optionalMax || MAX_WAIT)
  );
}

const second = 1000;

let context: BrowserContext;
let page: Page;

test('Run this once to get login solved', async ({browser, page}) => {

  await page.goto('https://www.neopets.com/');

  console.log("waiting for user login")
  await page.waitForTimeout(30000)
  console.log("wait over! Saving auth")
  await page.context().storageState({ path: authFile });

});