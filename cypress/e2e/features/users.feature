Feature: GoRest Users API

  Scenario: Get all users
    When I fetch all users
    Then the response status should be 200

  Scenario: Create a new user
    When I create a user with random email
    Then the user should be created successfully

  Scenario: Get user by ID
    Given a user exists
    When I fetch the user by ID
    Then the correct user details are returned

  Scenario: Update a user
    Given a user exists
    When I update the user's name
    Then the user's name should be updated