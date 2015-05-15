'use strict';

var ppPage = require('./pp_page.js');


describe("Pipeline", function(){

    beforeEach(function(){
        ppPage.deleteCookies();
        ppPage.getRoot();
    });

    it("Should load and render all pipeline tabs successfully", function(){
        ppPage.login();

        expect(browser.getCurrentUrl()).toMatch('dashboard');
        expect(browser.getCurrentUrl()).toMatch('notification');

        var pipeline_link = element(by.css("a[href*=pipeline]"));
        pipeline_link.click();

        browser.sleep(5000);

        // SUBMISSION SECTION
        var submission_link = element.all(by.css("a[href*=submission]"));
        submission_link.then(function(ele){
            expect(ele[0].getText()).toBe('SUBMISSIONS');

            ele[0].click().then(function(){
                var submission_section = element(by.id('submissions'));
                submission_section.all(by.css('.collapseInit')).then(function(elements){
                    elements[0].click().then(function(){
                        browser.sleep(5000);
                        submission_section.all(by.css(".upload-document-section strong")).then(function(elements){
                            expect(elements[0].getText()).toBe('Upload Documents');
                        });
                    });
                });
            });
        });


        //OPTIONS SECTION
        var options_link = element.all(by.css("a[href*=options]"));
        options_link.then(function(ele){
            expect(ele[0].getText()).toBe('OPTIONS');
            ele[0].click().then(function(){
                var options_section =  element(by.id('options'));
                options_section.all(by.css('.collapseInit')).then(function(elements){
                    elements[0].click().then(function(){
                        browser.sleep(5000);
                        options_section.all(by.css('.notes-scroll strong')).then(function(elements){
                            expect(elements[0].getText()).toBe('NOTES');
                        });
                    });
                });
            });
        });

        // PREQUAL
        var prequal_link = element.all(by.css("a[href*=prequal]"));
        prequal_link.then(function(ele){
            expect(ele[0].getText()).toBe('PRE-QUAL');
            ele[0].click().then(function(){
                var prequal_section = element(by.id('prequal'));
                prequal_section.all(by.css('.collapseInit')).then(function(elements){
                    elements[0].click().then(function(){
                        browser.sleep(5000);
                        prequal_section.all(by.css('.notes-scroll strong')).then(function(elements){
                            expect(elements[0].getText()).toBe('NOTES');
                        });
                    });
                });
            });
        });

        //FUNDING
        var funding_link =  element.all(by.css("a[href*=funding]"));
        funding_link.then(function(ele){
            expect(ele[0].getText()).toBe('FUNDING');
            ele[0].click().then(function(){
                browser.sleep(5000);
                var funding_section = element(by.id('funding'));
                funding_section.all(by.css('.item-title')).then(function(elements){
                    expect(elements[0].getText()).toBe('Harolds Chicken');
                });
            });
        });

    });

});