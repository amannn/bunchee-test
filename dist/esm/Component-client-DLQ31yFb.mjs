'use client';
import { useState } from 'react';

function util1() {
    return 'util1';
}

function Component() {
    const [hello] = useState('world');
    return hello + util1();
}

export { Component as C, util1 as u };
