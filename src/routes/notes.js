const express = require('express');
const router = express.Router();

router.get('/notes/all', (req, res) => {
    res.render('./partials/notes/all');
});

module.exports = router;