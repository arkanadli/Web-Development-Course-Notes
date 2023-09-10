const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('ALL DOGS')
})


router.post('/', (req, res) => {
    res.send('UPLOAD DOGS')
})
router.get('/:id', (req, res) => {
    res.send('VIEWING ONE DOGS')
})

router.get('/:id/edit', (req, res) => {
    res.send('EDTING ONE DOGS')
})

module.exports = router;