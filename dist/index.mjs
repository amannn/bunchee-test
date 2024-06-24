export * from './core.mjs';
export * from './react.mjs';

function index() {
    if (process.env.NODE_ENV === 'development') {
        console.log('index function called');
    }
    return 'index';
}

export { index };
