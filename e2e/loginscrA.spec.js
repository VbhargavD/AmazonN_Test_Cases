import { test, expect } from '@playwright/test'
import { loginScreen } from '../pages/login'
import fs from 'fs'

const filePath = "testData/cred.json"

const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

test.describe('verifyAmazonLogin', () => {

   test('verify amazon homescren', async ({ page }) => {
      await page.goto("https://www.amazon.in/");
      await page.waitForTimeout(2000);

      const hMveri = new loginScreen(page)
      await hMveri.checkignin()
   }


   )

   test('amazon login', async ({ page }) => {
      await page.goto("https://www.amazon.in/")
      await page.waitForTimeout(2000)


      const hMverify = new loginScreen(page);

      await hMverify.hoverighin();
      await hMverify.clicksignin();
      await hMverify.emailfillclick();
      await hMverify.continueClick();
      await hMverify.otpscreenvisible();
   }


   )




}




)