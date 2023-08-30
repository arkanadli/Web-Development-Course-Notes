// not oftenly use, but in the past people use this

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

numbers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el)
    }
})

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

movies.forEach(function (movie) {
    console.log(`${movie.name} - ${movie.rate}`)
})