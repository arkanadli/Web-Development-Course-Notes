const numbers = [1, 2, 3, 4, 5, 6, 7, 8, -1, -4, 5, 7, 3];

// const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue)
const total = numbers.reduce((total, num) => total + num)

const minNumbers = numbers.reduce((min, num) => {
    if (num < min) {
        return num // current num will be change as a min in the next instance
    }
    return min;
})


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

// search for the minimum rate of the movies

const baddestMovie = movies.reduce((badMovie, currentMovie) => {
    if (currentMovie.rate < badMovie.rate) {
        return currentMovie //it return curr mov as badMovie in the next instance
    }
    return badMovie;
});