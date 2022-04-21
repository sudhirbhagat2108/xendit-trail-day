/// <reference types="cypress" />

import Homepage from '../../support/pageObjects/Homepage'

describe("Xendit Trail Day Test Suit", function () {

    beforeEach(function () {

        cy.fixture('testData').then(function (data) {
            this.data = data

        })
    })

    beforeEach(function () {
        const homepage = new Homepage()
        cy.visit(Cypress.env('url'))
        homepage.getEmailEditBox().type(this.data.email)
        homepage.getpasswordEditBox().type(this.data.password)
        homepage.getSubmitButton().click()
        

        })


    it("Xendit Dashboard Login Test", function () {

        const homepage = new Homepage()              
        cy.log("Verify that logged-in succeccfully")
        cy.url().should('include', "home")

    }),


    it("Xendit Dashboard Add IpWhitelists test", function () {

        const homepage = new Homepage()
        homepage.getSettingOption().click({ force: true })
        homepage.getIpWhitelists().click({ force: true })
        homepage.getAddIpAddressButton().click()
        homepage.getIpAddressEditBox().type(this.data.ipAddress)
        homepage.getIpAddressAddbutton().click()
        cy.log("Verify that IP Address Succcess heading is displayed")
        homepage.getSuccessHeading().should('have.text', this.data.success)
        cy.log("Verify that IP Address Succcess message is displayed")
        homepage.getSuccessMessage().should('have.text', this.data.ipAddress + " " + this.data.successMessage)
        homepage.getconfirmationButton().click()
        cy.log("Verify that Ip Address is addded")
        cy.get('#ip-whitelist-table tr td').should('have.text', this.data.ipAddress)

    }),

    it("Xendit Dashboard Add IpWhitelists Negative test", function () {

        const homepage = new Homepage()
        homepage.getSettingOption().click({ force: true })
        homepage.getIpWhitelists().click({ force: true })
        homepage.getAddIpAddressButton().click()
        homepage.getIpAddressEditBox().type(this.data.ipAddress)
        homepage.getIpAddressAddbutton().click()
        cy.log("Verify that IP Address already exists message is showing")
        homepage.getExistsMessage().should('have.text', this.data.existsMessage)
        homepage.getcancelButton().click()

    }),

    it("Xendit Dashboard remove IpWhitelists test", function () {    
        
        const homepage = new Homepage()
        homepage.getSettingOption().click({ force: true })
        homepage.getIpWhitelists().click({ force: true })
        homepage.getDeleteButton().click()
        homepage.getRemoveButton().click()
        cy.log("Verify that Ip Address removed success message heading is displayed")
        homepage.getSuccessHeading().should('have.text', this.data.success)
        cy.log("Verify that Ip Address removed message text is displayed")
        homepage.getSuccessMessage().should('have.text', this.data.ipAddress + " " + this.data.removeSuccessMessage)
        homepage.getconfirmationButton().click()

    })




})