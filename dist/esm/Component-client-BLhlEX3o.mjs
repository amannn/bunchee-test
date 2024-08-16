'use client';
import { useState } from 'react';

function Component() {
    const [hello] = useState('world');
    return hello;
}

export { Component as C };
