/// <reference types="cypress" />


describe('Test Form component', ()=>(
    it('Screen Form imput', ()=>{
        cy.visit('/');
    }),

    it('Verifier content tag', ()=>{
        cy.get('[data-cy=title]')
            .invoke('text')
            .should('equal', 'Revisar Lecturas')
    }),

    it('Containt the text: "CREAR NOTA"', ()=>{
        cy.contains('Crear Nota');
    }),

    it('Click button "Agragar Nota with empty fields', ()=>{
        cy.get('[data-cy=addNoteButton]').click();
        cy.get('[data-cy=alerta-error]')
            .should('exist')
            .invoke('text')
            .should('equal', 'Todos los campos son obligatorios')
    })

));

//Comprobar falta de solo un input por rellenar