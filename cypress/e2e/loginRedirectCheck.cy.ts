import { PopupSelectors } from '../selectors/popup.selectors';

describe('BrightPay Login redirect', () => {
   it('should check if clicking BrightPay login redirects to the correct webpage', () => {
      cy.visit('https://brightsg.com/');
      cy.verifyElementVisible(PopupSelectors.locationPopup);
      cy.contains(PopupSelectors.ukIcon, 'United Kingdom').click({force: true}); //Force click due to cookies
      let login:string = '#menu-item-1811 > a > span'; //Location of BrightPay login button
      cy.get(login).invoke('removeAttr','target').click({force: true}); //Click the BrightPay login button, forced as to simulate hovering over Resource Hub
      cy.url().should('eq', 'https://brightpay.brightsg.com/');
    });

// Will fail because of the login opening in a new tab

})