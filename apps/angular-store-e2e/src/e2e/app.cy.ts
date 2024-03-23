describe('angular-store-e2e', () => {
	beforeEach(() => cy.visit('/'))

	it('should display welcome message', () => {
		// Custom command example, see `../support/commands.ts` file

		// Function helper example, see `../support/app.po.ts` file
		cy.get('h1').contains('Candle Store')
	})
})
