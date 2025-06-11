import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import usersApi from "../api/usersApi";

let createdUser = null;
let response = null;

When("I fetch all users", () => {
  usersApi.getUsers().then((res) => {
    response = res;
  });
});

Then("the response status should be {int}", (status) => {
  expect(response.status).to.eq(status);
});

When("I create a user with random email", () => {
  const random = Math.random().toString(36).substring(2, 7);
  const user = {
    name: "Test User",
    gender: "male",
    email: `testuser_${random}@mail.com`,
    status: "active",
  };
  usersApi.createUser(user).then((res) => {
    response = res;
    createdUser = res.body;
  });
});

Then("the user should be created successfully", () => {
  expect(response.status).to.eq(201);
  expect(createdUser).to.have.property("email");
});

Given("a user exists", () => {
  const random = Math.random().toString(36).substring(2, 7);
  const user = {
    name: "Test User",
    gender: "male",
    email: `testuser_${random}@mail.com`,
    status: "active",
  };
  usersApi.createUser(user).then((res) => {
    createdUser = res.body;
  });
});

When("I fetch the user by ID", () => {
  usersApi.getUserById(createdUser.id).then((res) => {
    response = res;
  });
});

Then("the correct user details are returned", () => {
  expect(response.status).to.eq(200);
  expect(response.body.id).to.eq(createdUser.id);
});

When("I update the user's name", () => {
  usersApi.updateUser(createdUser.id, { name: "Updated User" }).then((res) => {
    response = res;
  });
});

Then("the user's name should be updated", () => {
  expect(response.status).to.eq(200);
  expect(response.body.name).to.eq("Updated User");
});