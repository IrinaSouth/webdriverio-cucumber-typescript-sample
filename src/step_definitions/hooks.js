const {After, Before, Status} = require('cucumber');

After(async (scenarioResult) => {
    // Here it is added to a failed step, but each time you call `browser.saveScreenshot()` it will automatically bee added to the report
    if (scenarioResult.result.status === Status.FAILED) {
        // It will add the screenshot to the JSON
        await browser.saveDocumentScreenshot();
    }
    return scenarioResult.status;
});


