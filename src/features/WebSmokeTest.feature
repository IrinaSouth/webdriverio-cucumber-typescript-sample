Feature: Check if google webpage is up

  Scenario: web smoke test for google home page
    When I load home page
    Then google search bar is present
