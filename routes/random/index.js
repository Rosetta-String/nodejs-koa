var db = require('../../lib/db');

module.exports = function* randomQuote() {
    var results,
        query;

    query = db.select()
        .from('quotes')
        .orderByRaw('random()')
        .limit(1);
    results = yield query;
    if (!results.length) {
        this.throw(400, 'No record found');
        return;
    }
    this.body = results[0].quote_text;
};
