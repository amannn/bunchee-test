function test1() {
    {
        console.log('test1 from shared utils');
    }
    return 'test1';
}
function test2() {
    {
        console.log('test2 from shared utils');
    }
    return 'test2';
}

export { test2 as a, test1 as t };
