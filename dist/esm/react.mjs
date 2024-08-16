import { t as test1, a as test2 } from './utils-shared-qauB_YLb.mjs';
export { C as Component } from './Component-client-BLhlEX3o.mjs';

function react() {
    if (process.env.NODE_ENV === 'development') {
        console.log('react function called');
    }
    return 'react' + test1() + test2();
}

export { react };
