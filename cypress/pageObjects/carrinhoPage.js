class CarrinhoPage {
  acessarCarrinho() {
    cy.contains('Ver carrinho').should('be.visible').click();
  }

  validarProdutoNoCarrinho(nomeProduto) {
    cy.get('.cart_item').should('contain', nomeProduto);
  }

  finalizarCompra() {
    cy.get('.checkout-button').click();
  }
}

export default new CarrinhoPage();
