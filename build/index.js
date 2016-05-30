'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var p = function p() {
  return new _promise2.default(function (resolve, reject) {
    setTimeout(function () {
      resolve('Hello world');
    }, 1000);
  });
};

var test = function _callee() {
  var t;
  return _regenerator2.default.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('Waiting...');
          _context.next = 3;
          return _regenerator2.default.awrap(p());

        case 3:
          t = _context.sent;

          console.log(t);

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, null, undefined);
};

test();