const serve = require("koa-static");
const path = require("path");

module.exports = () => {
    return serve(
        path.join(__dirname, '../public')
    );
};
