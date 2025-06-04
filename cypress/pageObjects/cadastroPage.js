class CadastroPage {
  acessarPaginaDeCadastro() {
    cy.visit('/minha-conta')
  }

  preencherCadastro(nome, email, senha) {
    cy.get('#reg_username').type(nome)
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(senha)
  }

  submeterCadastro() {
    cy.get(':nth-child(4) > .button').click()
  }

  validarCadastroSucesso() {
    cy.get('.woocommerce-MyAccount-content').should('contain', 'Olá')
  }
}

export default new CadastroPage()
