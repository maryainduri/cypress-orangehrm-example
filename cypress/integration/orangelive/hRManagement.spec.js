describe('hr should be able to add person to system', function () {

    beforeEach(() => {
        cy.visit("/");
        cy.get("#txtUsername").should("be.visible")
            .log("OrangeLive App login page has been loaded");
    });

    it('should be able to add employee details', function () {

        cy.get("#txtUsername").type("Admin")
            .log("Username entered");

        cy.get("#txtPassword").type("admin123")
            .log("Password has been entered");

        cy.get("#btnLogin").click()
            .log("Login button clicked");

        cy.url().should("include","/dashboard")
            .log("Dashboard has been loaded, login OK");
    });

    it.only('should be able login with custom commands', function () {

        let userName = Cypress.env("userName");
        let password = Cypress.env("password");

        cy.login(userName,password);
    });
});