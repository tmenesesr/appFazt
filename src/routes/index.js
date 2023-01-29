const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hurra!!!');
});

router.get('/about', (req, res) => {
    res.send('About Hurra!!!');
});

module.exports = router;