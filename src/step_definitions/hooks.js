const {After, Before, Status} = require('cucumber');

After(async (scenarioResult) => {
    // Here it is added to a failed step, but each time you call `browser.saveScreenshot()` it will automatically bee added to the report
    if (scenarioResult.result.status === Status.FAILED) {
        // It will add the screenshot to the JSON
        await browser.saveDocumentScreenshot();
    }
    return scenarioResult.status;
});

// code left as an example of how to use a feature toggle
// Before({tags: '@enable_FEATURE_ATS_WEB_START_END_DATES_ON'}, async function ()  {
//     await featureToggleService.unlockFeature('FEATURE_ATS_WEB_START_END_DATES');
//     await featureToggleService.enableFeature('FEATURE_ATS_WEB_START_END_DATES');
// });
//
// After({tags: '@enable_FEATURE_ATS_WEB_START_END_DATES_ON'}, async function ()  {
//     await featureToggleService.disableFeature('FEATURE_ATS_WEB_START_END_DATES');
//     await featureToggleService.lockFeature('FEATURE_ATS_WEB_START_END_DATES');
// });

