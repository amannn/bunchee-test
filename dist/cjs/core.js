Object.defineProperty(exports, '__esModule', { value: true });

var utilsShared = require('./utils-shared-CSI-Oe-l.js');

function core() {
    if (process.env.NODE_ENV === 'development') {
        console.log('core function called');
    }
    return 'core' + utilsShared.test1() + utilsShared.test2();
}
const foo = 'foo';

exports.core = core;
exports.foo = foo;
