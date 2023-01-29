const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res) => {
    res.send('Ingresando Hurra!!!');
});

router.get('/users/signup', (req, res) => {
    res.send('Registrando Hurra!!!');
});

module.exports = router;