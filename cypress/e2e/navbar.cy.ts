describe("navbar", () => {
  it("should load the page", () => {
    cy.visit("/");
  });
  it("should switch the lang when is changed", () => {
    cy.visit("/");
    cy.get("select").select("EN").should("have.value", "english");
    cy.get("span").first().should("have.text", "KNOW");
    cy.get("select").select("PT").should("have.value", "portuguese");
    cy.get("span").first().should("have.text", "Conhecer");
    cy.get("select").select("ES").should("have.value", "spanish");
    cy.get("span").first().should("have.text", "CONOCER");
  });
  it("should open and close sidebar menu", () => {
    cy.visit("/");
    cy.get("div").eq(0).click();
    cy.get("div").eq(1).click();
    cy.get("button").click();
  });
});
