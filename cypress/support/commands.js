
Cypress.Commands.add('apiRequest', (method, url, body = {}) => {
  cy.request({
    method,
    url,
    body,
    headers: {
      Authorization: `Bearer ${Cypress.env('gorest_token')}`,
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false
  });
});