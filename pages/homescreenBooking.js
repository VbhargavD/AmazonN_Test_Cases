import { expect } from '@playwright/test';


export class homescreen {

    constructor(page) {
        this.bookingLog = page.getByTestId('header-booking-logo');
        this.signinbtn = page.getByTestId('header-sign-in-button');
        this.signupbtn = page.getByTestId('header-sign-up-button')
    }

    async validateVisibleBook() {

        await expect(this.bookingLog).toBeVisible();

    }
    async validateSignIn() {
        await expect(this.signinbtn).toBeVisible();

    }
    async validatesignup(){
        await expect(this.signupbtn).toBeVisible();
    }



}