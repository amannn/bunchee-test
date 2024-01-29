Object.defineProperty(exports, '__esModule', { value: true });

var core = require('bunchee-test/core');
var react = require('bunchee-test/react');

function index() {
    return 'index';
}

exports.index = index;
Object.keys(core).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return core[k]; }
  });
});
Object.keys(react).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return react[k]; }
  });
});
