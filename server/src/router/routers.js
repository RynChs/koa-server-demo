const Router = require('koa-router');
const router = new Router();
const sql = require('../sql/sql');

router.get('/getClassName.json',(ctx, next)=>{
    sql.queryClass().then((res) => {
        console.log(res);
        ctx.body = res;
    });
    ctx.body = [];
    next();
});

const routers = router.routes();

module.exports = routers;