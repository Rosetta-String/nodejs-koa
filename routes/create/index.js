var db = require('../../lib/db');

module.exports = function* createQuote() {
    var results,
        query;

    query = db('quotes')
        .insert({
            quote_text: this.request.quote_text
        });
    try {
        results = yield query;
    } catch (e) {
        this.throw(400, e);
        return;
    }
    this.body = this.request.quote_text;
};
