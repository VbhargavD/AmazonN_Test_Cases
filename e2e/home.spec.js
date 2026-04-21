import { test, expect } from '@playwright/test';
import { homescreen } from '../pages/homescreenBooking';


test.describe('homeScreenValidation', () => {

    test('validate home page load', async ({ page }) => {
        await page.goto("https://www.booking.com/");
        await page.waitForTimeout(2000);
        const homeval = new homescreen(page);
        await homeval.validateVisibleBook()
        await homeval.validateSignIn();
        await homeval.validatesignup();

    }





    )




}

)
