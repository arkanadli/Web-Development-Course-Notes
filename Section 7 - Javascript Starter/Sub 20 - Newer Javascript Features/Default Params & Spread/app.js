// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6;
//     }
//     return Math.floor(Math.random() * numSides) + 1;
// }

// we can simplyfie like this (set Default Paramater)
function rollDie(numSides = 6) { // if user not type the param, the param will be default set as 6
    return Math.floor(Math.random() * numSides) + 1;
}

// Spread in array
const arrString = ['123213', 'asdadsadas', 'ghfhgfhfgf'];
const arrString2 = ['654hgfh', 'asdadsdfgfdgdg', 'sadasdas'];
console.log(arrString); // it will print out the array
console.log(...arrString);// it will spread the array into non array
// console.log('123213', 'asdadsadas', 'ghfhgfhfgf')//its similar like this

const copyArr = [...arrString, ...arrString2] //it will copy the element of those 2 array.

const spread = [..."MAJALAYA"];
console.log(spread)

// Spread in Object
const spreadObject = { ..."HELLO" }; //the array value will be the value of object, and keys are from indicies
const spreadObject2 = { ...[1, 2, 4, 5, 2, 3, 5, 6, 7] }
console.log(spreadObject);
console.log(spreadObject2);

// combine into 1 Object
const concupine = { name: "Ashley", color: 'Grey' };
const carnivore = { eat: 'Meat', cantEat: 'Vegetables' }
const cat = { ...concupine, ...carnivore }

console.log(cat)

const dataFromForm = {
    email:'blueman@gmail.com',
    password:'ask321',
    username:'Turkes'
}

const newUser = {...dataFromForm , id:254, isAdmin : false}
