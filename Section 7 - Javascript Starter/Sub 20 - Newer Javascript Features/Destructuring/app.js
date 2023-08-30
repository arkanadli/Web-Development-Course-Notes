const participant = ['Arkan', 'Firza', 'Rafathar', 'Reza', 'Faiza'];

// const gold = participant[0];
// const silver = participant[1];
// const everyoneElse = participant.slice(2);

// or we can code like this 
const [gold, silver, ...everyoneElse] = participant; // relatively to position!


console.log(`GOLD MEDAL GOES TO : ${gold}`);
console.log(`SILVER MEDAL GOES TO : ${silver}`);
console.log(`AND THANKS TO OTHER PARTICIPANT : ${everyoneElse}`)


// destructuring object 
const user1 = {
    email: 'uzzomak@gmail.com',
    password: 'asdsdadas',
    firstName: 'arkan',
    lastName: 'adli',
    born: 2001
}
const { email, firstName, lastName } = user1; // it will create var that have same name as a key
// or you can change it and default set if it undefined
const { email: emailUser1, admin: isAdmin = false } = user1;
console.log(`${emailUser1} ${firstName} ${lastName} ${isAdmin} `);

// destructuring params
const movies = [
    {
        name: 'Alien',
        rate: 90
    },
    {
        name: 'Aladin',
        rate: 88
    },
    {
        name: 'Prometheus',
        rate: 67
    }
]
// before
// let goodMovies = movies
//     .filter((movie) => movie.rate >= 80)
//     .map((movie) => `${movie.name} is rated: ${movie.rate}`);

// after
let goodMovies = movies
    .filter(({ rate }) => rate >= 80)
    .map(({ name, rate }) => `${name} is rated: ${rate}`);

console.log(...goodMovies)