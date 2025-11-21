import { PopupSelectors } from '../selectors/popup.selectors';

describe('Book Demo Fail', () => {
   it('should fail to book a demo', () => {
      cy.visit('https://brightsg.com/product-demo/');
      cy.verifyElementVisible(PopupSelectors.locationPopup);
      cy.contains(PopupSelectors.ukIcon, 'United Kingdom').click({force: true}); //Force click due to cookies
      let name:string = '#firstname-40680275-a5dc-4f5a-9ffd-be2dc5b70aa1'; //Location of first name input
      let last:string = '#lastname-40680275-a5dc-4f5a-9ffd-be2dc5b70aa1'; //Location of last name input
      let company:string = '#company-40680275-a5dc-4f5a-9ffd-be2dc5b70aa1'; //Location of company name input
      let button:string = '#hsForm_40680275-a5dc-4f5a-9ffd-be2dc5b70aa1 > fieldset:nth-child(4) > div > div > div > ul > li:nth-child(9) > label > span'; //Location of BrightPay button
      let submit:string = '#hsForm_40680275-a5dc-4f5a-9ffd-be2dc5b70aa1 > div.hs_submit.hs-submit > div.actions > input'; //Location of book demo button
      let failText:string = '#hsForm_40680275-a5dc-4f5a-9ffd-be2dc5b70aa1 > div.hs_error_rollup > ul > li > label'; //Location of text for when form is completed incorrectly
      cy.get(name).type('John'); //Fill in first name
      cy.get(last).type('Doe'); //Fill in last name
      cy.get(company).type('Microsoft'); //Fill in company name
      cy.get(button).click(); //Click on BrightPay
      cy.get(submit).click(); //Click on Book Demo
      cy.get(failText).should('be.visible');
    });
})