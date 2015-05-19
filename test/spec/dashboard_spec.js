'use strict';

var ppPage = require('./pp_page.js');

describe('Dashboard', function () {

    beforeEach(function(){
        ppPage.deleteCookies();
        ppPage.getRoot();
    });


    it("should load all notifications on dashboard page", function(){
        ppPage.login();
        var business_names = element.all(by.css('.business-name'));

        business_names.then(function(eles){
            expect(eles.length).toBe(10);
        })

        business_names.then(function(eles){
            expect(eles[9].getText()).toBe('Ski and Sport of Ridgefield');
        })

        // Pagination
        element.all(by.css('.pagination-wrap')).then(function(eles){
            expect(eles[0].isPresent()).toBeTruthy();
        });

        element.all(by.css('.pagination-wrap button')).then(function(eles){
            expect(eles.length).toBe(4);
        });

        element.all(by.css('.pagination-wrap button')).then(function(eles){
            expect(eles.length).toBe(4);
        });
        element.all(by.css('.pagination-wrap select option')).then(function(eles){
            expect(eles.length).toBe(11);
        });
    });

});