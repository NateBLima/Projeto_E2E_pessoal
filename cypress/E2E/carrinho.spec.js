import CarrinhoPage from '../pageObjects/CarrinhoPage';
import ProdutoPage from '../pageObjects/ProdutoPage';

describe('Testes do Carrinho', () => {
  beforeEach(() => {
    cy.login('nateqa@teste0.com', 'senha123')
  })
   beforeEach(() => {
    cy.visit('/product-category/clothing/women/tops-women/hoodies-sweatshirts-tops-women/')
    ProdutoPage.selecionarProduto('Autumn Pullie');
    ProdutoPage.selecionarTamanho('S');
    ProdutoPage.selecionarCor('Red');
    ProdutoPage.definirQuantidade(1);
    ProdutoPage.adicionarAoCarrinho();
    CarrinhoPage.acessarCarrinho();
  });

  it('Verificar produto no carrinho', () => {
    CarrinhoPage.validarProdutoNoCarrinho('Autumn Pullie');
  });
});
