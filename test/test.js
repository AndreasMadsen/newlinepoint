
var Newline = require('../newlinepoint.js');
var test = require('tap').test;

test('to CRLF', function (t) {
  var convert = Newline('\r\n');

  convert.write('abc\r');
  convert.write('\n\ndef');
  convert.write('\r\n');
  convert.write('\r');
  convert.write('ghi');
  convert.write('\n\r');
  convert.end();

  t.equal(convert.read().toString(), "abc\r\n\r\ndef\r\n\rghi\r\n\r");
  t.end();
});

test('to LF', function (t) {
  var convert = Newline('\n');

  convert.write('abc\r');
  convert.write('\n\ndef');
  convert.write('\r\n');
  convert.write('\r');
  convert.write('ghi');
  convert.write('\n\r');
  convert.end();

  t.equal(convert.read().toString(), "abc\n\ndef\n\rghi\n\r");
  t.end();
});

test('char validation', function (t) {
  try {
    Newline(null);
  } catch (e) {
    t.equal(e.message, 'first argument must be a string');
    t.end();
  }
});
