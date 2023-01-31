const express = require('express');
const router = express.Router();

router.get('/notes/add', (req, res) => {
    const error = []
    res.render('./partials/notes/new-note');
});

router.post('/notes/new-note', (req, res) => {
    const { title, description } = req.body;
    const errors = [];
    console.log(title, description);
    if (!title) {
        errors.push('Please write a title');
    }
    if (!description) {
        errors.push('Please add a descrition');
    }
    if (errors.length > 0) {
        res.render('./partials/notes/new-note', {
            errors,
            title,
            description
        });
    } else {
        res.send('Ok');
    }
});



module.exports = router;