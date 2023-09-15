const express = require('express');
const app = express();
const port = 3000;
const session = require('express-session');

const config = {
    secret: 'AOSKDoAKDOKDO',
    resave: false,
    saveUninitialized: true
}
app.use(session(config));

app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`VIEW COUNT PAGE ${req.session.count} times`)
})

app.listen(port, () => {
    console.log(`LISTENING TO PORT ${port}`);
})