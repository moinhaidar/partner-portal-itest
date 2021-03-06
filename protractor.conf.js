'use strict';

exports.config = {

    // selenium address
    // seleniumAddress: 'http://localhost:4444/wd/hub',

    // The timeout in milliseconds for each script run on the browser.
    allScriptsTimeout: 300000,

    baseUrl: 'https://partner-portal-dev.herokuapp.com/',

    // How long to wait for a page to load.
    getPageTimeout: 10000,

    // sauceUser: 'moinhaidar',
    // sauceKey: '6886d137-2550-4d43-ac02-623fde2a283f',

    capabilities: {
        browserName: 'chrome',
        count: 1,
        maxInstances: 1,
        'chromeOptions': {
            'args': ["incognito=true","record-mod=false", "disable-application-cache=true"]
        }
    },

    /*multiCapabilities: [
        {
            'browserName': "chrome",
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
            // 'browserName': "firefox",
            // count: 1,
            // shardTestFiles: false,
            // maxInstances: 1
        }
    ], */

    suites: {
         auth: './test/spec/authentication_spec.js',
         new_applicant: './test/spec/new_application_spec.js',
         pipeline: './test/spec/pipeline_spec.js',
         merchant_show: './test/spec/merchant_show_spec.js',
         doc_upload: './test/spec/document_upload_spec.js',
         dashboard: './test/spec/dashboard_spec.js'
    },
    
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 360000,
        onComplete: null,
        isVerbose: true,
        includeStackTrace: true
    },

    directConnect: true, // Talk to browser driver directly ignoring selenium

    params: {
        login : {
            user: 'partner@test.com', password: '12345'
        }
    }
};