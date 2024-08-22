export const helperUtils = require('../fixtures/helpers.js');

describe('Gold Bars Weighing', () => {
  let goldBars = [0,1,2,3,4,5,6,7,8]
  let fakeBar = 0

  before(() => {
    cy.visit('https://sdetchallenge.fetch.com/');
    cy.contains('Weighings').should('be.visible');
  });
  
  it('Find the fake bar', () => {    
    // This will test [0, 1, 2] against [3, 4, 5] and determine 
    // which group the fake bar is in 
    helperUtils.getId('left_0').type(goldBars[0]);
    helperUtils.getId('left_1').type(goldBars[1]);
    helperUtils.getId('left_2').type(goldBars[2]);

    helperUtils.getId('right_0').type(goldBars[3]);
    helperUtils.getId('right_1').type(goldBars[4]);
    helperUtils.getId('right_2').type(goldBars[5]);

    helperUtils.getId('weigh').click();
    cy.contains('?').should('not.exist');

    // The group with the lightest bar will remain
    helperUtils.getId('reset').eq(0).within(($li) => {
      cy.wrap($li).invoke('text').then((text) => {
        if (text === '=') {
          goldBars = goldBars.slice(6);
        }
        else if (text === '<') {
          goldBars = goldBars.slice(0,3);
        }
        else if (text === '>') {
          goldBars = goldBars.slice(3,6);
        }
      })
    }).then((bars) => {
      // Reset the weighing scale
      helperUtils.getId('reset').contains('Reset').click();

      // Now we will weigh 2 bars from the lightest group against each other
      cy.log(goldBars);
      helperUtils.getId('left_0').type(goldBars[0]);
      helperUtils.getId('right_0').type(goldBars[1])

      helperUtils.getId('weigh').click();
      cy.contains('?').should('not.exist');

      // Finding the bar which is the lightest
      helperUtils.getId('reset').eq(0).within(($li) => {
        cy.wrap($li).invoke('text').then((text) => {
         if (text === '=') {
            fakeBar = goldBars[2]
          }
          else if (text === '<') {
            fakeBar = goldBars[0]
          }
          else if (text === '>') {
            fakeBar = goldBars[1]
          }
        })
      })

      // Click on the coin that is the lightest 
      cy.get('.coins').within(() => {
        cy.contains(fakeBar).click();
      })

      // Receive the correct confirmation message!
      cy.on('window:alert', (foundMessage) => {
        expect(foundMessage).to.equal('Yay! You find it!')
      })
    })

    
  })
})