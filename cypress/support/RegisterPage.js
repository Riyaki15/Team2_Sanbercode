class regisPage{
    first = "#firstname"
    last = "#lastname"
    email = "#email_address"
    pass = "#password"
    confirmPass = "#password-confirmation"
    submitBtn = '.action.submit.primary'
    firstErr = "#firstname-error"
    lastErr = "#lastname-error"
    emailErr = "#email_address-error"
    passErr = "#password-error"
    passContainer = "#password-strength-meter-container"
    confirmPassErr = "#password-confirmation-error"

    firstErr(){
        cy.get(this.firstErr).should('be.visible')
    }
    lastErr(){
        cy.get(this.lastErr).should('be.visible')
    }
    emailErr(){
        cy.get(this.emailErr).should('be.visible')
    }
    passErr(){
        cy.get(this.passErr).should('be.visible')
    }
    passContainer(){
        cy.get(this.passContainer).should('be.visible')
    }
    confirmPassErr(){
        cy.get(this.confirmPassErr).should('be.visible')
    }

}
export default new regisPage()