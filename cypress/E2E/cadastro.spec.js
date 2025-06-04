import CadastroPage from '../pageObjects/CadastroPage'

describe('Testes de Cadastro', () => {
  beforeEach(() => {
    CadastroPage.acessarPaginaDeCadastro()
  })

  it('Cadastro com sucesso', () => {
    const email = `usuario${Date.now()}@teste.com`
    CadastroPage.preencherCadastro('Usuário Teste', email, 'senha123')
    CadastroPage.submeterCadastro()
    CadastroPage.validarCadastroSucesso()
  })

  it('Cadastro com email já existente', () => {
    CadastroPage.preencherCadastro('Usuário Teste', 'usuario@teste.com', 'senha123')
    CadastroPage.submeterCadastro()
    CadastroPage.validarMensagemErro()
  })
})