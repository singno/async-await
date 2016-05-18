'use strict';

require("babel-polyfill");

var justPromise = function justPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('Hello world');
    }, 1000);
  });
};

var testAsync = function _callee() {
  var t;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('Waiting...');
          _context.next = 3;
          return regeneratorRuntime.awrap(justPromise());

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

testAsync();