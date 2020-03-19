describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });
  
    it ('checks if checkin rendered', () => {
      cy.visit ('/');cy.get('[data-cy=checkin]').should('contain', 'CheckIn');
    });
  
    it('checks if you checked in appers when clicking button', () => {
      cy.visit ('/');
      const stub = cy.stub()  
        cy.on ('window:alert', stub)
        cy
        .get('[data-cy=checkin]').click()
        .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('You have checked in!')      
        })
    });
  });