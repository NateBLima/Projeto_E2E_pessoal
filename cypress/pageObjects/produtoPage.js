class ProdutoPage {
  selecionarProduto(nomeProduto) {
    cy.contains(nomeProduto).click()
  }

  selecionarTamanho(tamanho) {
    cy.get('.button-variable-item-' + tamanho).click()
  }

  selecionarCor(cor) {
    cy.get('.button-variable-item-' + cor).click()
  }

  definirQuantidade(qtd) {
    cy.get('.input-text.qty').clear().type(qtd)
  }

  adicionarAoCarrinho() {
    cy.get('.single_add_to_cart_button').click()
  }

  validarAdicaoAoCarrinho() {
    cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho')
  }
}

export default new ProdutoPage()
