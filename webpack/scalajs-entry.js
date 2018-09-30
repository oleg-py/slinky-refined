if (process.env.NODE_ENV === "production") {
    const opt = require("./test-slinky-fail-opt.js");
    opt.entrypoint.main();
    module.exports = opt;
} else {
    var exports = window;
    exports.require = require("./test-slinky-fail-fastopt-entrypoint.js").require;
    window.global = window;

    const fastOpt = require("./test-slinky-fail-fastopt.js");
    fastOpt.entrypoint.main()
    module.exports = fastOpt;

    if (module.hot) {
        module.hot.accept();
    }
}
