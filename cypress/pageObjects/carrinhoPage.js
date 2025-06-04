class CarrinhoPage {
  acessarCarrinho() {
    cy.get('.woocommerce-message a').contains('Ver carrinho').click()
  }

  validarProdutoNoCarrinho(produto) {
    cy.get('.product-name').should('contain', produto)
  }

  finalizarCompra() {
    cy.get('.checkout-button').click()
  }
}

export default new CarrinhoPage()
