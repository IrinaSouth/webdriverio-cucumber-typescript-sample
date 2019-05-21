# webdriverio-cucumber-typescript-sample
Sample webdriverio v.4 with cucumber and typescript

1. Install the dependencies (`yarn install`)

Now you are ready to write your own features.
WebdriverIO used is Version 4 [WebdriverIO](http://v4.webdriver.io/)

### Quick changes to run the tests locally
1. Comment out most of the chromeOptions args leaving only '--start-maximized'
    ```
    // 'headless', 'disable-gpu', 'disable-dev-shm-usage', 'verbose', 'no-sandbox', 'log-path=chromedriver.log', '--remote-debugging-port=9222',
    ```
2. To run all feature files run
    ```
    yarn run wdio wdio.ci.conf.js
    ```
3. To run a specific feature file add '--spec' e.g.
    ```
    yarn run wdio wdio.ci.conf.js --spec ./src/features/WebSmokeTest.feature
    
baseUrl can be set in
```
wdio.ci.conf.js
```

Test report path 
``` 
tmp/report/index.html
