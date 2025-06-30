Feature: GoRest Users API

  Scenario: Get all users
    When fetch all users
    Then the response status should be 200

  Scenario: Create a new user with random email
    When Create a user with name "Test User" and gender "male" and status "active"
    Then the user should be created successfully

  Scenario: Get user by ID
    Given a user with name "Test User" and gender "male" and status "active" exists
    When fetch the user by ID
    Then the correct user details are returned

  Scenario: Update a user
    Given a user with name "Test User" and gender "male" and status "active" exists
    When Update the user's name to "Updated User"
    Then the user's name should be updated

    # Testing change 
# change 2