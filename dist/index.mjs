export * from './core.production.mjs';
export * from './react.production.mjs';

function index() {
    if (process.env.NODE_ENV === 'development') {
        console.log('index function called');
    }
    return 'index';
}

export { index };
