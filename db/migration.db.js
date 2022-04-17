const Test = require("../model/test.model");

module.exports = (async function () {
    try {
        await Test.sync({ alter: true });
    } catch (error) {
        console.error("Unable to connect to sync tables:", error);
        process.exit(1);
    }
})();
