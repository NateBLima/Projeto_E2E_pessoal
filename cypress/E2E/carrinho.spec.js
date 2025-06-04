import CarrinhoPage from '../pageObjects/CarrinhoPage'
import ProdutoPage from '../pageObjects/ProdutoPage'

describe('Testes do Carrinho', () => {
  beforeEach(() => {
    cy.visit('/')
    ProdutoPage.selecionarProduto('Abominável Hoodie')
    ProdutoPage.selecionarTamanho('S')
    ProdutoPage.selecionarCor('Blue')
    ProdutoPage.definirQuantidade(1)
    ProdutoPage.adicionarAoCarrinho()
    CarrinhoPage.acessarCarrinho()
  })

  it('Verificar produto no carrinho', () => {
    CarrinhoPage.validarProdutoNoCarrinho('Abominável Hoodie')
  })

  it('Finalizar compra a partir do carrinho', () => {
    CarrinhoPage.finalizarCompra()
  })
})
