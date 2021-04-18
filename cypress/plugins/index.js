const installLogsPrinter = require('cypress-terminal-report/src/installLogsPrinter');

module.exports = (on, config) => {
    // Cypress Terminal output plugin
    installLogsPrinter(on, {
        printLogsToConsole: "always",
        routeTrimLength: 500,
    });
}
