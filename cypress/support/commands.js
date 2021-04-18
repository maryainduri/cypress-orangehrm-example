Cypress.Commands.add('login', (userName, password) => {

    Cypress.log({
        displayName: "loginCustomCommand",
        name: "Enter login & submit"
    });

    if (!userName) throw new Error("You need to provide username");
    if (!password) throw new Error("You need to provide password");

    cy.get("#txtUsername").type(`${userName}`)
        .log("Username entered");

    cy.get("#txtPassword").type(`${password}`)
        .log("Password has been entered");

    cy.get("#btnLogin").click()
        .log("Login button clicked");

    cy.url().should("include","/dashboard")
        .log("Dashboard has been loaded, login OK");
});
