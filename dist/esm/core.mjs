import { t as test1, a as test2 } from './utils-shared-qauB_YLb.js';

function core() {
    if (process.env.NODE_ENV === 'development') {
        console.log('core function called');
    }
    return 'core' + test1() + test2();
}
const foo = 'foo';

export { core, foo };
