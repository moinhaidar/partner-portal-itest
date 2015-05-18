'use strict';

var ppPage = require('./pp_page.js');

describe('Home Page', function () {

    beforeEach(function(){
        ppPage.deleteCookies();
        ppPage.getRoot();
    });

    it('Should redirect to login page if user not authenticated',function(){
        expect(browser.getCurrentUrl()).toMatch(/\/login/);
    });

    it('Should check remember me box when clicked',function(){
        var el = element(by.css('customui'));
        var input = el.element(by.tagName('input'));

        expect(input.getAttribute('checked')).toBe(null);

        el.click().then(function(){
            expect(input.getAttribute('class')).toBe('checkbox');
            expect(input.getAttribute('checked')).toBe('true');
        });

    });

});

describe("User Authentication", function(){

    it('Should login with valid authentication and redirect to dashboard', function() {

        ppPage.login();

        expect(browser.getCurrentUrl()).toMatch('dashboard');
        expect(browser.getCurrentUrl()).toMatch('notification');

    });

    it("Should deny login and redirect to home page with invalid authentication", function(){

        ppPage.login('testuser@partnerportal.com', 'wrongpassword');

        var errorContainer = element(by.css('.err'));
        expect(errorContainer.getText()).toBe("username or password combination is invalid");
        expect(browser.getCurrentUrl()).toMatch(/\/login/);
    });

});



describe("Remember Me", function(){

    iit("should able user to do remember me", function(){
        ppPage.login_with_remember_me();

        expect(browser.getCurrentUrl()).toMatch('dashboard');
        expect(browser.getCurrentUrl()).toMatch('notification');

        ppPage.logout();

        var remember_me_checkbox = element.all(by.css('.checkboxbtn #remember_me'));
        remember_me_checkbox.then(function(eles){
            expect(eles[0].getAttribute('checked')).toBe('true');
        });
    });

});