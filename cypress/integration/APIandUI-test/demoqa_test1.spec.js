context('Navigate to main page successfully ', () => {
    before(() => {
        cy.visit('/')
        cy.title().should('include', 'Tools')

    })
    it('Confirm the window.navigator.language', () => {
        cy.visit('/')
            .its('navigator.language') // yields window.navigator.language
            .should('equal', 'en-GB')

    })
    it('Navigate to sub-pages successfully', () => {

        // loads elements page successfully
        cy.contains('Elements').eq(0).should('exist').click()
        cy.go(-1)

        // loads forms page successfully
        cy.contains('Forms').should('exist').click()
        cy.go(-1)

        // loads forms page successfully
        cy.contains('Alerts').should('exist').click()
        cy.go(-1)

        // loads widgets page successfully
        cy.contains('Widgets').should('exist').click()
        cy.go(-1)

        // loads interactions page successfully
        cy.contains('Interactions').should('exist').click()
        cy.go(-1)

        // loads Books Store Application page successfully
        cy.contains('Book').should('exist').click()
        cy.go(-1)

    })
    it('Navigate to join page  successfully', () => {
        cy.get('img[alt="Selenium Online Training"]').should('exist').click()

    })
})