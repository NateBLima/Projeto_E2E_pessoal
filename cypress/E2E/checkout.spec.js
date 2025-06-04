import CheckoutPage from '../pageObjects/CheckoutPage'

describe('Testes de Checkout', () => {
  beforeEach(() => {
    cy.login('usuario@teste.com', 'senha123')
    cy.visit('/carrinho')
    cy.get('.checkout-button').click()
  })

  it('Finalizar pedido com sucesso', () => {
    CheckoutPage.preencherDadosCheckout({
      nome: 'Nathan',
      sobrenome: 'Brandão',
      endereco: 'Rua das Lojas',
      cidade: 'Contagem',
      cep: '32000000',
      telefone: '31999999999',
      email: 'nathan@teste.com'
    })
    CheckoutPage.aceitarTermos()
    CheckoutPage.submeterPedido()
    CheckoutPage.validarPedidoRealizado()
  })

  it('Erro ao finalizar sem aceitar os termos', () => {
    CheckoutPage.preencherDadosCheckout({
      nome: 'Nathan',
      sobrenome: 'Brandão',
      endereco: 'Rua das Lojas',
      cidade: 'Contagem',
      cep: '32000000',
      telefone: '31999999999',
      email: 'nathan@teste.com'
    })
    CheckoutPage.submeterPedido()
    // Esperado: mensagem de erro de termos não aceitos
  })
})