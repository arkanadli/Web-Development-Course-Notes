// map processing every element in the array and make a new array as a result

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const doubles = numbers.map(function (num) {
    return num * 2;
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

const title = movies.map(function (movie) {
    return movie.name.toUpperCase();
})