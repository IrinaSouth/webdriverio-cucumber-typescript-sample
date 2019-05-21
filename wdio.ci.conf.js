const _ = require('lodash');
process.env.ENV = 'ci';

const path = require('path');

const defaults = require('./wdio.conf.js');

const overrides = {
    baseUrl: 'http://google.com',
    capabilities: [{
        browserName: 'chrome',
        chromeOptions: {
            args: [
              //  'headless', 'disable-gpu', 'disable-dev-shm-usage', 'verbose', 'no-sandbox', 'log-path=chromedriver.log', '--remote-debugging-port=9222',
                '--start-maximized',
            ],
        }
    }
    ],
};

exports.config = _.merge(defaults.config, overrides);
