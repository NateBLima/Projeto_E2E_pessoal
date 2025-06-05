import LoginPage from '../pageObjects/LoginPage'

describe('Testes de Login', () => {
  beforeEach(() => {
    LoginPage.acessarPaginaDeLogin()
  })

  it('Login com sucesso', () => {
    let email = "nateqa@teste0.com"
    let senha = "senha123"
    LoginPage.preencherLogin(email, senha)
    LoginPage.submeterLogin()
    LoginPage.validarLoginSucesso()
  })

  it('Login com senha incorreta', () => {
    let email = "nateqa@teste0.com"
    LoginPage.preencherLogin(email, 'senhaErrada')
    LoginPage.submeterLogin()
    LoginPage.validarMensagemErro()
  })

  it('Login com email inválido', () => {
    LoginPage.preencherLogin('natqa@teste.com', 'senha123')
    LoginPage.submeterLogin()
    LoginPage.validarMensagemErro()
  })
})
