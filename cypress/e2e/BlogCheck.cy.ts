import { PopupSelectors } from '../selectors/popup.selectors';

describe('Blog Check', () => {
   it('should check if there are blogs visable', () => {
      cy.visit('https://brightsg.com/');
      cy.verifyElementVisible(PopupSelectors.locationPopup);
      cy.contains(PopupSelectors.ukIcon, 'United Kingdom').click({force: true}); //Force click due to cookies
      let blogs:string = '#menu-item-2576 > a'; //Location of Blogs button
      cy.get(blogs).click({force: true}); //Click the blogs button, forced as to simulate hovering over Resource Hub
      cy.url().should('eq', 'https://brightsg.com/blog/');
      let blog:string = '#next > div.row_col_wrap_12.col.span_12.dark.left > div.vc_col-sm-12.wpb_column.column_container.vc_column_container.col.no-extra-padding.inherit_tablet.inherit_phone > div > div > div > div.nectar-post-grid.custom_font_size_17px.font_line_height_1-1.card_hover_color_ffffff.custom-aspect-ratio-4-3.category-position-before-title > div:nth-child(1) > div > div.content > a' //Location of the first blog
      cy.get(blog).should('be.visible');
    });
})