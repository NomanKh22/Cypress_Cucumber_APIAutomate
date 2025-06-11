import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import usersApi from "../api/usersApi";

let createdUser = null;
let response = null;

When("fetch all users", () => {
  usersApi.getUsers().then((res) => {
    response = res;
  });
});

Then("the response status should be {int}", (status) => {
  expect(response.status).to.eq(status);
});

When(
  "Create a user with name {string} and gender {string} and status {string}",
  (name, gender, status) => {
    const random = Math.random().toString(36).substring(2, 7);
    const user = {
      name,
      gender,
      email: `testuser_${random}@mail.com`,
      status,
    };
    usersApi.createUser(user).then((res) => {
      response = res;
      createdUser = res.body;
    });
  }
);

Then("the user should be created successfully", () => {
  expect(response.status).to.eq(201);
  expect(createdUser).to.have.property("email");
  expect(createdUser).to.have.property("name");
});

Given(
  "a user with name {string} and gender {string} and status {string} exists",
  (name, gender, status) => {
    const random = Math.random().toString(36).substring(2, 7);
    const user = {
      name,
      gender,
      email: `testuser_${random}@mail.com`,
      status,
    };
    usersApi.createUser(user).then((res) => {
      createdUser = res.body;
    });
  }
);

When("fetch the user by ID", () => {
  usersApi.getUserById(createdUser.id).then((res) => {
    response = res;
  });
});

Then("the correct user details are returned", () => {
  expect(response.status).to.eq(200);
  expect(response.body.id).to.eq(createdUser.id);
});

When("Update the user's name to {string}", (newName) => {
  usersApi.updateUser(createdUser.id, { name: newName }).then((res) => {
    response = res;
  });
});

Then("the user's name should be updated", () => {
  expect(response.status).to.eq(200);
  expect(response.body.name).to.not.eq(createdUser.name);
});
