class Homepage

{

getEditBox(){

    return cy.get('input[name="name"]:nth-child(2)')
}

getTwoWayDataBinding(){


    return cy.get('input[name="name"]:nth-child(1)')
}

getGender(){

    return cy.get('select')
}

getEntrepreneur(){

    return cy.get('#inlineRadio3').should('be.disabled')
}


getShopTab(){


  return  cy.get(':nth-child(2) > .nav-link')
}


}

export default Homepage