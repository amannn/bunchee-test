'use client';
var react = require('react');

function Component() {
    const [hello] = react.useState('world');
    return hello;
}

exports.Component = Component;
