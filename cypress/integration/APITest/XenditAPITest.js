/// <reference types="cypress" />


describe("Xendit API test suit", function () {


    beforeEach(function () {

        cy.fixture('testData').then(function (data) {
            this.data = data

        })
    })


    it("Balance API Test", function () {
        cy.request({

            method: 'GET',
            url: 'https://api.xendit.co/balance',

            headers: {

                'Authorization': 'Basic ' + this.data.access_token

            }
        }).then(response => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.equal(this.data.statuscode)
            expect(response.body).to.have.property('balance', this.data.balance)





        })

    })
    it("Rate-Limit API Test", function () {
        cy.request({

            method: 'POST',
            url: 'https://api.xendit.co/hello_world',
            // form: true,
            headers: {

                'Authorization': 'Basic ' + this.data.access_token

            },
            body: {
                "action": "hello",
                "to": "world"
            }

        }).then(response => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.equal(this.data.statuscode)
            expect(response.body).to.have.property('message', this.data.message)



        })

    })



















})