'use client';

import {useState} from 'react'

export default function Component() {
  const [hello] = useState('world');
  return hello;
}