// short hand for function 

const add = (x, y) => {
    return x + y;
}

const square = (x) => {
    return x ** 2;
}

// const rollDie = () => {
//     return Math.random()*6 + 1;
// }
// or you can more short hand like this if only 1 line code

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

const isEven = num => num % 2 === 0;

// implementation at foreach and map

const movies = [
    {
        name: 'Alien',
        rate: 90
    },
    {
        name: 'Aladin',
        rate: 98
    }
]

// const newMovies = movies.map(function (movie) {
//     return `${movie.name} - ${movie.rate /10 }`
// })
// become this!
const newMovies = movies.map(movie => (
    `${movie.name} - ${movie.rate / 10}`
))