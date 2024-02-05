class LoginPage{
    email = "#email"
    pass = "#pass"
    loginBtn = ".action.login.primary"
    emailErr = "#email-error"
    passErr = "#password-error"
    forgotBtn = ".action.remind"
    regisBtn = ".action.create.primary"

    emailErr(){
        cy.get(this.emailErr).should('be.visible')
    }
    passErr(){
        cy.get(this.passErr).should('be.visible')
    }

}
export default new LoginPage()