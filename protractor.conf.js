'use strict';

exports.config = {

    // selenium address
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // The timeout in milliseconds for each script run on the browser.
    allScriptsTimeout: 360000,

    baseUrl: 'https://partner-portal-dev.herokuapp.com/',

    // How long to wait for a page to load.
    getPageTimeout: 10000,

    // sauceUser: 'moinhaidar',
    // sauceKey: '204313c2-9589-40c9-b592-df91da7afbf6',

    multiCapabilities: [
        {
            'browserName': 'chrome',
            // Number of times to run this set of capabilities (in parallel, unless
            // limited by maxSessions). Default is 1.
            count: 1,

            // If this is set to be true, specs will be sharded by file (i.e. all
            // files to be run by this set of capabilities will run in parallel).
            // Default is false.
            shardTestFiles: false,

            // Maximum number of browser instances that can run in parallel for this
            // set of capabilities. This is only needed if shardTestFiles is true.
            // Default is 1.
            maxInstances: 1,
            'chromeOptions': {
                'args': ["incognito=true","record-mod=false", "disable-application-cache=true"]
            }
        },

        {
            // 'browserName': 'firefox',
            // count: 1,
            // shardTestFiles: false,
            // maxInstances: 1
        }
    ],

    suites: {
         auth: './test/spec/authentication_spec.js',
         new_applicant: './test/spec/new_application_spec.js',
         pipeline: './test/spec/pipeline_spec.js',
         merchant_show: './test/spec/merchant_show_spec.js',
         doc_upload: './test/spec/document_upload_spec.js'
    },
    
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 360000,
        onComplete: null,
        isVerbose: true,
        includeStackTrace: true
    },

    //directConnect: true,

    params: {
        login : {
            user: 'partner@test.com', password: '12345'
        }
    }
};