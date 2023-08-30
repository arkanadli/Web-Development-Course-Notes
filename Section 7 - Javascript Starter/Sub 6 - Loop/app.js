// loops 
const shoppingCart = [
    {
        product: "Jenga Card",
        price: 2.49,
        quantity: 1
    },
    {
        product: "Jenga Box",
        price: 3.49,
        quantity: 2
    },
    {
        product: "Poker Card",
        price: 2.99,
        quantity: 1
    }
]

const studentsTest = {
    markey: 56,
    henry: 90,
    jumilah: 52,
    arkan: 69
}

// for (let i = 0; i < shoppingCart.length; i++) {
//     console.log(i, shoppingCart[i].product);
// }

// let input = prompt("Hey , say something!");
// while (true) {
//     input = prompt(input);
//     if (input === "stop copying me!") {
//         break;
//     }

// }
// console.log("OK YOU WIN!")

// Iteraing for loops
for (let entity of shoppingCart) {
    console.log(entity);
}

// Iteratin for Objects
for (let student in studentsTest) {
    console.log(`${student} marked score : ${studentsTest[student]}`)
    // student is 1 of the key in studentsTest
}

// or we can go on with for off but using Object syntax first
let keysFromObject = Object.keys(studentsTest);
let valuesFromObject = Object.values(studentsTest);
let totalScore = 0;
for (let value of valuesFromObject) {
    totalScore += value;
}
let avgScore = totalScore / valuesFromObject.length;


// Project mini game guessing the number

let maxNumber = parseInt(prompt("Welcome! Enter your max number :"));
while (!maxNumber) {
    maxNumber = parseInt(prompt("Invalid number! Enter your max number :"))
}
let targetGuess = Math.floor(Math.random() * maxNumber) + 1;
let guess = prompt("Enter your first guess! :");
let counter = 1;
while (true) {
    while (!parseInt(guess) && !(guess == "q")) {
        guess = (prompt("Invalid number! Enter your guess number or 'q' to quit:"))
    }
    if (guess === "q") {
        console.log(`You Quit!.`);
        break;
    } else if (parseInt(guess) == targetGuess) {
        console.log(`It took you ${counter} guesses.`);
        break;
    } else if (parseInt(guess) < targetGuess) {
        guess = prompt("Too Low. Guess Again! :");
    } else {
        guess = prompt("Too High. Guess Again! :");
    }

    counter++;

}