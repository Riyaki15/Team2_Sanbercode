// import EditAddress from "../../../support/EditAddress"
// const EditAddress = require('../../../fixtures/EditAddress.json')

// describe('My Account Feature Tests', () => {
//   beforeEach(() => {
//     // Visit the website before each test
//     cy.visit('https://magento.softwaretestingboard.com/');
//   });

//   it('Login success', () => {
//     cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
//     cy.get(LoginPage.email).type(Cypress.env('email'))
//     cy.get(LoginPage.pass).type(Cypress.env('pass'))
//     cy.get(LoginPage.loginBtn).click()
//   });

//   it('should edit address', () => {
//     // Your test steps for editing address
//     cy.contains('My Account').click();
//     cy.contains('Address Book').click();
//     cy.contains('Edit Address').click();
//     // Add your test steps for editing address form
//     // For example, cy.get('#street_1').type('123 New Street');
//     cy.visit('https://magento.softwaretestingboard.com/customer/address/edit/')
//     cy.get(EditAddress.first).clear().type(EditAddress["firstName"])
//     cy.get(EditAddress.last).clear().type(EditAddress["lastName"])
//     cy.get(EditAddress.first).clear().type(EditAddress["company"])
//     cy.get(EditAddress.last).clear().type(EditAddress["phone number"])
//     cy.get(EditAddress.last).clear().type(EditAddress["street address"])
//     cy.get(EditAddress.last).clear().type(EditAddress["city"])
//     cy.get(EditAddress.last).clear().type(EditAddress["State/Province"])
//     cy.get(EditAddress.last).clear().type(EditAddress["Zip/Postal Code"])
//     cy.get(EditAddress.last).clear().type(EditAddress["counter"])
//     // After making changes, save or submit the form
//     // For example, cy.get('button[title="Save Address"]').click();

//     // Add assertions as needed
//   });
// });