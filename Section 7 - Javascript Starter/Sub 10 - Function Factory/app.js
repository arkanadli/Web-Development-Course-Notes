const greet = function () {
    console.log('Good Afternoon!')
}

const callTenTimes = function (func) {
    for (let i = 0; i < 10; i++) {
        func();
    }
}

callTenTimes(greet);

// a function factory

// usually we doing this method
// const isMature = function (num) {
//     return num >= 19 && num <= 45;
// }

// const isChild = function (num) {
//     return num >= 1 && num <= 18;
// }

// but we can use function factory to be more dynamic
const makeFunctionBetween = function (num1, num2) {
    return function (num) { // return function that have 1 argument to check between 2 numbers that we set when we make the function
        return num >= num1 && num <= num2; // check is between
    }
}

const isChild = makeFunctionBetween(0, 12);
const isMature = makeFunctionBetween(12, 24);
const isOld = makeFunctionBetween(24, 45);
const isSenior = makeFunctionBetween(46, 70);

let checkChild = isChild(19);
let checkMature = isMature(19);
let checkOld = isOld(19);
let checkSenior = isSenior(19);



