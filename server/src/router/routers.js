const Router = require('koa-router');
const router = new Router();

router.get('/getClassName.json',(ctx, next)=>{
    ctx.body = ['home'];
    next();
});

const routers = router.routes();

module.exports = routers;