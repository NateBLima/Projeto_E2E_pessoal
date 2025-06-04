import LoginPage from '../pageObjects/LoginPage'

describe('Testes de Login', () => {
  beforeEach(() => {
    LoginPage.acessarPaginaDeLogin()
  })

  it('Login com sucesso', () => {
    LoginPage.preencherLogin('usuario@teste.com', 'senha123')
    LoginPage.submeterLogin()
    LoginPage.validarLoginSucesso()
  })

  it('Login com senha incorreta', () => {
    LoginPage.preencherLogin('usuario@teste.com', 'senhaErrada')
    LoginPage.submeterLogin()
    LoginPage.validarMensagemErro()
  })

  it('Login com email vazio', () => {
    LoginPage.preencherLogin('', 'senha123')
    LoginPage.submeterLogin()
    LoginPage.validarMensagemErro()
  })
})
