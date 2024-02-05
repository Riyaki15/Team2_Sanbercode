import LoginPage from "../../../support/LoginPage"
const LoginData = require('../../../fixtures/LoginData.json')

describe('Login', () => {
  beforeEach(() => {

    cy.visit('')
  })

  it('Login success', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
    cy.get(LoginPage.email).type(Cypress.env('email'))
    cy.get(LoginPage.pass).type(Cypress.env('pass'))
    cy.get(LoginPage.loginBtn).click()

  })
  it('Login fail', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
    //email tidak diisi
    cy.get(LoginPage.pass).type(Cypress.env('pass'))
    cy.get(LoginPage.loginBtn).click()
    //cy.get(#email-error).should('be.visible')
    LoginPage.emailErr
  })
  it('Login fail (email salah)', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
    cy.get(LoginPage.email).type(LoginData["wrongEmail"]) //email salah
    cy.get(LoginPage.pass).type(Cypress.env('pass'))
    cy.get(LoginPage.loginBtn).click()
    //cy.get(#email-error).should('be.visible')
    LoginPage.emailErr
  })
  it('Login fail (password tidak diisi)', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
    cy.get(LoginPage.email).type(Cypress.env('email'))
    //password tidak diisi
    cy.get(LoginPage.loginBtn).click()
    //cy.get(#password-error).should('be.visible')
    LoginPage.passErr
  })
  it('Login fail (password salah)', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
    cy.get(LoginPage.email).type(Cypress.env('email'))
    cy.get(LoginPage.pass).type(LoginData["wrongPass"]) //password salah
    cy.get(LoginPage.loginBtn).click()
  })
  it('Fitur tombol lupa password', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
    cy.get(LoginPage.forgotBtn).click()

  })
  it.only('Fitur create an account', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
    cy.get(LoginPage.regisBtn).click()
    
  })
})