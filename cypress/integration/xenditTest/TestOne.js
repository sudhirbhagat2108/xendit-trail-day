/// <reference types="cypress" />

describe("This is my first suit", function(){

    it("This is my TestOne test case", function(){
   
       
        cy.visit(Cypress.env('url2')+"/seleniumPractise/#/")
        cy.get('.search-keyword').type("ca")
        //cy.get('.product:visible').should('have.length', 4)
        //parent   child chaining
        cy.get('.products').as('productlocator')
        cy.get('@productlocator').find('.product').should('have.length', 4)
       // cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('@productlocator').find('.product').each(($e1, index, $list) => {
         const textVeg = $e1.find('h4.product-name').text()
         if(textVeg.includes('Cashews')){

            cy.wrap($e1).find('button').click()
         }   

        })

        //with Assertion you can verify whether text is correct or not 
        // and no need to handle promise with assertion as assertion manage by chai library
        //and its handles all promise internally  
        cy.get('.brand').should('have.text', 'GREENKART')

        //this will print in test runner as a log and need to handle promise
        cy.get('.brand').then(function(logoelement){

            cy.log(logoelement.text())

        })

        //Below three lines will not work as promise doesn't get resolved as text() is not cypress function
        //cy.log(cy.get('.brand').text())
        //const logo = cy.get('.brand')
        //cy.log(logo).text()
        
   
    }) 
   
   
   
   
   
   })