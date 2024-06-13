Object.defineProperty(exports, '__esModule', { value: true });

var core_production_js = require('./core.production.js');
var react_production_js = require('./react.production.js');

function index() {
    return 'index';
}

exports.index = index;
Object.keys(core_production_js).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return core_production_js[k]; }
  });
});
Object.keys(react_production_js).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return react_production_js[k]; }
  });
});
