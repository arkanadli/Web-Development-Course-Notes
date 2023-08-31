const express = require('express')
const app = express();
const port = 8080;
// console.dir(app);

//callback that will be call every time there is req to the server
// app.use((request, response) => {
//    console.log('We got A new request!');
//    // console.log(request);
//    // response.sendStatus(404)
//    // response.send('My first Server')
//    // response.send('<h1> My first Server </h1>')
//    response.send({ id: 5, username: 'arkanadli', password: 'adlidewa' })
// })

// ::ROUTING::
// ::Different method can get different request type!::
app.get('/', (req, res) => {
   console.log('/root Request!!');
   res.send('Home Page.')
})

app.get('/cats', (req, res) => {
   console.log('/cats Request!!');
   res.send('MEOWW!')
})

app.post('/cats', (req, res) => {
   console.log('/cats POST REQUEST!!');
   res.send('Will be right Back!')
})

app.get('/dogs', (req, res) => {
   console.log('/dogs Request!!');
   res.send('WOOF!')
})

// ::For Some Patterns Routes::
app.get('/r/:subreddit', (req, res) => { // request /r/cats or /r/any
   console.log('/subreddit get Request!!');
   const { subreddit } = req.params;
   res.send(`Browsing the ${subreddit} subreddit`)
})

app.get('/r/:subreddit/:postId', (req, res) => { // request exmp : /r/cats/1235132
   console.log('/subreddit/postId get Request!!');
   const { subreddit, postId } = req.params;
   res.send(`Viewing Post ID :${postId} the ${subreddit} subreddit`)
})

// ::Getting Query String Value in Express!::
app.get('/search', (req, res) => {
   // const {q} = res.query
   const objectQuery = req.query;
   console.dir(objectQuery);
   if (!objectQuery.q) {
      res.send('Nothing found if nothing searchs')
   } else {
      res.send(`Search Results for : ${objectQuery.q}`)

   }
})

app.get('*', (req, res) => { // placed in last,because every 1 request only can pass 1 response
   res.send('I dont know that path!')
})

// (start new local server on localhost:port)
app.listen(port, () => {
   console.log(`LISTENING ON PORT ${port}!`);
})
