var rsc = 'index (rsc)';

function index() {
    if (process.env.NODE_ENV === 'development') {
        console.log('index function called');
    }
    return rsc;
}

export { index };
