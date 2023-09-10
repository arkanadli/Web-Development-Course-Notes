const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('ALL SHELTERS')
})

router.post('/', (req, res) => {
    res.send('UPLOAD SHELTERS')
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`VIEWING ID :${id}`)
})

module.exports = router