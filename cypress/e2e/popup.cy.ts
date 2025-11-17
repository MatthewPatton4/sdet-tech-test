import { PopupSelectors } from '../selectors/popup.selectors';

describe('Bright SG Location Popup', () => {
  it('should display Ireland/UK location popup on page load', () => {
    cy.visit('/');
    cy.verifyElementVisible(PopupSelectors.locationPopup);
  });
});
