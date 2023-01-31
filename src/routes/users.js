const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res) => {
    res.render('./partials/users/signin');
});

router.get('/users/signup', (req, res) => {
    res.render('./partials/users/signup');
});

module.exports = router;