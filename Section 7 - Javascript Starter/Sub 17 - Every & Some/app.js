const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(numbers.every(num=> num>=0)) 
// it checks every element in the numbers must be filtered true so it can return true

console.log(numbers.some(num => num >=5))// it checks if any element pass the filter it return true

const allEvens = (arr =>arr.every(num => num%2 === 0)) // function that check the array is allEven or not

