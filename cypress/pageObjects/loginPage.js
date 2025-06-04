class LoginPage {
  acessarPaginaDeLogin() {
    cy.visit('/minha-conta')
  }

  preencherLogin(email, senha) {
    cy.get('#username').type(email)
    cy.get('#password').type(senha)
  }

  submeterLogin() {
    cy.get('.woocommerce-form > .button').click()
  }

  validarLoginSucesso() {
    cy.get('.woocommerce-MyAccount-content').should('contain', 'Olá')
  }

  validarMensagemErro() {
    cy.get('.woocommerce-error').should('be.visible')
  }
}

export default new LoginPage()
