// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('selectProduct', (productName) => {
    
    cy.get('h4.card-title').each(($e1, index, $list) => {
      const text = $e1.text()
      if(text.includes(productName))
      cy.get('button[class="btn btn-info"]').eq(index).click()

    })


})
