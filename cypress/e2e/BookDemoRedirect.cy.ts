import { PopupSelectors } from '../selectors/popup.selectors';

describe('Book Demo redirect', () => {
   it('should redirect to the Book Demo page', () => {
      cy.visit('https://brightsg.com/');
      cy.verifyElementVisible(PopupSelectors.locationPopup);
      cy.contains(PopupSelectors.ukIcon, 'United Kingdom').click({force: true}); //Force click due to cookies
      let button:string = '#top > div > div > div.right-aligned-menu-items > nav > ul > li.lozenge-button-in-megamenu.menu-item.menu-item-type-post_type.menu-item-object-page.nectar-regular-menu-item.menu-item-12129'; //Location of book demo button
      cy.get(button).click(); //Click the book demo button
      cy.url().should('eq', 'https://brightsg.com/product-demo/');
    });
})