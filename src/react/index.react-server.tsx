import {util1} from '../more-utils';
import {test1, test2} from '../utils.shared-runtime';

export function react() {
  if (process.env.NODE_ENV === 'development') {
    console.log('react (react-server) function called');
  }

  return 'react (react-server)' + test1() + test2() + util1();
}

export {default as Component} from './Component';
