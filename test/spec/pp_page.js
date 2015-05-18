'use strict';

var ppPage = function(){

    this.deleteCookies = function(){
        browser.manage().deleteAllCookies();
    };

    this.getRoot = function(){
        browser.get('/');
    };

    this.login = function(uId, pWd){
        this.deleteCookies();
        browser.get('/login');

        var email = element(by.model('email'))  ;
        var password = element(by.model('password'));
        var loginButton = element(by.id('login-button'));

        uId = uId ? uId : browser.params.login.user;
        pWd = pWd ? pWd : browser.params.login.password;

        email.sendKeys(uId);
        password.sendKeys(pWd);

        loginButton.click();
        browser.sleep(10000);
    };

    this.login_with_remember_me = function(uId, pWd){
        this.deleteCookies();
        browser.get('/login');

        var email = element(by.model('email'))  ;
        var password = element(by.model('password'));
        var loginButton = element(by.id('login-button'));

        uId = uId ? uId : browser.params.login.user;
        pWd = pWd ? pWd : browser.params.login.password;

        email.sendKeys(uId);
        password.sendKeys(pWd);

        var remember_me = element.all(by.css('.checkboxbtn'));
        remember_me.then(function(eles){
            eles[0].click();
        });
        loginButton.click();
        browser.sleep(10000);
    };

    this.logout = function(){
        var logout_link = element.all(by.css('.container a'))
        logout_link.then(function(eles){
            eles[0].click();
        });
        browser.sleep(5000);

    };
};

module.exports = new ppPage();