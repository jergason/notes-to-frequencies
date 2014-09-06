var assert = require('assert');
var notes = require('../');

describe('notes', function() {
  it('takes a note and returns the correct frequency for that note', function() {
    var freq = notes('A4');
    assert.strictEqual(freq, 440);

    freq = notes('A3');
    assert.strictEqual(freq, 220);

    freq = notes('Eb6');
    assert.strictEqual(freq, 1244.51);
  });

  it('assumes the octave is 4 when it isnt supplied', function() {
    var freq = notes('c');
    assert.strictEqual(freq, 261.63);
  });

  it('returns 440 for invalid notes', function() {
    var freq = notes({});
    assert.strictEqual(freq, 440);

    var freq = notes('Q4');
    assert.strictEqual(freq, 440);

    var freq = notes('');
    assert.strictEqual(freq, 440);
  });
});
