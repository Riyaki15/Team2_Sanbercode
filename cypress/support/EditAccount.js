class EditAccount{
    email = "#email"
    pass = "#pass"
    loginBtn = ".action.login.primary"
    editaccountBtn = ".action.create.primary"
    changepwBtn = ".action.create.primary"
}
export default new EditAccount()

// class AccountPage {
//     editAccountInformation(firstName, lastName) {
//       cy.contains('Edit Account Information').click();
//       cy.get('#firstname').clear().type(firstName);
//       cy.get('#lastname').clear().type(lastName);
//       cy.get('.buttons-set [title="Save Account Information"]').click();
//     }
//   }
  
//   export default new AccountPage();