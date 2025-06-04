class CheckoutPage {
  preencherDadosCheckout(dados) {
    cy.get('#billing_first_name').type('{selectall}{backspace}').type(dados.nome);
    cy.get('#billing_last_name').type('{selectall}{backspace}').type(dados.sobrenome);
    cy.get('#billing_address_1').type('{selectall}{backspace}').type(dados.endereco);
    cy.get('#billing_city').type('{selectall}{backspace}').type(dados.cidade);
    cy.get('#billing_postcode').type('{selectall}{backspace}').type(dados.cep);
    cy.get('#billing_phone').type('{selectall}{backspace}').type(dados.telefone);
    cy.get('#billing_email').type('{selectall}{backspace}').type(dados.email);
  }

  aceitarTermos() {
    cy.get('#terms').check();
  }

  submeterPedido() {
    cy.get('#place_order').click();
  }

  validarPedidoRealizado() {
    cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.');
  }
}

export default new CheckoutPage();
