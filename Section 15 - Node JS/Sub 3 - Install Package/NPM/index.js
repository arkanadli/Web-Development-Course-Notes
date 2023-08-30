const jokes = require('give-me-a-joke');
const colors = require('colors');
var cowsay = require("cowsay");

// console.dir(colors);
// console.dir(jokes);

// see the docs in this npm package, how to use and etc.
jokes.getRandomDadJoke(function (joke) { // after we get the jokes it will bring into var joke
   console.log(joke.rainbow);
})

console.log('RAINBOW'.rainbow);

console.log(cowsay.say({
   text: 'Im in MOODDULEE!'
}));