const add = (x, y) => x + y;

const square = (x) => x ** 2;

const PI = 3.14535234234;

// const math = {
//    add: add,
//    square: square,
//    PI: PI
// }

// module.exports = math; // we can like this

// or just one by one like this
module.exports.add = add;
module.exports.PI = PI;

// code with more simplify and clean
exports.square = square;



