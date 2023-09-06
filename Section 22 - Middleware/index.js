const express = require('express')
const port = 3000;
const app = express();
const morgan = require('morgan') // commonly used middleware add-ons

app.use(morgan('tiny')) // it will return log everytime request called

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF')
})

app.listen(port, () => {
    console.log(`LISTENING TO PORT ${port}`);
})