var reporter = require('cucumberjs-allure-reporter');

reporter.config({
    targetDir: 'C:/Users/DAN/Documents/ProtactorProjects/ProtractorCucumber/protractor-cucumber-example',
    labels: {
        feature: ('.features\steps\login_steps.js'),
    }
});

module.exports = reporter;