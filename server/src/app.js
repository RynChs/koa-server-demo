const Koa = require('koa');
const app = new Koa();
const routers = require('./router/routers');

app.use(routers);
app.use(async (ctx)=> {
    ctx.set('Access-Control-Allow-Origin', '*');
});

app.listen(9201);