export * from './core.production.mjs';
export * from './react.production.mjs';

function index() {
    {
        console.log('index function called');
    }
    return 'index';
}

export { index };
