import RegisterPage from "../../../support/RegisterPage"
const RegisterData = require('../../../fixtures/RegisterData.json')

describe('Create an account', () => {
  beforeEach(() => {

    cy.visit('')
  })
  it('register success', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get(RegisterPage.first).clear().type(RegisterData["firstName"])
    cy.get(RegisterPage.last).clear().type(RegisterData["lastName"])
    cy.get(RegisterPage.email).clear().type(RegisterData["email"])
    cy.get(RegisterPage.pass).clear().type(RegisterData["pass"])
    cy.get(RegisterPage.confirmPass).clear().type(RegisterData["pass"])
    cy.get(RegisterPage.submitBtn).click()
  })
  it('register fail (first name kosong)', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    //first name tidak diisi
    cy.get(RegisterPage.last).clear().type(RegisterData["lastName"])
    cy.get(RegisterPage.email).clear().type(RegisterData["email"])
    cy.get(RegisterPage.pass).clear().type(RegisterData["pass"])
    cy.get(RegisterPage.confirmPass).clear().type(RegisterData["pass"])
    cy.get(RegisterPage.submitBtn).click()
    //cy.get('#firstname-error').should('be.visible')
    RegisterPage.firstErr
  })

  it('register fail (last name kosong)', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get(RegisterPage.first).clear().type(RegisterData["firstName"])
    //lastname tidak diisi
    cy.get(RegisterPage.email).clear().type(RegisterData["email"])
    cy.get(RegisterPage.pass).clear().type(RegisterData["pass"])
    cy.get(RegisterPage.confirmPass).clear().type(RegisterData["pass"])
    cy.get(RegisterPage.submitBtn).click()
    //cy.get('#lastname-error').should('be.visible')
    RegisterPage.lastErr
  })

  it('register fail (email address kosong)', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get(RegisterPage.first).clear().type(RegisterData["firstName"])
    cy.get(RegisterPage.last).clear().type(RegisterData["lastName"])
    //email tidak diisi
    cy.get(RegisterPage.pass).clear().type(RegisterData["pass"])
    cy.get(RegisterPage.confirmPass).clear().type(RegisterData["pass"])
    cy.get(RegisterPage.submitBtn).click()
    //cy.get('#email_address-error').should('be.visible')
    RegisterPage.emailErr
  })
  it('register fail (password kosong)', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get(RegisterPage.first).clear().type(RegisterData["firstName"])
    cy.get(RegisterPage.last).clear().type(RegisterData["lastName"])
    cy.get(RegisterPage.email).clear().type(RegisterData["email"])
    //password tidak diisi
    cy.get(RegisterPage.confirmPass).clear().type(RegisterData["pass"])
    cy.get(RegisterPage.submitBtn).click()
    //cy.get('#password-error').should('be.visible')
    RegisterPage.passErr
    //cy.get('#password-strength-meter-container').should('be.visible')
    RegisterPage.passContainer

  })
  it('register fail (password tidak sesuai kriteria)', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get(RegisterPage.first).clear().type(RegisterData["firstName"])
    cy.get(RegisterPage.last).clear().type(RegisterData["lastName"])
    cy.get(RegisterPage.email).clear().type('rakibrizky@gmail.com')
    cy.get(RegisterPage.pass).clear().type(RegisterData["wrongPass"])
    cy.get(RegisterPage.confirmPass).clear().type(RegisterData["wrongPass"])
    cy.get(RegisterPage.submitBtn).click()
    //cy.get('#password-error').should('be.visible')
    RegisterPage.passErr
    //cy.get('#password-strength-meter-container').should('be.visible')
    RegisterPage.passContainer

  })
  it('register fail (confirm password kosong)', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get(RegisterPage.first).clear().type(RegisterData["firstName"])
    cy.get(RegisterPage.last).clear().type(RegisterData["lastName"])
    cy.get(RegisterPage.email).clear().type(RegisterData["email"])
    cy.get(RegisterPage.pass).clear().type(RegisterData["pass"])
    //confirm password tidak diisi
    cy.get(RegisterPage.submitBtn).click()
    //cy.get('#password-confirmation-error').should('be.visible')
    RegisterPage.confirmPassErr
    
  })
  it('register fail (password dan confirm password beda)', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get(RegisterPage.first).clear().type(RegisterData["firstName"])
    cy.get(RegisterPage.last).clear().type(RegisterData["lastName"])
    cy.get(RegisterPage.email).clear().type(RegisterData["email"])
    cy.get(RegisterPage.pass).clear().type(RegisterData["pass"])
    cy.get(RegisterPage.confirmPass).clear().type(RegisterData["wrongPass"])
    cy.get(RegisterPage.submitBtn).click()
    //cy.get('#password-confirmation-error').should('be.visible')
    RegisterPage.confirmPassErr
    
  })

})