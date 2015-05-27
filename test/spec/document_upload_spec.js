'use strict';

describe("Applicants", function(){

    var email = 'partner@test.com',
        password= '12345';

    var login = function() {
        browser.manage().deleteAllCookies();
        browser.get('/login');

        var email = element(by.model('email'))  ;
        var password = element(by.model('password'));
        var loginButton = element(by.id('login-button'));

        var uId = browser.params.login.user;
        var pWd = browser.params.login.password;

        email.sendKeys(uId);
        password.sendKeys(pWd);

        loginButton.click();
    };

    describe("Initiate Upload to s3", function(){

        it("upload to s3 from submission prepration", function(){
        	
            login();
            var pipeline_link = element(by.css("a[href*=pipeline]"));
            pipeline_link.click();

            browser.sleep(5000);

            var submission_link = element.all(by.css("a[href*=submission]"));
            submission_link.then(function(ele){
                expect(ele[0].getText()).toBe('SUBMISSIONS');
                ele[0].click();
            });

            element(by.css("#submission0 .item-title")).click();
            browser.sleep(5000);

            element(by.css('#index0 .collapseInit')).click();
            browser.sleep(2000);

            var upload_section = element.all(by.css('.upload-document-section')).first()
            var file_field = upload_section.all(by.css(".choose-file"));
            file_field.then(function(_field){
                _field = _field[0];
                expect(_field.isDisplayed()).toBe(true);
                //_field.sendKeys("/test/test_file.pdf");
            });


            var doc_type_dropdown = upload_section.all(by.css('.document-type'));
            doc_type_dropdown.then(function(_dropdown){
                expect(_dropdown[0].isDisplayed()).toBe(true);
            });


        });

    });


});
