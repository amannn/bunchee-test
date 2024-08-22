'use client';

import {useState} from 'react';
import {util1} from '../more-utils';

export default function Component() {
  const [hello] = useState('world');
  return hello + util1();
}
