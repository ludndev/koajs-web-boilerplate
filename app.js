const path = require("path");
const dotenv = require('dotenv');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const json = require('koa-json');
const render = require("@koa/ejs");
const serveStatic = require('./middlewares/serveStatic.middleware')
const defaultRoutes = require('./routes/default.route');
const util = require('./utils');

// load .env to process env
dotenv.config();

// init a Koa app
const app = new Koa();

// render
render(app, {
    root: path.join(__dirname, "views"),
    layout: "layouts/template",
    viewExt: "html",
    cache: util.env.isProd(),
    debug: util.env.isLocal(),
});

// apply middlewares
app.use(cors());
app.use(json());
app.use(bodyParser());
app.use(serveStatic());

// apply routes
app.use(defaultRoutes());

// export app as module
module.exports = app;

if (require.main === module) {
    // this code will only be executed if this module is being executed directly
    console.log(`Starting '${util.env.appName()}:${util.env.appEnv()}'`);
    app.listen(util.env.appPort(), util.env.appHost(), () => {
        console.log(`Server running on http://${util.env.appHost()}:${util.env.appPort()}`);
    });
}
