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
// const goodScore = movies.filter(function(movie){ //we still can shorthand
//     return movie.rate > 70;
// }).map(function(movie){
//     movie.name
// })

// into this line of code
// const goodScore = movies.filter(movie => movie.rate > 70).map(movie => movie.name)

// or like this
const goodScore = movies
    .filter(movie => movie.rate > 70)
    .map(movie => movie.name)
let str = 'sadasdasd'
str.leg

function validUserNames(usernames) {
    // your code here
    return usernames.filter(names => {
        return names.length < 10;
    })
}