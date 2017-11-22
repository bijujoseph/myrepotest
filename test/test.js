var assert = require('assert');
var math = require('../math');
describe('Math', function() {
    describe('#add()', function() {
        it('add two numbers', function() {
            assert.equal(2, math.add(1,1));
            assert.equal(-2, math.add(-1,-1));
        });
    });
});