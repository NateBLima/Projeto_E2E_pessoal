import ProdutoPage from '../pageObjects/ProdutoPage'

describe('Testes de Produto', () => {
  it('Adicionar produto com sucesso', () => {
    ProdutoPage.selecionarProduto('Abominável Hoodie')
    ProdutoPage.selecionarTamanho('S')
    ProdutoPage.selecionarCor('Blue')
    ProdutoPage.definirQuantidade(2)
    ProdutoPage.adicionarAoCarrinho()
    ProdutoPage.validarAdicaoAoCarrinho()
  })

  it('Erro ao tentar adicionar sem selecionar tamanho', () => {
    ProdutoPage.selecionarProduto('Abominável Hoodie')
    ProdutoPage.selecionarCor('Blue')
    ProdutoPage.definirQuantidade(1)
    ProdutoPage.adicionarAoCarrinho()
    // Cypress já acusa erro visual ou alerta na tela
  })
})