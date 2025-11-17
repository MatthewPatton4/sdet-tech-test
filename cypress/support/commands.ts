declare global {
  namespace Cypress {
    interface Chainable {
      verifyElementVisible(selector: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add('verifyElementVisible', (selector: string) => {
  cy.get(selector).should('be.visible');
});

export {};
