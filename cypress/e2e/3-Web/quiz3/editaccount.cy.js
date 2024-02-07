import LoginPage from "../../../support/LoginPage"
import EditAccount from "../../../support/EditAccount"
const LoginData = require('../../../fixtures/LoginData.json')
const EditAccount = require('../../../fixtures/EditAccount.json')

describe('My Account Feature Tests', () => {
  beforeEach(() => {
    // Visit the website before each test
    cy.visit('https://magento.softwaretestingboard.com/');
  });

  it('Login success', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
    cy.get(LoginPage.email).type(Cypress.env('email'))
    cy.get(LoginPage.pass).type(Cypress.env('pass'))
    cy.get(LoginPage.loginBtn).click()
  })

  it('should edit account information', () => {
    // Your test steps for editing account information
    cy.contains('My Account').click();
    cy.contains('Edit Account Information').click();
    // Add your test steps for editing account information form
    // For example, cy.get('#firstname').type('New First Name');
    cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/')
    cy.get(EditAccount.first).clear().type(EditAccount["firstName"])
    cy.get(EditAccount.last).clear().type(EditAccount["lastName"])
    // After making changes, save or submit the form
    // For example, cy.get('button[title="Save Account Information"]').click();
    cy.get(EditAccount.saveBtn).click()

    // Add assertions as needed
  });

  it('Feature button change Password', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/')
    cy.get(EditAccount.changepwBtn).click()
  })
})