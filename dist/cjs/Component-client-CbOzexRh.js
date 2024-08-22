'use client';
var react = require('react');

function util1() {
    return 'util1';
}

function Component() {
    const [hello] = react.useState('world');
    return hello + util1();
}

exports.Component = Component;
