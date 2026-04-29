import { expect } from '@playwright/test'

export class loginScreen {

    constructor(page) {
        this.signinmove = page.getByRole('link', { name: 'Hello, sign in Account & Lists' })
        this.clicksign = page.getByRole('link', { name: 'Sign in', exact: true })
        this.emailfill = page.locator('#ap_email_login')
        this.continuebt = page.getByRole('button', { name: 'Continue' })
        this.otpScreen = page.getByText('Sign in using a One time')

    }

    async checkignin() {

        await expect(this.signinmove).toBeVisible()

    }

    async hoverighin() {

        await this.signinmove.hover();
    }

    async clicksignin() {

        await this.clicksign.click();
    }

    async verifyemailbox() {

        await expect(this.emailfill).toBeVisible()
    }
    async emailfillclick() {

        await this.emailfill.click();
        await this.emailfill.fill("dattu4851@gmail.com")
    }

    async continueClick() {

        await this.continuebt.click();

    }
    async otpscreenvisible() {

        await expect(this.otpScreen).toBeVisible();
    }



}








