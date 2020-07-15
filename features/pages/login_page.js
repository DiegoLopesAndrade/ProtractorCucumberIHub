
var LoginPage = function () {

  this.get = function () {
    browser.get('https://tst.internal.apps.rh.1561.local/#/login');
  };

  this.accessLoginPage = function () {
    element(by.css('.choice:nth-child(2) > .icon')).click1();
  };

  this.enterUsername = function (username) {
    element(by.css('.row:nth-child(2) .with-icon-left')).sendKeys(username);
  };

  this.enterPassword = function (password) {
    element(by.css('.row:nth-child(3) .with-icon-left')).sendKeys(password);
  };

  this.clickLogIn = function () {
    element(by.className('btn btn-colored btn-blue-surf is-full-width')).click();
  }
};

module.exports = LoginPage;
