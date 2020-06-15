const Router = require('koa-router');
const router = new Router();
const sql = require('../sql/sql');

router.get('/getClassName.json', async (ctx, next)=>{
    const res = await sql.queryClass();
    let arr = [];
    for (const item of res) {
        arr.push(item.className);
    }
    ctx.body = arr;
    next();
});

const routers = router.routes();

module.exports = routers;