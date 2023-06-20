const Router = require('koa-router');
const controller = require('./../controllers/home.controller');

const router = new Router();

router.get('/', controller.index);

module.exports = () => {
    return router.routes();
};
