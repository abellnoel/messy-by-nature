describe('Home page test', () => {
	it('visits the app root url', () => {
		cy.visit('/');
		cy.contains('h1', 'Messy by Nature');
	});
});
