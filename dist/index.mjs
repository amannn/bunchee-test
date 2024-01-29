export * from 'bunchee-test/core';
export * from 'bunchee-test/react';

function index() {
    if (process.env.NODE_ENV === 'development') {
        console.log('index function called');
    }
    return 'index';
}

export { index };
