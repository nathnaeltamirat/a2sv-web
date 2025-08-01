beforeEach(() => {
  cy.intercept("POST", "https://akil-backend.onrender.com/bookmarks/*",
    {
      statusCode: 200,
      body: {
        success: true,
        message: "Bookmark created successfully",
        data: null,
        errors: null,
        count: 0,
      }
  }).as('bookmarkRequest')
});
describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.url().should("include", "/login");
    cy.get('input[name="email"]').type("nathnael.tamirat@aastustudent.edu.et");
    cy.get('input[name="password"]').type("123456{enter}");

    cy.get(".bookmark img",{timeout:10000})
      .first()
      .should("have.attr", "src")
      .then((intialSrc) => {
        cy.get(".bookmark").first().click();
        cy.wait("@bookmarkRequest");

        cy.get(".bookmark img")
        .first()
          .should("have.attr", "src")
          .and((newSrc) => {
            expect(newSrc).not.to.eq(intialSrc);
          });
      });
  });
});
