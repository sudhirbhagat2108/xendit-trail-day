/// <reference types="cypress" />
import Homepage from '../../support/pageObjects/Homepage'
import Productpage from '../../support/pageObjects/Productpage'

describe("This is my first suit", function(){

    before(function(){

        cy.fixture('testData').then(function(data){
            this.data = data

        })
    })

    it("This is my Framework.2 test case", function(){
   
       const homepage = new Homepage()
       const productpage  = new Productpage() 
        cy.visit(Cypress.env('url'))
       
        
      //cy.get(':nth-child(2) > .nav-link').click()
      homepage.getShopTab().click()
      this.data.productName.forEach(function(element){
        cy.selectProduct(element)
          
      })
     
   
    }) 
       
   })