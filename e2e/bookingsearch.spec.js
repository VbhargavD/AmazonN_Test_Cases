import { test, expect } from '@playwright/test'
import { bookingsearch } from '../pages/bookingsearch'

test.describe('bookingSearchValidation', () => {

    test('search hotel in Hyderabad', async ({ page }) => {
        await page.goto('https://www.booking.com/')
        await page.waitForTimeout(2000)

        const bSearch = new bookingsearch(page)
        await bSearch.dismisspopup()
        await bSearch.enterdestination('hyderabad')
        await bSearch.selectdates('Su 26 April', 'Tu 28 April')
        await bSearch.configureoccupancy()
        await bSearch.clicksearch()
    })

})
