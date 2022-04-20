/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
import Homepage from '../../support/pageObjects/Homepage'

describe("This is my first suit", function(){

    before(function(){

        cy.fixture('testData').then(function(data){
            this.data = data

        })
    })

    it("This is my Framework.1 test case", function(){
   
       const homepage = new Homepage()
       //.cy.visit("https://rahulshettyacademy.com/angularpractice/")
        //cy.visit(this.data.url)
        cy.visit(Cypress.env('url'))
        //cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        homepage.getEditBox().type(this.data.name)
        //cy.get('select').select(this.data.gender)
        homepage.getGender().select(this.data.gender)
        //cy.get('input[name="name"]:nth-child(1)').should('have.value', this.data.name)
        homepage.getTwoWayDataBinding().should('have.value', this.data.name)
        //cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength', '2')
        homepage.getEditBox().should('have.attr','minlength', '2')
        //cy.get('#inlineRadio3').should('be.disabled')
        homepage.getEntrepreneur().should('be.disabled')
        
      //cy.get(':nth-child(2) > .nav-link').click()
      homepage.getShopTab().click()
      this.data.productName.forEach(function(element){
        cy.selectProduct(element)
          
      })
     
   
    }) 
       
   })