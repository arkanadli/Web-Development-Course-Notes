const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    res.send("You're not an Admin")
})

router.get('/secret', (req, res) => {
    res.send('THIS IS TOP SECRET')
})

module.exports = router;