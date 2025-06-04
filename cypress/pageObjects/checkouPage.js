class CheckoutPage {
  preencherDadosCheckout({ nome, sobrenome, endereco, cidade, cep, telefone, email }) {
    cy.get('#billing_first_name').type(nome)
    cy.get('#billing_last_name').type(sobrenome)
    cy.get('#billing_address_1').type(endereco)
    cy.get('#billing_city').type(cidade)
    cy.get('#billing_postcode').type(cep)
    cy.get('#billing_phone').type(telefone)
    cy.get('#billing_email').type(email)
  }

  aceitarTermos() {
    cy.get('#terms').click()
  }

  submeterPedido() {
    cy.get('#place_order').click()
  }

  validarPedidoRealizado() {
    cy.get('.woocommerce-notice').should('contain', 'recebido')
  }
}

export default new CheckoutPage()
