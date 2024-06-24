Object.defineProperty(exports, '__esModule', { value: true });

var core_js = require('./core.js');
var react_js = require('./react.js');

function index() {
    if (process.env.NODE_ENV === 'development') {
        console.log('index function called');
    }
    return 'index';
}

exports.index = index;
Object.keys(core_js).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return core_js[k]; }
  });
});
Object.keys(react_js).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return react_js[k]; }
  });
});
