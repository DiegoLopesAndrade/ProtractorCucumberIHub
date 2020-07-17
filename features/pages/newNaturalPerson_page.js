var NaturalPersonEntity = function () {

    this.get = function () {
        browser.get('https://tst.internal.apps.rh.1561.local/#/identity/list?type=pp');
    };

    this.createNewNaturalPerson = function () {
        browser.getAllWindowHandles().then(handles => {
            browser.switchTo().window(handles[element(by.className('btn btn-colored btn-blue-surf on-right'))]).click();
        });
        //browser.switchTo().window(element(by.className('btn btn-colored btn-blue-surf on-right')).click());
        //  element(by.css('.btn-blue-surf > span')).click();
    };

    this.selectingNaturalPerson = function () {
        element(by.css('div.choices > button:nth-of-type(1) > .icon')).click();
    };

    this.selectingClientType = function () {
        element(by.css('.choice:nth-child(1) > .icon')).click();
    };

    this.clickingOnNextButton = function () {
        element(by.className('div.action-buttons > .right > .btn')).click();
    };

    this.selectingPersonGender = function () {
        element(by.css('css=.checkbox-radio:nth-child(3) > label')).click();
    };

    this.fillingUpPersonalDataForm = function () {
        element(by.css('form[ng2filedrop] > div:nth-of-type(3) > app-form-matrix-field:nth-of-type(1) input:nth-of-type(1)')).sendKeys();
        element(by.css('form[ng2filedrop] > div:nth-of-type(3) > app-form-matrix-field:nth-of-type(3) input:nth-of-type(1)')).sendKeys();
        element(by.css('form[ng2filedrop] > div:nth-of-type(3) > app-form-matrix-field:nth-of-type(4) input:nth-of-type(1)')).sendKeys();
        element(by.css('form[ng2filedrop] > div:nth-of-type(3) > app-form-matrix-field:nth-of-type(5) input:nth-of-type(1)')).sendKeys();
        element(by.css('form[ng2filedrop] > div:nth-of-type(3) > app-form-matrix-field:nth-of-type(6) input:nth-of-type(1)')).sendKeys();
        element(by.css('form[ng2filedrop] > div:nth-of-type(3) > app-form-matrix-field:nth-of-type(7) input:nth-of-type(1)')).sendKeys();
        element(by.css('form[ng2filedrop] > div:nth-of-type(3) select:nth-of-type(1)')).sendKeys();
        element(by.css('form[ng2filedrop] > div:nth-of-type(4) > app-form-matrix-field:nth-of-type(1) select:nth-of-type(1)')).sendKeys();
    };

    this.fillingUpResidenceAddress = function () {
        element(by.css('form[ng2filedrop] > div:nth-of-type(7) > app-form-matrix-field:nth-of-type(1) input:nth-of-type(1)')).sendKeys();
        element(by.css('form[ng2filedrop] > div:nth-of-type(7) > app-form-matrix-field:nth-of-type(4) input:nth-of-type(1)')).sendKeys();
        element(by.css('form[ng2filedrop] > div:nth-of-type(7) > app-form-matrix-field:nth-of-type(5) input:nth-of-type(1)')).sendKeys();
        element(by.css('form[ng2filedrop] app-form-matrix-field:nth-of-type(8) input:nth-of-type(1)')).sendKeys();
        element(by.css('form[ng2filedrop] > div:nth-of-type(7) select:nth-of-type(1)')).sendKeys();
    };

    this.fillingUpOccupation = function () {
        element(by.css('form[ng2filedrop] app-form-matrix-field:nth-of-type(1) app-form-matrix-field:nth-of-type(2) select:nth-of-type(1)')).sendKeys();
        element(by.css('form[ng2filedrop] > div:nth-of-type(9) > app-form-matrix-field:nth-of-type(2) select:nth-of-type(1)')).sendKeys();
    };

    this.fillingUpInsiderInformation = function () {
        element(by.css('.row:nth-child(3) .with-icon-left')).sendKeys();
    };

    this.clickSaveEntity = function () {
        element(by.css('.row:nth-child(3) .with-icon-left')).sendKeys();
    };

    this.createWithIncompleteInformation = function () {
        element(by.css('.row:nth-child(3) .with-icon-left')).sendKeys();
    };

    this.validateSuccessMessage = function () {
        element(by.css('.row:nth-child(3) .with-icon-left')).sendKeys();
    };
};

module.exports = LoginPage;