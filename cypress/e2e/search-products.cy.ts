describe("Search products", () => {
  it("Should be able to search products", () => {
    cy.visit("/")

    const termToSearch = "moletom"

    cy.get("input[name=q]")
      .type(termToSearch)
      .parent("label")
      .parent("form")
      .submit()

    // cy.get('a[href^="/product"]').first().click()

    cy.url().should("include", "/search")
    cy.location("search").should("include", `q=${termToSearch}`)

    cy.get('a[href^="/product"]').should("exist")
  })

  it("Should not be able to visit search page without a query searchParam", () => {

    // NEXTJS REDIRECTS ON SERVER USING THROW
    cy.on('uncaught:exception', () => {
        return false
    })
    cy.visit("/search")

    cy.url().should("not.include", "/search")
  })
})
