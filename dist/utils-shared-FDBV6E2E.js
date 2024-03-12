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

exports.test1 = test1;
exports.test2 = test2;
