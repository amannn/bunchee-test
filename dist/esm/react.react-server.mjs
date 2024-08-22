import { u as util1 } from './Component-client-DLQ31yFb.mjs';
export { C as Component } from './Component-client-DLQ31yFb.mjs';
import { t as test1, a as test2 } from './utils-shared-qauB_YLb.mjs';

function react() {
    if (process.env.NODE_ENV === 'development') {
        console.log('react (react-server) function called');
    }
    return 'react (react-server)' + test1() + test2() + util1();
}

export { react };
