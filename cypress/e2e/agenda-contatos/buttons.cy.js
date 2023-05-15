/// <reference types="cypress" />

describe('Testes para os botões', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Botão adicionar deve adicionar novo contato', () => {
        cy.get('input[type="text"]').type('Emelly Kelm')
        cy.get('input[type="email"]').type('emelly.dev@gmail.com')
        cy.get('input[type="tel"]').type('66 1234-5678')
        cy.get('.adicionar').click()
    })

    it('Botão delete deve deletar contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })

    it('Botão editar contato', () => (
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
    ))
})