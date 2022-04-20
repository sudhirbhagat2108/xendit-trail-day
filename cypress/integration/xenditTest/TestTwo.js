/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
describe("This is my first suit", function(){

    it("This is my TestTwo test case", function(){
   
       
        cy.visit(Cypress.env('url2')+"/AutomationPractice/")

        //checkbox
        cy.get('#checkBoxOption1').check()
        cy.should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck()
        cy.should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])
        
        //static dropbox

        cy.get('select').select('option2').should('have.value', 'option2')

        //dynamic dropbox

        cy.get('#autocomplete').type('Ind')
        cy.get('.ui-menu-item div').each(($e1, index, $list) =>{

            if($e1.text()==="India"){

                cy.wrap($e1).click()
            }

        })

        cy.get('#autocomplete').should('have.value', "India")

        // not visible and visible 

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radio button

        cy.get('input[value="radio1"]').click()


        // windows alert

        //cy.get('#name').type("BigBoss")
        cy.get('#alertbtn').click()

        // to validate alert  window text

        cy.on('window:alert',(str) =>{

            
            expect(str).to.equal("Hello , share this practice page and share your knowledge")

        })
        cy.get('#confirmbtn').click()

        cy.on('window:confirm',(str) =>{

            expect(str).to.equal("Hello , Are you sure you want to confirm?")

            
        })


        //  Browser switch / child tab
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include','rahulshettyacademy')
        cy.go('back')
        //cy.go('forward')

        //cy.wait(2000)
        //Web Table      

        cy.get('tr td:nth-child(2)').each(($e1, index, $list) =>{

            const text = $e1.text()
            if(text.includes("Python")){

                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){

                    const pricetext = price.text()
                    expect(pricetext).to.equal('25')

                })

                
            }

        })


     // mouseover
       //cy.get('.mouse-hover-content').invoke('show')
       cy.contains('Top').click({force:true})
       cy.url().should('include', "top")

       //switch window not supported by cypress, just copy the url and start working with that url


       //iframe

       cy.frameLoaded("#courses-iframe")
       cy.iframe().find('a[href*="mentorship"]').eq(0).click()
       cy.wait(2000)
       cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)

   
    }) 
       
   })