const express = require('express');
const app = express();
const path = require('path') // include built in path library
const port = 3000;

app.set('view engine', 'ejs') // view engine now looking for ejs file in directory of views
// we can set the views directory path to this :
app.set('views', path.join(__dirname, '/app/views'))

app.get('/', (req, res) => {
   console.log('Homepage');

   const scorePlayer1 = 0;
   const scorePlayer2 = 2;
   res.render('home', { scorePlayer1: scorePlayer1, scorePlayer2 }) // render /app/views/home and sent those variable that we can use
})

app.get('/r/:subreddit', (req, res) => { // request /r/cats or /r/any
   const { subreddit } = req.params;
   res.render('subreddit', { subreddit })
})

app.get('/cats', (req, res) => {
   const cats = ['blue', 'colt', 'timmy'];
   res.render('cats', { listOfCats: cats })
})


app.listen(port, () => {
   console.log('Listening on port 3000');
})

