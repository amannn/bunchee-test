Object.defineProperty(exports, '__esModule', { value: true });

var core_development_js = require('./core.development.js');
var react_development_js = require('./react.development.js');

function index() {
    {
        console.log('index function called');
    }
    return 'index';
}

exports.index = index;
Object.keys(core_development_js).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return core_development_js[k]; }
  });
});
Object.keys(react_development_js).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return react_development_js[k]; }
  });
});
