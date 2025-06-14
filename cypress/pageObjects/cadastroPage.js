class CadastroPage {
  acessarPaginaDeCadastro() {
    cy.visit('/minha-conta');
  }

  preencherCadastro(email, senha) {
    cy.get('#reg_email').type(email);
    cy.get('#reg_password').type(senha);
  }

  submeterCadastro() {
   cy.get(':nth-child(4) > .button').click();
  }

  validarCadastroSucesso() {
    cy.contains('Olá').should('exist');
  }

  validarMensagemErro() {
    cy.get('.woocommerce-error').should('be.visible');
  }
}

export default new CadastroPage();
