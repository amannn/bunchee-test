export * from './core.development.mjs';
export * from './react.development.mjs';

function index() {
    if (process.env.NODE_ENV === 'development') {
        console.log('index function called');
    }
    return 'index';
}

export { index };
