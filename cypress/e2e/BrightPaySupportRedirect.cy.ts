import { PopupSelectors } from '../selectors/popup.selectors';

describe('BrightPay Support Redirect', () => {
   it('should redirect to the BrightPay Cloud Support page', () => {
      cy.visit('https://brightsg.com/support/');
      cy.verifyElementVisible(PopupSelectors.locationPopup);
      cy.contains(PopupSelectors.ukIcon, 'United Kingdom').click({force: true}); //Force click due to cookies
      let button:string = '#fws_692086d1e1c26 > div.row_col_wrap_12_inner.col.span_12.left > div.vc_col-sm-4.wpb_column.column_container.vc_column_container.col.child_column.left_padding_desktop_3vw.left_padding_tablet_4vw.left_padding_phone_5vw.top_padding_desktop_3vw.top_padding_tablet_4vw.top_padding_phone_5vw.right_padding_desktop_3vw.right_padding_tablet_4vw.right_padding_phone_5vw.bottom_padding_desktop_3vw.bottom_padding_tablet_4vw.bottom_padding_phone_5vw.instance-4 > div > div.wpb_wrapper > a > span'; //Location of Help Guide button
      cy.get(button).click(); //Click the help guide button
      cy.url().should('eq', 'https://payrollsupport.uk.brightsg.com/hc/en-gb');
    });

    it('should redirect to the BrightPay Desktop Support page', () => {
      cy.visit('https://brightsg.com/support/');
      cy.verifyElementVisible(PopupSelectors.locationPopup);
      cy.contains(PopupSelectors.ukIcon, 'United Kingdom').click({force: true}); //Force click due to cookies
      let button:string = '#fws_692086d1e1c26 > div.row_col_wrap_12_inner.col.span_12.left > div.vc_col-sm-4.wpb_column.column_container.vc_column_container.col.child_column.left_padding_desktop_3vw.left_padding_tablet_4vw.left_padding_phone_5vw.top_padding_desktop_3vw.top_padding_tablet_4vw.top_padding_phone_5vw.right_padding_desktop_3vw.right_padding_tablet_4vw.right_padding_phone_5vw.bottom_padding_desktop_3vw.bottom_padding_tablet_4vw.bottom_padding_phone_5vw.instance-5 > div > div.wpb_wrapper > a > span'; //Location of Help Guide button
      cy.get(button).click(); //Click the help guide button
      cy.url().should('eq', 'https://brightpaydesktopsupport.uk.brightsg.com/hc/en-gb/categories/39969202871953-BrightPay-Desktop');
    });

    //Tests will not work due to 403 on request

})