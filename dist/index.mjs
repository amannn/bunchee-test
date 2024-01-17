function hello(name) {
    if (process.env.NODE_ENV === 'development') {
        console.log('Hello function called');
    }
    return `Hello ${name}!`;
}

export { hello };
