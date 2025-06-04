Cypress.Commands.add('login', (email, senha) => {
  cy.visit('/minha-conta')
  cy.get('#username').type(email)
  cy.get('#password').type(senha, { log: false })
  cy.get('.woocommerce-form > .button').click()
})

Cypress.Commands.add('cadastrarUsuario', (nome, sobrenome, email, senha) => {
  cy.visit('/minha-conta')
  cy.get('#reg_username').type(`${nome} ${sobrenome}`)
  cy.get('#reg_email').type(email)
  cy.get('#reg_password').type(senha, { log: false })
  cy.get(':nth-child(4) > .button').click()
})

Cypress.Commands.add('adicionarProdutoAoCarrinho', (produto, tamanho, cor, quantidade = 1) => {
  cy.visit('/produtos')
  cy.contains(produto).click()
  cy.get('.button-variable-item-' + tamanho).click()
  cy.get('.button-variable-item-' + cor).click()
  cy.get('.input-text.qty').clear().type(quantidade)
  cy.get('.single_add_to_cart_button').click()
})

Cypress.Commands.add('finalizarCompra', () => {
  cy.get('.checkout-button').click()
  cy.get('#billing_first_name').type('Nathan')
  cy.get('#billing_last_name').type('Brandão')
  cy.get('#billing_address_1').type('Rua das Lojas')
  cy.get('#billing_city').type('Contagem')
  cy.get('#billing_postcode').type('32000000')
  cy.get('#billing_phone').type('31999999999')
  cy.get('#billing_email').type('teste@teste.com')
  cy.get('#terms').click()
  cy.get('#place_order').click()
})
