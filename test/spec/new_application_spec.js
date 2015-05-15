'use strict';

var ppPage = require('./pp_page.js');

describe("Application Submission", function(){


    beforeEach(function(){
        ppPage.deleteCookies();
        ppPage.getRoot();
    });


    it("should submit new application successfully", function(){
        ppPage.login();

        var applicant_link = element(by.css("a[href*=applicant]"));

        applicant_link.click().then(function(){

            var legal_business_name = element(by.id('BusinessName'));
            legal_business_name.sendKeys('Abc Business company');

            var dba = element(by.id('DBA'));
            dba.sendKeys('Mr Bean');

            var business_legal_structure = element(by.id('BusinessLegalStructure'));
            business_legal_structure.sendKeys('LLC')

            var business_structure = element(by.id('BusinessStructure'));
            business_structure.sendKeys('franchise');

            var ein =  element(by.id('EIN'));
            ein.sendKeys('42342343');

            var state_of_incorporation = element(by.id('StateOfIncorporation'));
            state_of_incorporation.sendKeys('New York');

            var sicVal = element(by.id('sicVal'));
            sicVal.sendKeys('4232545');

            browser.executeScript("jQuery('#SICNAICSCode').val(4232545)")

            var startDate = element(by.model('applicationForm.startDate'));
            startDate.sendKeys('12/12/1986');

            var CreditCardProcessor = element(by.id('CreditCardProcessor'));
            CreditCardProcessor.sendKeys('Maestro');

            var MCALoanCompany = element(by.id('MCALoanCompany'));
            MCALoanCompany.sendKeys('MCA');

            var NumberOfLocations = element(by.id('NumberOfLocations'));
            NumberOfLocations.sendKeys('1');

            var BusinessEmail = element(by.id('BusinessEmail'));
            BusinessEmail.sendKeys('example@example.com');

            var business_url = element(by.id('BusinessURL'));
            business_url.sendKeys('http://example.com');

            var BusinessAddress = element(by.id('BusinessAddress'));
            BusinessAddress.sendKeys('2nd Avenue');
            browser.sleep(10000);
            var driver = browser.driver;
            //FILL OTHER FIELDS VIA GOOGLE ADDRESS AUTOCOMPLETE
            browser.executeScript("jQuery('.pac-item').first().addClass('pac-item-selected').select().trigger('mousedown')");
            driver.actions()
                .mouseDown(element.all(by.css('.pac-container .pac-item')).first())
                .perform();

            var BusinessZip = element(by.id('BusinessZip'));
            BusinessZip.sendKeys('99999');

            var BusinessPhone = element(by.id('BusinessPhone'));
            BusinessPhone.sendKeys('8888888888');

            var BillingPhone = element(by.id('BillingPhone'));
            BillingPhone.sendKeys('8888888888');

            var sameAddress = element(by.id('sameAddress'));
            sameAddress.click();

            var MonthlyPropertyPayment = element(by.id('MonthlyPropertyPayment'));
            MonthlyPropertyPayment.sendKeys('30000');

            var GrossAnnualSales = element(by.id('GrossAnnualSales'));
            GrossAnnualSales.sendKeys('90000');

            var AveMonthlyCCVol = element(by.id('AveMonthlyCCVol'));
            AveMonthlyCCVol.sendKeys('90000');

            var AveTransaction = element(by.id('AveTransaction'));
            AveTransaction.sendKeys('2000');

            var AnnualCreditCardSales = element(by.id('AnnualCreditCardSales'));
            AnnualCreditCardSales.sendKeys('20000');

            var RequestedAmount = element(by.id('RequestedAmount'));
            RequestedAmount.sendKeys('20000');

            var monthlyBankActivity = element(by.id('monthlyBankActivity'));
            monthlyBankActivity.click();

            var Deposits1 = element(by.id('Deposits1'));
            Deposits1.sendKeys('90000');

            var NegativeBalance1 = element(by.id('NegativeBalance1'));
            NegativeBalance1.sendKeys('2')


            var Deposits2 = element(by.id('Deposits2'));
            Deposits2.sendKeys('90000');

            var NegativeBalance2 = element(by.id('NegativeBalance2'));
            NegativeBalance2.sendKeys('2')

            var Deposits3 = element(by.id('Deposits3'));
            Deposits3.sendKeys('90000');

            var NegativeBalance3 = element(by.id('NegativeBalance3'));
            NegativeBalance3.sendKeys('2');

            var FirstName = element(by.id('FirstName'));
            FirstName.sendKeys('Tom');

            var LastName = element(by.id('LastName'));
            LastName.sendKeys('Jerry');

            var JobTitle = element(by.id('JobTitle'));
            JobTitle.sendKeys('CEO');

            var Ownership = element(by.id('Ownership'));
            Ownership.sendKeys('60');

            var HomeAddress = element(by.id('HomeAddress'));
            HomeAddress.sendKeys('#194, Area 8');

            var HomeCity = element(by.id('HomeCity'));
            HomeCity.sendKeys('BrandNewCity');

            var HomeState = element(by.id('HomeState'));
            HomeState.sendKeys('New York');

            var HomeZip = element(by.id('HomeZip'));
            HomeZip.sendKeys('43243');

            var HomePhone = element(by.id('HomePhone'));
            HomePhone.sendKeys('9186995477');

            var MobilePhone = element(by.id('MobilePhone'));
            MobilePhone.sendKeys('9186995477');

            var OwnerEmail = element(by.model('applicationForm.ownerEmail'));
            OwnerEmail.sendKeys('example@example.com');

            var dob = element(by.model('applicationForm.dateOfBirth'));
            dob.sendKeys('12/12/1986');

            var SSN = element(by.model('applicationForm.ssn'));
            SSN.sendKeys('123-45-6789');

            var creditPull = element(by.id('CreditPull'));
            creditPull.click();

            element(by.id('next_step')).click();

            browser.sleep(5000);

            var flashMessage = element(by.css("div.showSubmission-msg"));
            expect(flashMessage.isDisplayed()).toBe(true);
            expect(flashMessage.getText()).toBe('Application Submitted Successfully');
            expect(browser.getCurrentUrl()).toMatch(/dashboard\/notification/);
        });
    });

});