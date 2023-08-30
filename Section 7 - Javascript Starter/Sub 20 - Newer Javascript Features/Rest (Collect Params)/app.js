function sum() {
    console.log(arguments); // arguments is a default array that store arguments in the function parameter
    return arguments.reduce((total, num) => (total + num))
    // it will error because arguments is not like a regular array
}
// the symbol for rest is like spread it is 3 dots, but rest will include the non array into array
function sums(...nums) {
    console.log(nums); // arguments is a default array that store arguments in the function parameter
    return nums.reduce((total, num) => (total + num))
}

console.log(sums(4, 5, 6, 3, 6, 7, 9, 6, 4, 2))

// more example
function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO : ${gold}`);
    console.log(`SILVER MEDAL GOES TO : ${silver}`);
    console.log(`AND THANKS TO OTHER PARTICIPANT : ${everyoneElse}`)
}

console.log(raceResults('Arkan', 'Firza', 'Rafathar', 'Reza', 'Faiza'));
let everyoneElse = ['asdas', 'asdas'];
console.log(`AND THANKS TO OTHER PARTICIPANT : ${everyoneElse}`)