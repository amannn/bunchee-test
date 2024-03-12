function test1() {
    if (process.env.NODE_ENV === 'development') {
        console.log('test1 from shared utils');
    }
    return 'test1';
}
function test2() {
    if (process.env.NODE_ENV === 'development') {
        console.log('test2 from shared utils');
    }
    return 'test2';
}

export { test2 as a, test1 as t };
