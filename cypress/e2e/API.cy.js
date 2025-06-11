// import { it } from "mocha";
import {
  name as _name,
  gender as _gender,
  status as _status,
} from "../fixtures/user.json";

describe("Get User", () => {
  let apiUrl = "https://gorest.co.in/public/v2";

  let accessToken =
    "111bc3134f5e4c758f0da080c108c65753b95835010e59eb68105ec3c7996ea4";
  let randomtext = "";
  let testEmail = "";

  it("Get Users", () => {
    cy.request({
      method: "GET",
      url: `${apiUrl}/users`,
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Create User", () => {
    var pattren = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 5; i++) {
      randomtext += pattren.charAt(Math.floor(Math.random() * pattren.length));
      testEmail = randomtext + "@gmail.com";
    }
    cy.request({
      method: "POST",
      url: `${apiUrl}/users`,
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
      body: {
        name: _name,
        gender: _gender,
        email: testEmail,
        status: _status,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.has.property("email", testEmail);
      console.log(response.body);
    });
  });

  it("Get User by ID", () => {
    cy.request({
      method: "GET",
      url: `${apiUrl}/users/7939461`,
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id", 7939461);
    });
  });

 it("Update User", () => {
  cy.request({
    method: "PUT",
    url: `${apiUrl}/users/7939461`,
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    body: {
      name: "John Doe",       
      email: "johndoe@test.com" 
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.name).to.eq("John Doe"); 
  });
});

});
