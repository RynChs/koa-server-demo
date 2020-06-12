const Koa = require('koa');
const app = new Koa();
const routers = require('./router/routers');
const config = require('./config/config');

app.use(routers);
app.use(async (ctx)=> {
    ctx.set('Access-Control-Allow-Origin', '*');
});

const { port } = config;
app.listen(port);
console.log(`listening on port ${ port }`);