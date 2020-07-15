const { browser } = require('protractor');

var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

var LoginSteps = function () {

  var LoginPage = require("../pages/login_page.js");

  this.World = function MyWorld() {
    this.page = new LoginPage();
  };

  this.Given('The login page is open', function () {
    this.page.get();
    browser.sleep(2000);
  });

  this.When('I click on the button option to the login with username and password', function () {
    this.page.accessLoginPage();
    browser.sleep(2000);
  });

  this.When('I enter first value for the $username', function (username, callback) {
    this.page.enterUsername(username);
    callback();
  });

  this.When('I enter second value for the $password', function (password, callback) {
    this.page.enterPassword(password);
    browser.sleep(2000);
    callback();
  });

  this.Then('I click on the login button', function () {
    this.page.clickLogIn();
    browser.sleep(2000);
  });
};

module.exports = LoginSteps;