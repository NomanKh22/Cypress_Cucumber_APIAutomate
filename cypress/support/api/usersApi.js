class UsersApi {
  constructor() {
    this.apiUrl = "https://gorest.co.in/public/v2";
    this.accessToken = "111bc3134f5e4c758f0da080c108c65753b95835010e59eb68105ec3c7996ea4";
  }

  getUsers() {
    return cy.api({
      method: "GET",
      url: `${this.apiUrl}/users`,
      headers: {
        authorization: `Bearer ${this.accessToken}`,
      },
    });
  }

  createUser(user) {
    return cy.api({
      method: "POST",
      url: `${this.apiUrl}/users`,
      headers: {
        authorization: `Bearer ${this.accessToken}`,
      },
      body: user,
      failOnStatusCode: false,
    });
  }

  getUserById(id) {
    return cy.api({
      method: "GET",
      url: `${this.apiUrl}/users/${id}`,
      headers: {
        authorization: `Bearer ${this.accessToken}`,
      },
    });
  }

  updateUser(id, user) {
    return cy.api({
      method: "PUT",
      url: `${this.apiUrl}/users/${id}`,
      headers: {
        authorization: `Bearer ${this.accessToken}`,
      },
      body: user,
    });
  }
}

export default new UsersApi();