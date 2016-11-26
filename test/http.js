var request = require('supertest'),
    assert  = require('assert'),
    app     = require('../');

describe('rosetta node.js/koa', function() {
    it('index should respond with name', function(done){
        request(app.listen())
        .get('/')
        .end(function(err, res){
            if (err) return done(err);
            assert.equal(res.text, 'node.js/koa rosetta says hello');
            done();
        });
    });
    
    it('create should succeed', function(done){
        request(app.listen())
        .post('/create')
        .set('Authorization', 'Basic cm9zZXR0YTpwYXNz')
        .send({
            quote_text: 'This shall be returned.'
        })
        .end(function(err, res){
            if (err) return done(err);
            assert.equal(res.statusCode, 200);
            assert.equal(res.text, 'This shall be returned.');
            done();
        });
    });

    it('random should respond with quote', function(done){
        request(app.listen())
        .get('/random')
        .end(function(err, res){
            if (err) return done(err);
            assert.equal(res.text, 'This shall be returned.');
            done();
        });
    });
    
    it('show should respond with 404 for unknown', function(done){
        request(app.listen())
        .get('/100')
        .end(function(err, res){
            if (err) return done(err);
            assert.equal(res.statusCode, 404);
            done();
        });
    });
    it('show should respond with 401 for bad auth', function(done){
        request(app.listen())
        .post('/create')
        .end(function(err, res){
            if (err) return done(err);
            assert.equal(res.statusCode, 401);
            done();
        });
    });
});
