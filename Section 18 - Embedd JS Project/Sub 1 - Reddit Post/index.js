const express = require('express')
const app = express();
const port = 3000;
const path = require('path')
const dataReddit = require('./../data.json') // collect data from database
let dataKeys = Object.keys(dataReddit); // collect object keys to refering later
app.set('view engine', 'ejs'); // set view file with extention ejs
app.set('views', path.join(__dirname, '/views'));// set view directory (views) into cur index.dir/views 
app.use(express.static(path.join(__dirname, '/public')));// where we storing assets locally

// console.dir(dataReddit);


for (let key of dataKeys) { // looping for every section in database
   app.get(`/${key}`, (req, res) => { // get /section exmple /soccer /chickens
      // console.dir(key);
      const arrData = dataReddit[key]; // gets values from the section
      // console.log(arrData);
      res.render(`main-page`, { ...arrData }) // open view file and send variable in spreaded conditions
   })
   // console.log(`${key}`);
}

app.get('/:subreddit', (req, res) => { // handle any http request left
   const { subreddit } = req.params
   res.render('not-found', { subreddit })
})

app.listen(port, () => { // server deploy on port and start listening
   console.log(`ON PORT ${port}`);
})
