import { test, expect } from "@playwright/test"

export class bookingsearch {

    constructor(page) {
        this.page = page
        this.destination = page.getByRole('combobox', { name: 'Where are you going?' })
        this.chaeckindate = page.getByTestId('searchbox-dates-container')
        this.dismissbtn = page.getByRole('button', { name: 'Dismiss sign-in info.' })
        this.occupancy = page.getByTestId('occupancy-config')
        this.increaseadult = page.locator('.de576f5064.b46cd7aad7.e26a59bb37.c295306d66.c7a901b0e7.aaf9b6e287.dc8366caa6').first()
        this.increasechildren = page.locator('div:nth-child(2) > .e301a14002 > .de576f5064.b46cd7aad7.e26a59bb37.c295306d66.c7a901b0e7.aaf9b6e287')
        this.increasechildrenagain = page.locator('div:nth-child(2) > .e301a14002 > .de576f5064.b46cd7aad7.e26a59bb37.c295306d66.c7a901b0e7.aaf9b6e287.c857f39cb2')
        this.donebtn = page.getByRole('button', { name: 'Done' })
        this.searchbtn = page.getByRole('button', { name: 'Search' })
    }

    async dismisspopup() {
        await this.dismissbtn.click()
    }

    async enterdestination(destination) {
        await this.destination.click()
        await this.destination.fill(destination)
    }

    async selectdates(checkin, checkout) {
        await this.chaeckindate.click()
        await this.page.getByRole('checkbox', { name: checkin }).click()
        await this.page.getByRole('checkbox', { name: checkout }).click()
    }

    async configureoccupancy() {
        await this.occupancy.click()
        await this.increaseadult.click()
        await this.increasechildren.click()
        await this.increasechildrenagain.click()
        await this.donebtn.click()
    }

    async clicksearch() {
        await this.searchbtn.click()
    }

}