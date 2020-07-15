/*

const { browser } = require('protractor');

var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

var newNaturalPersonSteps = function () {

  var NaturalPersonEntity = require("../pages/newNaturalPerson_page.js");

  this.World = function MyWorld() {
    this.page = new NaturalPersonEntity();
  };

  this.Given('The main page of Natural Person is displayed showing the list os entities', function () {
    this.page.get();
    browser.sleep(2000);
  });

  this.When('I click on the button "+" to create a new Natural Person Entity', function () {
    this.page.accessLoginPage();
    browser.sleep(2000);
  });

  this.When('I select Natural Person option', function (username, callback) {
    this.page.enterUsername(username);
    callback();
  });

  this.When('I select a type of the Client', function (password, callback) {
    this.page.enterPassword(password);
    browser.sleep(2000);
    callback();
  });

  this.When('I click on Next button', function () {
    this.page.accessLoginPage();
    browser.sleep(2000);
  });

  this.When('I select the <gender> of the client on the "Personal data" grid', function (username, callback) {
    this.page.enterUsername(username);
    callback();
  });

  this.When('I fill the information for the "Personal data"', function (password, callback) {
    this.page.enterPassword(password);
    browser.sleep(2000);
    callback();
  });

  this.When('I fill the information for the "Residence address"', function () {
    this.page.accessLoginPage();
    browser.sleep(2000);
  });

  this.When('I fill the information for the "Occupation"', function (username, callback) {
    this.page.enterUsername(username);
    callback();
  });

  this.When('I fill the information for the "Insider Information"', function (password, callback) {
    this.page.enterPassword(password);
    browser.sleep(2000);
    callback();
  });

  this.When('I click on "Save" button', function (username, callback) {
    this.page.enterUsername(username);
    callback();
  });

  this.When('I click on "Create with incomplete information" button', function (password, callback) {
    this.page.enterPassword(password);
    browser.sleep(2000);
    callback();
  });

  this.Then('The new Natural Person entity is created displaying the success message', function () {
    this.page.clickLogIn();
    browser.sleep(2000);
  });
};

module.exports = newNaturalPersonSteps;
*/