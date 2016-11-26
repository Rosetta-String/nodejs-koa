
var koa         = require('koa');
var router      = require('koa-router')();
var parser      = require('koa-body');
var auth        = require('basic-auth');
var app         = koa();
var routeRandom = require('./routes/random');
var routeCreate = require('./routes/create');

const port     = process.env.PORT || 3000;
const USERNAME = 'rosetta';
const PASSWORD = process.env.ROSETTA_PASSWORD || 'pass';

function* basicAuth(next) {
    var user = auth(this);

    if (user && (user.name == USERNAME) && (user.pass == PASSWORD)) {
        yield next;
    } else {
        this.set('WWW-Authenticate', 'Basic realm="user"');
        this.throw(401);
    }
}

function* routeIndex() {
    this.body = 'node.js/koa rosetta says hello';
}

app.use(function* setHeader(next) {
    this.set('x-powered-by', 'node.js/koa');
    yield next;
});
app.use(parser());

router
    .get('/', routeIndex)
    .get('/random', routeRandom)
    .post('/create', basicAuth, routeCreate);
app.use(router.routes()).use(router.allowedMethods());

if (require.main === module) {
    app.listen(port);
    console.log('node.js/koa rosetta listening on 0.0.0.0:%s', port);
}

module.exports = app;
