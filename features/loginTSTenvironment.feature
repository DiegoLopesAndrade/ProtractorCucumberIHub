Feature: TST-environment logged in
  As a user of the TST-environment
  I would like to do a login to access the first page of the I-hub application
  So that I can see come customer profiles and perform some Operations

  Scenario Outline: User test logged in
    Given The login page is open
    When I click on the button option to the login with username and password
    When I enter first value for the <username>
    When I enter second value for the <password>
    Then I click on the login button

    Examples:
      | username | password |
      | VDS_BO_1 | Password |