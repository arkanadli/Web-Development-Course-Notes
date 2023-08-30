const movieLine = ['tom', 'nancy'];
// why we use const here is because the memor adrss did not change even when we change the value of the array
movieLine.push('Anderson');
movieLine.push('Ansel');
let a = movieLine.pop();
a = movieLine.shift();
// it will return tom as a first index in the current array
a = movieLine.unshift('arkan');
// it return curent length of the array after we adding arkan in the array as a first index
console.log(a);

// merging array 
const cats = ['blue', 'kitty'];
const dogs = ['rusty', 'wyatt'];

const combo = dogs.concat(cats);
// it is combine 2 array but it didnt modify the original array

// how to check value in array
let checkValue = combo.includes('arkan');
console.log(checkValue);
// the other way is using indexOf, and when the return value is -1 that means the value was not in the array that we looking for
checkValue = combo.indexOf('arkan');

// how to slicing array, or get the last value of the array without changing the original array
const colors = ['red', 'orange', 'yellow', 'blue', 'green'];
// pick = colors.slice[2].toString();
// it is return from 2 till the end
pick = colors.slice[1, 3];
// it is return from 1 till index 3
pick = colors.slice[-1];
//it is return the last 4 index ,green blue yellow orange
console.log(colors.toString());

// how to inserting in beetwen index, or to delete specific index
colors.splice(1, 0, 'redorangeness');
// adding in index 1 with 0 delete