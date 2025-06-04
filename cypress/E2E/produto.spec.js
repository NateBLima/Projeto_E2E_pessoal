import ProdutoPage from '../pageObjects/ProdutoPage'

describe('Testes de Produto - Autumn Pullie', () => {
  beforeEach(() => {
    cy.visit('/product/autumn-pullie/')
  })

  it('Adicionar produto com sucesso', () => {
    ProdutoPage.selecionarTamanho('M')
    ProdutoPage.selecionarCor('Red')
    ProdutoPage.definirQuantidade(1)
    ProdutoPage.adicionarAoCarrinho()
    ProdutoPage.validarAdicaoAoCarrinho()
  })

})
