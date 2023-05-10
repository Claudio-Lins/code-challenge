describe("navbar", () => {
  it("should load the page", () => {
    cy.visit("/");
  });
  it("should switch the lang when is changed", () => {
    cy.visit("/");
    cy.get("select").select("EN").click
    cy.get("select").select("EN").should("have.value", "english")
    cy.get("span").first().should("have.text", "KNOW");
    cy.get('.navLink').first().click
    cy.get("button").click();
    cy.get("select").select("PT").click
    cy.get("select").select("ES").click
  });
  it("should open and close sidebar menu", () => {
    cy.visit("/");
    cy.get(".navLink").first().click;
    cy.get("button").click
  });
});
