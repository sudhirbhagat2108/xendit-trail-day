/// <reference types="cypress" />

describe("This is my first suit", function(){

    it("This is my APITestTwo test case", function(){
   
       cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
       cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
       (req)=>
       {
       
        req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"

        req.continue((res)=>
        {

            expect(res.statusCode).to.equal(403)
        })

       }).as('dumyUrl')
       cy.get("button[class='btn btn-primary']").click()
       cy.wait('@dumyUrl')
       
         
   
   
   
   
   
    }) 
         
   })