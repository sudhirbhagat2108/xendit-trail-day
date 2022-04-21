class Homepage

{
    getEmailEditBox(){

        return cy.get('input[name="email"]')
        
    }

    getpasswordEditBox(){

        return cy.get('input[name="password"]')
    }

    getSubmitButton(){

        
        return cy.get('button[type="submit"]')
    }

    getSettingOption(){

        return cy.get("#lhs-settings > :nth-child(1) > .d-flex > .color-white-inactive-sidebar")
    }

    getIpWhitelists(){

        return cy.get('a[href*="settings/developers#ip-whitelists"]')
    }

    getAddIpAddressButton(){

        return cy.get('#open-add-ip-modal')
    }

    getIpAddressEditBox(){

        return  cy.get('.form-group > .input-text > .input-text-content > input')
    }

    getIpAddressAddbutton(){

        return cy.get('#add-ip')
    }
    
    getconfirmationButton(){

        return cy.get('.confirmation-modal-button-container > .btn')
    }
    getSuccessHeading(){

        return cy.get('p.confirmation-modal-title')
    }
    getSuccessMessage(){

        return cy.get('.confirmation-modal-subtitle > p')
    }

    getExistsMessage(){

        return  cy.get('.input-text-helper')
    }
   
    getcancelButton(){

        return  cy.get('.modal-footer > .btn-secondary')
    }
    

    getDeleteButton(){

        return cy.get('#delete-ip-0')
    }

    getRemoveButton(){

        return cy.get('.btn-destructive')
    }
 
}

export default Homepage