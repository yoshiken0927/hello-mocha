var assert = require('assert');
const sum = require('../src/helloMocha');

it('adds 1 + 2 to equal 3', () => {
  assert.strictEqual(sum(1,2), 3);
});

