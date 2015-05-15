'use strict';

exports.config = {

    // selenium address
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // The timeout in milliseconds for each script run on the browser.
    allScriptsTimeout: 360000,

    baseUrl: 'https://partner-portal-dev.herokuapp.com',

    // How long to wait for a page to load.
    getPageTimeout: 10000,

    capabilities: {
        'browserName': 'chrome'
    },

    specs: ['./test/spec/*_spec.js'],
   // specs: ['./test/spec/pipeline_spec.js'],

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 360000,
        onComplete: null,
        isVerbose: true,
        includeStackTrace: true
    },

    params: {
        login : {
            user: process.env.USERNAME || 'partner@test.com', password: process.env.LOGINPWD || '12345'
        }
    }
};