describe("Add product to cart", () => {
  it("Should be able to navigate to the product page and add it to the cart", () => {
    cy.visit("/")

    cy.get('a[href^="/product"]').first().click()

    cy.wait(3000)
    cy.url().should("include", "/product")
    // SAME AS ^ BUT ONLY GETTING PATHNAME
    // cy.location('pathname').should('include',"/product")

    // NOT A GREAT PRACTICE TO GET BY TEXT AS TEXT MAY CHANGE IN FUTURE
    cy.contains("Adicionar ao carrinho").click()

    cy.contains("Cart 1").should("exist")
  })
})
