describe('Testing Petstore, API Endpoints Using Cypress', function() {
    const store_inv = 'https://petstore.swagger.io/v2/store/inventory'
    const store_inv2 = 'https://petstore.swagger.io/v2/store/order'
    const store_inv3 = 'https://petstore.swagger.io/v2/store/order/778'
    const store_inv4 = 'https://petstore.swagger.io/v2/store/order/777'

    it.skip('GET Request', function() {
        cy.request('GET', store_inv)
            .then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.sold).to.equal(46)
                expect(response.body.status).to.equal(2)
                expect(response.body.available).to.equal(704)
            })
    })

    it('POST Request', function() {
        cy.request({
                method: 'POST',
                url: (store_inv2),
                body: {
                    "id": 778,
                    "petId": 778,
                    "quantity": 1,
                    "shipDate": "2021-11-08T23:17:34.290Z",
                    "status": "placed",
                    "complete": true
                }
            })
            .then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.quantity).to.equal(1)
                expect(response.body.status).to.equal("placed")
                expect(response.body.complete).to.equal(true)
            })
    })
    it('GET Update Request', function() {
        cy.request('GET', store_inv3)
            .then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.quantity).to.equal(1)
                expect(response.body.status).to.equal("placed")
                expect(response.body.complete).to.equal(true)
            })
    })


    it('DELETE Request', function() {
        cy.request('DELETE', store_inv4)
            .then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.type).to.equal("unknown")
                expect(response.body.message).to.equal("Order Not Found")

            })
    })
})