/// <reference types="cypress" />

describe("This is my first suit", function(){

    it("This is my API Test Three test case", function(){
   
       cy.request('POST', 'http://216.10.245.166/Library/Addbook.php',{

           "name" : "testing book",
           "isbn" : "edrewg",
           "aisle" : "46g6",
           "author" : "John foe"

       }).then(function(response)
       {
        expect(response.body).to.have.property("Msg", "successfully added")
        expect(response.status).to.eq(200)

       })
   
    }) 
         
   })