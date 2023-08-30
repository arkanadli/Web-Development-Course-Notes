function multiply(x, y) {
    return x * y;
}

function square(x) {
    return multiply(x, x);
}

function isRightTriangle(a, b, c) {
    return square(a) + square(b) === square(c);
}
console.log('before')
isRightTriangle(3, 4, 5) //set the breakpoint(red dot) to this function, to breakdown this code process
console.log('after')

// to check the call Stack use chrome sources, and then click file js and then f11 and watch the call stack!