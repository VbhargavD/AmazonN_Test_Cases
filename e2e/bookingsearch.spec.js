import { test, expect } from '@playwright/test'
import { bookingsearch } from '../pages/bookingsearch'

test.describe('bookingSearchValidation', () => {

    test('search hotel in Hyderabad', async ({ page }) => {
        await page.goto('https://www.booking.com/')
        await page.waitForTimeout(2000)

        const bSearch = new bookingsearch(page)
        await bSearch.dismisspopup()
        await bSearch.enterdestination('hyderabad')
        await bSearch.selectdates('Th 14 May 2026', 'Fr 15 May 2026')
        await bSearch.configureoccupancy()
        await bSearch.clicksearch()
    })

})
