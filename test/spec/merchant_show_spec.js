'use strict';

var ppPage = require('./pp_page.js');


describe("Merchants", function(){

    beforeEach(function(){
        ppPage.deleteCookies();
        ppPage.getRoot();
    });

    it("should load merchant show page", function(){

        ppPage.login();

        // Via Pipeline
        var pipeline_link = element(by.css("a[href*=pipeline]"));
        pipeline_link.click().then(function(){
            var submission_link = element.all(by.css("a[href*=options]"));
            submission_link.then(function(ele){
                expect(ele[0].getText()).toBe('OPTIONS');

                ele[0].click().then(function(){
                    browser.sleep(5000);
                    element.all(by.css(' #options-items .item-title ')).then(function(el){
                        el[0].click();
                        browser.sleep(5000);
                        var collapser = element(by.css('.collapseInit'));
                        expect(collapser.getText()).toBe('Options Available');

                        var op = element(by.css('.merchant-app-options'));
                        expect(op.isPresent()).toBeTruthy();
                    });
                });
            });
        });

        // Show Page
        browser.get("/merchant/227004/show").then(function(){
            expect(browser.getTitle()).toMatch(/Merchant/);
            browser.getCurrentUrl().then(function(url){
                expect(url).toMatch(/merchant/);
                expect(url).toMatch(/show/);

                var owner = element(by.css('.member-details'));
                expect(owner.isPresent()).toBeTruthy();
            });
        });
    });

    it("should able user to go from pipeline to loan calculator", function(){
        ppPage.login();
        var pipeline_link = element(by.css("a[href*=pipeline]"));
        pipeline_link.click().then(function(){
            var submission_link = element.all(by.css("a[href*=options]"));
            submission_link.then(function(ele){
                ele[0].click().then(function(){
                    browser.sleep(5000);
                    element.all(by.css('#options-items .collapseInit')).then(function(el){
                        el[0].click();
                        browser.sleep(5000);
                        element.all(by.css('.loan-secton .offer-btn')).then(function(eles){
                            eles[0].click();
                            expect(browser.getCurrentUrl()).toMatch('merchant');
                            expect(browser.getCurrentUrl()).toMatch('show');
                        });
                        browser.sleep(5000);
                        element.all(by.css('#calculator .option-calculator')).then(function(eles){
                            expect(eles[0].isPresent()).toBeTruthy();
                        });
                        element.all(by.css('#calculator .option-calculator p')).then(function(eles){
                            expect(eles[0].getText()).toBe('Choose a term:')
                        });
                    });
                });
            });
        });
    });

//    it("should check for merchant cash advance(MCA)", function(){
//        ppPage.login();
//        var pipeline_link = element(by.css("a[href*=pipeline]"));
//        pipeline_link.click().then(function(){
//            var options_link = element.all(by.css("a[href*=options]"));
//            options_link.then(function(ele){
//                ele[0].click().then(function(){
//                    browser.sleep(5000);
//                    element.all(by.css('#options-items .collapseInit')).then(function(el){
//                        el[1].click();
//                        browser.sleep(5000);
//                        element.all(by.css('#options1 .offer-box a')).then(function(eleme){
//                            eleme[0].click();
//                            expect(eleme[0].getText()).toBe('MCA')
//                            var buttons = element.all(by.css('.fancybox-wrap .loan-buttons .close-fancybox'));
//                            buttons.then(function(button){
//                                button[0].click();
//                            });
//                        });
//                    });
//                });
//            });
//
//        });
//    });

});