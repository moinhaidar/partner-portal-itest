'use strict';

var ppPage = require('./pp_page.js');


describe("Merchants", function(){

    var searchTerm = 'test';

    beforeEach(function(){
        ppPage.deleteCookies();
        ppPage.getRoot();
    });

    it("Should list merchants", function(){
        
        ppPage.login();

        var searchBox = element(by.model("searchInput"));
        searchBox.sendKeys(searchTerm);

        element(by.id('top-search')).then(function(ele){
            ele.all(by.tagName('button')).then(function(el){
                el[0].click().then(function(){
                	
                   browser.sleep(5000); 
                   expect(browser.getCurrentUrl()).toMatch(/search/);

                   element(by.className('items-list')).then(function(ele){
                        
                        ele.all(by.tagName('h1')).then(function(elements){
                            expect(elements[0].getText()).toBe('MERCHANT SEARCH RESULTS');
                        });
                        
                        ele.all(by.tagName('span')).then(function(elements){
                            expect(elements[0].getText()).toBe('You searched for: ' + searchTerm);
                        });
                   });
                });
            });
        });
    });

});