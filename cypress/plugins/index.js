const installLogsPrinter = require('cypress-terminal-report/src/installLogsPrinter');
const tagify = require('cypress-tags');

module.exports = (on, config) => {
    // Cypress Terminal output plugin
    installLogsPrinter(on, {
        printLogsToConsole: "always",
        routeTrimLength: 500,
    });

    // cypress tag plugin
    on('file:preprocessor', tagify(config));
}
