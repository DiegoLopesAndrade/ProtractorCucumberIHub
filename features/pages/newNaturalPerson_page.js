/*
var NaturalPersonEntity = function () {

    this.get = function () {
        browser.get('https://tst.internal.apps.rh.1561.local/#/identity/list?type=pp');
    };

    this.createNewNaturalPerson = function () {
        element(by.css('.on-right.btn-blue-surf > span')).click();
    };

    this.selectingNaturalPerson = function () {
        element(by.css('div.choices > button:nth-of-type(1) > .icon')).click();
    };

    this.selectingClientType = function () {
        element(by.css('.row:nth-child(3) .with-icon-left')).sendKeys();
    };

    this.clickingOnNextButton = function () {
        element(by.className('div.action-buttons > .right > .btn')).click();
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

    this.fillingUpResidenceAddress = function (username) {
        element(by.css('form[ng2filedrop] > div:nth-of-type(7) > app-form-matrix-field:nth-of-type(1) input:nth-of-type(1)')).sendKeys(username);
        element(by.css('form[ng2filedrop] > div:nth-of-type(7) > app-form-matrix-field:nth-of-type(4) input:nth-of-type(1)')).sendKeys(username);
        element(by.css('form[ng2filedrop] > div:nth-of-type(7) > app-form-matrix-field:nth-of-type(5) input:nth-of-type(1)')).sendKeys(username);
        element(by.css('form[ng2filedrop] app-form-matrix-field:nth-of-type(8) input:nth-of-type(1)')).sendKeys(username);
        element(by.css('form[ng2filedrop] > div:nth-of-type(7) select:nth-of-type(1)')).sendKeys(username);
    };

    this.fillingUpOccupation = function () {
        element(by.css('form[ng2filedrop] app-form-matrix-field:nth-of-type(1) app-form-matrix-field:nth-of-type(2) select:nth-of-type(1)')).sendKeys();
        element(by.css('form[ng2filedrop] > div:nth-of-type(9) > app-form-matrix-field:nth-of-type(2) select:nth-of-type(1)')).sendKeys();
    };

    this.fillingUpInsiderInformation = function () {
        element(by.css('.row:nth-child(3) .with-icon-left')).sendKeys();
    };

};

module.exports = NaturalPersonEntity;
*/