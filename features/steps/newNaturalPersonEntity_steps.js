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
    this.page.createNewNaturalPerson();
    browser.sleep(2000);
  });

  this.When('I select Natural Person option', function () {
    this.page.selectingNaturalPerson();
    browser.sleep(2000);
  });

  this.When('I select a type of the Client', function () {
    this.page.selectingClientType();
    browser.sleep(2000);
  });

  this.When('I click on Next button', function () {
    this.page.clickingOnNextButton();
  });

  this.When('I select the <gender> of the client on the "Personal data" grid', function () {
    this.page.selectingPersonGender();
  });

  this.When('I fill the information for the "Personal data"', function () {
    this.page.fillingUpPersonalDataForm();
  });

  this.When('I fill the information for the "Residence address"', function () {
    this.page.fillingUpResidenceAddress();
  });

  this.When('I fill the information for the "Occupation"', function () {
    this.page.fillingUpOccupation();
  });

  this.When('I fill the information for the "Insider Information"', function () {
    this.page.fillingUpInsiderInformation();
  });

  this.When('I click on "Save" button', function () {
    this.page.clickSaveEntity();
  });

  this.When('I click on "Create with incomplete information" button', function () {
    this.page.createWithIncompleteInformation();
  });

  this.Then('The new Natural Person entity is created displaying the success message', function () {
    this.page.validateSuccessMessage();
  });
};

module.exports = LoginSteps;