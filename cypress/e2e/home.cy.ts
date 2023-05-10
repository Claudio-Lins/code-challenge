describe("home", () => {
  it("should load the page", () => {
    cy.visit("/");
  });
  it("should load the page in Portuguese", () => {
    cy.visit("/");
    cy.get("html").should("have.attr", "lang", "pt-PT");
  });
  it("should load the LANG in English", () => {
    cy.visit("/");
    cy.get("select").select("EN").should("have.value", "english");
  });
  it("should load the LANG in Portuguese", () => {
    cy.visit("/");
    cy.get("select").select("PT").should("have.value", "portuguese");
  });
  it("should load the LANG in Spanish", () => {
    cy.visit("/");
    cy.get("select").select("ES").should("have.value", "spanish");
  });
});
