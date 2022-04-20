/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe("This is my first suit", function(){

    it("This is my TestThree test case", function(){
   
       
        cy.visit(Cypress.env('url2')+"/AutomationPractice/")

        
       //iframe
        cy.frameLoaded("#courses-iframe")
       //cy.frameLoaded("#courses-iframe")
       cy.iframe().find('a[href*="mentorship"]').eq(0).click()
       cy.wait(2000)
       cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)

   
    }) 
       
   })