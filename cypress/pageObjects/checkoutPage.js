class CheckoutPage {
  preencherDadosCheckout(dados) {
    cy.get('#billing_first_name').type(dados.nome);
    cy.get('#billing_last_name').type(dados.sobrenome);
    cy.get('#billing_address_1').type(dados.endereco);
    cy.get('#billing_city').type(dados.cidade);
    cy.get('#billing_postcode').type(dados.cep);
    cy.get('#billing_phone').type(dados.telefone);
    cy.get('#billing_email').type(dados.email);
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
