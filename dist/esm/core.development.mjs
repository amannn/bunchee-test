import { t as test1, a as test2 } from './utils-shared-CqUhGy_d.js';

function core() {
    {
        console.log('core function called');
    }
    return 'core' + test1() + test2();
}
const foo = 'foo';

export { core, foo };
