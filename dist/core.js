Object.defineProperty(exports, '__esModule', { value: true });

function core() {
    if (process.env.NODE_ENV === 'development') {
        console.log('core function called');
    }
    return 'core';
}

exports.core = core;
