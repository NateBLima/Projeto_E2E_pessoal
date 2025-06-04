class CarrinhoPage {
  acessarCarrinho() {
    cy.get('.woocommerce-message a').contains('Ver carrinho').click();
  }

  validarProdutoNoCarrinho(nomeProduto) {
    cy.get('.cart_item').should('contain', nomeProduto);
  }

  finalizarCompra() {
    cy.get('.checkout-button').click();
  }
}

export default new CarrinhoPage();
