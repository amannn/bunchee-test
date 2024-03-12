Object.defineProperty(exports, '__esModule', { value: true });

var utilsShared = require('./utils-shared-CSI-Oe-l.js');

function react() {
    if (process.env.NODE_ENV === 'development') {
        console.log('react function called');
    }
    return 'react' + utilsShared.test1() + utilsShared.test2();
}

exports.react = react;
