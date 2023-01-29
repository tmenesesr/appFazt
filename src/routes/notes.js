const express = require('express');
const router = express.Router();

router.get('/notes/all', (req, res) => {
    res.send('Mostrando todas las notas Hurra!!!');
});

module.exports = router;