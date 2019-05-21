import {expect} from 'chai';
import {Given, Then, When} from 'cucumber';


Given(/^I load home page$/, async function () {
    await browser.url(browser.options.baseUrl);
});

Given(/^google search bar is present$/, async function () {
    const searchBar = '#searchform';
    await browser.waitForVisible(searchBar, 5000);
    await expect (browser.isVisible(searchBar));
});