export * from './core.development.mjs';
export * from './react.development.mjs';

function index() {
    {
        console.log('index function called');
    }
    return 'index';
}

export { index };
