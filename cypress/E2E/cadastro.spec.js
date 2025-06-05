import CadastroPage from '../pageObjects/CadastroPage'

describe('Testes de Cadastro', () => {
  beforeEach(() => {
    CadastroPage.acessarPaginaDeCadastro()
  })

  it('Cadastro com sucesso', () => {
    let email = "natexpto@teste0.com"
    let senha = "senha1234"
    CadastroPage.preencherCadastro(email, senha)
    CadastroPage.submeterCadastro()
    CadastroPage.validarCadastroSucesso()
  })

  it('Cadastro com email já existente', () => {
    let email = "nateqa@teste0.com"
    CadastroPage.preencherCadastro(email, 'senha123')
    CadastroPage.submeterCadastro()
    CadastroPage.validarMensagemErro()
  })
})