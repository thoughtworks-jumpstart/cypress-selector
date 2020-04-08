describe("Cypress Selector", () => {
  it("should visit react website", () => {
    cy.visit(Cypress.env("host"));
  });

  it("select logo", () => {
    cy.get(".w3schools-logo");
  });

  it("Select by Attribute", () => {
    cy.get('[href = "/html/default.asp"]');
  });

  it("Select by id", () => {
    cy.get("#topnavbtn_exercises");
  });

  it("find by text", () => {
    cy.contains("HTML Tutorial");
  });

  it("combinations of button and class", () => {
    cy.get("a.w3-btn");
  });

  it("chaining selectors", () => {
    cy.get(".topnav").contains("CSS");
  });
});
